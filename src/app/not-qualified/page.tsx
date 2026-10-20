"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOGO_PATH } from "@/constants";

export default function NotQualifiedPage() {
  const [unsubscribed, setUnsubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-[#141c24] text-white font-sans antialiased flex flex-col">
      {/* Menu Bar with 52px Logo */}
      <header className="sticky top-0 z-40 bg-[#131b24]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3.5">
            <img
              src={LOGO_PATH}
              alt="White Swan Advisors"
              style={{ width: "52px", height: "52px" }}
              className="object-contain shrink-0"
            />
            <span className="text-white font-serif font-semibold tracking-tight text-lg sm:text-xl">
              White Swan Advisors
            </span>
          </Link>
        </div>
      </header>

      {/* Top Dark Section */}
      <section className="py-16 sm:py-20 px-6 bg-[#161f28] border-b border-white/5">
        <div className="max-w-2xl mx-auto">
          <img
            src={LOGO_PATH}
            alt="White Swan Advisors"
            style={{ width: "112px", height: "112px" }}
            className="object-contain mb-6"
          />

          <div className="inline-block bg-[#182638] border border-[#2b5c8f]/60 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[11px] uppercase tracking-[0.14em] text-slate-200 font-semibold">
              YOU&apos;RE ENROLLED IN THE CAPITAL DESK
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Good news: you&apos;re getting something more valuable than a 45-minute call.
          </h1>
          <div className="w-20 h-1 bg-[#2b5c8f] mb-8" />

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Look, our advisors run engagements for companies within a specific window:
            revenue stage, raise size, and deal type. Based on your answers, you&apos;re either
            earlier than that window, raising outside our lanes, or operating on a timeline where
            what you actually need is not an advisor, but direct access to the people writing
            checks.
          </p>
          <p className="text-sm sm:text-base text-white font-bold">
            So, instead, we&apos;re going to give you two things:
          </p>
        </div>
      </section>

      {/* Middle Dark Section: Two Cards */}
      <section className="py-14 px-6 bg-[#0f161e]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#161f29] border border-white/10 rounded-md p-7 sm:p-8 flex flex-col">
            <div className="text-xs text-slate-400 font-medium mb-2">1</div>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug mb-4">
              A FREE seat at our Quarterly Capital Allocator Sessions
            </h2>
            <div className="w-12 h-0.5 bg-[#2b5c8f] mb-5" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Four times a year, we bring 3–5 active capital allocators — VCs,
              family offices, PE groups, and incubators — into a room with
              founders from our community. No pitch competitions. No 10-minute
              speed dates. Just real conversations and real questions
              answered by the people deciding where capital goes next
              quarter.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              This is the room most founders pay thousands to access
              through demo days and accelerator programs. We run it free for
              Capital Desk members.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The next session is [NEXT SESSION DATE]. Members receive
              the invite list 7–10 days in advance, including who&apos;s attending,
              what they&apos;re investing in, and how to come prepared.
            </p>
          </div>

          <div className="bg-[#161f29] border border-white/10 rounded-md p-7 sm:p-8 flex flex-col">
            <div className="text-xs text-slate-400 font-medium mb-2">2</div>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug mb-4">
              The Capital Desk — the only investor list founders actually use
            </h2>
            <div className="w-12 h-0.5 bg-[#2b5c8f] mb-5" />
            <p className="text-xs sm:text-sm text-slate-300 mb-3">
              Every issue tells you:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 list-disc pl-4 mb-5">
              <li>
                Who&apos;s writing checks this month — funds, family offices, PE
                groups, and incubators
              </li>
              <li>
                What stage, sector, and check size each one is targeting right
                now
              </li>
              <li>
                What&apos;s moving in the capital markets that founders need to
                understand before they pitch
              </li>
            </ul>
            <p className="text-xs sm:text-sm font-bold text-white mb-3">
              Two issues a month. Free.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Most investor lists are scraped, stale, and useless. Ours is built
              by the same team that places capital for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom White Section: "You're in." & Unsubscribe */}
      <section className="py-16 px-6 bg-white text-[#0c131c] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c131c] mb-4">
            You&apos;re in.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
            You&apos;ve automatically been enrolled based on your submission. Your first issue arrives Friday afternoon, and
            you&apos;ll receive the [NEXT SESSION DATE] session invite as soon as it&apos;s released.
          </p>

          {!unsubscribed ? (
            <div>
              <p className="text-xs text-slate-500 mb-3">
                Not for you? You can unsubscribe anytime.
              </p>
              <button
                onClick={() => setUnsubscribed(true)}
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-medium px-6 py-2.5 rounded transition mb-3 cursor-pointer"
              >
                Unsubscribe
              </button>
              <p className="text-[11px] text-slate-400">
                The unsubscribe link is also at the bottom of every email.
              </p>
            </div>
          ) : (
            <p className="text-sm text-emerald-600 font-medium">
              You have been unsubscribed from The Capital Desk.
            </p>
          )}
        </div>
      </section>

      {/* Footer with 44px Logo */}
      <footer className="bg-[#0e151d] border-t border-white/10 py-12 px-6 text-slate-400 text-xs">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <img
              src={LOGO_PATH}
              alt="White Swan Advisors"
              style={{ width: "44px", height: "44px" }}
              className="object-contain shrink-0"
            />
            <span className="text-white font-serif font-semibold text-base sm:text-lg">
              White Swan Advisors
            </span>
          </Link>
          <p className="text-slate-500 pt-2">
            &copy; 2026 White Swan Advisors
          </p>
        </div>
      </footer>
    </div>
  );
}