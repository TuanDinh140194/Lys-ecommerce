import React from "react";
import { prisma } from "../lib/db/prisma";
import type { Metadata } from "next";
import ProductCard from "./productCards";

export const metadata: Metadata = {
  title: "LYS - BhMedShop",
  description: "We make you love yourself",
};

const BhMedShop = async () => {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: "Vital Softgel",
      },
    },
  });
  return (
    <div>
      <h1 className="text-4xl font-bold my-10">BhMed Vital SoftGel Products</h1>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default BhMedShop;
