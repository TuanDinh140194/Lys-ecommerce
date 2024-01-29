"use client";

import React from "react";
import Promotion1 from "@/app/assets/lysPromotion/newyearPromotion.jpg";
import Promotion2Vid from "@/app/assets/lysPromotion/newyearclip.gif";
// import animationData from "@/app/assets/background/Animation - 1703143535399.json";
// import Lottie from "lottie-react";
import { useRouter } from "next/navigation";

const LYSPromotion = () => {
  const router = useRouter();
  return (
    // <section id="products">
    //   <div className="container">
    //     <div className="relative flex items-center justify-center">
    //       <div className="text-center">
    //         <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
    //           Soft Opening Promotion
    //         </h2>
    //         <p className="mb-6 text-lg sm:text-2xl">Cozy up your holiday.</p>
    //       </div>

    //       <div className="absolute right-0 z-10 mt-20 mr-16 w-1/3 md:mt-48 md:mr-32 lg:w-auto lg:mt-10 xl:mr-64">
    //         <Lottie
    //           animationData={animationData}
    //           style={{
    //             width: "100%",
    //             height: "100%",
    //             top: 0,
    //             right: 0,
    //           }}
    //         />
    //       </div>
    //     </div>
    //     <div className="scroll-smooth" data-aos="fade-up">
    //       <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
    //         <button
    //           className="card h-[700px] transform-gpu cursor-pointer bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    //           //data-aos="fade-up"
    //           style={{
    //             backgroundImage: `url(${Promotion1.src})`, // Use backgroundImage to set the image
    //             backgroundSize: "100% 100%",
    //             backgroundRepeat: "no-repeat", // Set the background repeat property
    //             backgroundPosition: "center", // Center the background image
    //           }}
    //           onClick={() => router.push("/bhMed")}
    //         ></button>

    //         <button
    //           className="card h-[700px] transform-gpu cursor-pointer bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    //           // data-aos="fade-up"
    //           style={{
    //             backgroundImage: `url(${Promotion2.src})`, // Use backgroundImage to set the image
    //             backgroundSize: "100% 100%",
    //             backgroundRepeat: "no-repeat", // Set the background repeat property
    //             backgroundPosition: "center", // Center the background image
    //           }}
    //           onClick={() => router.push("/b2green")}
    //         ></button>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="products">
      <div className="container">
        <div className="relative flex items-center justify-center">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
              Lunar New Year Gift Set
            </h2>
            <p className="mb-6 text-lg sm:text-2xl">
              Your daily reminder. On the go..
            </p>
          </div>

          {/* <div className="absolute right-0 z-10 mt-20 mr-16 w-1/3 md:mt-48 md:mr-32 lg:w-auto lg:mt-10 xl:mr-64">
            <Lottie
              animationData={animationData}
              style={{
                width: "100%",
                height: "100%",
                top: 0,
                right: 0,
              }}
            />
          </div> */}
        </div>
        <div className="scroll-smooth" data-aos="fade-up">
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <button
              className="card h-[700px] transform-gpu cursor-pointer bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              //data-aos="fade-up"
              style={{
                backgroundImage: `url(${Promotion1.src})`, // Use backgroundImage to set the image
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
              onClick={() => router.push("/shopB2Greene")}
            ></button>

            <button
              className="card h-[700px] transform-gpu cursor-pointer bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              // data-aos="fade-up"
              style={{
                backgroundImage: `url(${Promotion2Vid.src})`, // Use backgroundImage to set the image
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
              onClick={() => router.push("/shopB2Greene")}
            ></button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LYSPromotion;
