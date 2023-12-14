import HeroIntro from "@/components/HeroIntro";
import Event from "@/components/AboutBh";
import Benefit from "@/components/Products";


export default function Landing() {
  return (
    <div className="max-w-7xl">
      <HeroIntro />
      <Event />
      <Benefit />
    </div>
  );
}
