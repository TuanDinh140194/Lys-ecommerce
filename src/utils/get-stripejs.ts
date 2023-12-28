//Load Stripe to Checkout
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.STRIPE_PUBLIC_KEY ??
        "pk_live_51ON9NiIyNJBxTIRY7I2UZc8W1XEV87cK0e2tmA6hm9X0d9ekL1BjANGsEbZql0Mfmpa4umqGURJhPA14Zt9XYRmT00HaQA4u20",
    );
  }
  return stripePromise;
};

export default getStripe;
