"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

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
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="relative flex flex-col justify-between p-8 rounded-2xl bg-[#131b26]/90 border border-white/10 transition-all duration-300 hover:border-white/20 shadow-xl"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-[26px] font-bold text-white leading-snug">
                I&apos;m a space founder or operator
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-normal">
                Raising seed through Series B
              </p>
            </div>

            <div className="pt-8 space-y-3">
              <Link
                href={`/apply/space${queryPrefix}`}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-sm sm:text-[15px] bg-white text-[#0c131c] border border-[#c9a55a] shadow-[0_0_15px_rgba(201,165,90,0.45)] hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(201,165,90,0.6)] transition-all duration-200 active:scale-[0.98] text-center"
              >
                I want to raise capital
              </Link>
              {/* Invisible spacer to align buttons perfectly with Trades card */}
              <div
                className="w-full py-3.5 px-4 rounded-xl text-sm sm:text-[15px] invisible pointer-events-none select-none border border-transparent"
                aria-hidden="true"
              >
                &nbsp;
              </div>
            </div>
          </div>

          {/* Card 2: Energy */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="relative flex flex-col justify-between p-8 rounded-2xl bg-[#131b26]/90 border border-white/10 transition-all duration-300 hover:border-white/20 shadow-xl"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-[26px] font-bold text-white leading-snug">
                I&apos;m an energy developer
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-normal">
                Foreign or domestic
              </p>
            </div>

            <div className="pt-8 space-y-3">
              <Link
                href={`/apply/energy${queryPrefix}`}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-sm sm:text-[15px] bg-white text-[#0c131c] border border-[#c9a55a] shadow-[0_0_15px_rgba(201,165,90,0.45)] hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(201,165,90,0.6)] transition-all duration-200 active:scale-[0.98] text-center"
              >
                I want to raise capital
              </Link>
              {/* Invisible spacer to align buttons perfectly with Trades card */}
              <div
                className="w-full py-3.5 px-4 rounded-xl text-sm sm:text-[15px] invisible pointer-events-none select-none border border-transparent"
                aria-hidden="true"
              >
                &nbsp;
              </div>
            </div>
          </div>

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
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-sm sm:text-[15px] bg-white text-[#0c131c] border border-[#c9a55a] shadow-[0_0_15px_rgba(201,165,90,0.45)] hover:bg-slate-100 hover:shadow-[0_0_20px_rgba(201,165,90,0.6)] transition-all duration-200 active:scale-[0.98] text-center"
              >
                I want to raise capital
              </Link>
              <Link
                href={`/apply/trades-sell${queryPrefix}`}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl font-bold text-sm sm:text-[15px] bg-[#1a2536] text-white border border-[#c9a55a] hover:bg-[#223147] hover:border-[#dfbb72] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-center"
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
