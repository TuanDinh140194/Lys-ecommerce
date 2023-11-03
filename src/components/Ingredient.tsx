"use client";

import React, { useEffect } from "react";
import AOS from "aos";

export default function Introduction() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl">What We Do</h2>
          <p className="mb-6 text-lg sm:text-2xl">
            Personalized help for your health, safety, and productivity.
          </p>
        </div>

        <div className="scroll-smooth">
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <div
              className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1524638067-feba7e8ed70f?auto=format&fit=crop&q=80&w=1536&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
              }}
              data-aos="fade-right"
            >
              <div className="card-body items-center">
                <div className="items-center gap-4 bg-[white]/40 p-4 text-center backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold">SEO Services</h1>
                  <p>
                    This is a wider card with{" "}
                    <br className="hidden xl:inline" />
                    supporting text below as a{" "}
                    <br className="hidden xl:inline" /> natural content.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "fit",
                // backgroundPositionY: "-100px"
              }}
              data-aos="fade-left"
            >
              <div className="card-body items-center">
                <div className="items-center gap-4 bg-[white]/40 p-4 text-center backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold">SEO Services</h1>
                  <p>
                    This is a wider card with{" "}
                    <br className="hidden xl:inline" />
                    supporting text below as a{" "}
                    <br className="hidden xl:inline" /> natural content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <div
              className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1621586863344-a8ecba416d02?auto=format&fit=crop&q=80&w=1970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                backgroundSize: "cover",
              }}
              data-aos="fade-right"
            >
              <div className="card-body items-center">
                <div className="items-center gap-4 bg-[white]/40 p-4 text-center backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold">SEO Services</h1>
                  <p>
                    This is a wider card with{" "}
                    <br className="hidden xl:inline" />
                    supporting text below as a{" "}
                    <br className="hidden xl:inline" /> natural content.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1624278900697-37305349a096?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc1fHx2aXRhbWluc3xlbnwwfHwwfHx8MA%3D%3D")',
                backgroundSize: "cover",
              }}
              data-aos="fade-left"
            >
              <div className="card-body items-center">
                <div className="items-center gap-4 bg-[white]/40 p-4 text-center backdrop-blur backdrop-filter">
                  <i className="bi bi-search text-4xl"></i>
                  <h1 className="font-extrabold">SEO Services</h1>
                  <p>
                    This is a wider card with{" "}
                    <br className="hidden xl:inline" />
                    supporting text below as a{" "}
                    <br className="hidden xl:inline" /> natural content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:gap-10">
            <div
              className="card h-[400px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="card-body items-center gap-4 text-center backdrop-blur backdrop-filter">
                <i className="bi bi-search text-4xl"></i>
                <h2 className="card-title">SEO Services</h2>
                <p>
                  This is a wider card with <br className="hidden xl:inline" />
                  supporting text below as a <br className="hidden xl:inline" />{" "}
                  natural content.
                </p>
              </div>
            </div>

            <div
              className="card transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="card-body items-center gap-4 text-center">
                <i className="bi bi-chat-left-dots text-4xl"></i>
                <h2 className="card-title">Social Content</h2>
                <p>
                  This is a wider card with <br className="hidden xl:inline" />
                  supporting text below as a <br className="hidden xl:inline" />{" "}
                  natural content.
                </p>
              </div>
            </div>

            <div
              className="card transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              data-aos="fade-up"
            >
              <div className="card-body items-center gap-4 text-center">
                <i className="bi bi-badge-ad text-4xl"></i>
                <h2 className="card-title">Creative ads</h2>
                <p>
                  This is a wider card with <br className="hidden xl:inline" />
                  supporting text below as a <br className="hidden xl:inline" />{" "}
                  natural content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
