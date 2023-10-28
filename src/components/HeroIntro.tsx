"use client";

import Pic1 from "@/app/assets/pic2.png";
import Pic2 from "@/app/assets/pic1.png";
import GMP from "@/app/assets/gmp.png";
import ISOGMD from "@/app/assets/Logo-IQS-GMP.png";
import haccp from "@/app/assets/haccp.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const images = [
  { src: Pic1, alt: "Picture1", width: 1200, height: 800 },
  { src: Pic2, alt: "Picture2", width: 1200, height: 800 },
];

export default function Hero() {
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentImage = images[currentImageIndex];

  return (
    <div>
      <div className="min-h-64 group hero my-20 h-[700px] rounded-3xl bg-[#e4eefd] bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative max-w-sm lg:w-2/3 lg:max-w-none ">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              className=" transform rounded-lg "
              width={1500}
              height={1500}
            />
            <div className="ml-auto flex w-[80px] rounded-full bg-base-100 bg-opacity-80 lg:h-[40px] lg:w-[150px]">
              <div className="m-auto flex">
                <div
                  onClick={prevImage}
                  className="round m-auto rounded-full p-2 hover:bg-base-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
                <div className="mx-6 hidden p-2 text-sm font-semibold lg:flex">
                  {(currentImageIndex + 1).toString()}/
                  {images.length.toString()}{" "}
                </div>
                <button
                  onClick={nextImage}
                  className="round m-auto rounded-full p-2 hover:bg-base-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="-mt-10 p-6 lg:w-1/3">
            <h1 className="text-4xl font-bold text-info">
              Premium Extract Vital Softgel
            </h1>
            <p className="py-6">
              We look for the best, scientifically proven, active ingredients
              before incorporating them in our formulas
            </p>

            <button
              onClick={() => router.push("/shop")}
              className="btn btn-primary"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="z-10 mb-12 ml-10 mr-auto mt-auto">
          <label className="btn btn-circle btn-primary">
            {/* <Image
            src={productIcon}
            alt="Profile Picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          /> */}
            <div className="text-base-100">P</div>
          </label>
          <label className="btn btn-circle btn-primary ml-2">
            {/* <Image
            src={productIcon}
            alt="Profile Picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          /> */}
            <div className="text-base-100">M</div>
          </label>
        </div>
      </div>

      <div className="mx-auto my-20">
        <div className="min-h-64 h-15 group hero mx-auto my-10 w-3/4 rounded-3xl bg-[#e4eefd] bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out">
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-sm lg:w-1/2 lg:max-w-none">
              <Image
                src={GMP}
                alt="GMD"
                className="rounded-lg"
                width={100} // Adjust the width as needed
                height={100} // Adjust the height as needed
              />
            </div>

            <div className="max-w-xl">
              <p className="font-semibold">
                We look for the best, scientifically proven, active ingredients
                before incorporating them in our formulas
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-64 h-15 group hero mx-auto my-10 w-3/4 rounded-3xl bg-[#e4eefd] bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out">
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-sm lg:w-1/2 lg:max-w-none">
              <Image
                src={ISOGMD}
                alt="GMD"
                className="rounded-lg"
                width={100} // Adjust the width as needed
                height={100} // Adjust the height as needed
              />
            </div>

            <div className="max-w-xl">
              <p className="font-semibold">
                Our product facilities comply with GMP DIRECTIVE 2001/83/EC and
                Comestic GMP ISO22716
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-64 h-15 group hero mx-auto my-10 w-3/4 rounded-3xl bg-[#e4eefd] bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out">
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-sm lg:w-1/2 lg:max-w-none">
              <Image
                src={haccp}
                alt="GMD"
                className="rounded-lg"
                width={150} // Adjust the width as needed
                height={150} // Adjust the height as needed
              />
            </div>

            <div className="max-w-xl">
              <p className="font-semibold">
                Product protocol in accordance with the HACCP, method of control
                and improvement during the production process
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
