import CheckOutButton from "@/components/CheckOutButton";
import { getCart } from "../lib/db/cart";
import formatPrice from "../lib/format";
import { setProductQuantity } from "./actions";
import CartEntry from "./cartEntry";
import Link from "next/link";
import { BsCartX } from "react-icons/bs";

export const metadata = {
  title: "Your Cart - LYS",
};

export default async function CartPage() {
  const cart = await getCart();

  const isDisabled = !cart?.items.length;
  return (
    <div className="h-screen">
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && (
        <div>
          <BsCartX className="text-5xl text-gray-500"/>
          <p className="mb-5">Your cart is empty</p>
          <Link href={"/shop"} className="text-amber-600 underline">Add more products to your cart</Link>
        </div>
      )}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <CheckOutButton isDisabled={isDisabled} />
      </div>
    </div>
  );
}
