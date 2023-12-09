"use client";
import React, { useEffect } from "react";
import avarta1 from "@/app/assets/avarta/1.png";
import avarta2 from "@/app/assets/avarta/2.png";
import avarta3 from "@/app/assets/avarta/3.png";
import avarta4 from "@/app/assets/avarta/4.png";
import avarta5 from "@/app/assets/avarta/5.png";
import avarta6 from "@/app/assets/avarta/6.png";
import AOS from "aos";

export default function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (
    <section className="bg-base py-10 md:py-16" id="testimonials">
      <div className="container">
        <div className="text-center ">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl">
            We have some fans.
          </h2>
          <p className="mb-6 text-lg sm:text-2xl md:mb-14">
            We create engaging experiences that are innovatingand beautiful.
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 lg:gap-8">
          <div className="mb-8 block lg:mb-10" data-aos="fade-up">
            <div className="stack">
              <div className="card bg-base-200 text-secondary-content hover:shadow-2xl">
                <div className="card-body gap-4">
                  <div className="flex items-center">
                    <div className="avatar flex-shrink-0">
                      <div className="w-16 rounded-full border-2 border-white">
                        <img src={avarta2.src} />
                      </div>
                    </div>

                    <div className="ml-3">
                      <p className="text-lg font-medium leading-tight">
                        Mrs. Chan, 52
                      </p>
                      <small>Mobile dev</small>
                    </div>
                  </div>
                  <p>
                    I was plagued with the problem of dryness around my eye
                    areas. Due to the dryness, wrinkles were very prominent
                    around my eyes. I was looking for a solution when I
                    discovered about NanoVital Cell Extracts. I had one
                    treatment of NanoVital Cell Extracts (Mesenchyme) and the
                    results were amazing. The wrinkles around my eyes were
                    reduced significantly. Thank you, Bhmed
                  </p>
                </div>
              </div>
              <div className="card h-10 bg-primary"></div>
              <div className="card h-10 bg-warning"></div>
            </div>
          </div>

          <div className="mb-8 block lg:mb-10" data-aos="fade-up">
            <div className="stack">
              <div className="card bg-base-200 text-secondary-content hover:shadow-2xl">
                <div className="card-body gap-4">
                  <div className="flex items-center">
                    <div className="avatar flex-shrink-0">
                      <div className="w-16 rounded-full border-2 border-white">
                        <img src={avarta1.src} />
                      </div>
                    </div>

                    <div className="ml-3">
                      <p className="text-lg font-medium leading-tight">
                        Rochelle Joy Lopez, 27
                      </p>
                      <small>Worker</small>
                    </div>
                  </div>
                  <p>
                    My nightmare started when I used a wrong skincare product.
                    Red, unsightly acnes broke out all over my face. I had five
                    facial treatments NanoVital Cell Extracts (Skin) over a
                    period of five weeks. I am truly amazed that my acnes are
                    completely gone! My self-confidence is back again!
                  </p>
                </div>
              </div>
              <div className="card h-10 bg-primary"></div>
              <div className="card h-10 bg-warning"></div>
            </div>
          </div>

          <div className="mb-8 block lg:mb-10" data-aos="fade-up">
            <div className="stack">
              <div className="card bg-[#DDBEAA] text-secondary-content hover:shadow-2xl">
                <div className="card-body gap-4">
                  <div className="flex items-center">
                    <div className="avatar flex-shrink-0">
                      <div className="w-16 rounded-full border-2 border-white">
                        <img src={avarta3.src} />
                      </div>
                    </div>

                    <div className="ml-3">
                      <p className="text-lg font-medium leading-tight">
                        Madam Ting, 56
                      </p>
                      <small>Manager</small>
                    </div>
                  </div>
                  <p>
                    The problem with my skin was that it lacked collagen and
                    elasticity. Hence, absorption was not up to par resulting in
                    rough and oily skin. Furthermore, I had poor memory. My
                    friend recommended that I try Bhmed’s Vital Cell Softgels
                    (Premium Extracts). After one softgel daily for six months,
                    my skin feels tighter and smoother and is glowing. My memory
                    has improved. Thank you, Bhmed, for these amazing results!”
                  </p>
                </div>
              </div>
              <div className="card h-10 bg-primary"></div>
              <div className="card h-10 bg-warning"></div>
            </div>
          </div>

          <div className="mb-8 block lg:mb-10" data-aos="fade-up">
            <div className="stack">
              <div className="card bg-[#DDBEAA] text-secondary-content hover:shadow-2xl">
                <div className="card-body gap-4">
                  <div className="flex items-center">
                    <div className="avatar flex-shrink-0">
                      <div className="w-16 rounded-full border-2 border-white">
                        <img src={avarta4.src} />
                      </div>
                    </div>

                    <div className="ml-3">
                      <p className="text-lg font-medium leading-tight">
                        Madam Tio, 48
                      </p>
                      <small>Creator of Tailwind Awesome</small>
                    </div>
                  </div>
                  <p>
                    My nails used to chip easily and my nail plates were uneven.
                    I was looking for a product which could strengthen my nails
                    and I came across Vital Cell Softgels Premium Extract. After
                    treatment of one softgel daily for four months, my nails are
                    healthy and strengthened and my nail plates have evened out.
                    I will certainly continue using this product.”
                  </p>
                </div>
              </div>
              <div className="card h-10 bg-primary"></div>
              <div className="card h-10 bg-warning"></div>
            </div>
          </div>

          <div className="mb-8 block lg:mb-10" data-aos="fade-up">
            <div className="stack">
              <div className="card bg-[#E4dcc0] text-secondary-content hover:shadow-2xl">
                <div className="card-body gap-4">
                  <div className="flex items-center">
                    <div className="avatar flex-shrink-0">
                      <div className="w-16 rounded-full border-2 border-white">
                        <img src={avarta5.src}/>
                      </div>
                    </div>

                    <div className="ml-3">
                      <p className="text-lg font-medium leading-tight">
                        Mrs. Cheng, 79
                      </p>
                      <small>People</small>
                    </div>
                  </div>
                  <p>
                    I had inflammation around my thumbnail, thus hampering the
                    growth. I gave Vital Cell Softgels (Premium Extract) a try
                    and I applied one softgel daily for three months. I saw the
                    inflammation subsiding gradually and my nail growing
                    healthily. Thank you, Bhmed!”
                  </p>
                </div>
              </div>
              <div className="card h-10 bg-primary"></div>
              <div className="card h-10 bg-warning"></div>
            </div>
          </div>

          <div className="mb-8 block lg:mb-10" data-aos="fade-up">
            <div className="stack">
              <div className="card bg-[#E4dcc0] text-secondary-content hover:shadow-2xl">
                <div className="card-body gap-4">
                  <div className="flex items-center">
                    <div className="avatar flex-shrink-0">
                      <div className="w-16 rounded-full border-2 border-white">
                        <img src={avarta6.src} />
                      </div>
                    </div>

                    <div className="ml-3">
                      <p className="text-lg font-medium leading-tight">
                        Mrs. Janice W, 54
                      </p>
                      <small>Mobile dev</small>
                    </div>
                  </div>
                  <p>
                    “I was plagued with oily and rough skin. However, after
                    using Vital Cell Softgel daily for three months, my skin is
                    smoother, firmer, and more radiant. Thanks Bhmed!”
                  </p>
                </div>
              </div>
              <div className="card h-10 bg-primary"></div>
              <div className="card h-10 bg-warning"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
