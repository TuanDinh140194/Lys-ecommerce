"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "@/app/assets/background/Animation - 1702286188462.json";
import animationMobile from "@/app/assets/background/Animation - 1702409924509.json";
import AOS from "aos";
import B2G from "@/app/assets/b2gProduct/lepure.jpg";
//import "aos/dist/aos.css";

export default function AboutB2G() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className=" container py-10" id="b2green">
      <div className="text-center">
        <p className="sm:text-2x mb-6 text-lg">About B2Greene</p>
        <h2 className="mb-4 text-3xl font-bold sm:text-5xl md:mb-14">
          Healthy living to everyone.
        </h2>
      </div>

      <div
        className="min-h-64 hero h-[600px] rounded-3xl bg-base-100"
        style={{
          backgroundImage: `url(${B2G.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md" data-aos="fade-up">
            <h1 className="mb-5 text-5xl font-bold">Our Story</h1>
            <p className="mb-5">
              B2Greene is a brand established in the US with the desire to
              become a brand that spreads product values imbued with Vietnamese
              identity to international friends, as well as bringing more clean,
              green health products from everywhere in the world. From our name
              - B2Greene - Be to Green - We want to spread the value of green
              living - healthy living to everyone, contributing to creating a
              green and healthy community. Therefore, the products that B2greene
              aims for must achieve the values of friendliness, quality,
              efficiency, and safety.
            </p>
            <button className="btn btn-info">Visit Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}
