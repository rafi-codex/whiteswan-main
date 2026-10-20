import React from "react";

const HeaderProfile = () => {
  return (
    <section className="flex relative flex-col justify-center gap-4  h-screen text-white">
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
        <h1 data-aos="fade-up" className="">
          OUR PROFILE
        </h1>
      </div>
    </section>
  );
};

export default HeaderProfile;
