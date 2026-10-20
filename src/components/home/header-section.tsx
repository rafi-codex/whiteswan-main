"use client";

import React from "react";
import Image from "next/image";
import CalendlyEmbed from "../calendly";
import { Button } from "../ui/button";

const HeaderSection = ({ src }: { src: string }) => {
  return (
    <section className="flex relative flex-col justify-center min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full -z-10 left-0 top-0 filter brightness-[.25] object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full -z-0 left-0 top-0 bg-black/40" />

      <div className="section-container relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">
        {/* Left Column: Text & CTA */}
        <div className="w-full lg:w-7/12 space-y-6">
          <p
            data-aos="fade-down"
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-300 font-semibold"
          >
            Capital Raising and M&A for Space, Energy and the Trades
          </p>

          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white"
          >
            Ready to Raise Capital?
          </h1>

          <div
            style={
              {
                "--size": "150px",
              } as React.CSSProperties
            }
            className="bg-royalblue h-2.5 w-0 animate-width-100 max-w-[150px]"
          />

          <div data-aos="fade-up" data-aos-delay="400" className="space-y-3 pt-2">
            <h5 className="text-xl sm:text-2xl font-medium text-white leading-snug">
              Space founders. Energy developers. Trade business owners.
            </h5>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
              We find the investors and lenders who fit your raise. Selling a trade business instead?
              We introduce you to private equity buyers, at no cost to you.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="pt-4 space-y-2">
            <CalendlyEmbed>
              <Button
                variant="white"
                size="lg"
                className="font-bold tracking-wider uppercase px-8 py-4 text-sm sm:text-base shadow-lg hover:shadow-royalblue/30"
              >
                I&apos;M READY TO RAISE
              </Button>
            </CalendlyEmbed>
            <p className="text-xs sm:text-sm text-gray-400 font-normal">
              We run the raise, you run your company.
            </p>
          </div>
        </div>

        {/* Right Column: 160px Logo + 3 Stat Tiles */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="w-full lg:w-5/12 flex flex-col items-center lg:items-end gap-6"
        >
          {/* Logo large in top right (about 160px) */}
          <div className="w-full flex justify-center lg:justify-end pb-2">
            <Image
              src="/wsa-logo.svg"
              alt="White Swan Advisors Logo"
              width={160}
              height={160}
              className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[160px] lg:h-[160px] object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* 3 Stat Tiles */}
          <div className="w-full max-w-md space-y-4">
            <div className="bg-[#131b26]/85 border border-white/10 rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                $1B+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 font-normal">
                Aggregate 2025 transaction volume
              </div>
            </div>

            <div className="bg-[#131b26]/85 border border-white/10 rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                31+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 font-normal">
                Years of capital markets experience
              </div>
            </div>

            <div className="bg-[#131b26]/85 border border-white/10 rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                2,755
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 font-normal">
                Investor network
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
