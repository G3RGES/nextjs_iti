import Image from "next/image";
import React from "react";
import NotFound from "./not-found";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data.map((product) => ({
    productsid: product.id.toString(),
  }));
};

export async function generateMetadata({ params }) {
  const { productsid } = await params;
  let res;
  let data;
  try {
    res = await fetch(`https://fakestoreapi.com/products/${productsid}`);
    data = await res.json();
    if (!res.ok) {
      return {
        title: "Product Not Found",
      };
    }
  } catch (error) {
    console.log("Error fetching product details:", error);
  }
  return {
    openGraph: {
      images: [data.image],
    },
    favicon: data.image,
    title: ` ${data.title}`,
    // title: data.title,
    description: `Product Details Page - ${data.title}`,
  };
}

const Details = async ({ params }) => {
  // const [details, setDetails] = useState([]);
  const { productsid } = await params;
  let res;
  let data;
  try {
    res = await fetch(`https://fakestoreapi.com/products/${productsid}`);
    data = await res.json();
    //   console.log(data);
  } catch (error) {
    console.log("Error fetching product details:", error);
    // return <NotFound />;
    return notFound();
  }

  return (
    <div className="flex flex-col gap-7 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Product Details Page - {productsid}
      </h1>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex flex-col items-center">
        <Image
          className="rounded-t-lg "
          src={data.image}
          alt={data.title}
          width={200}
          height={200}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.description}
          </p>
          <span className="text-2xl font-bold">{data.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default Details;
