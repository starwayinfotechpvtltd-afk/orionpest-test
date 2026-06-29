import React from "react";
import { Shield, Target, Leaf, CalendarDays } from "lucide-react";
import InfoCard from "./ui/InfoCard";
import Image from "next/image";

export default function Diagram({
  topbadge,
  heading,
  desc,
  leftFeature,
  rightFeature,
}) {
  const locations = [
    {
      icon: "/Images/icon/icon2.png",
      title: "Commercial",
    },
    {
      icon: "/Images/icon/icon6.png",
      title: "Hotels",
    },
    {
      icon: "/Images/icon/icon1.png",
      title: "Residential",
      active: true,
    },
    {
      icon: "/Images/icon/icon7.png",
      title: "Restaurants",
    },
    {
      icon: "/Images/icon/icon5.png",
      title: "Warehouses",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[#F5F7FB] py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5f7fb_60%)]" />

      <div className="relative mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex bg-yellow-400 text-[#0D1A63] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-md text-xs sm:text-sm">
            {topbadge}
          </span>

          {heading}

          <p className="mt-4 text-gray-600 text-base sm:text-lg">{desc}</p>
        </div>

        {/* Main Content Dial Diagram Layout */}
        <div className="relative mt-3 md:mt-20 flex flex-col lg:flex-row items-center justify-center lg:gap-16 xl:gap-20">
          {/* Left Features */}
          <div className="space-y-8 md:space-y-10 w-full sm:max-w-md lg:w-72 order-2 lg:order-1">
            {leftFeature.map((item, index) => (
              <div key={index}>
                <InfoCard
                  index={index}
                  title={item.heading}
                  description={item.desc}
                />
              </div>
            ))}
          </div>

          {/* Center Circle Ring Group */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 my-6 lg:my-0 scale-75 sm:scale-100">
            <div className="absolute w-[400px] h-[400px] sm:w-[430px] sm:h-[430px] lg:w-[460px] lg:h-[460px] rounded-full border-[10px] sm:border-[14px] border-[#2F3293]" />
            <div className="absolute w-[370px] h-[370px] sm:w-[390px] sm:h-[390px] lg:w-[420px] lg:h-[420px] rounded-full border-[6px] sm:border-[8px] border-blue-200" />
            <div className="absolute top-12 sm:top-8 left-2 w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="absolute top-12   sm:top-8 right-2 w-3 h-3 bg-yellow-400 rounded-full" />

            <div className="relative w-[350px] h-[350px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl border-[6px] sm:border-[10px] border-white">
              <Image
                src="/Images/icon/icon4.webp"
                alt="House"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute z-[2] -bottom-5  w-28 sm:w-36 h-28 sm:h-36">
              <Image
                src="/Images/icon/icon3.png"
                alt="icon"
                fill
                className="object-cover z-[2]"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-8 md:space-y-10 w-full sm:max-w-md lg:w-72 order-3">
            {rightFeature.map((item, index) => (
              <div key={index}>
                <InfoCard
                  index={index+2}
                  title={item.heading}
                  description={item.desc}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Location Cards Component List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 bg-[#F5F7FB] relative mt-10 lg:-mt-5">
          {locations.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border ${
                item.active ? "border-blue-600 lg:scale-105" : "border-gray-100"
              }`}
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-blue-50 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={`${item.icon}/${index}`}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="mt-5 text-lg sm:text-xl font-semibold text-[#07155F]">
                {item.title}
              </h3>
              <div className="mt-3 w-12 h-1 bg-yellow-400 mx-auto rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
