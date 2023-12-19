import React from "react";
import { prisma } from "../lib/db/prisma";
import type { Metadata } from "next";
import ProductCard from "./productCard";

export const metadata: Metadata = {
  title: "LYS - B2GreeneShop",
  description: "We make you love yourself",
};

const B2GreeneShop = async () => {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: "Oil",
      },
    },
  });
  return (
    <div>
      <h1 className="text-4xl font-bold my-10">B2Greene Le+Pure Medicated Essential Oil</h1>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default B2GreeneShop;
