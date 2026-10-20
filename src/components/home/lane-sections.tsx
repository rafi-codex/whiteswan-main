"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import CalendlyEmbed from "../calendly";
import { Button } from "../ui/button";

interface LaneBoxState {
  space: boolean;
  energy: boolean;
  trades: boolean;
}

const LaneSections = () => {
  // Default all open or allow toggling
  const [openBoxes, setOpenBoxes] = useState<LaneBoxState>({
    space: true,
    energy: true,
    trades: true,
  });

  const toggleBox = (lane: keyof LaneBoxState) => {
    setOpenBoxes((prev) => ({
      ...prev,
      [lane]: !prev[lane],
    }));
  };

  const scrollToLane = (lane: keyof LaneBoxState) => {
    // Ensure the lane box is open
    setOpenBoxes((prev) => ({
      ...prev,
      [lane]: true,
    }));

    // Scroll with navbar offset
    const element = document.getElementById(`${lane}-lane`);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#0E0E0E] text-white py-24 section-container">
      {/* STEP 2: "Which one are you?" tiles */}
      <div className="flex flex-col items-center text-center mb-16">
        {/* Centered logo above heading (~64px) */}
        <div data-aos="fade-down" className="mb-4">
          <Image
            src="/wsa-logo.svg"
            alt="White Swan Advisors Logo"
            width={64}
            height={64}
            className="w-16 h-16 object-contain drop-shadow-lg"
          />
        </div>

        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
          Which one are you?
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-300 text-base sm:text-lg max-w-xl">
          We do three things, and only three. Pick yours.
        </p>

        {/* Three tiles side by side (stacked on phones) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-10">
          {/* Tile 1: Space */}
          <button
            type="button"
            onClick={() => scrollToLane("space")}
            data-aos="fade-up"
            data-aos-delay="200"
            className="group flex flex-col justify-center items-center text-center p-6 sm:p-7 rounded-xl border border-white/10 bg-[#161D28]/90 hover:bg-[#1a2536] hover:border-royalblue transition-all duration-300 shadow-lg cursor-pointer text-left"
          >
            <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors mb-2">
              I&apos;m a space company
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Raising seed through Series B
            </p>
          </button>

          {/* Tile 2: Energy */}
          <button
            type="button"
            onClick={() => scrollToLane("energy")}
            data-aos="fade-up"
            data-aos-delay="300"
            className="group flex flex-col justify-center items-center text-center p-6 sm:p-7 rounded-xl border border-white/10 bg-[#161D28]/90 hover:bg-[#1a2536] hover:border-royalblue transition-all duration-300 shadow-lg cursor-pointer text-left"
          >
            <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors mb-2">
              I&apos;m an energy transition company
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              EV charging, storage, solar, U.S. or international
            </p>
          </button>

          {/* Tile 3: Trades */}
          <button
            type="button"
            onClick={() => scrollToLane("trades")}
            data-aos="fade-up"
            data-aos-delay="400"
            className="group flex flex-col justify-center items-center text-center p-6 sm:p-7 rounded-xl border border-white/10 bg-[#161D28]/90 hover:bg-[#1a2536] hover:border-royalblue transition-all duration-300 shadow-lg cursor-pointer text-left"
          >
            <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors mb-2">
              I own a trade business
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Looking to sell or grow
            </p>
          </button>
        </div>
      </div>

      {/* STEP 3: Three lane boxes */}
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* Box 1: Space */}
        <div
          id="space-lane"
          data-aos="fade-up"
          className="border border-white/10 rounded-xl bg-[#131b26]/90 overflow-hidden shadow-xl transition-all"
        >
          <button
            type="button"
            onClick={() => toggleBox("space")}
            className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
            aria-expanded={openBoxes.space}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Raising Capital for Space Companies
              </h3>
              {!openBoxes.space && (
                <p className="text-sm text-gray-400 mt-2 line-clamp-1">
                  Investors love the tech and take the meeting. Then you hear it...
                </p>
              )}
            </div>
            <div className="text-gray-400 p-2 rounded-full hover:bg-white/10">
              {openBoxes.space ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>

          {openBoxes.space && (
            <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-white/5">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-4">
                Investors love the tech and take the meeting. Then you hear it, or it just shows up in an email: &ldquo;Love what you&apos;re doing. Not the right stage. Come back when you have a lead.&rdquo; Plenty of interest, but no checks. That&apos;s one of the gaps we close. Every investor has a buy box. We&apos;ve spoken with 500+ who back space, and we only bring you to the ones who fit. Our team is FINRA-licensed, so investors and founders know the process is clean and protected. Where debt fits better, we arrange that too. White-glove service from an experienced team.
              </p>
            </div>
          )}
        </div>

        {/* Box 2: Energy */}
        <div
          id="energy-lane"
          data-aos="fade-up"
          className="border border-white/10 rounded-xl bg-[#131b26]/90 overflow-hidden shadow-xl transition-all"
        >
          <button
            type="button"
            onClick={() => toggleBox("energy")}
            className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
            aria-expanded={openBoxes.energy}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Energy Transition Infrastructure
              </h3>
              {!openBoxes.energy && (
                <p className="text-sm text-gray-400 mt-2 line-clamp-1">
                  U.S. developers & international platforms capital raising...
                </p>
              )}
            </div>
            <div className="text-gray-400 p-2 rounded-full hover:bg-white/10">
              {openBoxes.energy ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>

          {openBoxes.energy && (
            <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {/* Left Column */}
                <div className="space-y-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Raising Capital for U.S. Energy Developers
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    You have projects ready to build, but deposits, engineering and interconnection are coming off your own balance sheet. Lenders want equity first. Investors want proof first. We raise equity for EV and fleet charging, battery storage and solar developers, then line up debt to stretch it further. We&apos;re licensed and regulated, so investors and developers are protected at every step.
                  </p>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    U.S. Capital for International Energy Platforms
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
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
          className="border border-white/10 rounded-xl bg-[#131b26]/90 overflow-hidden shadow-xl transition-all"
        >
          <button
            type="button"
            onClick={() => toggleBox("trades")}
            className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
            aria-expanded={openBoxes.trades}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                For Trade Business Owners
              </h3>
              {!openBoxes.trades && (
                <p className="text-sm text-gray-400 mt-2 line-clamp-1">
                  Selling to private equity or securing growth capital...
                </p>
              )}
            </div>
            <div className="text-gray-400 p-2 rounded-full hover:bg-white/10">
              {openBoxes.trades ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </div>
          </button>

          {openBoxes.trades && (
            <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 border-t border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {/* Left Column */}
                <div className="space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      Selling Your Business to Private Equity
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Buyers send letters. Brokers call. You still don&apos;t know which buyers are serious, and you&apos;re not giving it away for pennies. We have signed agreements with private equity firms that want to buy companies like yours. The buyer pays our fee, so finding out costs you NOTHING. No listing, no auction, no word to your employees or customers. Only serious buyers, chosen for fit with your team, not just the biggest check, unless that&apos;s what you&apos;re after. There&apos;s no obligation. If the number&apos;s wrong, walk away. You&apos;ll hear directly from serious buyers before you decide anything.
                    </p>
                  </div>
                  {/* Small Print under left column */}
                  <p className="text-xs text-gray-400 italic pt-3 border-t border-white/10 mt-2">
                    Introductions to private equity buyers are provided by White Swan Advisors LLC and are not offered through Finalis Securities LLC.
                  </p>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Growth Capital for Founder-Led Businesses
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    The bank capped you out, or told you that you don&apos;t fit the box. Maybe there&apos;s another company you want to buy. Maybe a big contract landed faster than your cash can keep up, or you&apos;re slow-playing a backlog you can&apos;t fund yet. We raise growth equity and financing structured around how you want to grow, not what the bank will allow. Every deal runs through a FINRA-regulated process, start to finish.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Button under the three boxes */}
        <div data-aos="fade-up" className="pt-8 flex justify-center">
          <CalendlyEmbed>
            <Button
              variant="white"
              size="lg"
              className="font-bold tracking-wider px-8 py-4 text-base shadow-lg hover:shadow-royalblue/30"
            >
              Book a Session
            </Button>
          </CalendlyEmbed>
        </div>
      </div>
    </section>
  );
};

export default LaneSections;
