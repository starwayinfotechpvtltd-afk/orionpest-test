"use client";
import React, { useState, useEffect } from "react";
import services from "../../app/pest-control-services/services.json";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const checkMobile=()=>{
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    // const handleResize = () => setIsMobile(window.innerWidth < 768);
    // window.addEventListener("resize", handleResize);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleServices =
    isMobile && !showAll ? services.slice(0, 3) : services;
  return (
    <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-4 xl:gap-10">
      {visibleServices.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center h-full"
        >
          <Image
            src={service.image}
            height={120}
            width={120}
            alt={service.service}
          />

          <h4 className="text-[#2F3293] font-semibold text-[20px] mt-4">
            {service.service}
          </h4>

          <div className="bg-[#FEF200] p-5 rounded-2xl mt-4 flex flex-col flex-1 w-full">
            <p className="flex-1">{service.text}</p>

            <Link
              href={`/${service.link}`}
              className="flex justify-center mt-4"
            >
              <button className="bg-[#2F3293] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 text-lg font-bold text-white px-5 lg:px-5 py-2 rounded">
                Read more
              </button>
            </Link>
          </div>
        </div>
      ))}
      {isMobile && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="bg-[#2F3293] text-center transitio duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 text-lg font-bold mt-3 text-white px-6 py-2 rounded cursor-pointer"
        >
          {" "}
          Show more{" "}
        </button>
      )}
    </div>
  );
}
