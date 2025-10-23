"use client";

import React, { Suspense, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    street: "",
    city: "",
  });

  const fetchUsers = async () => {
    const res = await fetch("/usersData");
    const data = await res.json();
    console.log(data);

    setUsers(data);
  };

  const toggleShowUsers = () => {
    setShowUsers(!showUsers);
  };

  const handleAddUser = () => {
    const { name, email, phone, website, address, street, city, id } =
      userInput;

    // Check if we're updating (id exists) or adding (no id)
    if (id) {
      // Update existing user - restructure the data
      const updatedUser = {
        id,
        name,
        email,
        phone,
        website,
        address: {
          address: address,
          street: street,
          city: city,
        },
      };
      fetch(`/usersData`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      }).then(() => {
        fetchUsers();
        setShowForm(false);
        setUserInput({
          name: "",
          email: "",
          phone: "",
          website: "",
          address: "",
          street: "",
          city: "",
        });
      });
    } else {
      // Add new user - also needs proper structure
      const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        website,
        address: {
          address: address,
          street: street,
          city: city,
        },
      };
      fetch("/usersData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      }).then(() => {
        fetchUsers();
        setShowForm(false);
        setUserInput({
          name: "",
          email: "",
          phone: "",
          website: "",
          address: "",
          street: "",
          city: "",
        });
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleDeleteUser = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;
    fetch(`/usersData`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }).then(() => {
      fetchUsers();
    });
  };

  const handleUpdateUser = (user) => {
    setShowForm(true);
    setUserInput({
      id: user.id,
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      website: user.website || "",
      address: user.address?.address || "",
      street: user.address?.street || "",
      city: user.address?.city || "",
    });
    // Don't send the fetch request here!
  };

  const toggleForm = () => {
    if (!showForm) {
      // Opening the form - clear it
      setUserInput({
        name: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        street: "",
        city: "",
      });
    }
    setShowForm(!showForm);
  };

  return (
    <div className="flex flex-col mt-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <h1 className="text-3xl font-bold mb-3">Users</h1> */}
      <div className="flex gap-2 justify-center items-center ">
        <button
          onClick={fetchUsers}
          className=" bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Users
        </button>

        <button
          onClick={toggleShowUsers}
          className="bg-gray-600 shadow-md  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Show Users
        </button>
        <button
          onClick={toggleForm}
          className="bg-gray-600 shadow-md  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Show Form
        </button>
      </div>
      \
      {showForm && (
        <>
          <h1 className="text-3xl font-bold mt-3">
            {userInput.id ? "Update User" : "Add User"}
          </h1>
          <div className="flex flex-col gap-2 justify-center items-center mt-2">
            <input
              type="text"
              name="name"
              value={userInput.name}
              onChange={handleInputChange}
              placeholder="Enter user name"
              className="border text-white border-gray-300 p-2 rounded-md"
            />

            <input
              type="email"
              name="email"
              value={userInput.email}
              onChange={handleInputChange}
              placeholder="Enter user email"
              className="border text-white border-gray-300 p-2 rounded-md"
            />

            <input
              type="text"
              name="phone"
              value={userInput.phone}
              onChange={handleInputChange}
              placeholder="Enter user phone"
              className="border text-white border-gray-300 p-2 rounded-md"
            />

            <input
              type="text"
              name="website"
              value={userInput.website}
              onChange={handleInputChange}
              placeholder="Enter user website"
              className="border text-white border-gray-300 p-2 rounded-md"
            />

            <input
              type="text"
              name="address"
              value={userInput.address}
              onChange={handleInputChange}
              placeholder="Enter user address"
              className="border text-white border-gray-300 p-2 rounded-md"
            />

            <input
              type="text"
              name="street"
              value={userInput.street}
              onChange={handleInputChange}
              placeholder="Enter user street"
              className="border text-white border-gray-300 p-2 rounded-md"
            />

            <input
              type="text"
              name="city"
              value={userInput.city}
              onChange={handleInputChange}
              placeholder="Enter user city"
              className="border text-white border-gray-300 p-2 rounded-md"
            />

            <button
              onClick={handleAddUser}
              className="bg-gray-600 shadow-md  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              {userInput.id ? "Update User" : "Add User"}
            </button>
          </div>
        </>
      )}
      <Suspense
        className="text-white text-3xl font-bold"
        fallback={<h1>Loading...</h1>}
      >
        {showUsers && (
          <div className=" mt-5 space-y-4 grid grid-cols-3 gap-4">
            {users.map((user) => (
              <User
                user={user}
                key={user.id}
                handleDeleteUser={handleDeleteUser}
                handleUpdateUser={handleUpdateUser}
              />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Users;
