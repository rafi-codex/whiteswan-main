import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Capital Desk | White Swan Advisors",
  description: "Exclusive quarterly allocator sessions and investor list for growing companies.",
};

export default function NotQualifiedPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-white pt-28 lg:pt-36">
      {/* Dark Section */}
      <section className="section-container pb-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Logo large above enrolled badge (~140px) */}
          <div data-aos="fade-down" className="mb-6">
            <Image
              src="/wsa-logo.svg"
              alt="White Swan Advisors Logo"
              width={140}
              height={140}
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Enrolled Pill Badge */}
          <div data-aos="fade-up" className="mb-6">
            <span className="inline-block bg-[#152336] text-[#8fbfff] border border-[#233a59] text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full shadow-inner">
              YOU&apos;RE ENROLLED IN THE CAPITAL DESK
            </span>
          </div>

          {/* Headline */}
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4 text-center max-w-3xl"
          >
            Good news: you&apos;re getting something more valuable than a 45-minute call.
          </h1>

          {/* Accent Line */}
          <div className="bg-royalblue h-2 w-28 rounded-full mt-2 mb-8" />

          {/* Intro Description */}
          <div data-aos="fade-up" data-aos-delay="200" className="text-left space-y-4 max-w-3xl text-gray-300">
            <p className="text-sm sm:text-base leading-relaxed">
              Look, our advisors run engagements for companies within a specific window: revenue stage, raise size, and deal type. Based on your answers, you&apos;re either earlier than that window, raising outside our lanes, or operating on a timeline where what you actually need is not an advisor, but direct access to the people writing checks.
            </p>
            <p className="text-base sm:text-lg font-bold text-white pt-2">
              So, instead, we&apos;re going to give you two things:
            </p>
          </div>
        </div>

        {/* Two Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {/* Card 1 */}
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="bg-[#131b26]/90 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <span className="text-gray-400 font-bold text-sm block">1</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                A FREE seat at our Quarterly Capital Allocator Sessions
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Four times a year, we bring 3–5 active capital allocators — VCs, family offices, PE groups, and incubators — into a room with founders from our community. No pitch competitions. No 10-minute speed dates. Just real conversations and real questions answered by the people deciding where capital goes next quarter.
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                This is the room most founders pay thousands to access through demo days and accelerator programs. We run it free for Capital Desk members.
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
                The next session is [NEXT SESSION DATE]. Members receive the invite list 7–10 days in advance, including who&apos;s attending, what they&apos;re investing in, and how to come prepared.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="bg-[#131b26]/90 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <span className="text-gray-400 font-bold text-sm block">2</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                The Capital Desk — the only investor list founders actually use
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Every issue tells you:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300 pl-4 list-disc">
                <li>Who&apos;s writing checks this month — funds, family offices, PE groups, and incubators</li>
                <li>What stage, sector, and check size each one is targeting right now</li>
                <li>What&apos;s moving in the capital markets that founders need to understand before they pitch</li>
              </ul>
              <div className="pt-2">
                <p className="text-base font-bold text-white">
                  Two issues a month. Free.
                </p>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  Most investor lists are scraped, stale, and useless. Ours is built by the same team that places capital for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom White Section: You're in */}
      <section className="bg-white text-black py-20 px-4 text-center border-t border-gray-200">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            You&apos;re in.
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            You&apos;ve automatically been enrolled based on your submission. Your first issue arrives Friday afternoon, and you&apos;ll receive the [NEXT SESSION DATE] session invite as soon as it&apos;s released.
          </p>

          <div className="pt-6 space-y-3">
            <p className="text-xs text-gray-500">
              Not for you? You can unsubscribe anytime.
            </p>
            <Button
              variant="outline"
              size="default"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-black px-6"
            >
              Unsubscribe
            </Button>
            <p className="text-xs text-gray-400">
              The unsubscribe link is also at the bottom of every email.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
