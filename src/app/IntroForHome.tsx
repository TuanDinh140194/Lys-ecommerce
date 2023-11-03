"use client";
import Intro from "@/components/Intro";
import { usePathname } from "next/navigation";

export default function IntroForHome() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {isHomePage ? (
        <header className="sticky top-0 z-30 pt-5 backdrop-blur-xl backdrop-filter">
          <Intro />
        </header>
      ) : (
        <div className="mt-20">
          
        </div>
      )}{" "}
    </>
  );
}
