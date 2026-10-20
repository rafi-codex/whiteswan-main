"use client";

import React, { useEffect, useRef, useState } from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { MERCHANT_BANKING } from "../../../constants";
import { cn } from "@/lib/utils";
import CalendlyEmbed from "../calendly";
import { Button } from "../ui/button";

const MerchantBanking = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [inView]);

  return (
    <section className="px-0 pl-0 bg-[#0E0E0E] overflow-hidden">
      <div className="section-container flex flex-col lg:flex-row gap-4">
        <div className="space-y-6 flex-1 py-32 px-8 text-white">
          <h2 data-aos="fade-right">Global Capital Solutions</h2>
          <CalendlyEmbed>
            <Button
              className={cn("w-fit mx-auto", buttonVariants({ size: "lg" }))}
              data-aos="fade-right"
            >
              Book a Session
            </Button>
          </CalendlyEmbed>
          <p data-aos="fade-right" className="text-sm sm:text-lg">
            White Swan Advisors Group provides strategic funding, proprietary
            sources of capital, and management expertise to privately owned,
            small- to middle-market firms to facilitate growth, buyouts, capital
            restructuring, and turnarounds. We form partnerships with existing
            management teams in scalable operating companies, offering proven
            expertise in finance, operations, marketing, and organizational
            development to ensure sustainable growth and profitability.
          </p>
        </div>
        <div className="lg:w-1/2 bg-transparent flex justify-center items-center relative">
          <Image
            src="/merchant-banking.webp"
            alt="Merchant Banking"
            width={800}
            height={500}
            className="size-full object-cover pointer-events-none absolute top-0 left-0 filter brightness-[.3]"
          />
          <div
            ref={sectionRef}
            className="z-10 py-14 space-y-4 flex flex-col ml-10 sm:ml-16 items-start"
          >
            {MERCHANT_BANKING.map((section, index) => (
              <div
                key={index}
                style={
                  {
                    "--size": "75%",
                  } as React.CSSProperties
                }
                data-aos="fade-up"
                className={cn(
                  "space-y-2 relative whitespace-normal sm:whitespace-nowrap bg-white rounded-md py-5 pb-8 w-11/12 sm:w-0",
                  {
                    "sm:animate-spring-width-100": inView,
                  }
                )}
              >
                <Image
                  src={section.icon}
                  alt={section.title}
                  width={50}
                  height={50}
                  className="top-2/3 -translate-y-full -translate-x-1/2 absolute left-0"
                />
                <h6
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="font-bold px-8 sm:px-10"
                >
                  {section.title}
                </h6>
                <ul className="list-disc list-inside relative">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="text-black/40 text-xs sm:text-[1rem] px-8 sm:px-10"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantBanking;
