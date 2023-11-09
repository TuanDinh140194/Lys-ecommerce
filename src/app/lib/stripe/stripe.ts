import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ??
    "sk_test_51N71cdDTggahj9sxqc3mIpLiYV6ECg8grFPM8ALFQ830f4i2dSX96qcGM0xBvyfNlvLF49xrCtFcJYlPUCJcGDx500SUJsGTGW",
  {
    apiVersion: "2023-10-16",
  },
);
