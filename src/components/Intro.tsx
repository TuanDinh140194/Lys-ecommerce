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

export default function Intro() {
  const [theme, setTheme] = React.useState("light");
   

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e: any) => {
    const val = e.target.getAttribute("data-set-theme");
    setTheme(val);
  };

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
    
      <div className="container max-w-full mt-10 -mb-5 z-20">
        <div className={`transition-all navbar max-w-7xl mx-auto px-0 ${isScrolled ? "transition-all shadow-lg -mt-10 max-w-full" : ""}` }>
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn-base-200 btn btn-circle btn-ghost lg:hidden -mr-5"
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
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Shop</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">Work</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost xl:text-2xl text-sm normal-case text-amber-900">Extract Vital Softgel</a>
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal p-0 font-medium">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Shop</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">Work</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            
          </div>
          <div className="navbar-end">
            <div className="text-end mr-2">
              <p className="text-sm font-semibold">
                Buy now only $59.99
              </p>
              <p className="text-xs font-semibold text-amber-700">
                Enjoy our saving this autumn*
              </p>
              
            </div>
            <div>
              <button className="btn btn-primary mr-5">
                Buy Now
              </button>
            </div>
            {/* <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-primary">
                {THEMES.length} Themes
              </label>
              <ul
                tabIndex={0}
                className="menu-compact menu dropdown-content rounded-box mt-1 max-h-96 w-52 overflow-y-auto  bg-base-200 p-2 shadow"
              >
                {THEMES.map((theme, i) => (
                  <li key={theme + i}>
                    <button
                      data-set-theme={theme}
                      onClick={handleThemeChange}
                      className="font-medium capitalize"
                    >
                      {i + 1 + ". " + theme}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
   
  );
}
