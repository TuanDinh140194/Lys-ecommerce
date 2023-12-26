//Load Stripe to Checkout
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.STRIPE_PUBLIC_KEY ??
        "pk_test_51ON9NiIyNJBxTIRYjsCkWJcDDVerd8VyvgM46cTwPl6lIbTfsxU4U07SX9xahp5YBHui5buYmzomnU4Ou1LnstCF00oHH9gKjm",
    );
  }
  return stripePromise;
};

export default getStripe;
