import React from "react";

import {
  ShieldCheck,
  FlaskConical,
  BadgeCheck,
  Phone,
  Users,
  Building2,
  MapPin,
  Headphones,
  ArrowRight,
} from "lucide-react";
import Feature from "./ui/Feature";
import Stat from "./ui/Stat";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  image,
  topbadge,
  heading,
  subHeading,
  desc,
  stats,
  imageStyle,
}) {
  const stat = [
    {
      icon: Users,
      title: "26+ Years",
      subtitle: "of Expertise",
      bgColor: "#FCF8EC",
      color: "#FDC700",
    },
    {
      icon: Building2,
      title: "Serving 5K Homes",
      subtitle: "& Businesses",
      bgColor: "#FCF8EC",
      color: "#FDC700",
    },
    {
      icon: MapPin,
      title: "Pan India",
      subtitle: "Service Network",
      bgColor: "#FCF8EC",
      color: "#FDC700",
    },
    {
      icon: Headphones,
      title: "24×7 Expert",
      subtitle: "Support",
      bgColor: "#FCF8EC",
      color: "#FDC700",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-linear-30 from-white to-[#F4F6F9]">
      <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-700 tracking-wide text-sm sm:text-base">
                {topbadge}
              </span>
            </div>

            {heading}

            <p className="mt-4 md:mt-6 text-lg sm:text-xl text-gray-600 font-medium">
              {subHeading}
            </p>

            <p className="mt-4 text-gray-500 max-w-xl leading-relaxed text-base sm:text-lg md:text-xl">
              {desc}
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 justify-between items-center gap-3">
              {stats.map((item, index) => (
                <div key={index}>
                  <Feature title={item} index={index} />
                  {/* icon={<ShieldCheck size={30} />} */}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col xl:flex-row gap-4">
              <Link
                className="w-full sm:w-auto justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                href="/contact"
              >
                BOOK FREE INSPECTION
                <ArrowRight size={18} />
              </Link>

              <Link
                className="w-full sm:w-auto justify-center border border-gray-300 hover:border-yellow-400 px-6 sm:px-8 py-4 rounded-xl flex items-center gap-3 font-medium text-sm sm:text-base"
                href="tel:1800 419 8181"
              >
                <Phone size={18} />
                CALL 1800 419 8181
              </Link>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="flex justify-center order-1 lg:order-2 overflow-visible py-8 lg:py-0">
            {/* Circle Background scaled responsively */}
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[570px] xl:h-[570px] 2xl:w-[700px] 2xl:h-[700px] rounded-full bg-linear-90 from-white via-[#FEC42A]/50 to-[#FEC42A]">
              <div className="relative -left-7 2xl:-left-10 z-[1px] h-[85%] w-[88%] rounded-full mx-auto mt-[7%]">
                <Image
                  src="/Images/bugs/bg.png"
                  alt="Cockroach Pest Control"
                  fill
                  className="object-cover drop-shadow-2xl rounded-full"
                />
              </div>
              {/* Image Card Overlap scaled to container layout */}
              <div className={imageStyle}>
                <Image
                  src={image}
                  alt="Cockroach Pest Control"
                  fill
                  className="object-contain drop-shadow-2xl rounded-full"
                />
              </div>

              {/* Badge repositioned neatly for smaller displays */}
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

        {/* Bottom Stats Grid */}
        <div className="mt-10  bg-white rounded-2xl border-[#F6F6F8] border shadow-sm relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#F6F6F8]">
            {stat.map((item, index) => (
              <div key={index}>
                <Stat
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  bgColor={item.bgColor}
                  color={item.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
