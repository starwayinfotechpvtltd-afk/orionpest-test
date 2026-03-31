"use client";
import Link from "next/link";
import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  

  const handleClick = (id) => {
    setNavLinks((prev) =>
      prev.map((nav) =>
        nav.id === id ? { ...nav, active: true } : { ...nav, active: false }
      )
    );
  };

  return (
    <header
      className="w-full"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
      }}
    >
      <div className="bg-[#2f3293] w-full  p-4">
        <div className="w[60%] flex flex-col gap-1 md:flex-row justify-around items-center">
          <div className="text-white">
            Email us:{" "}
            <Link href="mailto:sales@orionpest.com">sales@orionpest.com</Link>
          </div>
          <div className="text-white whitespace-break-spaces">
            National toll free helpline:{" "}
            <Link href="tel:18004198181">1800 419 8181</Link>
          </div>
          <div className="text-white">
            {/* TODO: ADD WHATSAPP LINK */}
            WhatsApp Us: <Link href="https://wa.me/919800123456">9800123456</Link>
          </div>
        </div>
      </div>
      {/* main nav bar */}
      <Navbar />
    </header>
  );
}
