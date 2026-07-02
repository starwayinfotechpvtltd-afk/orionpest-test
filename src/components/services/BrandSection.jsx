import React from "react";
import Image from "next/image";
import FeatureCard from "./ui/FeatureCard";

export default function BrandSection({ heading, cards }) {
  const logos = [
    "/Images/clients/tcs.png",
    "/Images/clients/birla.png",
    "/Images/clients/fortis.png",
    "/Images/clients/redbull.png",
    "/Images/clients/nykaa.png",
    "/Images/clients/visa.png",
    "/Images/clients/hpgas.png",
    "/Images/clients/img7.webp",
    "/Images/clients/img9.png",
    "/Images/clients/img11.png",
    "/Images/clients/img14.png",
    "/Images/clients/img48.jpg",
    "/Images/clients/img56.png",
    "/Images/clients/img73.png",
    "/Images/clients/img6.png",
    "/Images/clients/img5.png",
    "/Images/clients/img29.png",
    "/Images/clients/img10.webp",
    "/Images/clients/img46.png",
    "/Images/clients/img59.png",
    "/Images/clients/img60.png",
    "/Images/clients/img38.png",
    "/Images/clients/img18.webp",
    "/Images/clients/img70.png",
  ];

  const cards1 = [
    {
      heading: "GUARANTEED RESULTS",
      desc: "With our indepth experience over 27 plus years, we continue to enhance our operational excellence, safety, capability, customer service and innovations.",
      image: "/Images/services/cockroach5.png",
      bgColor: "#FFF6DE",
    },
    {
      heading: "PAN INDIA PEST CONTROL SERVICES",
      desc: " Orion Pest Solutions Private Limited offers pest control services across 72+ locations in India, Nepal, and Bhutan, ensuring safe and reliable solutions.  ",
      image: "/Images/icon/vector2.png",
      bgColor: "#EEF4FF",
    },
    {
      heading: "COST EFFECTIVE SOLUTIONS",
      desc: "Orion Pest Solutions Private Limited provides a range of pest control services in more than 72 locations in India including Nepal and Bhutan.",
      image: "/Images/icon/vector3.png",
      bgColor: "#FFF1F2",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          {heading}
          <div className="w-24 sm:w-90 h-1 bg-yellow-400 rounded-full mx-auto mt-4" />
        </div>

        {/* Logos Responsive Flex/Grid Grid */}
        <div className="mt-12 md:mt-14 overflow-hidden">
          <div className="flex w-max animate-logo-slider">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-6 sm:mx-8 lg:mx-10 flex-shrink-0"
              >
                <Image
                  src={logo}
                  alt={`brand-${index}`}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-200 mt-12" />

        {/* Feature Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 relative z-10">
          {(cards?cards:cards1).map((item, index) => (
            <div key={index} className="max-h-[300px]">
              <FeatureCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Absolute Wave Graphics Decorative Accent Vector */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 220"
          className="w-full h-auto min-h-[80px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1247E0" />
              <stop offset="100%" stopColor="#0B3CCB" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C360,110 1080,10 1440,60 L1440,75 C1080,25 360,125 0,75 Z"
            fill="#FBBF24"
          />
          <path
            d="M0,80 C360,130 1080,30 1440,80 L1440,220 L0,220 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
}
