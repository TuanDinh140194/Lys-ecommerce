import formatPrice from "@/app/lib/format";

interface PricetagProps {
  price: number;
  className?: string;
}

const priceTag = ({ price, className }: PricetagProps) => {
  return <span className={`badge ${className}`}>{formatPrice(price)}</span>;
};

export default priceTag;
