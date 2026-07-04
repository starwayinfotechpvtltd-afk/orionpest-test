"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";


const faq = [
  {
    id: "01",
    question: "Do I need to leave my home during the treatment?",
    answer:
      "It depends on the type of treatment. Some services allow you to stay home, while others may require you to leave for a few hours. Your technician will explain everything before work begins.",
  },
  {
    id: "02",
    question: "Is your treatment safe for children, elderly family members, and pets?",
    answer:
      "We use approved pest control products and follow application guidelines carefully. Before treatment, we'll let you know any temporary precautions that should be followed for maximum safety.",
  },
  {
    id: "03",
    question: "Will my kitchen utensils and food need to be covered?",
    answer:
      "For certain treatments, yes. We provide simple preparation instructions before your appointment so your food and kitchen items remain protected.",
  },
  {
    id: "04",
    question: "How long does it take to completely eliminate the infestation?",
    answer:
      "The timeline depends on the pest. Cockroaches may reduce significantly within days, while termites and bed bugs often require multiple visits or monitoring for complete control.",
  },
  {
    id: "05",
    question: "Do restaurants and food businesses require more frequent pest control?",
    answer:
      "Yes. Businesses that handle food generally benefit from scheduled preventive treatments because even a minor infestation can affect hygiene, customer trust, and compliance.",
  },
  {
    id: "06",
    question: "How quickly can someone come for an inspection?",
    answer:
      "We understand that pest issues can't always wait. Depending on your location and availability, we aim to schedule inspections as quickly as possible.",
  },
];

export default function FAQSection({image="/Images/services/cockroach.png", faqs, name=" Pest"}) {
  const [active, setActive] = useState("01");

  return (
    <section className="relative overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute left-0 md:left-10 top-0 grid grid-cols-5 gap-3 opacity-40">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-blue-400"
          />
        ))}
      </div>

      {/* Cockroach Image */}
      <div className="absolute right-0 top-0 hidden lg:block bg-[#F2F7FE] rounded-bl-full pl-5 pb-5">
        <img
          src={image}
          alt={name}
          className="w-56 object-contain opacity-90"
        />
      </div>    

      <div className="mx-auto max-w-7xl px-6 py-12 mt-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#081A5C]">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-5 h-1 w-60 md:w-80 rounded-full bg-yellow-400" />

          <p className="mt-6 text-lg text-gray-600">
            Find answers to common questions about our 
             {name}  control services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {(faqs?faqs:faq).map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  faq,
  active,
  setActive,
}) {
  const isOpen = active === faq.id;

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 py-5 ${
        isOpen
          ? "border-blue-200 bg-[#F9FAFE] shadow-md"
          : "border-slate-200 bg-white"
      }`}
     >
      <button
        onClick={() =>
          setActive(isOpen ? "" : faq.id)
        }
        className="flex w-full items-center justify-between px-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 p-5 items-center justify-center rounded-full font-semibold ${
              isOpen
                ? "bg-blue-600 text-white"
                : "border border-blue-200 text-blue-600"
            }`}
          >
            {faq.id}
          </div>

          <h3 className="font-semibold text-[#081A5C] text-lg">
            {faq.question}
          </h3>
        </div>

        {isOpen ? (
          <Minus className="text-blue-600" />
        ) : (
          <Plus className="text-blue-600" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-40 px-6 pb-6"
            : "max-h-0"
        }`}
       >
        <div className="ml-16 text-gray-600 leading-7">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}