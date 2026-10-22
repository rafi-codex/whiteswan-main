"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, UserCheck } from "lucide-react";

function BookSessionContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const company = searchParams.get("company") || "";
  const lane = searchParams.get("lane") || "Capital Advisory";

  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow");
  const [selectedTime, setSelectedTime] = useState<string>("10:00 AM EST");
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [bookingInProgress, setBookingInProgress] = useState<boolean>(false);

  const availableDates = [
    { label: "Tomorrow", detail: "Next available" },
    { label: "Thursday", detail: "2 slots left" },
    { label: "Friday", detail: "4 slots left" },
    { label: "Next Monday", detail: "Open slots" },
  ];

  const availableTimes = [
    "9:00 AM EST",
    "10:00 AM EST",
    "11:30 AM EST",
    "1:00 PM EST",
    "2:30 PM EST",
    "4:00 PM EST",
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingInProgress(true);
    setTimeout(() => {
      setBookingInProgress(false);
      setIsBooked(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#0c131c] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>You&apos;re Qualified</span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-serif mb-4"
          >
            Schedule Your Free 45-Minute Session
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Your answers have been matched with our capital advisory team. Pick a time with a FINRA-licensed investment banker who raises capital in your industry.
          </p>
        </div>

        {isBooked ? (
          <div
            data-aos="zoom-in"
            className="max-w-xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#131b26] border border-emerald-500/30 text-center shadow-2xl space-y-6"
          >
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Session Confirmed!
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Your 45-minute advisory session is booked for{" "}
                <span className="font-semibold text-white">{selectedDate} at {selectedTime}</span>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs sm:text-sm text-slate-300 space-y-2">
              <p>
                <strong className="text-white">Calendar invite & conference link:</strong> Sent to{" "}
                <span className="text-blue-300">{email || "your email"}</span>.
              </p>
              <p>
                <strong className="text-white">Preparation:</strong> Our team is reviewing your responses so the session is immediately focused on your raise.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-md"
            >
              Return to White Swan Advisors
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: What to Expect */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="lg:col-span-5 space-y-6 p-6 sm:p-8 rounded-2xl bg-[#131b26]/80 border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <Image
                  src="/wsa-logo.png"
                  alt="White Swan Advisors"
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain"
                />
                <div>
                  <h3 className="font-bold text-white text-base">White Swan Advisors</h3>
                  <p className="text-xs text-slate-400">Direct Capital Advisory</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  What happens on this call:
                </h4>
                <div className="space-y-3.5 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Direct discussion with a FINRA-licensed investment banker specializing in {lane}.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>45 minutes dedicated entirely to your business and capital structure.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Confidential, institutional feedback on valuation, investor appetite, and round timing.</span>
                  </div>
                </div>
              </div>

              {(name || company) && (
                <div className="pt-4 border-t border-white/10 space-y-1 text-xs text-slate-400">
                  {name && <p><strong className="text-slate-300">Name:</strong> {name}</p>}
                  {company && <p><strong className="text-slate-300">Company:</strong> {company}</p>}
                  {email && <p><strong className="text-slate-300">Email:</strong> {email}</p>}
                </div>
              )}
            </div>

            {/* Right: Booking Form & Slots */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#131b26] border border-white/10 shadow-2xl"
            >
              <form onSubmit={handleBook} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    1. Select a Day
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {availableDates.map((d) => (
                      <button
                        type="button"
                        key={d.label}
                        onClick={() => setSelectedDate(d.label)}
                        className={`p-3 rounded-xl text-left border transition-all ${
                          selectedDate === d.label
                            ? "bg-[#c9a55a]/15 border-[#c9a55a] text-white shadow-md shadow-[#c9a55a]/10 font-semibold"
                            : "bg-[#0c131c]/60 border-white/10 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        <p className="text-sm font-bold text-white">{d.label}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{d.detail}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    2. Select a Time (45 Minutes)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {availableTimes.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 px-3 rounded-xl text-center text-xs sm:text-sm font-semibold border transition-all ${
                          selectedTime === t
                            ? "bg-[#c9a55a] border-[#c9a55a] text-[#0c131c] shadow-md shadow-[#c9a55a]/20"
                            : "bg-[#0c131c]/60 border-white/10 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={bookingInProgress}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-base bg-white text-[#0c131c] border-[0.1875rem] border-[#c9a55a] hover:border-[#dfbb72] hover:bg-royalblue hover:text-white transition-all duration-200 shadow-xl active:scale-[0.99] disabled:opacity-50"
                  >
                    <span>{bookingInProgress ? "Securing Session..." : "Confirm 45-Minute Advisory Session"}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-3">
                    Calendar invite and confirmation will be sent immediately upon confirmation.
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default function BookSessionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0c131c]" />}>
      <BookSessionContent />
    </Suspense>
  );
}
