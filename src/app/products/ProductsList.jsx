import Image from "next/image";
import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const ProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <div className=" mt-5 space-y-4 grid grid-cols-3 gap-4">
      {data.map((product) => (
        <div
          key={product.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg
                 shadow-sm dark:bg-gray-800 dark:border-gray-700
                  dark:hover:bg-gray-700 hover:bg-gray-50 hover:scale-105 transition-all 
                  duration-300
                  flex flex-col items-center h-100 overflow-hidden text-clip "
        >
          <Image
            className="rounded-t-lg mt-1.5"
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
          />

          <div className="p-5">
            <Link className="decoration-0 " href={`/products/${product.id}`}>
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal overflow-hidden  text-ellipsis text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
