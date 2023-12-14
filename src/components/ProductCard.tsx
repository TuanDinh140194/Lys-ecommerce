import { Product } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import PriceTag from "./priceTag";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const isNew =
    Date.now() - new Date(product.createAt).getTime() < 1000 * 60 * 60 * 24 * 7;

    const descriptionStyle: React.CSSProperties = {
      maxHeight: "7.2em", // 7 lines assuming a line height of 1.2em
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      wordWrap: "break-word",
      lineHeight: "1.2em",
    };

  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-200 transition hover:shadow-2xl"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {isNew && <div className="badge badge-secondary">NEW</div>}
        <p style={descriptionStyle}>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
};

export default ProductCard;
