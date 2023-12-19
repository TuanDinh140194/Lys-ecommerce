import React from "react";
import P1 from "@/app/assets/b2gProduct/P1.png";
import P2 from "@/app/assets/b2gProduct/P2.png";
import P3 from "@/app/assets/b2gProduct/P3.png";
import warning from "@/app/assets/b2gProduct/WarningLogo.png";
import Image from "next/image";

const Acupuncture = () => {
  return (
    <section className="" id="acupunture">
      <div className="text-center">
        <h2 className="text-3xl font-bold">The Acupuncture </h2>
        <p>Take Acupuncture with Le+Pure</p>
      </div>

      <div className="py-10">
        <p className="pb-5">
          Acupuncture points located on the body are thought to be extremely
          sensitive, potentially stimulating the pain-reducing mechanism in the
          body. Acupuncturists believe that working on acupuncture points in a
          certain way can: (1) Improve health, (2) Relieve pain and (3) Restore
          balance.
        </p>
        <p>
          Use essential oils to massage 2-5 times daily into painful areas and
          compatible acupuncture points will help relieve pain and inflammation;
          depend on the state of injury to adjust the number of times
          accordingly.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 text-center">
        <h2 className="text-lg font-bold">Headache</h2>
        <div className="flex items-center justify-center pb-10">
          <Image
            src={P1.src}
            alt="P1"
            width={600}
            height={500}
            className="md:max-w-full"
          />
        </div>

        <h2 className="text-lg font-bold">Sinusitis</h2>
        <div className="flex items-center justify-center pb-10">
          <Image
            src={P2.src}
            alt="P1"
            width={600}
            height={500}
            className="md:max-w-full"
          />
        </div>

        <h2 className="text-lg font-bold">Stomachache</h2>
        <div className="flex items-center justify-center pb-10">
          <Image
            src={P3.src}
            alt="P1"
            width={600}
            height={500}
            className="md:max-w-full"
          />
        </div>
      </div>

      <div className="py-10 text-center">
        <h2 className="pb-10 text-3xl font-bold">Warning </h2>

        <div className="grid grid-cols-1 md:flex md:grid-cols-2 md:justify-center">
          <div className="flex justify-center p-4">
            <Image
              src={warning.src}
              alt="P1"
              width={100}
              height={100}
              className="md:max-w-full"
            />
          </div>
          <div className="font-semibold md:text-left">
            <p>- Do not drink; For adults and children over 2 years old;</p>
            <p>- Store in dry and cool place;</p>
            <p>- Avoid contacting with eyes; Keep out of reach of children</p>
            <p>
              - Do not use for people who are allergic to any of the ingredients
              in the product
            </p>
            <p>
              - Consult a doctor when using for pregnant and lactating women
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acupuncture;
