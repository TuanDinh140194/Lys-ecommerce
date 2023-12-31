import type { Metadata } from "next";
import Image from "next/image";
import { prisma } from "../lib/db/prisma";
import ProductCard from "@/components/ProductCard";
import PaginationBar from "@/components/PaginationBar";
import Link from "next/link";

interface HomeProps {
  searchParams: { page: string };
}

export const metadata: Metadata = {
  title: "LYS - Shop All",
  description: "We make you love yourself",
};

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);

  const pageSize = 6;
  const heroItemCount = 1;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    
    <div className="flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold my-10">All Products From LYS</h1>
      {currentPage === 1 && (
        <div className="hero rounded-xl bg-base-200 hover:shadow-xl">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={products[0].imageUrl}
              alt={products[0].name}
              width={1000}
              height={1000}
              className="w-full max-w-sm h-[500px] rounded-lg shadow-2xl"
              priority
            />

            <div>
              <h1 className="text-xl p-4 badge badge-secondary">New Product</h1>
              <h1 className="text-5xl font-bold">{products[0].name}</h1>
              <p className="py-6">{products[0].description}</p>
              <Link
                className="btn btn-info"
                href={"/products/" + products[0].id}
              >
                Check it out
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {(currentPage === 1 ? products.slice(1) : products).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}

