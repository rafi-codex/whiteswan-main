"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
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

  const refreshAOS = () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        try {
          AOS.refresh();
        } catch {
          // ignore if AOS not initialized
        }
      }, 350);
    }
  };

  const toggleBox = (lane: keyof LaneBoxState) => {
    setActiveLane(lane);
    setOpenBoxes((prev) => ({
      ...prev,
      [lane]: !prev[lane],
    }));
    refreshAOS();
  };

  const scrollToLane = (lane: keyof LaneBoxState) => {
    setActiveLane(lane);
    // Ensure the targeted box is open
    setOpenBoxes((prev) => ({
      ...prev,
      [lane]: true,
    }));

    // Smooth scroll with fixed navbar height offset (~90px)
    setTimeout(() => {
      const element = document.getElementById(`${lane}-lane`);
      if (element) {
        const navOffset = 90;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navOffset,
          behavior: "smooth",
        });
      }
    }, 60);

    refreshAOS();
  };

  return (
    <section className="relative w-full bg-[#12161f] text-white py-20 lg:py-28 overflow-hidden border-t border-white/5">
      <div className="section-container relative z-10">
        {/* STEP 2: "Which one are you?" tiles */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Centered logo above heading (~64px) */}
          <div data-aos="fade-down" className="mb-5 inline-flex p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg">
            <Image
              src="/wsa-logo-vector.svg"
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
              className={`group flex flex-col justify-center items-center text-center p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-lg cursor-pointer ${
                activeLane === "space"
                  ? "bg-[#202b3d] border-[#4a77aa] ring-1 ring-[#4a77aa]/50 shadow-xl shadow-[#4a77aa]/10"
                  : "bg-[#1c2433] border-[#2d3a4f] hover:bg-[#202b3d] hover:border-[#4a77aa]"
              }`}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 transition-colors group-hover:text-white">
                I&apos;m a space or space-adjacent company
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
              className={`group flex flex-col justify-center items-center text-center p-6 sm:p-7 rounded-2xl border transition-all duration-300 shadow-lg cursor-pointer ${
                activeLane === "energy"
                  ? "bg-[#202b3d] border-[#4a77aa] ring-1 ring-[#4a77aa]/50 shadow-xl shadow-[#4a77aa]/10"
                  : "bg-[#1c2433] border-[#2d3a4f] hover:bg-[#202b3d] hover:border-[#4a77aa]"
              }`}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 transition-colors group-hover:text-white">
                I&apos;m in energy or infrastructure
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                U.S. or international
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
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    !openBoxes.space ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-400 line-clamp-1 leading-relaxed">
                    Investors love the tech and take the meeting. Then you hear it, or it just shows up in an email: &ldquo;Love what you&apos;re doing...&rdquo;
                  </p>
                </div>
              </div>
              <div className="shrink-0 p-2 sm:p-2.5 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all mt-1 sm:mt-0">
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                    openBoxes.space ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Smooth Collapsible Content using CSS Grid */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openBoxes.space ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-10 pt-2 border-t border-white/5">
                  <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed pt-2 font-normal">
                    Investors love the tech and take the meeting. Then you hear it, or it just shows up in an email: &ldquo;Love what you&apos;re doing. Not the right stage. Come back when you have a lead.&rdquo; Plenty of interest, but no checks. And like so many founders tell us, &ldquo;We&apos;re not professional fundraisers. We&apos;re company operators.&rdquo; These are some of the problems we have solved for our partners. Every investor has a buy box. We&apos;ve spoken with 500+ who back space, and we only bring you to the ones who fit. Where debt fits better, we arrange that too. You show up to calls with us and the investors and talk about what makes you great. We do the rest. White-glove service from an experienced team. Our team is FINRA-licensed. Every raise runs under the SEC rules, compliant, clean, and prepared for the next stage of development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2: Energy */}
          <div
            id="energy-lane"
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
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    !openBoxes.energy ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-400 line-clamp-1 leading-relaxed">
                    Raising capital for U.S. energy developers &amp; U.S. capital for international energy platforms...
                  </p>
                </div>
              </div>
              <div className="shrink-0 p-2 sm:p-2.5 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all mt-1 sm:mt-0">
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                    openBoxes.energy ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Smooth Collapsible Content using CSS Grid */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openBoxes.energy ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-10 pt-4 border-t border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-2">
                    {/* Left Column */}
                    <div className="space-y-3 p-5 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        Raising Capital for U.S. Energy Developers
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        You have projects ready to build, but deposits, engineering and interconnection are coming off your own balance sheet. Lenders want equity first. Investors want proof first. Big funds say you don’t fit the box. And the tax-credit clock keeps ticking. You might want capital early, before the banks will look, and you need that first 30% so the debt follows. Or maybe you want to close deals actually knowing you’ll be able to fund them, and the whole time the team wants to keep as much equity as possible. These are some of the problems we have solved for our partners. We raise the equity and debt that gets projects built for EV and fleet charging, battery storage, solar, distributed generation, EV fleet leasing, vehicle conversions, hydropower, oil and gas, sustainable infrastructure, water and waste developers, etc. Our team is FINRA-licensed. Every raise runs under the SEC rules, compliant, clean, and prepared for the next stage of development.
                      </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3 p-5 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        U.S. Capital for International Energy Platforms
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        Capital at home is exhausted or expensive. Your banks don&apos;t cover U.S. investors. And the big funds tell you: &ldquo;Great platform. Too small for our minimum check.&rdquo; Private equity will buy you tomorrow, but not for a minority stake, and you&apos;re not giving up control. We have even been told, &ldquo;We need some advice on how to approach American investors.&rdquo; Or, &ldquo;We’re not professional fundraisers. We’re company operators.&rdquo; We have solved all those problems for our partners, and many more. We raise equity from U.S. family offices, wealth managers and institutions, etc. We help structure the deal so they can and want to invest. We get you in the door with the right U.S. families and funds. We shape the deck and make sure the data room has everything needed. You show up to calls with us and the investors and talk about what makes you great. We do the rest. And the truth is, you probably only need three or four families with $10 million each, not 100 meetings. Our focus is efficiency and outcome, all operated through a licensed and compliant framework with FINRA and the SEC. We’ve also worked with cross-border FINRA organizations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3: Trades */}
          <div
            id="trades-lane"
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
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    !openBoxes.trades ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-400 mt-2 line-clamp-1 leading-relaxed">
                    Growth capital for founder-led businesses &amp; selling your business to private equity...
                  </p>
                </div>
              </div>
              <div className="shrink-0 p-2 sm:p-2.5 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all mt-1 sm:mt-0">
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                    openBoxes.trades ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Smooth Collapsible Content using CSS Grid */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openBoxes.trades ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-10 pt-4 border-t border-white/5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-2">
                    {/* Left Column: Growth Capital */}
                    <div className="space-y-3 p-5 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
                      <h4 className="text-lg sm:text-xl font-bold text-white">
                        Growth Capital for Founder-Led Businesses
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        The bank capped you out, or told you that you don&apos;t fit the box. Maybe there&apos;s another company you want to buy. Maybe a big contract landed faster than your cash can keep up, or you&apos;re slow-playing a backlog you can&apos;t fund yet. Maybe the SBA is tapped out. Maybe you&apos;re paying interest rates that hurt. And every investor or lender says, &ldquo;Sounds great,&rdquo; on the first call. Then, &ldquo;This is not a fit,&rdquo; on the second. Or maybe at this point you&apos;d rather not even bring in equity partners? You just want flexible debt. And like so many owners tell us, &ldquo;We&apos;re not professional fundraisers. We&apos;re company operators.&rdquo; At White Swan, you just give us the info. We take care of it from there. We raise growth equity and financing structured around how you want to grow, not what the bank will allow. You&apos;re not just looking for a better rate. You want better terms, and lenders who keep funding your deal flow, including your next acquisition. We package the business, build the raise and take you to the allocators. All you do is show up and tell them why your company wins. Every deal runs through a FINRA-regulated process, start to finish.
                      </p>
                    </div>

                    {/* Right Column: Selling to Private Equity */}
                    <div className="space-y-4 p-5 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none flex flex-col justify-between">
                      <div className="space-y-3">
                        <h4 className="text-lg sm:text-xl font-bold text-white">
                          Selling Your Business to Private Equity
                        </h4>
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                          Buyers send letters. Brokers call. You still don&apos;t know which buyers are serious, and you&apos;re not giving it away for pennies. We have agreements with private equity firms that want to buy companies like yours. The buyer pays our fee, so finding out costs you NOTHING. No listing, no auction, no word to your employees or customers. Only serious buyers, matched for fit with your team, not just the biggest check, unless that&apos;s what you&apos;re after. There&apos;s no obligation. If the number&apos;s wrong, walk away. You&apos;ll hear directly from serious buyers before you decide anything.
                        </p>
                      </div>
                      {/* Small Print under right column */}
                      <p className="text-xs text-slate-400 italic pt-3 border-t border-white/10 mt-2">
                        Introductions to private equity buyers are provided by White Swan Advisors LLC and are not offered through Finalis Securities LLC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button under the three boxes */}
          <div className="pt-12 sm:pt-16 flex flex-col items-center justify-center text-center space-y-3">
            <Link href="/choice">
              <Button
                variant="white"
                size="lg"
                className="font-bold tracking-wider uppercase px-9 py-4 text-sm sm:text-base border-[0.1875rem] border-[#c9a55a] hover:border-[#dfbb72] shadow-[0_0_20px_rgba(201,165,90,0.5)] hover:shadow-[0_0_30px_rgba(201,165,90,0.75)] hover:scale-[1.02] transition-all cursor-pointer"
              >
                I&apos;M READY TO RAISE
              </Button>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 font-normal">
              We run the raise, you run your company.
            </p>
            <div className="pt-2">
              <Image
                src="/wsa-logo-vector.svg"
                alt="White Swan Advisors Logo"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaneSections;
