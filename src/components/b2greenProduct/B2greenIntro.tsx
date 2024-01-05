"use client";

import B2G from "@/app/assets/b2gProduct/B2Green.png";
import B2G3 from "@/app/assets/b2gProduct/B2Green1.png";
import B2G4 from "@/app/assets/b2gProduct/B2Green10.png";
import B2GLogo from "@/app/assets/b2gProduct/B2GreenLogo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const b2gProduct = [
  {
    src: B2G,
    alt: "Picture1",
    width: 500,
    height: 500,
    title: "Medicated Essential Oil",
    desciption:
      "Le+Pure Essential Oil is a product produced from natural oils based on formulas studied by Dermatologists and Traditional Medicine.",
  },
  {
    src: B2G4,
    alt: "Picture2",
    width: 500,
    height: 500,
    title: "Medicated Essential Oil",
    desciption:
      "Bringing many uses in supporting treatment process of Sinusitis, Rhinitis, Arthritis, Pains (Head, Shoulders, Nape, ...), relieves itching and swelling caused by insect bites.",
  },
  {
    src: B2G3,
    alt: "Picture3",
    width: 500,
    height: 500,
    title: "Medicated Essential Oil",
    desciption:
      "Bringing many uses in supporting treatment process of Sinusitis, Rhinitis, Arthritis, Pains (Head, Shoulders, Nape, ...), relieves itching and swelling caused by insect bites.",
  },
];

export default function B2Greene() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const router = useRouter();

  //Change image on the heroIntro
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Change product when click radio
  const [productInfo, setProductInfo] = useState(b2gProduct);

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
          <div className="relative max-w-sm w-[50%] md:w-[40%] lg:w-2/3 lg:max-w-none ">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              className=" transform rounded-lg pb-2 lg:h-[500px] lg:ml-48"
              width={currentImage.width}
              height={currentImage.height}
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
          <Image
              src={B2GLogo.src}
              alt="B2G Logo"
              className=" transform rounded-lg"
              width={200}
              height={100}
            />
            <h1 className="text-4xl font-bold">{currentImage.title}</h1>
            <p className="py-6" data-aos="fade-up">
              {currentImage.desciption}
            </p>

            <button
              onClick={() => router.push("/shopB2Greene")}
              className="group btn-info relative inline-flex items-center justify-center overflow-hidden rounded-lg px-7 py-2.5 text-white focus:ring-4 focus:ring-[#f0da8a]"
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
      </div>
    </div>
  );
}
