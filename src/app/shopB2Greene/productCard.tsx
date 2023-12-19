

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HomeProps {
  product: any;
}

const productCards = ({ product }: HomeProps) => {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="h-[400px] w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />

          <div>
            <h1 className="badge badge-secondary p-4 text-xl">B2Greene Product</h1>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="py-6">{product.description}</p>
            <p className="py-6">Ingredient: Mentha Arvensis Leaf Oil, Eucalyptus Oil, Zingiber officinale Extract, Ocimum Basilicum Oil, Pluchea Indica Oil, Artemisia vulgaris Extract, Cinnamomum Oil, Piper Betle Leaf Extract.</p>

            <Link className="btn btn-info" href={"/products/" + product.id}>
              Check it out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productCards;
