import Image from "next/image";
import React from "react";

export interface IMemberProps {
  member: {
    id: number;
    imgSrc: string;
    title: string;
    slug: string;
    designation: string;
    description: string[];
  };
}

const Member = ({ member }: IMemberProps) => {
  return (
    <section className="relative top-[-100px] z-10 section-container">
      <div className="max-w-screen-xl mx-auto bg-white flex gap-6 pt-10 md:pt-14 px-6 md:px-10">
        <div className="hidden md:flex md:w-1/4 md:flex-col md:items-center">
          <div className="mb-6">
            <Image
              src={member.imgSrc}
              alt={member.title}
              width={200}
              height={200}
              className="object-cover bg-royalblue rounded-full aspect-square"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h4 data-aos="fade-up" className="font-bold text-center">
              {member.title}
            </h4>
            <h5 data-aos="fade-up" className="underline font-light text-royalblue text-xl text-center">
              {member.designation}
            </h5>
          </div>
        </div>

        <div className="w-full md:w-3/4 flex flex-col gap-4">
          {member.description.map((para, index) => (
            <p
              key={index}
              data-aos="fade-up"
              className={`${index == 0 && "drop-cap"} text-[16px] text-justify leading-6 tracking-wider`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
