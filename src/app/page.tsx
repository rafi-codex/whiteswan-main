"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  LOGO_PATH,
  SITE_METRICS,
  HERO_COPY,
  WHICH_ONE_TILES,
  LANE_BOXES,
  TRACK_RECORD,
  HOW_IT_WORKS,
  FORM_1A_TRANSITION_ENDING,
} from "@/constants";

export default function Home() {
  const [openBoxes, setOpenBoxes] = useState<Record<string, boolean>>({
    "lane-space": true,
    "lane-energy": true,
    "lane-trades": true,
  });

  const [carouselPage, setCarouselPage] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  const boxRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselPage((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTileClick = (id: string) => {
    setOpenBoxes((prev) => ({
      ...prev,
      [id]: true,
    }));

    setTimeout(() => {
      const el = boxRefs.current[id];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const toggleBox = (id: string) => {
    setOpenBoxes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-[#0c131c] text-white font-sans antialiased">
      {/* MENU BAR: 52px logo left of White Swan Advisors */}
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
            <Link href="/services" className="hover:text-white transition">
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

      <main>
        {/* SECTION 1: HERO */}
        <section className="relative overflow-hidden bg-[#161f29] pt-14 pb-20 border-b border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          >
            <source src="/videos/american-cities.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#161f29]/80 via-[#161f29]/85 to-[#0c131c]" />

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              {/* Left Column */}
              <div className="lg:col-span-7 pt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300 font-medium mb-4">
                  {HERO_COPY.eyebrow}
                </p>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
                  {HERO_COPY.headline}
                </h1>
                <div className="w-20 h-1 bg-[#2b5c8f] mb-6" />
                <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-4">
                  {HERO_COPY.subheadline}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl mb-8">
                  {HERO_COPY.sellingLine}
                </p>

                <div>
                  <button
                    onClick={() => setContactOpen(true)}
                    className="inline-block bg-white text-[#0c131c] hover:bg-slate-100 font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-4 rounded transition cursor-pointer"
                  >
                    {HERO_COPY.buttonText}
                  </button>
                  <p className="text-xs text-slate-400 mt-3">
                    {HERO_COPY.lineUnderButton}
                  </p>
                </div>
              </div>

              {/* Right Column: 160px Logo above 3 Stat Tiles */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="flex justify-end mb-4">
                  <img
                    src={LOGO_PATH}
                    alt="White Swan Advisors"
                    style={{ width: "160px", height: "160px" }}
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col gap-3.5">
                  <div className="bg-[#1c2632]/90 border border-white/10 rounded p-6">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      {SITE_METRICS.transactionVolume}
                    </div>
                    <div className="text-xs text-slate-400">
                      {SITE_METRICS.transactionVolumeLabel}
                    </div>
                  </div>

                  <div className="bg-[#1c2632]/90 border border-white/10 rounded p-6">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      {SITE_METRICS.experienceYears}
                    </div>
                    <div className="text-xs text-slate-400">
                      {SITE_METRICS.experienceYearsLabel}
                    </div>
                  </div>

                  <div className="bg-[#1c2632]/90 border border-white/10 rounded p-6">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                      {SITE_METRICS.investorNetwork}
                    </div>
                    <div className="text-xs text-slate-400">
                      {SITE_METRICS.investorNetworkLabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: "WHICH ONE ARE YOU?" TILES */}
        <section className="pt-16 pb-10 bg-[#0c131c]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8 flex flex-col items-center">
              <img
                src={LOGO_PATH}
                alt="White Swan Advisors"
                style={{ width: "64px", height: "64px" }}
                className="object-contain mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {WHICH_ONE_TILES.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                {WHICH_ONE_TILES.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {WHICH_ONE_TILES.tiles.map((tile) => (
                <button
                  key={tile.id}
                  onClick={() => handleTileClick(tile.id)}
                  className="text-center bg-[#15202e] hover:bg-[#1c2b3e] border border-[#2b5c8f]/50 hover:border-[#3b82f6] rounded px-6 py-5 transition group cursor-pointer"
                >
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-blue-200 mb-1">
                    {tile.title}
                  </div>
                  <div className="text-xs text-slate-400">{tile.subtitle}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: THREE LANE BOXES */}
        <section className="py-6 bg-[#0c131c]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
            {LANE_BOXES.map((box) => {
              const isOpen = !!openBoxes[box.id];
              return (
                <div
                  key={box.id}
                  id={box.id}
                  ref={(el) => {
                    boxRefs.current[box.id] = el;
                  }}
                  className="scroll-mt-24 bg-[#141d28] border border-white/10 rounded-md p-6 sm:p-8 transition"
                >
                  <div
                    onClick={() => toggleBox(box.id)}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {box.title}
                      </h3>
                      <div className="w-16 h-1 bg-[#2b5c8f] mt-3" />
                    </div>
                  </div>

                  {!isOpen && (
                    <p
                      onClick={() => toggleBox(box.id)}
                      className="mt-4 text-sm text-slate-400 line-clamp-1 cursor-pointer"
                    >
                      {box.teaser}
                    </p>
                  )}

                  {isOpen && (
                    <div className="mt-6">
                      {box.type === "single" ? (
                        <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                          {box.body}
                        </p>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-white mb-3">
                              {box.leftColumn.title}
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {box.leftColumn.body}
                            </p>
                            {box.leftColumn.smallPrint && (
                              <p className="text-[11px] text-slate-500 mt-4 leading-normal">
                                {box.leftColumn.smallPrint}
                              </p>
                            )}
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-white mb-3">
                              {box.rightColumn.title}
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {box.rightColumn.body}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: BOOK A SESSION BUTTON */}
        <section className="pt-6 pb-16 bg-[#0c131c] text-center">
          <button
            onClick={() => setContactOpen(true)}
            className="inline-block bg-white text-[#0c131c] hover:bg-slate-100 font-semibold text-sm px-10 py-3.5 rounded transition cursor-pointer"
          >
            Book a Session
          </button>
        </section>

        {/* SECTION 5: RECENT TRACK RECORD */}
        <section className="py-20 bg-white text-[#0c131c]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-start justify-between gap-6 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-[#0c131c] mb-3">
                  {TRACK_RECORD.heading}
                </h2>
                <div className="w-16 h-1 bg-[#2b5c8f] mb-4" />
                <p className="text-sm text-slate-600">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {TRACK_RECORD.deals.map((deal) => (
                <div
                  key={deal.company}
                  className="border border-slate-200 rounded p-5 bg-white shadow-sm flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      {deal.type}
                    </div>
                    <div className="text-base font-bold text-[#0c131c] mb-2">
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

            <div className="flex justify-center items-center gap-3 mt-8">
              <button
                onClick={() => setCarouselPage((prev) => (prev === 0 ? 1 : 0))}
                aria-label="Previous deals"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                &#8249;
              </button>
              <button
                onClick={() => setCarouselPage((prev) => (prev === 1 ? 0 : 1))}
                aria-label="Next deals"
                className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                &#8250;
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 6: HOW IT WORKS (NO LOGO) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 bg-[#0c131c]">
          <div className="lg:col-span-6 p-10 sm:p-16 lg:p-20 flex flex-col justify-center bg-[#090d12]">
            <h2 className="text-3xl sm:text-5xl font-normal text-white leading-[1.15] mb-8">
              {HOW_IT_WORKS.heading}
            </h2>

            <div className="mb-8">
              <button
                onClick={() => setContactOpen(true)}
                className="bg-[#182638] hover:bg-[#22354d] border border-[#2b5c8f]/60 text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-7 py-3.5 rounded transition cursor-pointer"
              >
                {HOW_IT_WORKS.buttonText}
              </button>
              <p className="text-xs text-slate-400 mt-3">
                {HOW_IT_WORKS.smallLineUnderButton}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {HOW_IT_WORKS.smallLineBottomLeft}
            </p>
          </div>

          <div className="lg:col-span-6 relative p-8 sm:p-14 flex flex-col justify-center gap-6 bg-[#1a232e]">
            {/* Card 1: You */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1b314c] border border-blue-400/30 flex items-center justify-center shrink-0 mt-2">
                <svg
                  className="w-5 h-5 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="bg-white text-[#0c131c] rounded-md p-6 shadow-lg flex-1">
                <h3 className="text-base font-bold mb-3">
                  {HOW_IT_WORKS.card1.title}
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc pl-4">
                  {HOW_IT_WORKS.card1.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Us: Everything Else */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1b314c] border border-blue-400/30 flex items-center justify-center shrink-0 mt-2">
                <svg
                  className="w-5 h-5 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="bg-white text-[#0c131c] rounded-md p-6 shadow-lg flex-1">
                <h3 className="text-base font-bold mb-3">
                  {HOW_IT_WORKS.card2.title}
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc pl-4 mb-4">
                  {HOW_IT_WORKS.card2.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p className="text-xs sm:text-sm font-bold text-[#0c131c]">
                  {HOW_IT_WORKS.card2.boldBottomLine}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECTION 7: FOOTER (44px Logo left of White Swan Advisors) */}
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
    </div>
  );
}