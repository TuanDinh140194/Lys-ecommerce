"use client";

import PremiumExtract from "@/app/assets/bhMedProducts/PremiumExtract.jpeg";
import PremiumExtract2 from "@/app/assets/bhMedProducts/PremiumExtract2.png";
import marinePremium from "@/app/assets/productImage/marinePremium.png";
import IngredientPic from "@/app/assets/productImage/ingredientPic.png";
import MPIngredient from "@/app/assets/productImage/MP_Ingredient.png";
import MPIngredient2 from "@/app/assets/productImage/MP_Ingredient2.png";
import AOS from "aos";
import { useEffect } from "react";

export default function Benefit() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const setAOSBasedOnScreenSize = () => {
      const contentDiv = document.getElementById("content1");
      const contentDiv2 = document.getElementById("content2");
      const contentDiv3 = document.getElementById("content3");
      const contentDiv4 = document.getElementById("content4");

      if (contentDiv && contentDiv2 && contentDiv3 && contentDiv4) {
        if (window.innerWidth > 767) {
          // Adjust the mobile breakpoint as needed
          contentDiv.setAttribute("data-aos", "fade-right");
          contentDiv2.setAttribute("data-aos", "fade-left");
          contentDiv3.setAttribute("data-aos", "fade-right");
          contentDiv4.setAttribute("data-aos", "fade-left");
        }
      }
    };

    // Run the function when the component is mounted
    setAOSBasedOnScreenSize();

    // Attach resize listener to update on window resize
    window.addEventListener("resize", setAOSBasedOnScreenSize);

    // Cleanup function to remove the resize listener when component unmounts
    return () => {
      window.removeEventListener("resize", setAOSBasedOnScreenSize);
    };
  }, []);
  return (
    <section className="py-10 md:py-20" id="products">
      <div className="pb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Products</h2>
        <p className="sm:text-2x mb-6 text-lg">
          A little help keeping your stress in check.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 xl:gap-10">
        <div
          className="card grid h-[700px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          style={{
            backgroundImage: `url(${PremiumExtract.src})`, // Use backgroundImage to set the image
            backgroundSize: "100% 100%", // Set the desired background size
            backgroundRepeat: "no-repeat", // Set the background repeat property
            backgroundPosition: "center", // Center the background image
          }}
        ></div>

        <div className="card rounded-box my-14 grid h-[700px] flex-grow place-items-center bg-base-100">
          <div className="-mt-10 text-center" data-aos="fade-up" id="content1">
            <h1 className="mb-5 text-xl font-bold">
              Vital Cell Softgels Premium Extract Recommended For Women
            </h1>

            <p className="m-5">
              Vital Cell Softgels [Premium Extracts] include a handful of
              natural ingredients clinically proven to reduce wrinkles, brown
              spots, dullness and other signs of aging. And researchers aren’t
              the only ones paying attention to the softgels.
            </p>
            <p className="m-5 hidden xl:block">
              “These are becoming more and more popular with doctors and
              consumers. It is a one-of-a-kind skin remedy that is able to
              diminish wrinkles without any external treatments,” says Dr.
              Mikhail Teppone, MD, medical director of Bhmed. “This
              Neutraceutical Anti-aging therapy is definitely here to help you
              stay fit, younger and healthier.”
            </p>
            <div className="m-5">
              <p>Recommendations: </p>
              <p>
                Take 1 capsule 30 minutes before breakfast on an empty stomach.
              </p>
              <p>
                Apply 2 capsules/day in the morning and evening, 1 hour after a
                meal or before bedtime if you experience the following symptoms:
                Feeling tired and lacking energy, Facing high work pressure,
                needing more thought or physical activity than usual, or
                Currently undergoing or recovering from a medical treatment
              </p>
            </div>
            <p>Encouragement:</p>
            <p>
              Use for a minimum of 3 - 8 months for the best results and
              long-term maintenance.
            </p>
            <div className="py-5">
              <p className="font-bold">CAUTION:</p>
              <p>
                Not recommended for patients with inflammation, as Sheep
                Placenta has a warming effect. Do not use it concurrently with
                customers using Glutathione, as it may temporarily reduce the
                skin whitening effect.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-full grid-cols-1 gap-6 lg:gap-8 xl:grid xl:gap-10 xl:pb-5">
        <div
          className="card grid h-[600px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          style={{
            backgroundImage: `url(${IngredientPic.src})`, // Use backgroundImage to set the image
            backgroundSize: "cover", // Set the desired background size
            backgroundRepeat: "no-repeat", // Set the background repeat property
            backgroundPosition: "center", // Center the background image
          }}
        ></div>
      </div>

      <div className="-mt-10 mb-10 grid w-full grid-cols-1 gap-6 pb-10 md:mt-5 md:grid-cols-2 lg:gap-8 xl:gap-10">
        <div className="card rounded-box mb-5 grid h-[700px] flex-grow place-items-center bg-base-100">
          <div className="text-center" data-aos="fade-up" id="content2">
            <h1 className="mb-5 text-xl font-bold">Ingredients And Benefits</h1>

            <p className="hidden lg:block">
              The softgels have the highest concentration of sheep placenta, mg
              to mg, plus 5 other highly bio-active ingredients : Olive
              Polyphenols, Deep Sea Krill Oil, Cod Liver Oil, Evening Primrose
              Oil and Garlic Extracts.
            </p>
            <div>
              <p className="font-semibold">Pure Sheep Placenta 500mg </p>
              <p>
                Global anti-aging effect - Promote cellular detoxification -
                Strengthen immune system - Improve sexual energy
              </p>
              <p className="font-semibold">Potent Olive Polyphenols 100mg </p>
              <p>
                Rich in Hydroxytyrosol (powerful antioxidant) - Reduces melanin
                synthesis - Natural lightening effect - Age spots are reduced
              </p>
              <p className="font-semibold">Deep Sea Krill Oil 100 mg</p>
              <p>
                Rich in Omega-3 (EPA & DHA) and Astaxanthin - Skin: antiwrinkle,
                mattifying, and moisturizing actions - Improves the quality of
                sperm and fertility - Neuroprotection, behavior, mood and
                cognitive wellness
              </p>
              <p className="font-semibold">Rich Cod Liver Oil 100 mg</p>
              <p>
                Rich in Vitamin A, Vitamin D, Omega-3 (EPA & DHA) - Protection
                of the cardiovascular system, eyes, bones and teeth -
                Neuroprotection, behavior, mood and cognitive wellness - Joint
                health
              </p>
              <p className="font-semibold">Evening Primrose Oil 100 mg</p>
              <p>
                Rich in gamma-linolenic acid (GLA) - Female well-being:
                Premenstrual Syndrome and menopause, mastalgia, hot flashes -
                Improves skin barrier - Improves blood viscosity
              </p>
              <p className="font-semibold">Garlic Extracts 50 mg</p>
              <p>
                Rich in organosulfur compounds - Protection against infection -
                Reduced risk of diabetes and cancer - Lower cholesterol
              </p>
            </div>
          </div>
        </div>
        <div
          className="card grid h-[700px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          style={{
            backgroundImage: `url(${PremiumExtract2.src})`, // Use backgroundImage to set the image
            backgroundSize: "cover", // Set the desired background size
            backgroundRepeat: "no-repeat", // Set the background repeat property
            backgroundPosition: "center", // Center the background image
          }}
        ></div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:gap-10 mb-14">
        <div
          className="card grid h-[700px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          style={{
            backgroundImage: `url(${marinePremium.src})`, // Use backgroundImage to set the image
            backgroundSize: "100% 100%", // Set the desired background size
            backgroundRepeat: "no-repeat", // Set the background repeat property
            backgroundPositionX: "center", //Set the background position center
          }}
        ></div>
        <div className="pt-10 card rounded-box grid h-[600px] flex-grow place-items-center bg-base-100 ">
          <div className="text-center" data-aos="fade-up" id="content3">
            <h1 className="mb-5 text-xl font-bold">
              Vital Cell Softgels Marine Premium Recommended For Men
            </h1>

            <p className="mb-5">
              Marine Premium (MP) Vital Cell Softgels is a specially
              swiss-formulated nutraceutical supplement designed to provide a
              high degree of immunity, health, and overall anti-aging effects.
            </p>
            <p className="mb-5 hidden lg:block">
              Each ingredient in Marine Premium is carefully selected to
              synergize with one another, providing total revitalization and
              wellness to your body. Recent advances in Organotherapy have
              allowed for the development of Marine Premium, bringing together
              the riches of the marine world, such as the luxurious caviar, and
              the scientific expertise of the Laboratoire de Biogenese
              Appliquee.
            </p>
            <div className="mb-5">
              <p>Recommendations: </p>
              <p>
                Take 1 capsule 30 minutes before breakfast on an empty stomach.
              </p>
              <p>
                Apply 2 capsules/day in the morning and evening, 1 hour after a
                meal or before bedtime if you experience the following symptoms:
                Feeling tired and lacking energy, Facing high work pressure,
                needing more thought or physical activity than usual, or
                Currently undergoing or recovering from a medical treatment
              </p>
            </div>
            <p>Encouragement:</p>
            <p>
              Use for a minimum of 3 - 8 months for the best results and
              long-term maintenance.
            </p>
            <p className="mt-5 font-bold">Caution:</p>
            <p>Not recommended for patients with seafood allergy.</p>
          </div>
        </div>
      </div>

      <div className=" hidden w-full grid-cols-1 gap-6 lg:gap-8 xl:grid xl:gap-10 xl:py-10">
        <div
          className="card grid h-[600px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          style={{
            backgroundImage: `url(${MPIngredient.src})`, // Use backgroundImage to set the image
            backgroundSize: "cover", // Set the desired background size
            backgroundRepeat: "no-repeat", // Set the background repeat property
            backgroundPosition: "center", // Center the background image
          }}
        ></div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 pb-10 md:mt-5 md:grid-cols-2 lg:gap-8 xl:gap-10">
        <div className="card rounded-box mb-5 grid h-[700px] flex-grow place-items-center bg-base-100">
          <div className="text-center" data-aos="fade-up" id="content4">
            <h1 className="mb-5 text-xl font-bold">Ingredients And Benefits</h1>

            <p className="hidden lg:block">
              MP includes 6 other highly bio-active ingredients : Shark Liver
              Oil, Olive Polyphenols, Deep Sea Krill Oil, Glutathione,
              Nutripeptine, and Protizen.
            </p>
            <div>
              <p className="font-semibold">Premium Caviar 500mg </p>
              <p>
                Intense cell and tissue stimulation - Activates cell growth -
                Fight against premature aging - Protect cardiovascular function
              </p>
              <p className="font-semibold">Shark Liver Oil 150mg </p>
              <p>
                Boosts collagen synthesis and reinforces dermis structure -
                Keeps blood vessels and cell membranes flexible and elastic -
                Block free radical stress - Protects against bacterial and
                fungal infection
              </p>
              <p className="font-semibold">Potent Olive Polyphenols 100mg</p>
              <p>
                Rich in Hydroxytyrosol (powerful antioxidant) - Reduces melanin
                synthesis - Natural brightening effect - Reduce age spots
              </p>
              <p className="font-semibold">Deep Sea Krill Oil 100 mg</p>
              <p>
                Rich in Omega-3 (EPA & DHA) and Astaxanthin - Skin: antiwrinkle,
                mattifying, and moisturizing actions - Improves the quality of
                sperm and fertility - Neuroprotection, behavior, mood and
                cognitive wellness
              </p>
              <p className="font-semibold">Glutathione 50mg</p>
              <p>
                Removes oxygen radicals - Protect against liver damage -
                Lightens the skin and age spots - Neuro and liver protection
              </p>
              <p className="font-semibold">Nutripeptin 50mg</p>
              <p>
                Reduces food glycemic index - Helps to reduce fat deposition
              </p>
              <p className="font-semibold">Protizen 50mg</p>
              <p>Helps in reduce stress</p>
            </div>
          </div>
        </div>
        <div
          className="card grid h-[720px] flex-grow transform-gpu place-items-center rounded-3xl bg-[#e4eefd] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          style={{
            backgroundImage: `url(${MPIngredient2.src})`, // Use backgroundImage to set the image
            backgroundSize: "100% 100%", // Set the desired background size
            backgroundRepeat: "no-repeat", // Set the background repeat property
            backgroundPosition: "center", // Center the background image
            display: "flex", // Enable flexbox
          }}
        ></div>
      </div>
    </section>
  );
}
