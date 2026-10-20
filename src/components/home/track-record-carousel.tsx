import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { TRANSACTIONS } from "../../../constants";

export function TrackRecordCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full "
    >
      <CarouselContent>
        {TRANSACTIONS.map(({ imgSrc, title, description }, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 cursor-grab active:cursor-grabbing"
          >
            <Link
              href="/transactions"
              aria-label={`View transactions: ${title}`}
              className="block h-full"
            >
              <Card className="aspect-video md:aspect-[16/12] h-full">
                <CardContent className="flex flex-col h-full justify-between p-6">
                  <Image src={imgSrc} alt={title} width={200} height={200} />
                  <div className="flex flex-col gap-2">
                    <h5 className="font-bold truncate">{title}</h5>
                    <p className="text-sm text-gray-400 truncate">{description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots />
    </Carousel>
  );
}
