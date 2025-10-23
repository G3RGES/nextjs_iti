import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
      <p className="text-gray-900 text-xl mt-5">
        The product you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
