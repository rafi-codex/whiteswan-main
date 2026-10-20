import React from "react";

const HeaderTransaction = () => {
  return (
    <section className="flex relative flex-col justify-center gap-4 min-h-screen py-24 text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full -z-10 left-0 top-0 filter brightness-[.3] object-cover"
      >
        <source src="/videos/transaction-header.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full -z-0 left-0 top-0" />
      <div className="section-container">
        <h1 data-aos="fade" data-aos-delay="300">
          RECENT TRACK RECORD
        </h1>
        <div
          style={
            {
              "--size": "150px",
            } as React.CSSProperties
          }
          className="bg-royalblue h-3 w-0 animate-width-100 max-w-[150px]"
        />
        <h4
          data-aos="fade"
          data-aos-delay="600"
          className="text-balance font-normal mt-6"
        >
          Summary of recent transactions in the private and public
          sectors, equity raises, debt raises, M&A advisory.
        </h4>
        {/* <h6
          data-aos="fade"
          data-aos-delay="600"
          className="text-balance font-normal mt-6"
        >
          Billions raised across diverse industries with a focus on
          transformational sectors including renewable energy, sustainable
          energy, biotech, healthcare, pharmaceuticals, AI, data centers, oil
          and gas, fintech, and many more.
        </h6> */}
        {/* <div className="flex flex-wrap gap-5 lg:gap-20 mt-6 content-center">
          <img
            src="/industries/renewable-energy-solar-icon.png"
            alt="Icon 1"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
          <img
            src="/industries/water-turbine-icon.png"
            alt="Icon 2"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
          <img
            src="/industries/biotech.png"
            alt="Icon 3"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
          <img
            src="/industries/hospital-icon.png"
            alt="Icon 4"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
          <img
            src="/industries/pharmaceutical.png"
            alt="Icon 5"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
          <img
            src="/industries/ai.png"
            alt="Icon 6"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
          <img
            src="/industries/data-center.png"
            alt="Icon 7"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
          <img
            src="/industries/oil.png"
            alt="Icon 8"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
          <img
            src="/industries/fintech.png"
            alt="Icon 9"
            className="w-12 h-12 bg-white rounded p-1"
            data-aos="fade"
            data-aos-delay="700"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HeaderTransaction;
