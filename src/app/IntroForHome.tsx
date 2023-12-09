"use client";

import Intro from "@/components/Intro";
import LYSNav from "@/components/LYSNav";
import { usePathname } from "next/navigation";

export default function IntroForHome() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBhMedPage = pathname === "/bhMed";

  return (
    <>
      {isHomePage ? (
        <header className="sticky top-0 z-30 pt-5 backdrop-blur-xl backdrop-filter">
          <LYSNav/>
        </header>
      ) : isBhMedPage ? (
        <header className="sticky top-0 z-30 pt-5 backdrop-blur-xl backdrop-filter">
          <Intro/>
        </header>
      ) : (
        <div className="mt-20">
          
        </div>
      )}{" "}
    </>
  );
}
