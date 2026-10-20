import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FORMS_MAP } from "@/lib/formsData";
import MultiStepForm from "@/components/forms/multi-step-form";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return [
    { lane: "space" },
    { lane: "energy" },
    { lane: "trades-raise" },
    { lane: "trades-sell" },
  ];
}

interface FormPageProps {
  params: {
    lane: string;
  };
}

export default function FormPage({ params }: FormPageProps) {
  const formConfig = FORMS_MAP[params.lane];

  if (!formConfig) {
    redirect("/choice");
  }

  return (
    <main className="min-h-screen bg-[#0c131c] text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top Header & Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/choice"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to choices</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>White Swan Advisors</span>
            <span>•</span>
            <span className="text-white font-medium">{formConfig.laneName}</span>
          </div>
        </div>

        {/* MultiStepForm Engine */}
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-slate-400">Loading form...</div>}>
          <MultiStepForm formConfig={formConfig} />
        </Suspense>
      </div>
    </main>
  );
}
