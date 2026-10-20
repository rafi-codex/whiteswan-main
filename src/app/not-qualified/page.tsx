"use client";

import React from "react";
import Link from "next/link";
import { LOGO_PATH } from "@/constants";

export default function NotQualifiedPage() {
  return (
    <div className="min-h-screen bg-[#0c131c] text-white font-sans antialiased flex flex-col justify-between">
      <style>{`.old-global-nav, .old-global-footer { display: none !important; }`}</style>

      {/* Top Menu / Header */}
      <header className="sticky top-0 z-40 bg-[#131b24]/95 backdrop-blur border-b border-white/15">
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
          <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm text-slate-300">
            <Link href="/service" className="hover:text-white transition">
              Services
            </Link>
            <Link href="/profile" className="hover:text-white transition">
              Our Profile
            </Link>
            <Link href="/transactions" className="hover:text-white transition">
              Transactions
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        {/* Large Logo above Enrolled Badge */}
        <div className="flex justify-center mb-6">
          <img
            src={LOGO_PATH}
            alt="White Swan Advisors"
            style={{ width: "96px", height: "96px" }}
            className="object-contain"
          />
        </div>

        {/* Badge */}
        <div className="inline-block bg-[#162232] border border-blue-400/30 rounded-full px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-200 mb-6">
          You&apos;re enrolled in the Capital Desk
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.12] mb-6">
          Good news: you&apos;re getting something more valuable than a 45-minute call.
        </h1>

        <div className="w-16 h-1 bg-[#2b5c8f] mx-auto mb-6" />

        {/* Subtitle Paragraph */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Look, our advisors run engagements for companies within a specific window: revenue stage, raise size, and deal type. Based on your answers, you&apos;re either earlier than that window, raising outside our lanes, or operating on a timeline where what you actually need is not an advisor, but direct access to the people writing checks.
        </p>

        <p className="text-sm font-semibold text-white mb-12">
          So, instead, we&apos;re going to give you two things:
        </p>

        {/* Two Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
          {/* Card 1 */}
          <div className="bg-[#141d28] border border-white/10 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs text-slate-500 font-bold mb-2">1</div>
              <h2 className="text-lg font-bold text-white mb-4">
                A FREE seat at our Quarterly Capital Allocator Sessions
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Four times a year, we bring 3–5 active capital allocators — VCs, family offices, PE groups, and incubators — into a room with founders from our community. No pitch competitions. No 10-minute speed dates. Just real conversations and real questions answered by the people deciding where capital goes next quarter.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4">
                This is the room most founders pay thousands to access through demo days and accelerator programs. We run it free for Capital Desk members.
              </p>
            </div>
            <p className="text-xs text-slate-400 mt-6 pt-4 border-t border-white/5">
              The next session is [NEXT SESSION DATE]. Members receive the invite list 7–10 days in advance, including who&apos;s attending, what they&apos;re investing in, and how to come prepared.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#141d28] border border-white/10 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs text-slate-500 font-bold mb-2">2</div>
              <h2 className="text-lg font-bold text-white mb-4">
                The Capital Desk — the only investor list founders actually use
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Every issue tells you:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc pl-4 mb-6">
                <li>Who&apos;s writing checks this month — funds, family offices, PE groups, and incubators</li>
                <li>What stage, sector, and check size each one is targeting right now</li>
                <li>What&apos;s moving in the capital markets that founders need to understand before they pitch</li>
              </ul>
              <p className="text-xs font-bold text-white mb-2">
                Two issues a month. Free.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Most investor lists are scraped, stale, and useless. Ours is built by the same team that places capital for our clients.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Enrollment Confirmation Section (Light Background Section as shown in mock) */}
      <section className="bg-white text-[#0c131c] py-12 px-6 text-center border-t border-slate-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0c131c] mb-3">You&apos;re in.</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
            You&apos;ve automatically been enrolled based on your submission. Your first issue arrives Friday afternoon, and you&apos;ll receive the [NEXT SESSION DATE] session invite as soon as it&apos;s released.
          </p>
          <p className="text-[11px] text-slate-500 mb-4">
            Not for you? You can unsubscribe anytime.
          </p>
          <button
            onClick={() => alert("Unsubscribed successfully.")}
            className="border border-slate-300 hover:border-slate-400 text-slate-700 font-medium text-xs px-6 py-2 rounded transition cursor-pointer bg-white shadow-sm"
          >
            Unsubscribe
          </button>
          <p className="text-[10px] text-slate-400 mt-3">
            The unsubscribe link is also at the bottom of every email.
          </p>
        </div>
      </section>

      {/* Standard Footer */}
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

          <div className="space-y-3 leading-relaxed text-slate-400">
            <p>
              Securities are offered through{" "}
              <a
                href="https://www.finalis.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Finalis Securities LLC
              </a>{" "}
              Member{" "}
              <a
                href="https://www.finra.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                FINRA
              </a>{" "}
              /{" "}
              <a
                href="https://www.sipc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                SIPC
              </a>
              . White Swan Advisors LLC and Finalis Securities LLC are separate,
              unaffiliated entities. Check the background of this firm or its
              investment professionals on{" "}
              <a
                href="https://brokercheck.finra.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                FINRA&apos;s BrokerCheck
              </a>{" "}
              and review the{" "}
              <a
                href="https://www.finalis.com/form-crs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Form CRS
              </a>
              .
            </p>
            <p className="text-slate-500 pt-2">
              &copy; 2026 White Swan Advisors
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}