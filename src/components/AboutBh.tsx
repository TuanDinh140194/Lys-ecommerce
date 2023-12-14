"use client";

//import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using React Router
import SwissMountain from "@/app/assets/swiss-mt.png";
import { useEffect } from "react";
import AOS from "aos";
//import "aos/dist/aos.css";

export default function Product() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="container py-10" id="bhMed">
      <div className="text-center">
        <p className="sm:text-2x mb-6 text-lg">About Bhmed</p>
        <h2 className="mb-4 text-3xl font-bold sm:text-5xl md:mb-14">
          Turn insights into improvements
        </h2>
      </div>

      <div
        className="min-h-64 hero h-[600px] rounded-3xl bg-base-100"
        style={{
          backgroundImage: `url(${SwissMountain.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md" data-aos="fade-up">
            <h1 className="mb-5 text-5xl font-bold">Our Story</h1>
            <p className="mb-5">
              From the Alps mountain range in Switzerland, L.B.A (Laboratoire de
              Biogénèse Appliquée) was established in 1981, becoming the oldest
              research and experimental center for cell therapy in Europe. For
              over 36 years, scientists, microbiologists, biochemists, and
              healthcare professionals have continuously innovated to create
              high-quality products based on biological cell therapy –
              Organotherapy
            </p>
            <a
              href="https://bhmed.com/about/"
              target="_blank"
              className="btn btn-info"
            >
              Visit Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
