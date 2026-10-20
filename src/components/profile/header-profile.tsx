import React from "react";

const HeaderProfile = () => {
  return (
    <section className="flex relative flex-col justify-center gap-4 h-screen text-white overflow-hidden bg-[#0c131c]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover filter brightness-[.3] z-0"
      >
        <source src="/videos/profile-header.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="section-container relative z-10">
        <h1 data-aos="fade-up" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          OUR PROFILE
        </h1>
      </div>
    </section>
  );
};

export default HeaderProfile;
