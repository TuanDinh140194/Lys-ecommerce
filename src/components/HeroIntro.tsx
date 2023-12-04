"use client";

import Pic1 from "@/app/assets/pic2.png";
import Pic2 from "@/app/assets/pic1.png";
import marineImg1 from "@/app/assets/marine1.png";
import marineImg2 from "@/app/assets/marine2.png";
import FDA from "@/app/assets/fda-logo.png";
import ISOGMD from "@/app/assets/Logo-IQS-GMP.png";
import haccp from "@/app/assets/haccp.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PremiumInfo = [
  {
    src: Pic2,
    alt: "Picture1",
    width: 1200,
    height: 800,
    title: "Premium Extract Vital Softgel",
    desciption:
      "Vital Cell Softgels [Premium Extracts] include a handful of natural ingredients clinically proven to reduce wrinkles, brown spots, dullness and other signs of aging. And researchers aren’t the only ones paying attention to the softgels.",
  },
  {
    src: Pic1,
    alt: "Picture2",
    width: 1200,
    height: 800,
    title: "Premium Extract Vital Softgel",
    desciption:
      "We look for the best, scientifically proven, active ingredients before incorporating them in our formulas",
  },
];

const MarineInfo = [
  {
    src: marineImg1,
    alt: "Picture1",
    width: 1200,
    height: 800,
    title: "Marine Extract Vital Softgel",
    desciption:
      "We look for the best, scientifically proven, active ingredients before incorporating them in our formulas",
  },
  {
    src: marineImg2,
    alt: "Picture2",
    width: 1200,
    height: 800,
    title: "Marine Extract Vital Softgel",
    desciption:
      "We look for the best, scientifically proven, active ingredients before incorporating them in our formulas",
  },
];

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const router = useRouter();

  //Change image on the heroIntro
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Change product when click radio
  const [productInfo, setProductInfo] = useState(PremiumInfo);

  const selectInfo = (info: any) => {
    setCurrentImageIndex(0);
    setProductInfo(info);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productInfo.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productInfo.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentImage = productInfo[currentImageIndex];

  //Handle tooltips
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const [tooltipVisible2, setTooltipVisible2] = useState(false);

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
    if (tooltipVisible2) {
      setTooltipVisible2(false);
    }
  };

  const toggleTooltip2 = () => {
    setTooltipVisible2(!tooltipVisible2);
    if (tooltipVisible) {
      setTooltipVisible(false);
    }
  };

  return (
    <div>
      <div className="min-h-64 group hero my-20 h-[700px] rounded-3xl bg-base-200 bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative max-w-sm lg:w-2/3 lg:max-w-none ">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              className=" transform rounded-lg "
              width={1200}
              height={1200}
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
                  {productInfo.length.toString()}{" "}
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
            <h1 className="text-4xl font-bold">{currentImage.title}</h1>
            <p className="py-6" data-aos="fade-up">{currentImage.desciption}</p>

            <button
              onClick={() => router.push("/shop")}
              className="group btn-info relative inline-flex items-center justify-center overflow-hidden rounded-lg px-7 py-2.5 text-white focus:ring-4 focus:ring-blue-300"
            >
              <span className="z-40">Learn More</span>
              <svg
                className="z-40 -mr-1 ml-2 h-3 w-3 transition-all duration-300 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="absolute inset-0 z-20 h-[200%] w-[200%] translate-x-[-70%] rotate-45 bg-white/30 transition-all duration-1000 group-hover:translate-x-[50%] group-hover:scale-100"></div>
            </button>
          </div>
        </div>
        <div className="z-10 mb-2 ml-10 mr-auto mt-auto flex md:mb-10 lg:mb-12">
          <div className="flex">
            <div className="flex flex-col-reverse items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                // htmlFor="html"
                // data-ripple-dark="true"
                //onClick={toggleTooltip}
              >
                <input
                  // id="html"
                  //name="productType"
                  type="radio"
                  className="before:content['ef'] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-info text-blue-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-info checked:before:bg-blue-500 hover:before:opacity-10"
                  //onClick={() => selectInfo(PremiumInfo)}
                  checked={tooltipVisible === true}
                  onChange={() => {
                    toggleTooltip();
                    selectInfo(PremiumInfo);
                  }}
                />
                <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-info opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <div
                className={`tooltip ${
                  tooltipVisible ? "visible" : "invisible"
                } z-20 inline-block rounded-lg bg-base-100 px-3 py-2 text-xs font-medium opacity-100 shadow-md dark:bg-gray-700 dark:text-base-100`}
              >
                Premium
              </div>

              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                // htmlFor="html"
              ></label>
            </div>
            <div className="flex flex-col-reverse items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                // htmlFor="react"
                // data-ripple-dark="true"
                //onClick={toggleTooltip2}
              >
                <input
                  //id="react"
                  //name="productType"
                  type="radio"
                  className="before:content['ef'] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-info text-pink-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-info checked:before:bg-blue-500 hover:before:opacity-10"
                  //onClick={() => selectInfo(MarineInfo)}
                  checked={productInfo === MarineInfo}
                  onChange={() => {
                    toggleTooltip2();
                    selectInfo(MarineInfo);
                  }}
                />
                <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-info opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </div>
              </label>
              <div
                // ref={tooltipRef}
                // id="tooltip-click"
                // role="tooltip"
                className={`tooltip ${
                  tooltipVisible2 ? "visible" : "invisible"
                } z-20 inline-block rounded-lg bg-base-100 px-3 py-2 text-xs font-medium opacity-100 shadow-md dark:bg-gray-700 dark:text-base-100`}
              >
                Marine
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-20">
        <div
          className="min-h-64 h-15 group hero mx-auto my-10 w-3/4 rounded-3xl bg-base-200 bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="hero-content flex-col lg:flex-row xl:mr-20">
            <div className="max-w-sm lg:w-1/2 lg:max-w-none">
              <Image
                src={FDA}
                alt="GMD"
                className="rounded-lg"
                width={100} // Adjust the width as needed
                height={100} // Adjust the height as needed
              />
            </div>

            <div className="max-w-xl xl:mr-12">
              <p className="font-semibold">
                FDA Registered Facility Made in a FDA Registered Facility
              </p>
            </div>
          </div>
        </div>

        <div
          className="min-h-64 h-15 group hero mx-auto my-10 w-3/4 rounded-3xl bg-base-200 bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out"
          data-aos="fade-up"
        >
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

        <div
          className="min-h-64 h-15 group hero mx-auto my-10 w-3/4 rounded-3xl bg-base-200 bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="hero-content flex-col lg:flex-row">
            <div className="max-w-sm lg:w-1/2 lg:max-w-none">
              <Image
                src={haccp}
                alt="GMD"
                className="rounded-lg"
                width={170} // Adjust the width as needed
                height={150} // Adjust the height as needed
              />
            </div>

            <div className="max-w-xl xl:pl-11">
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
