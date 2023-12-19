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
                      <small>Portland Tailor</small>
                    </div>
                  </div>
                  <p>
                    I was plagued with the problem of dryness around my eye
                    areas. Due to the dryness, wrinkles were very prominent
                    around my eyes. I was looking for a solution when I
                    discovered about Vital Cell Extracts. I had one treatment of
                    Vital Cell Extracts (Mesenchyme) and the results were
                    amazing. The wrinkles around my eyes were reduced
                    significantly. Thank you, Bhmed
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
                    facial treatments Vital Cell Extracts (Skin) over a period
                    of five weeks. I am truly amazed that my acnes are
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
                    I've been using B2Greene's Medicated Essential Oil for a few
                    weeks now, and I'm incredibly impressed with the results. As
                    someone who suffers from occasional muscle discomfort and
                    stress, this oil has been a game-changer for me. The blend
                    of essential oils in this product, delivers a soothing and
                    calming effect that I've found to be immensely helpful in
                    easing tension in my muscles and promoting relaxation after
                    a long day.
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
                      <small>Hiring Manager</small>
                    </div>
                  </div>
                  <p>
                    What sets B2Greene's Medicated Essential Oil apart is its
                    high-quality formulation and potency. Just a few drops go a
                    long way, and I appreciate that it's made with natural
                    ingredients, free from harsh chemicals or additives. I've
                    used it by diluting it with a carrier oil for massages,
                    adding it to my bath for a therapeutic soak, and even
                    diffusing it in my home for a serene atmosphere. The
                    pleasant aroma instantly creates a sense of tranquility,
                    which has significantly improved my overall well-being.
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
                        <img src={avarta5.src} />
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
                    LYS has completely changed the way I shop online. As someone
                    who values convenience, quality, and a seamless shopping
                    experience, I've found LYS to be an absolute game-changer.
                    This platform has redefined my expectations when it comes to
                    online shopping for a variety of products.
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
                    What struck me most about LYS is its user-friendly
                    interface. Navigating through the website is a breeze,
                    thanks to its intuitive design and easy-to-use features.
                    Whether I'm browsing for my shopping items, the
                    categorization and search options make finding what I need
                    effortless.
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
