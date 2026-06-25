import React from "react";
import List from "./ui/List";
import {
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
  Crosshair,
  Clock3,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdvanceControl({image}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 py-5 flex flex-col lg:flex-row items-center gap-12">
        {/* Left section */}
        <div className="w-full lg:w-[50%]">
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
            Advanced Cockroach Control for
            <span className="text-[#1095D9]"> Homes & Businesses</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mt-6 text-gray-600">
            Our expert solutions eliminate cockroaches at the source and keep
            your spaces hygienic, safe and healthy. Long-lasting protection you
            can trust.
          </p>
          <div className="mt-8 space-y-2">
            <List
              icon={<Crosshair size={25} />}
              title="Kills Cockroaches at the Source"
              bgColor="#FDD608"
              color="#000"
            />
            <List
              icon={<BadgeCheck size={25} />}
              title="Safe for Family, Pets & Environment"
              bgColor="#FDD608"
              color="#000"
            />
            <List
              icon={<Clock3 size={25} />}
              title="Long-Lasting Protection"
              bgColor="#FDD608"
              color="#000"
            />
          </div>
          <Link
            className="w-68 md:w-90 justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer mt-10  mx-auto"
            href="/contact"
          >
            BOOK FREE INSPECTION
            <ArrowRight size={18} />
          </Link>
        </div>
        {/* Right section */}
        <div className="w-full lg:w-[50%] flex justify-center relative">
          <div className="relative h-[330px] sm:h-[450px] md:h-[450px] 2xl:h-[650px] w-full max-w-2xl">
            <Image
              src={image}
              alt="cockroach"
              fill
              className="object-cover rounded-2xl"
            />
            {/* Badge Overlay */}
            <div className="absolute -right-4 top-4 sm:right-4 sm:top-10 lg:right-0 lg:top-0 xl:right-10 xl:top-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-3 sm:p-6 w-32 sm:w-48 flex flex-col justify-center items-center">
              <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                <ShieldCheck className="text-yellow-500 w-6 h-6 sm:w-12 sm:h-12" />
              </div>
              <p className="text-gray-600 text-[10px] sm:text-sm text-center leading-tight">
                India's Most Trusted Pest Control Brand
              </p>
              <span className="text-yellow-500 font-bold text-xs sm:text-base mt-1 sm:mt-2">
                Since 1970
              </span>
              <div className="w-12 sm:w-20 h-[2px] sm:h-[3px] bg-yellow-500 mt-1 sm:mt-2 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
