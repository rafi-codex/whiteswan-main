"use client";

import React from "react";
import Link from "next/link";
import { LOGO_PATH, TRACK_RECORD } from "@/constants";

export default function TransactionsPage() {
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
            <Link href="/transactions" className="text-white font-semibold transition">
              Transactions
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-20 bg-white text-[#0c131c] flex-1">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#0c131c] mb-3">
                {TRACK_RECORD.heading}
              </h1>
              <div className="w-16 h-1 bg-[#2b5c8f] mb-4" />
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                {TRACK_RECORD.subheading}
              </p>
            </div>
            <img
              src={LOGO_PATH}
              alt="White Swan Advisors"
              style={{ width: "96px", height: "96px" }}
              className="object-contain shrink-0"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRACK_RECORD.deals.map((deal) => (
              <div
                key={deal.company}
                className="border border-slate-200 rounded p-6 bg-white shadow-sm flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    {deal.type}
                  </div>
                  <div className="text-lg font-bold text-[#0c131c] mb-2">
                    {deal.company}
                  </div>
                </div>
                <div
                  className={
                    deal.isDisclosed
                      ? "text-lg font-bold text-[#0c131c]"
                      : "text-xs font-medium text-slate-500"
                  }
                >
                  {deal.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

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