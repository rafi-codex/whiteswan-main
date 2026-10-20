"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOGO_PATH, FORM_1A_TRANSITION_ENDING } from "@/constants";

export default function SiteHeader() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
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
            <button
              onClick={() => setContactOpen(true)}
              className="hover:text-white transition cursor-pointer"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* CONTACT MODAL */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
          <div className="bg-[#131d2a] border border-white/15 rounded-lg max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">
                Which one are you?
              </h3>
              <button
                onClick={() => setContactOpen(false)}
                className="text-slate-400 hover:text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-5">
              Select your lane to connect with {FORM_1A_TRANSITION_ENDING}
            </p>
            <div className="space-y-3">
              <a
                href="/contact"
                className="block w-full text-left bg-[#1c2b3e] hover:bg-[#243750] border border-blue-400/40 rounded p-4 transition"
              >
                <div className="text-sm font-semibold text-white">
                  Space Company (Form 1A)
                </div>
                <div className="text-xs text-slate-400">
                  Raising seed through Series B
                </div>
              </a>

              <div className="block w-full text-left bg-[#151f2c]/60 border border-white/5 rounded p-4 opacity-60 cursor-not-allowed">
                <div className="text-sm font-semibold text-slate-300">
                  Energy Transition Company
                </div>
                <div className="text-xs text-slate-500">
                  EV charging, storage, solar, U.S. or international (Form 2A)
                </div>
              </div>

              <div className="block w-full text-left bg-[#151f2c]/60 border border-white/5 rounded p-4 opacity-60 cursor-not-allowed">
                <div className="text-sm font-semibold text-slate-300">
                  Trade Business Owner (Raise or Sell)
                </div>
                <div className="text-xs text-slate-500">
                  Looking to sell or grow (Form 3A / Sell Form)
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}