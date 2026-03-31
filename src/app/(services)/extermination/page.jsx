import React from "react";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("extermination");
  return {
    title: page?.metaTitle || "Extermination",
    description: page?.metaDescription || "",
  };
}


export default function page() {
  return (
    <div className="w-full pb-80">
      <PageData segment={"extermination"}>
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">
          One-Time Extermination
        </h2>
        <p className="mt-10 text-lg">
          Not every problem requires a long-term plan. For sudden infestations,
          our one-time extermination service provides quick and effective
          relief. Whether it’s cockroaches in your kitchen, termites in your
          walls, or rodents in your warehouse, we deliver targeted treatments
          that stop the problem at its source.
        </p>
        <h3 className="text-3xl text-[#2F3293] font-bold mt-10">
          Key Features
        </h3>
        <ul className="list-disc ml-8 mt-2 text-lg">
          <li>Single-visit extermination tailored to your issue.</li>
          <li>Cost-effective for immediate pest problems.</li>
          <li>Flexible service without contracts or commitments.</li>
        </ul>
        <h3 className="text-3xl text-[#2F3293] font-bold mt-10">Benefits</h3>
        <ul className="list-disc ml-8 mt-2 text-lg">
          <li>Affordable and hassle-free option.</li>
          <li>Effective results in just one visit.</li>
          <li>Peace of mind knowing pests are gone.</li>
        </ul>
      </div>
      </PageData>
    </div>
  );
}
