"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  Phone,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "How do you eliminate cockroaches?",
    answer:
      "We use a combination of advanced, safe, and targeted treatment methods that eliminate cockroaches at the source and prevent future infestations.",
  },
  {
    id: "02",
    question: "How long does the treatment take?",
    answer:
      "Most residential treatments take between 30–90 minutes depending on the infestation level and property size.",
  },
  {
    id: "03",
    question: "How long does the protection last?",
    answer:
      "Our treatments provide long-lasting protection and can remain effective for several months with proper maintenance.",
  },
  {
    id: "04",
    question: "Is the treatment safe for my family and pets?",
    answer:
      "Yes. We use approved, low-toxicity products that are safe when used according to professional guidelines.",
  },
  {
    id: "05",
    question: "Do you provide services for commercial spaces?",
    answer:
      "Absolutely. We serve offices, hotels, warehouses, restaurants, factories and other commercial properties.",
  },
  {
    id: "06",
    question: "How can I book a service?",
    answer:
      "You can call our support team or submit an online inspection request through our website.",
  },
];

export default function FAQSection() {
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
          src="/Images/bugs/cockroach8.png"
          alt="Cockroach"
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
            cockroach control services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {faqs.map((faq) => (
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