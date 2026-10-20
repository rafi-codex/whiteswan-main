"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

function ChoiceContent() {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const queryPrefix = queryString ? `?${queryString}` : "";

  return (
    <main className="min-h-screen bg-[#0c131c] text-white pt-32 pb-24 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Headline & Subheadline */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif mb-4"
          >
            Which one are you?
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
          >
            Your answers shape your free session, so it&apos;s built around you, not something generic.
          </p>
        </div>

        {/* 3 Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Space */}
          <Link
            data-aos="fade-up"
            data-aos-delay="150"
            href={`/apply/space${queryPrefix}`}
            className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#131b26]/90 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1e2e44]/40 hover:-translate-y-1 cursor-pointer"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-[26px] font-bold text-white leading-snug group-hover:text-blue-100 transition-colors">
                I&apos;m a space founder or operator
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-normal">
                Raising seed through Series B
              </p>
            </div>
            <div className="pt-8 flex items-center text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
              <span>Start questions</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Energy */}
          <Link
            data-aos="fade-up"
            data-aos-delay="250"
            href={`/apply/energy${queryPrefix}`}
            className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#131b26]/90 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1e2e44]/40 hover:-translate-y-1 cursor-pointer"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-[26px] font-bold text-white leading-snug group-hover:text-blue-100 transition-colors">
                I&apos;m an energy developer
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-normal">
                Foreign or domestic
              </p>
            </div>
            <div className="pt-8 flex items-center text-sm font-semibold text-slate-400 group-hover:text-white transition-colors">
              <span>Start questions</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Trades */}
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="relative flex flex-col justify-between p-8 rounded-2xl bg-[#131b26]/90 border border-white/10 transition-all duration-300 hover:border-white/20 shadow-xl"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-[26px] font-bold text-white leading-snug">
                I own a trade business
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-normal">
                Pick one:
              </p>
            </div>

            <div className="pt-8 space-y-3">
              <Link
                href={`/apply/trades-raise${queryPrefix}`}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-sm sm:text-[15px] bg-white text-[#0c131c] hover:bg-slate-100 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-center"
              >
                I want to raise capital
              </Link>
              <Link
                href={`/apply/trades-sell${queryPrefix}`}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-sm sm:text-[15px] bg-[#1a2536] text-white border border-white/20 hover:bg-[#223147] hover:border-white/40 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-center"
              >
                I want to sell
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ChoicePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0c131c]" />}>
      <ChoiceContent />
    </Suspense>
  );
}
