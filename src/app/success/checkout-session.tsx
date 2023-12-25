"use client";

import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../lib/utils";
import Stripe from "stripe";

import React, { useEffect } from "react";

interface Props {
  customerDetails: Stripe.Checkout.Session.CustomerDetails | null;
}

const CheckoutSession =  ({ customerDetails }: Props) => {
  useEffect ( () => {
    if (customerDetails) {
      runFireworks();
      
    }
  }, [customerDetails]);

  if (!customerDetails) {
    return (
      <h1 className="text-5xl font-bold tracking-tight text-red-400 sm:text-3xl">
        No checkout session found
      </h1>
    );
  }

  return (
    <div className="hero-content flex-col">
      <p className="">
        <BsBagCheckFill className="text-4xl text-green-600" />
      </p>
      <h2 className="mt-4 text-4xl font-black capitalize text-[#324d67]">
        Thank you for your order, {customerDetails.name}!
      </h2>
      <p className="text-md font-semibold">
        Check your email {customerDetails.email} inbox for the receipt.
      </p>
      <p className="my-10 font-semibold">
        If you have any questions, please email{" "}
        <a href="mailto:info@b2greene.com" className="text-amber-600">
          info@b2greene.com
        </a>
      </p>
    </div>
  );
};

export default CheckoutSession;
