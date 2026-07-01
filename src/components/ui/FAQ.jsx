"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
} from "lucide-react";


const faq = [
  {
    id: "01",
    question: "How do I know if my home has ants?",
    answer:
      "Common signs include mud tubes, hollow-sounding wood, discarded wings, damaged wooden furniture, and unexplained cracks. Schedule a professional inspection for confirmation.",
  },
  {
    id: "02",
    question: "How long does extermination treatment take?",
    answer:
      "Most extermination extermination treatments are completed within a few hours, depending on the size of the property and the severity of infestation.",
  },
  {
    id: "03",
    question: "Is extermination treatment safe for children and pets?",
    answer:
      "Yes. Orion uses government-approved extermination treatment solutions that are safe when applied by certified professionals.",
  },
  {
    id: "04",
    question: "How long does extermination protection last?",
    answer:
      "Our treatments provide long-term protection, and preventive maintenance can significantly extend effectiveness.",
  },
  {
    id: "05",
    question: "Do you provide extermination warranties?",
    answer:
      "Yes. Selected extermination treatment plans include service warranties for additional peace of mind.",
  },
  {
    id: "06",
    question: "How much does extermination treatment cost?",
    answer:
      "The cost depends on property size, infestation level, and treatment type. Contact us for a free site inspection and personalized quotation.",
  },
];

export default function FAQSection({image="/Images/services/cockroach.png", faqs, name="Cockroach"}) {
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
            {name} control services.
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