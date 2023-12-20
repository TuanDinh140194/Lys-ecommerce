"use client";

import BackDrop from "@/app/assets/backdrop.png";
import Logo from "@/app/assets/LYSByB2Greene3.png";
import { useEffect } from "react";
import AOS from "aos";
//import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="container py-10" id="about">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-5xl md:mb-14">
          About Us
        </h2>
      </div>

      <div className="hero min-h-screen rounded-3xl bg-base-200 shadow-xl transition-opacity duration-300 ease-in-out" >
        <div className="hero-content flex-col p-10 lg:flex-row-reverse">
          <div className="relative lg:w-[150%] w-[100%] mb-20 pb-20 -mt-20 lg:mt-0 lg:mb-0" data-aos="fade-up">
            <img
              src={BackDrop.src}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[70%] lg:w-[100%] max-w-lg"
              alt="BackDrop"
            />
            <img
              src={Logo.src}
              className="absolute w-1/4 lg:w-1/3 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              alt="TextDrop"
              
            />
          </div>
          <div>
            <h1 className="pb-10 text-5xl font-bold" >
              LYS - By B2Greene
            </h1>
            <p className="py-6" data-aos="fade-up">
              LYS was born in 2023 with the aim of providing premium health and
              beauty products. With the increasing demand for protection,
              improving health, and the growing desire for beauty in today's
              modern society, LYS emerged to offer products that can meet these
              needs and bring additional value to the community.
            </p>
            {/* <button className="btn btn-info">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
