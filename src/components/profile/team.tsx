import Image from "next/image";
import teamData from "@/data/team.json";
import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const getAOSAnimation = ({ index }: { index: number }): string => {
  const animations = ["fade-right", "fade-up", "fade-left"];

  return animations[index % animations.length];
};

const Team = () => {
  return (
    <section className="relative py-24 overflow-x-hidden section-container">
      <div className="text-center mb-24">
        <p data-aos="fade-up" className="text-center mb-5 font-bold text-5xl">
          Team Members
        </p>
        {/* <p data-aos="fade-up" className="text-center">
        Experienced, reliable, and innovative,  Proven expertise with a modern edge delivering smart strategies and bold solutions turning your vision into real, measurable results.
        </p> */}
      </div>
      <div className="flex flex-wrap justify-center">
        {teamData.map((item) => (
          <div key={item.id} className={`sm:basis-1/2 md:basis-1/3 basis-full xl:basis-1/3 `}>
            <div className="h-full gap-4 shadow-none border-none bg-white">
              <div className="h-full flex flex-col gap-6 p-2 sm:p-4 md:p-4 text-center items-center">
                <Link href={`/profile/${item.slug}`} className="flex md:justify-start zoom">
                  <div className="relative overflow-hidden group w-[200px] h-[200px] cursor-pointer">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      width={200}
                      height={200}
                      style={{
                        objectPosition: item.slug === "simrin-kapoor" ? "center 18%" : undefined,
                      }}
                      className="object-cover bg-royalblue rounded-full aspect-square"
                      data-aos={getAOSAnimation({ index: item.id })}
                    />
                    {/* <div className="absolute w-[200px] h-[200px] inset-0 opacity-0 zoom rounded-full"></div> */}
                  </div>
                </Link>
                <div className="flex flex-col justify-between gap-2 h-full">
                  <h4 data-aos="fade-up" className="font-bold">
                    {item.title}
                  </h4>
                  <h5 data-aos="fade-up" className="underline font-light text-royalblue text-xl">
                    {item.designation}
                  </h5>
                  <p data-aos="fade-up" className="text-[16px] leading-tight line-clamp-3">
                    {item.description[0]}
                  </p>
                  <Link
                    href={`/profile/${item.slug}`}
                    data-aos="fade-up"
                    className="text-royalblue flex gap-1 items-end font-semibold justify-center"
                  >
                    Read more <ChevronRight className="text-royalblue w-5 h-5 mb-[1px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
