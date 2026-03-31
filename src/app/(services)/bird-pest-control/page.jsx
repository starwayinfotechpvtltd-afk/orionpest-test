import React from "react";
import Image from "next/image";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";


export async function generateMetadata() {
  const page = await getPageData("bird-control");
  return {
    title: page?.metaTitle || "Bird Control",
    description: page?.metaDescription || "",
  };
}


export default function Page() {
  return (
    <div className="w-full">
      <PageData segment={"bird-control"}>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto relative">
        {/* Title */}
        <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
          Bird Control Services
        </h2>
        <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
          Say Goodbye to Nuisance Bird Infestations
        </h3>

        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-6">
          <p className="w-full lg:w-1/2 text-lg leading-relaxed">
            While beautiful in nature, birds can become a major nuisance when
            they roost on buildings, ledges, and other structures. Their
            droppings are not only unsightly but also highly corrosive, damaging
            paint, rooftops, and machinery. They can also carry diseases and
            parasites, posing a health risk to people. Our Bird Control Service
            offers a humane, effective, and lasting solution to deter birds and
            protect your property.
          </p>
          <Image
            src="/Images/bugs/bird1.svg"
            alt="bird"
            height={300}
            width={300}
            className="w-40 md:w-52 lg:w-72 h-auto"
          />
        </div>

        {/* Why Bird Control is Important */}
        <div className="mt-8">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Bird Control is Important?
          </h3>
          <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
            <li>
              <span className="font-bold">Prevent Property Damage:</span> Bird
              droppings are highly acidic and can corrode building materials,
              vehicles, and air conditioning units, leading to costly repairs.
            </li>
            <li>
              <span className="font-bold">Avoid Health Risks:</span> Bird nests
              and droppings can harbor and spread over 60 diseases, including
              Salmonella and E. coli, and attract other pests like mites,
              ticks, and fleas.
            </li>
            <li>
              <span className="font-bold">Maintain Aesthetic Appeal:</span> Bird
              nests and droppings can make a property look dirty and poorly
              maintained, negatively impacting your business or home's image.
            </li>
            <li>
              <span className="font-bold">Reduce Noise and Mess:</span> Roosting
              birds can create a significant amount of noise and a continuous
              mess from nesting materials and droppings.
            </li>
          </ul>
        </div>

        {/* Center Image */}
        <Image
          src="/Images/bugs/bird2.png"
          width={300}
          height={50}
          alt="bird"
          className="mt-4 mx-auto w-40 md:w-60 lg:w-72 h-auto"
        />

        {/* Approach */}
        <div className="mt-10">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Approach
          </h3>
          <p className="font-bold text-lg mt-2">
            We follow a safe, humane, and effective process to manage and deter
            birds:
          </p>
          <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
            <li>
              <span className="font-bold">Inspection:</span> We perform a
              thorough inspection to identify the bird species, the extent of
              the infestation, and their entry, roosting, and nesting sites.
            </li>
            <li>
              <span className="font-bold">Customized Solutions:</span> We use a
              combination of non-lethal, humane deterrents, such as bird spikes
              on ledges, netting to block off large areas, and electric shock
              tracks to create a harmless, uncomfortable landing spot.
            </li>
            <li>
              <span className="font-bold">Cleaning & Sanitation:</span> We
              safely and professionally clean and sanitize the affected areas to
              remove all droppings, nesting materials, and associated pathogens.
            </li>
            <li>
              <span className="font-bold">Monitoring & Prevention:</span> We
              advise on preventative measures, such as removing food sources and
              sealing potential entry points, and can schedule follow-up visits
              to ensure the solution remains effective.
            </li>
          </ul>
        </div>

        {/* Pros */}
        <div className="mt-10">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Pros
          </h3>
          <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
            <li>
              <span className="font-bold">Humane & Safe:</span> All our methods
              are designed to deter birds without causing them harm.
            </li>
            <li>
              <span className="font-bold">Long-Lasting Protection:</span> Our
              installations provide a durable, long-term solution to bird
              problems.
            </li>
            <li>
              <span className="font-bold">Aesthetically Pleasing:</span> Our
              solutions, like transparent netting, are designed to be effective
              without detracting from your property's appearance.
            </li>
            <li>
              <span className="font-bold">Effective for Various Species:</span>{" "}
              We have solutions for a wide range of common nuisance birds,
              including pigeons, sparrows, and starlings.
            </li>
          </ul>
        </div>
      </div>

      {/* Yellow Section */}
      <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
          <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-10">
            Why Choose Orion for Bird Control?
          </h2>
          <ul className="list-disc ml-5 md:ml-8 mt-6 flex flex-col gap-3 text-lg">
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
