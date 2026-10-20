import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CalendlyEmbed from "../calendly";

const items = [
  {
    text: "Pension Funds",
    icon: "/svgs/pension-funds.svg",
  },
  {
    text: "Endowments",
    icon: "/svgs/endowments.svg",
  },
  {
    text: "Venture Capital",
    icon: "/svgs/venture-capital.svg",
  },
  {
    text: "Debt Funding",
    icon: "/svgs/debt-funding.svg",
  },
  {
    text: "Private Equity",
    icon: "/svgs/private-equity.svg",
  },
  {
    text: "Family Offices",
    icon: "/svgs/family-offices.svg",
  },
  {
    text: "UHNW Individuals",
    icon: "/svgs/uhnw.svg",
  },
].map((item, idx) => ({
  ...item,
  idx,
}));

const getAOSAnimation = ({ index }: { index: number }): string => {
  const animations = {
    "fade-right": [0, 2, 5],
    "fade-left": [1, 4, 6],
    "fade-up": [3],
  };

  const animation = Object.entries(animations).find(([, indexes]) => {
    return indexes.includes(index);
  });
  return animation ? animation[0] : "";
};

const Customize = () => {
  return (
    <div>
      <section className="relative section-container overflow-hidden flex flex-col justify-center gap-12  pt-24 bg-white">
        <h2 data-aos="fade-right" className="text-balance text-center">
          Capital Solutions - The Process to Success
        </h2>

        <h5 data-aos="fade-right" className="text-balance text-center">
          Strategic Expertise. Unparalleled Access. Tailored Results.
        </h5>
        <hr className="border-black" />

        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          {[
            {
              title: "Finalis Broker-Dealer Network",
              description:
                "As a proud partner of Finalis, one of the top broker-dealers in the United States, we provide exclusive access to their network of 640+ investment banks and $68 billion in transactions, with $9 billion+ raised in 2024 alone. This positions your business within one of the most robust capital marketplaces globally, giving you access to the strategic investors you need.",
            },
            {
              title: "Internal Rolodex and Strategic Partners",
              description:
                "Our trusted network includes 2,257+ strategic relationships, encompassing seasoned investors, affiliates, and partners who bring proven expertise in capital allocation and advisory services. These relationships are the cornerstone of our ability to secure meaningful connections for our clients.",
            },
            {
              title: "Retail Capital Market Campaigns",
              description:
                "Every partner benefits from retail campaigns targeting 25,000+ investors, sourced from leading platforms such as PitchBook, Apollo, and FintrX. Our targeted outreach is designed to align with your business goals, ensuring precision in connecting with investors who resonate with your vision.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="border rounded-md py-6 px-8 w-10/12 mx-auto lg:mx-0 lg:w-4/12 space-y-2"
              data-aos={getAOSAnimation({
                index: index,
              })}
            >
              <h4 className="text-xl">{section.title}</h4>
              <div className="h-2 font-medium w-4/12 bg-royalblue" />
              <p className="text-lg">{section.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 py-24 bg-white text-center section-container">
        <h2 data-aos="fade-up">Customize Funding Strategies</h2>
        <p data-aos="fade-up" className="w-10/12">
          We expertly manage financial complexities to secure growth funding,
          optimize assets, and foster key investor relationships across all deal
          types, verticals, and geographic locations. Our expertise in M&A and
          consolidation tactics is aimed at facilitating successful transactions 
          and improved operational efficiency.
        </p>
        <CalendlyEmbed>
          <Button data-aos="fade-up" size={"lg"}>
            Contact Us
          </Button>
        </CalendlyEmbed>

        <h2 data-aos="fade-up" className="mt-14">
          Corporate Finance
        </h2>
        <p data-aos="fade-up" className="w-10/12">
          In this sector, White Swan Advisors is your strategic partner in
          fostering corporate evolution. We offer more than just funding; our
          aim is to drive your business growth while preserving your operational
          autonomy. With careful consideration, we evaluate each potential
          partnership for its long-term benefits and alignment with your vision.
        </p>
        <div className="flex flex-col gap-4 items-center w-full overflow-hidden">
          <div className="flex flex-col w-full justify-center lg:flex-row gap-4">
            {items.slice(0, 2).map(({ text, icon, idx }, index) => (
              <SmallCard
                text={text}
                icon={icon}
                key={index}
                data-aos={getAOSAnimation({
                  index: idx,
                })}
              />
            ))}
          </div>
          <div className="flex flex-col w-full justify-center lg:flex-row gap-4">
            {items.slice(2, 5).map(({ text, icon, idx }, index) => (
              <SmallCard
                text={text}
                icon={icon}
                key={index}
                data-aos={getAOSAnimation({
                  index: idx,
                })}
              />
            ))}
          </div>
          <div className="flex flex-col w-full justify-center lg:flex-row gap-4">
            {items.slice(5, 7).map(({ text, icon, idx }, index) => (
              <SmallCard
                text={text}
                icon={icon}
                key={index}
                data-aos={getAOSAnimation({
                  index: idx,
                })}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

interface SmallCardProps {
  text: string;
  icon: string;
  className?: string;
}

const SmallCard = React.forwardRef<HTMLDivElement, SmallCardProps>(
  ({ text, icon, className, ...props }, ref) => (
    <div
      className={cn(
        "flex items-center gap-6 py-4 px-8 w-full lg:w-[320px] border rounded-xl",
        className
      )}
      ref={ref}
      {...props}
    >
      <Image src={icon} alt={text} width={40} height={40} />
      <p className="text-xl">{text}</p>
    </div>
  )
);

SmallCard.displayName = "SmallCard";

export default Customize;
