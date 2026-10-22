"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_TRACK_RECORD } from "@/../constants";

const TrackRecord = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Auto-slide functionality: "Cards slide by automatically, with left and right arrows to move them by hand"
    const interval = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="bg-white py-24 text-black border-t border-gray-100">
      <div className="section-container">
        {/* Header with Heading on left and 96px Logo on right */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <div>
            <h2 data-aos="fade-right" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Recent Track Record
            </h2>
            <div className="bg-[#4a77aa] h-2 w-32 mt-3 mb-4 rounded-full" />
            <p data-aos="fade-up" className="text-gray-600 text-sm sm:text-base font-normal max-w-2xl">
              Equity and debt advisory across space, energy transition and growth companies.
            </p>
          </div>

          {/* Logo in top right corner of white section (about 96px) */}
          <div data-aos="fade-left" className="self-end sm:self-center shrink-0">
            <Image
              src="/wsa-logo-vector.svg"
              alt="White Swan Advisors Logo"
              width={96}
              height={96}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Carousel containing 8 cards */}
        <div className="relative mt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {HOME_TRACK_RECORD.map((card, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-4 min-w-0"
                >
                  {card.logo ? (
                    <Link
                      href="/transactions"
                      className="block h-full group"
                    >
                      <div className="h-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm group-hover:border-[#c9a55a] group-hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[210px]">
                        <div>
                          <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase block leading-tight">
                            {card.type}
                          </span>
                          <div className="h-12 flex items-center justify-start mt-4">
                            <Image
                              src={card.logo}
                              alt={card.company}
                              width={180}
                              height={44}
                              className="max-h-10 w-auto max-w-[170px] object-contain object-left group-hover:scale-105 transition-transform"
                            />
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 mt-4">
                          <span className="text-2xl font-bold text-[#153147]">
                            {card.amount}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="block h-full">
                      <div className="h-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm transition-all duration-300 flex flex-col justify-between min-h-[210px]">
                        <div>
                          <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase block leading-tight">
                            {card.type}
                          </span>
                          <div className="h-12 flex items-center justify-start mt-4">
                            <h4 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                              {card.company}
                            </h4>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 mt-4">
                          <span className="text-2xl font-bold text-[#153147]">
                            {card.amount}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Left and Right Manual Control Arrows */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="p-2.5 rounded-full border border-gray-300 hover:border-royalblue hover:bg-royalblue hover:text-white transition-all text-gray-700 bg-white shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="p-2.5 rounded-full border border-gray-300 hover:border-royalblue hover:bg-royalblue hover:text-white transition-all text-gray-700 bg-white shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
