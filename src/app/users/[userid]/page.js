import Image from "next/image";
import React from "react";

import { notFound } from "next/navigation";
import NotFound from "./not-found";

export async function generateMetadata({ params }) {
  const { userid } = await params;
  let res;
  let data;
  try {
    res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
    data = await res.json();
    if (!res.ok) {
      return {
        title: "User Not Found",
      };
    }
  } catch (error) {
    console.log("Error fetching user details:", error);
  }
  return {
    // title: ` ${data.name}`,
    title: data.name,
    description: `User Details Page - ${data.name}`,
  };
}

const Details = async ({ params }) => {
  const { userid } = await params;
  let res;
  let data;
  try {
    res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);

    if (!res.ok) {
      return notFound();
    }

    data = await res.json();
  } catch (error) {
    console.log("Error fetching user details:", error);
    // return <NotFound />;
    return notFound();
  }

  return (
    <div
      className="flex flex-col gap-7 min-h-screen items-center justify-center
     bg-zinc-50 font-sans dark:bg-black"
    >
      <h1 className="text-3xl font-bold mb-7 text-black dark:text-white">
        User Details Page - {userid}
      </h1>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex flex-col items-center">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
          <span className="text-2xl font-bold mb-5">{data.username}</span>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.email}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data?.address?.city}, {data?.address?.street}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
