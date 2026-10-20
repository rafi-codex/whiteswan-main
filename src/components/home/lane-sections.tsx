"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

interface LaneBoxState {
  space: boolean;
  energy: boolean;
  trades: boolean;
}

const LaneSections = () => {
  // Space open by default so visitors immediately see the detailed advisory structure,
  // while Energy and Trades show their title, royal blue accent line, preview teaser, and expand chevron
  const [openBoxes, setOpenBoxes] = useState<LaneBoxState>({
    space: true,
    energy: false,
    trades: false,
  });

  const [activeLane, setActiveLane] = useState<keyof LaneBoxState>("space");

  const toggleBox = (lane: keyof LaneBoxState) => {
    setActiveLane(lane);
    setOpenBoxes((prev) => ({
      ...prev,
      [lane]: !prev[lane],
    }));
  };

  const scrollToLane = (lane: keyof LaneBoxState) => {
    setActiveLane(lane);
    // Ensure the targeted box is open
    setOpenBoxes((prev) => ({
      ...prev,
      [lane]: true,
    }));

    // Allow React state update to apply before scrolling into view
    setTimeout(() => {
      const element = document.getElementById(`${lane}-lane`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 60);
  };

  return (
    <section className="relative w-full bg-[#12161f] text-white py-20 lg:py-28 overflow-hidden border-t border-white/5">
      <div className="section-container relative z-10">
        {/* STEP 2: "Which one are you?" tiles */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Centered logo above heading (~64px) */}
          <div data-aos="fade-down" className="mb-5 inline-flex p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg">
            <Image
              src="/wsa-logo.png"
              alt="White Swan Advisors Logo"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow"
            />
          </div>

          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Which one are you?
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed">
            We do three things, and only three. Pick yours.
          </p>

          {/* Three tiles side by side (stacked on phones) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl mt-8 sm:mt-12">
            {/* Tile 1: Space */}
            <button
              type="button"
              onClick={() => scrollToLane("space")}
              data-aos="fade-up"
              data-aos-delay="200"
              className={`group flex flex-col justify-center items-center text-center p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-lg cursor-pointer ${
                activeLane === "space"
                  ? "bg-[#202b3d] border-[#4a77aa] ring-1 ring-[#4a77aa]/50 shadow-xl shadow-[#4a77aa]/10"
                  : "bg-[#1c2433] border-[#2d3a4f] hover:bg-[#202b3d] hover:border-[#4a77aa]"
              }`}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 transition-colors group-hover:text-white">
                I&apos;m a space company
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Raising seed through Series B
              </p>
              <div
                className={`mt-3 text-xs font-semibold flex items-center gap-1 transition-all ${
                  activeLane === "space"
                    ? "text-[#7ba2d3] opacity-100"
                    : "text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-slate-200"
                }`}
              >
                <span>View lane</span>
                <span className="text-xs">↓</span>
              </div>
            </button>

            {/* Tile 2: Energy */}
            <button
              type="button"
              onClick={() => scrollToLane("energy")}
              data-aos="fade-up"
              data-aos-delay="300"
              className={`group flex flex-col justify-center items-center text-center p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-lg cursor-pointer ${
                activeLane === "energy"
                  ? "bg-[#202b3d] border-[#4a77aa] ring-1 ring-[#4a77aa]/50 shadow-xl shadow-[#4a77aa]/10"
                  : "bg-[#1c2433] border-[#2d3a4f] hover:bg-[#202b3d] hover:border-[#4a77aa]"
              }`}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 transition-colors group-hover:text-white">
                I&apos;m an energy transition company
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                EV charging, storage, solar, U.S. or international
              </p>
              <div
                className={`mt-3 text-xs font-semibold flex items-center gap-1 transition-all ${
                  activeLane === "energy"
                    ? "text-[#7ba2d3] opacity-100"
                    : "text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-slate-200"
                }`}
              >
                <span>View lane</span>
                <span className="text-xs">↓</span>
              </div>
            </button>

            {/* Tile 3: Trades */}
            <button
              type="button"
              onClick={() => scrollToLane("trades")}
              data-aos="fade-up"
              data-aos-delay="400"
              className={`group flex flex-col justify-center items-center text-center p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-lg cursor-pointer ${
                activeLane === "trades"
                  ? "bg-[#202b3d] border-[#4a77aa] ring-1 ring-[#4a77aa]/50 shadow-xl shadow-[#4a77aa]/10"
                  : "bg-[#1c2433] border-[#2d3a4f] hover:bg-[#202b3d] hover:border-[#4a77aa]"
              }`}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 transition-colors group-hover:text-white">
                I own a trade business
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Looking to sell or grow
              </p>
              <div
                className={`mt-3 text-xs font-semibold flex items-center gap-1 transition-all ${
                  activeLane === "trades"
                    ? "text-[#7ba2d3] opacity-100"
                    : "text-slate-400 opacity-60 group-hover:opacity-100 group-hover:text-slate-200"
                }`}
              >
                <span>View lane</span>
                <span className="text-xs">↓</span>
              </div>
            </button>
          </div>
        </div>

        {/* STEP 3: Three lane boxes */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto w-full">
          {/* Box 1: Space */}
          <div
            id="space-lane"
            data-aos="fade-up"
            className={`scroll-mt-24 sm:scroll-mt-28 rounded-2xl border transition-all duration-300 overflow-hidden shadow-xl ${
              activeLane === "space"
                ? "bg-[#1c2433] border-[#4a77aa]/80 ring-1 ring-[#4a77aa]/30"
                : "bg-[#1c2433] border-[#2d3a4f] hover:border-[#3d4f6a]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleBox("space")}
              className="w-full text-left p-6 sm:p-8 lg:p-10 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
              aria-expanded={openBoxes.space}
            >
              <div className="flex-1 pr-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Raising Capital for Space Companies
                </h3>
                <div className="bg-[#4a77aa] h-1.5 w-24 rounded-full mt-3 mb-2" />
                {!openBoxes.space && (
                  <p className="text-sm sm:text-base text-slate-400 mt-2 line-clamp-1 leading-relaxed">
                    Investors love the tech and take the meeting. Then you hear it, or it just shows up in an email: &ldquo;Love what you&apos;re doing...&rdquo;
                  </p>
                )}
              </div>
              <div className="shrink-0 p-2 sm:p-2.5 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all mt-1 sm:mt-0">
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                    openBoxes.space ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openBoxes.space && (
              <div className="px-6 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-10 pt-2 border-t border-white/5">
                <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed pt-2 font-normal">
                  Investors love the tech and take the meeting. Then you hear it, or it just shows up in an email: &ldquo;Love what you&apos;re doing. Not the right stage. Come back when you have a lead.&rdquo; Plenty of interest, but no checks. That&apos;s one of the gaps we close. Every investor has a buy box. We&apos;ve spoken with 500+ who back space, and we only bring you to the ones who fit. Our team is FINRA-licensed, so investors and founders know the process is clean and protected. Where debt fits better, we arrange that too. White-glove service from an experienced team.
                </p>
              </div>
            )}
          </div>

          {/* Box 2: Energy */}
          <div
            id="energy-lane"
            data-aos="fade-up"
            className={`scroll-mt-24 sm:scroll-mt-28 rounded-2xl border transition-all duration-300 overflow-hidden shadow-xl ${
              activeLane === "energy"
                ? "bg-[#1c2433] border-[#4a77aa]/80 ring-1 ring-[#4a77aa]/30"
                : "bg-[#1c2433] border-[#2d3a4f] hover:border-[#3d4f6a]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleBox("energy")}
              className="w-full text-left p-6 sm:p-8 lg:p-10 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
              aria-expanded={openBoxes.energy}
            >
              <div className="flex-1 pr-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  Energy Transition Infrastructure
                </h3>
                <div className="bg-[#4a77aa] h-1.5 w-24 rounded-full mt-3 mb-2" />
                {!openBoxes.energy && (
                  <p className="text-sm sm:text-base text-slate-400 mt-2 line-clamp-1 leading-relaxed">
                    Raising capital for U.S. energy developers &amp; U.S. capital for international energy platforms...
                  </p>
                )}
              </div>
              <div className="shrink-0 p-2 sm:p-2.5 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all mt-1 sm:mt-0">
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                    openBoxes.energy ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openBoxes.energy && (
              <div className="px-6 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-10 pt-4 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-2">
                  {/* Left Column */}
                  <div className="space-y-3 p-5 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      Raising Capital for U.S. Energy Developers
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      You have projects ready to build, but deposits, engineering and interconnection are coming off your own balance sheet. Lenders want equity first. Investors want proof first. We raise equity for EV and fleet charging, battery storage and solar developers, then line up debt to stretch it further. We&apos;re licensed and regulated, so investors and developers are protected at every step.
                    </p>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3 p-5 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      U.S. Capital for International Energy Platforms
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      Capital at home is exhausted or expensive. Your banks don&apos;t cover U.S. investors. And the big funds tell you: &ldquo;Great platform. Too small for our minimum check.&rdquo; We solve that. We raise equity from U.S. family offices, wealth managers and institutions, and structure the deal so they can invest. Every raise runs under SEC rules and FINRA oversight, and we work through the cross-border regulatory complexity so the deal stays clean.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Box 3: Trades */}
          <div
            id="trades-lane"
            data-aos="fade-up"
            className={`scroll-mt-24 sm:scroll-mt-28 rounded-2xl border transition-all duration-300 overflow-hidden shadow-xl ${
              activeLane === "trades"
                ? "bg-[#1c2433] border-[#4a77aa]/80 ring-1 ring-[#4a77aa]/30"
                : "bg-[#1c2433] border-[#2d3a4f] hover:border-[#3d4f6a]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleBox("trades")}
              className="w-full text-left p-6 sm:p-8 lg:p-10 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
              aria-expanded={openBoxes.trades}
            >
              <div className="flex-1 pr-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  For Trade Business Owners
                </h3>
                <div className="bg-[#4a77aa] h-1.5 w-24 rounded-full mt-3 mb-2" />
                {!openBoxes.trades && (
                  <p className="text-sm sm:text-base text-slate-400 mt-2 line-clamp-1 leading-relaxed">
                    Selling your business to private equity &amp; growth capital for founder-led businesses...
                  </p>
                )}
              </div>
              <div className="shrink-0 p-2 sm:p-2.5 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all mt-1 sm:mt-0">
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                    openBoxes.trades ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {openBoxes.trades && (
              <div className="px-6 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-10 pt-4 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-2">
                  {/* Left Column */}
                  <div className="space-y-4 p-5 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        Selling Your Business to Private Equity
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        Buyers send letters. Brokers call. You still don&apos;t know which buyers are serious, and you&apos;re not giving it away for pennies. We have signed agreements with private equity firms that want to buy companies like yours. The buyer pays our fee, so finding out costs you NOTHING. No listing, no auction, no word to your employees or customers. Only serious buyers, chosen for fit with your team, not just the biggest check, unless that&apos;s what you&apos;re after. There&apos;s no obligation. If the number&apos;s wrong, walk away. You&apos;ll hear directly from serious buyers before you decide anything.
                      </p>
                    </div>
                    {/* Small Print under left column */}
                    <p className="text-xs text-slate-400 italic pt-3 border-t border-white/10 mt-2">
                      Introductions to private equity buyers are provided by White Swan Advisors LLC and are not offered through Finalis Securities LLC.
                    </p>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3 p-5 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      Growth Capital for Founder-Led Businesses
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      The bank capped you out, or told you that you don&apos;t fit the box. Maybe there&apos;s another company you want to buy. Maybe a big contract landed faster than your cash can keep up, or you&apos;re slow-playing a backlog you can&apos;t fund yet. We raise growth equity and financing structured around how you want to grow, not what the bank will allow. Every deal runs through a FINRA-regulated process, start to finish.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Button under the three boxes */}
          <div data-aos="fade-up" className="pt-10 sm:pt-14 flex justify-center">
            <Link href="/choice">
              <Button
                variant="white"
                size="lg"
                className="font-bold tracking-wider px-8 sm:px-10 py-4 text-base shadow-xl hover:shadow-[#4a77aa]/30 hover:scale-[1.02] transition-all cursor-pointer"
              >
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaneSections;
