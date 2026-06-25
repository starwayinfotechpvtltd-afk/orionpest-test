// import React from "react";
// import Image from "next/image";

// export default function Review() {
//   const reviews = [
//     {
//       name: "Biswajit Bhattacharjee",
//       review:
//         "Surya Narayan Pandey and Biswajit Majumder are very friendly and very sincere in their work. I am very much satisfied with their behavior.",
//     },
//     {
//       name: "Sandy V",
//       review:
//         "Orion Pest solutions team is professional, they have excellent product knowledge and problem understanding skills. An experienced team, know how to handle the issues and suggest possible preventive measures. Services beyond expectations. Keep it up Orion team. Thank you",
//     },
//     {
//       name: "Abhisek Juneja",
//       review:
//         "Orion's service is highly professional (Scheduling, Timely Visits, Billing). However, the prices for their plans are quite high compared to the competition. If you don't mind the extra rates, Orion's service is highly recommended!",
//     },
//     {
//       name: "Ashraf",
//       review:
//         "I had contacted them for termite treatment and I was pleasantly surprised with their service and after sale service. Specially their branch manager Subrata Parmanic, he was very prompt and ensured that I was satisfied with service. Excellent work team Orion..",
//     },
//     {
//       name: "Anuran Pal",
//       review:
//         "I booked wasp extermination service as there was a wasp hive inside the ac vent in my flat. They came on time and removed the hive in just 20 - 30 min. Really satisfied with their service.",
//     },
//     {
//       name: "Deeptesh Ghosh",
//       review:
//         "Really happy with the prompt and professional services provided by Mr Soumen Das and his team. Kudos to team Orion. Keep up the good work.",
//     },
//     {
//       name: "Madhukar Upadhyay",
//       review:
//         "A very good experience. The best part being the co-operative staff and their service. Also they prioritize their commitment a lot. They will deliver on time whatever they say. Highly recommended.",
//     },
//     {
//       name: "Niladri Seal",
//       review:
//         "Orion Pest Solution,have provided one of the best services,all throughout without any complains.Very Professional services. Keep up the good work...",
//     },
//     {
//       name: "avi das",
//       review:
//         "Service is very good. Would like to thanks Mr. Subrata Pramanick for his prompt response and effective support always. All the best.",
//     },
//   ];
//   return (
//     <div className="mt-20">
//       <h2 className="text-[#2F3293] text-4xl font-bold text-center mb-4">
//         Reviews
//       </h2>

//       <div className="w-full overflow-hidden">
//         <div className="flex animate-scroll space-x-4 px-4 py-2">
//           {[...reviews, ...reviews].map((rev, index) => (
//             <div
//               key={index}
//               className="bg-[#2F3293] rounded-2xl p-5 text-white flex-shrink-0 w-64 h-68 flex flex-col justify-center items-center text-center"
//             >
//               <h4 className="font-semibold mb-2">{rev.name}</h4>
//               <div className="flex flex-row items-center justify-center gap-3">
//                 {[...Array(5)].map((_, index) => (
//                   <Image
//                     key={index}
//                     src="/Images/star.png"
//                     height={20}
//                     width={20}
//                     alt={`star-${index}`}
//                   />
//                 ))}
//               </div>
//               <p className="text-sm mt-2">{rev.review}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// <div className="w-[90%] md:w-full mx-auto mt-20">
//   <div className="md:flex justify-between items-end gap-10 md:w-[80%] mx-auto">
//     <div className="flex-1 min-w-0 flex flex-col gap-8 pb-4">
//       <div className="flex flex-col gap-3">
//         <h3 className="text-2xl font-bold text-[#2F3293]">
//           PAN INDIA SERVICES
//         </h3>
//         <p className="whitespace-normal break-words text-lg">
//           Orion Pest Solutions Private Limited provides a range of pest control
//           services in more than 72 locations in India including Nepal and
//           Bhutan.
//         </p>
//       </div>
//       <div className="flex flex-col gap-3">
//         <h3 className="text-2xl font-bold text-[#2F3293]">
//           GUARANTEED RESULTS
//         </h3>
//         <p className="text-lg whitespace-normal break-words">
//           With our indepth experience over 27 plus years, we continue to enhance
//           our operational excellence, safety, capability, customer service and
//           innovations.
//         </p>
//       </div>
//       <div className="flex flex-col gap-3">
//         <h3 className="text-2xl font-bold text-[#2F3293]">
//           COST EFFECTIVE SOLUTIONS
//         </h3>
//         <p className="text-lg whitespace-normal break-words">
//           Orion Pest Solutions Private Limited provides a range of pest control
//           services in more than 72 locations in India including Nepal and
//           Bhutan.
//         </p>
//       </div>
//     </div>
//     <div>
//     <img
//       src='https://res.cloudinary.com/dstlumjlw/image/upload/v1770893893/img1_flrbu6.png'
//       alt='img1'
//       className='w-[300px] h-[350px] object-cover'
//     />
//   </div>
//   </div>
// </div>

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

export default function TestimonialsSection() {
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

          <h2 className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
            Trusted by Thousands.
            <br />
            <span className="text-[#0094DA]">Cockroach-Free,</span>{" "}
            <span className="text-[#2F3293]">Every Time.</span>
          </h2>
          <div className="w-full max-w-[20rem] h-1 bg-yellow-400 rounded-full mx-auto mt-5" />
          <p className="text-base sm:text-lg md:text-xl text-center mx-auto max-w-2xl mt-6 md:mt-10 text-gray-600">
            See what our satisfied customers have to say about our effective
            cockroach control services.
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
