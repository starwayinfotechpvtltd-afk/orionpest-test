"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      setEmail("")
    }
  }
  return (
      <form action="" onSubmit={handleSubmit} className="flex flex-col items-center gap-4  justify-center mt-5 w-full mb-4">
        <input
          type="email"
          className="p-2 md:p-3 rounded-3xl bg-white w-full sm:w-96 text-black placeholder:text-gray-400"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        {/* button */}
        <button className="bg-[#FEF200] text-[#2F3293] px-10 md:px-20 py-3 rounded text-lg md:text-xl font-semibold">
          Contact Us
        </button>
      </form>
  );
}
