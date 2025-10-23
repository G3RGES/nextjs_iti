"use client";
import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const [postInput, setPostInput] = useState("");

  const fetchPosts = async () => {
    const res = await fetch("/posts");
    const data = await res.json();
    setPosts(data);

    console.log(data);
  };

  const toggleShowPosts = () => {
    setShowPosts(!showPosts);
  };

  const handleAddPost = () => {
    if (postInput.trim() === "") return;
    // const newPost = {
    //   id: Date.now(),
    //   title: postInput,
    // };
    fetch("/posts", {
      method: "POST",

      body: JSON.stringify({ title: postInput }),
    }).then(() => {
      fetchPosts();
      setPostInput("");
    });
  };

  return (
    <div className="flex flex-col mt-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold mt-2 mb-5">Posts Page</h1>

      <button
        onClick={fetchPosts}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Posts
      </button>

      <button
        onClick={toggleShowPosts}
        className="bg-gray-600 shadow-md mt-2 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Posts
      </button>

      <input
        type="text"
        placeholder="Add a post"
        name="post"
        className=" border border-gray-300 rounded-md px-4 py-2 mt-4 focus:outline-none
         focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
        value={postInput}
        onChange={(e) => setPostInput(e.target.value)}
      />
      <button
        onClick={handleAddPost}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Add Post
      </button>

      {showPosts && (
        <div className="mt-5 space-y-4 ">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-5 border hover:scale-105 transition-all duration-300 border-gray-200 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl text-gray-400 font-bold mb-2">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
