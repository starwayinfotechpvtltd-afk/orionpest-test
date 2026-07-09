// import React from "react";
// import Link from "next/link";
// import ContactForm from "@/components/ui/ContactForm";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("contact");
//   return {
//     title: page?.metaTitle || "Contact Us",
//     description: page?.metaDescription || "",
//   };
// }

// export default function page() {
//   return (
//     <div className="flex flex-col justify-center items-center py-20 px-4 md:px-0 w-[80%] mx-auto">
//       <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
//         <div
//           className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl px-6 py-10 sm:px-5 lg:px-8 text-white
//          lg:text-lg text-md"
//         >
//           Orion Pest Solutions Pvt. Ltd. <br /> 200W, S.P. Mukherjee Road <br />{" "}
//           Kolkata - 700026, West Bengal, India.
//         </div>
//         <div
//           className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl px-6 py-10 sm:px-5 lg:px-8 text-white
//         lg:text-lg text-base flex xl:flex-row flex-col justify-center items-center"
//         >
//           Email us:
//           <Link href="mailto:sales@orionpest.com" className="text-nowrap">
//             sales@orionpest.com
//           </Link>
//         </div>
//         <div
//           className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl px-6 py-10 sm:px-5 lg:px-8 text-white
//          lg:text-lg text-md flex flex-col justify-center"
//         >
//           <span>
//             National toll free helpline:{" "}
//             <Link href={"tel:1800 419 8181"} className="text-nowrap">
//               1800 419 8181
//             </Link>
//           </span>
//           <span>WhatsApp Us: <Link href="https://wa.me/919800123456">9800123456</Link></span>
//         </div>
//       </div>
//       <h3 className="font-bold text-4xl text-center mt-20">Contact us</h3>
//       <p className="text-center mt-2 max-w-xl text-lg">
//         Kindly take a moment to fill in the form so that we can provide you with
//         the best possible solution.
//       </p>

//       <ContactForm />
//     </div>
//   );
// }

import React from "react";
import {
  ShieldCheck,
  Phone,
  Calendar,
  UsersRound,
  MapPin,
  Mail,
  Clock,
  Headphones,
  CalendarDays,
  IndianRupee,
} from "lucide-react";
import Link from "next/link";
import Form from "@/components/ui/Form";
import TestimonialsSection from "@/components/ui/Testimonials";
import Image from "next/image";

