import React from 'react'
import Image from 'next/image';
import FeatureCard from './ui/FeatureCard';


export default function BrandSection({image}) {

    const logos = [
    "/Images/clients/tcs.png",
    "/Images/clients/birla.png",
    "/Images/clients/fortis.png",
    "/Images/clients/redbull.png",
    "/Images/clients/nykaa.png",
    "/Images/clients/visa.png",
    "/Images/clients/hpgas.png",
  ];

  const card = [
    {
      heading: "Complete Cockroach Control for Every Space",
      desc: "Advanced treatment to eliminate cockroaches from every corner.",
      bgColor: "#FFF6DE",
      image: image,
    },
    {
      heading: "Expert Inspection & Smart Solutions",
      desc: "Detailed inspection and targeted methods for lasting results.",
      bgColor: "#EEF4FF",
      image: "/Images/icon/vector2.png",
    },
    {
      heading: "Long-Lasting Protection You Can Rely On",
      desc: "Safe, eco-friendly & effective protection for your peace of mind.",
      bgColor: "#FFF1F2",
      image: "/Images/icon/vector3.png",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
              Preferred by{" "}
              <span className="text-[#0094DA]">Homes & Businesses</span> Across
              India
            </h2>
            <div className="w-24 sm:w-48 h-1 bg-yellow-400 rounded-full mx-auto mt-4" />
          </div>

          {/* Logos Responsive Flex/Grid Grid */}
          <div className="mt-12 md:mt-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center">
              {logos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={logo}
                    alt="brand"
                    width={150}
                    height={80}
                    className="object-contain transition"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 mt-12" />

          {/* Feature Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 relative z-10">
            {card.map((item, index) => (
              <div key={index}>
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
  )
}
