"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import teamData from "@/data/team.json";

interface PartnerItem {
  label: string;
  name: string;
  logo: string;
  link: string;
}

const PARTNERS: PartnerItem[] = [
  {
    label: "BROKER-DEALER",
    name: "Finalis",
    logo: "/partners/finalis.png",
    link: "https://www.finalis.com/about-us",
  },
  {
    label: "LEGAL REPRESENTATION",
    name: "Hart David Carson LLP",
    logo: "/partners/hart-david-carson.png",
    link: "https://www.hartdavidcarson.com/",
  },
  {
    label: "ACCOUNTING TEAM",
    name: "Spark Accounting Services",
    logo: "/partners/spark.png",
    link: "https://www.sparkaccountingservices.com/about",
  },
];

function ProfileContent() {
  const searchParams = useSearchParams();
  const [selectedSlug, setSelectedSlug] = useState<string | null>("joey-bean");

  useEffect(() => {
    const member = searchParams?.get("member");
    if (member && teamData.some((m) => m.slug === member)) {
      setSelectedSlug(member);
    }
  }, [searchParams]);

  const handleSelectMember = (slug: string) => {
    setSelectedSlug(slug);
    setTimeout(() => {
      const el = document.getElementById("bio-card");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 50);
  };

  const selectedMember = teamData.find((m) => m.slug === selectedSlug);

  return (
    <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
      {/* 1. Header Section: Title, Eyebrow, Subhead & White Button Left, Large WSA Vector Logo Right */}
      <div
        data-aos="fade-down"
        className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 pb-4"
      >
        <div className="max-w-2xl space-y-4">
          <p className="text-[#c9a55a] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase">
            OUR PROFILE
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] font-serif">
            The Team Behind Your Raise
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
            Space founders, energy developers and trade business owners get this team, plus the expert advisors we syndicate in for your round: the investors and lenders who fit your raise, every introduction, and the full process before, during and after close.
          </p>

          <div className="pt-4">
            <Link
              href="/choice"
              className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-white text-[#0c131c] border-[0.1875rem] border-[#c9a55a] hover:border-[#dfbb72] font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_20px_rgba(201,165,90,0.5)] hover:bg-royalblue hover:text-white hover:shadow-[0_0_30px_rgba(201,165,90,0.75)] transition-all duration-200 active:scale-[0.98]"
            >
              I&apos;M READY TO RAISE
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 mt-2.5 font-normal">
              We run the raise, you run your company.
            </p>
          </div>
        </div>

        <div className="shrink-0 self-start md:self-center">
          <Image
            src="/wsa-logo-vector.svg"
            alt="White Swan Advisors Logo"
            width={140}
            height={140}
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* 2. Team Members Section */}
      <section data-aos="fade-up" className="space-y-8">
        <div>
          <h2 className="text-[#c9a55a] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase">
            TEAM MEMBERS
          </h2>
          <div className="h-[1px] bg-[#c9a55a] mt-2.5 mb-1" />
        </div>

        {/* 7-person grid: 3 per row; 7th centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-4">
          {teamData.map((item, index) => {
            const isJoey = item.slug === "joey-bean";
            const isSeventh = index === 6; // Simrin Kapoor centered in 3rd row
            const isSelected = selectedSlug === item.slug;

            return (
              <div
                key={item.id}
                className={`flex flex-col items-center text-center group ${
                  isSeventh ? "md:col-start-2" : ""
                }`}
              >
                {/* Photo with hover effect and gold ring */}
                <div
                  onClick={() => handleSelectMember(item.slug)}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSelectMember(item.slug);
                    }
                  }}
                  aria-label={`View bio of ${item.title}`}
                >
                  <div
                    className={`relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full transition-all duration-300 ease-out overflow-hidden ${
                      isJoey
                        ? "p-1 border-[3px] border-[#c9a55a] shadow-[0_0_20px_rgba(201,165,90,0.35)] group-hover:scale-105"
                        : isSelected
                        ? "p-1 border-2 border-[#c9a55a] shadow-[0_0_15px_rgba(201,165,90,0.35)] group-hover:border-[3px] group-hover:border-[#dfbb72] group-hover:scale-105"
                        : "p-0.5 border border-[#c9a55a]/75 shadow-md group-hover:border-[2.5px] group-hover:border-[#c9a55a] group-hover:shadow-[0_0_18px_rgba(201,165,90,0.45)] group-hover:scale-105"
                    }`}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      width={160}
                      height={160}
                      className="w-full h-full rounded-full object-cover bg-slate-900 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3
                  onClick={() => handleSelectMember(item.slug)}
                  className="text-lg sm:text-xl font-bold text-white font-serif mt-4 cursor-pointer hover:text-[#c9a55a] transition-colors"
                >
                  {item.title}
                </h3>

                {/* Designation in Gold */}
                <p className="text-xs sm:text-sm font-medium text-[#c9a55a] mt-1">
                  {item.designation}
                </p>

                {/* View bio link */}
                <button
                  type="button"
                  onClick={() => handleSelectMember(item.slug)}
                  className="text-xs sm:text-sm text-slate-400 hover:text-white underline underline-offset-4 mt-2 transition-colors cursor-pointer"
                >
                  View bio
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Expanded Bio Card */}
        {selectedMember && (
          <div
            id="bio-card"
            className="relative bg-[#161c24] border border-[#c9a55a]/50 rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-300 mt-10"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedSlug(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close bio"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10">
              {/* Avatar on Left */}
              <div className="shrink-0">
                <div
                  className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-2xl ${
                    selectedMember.slug === "joey-bean"
                      ? "p-1 border-[3px] border-[#c9a55a] shadow-[0_0_25px_rgba(201,165,90,0.4)]"
                      : "p-1 border-2 border-[#c9a55a]/80 shadow-lg"
                  }`}
                >
                  <Image
                    src={selectedMember.imgSrc}
                    alt={selectedMember.title}
                    width={180}
                    height={180}
                    className="w-full h-full rounded-full object-cover bg-slate-900"
                  />
                </div>
              </div>

              {/* Details on Right */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                  {selectedMember.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#c9a55a] mt-1 mb-4">
                  {selectedMember.designation}
                </p>

                <div className="space-y-3.5 text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                  {selectedMember.description.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Small Gold Button at bottom of bio */}
                <div className="pt-6">
                  <Link
                    href="/choice"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a]/10 hover:border-[#dfbb72] text-xs font-semibold tracking-wider uppercase shadow-[0_0_12px_rgba(201,165,90,0.35)] hover:shadow-[0_0_18px_rgba(201,165,90,0.6)] transition-all"
                  >
                    <span>I&apos;M READY TO RAISE</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 3. Associated Partners Section */}
      <section data-aos="fade-up" className="space-y-6 pt-4">
        <div>
          <h2 className="text-[#c9a55a] text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase">
            OUR ASSOCIATED PARTNERS
          </h2>
          <div className="h-[1px] bg-[#c9a55a] mt-2.5 mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARTNERS.map((partner, idx) => (
            <a
              key={idx}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-[#161c24] border border-white/10 rounded-xl p-6 hover:border-[#c9a55a]/60 hover:bg-[#1a222c] transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#c9a55a] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                    {partner.label}
                  </p>
                  <span className="text-slate-400 group-hover:text-[#c9a55a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xs font-bold">
                    ↗
                  </span>
                </div>

                {/* White Logo Container Box so logos display big & clear with true brand colors */}
                <div className="bg-white rounded-lg p-4 my-2 h-28 sm:h-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] shadow-inner">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={90}
                    className="max-h-20 sm:max-h-24 w-auto max-w-[85%] object-contain"
                  />
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#c9a55a] transition-colors">
                  {partner.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <div
        data-aos="fade-up"
        className="flex flex-col items-center text-center pt-8 pb-4 border-t border-white/10"
      >
        <Link
          href="/choice"
          className="inline-block px-10 py-4 rounded-xl bg-white text-[#0c131c] border-[0.1875rem] border-[#c9a55a] hover:border-[#dfbb72] font-bold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_20px_rgba(201,165,90,0.5)] hover:bg-royalblue hover:text-white hover:shadow-[0_0_30px_rgba(201,165,90,0.75)] transition-all duration-200 active:scale-[0.98]"
        >
          I&apos;M READY TO RAISE
        </Link>
        <p className="text-xs sm:text-sm text-slate-400 mt-3 font-normal">
          We run the raise, you run your company.
        </p>
      </div>
    </div>
  );
}

export default function ProfileClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#14181f]" />}>
      <ProfileContent />
    </Suspense>
  );
}
