import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import services from "./services.json";

const boxes = [
  {
    id: 1,
    heading: "Eco friendly technogies",
    desc: "Safe for families, pets, and the environment",
    link: "eco-friendly",
  },
  {
    id: 2,
    heading: "Fast Pest Removal",
    desc: "Quick solutions when you need them most",
    link: "pest-removal",
  },
  {
    id: 3,
    heading: "One-time extermination",
    desc: "Effective treatment without long-term contracts",
    link: "extermination",
  },
];

console.log(services);
const [, ...restServices] = services;
console.log(restServices);
export default function page() {
  return (
    <div className="w-full pb-80">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#2F3293] font-bold text-center mt-16 sm:mt-24 md:mt-32">
          WE WORK WITH CLIENTS ON STRATEGY
        </h2>

        {/* Intro text */}
        <p className="mt-6 text-black text-lg leading-relaxed md:text-justify text-left">
          At Orion, we believe effective pest management goes beyond
          treatment—it starts with the right strategy. Our team partners closely
          with every client to understand their unique challenges, environment,
          and long-term goals. Together, we design tailored strategies that
          focus on prevention, safety, and sustainability. Whether it’s
          protecting homes, ensuring compliance for businesses, or safeguarding
          large facilities, we provide actionable insights and structured plans
          that deliver measurable results. With our consultative approach, you
          don’t just get a service—you gain a trusted partner committed to your
          success.
        </p>
      </div>

      {/* Boxes area */}
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-20">
        {boxes.map((box) => (
          <Link href={`/services/${box.link}`} key={box.id}>
            <div className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl p-6 sm:p-8 md:p-10 group h-full flex flex-col justify-between">
              <div>
                <h4 className="text-[#48C4FF] text-center text-xl font-semibold">
                  {box.heading}
                </h4>
                <p className="text-white text-center mt-2 text-lg">
                  {box.desc}
                </p>
              </div>
              <Image
                src="/Images/arrow.svg"
                alt="arrow"
                width={30}
                height={30}
                className="mx-auto mt-5 group-hover:translate-x-2 ease-in-out duration-300"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Services section */}
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto mt-16 md:mt-20">
        <h2 className="text-center text-3xl font-bold text-[#2F3293]">
          OUR SERVICES
        </h2>
        <p className="text-center mt-4 sm:mt-6 text-lg max-w-3xl mx-auto">
          Trusted pest control designed for homes and businesses. We combine
          expert strategies with proven techniques. Safe, eco-friendly solutions
          that deliver lasting protection.
        </p>
      </div>

      {/* Services list */}
      <div className=" w-[90%] sm:w-[80%] md:w-[60%] mx-automt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={service.image}
              height={120}
              width={120}
              alt={service.service}
            />
            <h4 className="text-[#2F3293] font-semibold text-2xl mt-4">
              {service.service}
            </h4>
            <div className="bg-[#FEF200] p-5 rounded-2xl mt-4">
              <p>{service.text}</p>
              <Link
                className="flex items-center gap-3 group cursor-pointer w-fit text-center mx-auto mt-3"
                href={`services/${service.link}`}
              >
                <button className="bg-[#2F3293] text-center transitio duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 text-lg font-bold mt-3 text-white px-6 py-2 rounded cursor-pointer">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
