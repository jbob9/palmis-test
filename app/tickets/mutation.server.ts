"use server";

import MoncashSDK from "moncash-sdk";
import Stripe from "stripe";

export const payTicket = async (
  paymentType: string,
  amount: number,
  quantity: number
) => {
  const referenceId = crypto.randomUUID();
  if (paymentType === "moncash") {
    const moncash = new MoncashSDK({
      clientId: process.env.MONCASH_CLIENT_ID!,
      clientSecret: process.env.MONCASH_CLIENT_SECRET!,
      mode: "sandbox",
    });

    // Create a new payment
    const payment = await moncash.createPayment(amount, referenceId);
    return payment;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-08-27.basil",
  });

 const res = await stripe.checkout.sessions.create({
    client_reference_id: referenceId,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Tickets",
            // images: [product.image],
          },
          unit_amount: (amount * 100) / quantity,
        },
        quantity: quantity,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000`,
  });

  return {
    redirectUrl: res.url,
    paymentToken: referenceId,
}
};


export const payKit = async (amount: number) => {
  const referenceId = crypto.randomUUID();
  const moncash = new MoncashSDK({
    clientId: process.env.MONCASH_CLIENT_ID!,
    clientSecret: process.env.MONCASH_CLIENT_SECRET!,
    mode: "sandbox",
  });

  // Create a new payment
  const payment = await moncash.createPayment(amount, referenceId);
  return payment

};