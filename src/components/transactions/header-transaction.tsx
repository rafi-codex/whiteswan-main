import React from "react";

const HeaderTransaction = () => {
  return (
    <section className="flex relative flex-col justify-center gap-4 min-h-screen py-24 text-white overflow-hidden bg-[#0c131c]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover filter brightness-[.3] z-0"
      >
        <source src="/videos/transaction-header.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="section-container relative z-10">
        <h1 data-aos="fade" data-aos-delay="300" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          RECENT TRACK RECORD
        </h1>
        <div
          style={
            {
              "--size": "150px",
            } as React.CSSProperties
          }
          className="bg-royalblue h-3 w-0 animate-width-100 max-w-[150px] mt-4 mb-2"
        />
        <h4
          data-aos="fade"
          data-aos-delay="600"
          className="text-balance font-normal mt-6 text-gray-200 text-lg sm:text-xl max-w-2xl leading-relaxed"
        >
          Summary of recent transactions in the private and public
          sectors, equity raises, debt raises, M&A advisory.
        </h4>
      </div>
    </section>
  );
};

export default HeaderTransaction;
