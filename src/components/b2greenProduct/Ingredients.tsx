"use client";

import Use1 from "@/app/assets/b2gProduct/HTU1.png";
import Use2 from "@/app/assets/b2gProduct/HTU2.png";
import Use3 from "@/app/assets/b2gProduct/HTU3.png";
import Use4 from "@/app/assets/b2gProduct/HTU4.png";
import Use5 from "@/app/assets/b2gProduct/HTU5.png";
import Use6 from "@/app/assets/b2gProduct/HTU6.png";
import Use7 from "@/app/assets/b2gProduct/HTU7.png";
import Use8 from "@/app/assets/b2gProduct/HTU8.png";
import Use9 from "@/app/assets/b2gProduct/HTU9.png";
import Use10 from "@/app/assets/b2gProduct/HTU10.png";
import Use11 from "@/app/assets/b2gProduct/HTU11.png";
import Ingre1 from "@/app/assets/b2gProduct/Igd1.png";
import Ingre2 from "@/app/assets/b2gProduct/Igd2.png";
import Ingre3 from "@/app/assets/b2gProduct/Igd3.png";
import Ingre4 from "@/app/assets/b2gProduct/Igd4.png";
import Ingre5 from "@/app/assets/b2gProduct/Igd5.png";
import Ingre6 from "@/app/assets/b2gProduct/Igd6.png";
import Ingre7 from "@/app/assets/b2gProduct/Igd7.png";
import Ingre8 from "@/app/assets/b2gProduct/Igd8.png";
import AOS from "aos";
import { useEffect } from "react";

