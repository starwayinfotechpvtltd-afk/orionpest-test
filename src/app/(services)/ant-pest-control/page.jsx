import React from "react";
import Image from "next/image";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("ant-control");
  return {
    title: page?.metaTitle || "Ant Control",
    description: page?.metaDescription || "",
  };
}

export default function Page() {
  return (
    <div className="w-full">
      <PageData segment={"ant-control"}>
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto relative px-4">
        <h2 className="text-[#2F3293] text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-20">
          Ant Control Services
        </h2>
        <h3 className="text-center text-[#0094DA] text-2xl sm:text-3xl lg:text-4xl font-bold mt-3">
          Say Goodbye to Ant Infestations
        </h3>

        {/* Intro section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
          <p className="w-full md:w-1/2 text-lg">
            Ants are one of the most persistent and widespread household pests.
            While some species are just a nuisance, others can cause significant
            damage or even pose health risks. They are masters at finding their
            way into homes in search of food and water, often forming long
            trails and building nests in hard-to-reach places. A small foraging
            trail can quickly become a large-scale infestation. Our Ant Control
            Service provides a comprehensive, targeted, and long-lasting
            solution to eliminate ants and protect your property.
          </p>
          <Image
            src="/Images/bugs/ant1.svg"
            alt="ant"
            height={250}
            width={250}
            className="w-[180px] sm:w-[220px] lg:w-[250px] mx-auto"
          />
        </div>

        {/* Importance section */}
        <div className="mt-8">
          <h3 className="text-[#0094DA] text-2xl sm:text-3xl lg:text-4xl font-bold">
            Why Ant Control is Important?
          </h3>
          <ul className="list-disc ml-6 sm:ml-8 mt-3 flex flex-col gap-3 text-lg">
            <li>
              <span className="font-bold">Contaminate Food:</span> Ants can
              travel through unsanitary areas and then crawl all over your food,
              utensils, and countertops, contaminating them with bacteria.
            </li>
            <li>
              <span className="font-bold">Property Damage:</span> Certain
              species, such as carpenter ants, can cause structural damage by
              excavating wood to create nests.
            </li>
            <li>
              <span className="font-bold">Painful Bites and Stings:</span> Some
              ants, like fire ants, can deliver painful and allergic reactions
              through their bites or stings.
            </li>
            <li>
              <span className="font-bold">Stop Rapid Colony Growth:</span> Ants
              live in vast colonies, and a small trail of foragers is often just
              the tip of the iceberg, with the main colony hidden somewhere
              nearby.
            </li>
          </ul>
        </div>

        {/* Ant images */}
        <div className="flex items-center justify-evenly gap-6 mt-6">
          <Image
            src="/Images/bugs/ant2.svg"
            width={200}
            height={100}
            alt="ant"
            className="w-[180px] sm:w-[220px] lg:w-[250px]"
          />
          <Image
            src="/Images/bugs/ant3.svg"
            width={200}
            height={100}
            alt="ant"
            className="w-[180px] sm:w-[220px] lg:w-[250px]"
          />
        </div>

        {/* Approach */}
        <div className="mt-10">
          <h3 className="text-[#0094DA] text-2xl sm:text-3xl lg:text-4xl font-bold">
            Our Approach
          </h3>
          <p className="font-bold text-lg mt-2">
            We follow a systematic and effective process to eliminate ants at
            their source:
          </p>
          <ul className="list-disc ml-6 sm:ml-8 mt-3 flex flex-col gap-3 text-lg">
            <li>
              <span className="font-bold">Inspection:</span> Our experts conduct
              a detailed inspection to identify the ant species, locate the
              nest, and track their entry points and foraging trails.
            </li>
            <li>
              <span className="font-bold">Targeted Baiting:</span> We use
              professional-grade ant baits that are irresistible to ants. The
              foragers carry the bait back to the colony, including the queen,
              ensuring the entire nest is eliminated from the inside out.
            </li>
            <li>
              <span className="font-bold">Barrier Treatment:</span> We apply
              targeted, long-lasting liquid treatments to the exterior of your
              home, creating a protective barrier that prevents new ants from
              entering.
            </li>
            <li>
              <span className="font-bold">Exclusion & Prevention:</span> We
              provide you with valuable advice on how to prevent future
              infestations, such as sealing cracks and crevices and maintaining
              proper sanitation to remove food sources.
            </li>
          </ul>
        </div>

        {/* Pros */}
        <div className="mt-10">
          <h3 className="text-[#0094DA] text-2xl sm:text-3xl lg:text-4xl font-bold">
            Pros
          </h3>
          <ul className="list-disc ml-6 sm:ml-8 mt-3 flex flex-col gap-3 text-lg">
            <li>
              <span className="font-bold">Effective for the Entire Colony:</span>{" "}
              Our baiting system ensures the elimination of the queen and the
              entire colony, not just the visible foragers.
            </li>
            <li>
              <span className="font-bold">Long-Lasting Protection:</span> Our
              combination of baiting and barrier treatments provides a durable,
              long-term solution.
            </li>
            <li>
              <span className="font-bold">Minimal Disruption:</span> Our methods
              are designed to be minimally invasive, with no strong odors or
              lingering residue.
            </li>
            <li>
              <span className="font-bold">Safe and Targeted:</span> We use
              professional-grade products that are highly effective against ants
              while being safe for your family and pets when applied correctly.
            </li>
          </ul>
        </div>
      </div>

      {/* Yellow section */}
      <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative px-4">
        <div className="w-full md:w-[80%] lg:w-[60%] mx-auto">
          <h2 className="text-[#2F3293] text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-10">
            Why Choose Orion for Ant Control?
          </h2>
          <ul className="list-disc ml-6 sm:ml-8 mt-6 sm:mt-10 flex flex-col gap-3 text-lg">
            <li>
              <span className="font-bold">Eco-Friendly Methods:</span> Safe,
              odorless, and pet-friendly treatments.
            </li>
            <li>
              <span className="font-bold">Trained Technicians:</span> Skilled
              team with years of expertise.
            </li>
            <li>
              <span className="font-bold">Custom Plans:</span> Tailored
              solutions for homes, restaurants, and offices.
            </li>
            <li>
              <span className="font-bold">Trusted Brand:</span> Serving clients
              across India since 1998.
            </li>
          </ul>
        </div>
      </div>
      </PageData>
    </div>
  );
}
