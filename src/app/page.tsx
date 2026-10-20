import HeaderSection from "@/components/home/header-section";
import LaneSections from "@/components/home/lane-sections";
import TrackRecord from "@/components/home/trackrecord";
import HowItWorks from "@/components/home/how-it-works";

export default function Home() {
  return (
    <main>
      <HeaderSection src={"/videos/homevideo.mp4"} />
      <LaneSections />
      <TrackRecord />
      <HowItWorks />
    </main>
  );
}
