"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GrShieldSecurity, GrUserWorker } from "react-icons/gr";
import { LuLeaf, LuShieldCheck, LuCalendarDays } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaCalendarWeek,
  FaRegSmile,
  FaSink,
  FaSprayCan,
  FaQuoteLeft,
} from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import {
  PiMapPinArea,
  PiUsersThree,
  PiWavesLight,
  PiBowlFood,
} from "react-icons/pi";
import { IoBugSharp } from "react-icons/io5";
import { RiBubbleChartFill } from "react-icons/ri";
import { TbBrandBlackberry } from "react-icons/tb";
import { FaCircleCheck, FaMagnifyingGlass } from "react-icons/fa6";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import ImageSlider from "@/components/ui/ImageSlider";

export default function page() {
  const points = [
    {
      icon: <GrShieldSecurity />,
      text: "Safe for Kids & Pets",
    },
    {
      icon: <LuLeaf />,
      text: "Eco-Friendly Solutions",
    },
    {
      icon: <GrUserWorker />,
      text: "Trained & Certified Experts",
    },
    {
      icon: <LuShieldCheck />,
      text: "Guaranteed Results",
    },
  ];

  const stats = [
    {
      icon: <LiaCertificateSolid />,
      heading: "27+",
      subHeading: "YEARS OF EXPERIENCE",
    },
    {
      icon: <PiMapPinArea />,
      heading: "72+",
      subHeading: "SERVICE LOCATIONS",
    },
    {
      icon: <PiUsersThree />,
      heading: "500+",
      subHeading: "TRAINED PROFESSIONALS",
    },
    {
      icon: <FaRegSmile />,
      heading: "1 LAKH+",
      subHeading: "HAPPY CUSTOMERS",
    },
    {
      icon: <LuShieldCheck />,
      heading: "100%",
      subHeading: "SATISFACTION GUARANTED",
    },
  ];

  const signs = [
    {
      icon: <IoBugSharp />,
      text: "Seeing live cockroaches",
    },
    {
      icon: <RiBubbleChartFill />,
      text: "Cockroach droppings",
    },
    {
      icon: <TbBrandBlackberry />,
      text: "Egg cases or shells",
    },
    {
      icon: <PiWavesLight />,
      text: "Unpleasant odors",
    },
    {
      icon: <PiBowlFood />,
      text: "Damaged food or packaging",
    },
    {
      icon: <FaSink />,
      text: "Found in kitchen, sinks or drains",
    },
  ];

  const process = [
    {
      icon: <FaMagnifyingGlass />,
      heading: "Inspection",
      subHeading:
        "Our exports inspects your property to identify infestation level.",
    },
    {
      icon: <IoBugSharp />,
      heading: "Identification",
      subHeading: "We identify the species, source and hiding areas.",
    },
    {
      icon: <FaSprayCan />,
      heading: "Treatment",
      subHeading:
        "Safe & effective treatment using advance equipment and metods.",
    },
    {
      icon: <LuShieldCheck />,
      heading: "Prevention",
      subHeading:
        "We help seal entry points and provide tips to prevent re-infestation.",
    },
    {
      icon: <LuCalendarDays />,
      heading: "Follow-up",
      subHeading: "Follow-up visits to ensure complete elimination.",
    },
  ];

  const testimonials = [
    {
      text: "EHeard about this company and tried it was very professional and the chemicals used were odourless which is a perfect definition of good quality chemicals and the result was visible in first attempt. Really impressed and I’ll definitely recommend my friends to opt for this company if they are facing any pest related issues.",
      name: "sivani rao",
    },
    {
      text: "It's the best pest control company in Kolkata. Very supportive staff and prompt service every time. A PAN India company and extremely good support received not only in Kolkata but in other states as well. Highly recommended.",
      name: "Abhishek Mazumdar",
    },
    {
      text: "Sincere, prompt & responsive to management of my cockroach problem. Professional & businesslike in approach. Have taken an AMC with them. Satisfied with service quality till now. I am three months into the service contract. Keep it going. All the best.",
      name: "biswajit dutta",
    },
    {
      text: "Orion pest control is good at giving their services to pest issues and sanitization services.I coordinate with Mis Puja Das from saltlake team she is very active to give solution in any situation also other staff behaviour is good.thanks to entire team for giving us best services.",
      name: "Amit Das",
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "Is cockroach treatment safe for children and pets?",
      answer:
        "Yes. We use government-approved pest control products and follow safety guidelines to ensure the treatment is safe for your family and pets.",
    },
    {
      id: 2,
      question: "How long does cockroach treatment take?",
      answer:
        "Most treatments take between 30 minutes and 2 hours depending on the size of the property and the severity of the infestation.",
    },
    {
      id: 3,
      question: "How soon will I see results after treatment?",
      answer:
        "You may notice a significant reduction in cockroach activity within 24 to 48 hours, with complete control achieved over the following days.",
    },
    {
      id: 4,
      question: "Do I need to leave my home during the treatment?",
      answer:
        "In most cases, you can remain at home. However, our technician will advise you if any temporary precautions are necessary.",
    },
    {
      id: 5,
      question: "Will cockroaches return after treatment?",
      answer:
        "Our treatments are designed to provide long-lasting protection. Following our recommendations for hygiene and maintenance helps prevent reinfestation.",
    },
    {
      id: 6,
      question: "Do you provide a warranty or follow-up service?",
      answer:
        "Yes. Depending on the treatment plan selected, we offer service warranties and follow-up visits to ensure complete customer satisfaction.",
    },
  ];

  const certifictions = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893988/img4_jixnpk.png",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893988/img3_gpjgns.png",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893987/img2_kx7drk.png",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893987/img1_xo6lsw.png",
    },
  ];

  const services = [
    "Cockroach Control",
    "Bed bugs Control",
    "Termite Control",
    "Mosquito Control",
    "Flies Control",
    "Rodent Control",
    "Bird Control",
    "Ant Control",
    "Residential Control",
    "Commercial Control",
    "Herbal Pest Control",
    "Fumigation Control",
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Submit Form
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/service-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        location: "",
        service: "",
      });
    }
  }
  return (
    <div className="w-full">
      {/* Header */}
      <div
        style={{
          backgroundImage: "url('/Images/bugs/cockroach_heading.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
        className="relative w-full bg-center"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[80%] mx-auto py-20">
          <div className="space-y-5 w-full">
            <h1 className="text-[#062E95] text-4xl md:text-5xl font-bold uppercase">
              Professional <br />
              <span className="text-[#D8161C] font-extrabold">
                Cockroach Control
              </span>{" "}
              <br /> Services Across India
            </h1>
            <p className="text-xl ">
              Get rid of cockroaches completly with Orion's safe, <br />{" "}
              effective and eco-friendly treatment solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 items-center md:gap-5">
              {points.map((item, index) => (
                <div
                  className="flex flex-col gap-2 items-center w-32 justify-center"
                  key={index}
                >
                  <span className="text-4xl text-[#062E95]">{item.icon}</span>
                  <p className="text-center font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 justify-center lg:justify-start">
              <Link
                className="bg-[#042990] flex items-center justify-center md:justify-start gap-3 px-3 py-2 rounded w-60 md:w-56 relative"
                href={"tel:1800 419 8181"}
              >
                <div className="absolute md:relative left-5 md:left-0">
                  <BiSolidPhoneCall color="#F2C31C" size={30} />
                </div>
                <div className="flex flex-col gap justify-center items-center md:items-start">
                  <span className="text-[#F2C31C] uppercase font-semibold text-center md:text-start">
                    Call Now
                  </span>
                  <p className="text-white text-center md:text-start">
                    1800 419 8181
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="bg-[#F2C31C] flex items-center gap-3 px-3 py-2 rounded w-fit md:w-56 hover:bg-yellow-500 transition"
              >
                <FaCalendarWeek color="#042990" size={30} />

                <div className="flex flex-col items-start">
                  <span className="text-[#042990] uppercase text-sm font-bold whitespace-nowrap">
                    Book Free Inspection
                  </span>
                  <span>Get a Callback</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="rounded-2xl mt-10 lg:mt-0 w-[100%] md:w-[500px]">
            <div className="bg-[#042990] rounded-t-2xl p-5 text-center">
              <h2 className="text-white text-2xl uppercase">
                Get <span className="text-[#F2C31C]">Free Inspection</span>
              </h2>
              <p className="text-white">
                Fill the form & our expert will call you.
              </p>
            </div>
            <form
              action=""
              className="p-6 space-y-3 bg-white rounded-b-2xl"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="border border-gray-300 rounded p-3 pl-5 w-full"
                placeholder="Your Name"
                required
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                className="border border-gray-300 rounded p-3 pl-5 w-full"
                placeholder="Mobile Number"
                required
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                type="text"
                className="border border-gray-300 rounded p-3 pl-5 w-full"
                placeholder="Location"
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
              <select
                name="services"
                id="services"
                className="border border-gray-300 rounded p-3 pl-5 w-full"
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="Select Service" defaultValue={"Select Service"}>
                  Select Service
                </option>
                {services.map((service, index) => (
                  <option value={service} key={index}>
                    {service}
                  </option>
                ))}
              </select>
              <button
                className="bg-[#F2C31C] text-[#042990] py-2 w-full uppercase mt-5 rounded font-bold text-md flex items-center justify-center"
                disabled={loading}
              >
                <div>
                  {loading && (
                    <svg
                      className="mr-3 h-5 w-5 animate-spin text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  )}{" "}
                  Get Free Inspection
                </div>
              </button>
              {success && (
                <p className="text-[#FEBA00]">
                  {success ? "Form submitted!" : ""}
                </p>
              )}
              <p className="text-center text-[#042990]  font-semibold ">
                Your information is safe with us
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* sTATS */}
      <div className="bg-[#042990] py-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-start lg:justify-between gap-y-8 gap-x-4 w-full max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 xl:divide-x-2 divide-white/20">
          {stats.map((item, index) => (
            <div
              className="flex items-center justify-start gap-4 sm:gap-5 px-4 lg:px-6 xl:px-8"
              key={index}
            >
              <span className="text-[#F2C31C] text-4xl md:text-5xl shrink-0">
                {item.icon}
              </span>
              <div className="text-left">
                <p className="text-[#F2C31C] text-2xl md:text-3xl font-bold leading-tight">
                  {item.heading}
                </p>
                <p className="text-white text-sm md:text-base font-medium mt-0.5">
                  {item.subHeading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Worning Signs */}
      <div className="py-20 max-w-[80%] mx-auto">
        <p className="text-[#EF6E6B] text-center text-xl font-semibold">
          Warning Signs
        </p>
        <h2 className="text-[#042990] text-center text-4xl font-bold">
          Signs You May Have Cockroach Infection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center justify-between gap-5 2xl:gap-10 mt-10">
          {signs.map((item, index) => (
            <div
              className="p-5 2xl:p-10 shadow-lg rounded-xl flex flex-col justify-between items-center gap-5 w-full h-32 md:h-48 xl:h-56"
              key={index}
            >
              <div className="p-5 bg-[#FFE977] border border-[#FED739] rounded-full w-18 h-18 flex justify-center items-center text-4xl">
                {item.icon}
              </div>
              <p className="text-[#042990] text-lg font-semibold text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Image slider */}
      <div className="w-full bg-[#F2C31C] py-10">
        <h2 className="text-[#042990] text-4xl md:text-5xl font-extrabold text-center">
          Our Clients
        </h2>
        <ImageSlider />
      </div>
      {/* Why It Matters */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[80%] mx-auto mt-20">
        <div className="space-y-5">
          <p className="text-[#D4141A] text-lg font-semibold">Why It Matters</p>
          <h2 className="text-[#042990] text-4xl lg:text-5xl font-extrabold">
            Why Cockroaches <br />{" "}
            <span className="text-[#D4141A]">Are Dangerous</span>
          </h2>
          <p className="text-xl">
            Cockroaches are not just unpleasant; they can cause serious health
            problems and property damage.
          </p>
          <ul>
            <li className="flex items-center gap-5 text-lg">
              <FaCircleCheck color="#042990" />
              Spread bacteria like Salmonella and E.coli
            </li>
            <li className="flex items-center gap-5 text-lg">
              <FaCircleCheck color="#042990" />
              Trigger allergies, asthma and respiratory issues
            </li>
            <li className="flex items-center gap-5 text-lg">
              <FaCircleCheck color="#042990" />
              Contaminate food and kitchen surfaces
            </li>
            <li className="flex items-center gap-5 text-lg">
              <FaCircleCheck color="#042990" />
              Reproduce quickly and hard to eliminate
            </li>
          </ul>
        </div>
        <div className="w-[80%] md:w-[500px] lg:w-[600px] h-[300px] relative mt-10 lg:mt-0">
          <Image
            src={"/Images/bugs/cockroach1.jpeg"}
            alt="cockroach"
            fill
            className="object-cover rounded-xl mt-10 md:mt-0"
          />
        </div>
      </div>
      {/* Our process */}
      <div className="w-full bg-[#FDD319] py-10 mt-20">
        <div className=" max-w-[80%] mx-auto">
          <p className="text-[#D4141A] text-lg font-semibold text-center">
            Our process
          </p>
          <h2 className="text-[#042990] text-4xl md:text-5xl font-extrabold text-center">
            Our Cockroach Control Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-between items-center mt-10 relative">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center w-full"
              >
                {/* Icon */}
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center text-4xl text-[#042990] shadow-md z-10">
                  {item.icon}
                </div>

                {/* Connector Line */}
                {index !== process.length - 1 && (
                  <div className="absolute top-10 left-[60%] w-[75%] hidden lg:flex items-center z-0">
                    <div className="border-t-2 border-dashed border-[#042990] w-full"></div>
                    <BiSolidRightArrowAlt className="text-[#042990] text-xl -ml-1" />
                  </div>
                )}

                {/* Number Circle */}
                <div className="bg-[#042990] w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold mt-3">
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-[#042990] font-bold text-lg mt-3 text-center">
                  {item.heading}
                </h3>

                {/* Description */}
                <p className="text-center text-md text-gray-700 mt-2 px-2">
                  {item.subHeading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F9F8FA]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between max-w-[80%] mx-auto py-18">
          {/* Left Side */}
          <div>
            <p className="text-red-500 font-bold uppercase text-lg mb-2">
              Why Choose Orion Pest Solutions?
            </p>

            <h2 className="text-4xl font-extrabold leading-tight mb-8">
              <span className="text-[#042990]">India's Most Trusted</span>
              <br />
              <span className="text-red-500">Pest Control Company</span>
            </h2>

            <ul className="space-y-4">
              {[
                "Pan India service network",
                "Government approved & safe chemicals",
                "Trained, verified & background-checked technicians",
                "Fast response & same-day service",
                "Affordable pricing with no hidden charges",
                "Service warranty & post-treatment support",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCircleCheck className="w-5 h-5 text-[#042990] mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Card */}
          <div className="flex justify-center">
            <div className="relative bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center min-h-[320px] flex flex-col justify-center transition-all duration-500">
              {/* Quote Circle */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 text-3xl font-bold">
                <FaQuoteLeft />
              </div>

              <p
                key={current}
                className="text-blue-900 font-bold leading-relaxed mt-4 text-lg animate-fade"
              >
                {testimonials[current].text}
              </p>

              <div className="mt-5 text-[#FDD319] text-2xl">★★★★★</div>

              <h4 className="mt-4 font-semibold text-blue-900">
                {testimonials[current].name}
              </h4>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index ? "bg-blue-700" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Membership & Certification */}
      <div className="w-full bg-[#FDD319] py-20">
        <div className="w-[80%] mx-auto">
          <h2 className="mb-10 text-[#042990] text-4xl md:text-5xl font-extrabold text-center">
            Membership & Certification
          </h2>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {certifictions.map((image) => (
              <div
                className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] relative"
                key={image.id}
              >
                <img
                  src={image?.image}
                  alt="img1"
                  fill
                  className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="w-full">
        <div className="my-20 max-w-[80%] mx-auto">
          <p className="text-center text-red-500 font-semibold uppercase text-lg">
            Frequently Asked Questions
          </p>

          <h2 className="text-center text-4xl font-bold text-blue-900 mt-2 mb-10">
            FAQs
          </h2>

          <div className="flex flex-wrap gap-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="w-full md:w-[calc(50%-8px)] border rounded-lg bg-white shadow-sm overflow-hidden self-start"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-gray-800"
                >
                  <span>{faq.question}</span>

                  <IoIosArrowDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === faq.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
