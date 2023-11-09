//Load Stripe to Checkout
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.STRIPE_PUBLIC_KEY ??
        "pk_test_51N71cdDTggahj9sxb0nEAKsxnQK9W66BXay41Y8GUlh9ODtPP4TEqWMBxoWAPN423b4lrvmgO0FvCbvqNJj42udW00DcJfyCWZ",
    );
  }
  return stripePromise;
};

export default getStripe;
