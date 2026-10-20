import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { TRANSACTIONS } from "../../../constants";

const getAOSAnimation = ({ index }: { index: number }): string => {
  const animations = ["fade-right", "fade-up", "fade-left"];

  return animations[index % animations.length];
};

const TransactionCards = () => {
  return (
    <section className=" py-24 px-8 sm:px-16 lg:px-32 overflow-x-hidden bg-[#0E0E0E] text-white">
      <div className="section-container flex flex-wrap px-0 overflow-hidden">
        {TRANSACTIONS.slice(0, -1).map(
          ({ imgSrc, title, description }, index) => (
            <div
              key={index}
              className="md:basis-1/2 basis-full lg:basis-1/3 p-4"
              data-aos={getAOSAnimation({ index })}
            >
              <Card
                key={index}
                className="h-full  gap-4 shadow-none border-none bg-white"
              >
                <CardContent className="flex flex-col aspect-[16/10] justify-between p-6">
                  <Image src={imgSrc} alt={title} width={200} height={200} />
                  <div className="flex flex-col gap-2">
                    <h5 className="font-bold">{title}</h5>
                    <p className="text-sm text-gray-400">{description}</p>
                    <p className="text-sm text-gray-400">{`(Done during previous tenure)`}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default TransactionCards;
