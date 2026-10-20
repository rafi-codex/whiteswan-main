import HeaderSection from "@/components/home/header-section";
import Customize from "@/components/service/customize";
import MerchantBankingService from "@/components/service/merchant-banking";
import StrategicDoc from "@/components/service/strategic-doc";
import React from "react";

const ServicePage = () => {
  return (
    <main className="">
      <HeaderSection src={"/videos/service-header.mp4"} />
      <MerchantBankingService />
      <Customize />
      <StrategicDoc />
    </main>
  );
};

export default ServicePage;
