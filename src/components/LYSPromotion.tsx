"use client";

import React from "react";
import Promotion1 from "@/app/assets/lysPromotion/Promotion1.jpg";
import Promotion2 from "@/app/assets/lysPromotion/Promotion2.jpg";
import animationData from "@/app/assets/background/Animation - 1703143535399.json";
import Lottie from "lottie-react";

const LYSPromotion = () => {
  return (
    <section id="products">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
              Soft Opening Promotion
            </h2>
            <p className="mb-6 text-lg sm:text-2xl">Cozy up your holiday.</p>
          </div>

          <div className="absolute right-0 z-10 mt-20 mr-16 w-1/3 md:hidden xl:block xl:w-auto xl:mt-10 xl:mr-64">
            <Lottie
              animationData={animationData}
              style={{
                width: "100%",
                height: "100%",
                top: 0,
                right: 0,
              }}
            />
          </div>
        </div>
        <div className="scroll-smooth" data-aos="fade-up">
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <div
              className="card h-[700px] transform-gpu cursor-pointer bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              //data-aos="fade-up"
              style={{
                backgroundImage: `url(${Promotion1.src})`, // Use backgroundImage to set the image
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
            ></div>

            <div
              className="card h-[700px] transform-gpu cursor-pointer bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              // data-aos="fade-up"
              style={{
                backgroundImage: `url(${Promotion2.src})`, // Use backgroundImage to set the image
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LYSPromotion;