export default function Ingredients() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="py-10 md:py-20" id="ingredient">
      <div className="pb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ingredients</h2>
        <p className="sm:text-2x mb-6 text-lg">The value of green living.</p>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:gap-8 xl:gap-10">
        <div
          className="flex flex-col items-center text-center lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="mb-2 h-[100px] w-[100px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:h-[100px] lg:w-[900px]"
            style={{
              backgroundImage: `url(${Ingre1.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <h1 className="mb-5 text-lg font-bold">Mentha Arvensis Leaf Oil</h1>

            <p className="mb-10 text-sm">
              The anti-bacterial activity and anti-infective properties of
              menthol help reduce pimples and lesions such as papules, pustules,
              nodules, cysts, and milia. Use oils or serums enriched with
              organic menthol for the face and body consistently, improving
              blood circulation and enhancing skin tone. Peppermint essential
              oil is used to soothe inflammation, irritation, and itching on the
              skin and scalp. It promotes wound healing, and it is also touted
              as a natural remedy to soothe bug bites and help relieve itching,
              a common skin infection that leads to rashes, hives, and
              itchiness.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="mb-2 h-[100px] w-[100px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:h-[150px] lg:w-[900px]"
            style={{
              backgroundImage: `url(${Ingre2.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <h1 className="mb-5 text-lg font-bold">Eucalyptus Oil</h1>

            <p className="mb-10 text-sm">
              Eucalyptus Oil is a popular ingredient in balms, inhalers, massage
              blends, and dental hygiene products for its soothing, stimulating,
              and anti-bacterial properties. Eucalyptus Essential Oils support
              the respirato- ry system and soothe physical discomforts. The
              healing benefits of Eucalyptus Oil can be attributed to its
              anti-inflammatory, antispasmodic, decon- gestant, deodorant, and
              antiseptic qualities, among other valuable properties.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="mb-2 h-[100px] w-[150px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:h-[100px] lg:w-[1000px]"
            style={{
              backgroundImage: `url(${Ingre3.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <h1 className="mb-5 text-lg font-bold">
              Zingiber officinale Extract
            </h1>

            <p className="mb-10 text-sm">
              Used in aromatherapy applications, Ginger Essential Oil is
              stimulating and warming. It can enhance concentration and it can
              soothe and reduce feelings of stress, sadness, anxiety, lethargy,
              agitation, dizziness, and fatigue. Used topically, Ginger
              Essential Oil soothes redness, eliminates bacteria, inhibits the
              signs of skin damage and aging, and restores color and radiance to
              a dull complexion. Used medicinally, Ginger Essential Oil
              facilitates the elimination of toxins, boosts digestion, eases
              discom- forts of the stomach and bowel, enhances appetite, clears
              the respiratory tract, soothes aches, and reduces inflammation.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="mb-2 h-[100px] w-[100px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:h-[100px] lg:w-[1700px]"
            style={{
              backgroundImage: `url(${Ingre4.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <h1 className="mb-5 text-lg font-bold">Ocimum Basilicum Oil</h1>

            <p className="mb-10 text-sm">
              In aromatherapy, Sweet Basil Essential Oil is reputed to
              stimulate, clarify, calm, fortify, energize, and uplift the mind.
              It is also said to repel insects, eliminate odor-causing bacteria,
              soothe headaches, and relieve respiratory as well as digestive
              discomforts. When used on the skin, Sweet Basil Essential Oil is
              reputed to nourish, repair, balance, calm, smooth, exfoliate, and
              brighten the complexion. When used in hair, Sweet Basil Essential
              Oil cleanses, refreshes, hydrates, softens, and strengthens the
              strands. When used medicinally, Sweet Basil Essential Oil is
              reputed to ease minor skin irritations, cramps, joint pain,
              muscular aches, spasms, gout, flatulence, and exhaustion. It is
              also said to enhance immune function, protect against infection,
              reduce water retention, and stabilize irregular menstruation.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="mb-2 h-[100px] w-[100px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:h-[150px] lg:w-[600px]"
            style={{
              backgroundImage: `url(${Ingre5.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <h1 className="mb-5 text-lg font-bold">Pluchea Indica Oil</h1>

            <p className="mb-10 text-sm">
              It is utilized to cure several illnesses such as lumbago, kidney
              stones, leucorrhea, inflammation, gangre- nous and atonic ulcers,
              hemorrhoids, dysentery, eye diseases, itchy skin, acid stomach,
              dysuria, abdomi- nal pain, scabies, fever, sore muscles,
              dysentery, diabetes, rheumatism, etc. The plant or its leaves in
              the form of tea are commonly used for treating diabetes and
              rheumatism.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="mb-2 h-[100px] w-[100px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:h-[200px] lg:w-[800px]"
            style={{
              backgroundImage: `url(${Ingre6.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <h1 className="mb-5 text-lg font-bold">
              Artemisia vulgaris Extract
            </h1>

            <p className="mb-10 text-sm">
              In particular, according to research, wormwood contains the active
              ingredient Tanin - which has a mild anti-inflammatory effect,
              helps prevent the appearance of small blisters, and cures eczema
              (eczema) and some other types of skin inflammation. For oily skin,
              wormwood also has a cleansing effect, eliminating bacteria and
              dirt on the skin thanks to its fat-dissolving effect.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="mb-2 h-[100px] w-[100px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:h-[100px] lg:w-[350px]"
            style={{
              backgroundImage: `url(${Ingre7.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <h1 className="mb-5 text-lg font-bold">Cinnamomum Oil</h1>

            <p className="mb-10 text-sm">
              Used in aromatherapy, Cinnamon Bark Essential Oil helps to relax,
              manage stressful feelings and enhance mood. It is also warming to
              the touch and has a purifying character that helps to clear
              airways and promote deep breathing.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center lg:flex-row lg:text-left"
          data-aos="fade-up"
        >
          <div
            className="mb-2 h-[100px] w-[100px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg lg:h-[130px] lg:w-[650px]"
            style={{
              backgroundImage: `url(${Ingre8.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <h1 className="mb-5 text-lg font-bold">Piper Betle Leaf Extract</h1>

            <p className="mb-10 text-sm">
              Leaf extracts and purified compounds of P. betel have antiseptic,
              antibacterial, antioxidant, anti-inflamma- tory, anti-cancer, and
              immunomodulatory efficacy. It contains various phytochemicals,
              such as alkaloids, flavonoids, steroids, saponins, and tannins,
              and it also contains sugar, diastases, and essential oil.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 text-center" data-aos="fade-up" id="use">
        <p className="sm:text-2x mb-2 text-lg">Essential Oil can heal.</p>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">How to use</h2>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:gap-8 xl:gap-10">
        <div className="flex flex-col items-center text-center">
          <div
            className="h-[120px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use1.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              Put the essential oil in the palm of your hanh and rub your hands
              together to help diffuse the oil with warmth.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[120px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use2.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              Bring your palm to your nose-mouth, take a deep breath to enjoy
              the feeling of nasal decongestion, cool throat and mental
              relaxation..
            </p>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use3.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              Rub the oil into the navel and abdomen to help relieve abbominal
              pain quickly.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use4.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              Rub and massage the Oil into painful areas or acupuncture points
              to help relieve pain effectively.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use5.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              Inhale and apply the oil to the temples, neck area, and the
              acupoint behind the earlobe to help relieve symptoms of nausea,
              carsick, sluggishness, and fatigue.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[130px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use6.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              If you have a toothache, you can put oil in it for quick pain
              relief.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use7.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              Apply the oil to the mask every time you go out to help you stay
              awake and refreshed; at the same time, the oil helps antibacterial
              to protect comprehensive health.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use8.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              Apply the oil to the area of the skin that is allergic to fur,
              pollen,... insect stings to help reduce swelling and itching.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use9.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              When coughing, dab oil on the end of the tongue, swallow slowly;
              helps clear and relieve itching in the throat.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use10.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              In case of injury, wash the wound with water, apply essential oil
              to help stop bleeding, relieve pain.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <div
            className="h-[150px] w-[120px] transform-gpu place-items-center rounded-3xl bg-cover bg-center bg-no-repeat transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:block"
            style={{
              backgroundImage: `url(${Use11.src})`, // Use backgroundImage to set the image
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="ml-4"
            id="content1"
            style={{ width: "auto", height: "auto" }}
          >
            <p className="my-5 text-sm">
              Diffusing the oil with a diffuser in the room helps to purify and
              clean the air, creating a cool living space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
