import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export const TRANSACTIONS = [
  {
    imgSrc: "/Finalis.png",
    title: "Broker-Dealer",
    name: "Finalis",
    link: "https://www.finalis.com",
  },
  {
    imgSrc: "/Hart Davidson Carson.png",
    title: "Legal Representation",
    name: "Hart Davidson Carson LLC",
    link: "https://www.hartdavidcarson.com",
  },
  {
    imgSrc: "/Spark Accounting Services.png",
    title: "Accounting Team",
    name: "Spark Accounting Services",
    link: "https://www.sparkaccountingservices.com",
  }
];

const getAOSAnimation = ({ index }: { index: number }): string => {
  const animations = ["fade-right", "fade-up", "fade-left"];

  return animations[index % animations.length];
};

const partner = () => {
  return (
    <section className="flex relative flex-col justify-center gap-4 lg:h-screen text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full -z-10 left-0 top-0 filter brightness-[.3] object-cover object-center"
      >
        <source src="/videos/profile-header.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full -z-0 left-0 top-0" />
      <div className="section-container">
        {/* <h2 data-aos="fade-up" className="pt-20 md:pt-28 lg:pt-0">
          OUR ASSOCIATED PARTNER
        </h2> */}
        <h2
          data-aos="fade-up"
          className="text-center pt-20 md:pt-28 lg:pt-0 mb-5 font-bold text-5xl"
        >
          OUR ASSOCIATED PARTNER
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-14 lg:gap-8 py-8 overflow-x-hidden">
          {TRANSACTIONS.map(({ imgSrc, title, name, link }, index) => (
            <div
              key={index}
              className="md:basis-1/2 basis-full lg:basis-1/3 md:p-4"
              data-aos={getAOSAnimation({ index })}
            >
              <Card
                key={index}
                className="h-full gap-4 shadow-none border-none bg-white hover:scale-105 transition-transform duration-300"
              >
                <a href={link}>
                  <CardContent className="flex flex-col lg:aspect-[16/10] justify-between items-center text-center p-6">
                    <h6 className="font-bold">{title}</h6>
                    <Image
                      src={imgSrc}
                      alt={name}
                      width={200}
                      height={200}
                      className=""
                    />
                    <div className="flex flex-col gap-2">
                      <h5 className="font-bold">{name}</h5>
                    </div>
                  </CardContent>
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default partner;
