"use client";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "@/app/assets/background/Animation - 1701930253712.json";
import PremiumExtract from "@/app/assets/pic1.png";
import MarinePremium from "@/app/assets/marine1.png";
import B2G from "@/app/assets/b2gProduct/B2Greene.png";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const LYSIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section>
      <div className="relative">
        <div className="hero mt-20 h-[600px] rounded-3xl bg-base-100 transition-opacity duration-300 ease-in-out md:h-[800px]">
          <div className="absolute inset-0 z-10 mt-5 text-center md:mt-0">
            <h2 className="my-5 text-3xl font-bold sm:text-5xl">LYS, </h2>
            <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
              By B2Greene.{" "}
            </h2>
            <p className="sm:text-md mb-6 text-sm">
              Give a little health magic.
            </p>
          </div>

          <div className="hero-content z-10 w-2/3 flex-row" data-aos="fade-up">
            <Image
              src={PremiumExtract.src}
              alt="PremiumExtract"
              className="mt-52 md:mt-72 md:h-auto md:max-w-full"
              width={400}
              height={400}
            />
            <Image
              src={MarinePremium.src}
              alt="PremiumExtract"
              className="-ml-32 mt-52 md:-ml-40 md:mt-72 md:h-auto md:max-w-full"
              width={400}
              height={400}
            />
            <Image
              src={B2G.src}
              alt="PremiumExtract"
              className="-ml-44 mt-52 md:-ml-72 md:mt-72 md:h-auto md:max-w-full"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="absolute inset-0 z-0 mt-5 md:mt-28">
          <Lottie
            loop={false}
            animationData={animationData}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LYSIntro;
