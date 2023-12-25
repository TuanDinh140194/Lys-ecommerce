"use server";
import { getUserId } from "../lib/db/cart";
import { prisma } from "../lib/db/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/dist/client/components/headers";

export async function clearCart() {
  const localCartId = cookies().get("localCartId")?.value;
  const userId = await getUserId();
  if (userId) {
    const userCart = await prisma.cart.findFirst({
      where: { userId },
    });

    if (userCart) {
      await prisma.cart.delete({
        where: { id: userCart.id },
      });
    }
  }

  if (localCartId) {
    await prisma.cart.delete({
      where: { id: localCartId },
    });
    cookies().set("localCartId", "");
  }
  
  revalidatePath("/success");
}
