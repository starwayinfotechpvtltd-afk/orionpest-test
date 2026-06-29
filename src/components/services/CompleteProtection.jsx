import React from "react";
import { BadgeCheck, ArrowRight, Crosshair, Clock3 } from "lucide-react";
import List from "./ui/List";
import Image from "next/image";
import Link from "next/link";

export default function CompleteProtection({ heading, desc, list, image }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left section image */}
        <div className="w-full lg:w-[48%] flex justify-center relative order-2 lg:order-1">
          <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-3xl">
            <Image
              src={image}
              alt="cockroach"
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* Right section content */}
        <div className="w-full lg:w-[48%] order-1 lg:order-2">
          {heading}
          <p className="text-base sm:text-lg max-w-xl mt-4 text-gray-600">
            {desc}
          </p>
          <div className="mt-6 space-y-3">
            {list.map((item, index) => (
              <div key={index}>
                <List
                  title={item}
                  index={index}
                  bgColor="#2F3293"
                  color="#fff"
                />
              </div>
            ))}
          </div>
          <Link
            className="w-68 md:w-90 justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer mt-10 mx-auto md:mx-0"
            href="/contact"
          >
            BOOK FREE INSPECTION
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
