"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface HeroVideoConfig {
  src: string;
  startTime: number;
  duration?: number;
  runToEnd?: boolean;
}

const HERO_VIDEOS: HeroVideoConfig[] = [
  {
    src: "/videos/hero/hero-1.mp4",
    startTime: 0,
    duration: 25, // runs from 0 to 25th seconds
  },
  {
    src: "/videos/hero/hero-4.mp4", // Brooklyn Bridge
    startTime: 0,
    duration: 20, // runs from 0 to 20 seconds
  },
  {
    src: "/videos/hero/hero-3.mp4", // Third video
    startTime: 8, // starts at eight seconds
    runToEnd: true, // runs till the end
  },
];

const HeaderSection = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const currentConfig = HERO_VIDEOS[videoIndex];
    const currentEl = videoRefs.current[videoIndex];

    if (currentEl) {
      currentEl.currentTime = currentConfig.startTime;
      currentEl.play().catch(() => {});
    }

    // Pause other non-active videos after 1s crossfade completes
    const pauseTimer = setTimeout(() => {
      videoRefs.current.forEach((el, idx) => {
        if (el && idx !== videoIndex) {
          el.pause();
        }
      });
    }, 1000);

    let advanceTimer: NodeJS.Timeout | null = null;
    if (currentConfig.duration) {
      advanceTimer = setTimeout(() => {
        setVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
      }, currentConfig.duration * 1000);
    }

    return () => {
      clearTimeout(pauseTimer);
      if (advanceTimer) clearTimeout(advanceTimer);
    };
  }, [videoIndex]);

  return (
    <section className="flex relative flex-col justify-center min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 text-white overflow-hidden bg-[#0c131c]">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {HERO_VIDEOS.map((item, idx) => (
          <video
            key={item.src}
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            autoPlay={idx === 0}
            muted
            playsInline
            preload="auto"
            onEnded={() => {
              if (idx === videoIndex && HERO_VIDEOS[idx].runToEnd) {
                setVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
              }
            }}
            onTimeUpdate={(e) => {
              const el = e.currentTarget;
              if (
                idx === videoIndex &&
                HERO_VIDEOS[idx].runToEnd &&
                el.duration &&
                el.currentTime >= el.duration - 0.25
              ) {
                setVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
              }
            }}
            className={cn(
              "absolute inset-0 w-full h-full object-cover filter brightness-[.25] transition-opacity duration-1000",
              idx === videoIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="section-container relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16">
        {/* Left Column: Text & CTA */}
        <div className="w-full lg:w-7/12 space-y-6">
          <p
            data-aos="fade-down"
            className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-300 font-semibold"
          >
            Capital Raising and M&amp;A for Space, Energy and the Trades
          </p>

          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white font-serif"
          >
            Ready to Raise Capital?
          </h1>

          <div
            style={
              {
                "--size": "150px",
              } as React.CSSProperties
            }
            className="bg-[#4a77aa] h-2.5 w-0 animate-width-100 max-w-[150px] rounded-full"
          />

          <div data-aos="fade-up" data-aos-delay="400" className="space-y-3 pt-2">
            <h5 className="text-xl sm:text-2xl font-medium text-white leading-snug">
              Space founders. Energy developers. Trade business owners.
            </h5>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed font-normal">
              You take the investor calls. We do everything else. Selling a trade business instead? We introduce you to private equity buyers, at no cost to you.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="pt-4 space-y-2">
            <Link href="/choice">
              <Button
                variant="white"
                size="lg"
                className="font-bold tracking-wider uppercase px-8 py-4 text-sm sm:text-base border-[0.1875rem] border-[#c9a55a] hover:border-[#dfbb72] shadow-[0_0_20px_rgba(201,165,90,0.5)] hover:shadow-[0_0_30px_rgba(201,165,90,0.75)] cursor-pointer transition-all duration-200"
              >
                I&apos;M READY TO RAISE
              </Button>
            </Link>
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
              src="/wsa-logo-vector.svg"
              alt="White Swan Advisors Logo"
              width={160}
              height={160}
              className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[160px] lg:h-[160px] object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* 3 Stat Tiles */}
          <div className="w-full max-w-md space-y-4">
            <div className="bg-[#1a2230]/90 border border-[#2b384e] rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                $1B+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 font-normal">
                Aggregate transaction volume
              </div>
            </div>

            <div className="bg-[#1a2230]/90 border border-[#2b384e] rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                31+
              </div>
              <div className="text-xs sm:text-sm text-gray-300 mt-1 font-normal">
                Years of capital markets experience
              </div>
            </div>

            <div className="bg-[#1a2230]/90 border border-[#2b384e] rounded-xl p-5 sm:p-6 backdrop-blur-md shadow-xl transition-transform hover:scale-[1.02]">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                5,000+
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
