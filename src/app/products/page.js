// "use client"

// import Image from "next/image";
// import { redirect } from "next/navigation";
// import React, { Suspense, useEffect, useState } from "react";
import React, { Suspense } from "react";
import ProductsList from "./ProductsList";

const Products = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     // console.log(data);
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="flex flex-col  mt-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">Products</h1>
      {/* <div className=" mt-5 space-y-4 grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg
             shadow-sm dark:bg-gray-800 dark:border-gray-700
              dark:hover:bg-gray-700 hover:bg-gray-50 hover:scale-105 transition-all 
              duration-300
              flex flex-col items-center"
          >
            <Image
              className="rounded-t-lg "
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
            />

            <div className="p-5">
              <button onClick={() => redirect(`/products/${product.id}`)}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </button>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <Suspense
        fallback={
          <p className="text-white text-3xl font-bold mt-5">Loading...</p>
        }
      >
        <div className=" mt-5 space-y-4">
          <ProductsList />
        </div>
      </Suspense>
    </div>
  );
};

export default Products;
