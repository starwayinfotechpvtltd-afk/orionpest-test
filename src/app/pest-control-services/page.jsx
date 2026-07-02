import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import services from "./services.json";
import Services from "@/components/ui/Services";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";
import BrandSection from "@/components/services/BrandSection";
import TestimonialsSection from "@/components/ui/Testimonials";
import ContactInfo from "@/components/services/ui/ContactInfo";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import Form from "@/components/ui/Form";

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

const [, ...restServices] = services;

export async function generateMetadata() {
  const page = await getPageData("service");
  return {
    title: page?.metaTitle || "Our Services",
    description: page?.metaDescription || "",
  };
}

export default function page() {
  return (
    <div className="w-full">
      <PageData segment={"services"}>
        <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#2F3293] font-bold text-center mt-16">
            WE WORK WITH CLIENTS ON STRATEGY
          </h2>

          {/* Intro text */}
          <p className="mt-6 text-black text-lg leading-relaxed md:text-justify text-left">
            At Orion, we believe effective pest management goes beyond
            treatment—it starts with the right strategy. Our team partners
            closely with every client to understand their unique challenges,
            environment, and long-term goals. Together, we design tailored
            strategies that focus on prevention, safety, and sustainability.
            Whether it’s protecting homes, ensuring compliance for businesses,
            or safeguarding large facilities, we provide actionable insights and
            structured plans that deliver measurable results. With our
            consultative approach, you don’t just get a service—you gain a
            trusted partner committed to your success.
          </p>
        </div>

        {/* Boxes area */}
        <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6 mt-16">
          {boxes.map((box) => (
            <Link href={`/${box.link}`} key={box.id}>
              <div className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl px-6 py-10 sm:px-3 lg:px-10 group h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-[#48C4FF] text-center text-xl md:text-lg xl:text-xl font-semibold">
                    {box.heading}
                  </h4>
                  <p className="text-white text-center mt-2 text-lg lg:text-base xl:text-lg">
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
        <div className="w-[90%] sm:w-[80%] mx-auto mt-16 md:mt-20">
          <h2 className="text-center text-3xl font-bold text-[#2F3293]">
            We Always Provide The Best Service
          </h2>
          <p className="text-center mt-4 sm:mt-6 text-lg max-w-3xl mx-auto">
            Trusted pest control designed for homes and businesses. We combine
            expert strategies with proven techniques. Safe, eco-friendly
            solutions that deliver lasting protection.
          </p>
          <Services />
        </div>

        <div className="mt-20">
          <TestimonialsSection />
        </div>
        <BrandSection
          heading={
            <>
              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
                Preferred by{" "}
                <span className="text-[#0094DA]">Homes & Businesses</span>{" "}
                Across India
              </h2>
            </>
          }
        />

        <section
        className="relative overflow-hidden bg-[#FEFEFE] py-16 md:py-24"
        style={{
          background: "url('/Images/CTA_background.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 w-full relative z-[2]">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* LEFT SIDE CONTENT SECTION */}
            <div>
              <p className="font-semibold uppercase tracking-widest text-smsm:text-base">
                <span className="text-blue-600">Get In</span>{" "}
                <span className="text-yellow-500">Touch</span>
              </p>

              <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#2F3293]">
                We're Here to
                <br />
                <span className="text-[#0095DA]">Help You Stay</span>
                <br />
                <span className="text-[#2F3293]">Ant-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your property before ants cause costly structural
                damage. Book a professional ant inspection with our certified
                experts today.
              </p>

              {/* Contact Info Row Components Column Base List Block */}
              <div className="mt-10 space-y-6 sm:space-y-8">
                <ContactInfo
                  icon={<Phone size={24} />}
                  title="CALL US"
                  link="1800 419 8181"
                  value="1800 419 8181"
                  bg="bg-yellow-400"
                />
                <ContactInfo
                  icon={<Mail size={24} />}
                  title="EMAIL US"
                  link="sales@orionpest.com"
                  value="sales@orionpest.com"
                  bg="bg-yellow-400"
                />
                <ContactInfo
                  icon={<MapPin size={24} />}
                  title="OUR HEAD OFFICE"
                  value="200W,S P Mukherjee Road, Road, beside Bank of Baroda, Tollygunge, Kolkata, West Bengal 700026"
                  bg="bg-yellow-400"
                />
              </div>
            </div>

            {/* RIGHT SIDE FORM COMPONENT BLOCK */}
            <div className="w-full">
              <Form />
            </div>
          </div>
        </div>
        {/* Bottom Decorative Circle Vector Element Shape Component Mock Container */}
        <div className="absolute -bottom-12 -left-32 hidden xl:block overflow-hidden">
          <div
            className="relative overflow-hidden border-4 border-yellow-400 w-[450px] h-[230px] rounded-t-full"
            style={{
              background: "url('/Images/bugs/bg.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute left-32 top-5 w-52 h-52">
              <Image
                src="/Images/services/ant.png"
                alt="Cockroach"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      </PageData>
    </div>
  );
}
