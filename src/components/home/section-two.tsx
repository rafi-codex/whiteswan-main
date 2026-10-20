import React from "react";
import SectionTwoDetails from "./section-two-details";
import { cn } from "@/lib/utils";
import CalendlyEmbed from "../calendly";
import { Button } from "../ui/button";

const animations = ["fade-right", "fade-left"];

const SectionTwo = () => {
  return (
    <section className="relative section-container overflow-hidden flex flex-col justify-center gap-12  py-24 bg-white">
      <h2 data-aos="fade-right" className="text-balance text-center">
        Unified Expertise and Proven Success of <br></br>White Swan, Our Partners, Directors & Advisors
      </h2>
      <hr className="border-black" />
      <SectionTwoDetails />
      <div className="flex flex-col lg:flex-row gap-4 justify-center">
        {[
          {
            title: "Strategic Capital Solutions",
            description:
              "We specialize in bridging the gap between visionary entrepreneurs and the investors who share their vision. By offering tailored capital solutions and strategic introductions, we empower your business to secure the funding that creates the necessary runway for growth.",
          },
          {
            title: "Capital Advisory",
            description:
              "Providing expert guidance and hands-on support to navigate the complexities of securing investment. From deal preparation to investor engagement, we work closely with you to streamline the funding process. Our mission is simple: to connect your business with the right investors, ensuring your success in reaching your financial goals.",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="border rounded-md py-6 px-8 w-10/12 mx-auto lg:mx-0 lg:w-4/12 space-y-2"
            data-aos={animations[index]}
          >
            <h4 className="text-xl">{section.title}</h4>
            <div className="h-2 font-medium w-4/12 bg-royalblue" />
            <p className="text-lg">{section.description}</p>
          </div>
        ))}
      </div>
      <CalendlyEmbed>
        <Button
          size={"lg"}
          className={cn("w-fit mx-auto")}
          data-aos="fade-up"
        >
          Book a Session
        </Button>
      </CalendlyEmbed>
    </section>
  );
};

export default SectionTwo;
