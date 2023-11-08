"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { error } from "console";

interface CheckOutButtonProps {
  isDisabled: boolean;
}

let stripePromise: any;

//Load Stripe to Checkout
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51N71cdDTggahj9sxb0nEAKsxnQK9W66BXay41Y8GUlh9ODtPP4TEqWMBxoWAPN423b4lrvmgO0FvCbvqNJj42udW00DcJfyCWZ",
    );
  }
  return stripePromise;
};

export default function CheckOutButton({ isDisabled }: CheckOutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [stripeError, setStripeError] = useState(null);
  const disabled = isDisabled || loading;

  //Function call when checkout button is clicked
  async function onCheckOut() {
    //Handle Stripe error state

    setLoading(true);
    //Send Post request to Stripe API
    const response = await fetch("/api/checkout", {
      method: "POST",
      //body: JSON.stringify(cartDetails),
    });
    const data = await response.json(); //Get data from stripe

    const stripe = await getStripe();

    const result = await stripe.redirectToCheckout({
      //Get page checkout from data of Stripe
      sessionId: data.id,
    });

    if (result?.error) {
      console.error(result);
      setStripeError(result.error.message);
    }

    if (stripeError) alert(stripeError);
    setLoading(false);
  }

  return (
    <div className="flex">
      <button
        onClick={onCheckOut}
        className={`btn btn-primary sm:w-[200px]`}
        disabled={disabled}
      >
        {loading ? "Loading..." : "Check Out"}
      </button>
      {loading && <span className="loading loading-spinner loading-md ml-2" />}
    </div>
  );
}
