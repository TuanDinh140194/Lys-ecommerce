import { getCart } from "@/app/lib/db/cart";
import { stripe } from "@/app/lib/stripe/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  //const cartDetails = await request.json();
  const cart = await getCart();         //Get cart items

  if (cart) {
    //Convert cart to line_items format to send to Stripe
    const cartItems = cart.items.map((item) => ({
      price_data: {
        currency: "USD",
        product_data: {
          name: item.product.name, // Assuming 'name' is available in cart items
          description: item.product.description, // Assuming 'description' is available in cart items
          images: [item.product.imageUrl], // Assuming 'imageUrl' maps to 'image'
        },
        unit_amount: item.product.price, // Assuming price is in dollars, convert to cents
      },
      quantity: item.quantity,
    }));

    const origin = request.headers.get("origin");

    //Create the session on Stripe
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      line_items: cartItems,
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      billing_address_collection: "auto",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
    });
    return NextResponse.json(session);
  } else {
    // Handle the case when cart is null
    return;
  }
}
