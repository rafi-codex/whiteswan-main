import React from "react";
import CalendlyEmbed from "../calendly";
import { Button } from "../ui/button";

const HeaderSection = ({ src }: { src: string }) => {
  return (
    <section className="flex relative flex-col justify-center gap-4 h-screen text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full -z-10 left-0 top-0 filter brightness-[.3] object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute w-full h-full -z-0 left-0 top-0" />
      <div className="section-container flex flex-col lg:flex-row gap-1 mt-[40px]">
        <div className="space-y-6 text-white">
          <h1 data-aos="fade" data-aos-delay="300" className="text-balance">
            <div>White Swan </div>
            <div>Advisors</div>
          </h1>
          <div
            style={
              {
                "--size": "150px",
              } as React.CSSProperties
            }
            className="bg-royalblue h-3 w-0 animate-width-100 max-w-[150px]"
          />
          <h5
            data-aos="fade"
            data-aos-delay="600"
            className="text-balance font-normal"
          >
            <div>Capital Advisory for The Lower-Middle Market</div>
          </h5>
          <div>
            <CalendlyEmbed>
              <Button
                variant={"white"}
                size={"lg"}
                className="lg:mt-1"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                Book a Meeting
              </Button>
            </CalendlyEmbed>
          </div>
        </div>
        <div className="lg:w-1/2 bg-transparent flex justify-center items-center relative sm:pt-8 lg:pl-10 xl:pl-40 mt-[30px] sm:mt-0 overflow-x-hidden">
          <h6
            data-aos="fade-left"
            data-aos-delay="1200"
            className="text-balance text-center"
          >
            <div>
              A &apos;White Swan&apos; is a rare, yet predictable event with the
              capacity to shape industries and redefine futures, one that can be
              anticipated through available information and strategic insight,
              making it an extraordinary opportunity for those prepared to act
              decisively. It is a testament to the power of foresight and
              preparation, where visionaries turn potential into groundbreaking
              success.
            </div>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
