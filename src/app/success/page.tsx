import React from "react";
import { stripe } from "../lib/stripe/stripe";
import CheckoutSession from "./checkout-session";
import { clearCart } from "./action";

interface Props {
  searchParams: {
    session_id?: string;
  };
}

const Success = async ({ searchParams }: Props) => {
  const sessionId = searchParams?.session_id ?? "";

  const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
  const customerDetails = checkoutSession?.customer_details;

  return (
    <div className="hero h-[500px] rounded-2xl bg-base-200">
      <CheckoutSession
        customerDetails={customerDetails}
        clearCart={clearCart}
      />
    </div>
  );
};

export default Success;
