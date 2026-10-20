"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useCountUp } from "use-count-up";

const details = [
  {
    title: "1B+",
    description: "In Aggregate Transaction Volume in 2025",
    icon: "/svgs/aggregate.svg",
  },
  {
    title: "31+",
    description: "Years Capital Markets Experience",
    icon: "/svgs/capital.svg",
  },
  {
    title: "2537+",
    description: "And growing investor Rolodex",
    icon: "/svgs/relation.svg",
  },
  // {
  //   title: "100+",
  //   description: "Transactions",
  //   icon: "/svgs/transactions.svg",
  // },
];

const SectionTwoDetails = () => {
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
    <div className="w-full flex flex-wrap ml-50">
      {details.map(({ title, description, icon }, index) => (
        <div
          key={index}
          className="basis-full flex-1 sm:basis-1/2 gap-4 md:basis-1/4 p-3 flex justify-center items-center"
        >
          <div data-aos="zoom-in" className="size-20">
            <Image
              src={icon}
              alt={title}
              width={20}
              height={20}
              className="object-over size-full"
            />
          </div>
          <div
            ref={sectionRef}
            className="text-start flex-1 h-full flex flex-col justify-around"
          >
            <h3 className="font-medium text-royalblue">
              {inView ? (
                <>
                  {index === 0 ? <span>$</span> : null}
                  <CountUp end={parseInt(title.replace(/\D/g, ""))} />
                  <span>{title.replace(/\d/g, "")}</span>
                </>
              ) : null}
            </h3>
            <p data-aos="fade-up" className="text-sm">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CountUp = ({ end }: { end: number }) => {
  const { value } = useCountUp({
    isCounting: true,
    end,
    duration: 1,
  });

  return <span>{value}</span>;
};

export default SectionTwoDetails;
