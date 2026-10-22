"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormConfig } from "@/lib/formsData";
import {
  evaluateSpace,
  evaluateEnergy,
  evaluateTradesRaise,
  evaluateTradesSell,
  US_STATES,
  QualificationResult,
  HiddenFields,
} from "@/lib/qualification";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  UploadCloud,
  FileText,
  X,
  AlertCircle,
  Sparkles,
} from "lucide-react";

interface MultiStepFormProps {
  formConfig: FormConfig;
}

export default function MultiStepForm({ formConfig }: MultiStepFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Navigation & Step state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showingTransition, setShowingTransition] = useState<boolean>(false);
  const [currentTransitionMessage, setCurrentTransitionMessage] = useState<string>("");

  // Answers & Contact state
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
  });
  const [prefilledFromUrl, setPrefilledFromUrl] = useState<boolean>(false);
  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);

  // Status & Validation
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Pre-fill from search params on mount
  useEffect(() => {
    const pName = searchParams.get("name") || "";
    const pFirstName = searchParams.get("firstName") || "";
    const pLastName = searchParams.get("lastName") || "";
    const pEmail = searchParams.get("email") || "";
    const pPhone = searchParams.get("phone") || "";
    const pCompany = searchParams.get("company") || searchParams.get("companyName") || "";

    let finalFirst = pFirstName;
    let finalLast = pLastName;
    if (!finalFirst && pName) {
      const parts = pName.trim().split(" ");
      finalFirst = parts[0] || "";
      finalLast = parts.slice(1).join(" ") || "";
    }

    if (finalFirst || finalLast || pEmail || pCompany || pPhone) {
      setContact((prev) => ({
        ...prev,
        firstName: finalFirst || prev.firstName,
        lastName: finalLast || prev.lastName,
        email: pEmail || prev.email,
        phone: pPhone || prev.phone,
        companyName: pCompany || prev.companyName,
      }));
      if (pEmail && (finalFirst || finalLast)) {
        setPrefilledFromUrl(true);
      }
    }
  }, [searchParams]);

  const activePageDef = formConfig.pages.find((p) => p.pageNumber === currentPage);

  // Answer handler
  const handleSelectRadio = (questionId: string, optionValue: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
    setValidationError(null);
  };

  const handleMultiselect = (questionId: string, optionValue: string) => {
    const rawVal = answers[questionId];
    const current: string[] = Array.isArray(rawVal)
      ? rawVal
      : typeof rawVal === "string"
      ? [rawVal]
      : [];
    let updated: string[];

    if (optionValue === "None") {
      updated = ["None"];
    } else {
      const filtered = current.filter((item) => item !== "None");
      if (filtered.includes(optionValue)) {
        updated = filtered.filter((item) => item !== optionValue);
      } else {
        updated = [...filtered, optionValue];
      }
    }

    setAnswers((prev) => ({ ...prev, [questionId]: updated }));
    setValidationError(null);
  };

  const handleDropdownChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setValidationError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPitchDeckFile(e.target.files[0]);
      setAnswers((prev) => ({ ...prev, Q18: e.target.files![0].name }));
    }
  };

  const removeFile = () => {
    setPitchDeckFile(null);
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy["Q18"];
      return copy;
    });
  };

  // Validate current page questions
  const validateCurrentPage = (): boolean => {
    if (!activePageDef) return true;

    for (const q of activePageDef.questions) {
      if (q.required) {
        const val = answers[q.id];
        if (q.type === "multiselect") {
          if (!val || (Array.isArray(val) && val.length === 0)) {
            setValidationError(`Please answer: "${q.title}"`);
            return false;
          }
        } else if (!val || val === "") {
          setValidationError(`Please answer: "${q.title}"`);
          return false;
        }
      }
    }

    // If on final page, validate contact details
    if (currentPage === formConfig.totalPages) {
      if (!contact.firstName.trim()) {
        setValidationError("Please enter your first name.");
        return false;
      }
      if (!contact.lastName.trim()) {
        setValidationError("Please enter your last name.");
        return false;
      }
      if (!contact.email.trim() || !contact.email.includes("@")) {
        setValidationError("Please enter a valid email address.");
        return false;
      }
      if (!contact.companyName.trim()) {
        setValidationError("Please enter your company name.");
        return false;
      }
    }

    setValidationError(null);
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentPage()) return;

    if (activePageDef?.transitionAfter) {
      setCurrentTransitionMessage(activePageDef.transitionAfter.message);
      setShowingTransition(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentPage((prev) => Math.min(formConfig.totalPages, prev + 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDismissTransition = () => {
    setShowingTransition(false);
    setCurrentPage((prev) => Math.min(formConfig.totalPages, prev + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setValidationError(null);
    if (showingTransition) {
      setShowingTransition(false);
    } else if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentPage()) return;

    setIsSubmitting(true);

    try {
      // 1. Evaluate Qualification
      let evalResult: QualificationResult;
      if (formConfig.laneKey === "space") {
        evalResult = evaluateSpace(answers);
      } else if (formConfig.laneKey === "energy") {
        evalResult = evaluateEnergy(answers);
      } else if (formConfig.laneKey === "trades-raise") {
        evalResult = evaluateTradesRaise(answers);
      } else {
        // trades-sell
        evalResult = evaluateTradesSell(answers);
      }

      // 2. Prepare hidden fields
      const source = searchParams.get("source") || "Website";
      const campaign = searchParams.get("campaign") || "";

      const hidden: HiddenFields = {
        source,
        campaign,
        lane: formConfig.laneName,
        path: formConfig.pathName,
      };

      if (formConfig.laneKey === "trades-sell") {
        hidden.sell_result = evalResult.qualified ? "QUALIFIED" : "NOT_QUALIFIED";
        hidden.sell_fail_reason = evalResult.failReason || "";
        hidden.matched_rules = (evalResult.matchedRules || []).join(", ");
        hidden.matched_buyers = (evalResult.matchedBuyers || []).join("; ");
        hidden.match_count = evalResult.matchCount || 0;
        hidden.excluded_firms = (evalResult.excludedFirms || []).join(", ");
      }

      // 3. POST to backend API
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lane: formConfig.laneKey,
            answers,
            contact,
            hidden,
            result: evalResult,
            pitchDeckName: pitchDeckFile ? pitchDeckFile.name : null,
          }),
        });
      } catch (err) {
        console.error("Failed to post lead record:", err);
      }

      // 4. Route based on qualification
      if (evalResult.qualified) {
        const query = new URLSearchParams({
          lane: formConfig.laneName,
          name: `${contact.firstName} ${contact.lastName}`.trim(),
          email: contact.email.trim(),
          company: contact.companyName.trim(),
        });
        router.push(`/book-session?${query.toString()}`);
      } else {
        const query = new URLSearchParams({
          lane: formConfig.laneName,
        });
        router.push(`/not-qualified?${query.toString()}`);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setValidationError("An error occurred during submission. Please try again.");
      setIsSubmitting(false);
    }
  };

  const progressPercent = Math.round(
    (currentPage / formConfig.totalPages) * 100
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Top Progress Bar */}
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-400 mb-2">
          <span>
            Step {currentPage} of {formConfig.totalPages}
          </span>
          <span className="text-white font-medium">{formConfig.badge}</span>
        </div>
        <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#c9a55a] via-[#dfbb72] to-[#c9a55a] shadow-[0_0_14px_rgba(201,165,90,0.6)] transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* TRANSITION SCREEN MODAL / VIEW */}
      {showingTransition ? (
        <div
          data-aos="fade-in"
          className="p-8 sm:p-12 rounded-3xl bg-[#131b26] border border-blue-500/30 shadow-2xl space-y-8 text-center"
        >
          <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-inner">
            <Sparkles className="w-8 h-8" />
          </div>

          <div className="space-y-4 max-w-xl mx-auto">
            <p className="text-xl sm:text-2xl font-serif font-medium text-white leading-relaxed">
              &ldquo;{currentTransitionMessage}&rdquo;
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleBack}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-white/20 text-slate-300 hover:text-white hover:border-white/40 text-sm font-semibold transition-all"
            >
              Back to Previous Step
            </button>
            <button
              type="button"
              onClick={handleDismissTransition}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-white text-[#0c131c] hover:bg-slate-100 transition-all duration-200 shadow-xl"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      ) : (
        /* MAIN FORM STEP */
        <div className="space-y-10">
          {/* Step Heading */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
              {activePageDef?.title}
            </h2>
            <p className="text-sm text-slate-400">
              Select an answer for each question below to proceed.
            </p>
          </div>

          {/* Validation Alert */}
          {validationError && (
            <div
              data-aos="shake"
              className="flex items-center gap-3 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-sm shadow-md"
            >
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Questions */}
          <div className="space-y-8">
            {activePageDef?.questions.map((q) => (
              <div
                key={q.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#131b26]/80 border border-white/10 hover:border-white/15 transition-all shadow-md space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {q.title}
                  </h3>
                  {q.required && (
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      Required
                    </span>
                  )}
                </div>

                {/* 1. RADIO / TAP-TO-SELECT */}
                {q.type === "radio" && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt) => {
                      const isSelected = answers[q.id] === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => handleSelectRadio(q.id, opt)}
                          className={`flex items-center justify-between text-left p-3.5 sm:p-4 rounded-xl border text-sm font-medium transition-all duration-150 ${
                            isSelected
                              ? "bg-[#c9a55a]/15 border-2 border-[#c9a55a] text-white shadow-lg shadow-[#c9a55a]/20 font-semibold ring-1 ring-[#c9a55a]/30"
                              : "bg-[#0c131c]/50 border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          <span className="pr-2">{opt}</span>
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                              isSelected
                                ? "border-2 border-[#c9a55a] bg-[#c9a55a] shadow-[0_0_10px_rgba(201,165,90,0.5)]"
                                : "border-2 border-white/20 bg-white/5"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#0c131c] stroke-[3.5]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* 2. DROPDOWN (US STATES) */}
                {q.type === "dropdown" && (
                  <div className="pt-1">
                    <select
                      value={answers[q.id] || ""}
                      onChange={(e) => handleDropdownChange(q.id, e.target.value)}
                      className="w-full bg-[#0c131c] border border-white/20 hover:border-white/30 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a55a] focus:border-[#c9a55a] transition-all cursor-pointer"
                    >
                      <option value="" disabled>
                        Select your state...
                      </option>
                      {US_STATES.map((st) => (
                        <option key={st.code} value={st.code} className="bg-[#0c131c] text-white">
                          {st.name} {st.code !== "OUTSIDE" ? `(${st.code})` : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* 3. MULTISELECT */}
                {q.type === "multiselect" && q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt) => {
                      const rawList = answers[q.id];
                      const selectedList: string[] = Array.isArray(rawList)
                        ? rawList
                        : typeof rawList === "string"
                        ? [rawList]
                        : [];
                      const isSelected = selectedList.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => handleMultiselect(q.id, opt)}
                          className={`flex items-center justify-between text-left p-3.5 sm:p-4 rounded-xl border text-sm font-medium transition-all duration-150 ${
                            isSelected
                              ? "bg-[#c9a55a]/15 border-2 border-[#c9a55a] text-white shadow-lg shadow-[#c9a55a]/20 font-semibold ring-1 ring-[#c9a55a]/30"
                              : "bg-[#0c131c]/50 border-white/10 text-slate-300 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          <span className="pr-2">{opt}</span>
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all ${
                              isSelected
                                ? "border-2 border-[#c9a55a] bg-[#c9a55a] shadow-[0_0_10px_rgba(201,165,90,0.5)]"
                                : "border-2 border-white/20 bg-white/5"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#0c131c] stroke-[3.5]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* 4. FILE UPLOAD */}
                {q.type === "file" && (
                  <div className="pt-1">
                    {pitchDeckFile ? (
                      <div className="flex items-center justify-between p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-white">
                        <div className="flex items-center gap-3">
                          <FileText className="w-6 h-6 text-blue-400" />
                          <div>
                            <p className="text-sm font-semibold">{pitchDeckFile.name}</p>
                            <p className="text-xs text-slate-400">
                              {(pitchDeckFile.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border border-dashed border-white/20 hover:border-blue-400/60 bg-[#0c131c]/40 hover:bg-[#0c131c]/70 cursor-pointer transition-all">
                        <UploadCloud className="w-8 h-8 text-slate-400 mb-2" />
                        <span className="text-sm font-semibold text-white">
                          Click to upload pitch deck
                        </span>
                        <span className="text-xs text-slate-400 mt-1">
                          {q.helperText || "PDF, PPTX up to 50MB"}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.pptx,.ppt,.key,.doc,.docx"
                          onChange={handleFileChange}
                        />
                      </label>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* CONTACT DETAILS (FINAL PAGE) */}
            {currentPage === formConfig.totalPages && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#131b26] border border-blue-500/30 shadow-xl space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                    Contact Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {prefilledFromUrl
                      ? "Pre-filled from your invitation link. Please confirm your details below."
                      : "Enter your information so Joey and the advisory team can review your raise before the session."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact.firstName}
                      onChange={(e) =>
                        setContact((prev) => ({ ...prev, firstName: e.target.value }))
                      }
                      placeholder="Jane"
                      className="w-full bg-[#0c131c] border border-white/15 focus:border-[#c9a55a] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#c9a55a] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact.lastName}
                      onChange={(e) =>
                        setContact((prev) => ({ ...prev, lastName: e.target.value }))
                      }
                      placeholder="Smith"
                      className="w-full bg-[#0c131c] border border-white/15 focus:border-[#c9a55a] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#c9a55a] transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contact.email}
                      onChange={(e) =>
                        setContact((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="jane@company.com"
                      className="w-full bg-[#0c131c] border border-white/15 focus:border-[#c9a55a] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#c9a55a] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contact.phone}
                      onChange={(e) =>
                        setContact((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0c131c] border border-white/15 focus:border-[#c9a55a] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#c9a55a] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contact.companyName}
                      onChange={(e) =>
                        setContact((prev) => ({ ...prev, companyName: e.target.value }))
                      }
                      placeholder="Acme Corp"
                      className="w-full bg-[#0c131c] border border-white/15 focus:border-[#c9a55a] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#c9a55a] transition-all"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            {currentPage > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-slate-300 hover:text-white hover:border-white/40 text-sm font-semibold transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <Link
                href="/choice"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white text-sm font-semibold transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Change Selection</span>
              </Link>
            )}

            {currentPage < formConfig.totalPages ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-white text-[#0c131c] hover:bg-slate-100 transition-all duration-200 shadow-xl active:scale-[0.98]"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-white text-[#0c131c] hover:bg-slate-100 transition-all duration-200 shadow-xl active:scale-[0.98] disabled:opacity-50"
              >
                <span>{isSubmitting ? "Evaluating..." : "Submit & Check Qualification"}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
