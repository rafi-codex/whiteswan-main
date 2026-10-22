"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Briefcase } from "lucide-react";
import { Button } from "../ui/button";

const HowItWorks = () => {
  return (
    <section className="bg-[#0c131c] text-white overflow-hidden py-24 lg:py-32 relative border-t border-white/5">
      <div className="section-container flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading, Button, Subtitle, Bottom note */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h2
              data-aos="fade-right"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
            >
              You Take the Investor Calls. We Do Everything Else.
            </h2>

            <div data-aos="fade-right" data-aos-delay="200" className="pt-2">
              <Link href="/choice">
                <Button
                  variant="white"
                  size="lg"
                  className="font-bold tracking-wider uppercase px-8 py-4 text-sm sm:text-base border border-[#c9a55a] hover:border-[#dfbb72] shadow-[0_0_18px_rgba(201,165,90,0.5)] hover:shadow-[0_0_28px_rgba(201,165,90,0.75)] hover:scale-[1.02] transition-all cursor-pointer"
                >
                  I&apos;M READY TO RAISE
                </Button>
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 font-normal">
                We run the raise, you run your company.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="pt-10">
            <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
              On our fastest equity raise, we went from launch to a term sheet with a lead in 60 days. On debt, it took just 16.
            </p>
          </div>
        </div>

        {/* Right Column: City Photo + Two White Cards */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center py-6">
          {/* Existing city photo behind cards */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden -z-0">
            <Image
              src="/merchant-banking.webp"
              alt="City skyline backdrop"
              fill
              className="object-cover filter brightness-[.25] pointer-events-none"
            />
          </div>

          {/* Cards container */}
          <div className="relative z-10 w-full max-w-lg space-y-6 p-4 sm:p-6">
            {/* Card 1: You */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="relative bg-white text-gray-900 rounded-xl p-6 sm:p-7 shadow-2xl border border-gray-100 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-[#153147] text-white flex items-center justify-center shrink-0 shadow-md">
                <User className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-xl font-bold text-gray-900">You</h4>
                <ul className="space-y-1.5 text-sm sm:text-base text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>Approve the investor materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>Take the investor calls</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Us: Everything Else */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="relative bg-white text-gray-900 rounded-xl p-6 sm:p-7 shadow-2xl border border-gray-100 flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-[#153147] text-white flex items-center justify-center shrink-0 shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-2">
                <h4 className="text-xl font-bold text-gray-900">Us: Everything Else</h4>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>The data room</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>The deck</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>Preparation for investor questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>A curated investor list</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>Every introduction and follow-up</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>Scheduling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>Closing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>SEC filings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#153147] shrink-0" />
                    <span>A report every two weeks</span>
                  </li>
                </ul>

                <p className="text-sm font-bold text-gray-900 pt-3 border-t border-gray-100 mt-3 leading-snug">
                  The goal: a compliant, fully closed round with preparation for the next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
