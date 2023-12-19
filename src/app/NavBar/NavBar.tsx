import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/LogoLYSByB2Greene.png";
import { redirect } from "next/navigation";
import { getCart } from "../lib/db/cart";
import { ShoppingCartButton } from "./ShoppingCartButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserMenuButton from "./UserMenuButton";

async function searchProducts(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();
  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row ">
        <div className="relative flex-1">
          <Link
            href="/"
            className="btn btn-ghost absolute z-10 h-auto text-xl normal-case"
          >
            <Image src={logo} height={60} width={120} alt="LYS logo" />
          </Link>
        </div>

        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  );
}

//bg-gradient-to-r from-[#F0ECF3] via-[#EBEAF8] to-[#DEDFFC]
