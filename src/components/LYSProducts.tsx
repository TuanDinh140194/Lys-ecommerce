"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import B2G from "@/app/assets/b2gProduct/B2Green2.jpg";
import SoftGel from "@/app/assets/bhMedProducts/VitalSG.png";
import { useRouter } from "next/navigation";

const LYSProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const router = useRouter();
  return (
    <section id="products">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl">Our Products</h2>
          <p className="mb-6 text-lg sm:text-2xl">
            Our Product come from trusted brands
          </p>
        </div>

        <div className="scroll-smooth">
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <div
              className="card h-[500px] transform-gpu cursor-pointer bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              //data-aos="fade-up"
              style={{
                backgroundImage: `url(${B2G.src})`, // Use backgroundImage to set the image
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
              onClick={() => router.push("/b2green")}
            >
              <div className=" card-body z-10">
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform items-center gap-4 rounded-3xl bg-[white]/20 p-4 text-center brightness-110 backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>

                  <h1 className="font-extrabold">
                    Medical Essential Oil - By B2Green{" "}
                  </h1>
                </div>
              </div>
            </div>

            <div
              className="card h-[500px] transform-gpu cursor-pointer bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              // data-aos="fade-up"
              style={{
                backgroundImage: `url(${SoftGel.src})`, // Use backgroundImage to set the image
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat", // Set the background repeat property
                backgroundPosition: "center", // Center the background image
              }}
              onClick={() => router.push("/bhMed")}
            >
              <div className="card-body z-10 items-center">
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform  items-center gap-4 rounded-3xl bg-[white]/20 p-4 text-center brightness-110 backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold ">Extract Vital Cell Softgel - By BhMed </h1>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-black opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LYSProducts;
