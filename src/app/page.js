import Image from "next/image";
import About from "./about/page";
import Products from "./products/page";
import { redirect } from "next/navigation";

export const metadata = {
  title: "ITI Next.JS",
  description:
    "A Next.js project for ITI Frontend Development & Cross Platform Mobile Applications training courses and tutorials.",
};

export default function Home() {
  const goToProducts = async () => {
    "use server";
    await redirect("/products");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold text-black dark:text-white mb-10">
          Welcome to Next.js
        </h1>

        <form action={goToProducts}>
          <button className=" bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Products
          </button>
        </form>
      </main>
    </div>
  );
}
