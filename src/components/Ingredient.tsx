import React from "react";

export default function Introduction() {
  return (
    <section className="py-10 md:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl">What We Do</h2>
          <p className="mb-6 text-lg sm:text-2xl">
            Personalized help for your health, safety, and productivity.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <div className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center gap-4 text-center">
                <i className="bi bi-search text-4xl"></i>
                <h2 className="card-title">SEO Services</h2>
                <p>
                  This is a wider card with <br className="hidden xl:inline" />
                  supporting text below as a <br className="hidden xl:inline" />{" "}
                  natural content.
                </p>
              </div>
            </div>
            <div className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center gap-4 text-center">
                <i className="bi bi-search text-4xl"></i>
                <h2 className="card-title">SEO Services</h2>
                <p>
                  This is a wider card with <br className="hidden xl:inline" />
                  supporting text below as a <br className="hidden xl:inline" />{" "}
                  natural content.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10">
            <div className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center gap-4 text-center">
                <i className="bi bi-search text-4xl"></i>
                <h2 className="card-title">SEO Services</h2>
                <p>
                  This is a wider card with <br className="hidden xl:inline" />
                  supporting text below as a <br className="hidden xl:inline" />{" "}
                  natural content.
                </p>
              </div>
            </div>
            <div className="card h-[600px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center gap-4 text-center">
                <i className="bi bi-search text-4xl"></i>
                <h2 className="card-title">SEO Services</h2>
                <p>
                  This is a wider card with <br className="hidden xl:inline" />
                  supporting text below as a <br className="hidden xl:inline" />{" "}
                  natural content.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:gap-10">
            <div className="card h-[400px] transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="card-body items-center gap-4 text-center">
                <i className="bi bi-search text-4xl"></i>
                <h2 className="card-title">SEO Services</h2>
                <p>
                  This is a wider card with <br className="hidden xl:inline" />
                  supporting text below as a <br className="hidden xl:inline" />{" "}
                  natural content.
                </p>
              </div>
            </div>

            <div className="card transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
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

            <div className="card transform-gpu bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
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
