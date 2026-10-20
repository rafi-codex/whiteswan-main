import React from "react";
import { TrackRecordCarousel } from "./track-record-carousel";

const TrackRecord = () => {
  return (
    <section className="relative flex flex-col justify-center gap-8  py-24 text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute size-full object-cover -z-10 left-0 top-0 filter brightness-[.3]"
      >
        <source src="/videos/trackrecord.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full -z-0 left-0 top-0" />
      <div className="section-container">
        <h2 data-aos="fade-right">Recent Track Record</h2>
        <p data-aos="fade-up" className="">
          Summary of recent transactions completed in the private and public
          sectors, equity raises, debt raises, M&A advisory.
        </p>
        <div data-aos="fade-up" className="px-4 mt-14 md:px-0">
          <TrackRecordCarousel />
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
