import React from "react";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("eco-friendly");
  return {
    title: page?.metaTitle || "Eco Friendly",
    description: page?.metaDescription || "",
  };
}


export default function page() {
  return (
    <div className="w-full pb-80">
      <PageData segment={"eco-friendly"}>
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">Eco-Friendly Technologies</h2>
        <p className="mt-10 text-lg">
          At Orion, we care about both your health and the planet. That’s why we
          use eco-friendly pest control technologies that eliminate pests
          effectively without harming the environment. Our treatments are safe
          for children, pets, and sensitive spaces, making them the perfect
          choice for homes, schools, hospitals, and businesses.
        </p>
        <h3 className="text-3xl text-[#2F3293] font-bold mt-10">Key Features</h3>
        <ul className="list-disc ml-8 mt-2 text-lg">
            <li>Herbal and green solutions that reduce chemical impact.</li>
            <li>Advanced technology ensuring safety and efficiency.</li>
            <li>Long-lasting results with minimal environmental footprint.</li>
        </ul>
        <h3 className="text-3xl text-[#2F3293] font-bold mt-10">Benefits</h3>
        <ul className="list-disc ml-8 mt-2 text-lg">
            <li>Protects your family and pets.</li>
            <li>Reduces risk of chemical exposure.</li>
            <li>Promotes a healthier, sustainable living space.</li>
        </ul>
      </div>
      </PageData>
    </div>
  );
}
