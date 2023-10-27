import Canvas from "@/components/Canvas";
import HeroIntro from "@/components/HeroIntro";
import Ingredient from "@/components/Ingredient";
import Event from "@/components/Event";
import Benefit from "@/components/Benefit";
import Testimonial from "@/components/Testimonial";


export default function Landing() {
  return (
    <div className="max-w-7xl">
      
      <HeroIntro />

      <Ingredient />

      <Event />
      <Benefit />
      <Testimonial />
      <div className="max-w-5xl opacity-80">
        <Canvas />
      </div>
    </div>
  );
}