"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, MapPin, Star } from "lucide-react";

const reviews = [
  {
    name: "Biswajit Bhattacharjee",
    review:
      "Surya Narayan Pandey and Biswajit Majumder are very friendly and very sincere in their work. I am very much satisfied with their behavior.",
  },
  {
    name: "Sandy V",
    review:
      "Orion Pest solutions team is professional, they have excellent product knowledge and problem understanding skills. An experienced team, know how to handle the issues and suggest possible preventive measures. Services beyond expectations. Keep it up Orion team. Thank you",
  },
  {
    name: "Abhisek Juneja",
    review:
      "Orion's service is highly professional (Scheduling, Timely Visits, Billing). However, the prices for their plans are quite high compared to the competition. If you don't mind the extra rates, Orion's service is highly recommended!",
  },
  {
    name: "Ashraf",
    review:
      "I had contacted them for termite treatment and I was pleasantly surprised with their service and after sale service. Specially their branch manager Subrata Parmanic, he was very prompt and ensured that I was satisfied with service. Excellent work team Orion..",
  },
  {
    name: "Anuran Pal",
    review:
      "I booked wasp extermination service as there was a wasp hive inside the ac vent in my flat. They came on time and removed the hive in just 20 - 30 min. Really satisfied with their service.",
  },
  {
    name: "Deeptesh Ghosh",
    review:
      "Really happy with the prompt and professional services provided by Mr Soumen Das and his team. Kudos to team Orion. Keep up the good work.",
  },
  {
    name: "Madhukar Upadhyay",
    review:
      "A very good experience. The best part being the co-operative staff and their service. Also they prioritize their commitment a lot. They will deliver on time whatever they say. Highly recommended.",
  },
  {
    name: "Niladri Seal",
    review:
      "Orion Pest Solution,have provided one of the best services,all throughout without any complains.Very Professional services. Keep up the good work...",
  },
  {
    name: "avi das",
    review:
      "Service is very good. Would like to thanks Mr. Subrata Pramanick for his prompt response and effective support always. All the best.",
  },
];

export default function TestimonialsSection({heading, desc}) {
  const [current, setCurrent] = useState(0);

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= reviews.length - visibleCards ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - visibleCards : prev - 1,
    );
  };

  useEffect(() => {
    if (current > reviews.length - visibleCards) {
      setCurrent(0);
    }
  }, [visibleCards]);

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#F8FAFF] overflow-hidden">
      <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-widest text-blue-600 font-semibold text-sm sm:text-base">
            Testimonials
          </p>

          {heading}
          <div className="w-full max-w-[20rem] h-1 bg-yellow-400 rounded-full mx-auto mt-5" />
          <p className="text-base sm:text-lg md:text-xl text-center mx-auto max-w-2xl mt-6 md:mt-10 text-gray-600">
            {desc}
          </p>
        </div>

        {/* Arrows Container */}
        <div className="flex justify-center sm:justify-end gap-3 mt-8 sm:-mt-6 lg:-mt-12 relative z-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:bg-[#2F3293] hover:text-white transition cursor-pointer flex items-center justify-center border border-gray-100"
          >
            <ChevronLeft size={20} className="mx-auto" />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:bg-[#2F3293] hover:text-white transition cursor-pointer flex items-center justify-center border border-gray-100"
          >
            <ChevronRight size={20} className="mx-auto" />
          </button>
        </div>

        {/* Cards Carousel Viewport */}
        <div className="overflow-hidden mt-6 sm:mt-10">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCards)}%)`,
            }}
          >
            {reviews.map((item, index) => (
              <div
                key={index}
                className={`
  flex-shrink-0 p-2 sm:p-3
  w-full
  md:w-1/2
  lg:w-1/3
`}
              >
                <TestimonialCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Pagination Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
          {Array.from({
            length: Math.max(1, reviews.length - visibleCards + 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 cursor-pointer ${
                current === index
                  ? "w-6 sm:w-8 h-2.5 sm:h-3 bg-[#2F3293] rounded-full"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-blue-200 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, review }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 h-full transition flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
          <Quote className="text-yellow-500" />
        </div>

        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>

      <p className="mt-6 text-gray-600 leading-8 min-h-[140px]">{review}</p>
      <h4 className="font-semibold text-[#081A5C]">~ {name}</h4>
    </div>
  );
}
