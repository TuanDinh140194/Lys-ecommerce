import HeroIntro from "@/components/HeroIntro";
import Event from "@/components/AboutBh";
import Benefit from "@/components/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LYS - BhMed",
  description: "We make you love yourself",
};

export default function Landing() {
  return (
    <div className="max-w-7xl">
      <HeroIntro />
      <Event />
      <Benefit />
    </div>
  );
}
