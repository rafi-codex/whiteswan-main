import Image from "next/image";
import { IMemberProps } from "./member";

const HeaderTeamMember = ({ member }: IMemberProps) => {
  return (
    <section className="flex relative top-0 flex-col justify-center gap-4  h-screen text-white z-0">
      <Image
        src={member.imgSrc}
        alt={member.title}
        width={1200}
        height={600}
        className="absolute bg-royalblue w-full h-full -z-10 left-0 top-0 filter brightness-[.3] object-cover md:object-contain object-center"
      />
      <div className="section-container">
        <h1 data-aos="fade" data-aos-delay="300" className="text-balance mb-2">
          {member.title}
        </h1>
        <div
          style={
            {
              "--size": "150px",
            } as React.CSSProperties
          }
          className="bg-royalblue h-3 w-0 animate-width-100 max-w-[150px]"
        />
        <h5 data-aos="fade" data-aos-delay="600" className="text-balance font-normal mt-2">
          {member.designation}
        </h5>
      </div>
    </section>
  );
};

export default HeaderTeamMember;
