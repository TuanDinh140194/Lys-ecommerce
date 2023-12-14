import AboutB2G from "@/components/b2greenProduct/Aboutb2green";
import Acupuncture from "@/components/b2greenProduct/Acupuncture";
import B2Greene from "@/components/b2greenProduct/B2greenIntro";
import Ingredients from "@/components/b2greenProduct/Ingredients";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "LYS - B2Greene",
    description: "We make you love yourself",
  };

export default function Landing() {
  return (
    <div className="max-w-7xl">
      <B2Greene/>
      <AboutB2G/>
      <Ingredients/>
      <Acupuncture/>
    </div>
  );
}
