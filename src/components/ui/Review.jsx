import React from "react";
import Image from "next/image";

export default function Review() {
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
      review: "Really happy with the prompt and professional services provided by Mr Soumen Das and his team. Kudos to team Orion. Keep up the good work.",
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
  return (
    <div className="mt-20">
      <h2 className="text-[#2F3293] text-4xl font-bold text-center mb-4">
        Reviews
      </h2>

      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll space-x-4 px-4 py-2">
          {[...reviews, ...reviews].map((rev, index) => (
            <div
              key={index}
              className="bg-[#2F3293] rounded-2xl p-5 text-white flex-shrink-0 w-64 h-68 flex flex-col justify-center items-center text-center"
            >
              <h4 className="font-semibold mb-2">{rev.name}</h4>
              <div className="flex flex-row items-center justify-center gap-3">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/Images/star.png"
                    height={20}
                    width={20}
                    alt={`star-${index}`}
                  />
                ))}
              </div>
              <p className="text-sm mt-2">{rev.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
