//import Canvas from "@/components/Canvas";
import HeroIntro from "@/components/HeroIntro";
import Ingredient from "@/components/OurMissions";
import Event from "@/components/AboutBh";
import Benefit from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import AboutUs from "@/components/AboutUs";
import LYSIntro from "@/components/LYSIntro";
import LYSProducts from "@/components/LYSProducts";
import LYSPromotion from "@/components/LYSPromotion";


export default function Landing() {
  return (
    <div className="max-w-7xl">
      
      <LYSIntro/>
      {/* <LYSPromotion/> */}
      <LYSProducts/>
      <Ingredient />
      <AboutUs/>
      <Testimonial />
      
    </div>
  );
}