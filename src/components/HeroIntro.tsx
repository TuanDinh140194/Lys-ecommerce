"use client"

import Pic1 from "@/app/assets/pic2.png";
import GMP from "@/app/assets/gmp.png";
import ISOGMD from "@/app/assets/Logo-IQS-GMP.png";
import haccp from "@/app/assets/haccp.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div>
      <div className="min-h-64 group hero my-20 h-[600px] rounded-3xl bg-[#e4eefd] bg-opacity-80 shadow-xl transition-opacity duration-300 ease-in-out">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-sm lg:w-2/3 lg:max-w-none">
            <Image
              src={Pic1}
              alt="Picture1"
              className="rounded-lg"
              width={1200} // Adjust the width as needed
              height={800} // Adjust the height as needed
            />
          </div>
          <div className="p-6 lg:w-1/3">
            <h1 className="text-4xl font-bold">
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
