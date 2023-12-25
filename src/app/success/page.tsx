import Link from "next/link";
import { clearCart } from "../lib/db/cart";
import React from "react";
import { stripe } from "../lib/stripe/stripe";
import CheckoutSession from "./checkout-session";

interface Props {
  searchParams: {
    session_id?: string;
  };
}

const Success = async ({ searchParams }: Props) => {
  await clearCart();  
  const sessionId = searchParams?.session_id ?? "";

  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
  const customerDetails = checkoutSession?.customer_details;
  
  
  return (
    <div className="hero h-[500px] rounded-2xl bg-base-200">
      <div className="hero-content flex-col">
        <CheckoutSession customerDetails={customerDetails} />
        <Link href="/shop">
          <button className="btn btn-info">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
