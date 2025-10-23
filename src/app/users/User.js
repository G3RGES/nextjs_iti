import Link from "next/link";

import React from "react";

const User = ({ user, handleDeleteUser, handleUpdateUser }) => {
  return (
    <div
      key={user.id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg
               shadow-sm dark:bg-gray-800 dark:border-gray-700
                dark:hover:bg-gray-700 hover:bg-gray-50 hover:scale-105 transition-all 
                duration-300
                flex flex-col items-center"
    >
      <div className="p-5">
        <Link href={`/users/${user.id}`} className="decoration-0 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.email}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.username ? user.username : "No Username"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {user.address?.city}, {user.address?.street}
        </p>
      </div>
      <button
        onClick={() => handleDeleteUser(user.id)}
        className="mb-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
      <button
        onClick={() => handleUpdateUser(user)}
        className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
    </div>
  );
};

export default User;
