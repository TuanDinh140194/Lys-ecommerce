"use client";

import React from "react";

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export default function B2GreenNav() {
  // const [theme, setTheme] = React.useState("light");

  // React.useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

  // const handleThemeChange = (e: any) => {
  //   const val = e.target.getAttribute("data-set-theme");
  //   setTheme(val);
  // };

  const [isScrolled, setIsScrolled] = React.useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add an event listener for the scroll event when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px- container z-20 -mb-5 mt-5 max-w-full">
      <nav
        className={`navbar mx-auto max-w-7xl px-0 transition-all ${
          isScrolled ? "-mt-10 max-w-full shadow-lg transition-all" : ""
        } `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn-base-200 btn btn-circle btn-ghost -mr-5 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact menu dropdown-content rounded-box mt-1 w-52 bg-base-200 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#b2green">About B2Green</a>
              </li>
              <li>
                <a href="#ingredient">Ingredients</a>
              </li>
              <li>
                <a href="#use">How to use</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-sm normal-case xl:text-2xl" href="#">
            Le+Pure Essential Oil
          </a>
          <div className="hidden lg:flex"></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          {" "}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-lg font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#b2green">About B2Green</a>
              </li>
              <li>
                <a href="#ingredient">Ingredients</a>
              </li>
              <li>
                <a href="#use">How to Use</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <div className="mr-2 text-end">
            <p className="text-sm font-semibold">Buy now only $59.99</p>
            <p className="text-xs font-semibold text-amber-700">
              Enjoy our saving this winter*
            </p>
          </div>
          <div>
            <button className="btn btn-info mr-5 text-base-100">Buy Now</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
