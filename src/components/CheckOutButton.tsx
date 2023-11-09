"use client";

import React, { useState } from "react";
import getStripe from "@/utils/get-stripejs";

interface CheckOutButtonProps {
  isDisabled: boolean;
}

//let stripePromise: any;

// //Load Stripe to Checkout
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(
//       "pk_test_51N71cdDTggahj9sxb0nEAKsxnQK9W66BXay41Y8GUlh9ODtPP4TEqWMBxoWAPN423b4lrvmgO0FvCbvqNJj42udW00DcJfyCWZ",
//     );
//   }
//   return stripePromise;
// };

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

    //Handle server error
    if ((response as any).statusCode === 500) {
      console.error((response as any).message);
      return;
    }

    const data = await response.json(); //Get data from stripe

    const stripe = await getStripe();

    const { error } = await stripe!.redirectToCheckout({
      //Get page checkout from data of Stripe
      sessionId: data.id,
    });

    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.warn(error.message);
      setStripeError(error.message as any);
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
