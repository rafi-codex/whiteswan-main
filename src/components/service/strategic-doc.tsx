import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import CalendlyEmbed from "../calendly";

const animations = ["fade-right", "fade-up", "fade-left"];

const StrategicDoc = () => {
  return (
    <section className="flex flex-col relative items-center text-white gap-6 px-4 py-24 text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full -z-10 left-0 top-0 filter brightness-[.3] object-cover"
      >
        <source src="/videos/service-strategic.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full -z-0 left-0 top-0" />
      <div className="section-container">
        <h2 data-aos="fade-up">Strategic Documentation</h2>
        <p data-aos="fade-up" className="text-center mt-5">
          We create engaging pitch decks that clearly present your value
          proposition, market opportunities, and financial projections to
          attract investors. Our business plans outline your strategic vision,
          market analysis, and growth strategies, while our pro forma/financials
          offer accurate financial forecasts to support your growth planning and
          funding needs.
        </p>
        <div className="flex flex-wrap justify-center sm:p-8 overflow-hidden">
          {[
            {
              imgSrc: "/svgs/pitch-deck.svg",
              title: "Pitch Deck",
              description:
                "We create engaging pitch decks that clearly present your value proposition, market opportunities, and financial projections to attract investors.",
            },
            {
              imgSrc: "/svgs/business.svg",
              title: "Business Plans",
              description:
                "Our business plans outline your strategic vision, market analysis, and growth strategies, serving as a comprehensive guide for your company’s success.",
            },
            {
              imgSrc: "/svgs/pro-forma.svg",
              title: "Pro Forma",
              description:
                "We provide accurate financial forecasts, including projected income statements, balance sheets, and cash flow statements, to support your growth planning and funding needs.",
            },
          ].map(({ imgSrc, title, description }, index) => (
            <div
              key={index}
              className="md:basis-1/2 p-4 lg:basis-1/3 min-h-[320px]"
              data-aos={animations[index]}
            >
              <Card
                key={index}
                className="h-full text-white gap-4 py-8 shadow-none border-none bg-white/30"
              >
                <CardContent className="flex flex-col items-center aspect-video gap-4 justify-between py-6 px-8">
                  <Image src={imgSrc} alt={title} width={50} height={50} />
                  <div className="flex flex-col gap-2">
                    <h5 className="font-bold">{title}</h5>
                    <p className="text-sm sm:text-lg text-balance">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <CalendlyEmbed>
          <Button data-aos="fade-up" size={"lg"} className="w-fit mx-auto">
            Contact Us
          </Button>
        </CalendlyEmbed>
      </div>
    </section>
  );
};

export default StrategicDoc;
