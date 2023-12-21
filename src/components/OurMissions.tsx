"use client";

import React, { useEffect, useState } from "react";
import LYS from "@/app/assets/LoveYourSelf.jpg";
import healthy from "@/app/assets/healthy.jpg";
import community from "@/app/assets/community.jpg";
import LYSLogo from "@/app/assets/LYSByB2Greene3.png";
import AOS from "aos";

export default function Introduction() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "true");
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [isHoveredLYS, setIsHoveredLYS] = useState(false);
  const [isHoveredCommunity, setIsHoveredCommunity] = useState(false);
  const [isHoveredHealthy, setIsHoveredHealthy] = useState(false);
  const [isHoveredlys, setIsHoveredlys] = useState(false);

  const handleHoverLYS = () => {
    setIsHoveredLYS(true);
  };

  const handleHoverOutLYS = () => {
    setIsHoveredLYS(false);
  };

  const handleHoverCommunity = () => {
    setIsHoveredCommunity(true);
  };

  const handleHoverOutCommunity = () => {
    setIsHoveredCommunity(false);
  };

  const handleHoverHealty = () => {
    setIsHoveredHealthy(true);
  };

  const handleHoverOutHealthy = () => {
    setIsHoveredHealthy(false);
  };

  const handleHoverlys = () => {
    setIsHoveredlys(true);
  };

  const handleHoverOutlys = () => {
    setIsHoveredlys(false);
  };

  return (
    <section className="py-10 md:py-16" id="missions">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl">What We Do</h2>
          <p className="mb-6 text-lg sm:text-2xl">
            Personalized products for your health and beauty.
          </p>
        </div>

        <div className="scroll-smooth">
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <div
              className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${LYS.src})`, // Use backgroundImage to set the image
                backgroundSize: isHoveredlys ? "170%" : "cover", // Set the desired background size
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
              onMouseEnter={handleHoverlys}
              onMouseLeave={handleHoverOutlys}
              data-aos="fade-up"
            >
              <div className="card-body z-10 items-center ">
                <div className=" items-center gap-4 rounded-3xl bg-[white]/30 p-4 text-center brightness-110 backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold">LYS - By B2Greene </h1>
                  <p>
                    With the slogan "Healthy and Beauty is the final Wealthy",
                    we emphasize the importance of everyone loving and caring
                    for their health and beauty even more, regardless of gender,
                    origin, or profession. With health and beauty, you have it
                    all. <br className="hidden xl:inline" />
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-black opacity-10"></div>
            </div>

            <div
              className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${healthy.src})`, // Use backgroundImage to set the image
                backgroundSize: isHoveredHealthy ? "170%" : "cover", // Set the desired background size
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
              onMouseEnter={handleHoverHealty}
              onMouseLeave={handleHoverOutHealthy}
              data-aos="fade-up"
            >
              <div className="card-body z-10 items-center">
                <div className="items-center gap-4 rounded-3xl bg-[white]/30 p-4 text-center brightness-110 backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold ">What We Hope </h1>
                  <p>
                    Health and beauty products from renowned global brands.{" "}
                    <br className="hidden xl:inline" />
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-black opacity-0"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <div
              className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${community.src})`, // Use backgroundImage to set the image
                backgroundSize: isHoveredCommunity ? "150%" : "cover", // Set the desired background size
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
              onMouseEnter={handleHoverCommunity}
              onMouseLeave={handleHoverOutCommunity}
              data-aos="fade-up"
            >
              <div className="card-body z-10 items-center">
                <div className="items-center gap-4 rounded-3xl bg-[white]/60 p-4 text-center backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold">Our Vision</h1>
                  <p>
                    Building a community for sharing health and beauty insights
                    with everyone.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-black opacity-0"></div>
            </div>

            <div
              className="card relative h-[600px] transform-gpu overflow-hidden bg-amber-900 transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${LYSLogo.src})`, // Use backgroundImage to set the image
                backgroundSize: isHoveredLYS ? "contain" : "50%", // Set the desired background size
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
              onMouseEnter={handleHoverLYS}
              onMouseLeave={handleHoverOutLYS}
              data-aos="fade-up"
            >
              <div className="card-body z-10 items-center">
                <div className="items-center gap-4 rounded-3xl bg-[white]/40 p-4 text-center backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold">Born Of LYS - by B2Greene</h1>
                  <p>
                    That's why We Create LYS - by B2Greene{" "}
                    <br className="hidden xl:inline" />
                    Wish all the best things to our beloved customers{" "}
                    <br className="hidden xl:inline" />
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-black opacity-10"></div>
            </div>
          </div>

          <div className="text-center" id="news">
            <p className="mt-10 text-lg sm:text-2xl">
              Keep up to date with our news on social media
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:gap-8 xl:gap-10">
            <div data-aos="fade-up">
              <div className="card-body items-center gap-4 text-center backdrop-blur backdrop-filter">
                <div
                  className="elfsight-app-15fe3b1c-1ff1-4df6-875f-ae39e00c5ca6"
                  data-elfsight-app-lazy
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