export default function page() {
  const stat = [
    {
      icon: <Calendar />,
      heading: "Quick Response",
      subHeading: "We response within 24 hour",
    },
    {
      icon: <Headphones />,
      heading: "Expert Support",
      subHeading: "Talk to our pest experts",
    },
    {
      icon: <ShieldCheck />,
      heading: "100% Satisfaction",
      subHeading: "Your satisfaction is our priority",
    },
  ];

  const contactCards = [
    {
      icon: Phone,
      title: "Phone Number",
      line1: "1800 419 8181",
    },
    {
      icon: Mail,
      title: "Email Address",
      line1: "sales@orionpest.com",
    },
    {
      icon: MapPin,
      title: "Office Address",
      line1: "S P Mukherjee Road",
      line2: "Beside Bank of Baroda,",
      line3: "Tollygunge, Kolkata, West Bengal 700026",
    },
    {
      icon: Clock,
      title: "Working Hours",
      line1: "Monday - Sunday: 24 Hour",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "PAN India Service",
      desc: "We provide service all over India.",
    },
    {
      icon: CalendarDays,
      title: "Schedule Easily",
      desc: "Book inspections and services at your convenience.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Effective",
      desc: "We use safe, eco-friendly and effective solutions.",
    },
    {
      icon: IndianRupee,
      title: "Affordable Pricing",
      desc: "Get the best pest control solutions at competitive prices.",
    },
  ];

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
  return (
    <div className="w-full">
      <section
        className="relative overflow-hidden bg-linear-30 from-white to-[#F4F6F9]"
        style={{
          backgroundImage: "url(/Images/header.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-8 items-center justify-between">
            {/* Left Content */}
            <div className="w-full">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-700 tracking-wide text-sm sm:text-base">
                  We're Here To Help
                </span>
              </div>

              <h1 className="text-[34px] sm:text-5xl xl:text-6xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
                Get In Touch With
                <span className="text-[#1095D9]"> Orion Pest Solutions
                </span>
              </h1>

              <p className="mt-4 md:mt-6 text-lg sm:text-xl text-gray-700 font-medium">
                Have questions or need expert pest control solutions? Our team is ready to help you with the best service for your home or business.
              </p>

              <p className="mt-4 text-gray-500 max-w-xl leading-relaxed text-base sm:text-lg md:text-xl"></p>

              {/* Features */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 justify-between gap-6 md:gap-10">
                {stat.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start md:items-center gap-2"
                  >
                    <div className="text-xl p-2 bg-[#FECE18] rounded-full shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-0">
                      <p className="text-[#0D2391] text-base sm:text-lg font-bold break-words sm:whitespace-nowrap">
                        {item.heading}
                      </p>
                      <p className="text-sm md:text-base break-words sm:whitespace-nowrap">
                        {item.subHeading}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  className="w-full sm:w-auto justify-center bg-yellow-400  hover:bg-yellow-500 px-6 sm:px-8 py-4 rounded-xl flex items-center gap-3 font-medium text-sm sm:text-base transition"
                  href="tel:1800 419 8181"
                >
                  <Phone size={18} />
                  CALL 1800 419 8181
                </Link>
              </div>
            </div>
            <div className="w-full flex items-end justify-end">
              <div className="xl:w-[80%] w-[100%]">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[80%] mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* LEFT */}

            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-[#13348D] mb-2">
                Contact Information
              </h2>

              <div className="h-[3px] w-60 bg-amber-400"></div>

              <div className="space-y-5 mt-5">
                {contactCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex gap-4 hover:shadow-lg duration-300"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#13348D] flex items-center justify-center shrink-0">
                        <Icon className="text-white w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#13348D] mb-2">
                          {item.title}
                        </h3>
                        {item.title === "Phone Number" ||
                        item.title === "Email Address" ? (
                          <Link
                            className="text-gray-500 text-sm"
                            href={
                              item.title === "Phone Number"
                                ? `tel:${item.line1}`
                                : `mailto:${item.line1}`
                            }
                          >
                            {item.line1}
                          </Link>
                        ) : (
                          <p className="text-gray-500 text-sm">{item.line1}</p>
                        )}
                        {item.line2 && (
                          <p className="text-gray-500 text-sm">{item.line2}</p>
                        )}
                        {item.line3 && (
                          <p className="text-gray-500 text-sm">{item.line3}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-8">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1303.1411678030315!2d88.34492113213817!3d22.510192000927752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02774733df369b%3A0xb58c866b036a445c!2sOrion%20Pest%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1783579408620!5m2!1sen!2sin"
                  className="w-full h-[580px]"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* WHY CONTACT */}

          <div className="mt-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-[#13348D]">
                Why Contact Us?
              </h2>

              <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`text-center px-8 py-4 ${
                      index !== features.length - 1
                        ? "lg:border-r border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-6">
                      <Icon className="w-9 h-9 text-[#13348D]" />
                    </div>

                    <h3 className="font-bold text-[#13348D] text-lg mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-7">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <section className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6"> */}
          {/* Heading */}
          <div className="text-center mt-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#2F3293] leading-tight">
              Preferred by{" "}
              <span className="text-[#0094DA]"> Homes & Businesses</span> Across
              India
            </h3>
            <div className="w-24 sm:w-90 h-1 bg-yellow-400 rounded-full mx-auto mt-4" />
          </div>

          {/* Logos Responsive Flex/Grid Grid */}
          <div className="mt-12 md:mt-5 overflow-hidden">
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
          {/* </section> */}
        </div>
      </section>

      {/* Testimonial Section*/}
      <TestimonialsSection />
    </div>
  );
}
