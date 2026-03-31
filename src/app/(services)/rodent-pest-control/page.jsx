import React from "react";
import Image from "next/image";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("rodent-control");
  return {
    title: page?.metaTitle || "Rodent Control",
    description: page?.metaDescription || "",
  };
}


export default function RodentControlPage() {
  return (
    <div className="w-full">
      {/* Main content container */}
      <PageData segment={"rodent-control"}>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        {/* Headings */}
        <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
          Rodent Control Services
        </h2>
        <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
          Say Goodbye to Rodent Infestations
        </h3>

        {/* Intro section */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
          <div className="w-full lg:w-1/2">
            <p className="text-lg leading-relaxed">
              Rodents, including mice and rats, are not just a nuisance; they
              are a significant threat to your property and health. These
              cunning pests can chew through electrical wires, wooden
              structures, and insulation, causing costly and dangerous damage.
              They also spread a variety of diseases through their droppings and
              urine, posing a serious risk to your family. Our Rodent Control
              Service provides a safe, effective, and comprehensive solution to
              eliminate rodents and protect your home.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/Images/bugs/rodent2.svg"
              alt="rodent"
              width={250}
              height={250}
              className="w-32 md:w-48 lg:w-56 h-auto"
            />
          </div>
        </div>

        {/* Why section */}
        <section className="mt-8">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Rodent Control is Important?
          </h3>
          <ul className="list-disc ml-5 md:ml-8 mt-4 flex flex-col gap-2 text-lg">
            <li>
              <span className="font-bold">Prevent Property Damage:</span>{" "}
              Rodents constantly gnaw on materials to wear down their teeth,
              leading to damage to walls, furniture, wiring, and plumbing.
            </li>
            <li>
              <span className="font-bold">Avoid Health Risks:</span> Rodents
              carry and transmit numerous diseases, including Hantavirus,
              Salmonellosis, and Leptospirosis, through their waste and bites.
            </li>
            <li>
              <span className="font-bold">Contaminate Food and Surfaces:</span>{" "}
              They contaminate food storage areas and kitchen surfaces with
              their droppings and urine, posing a direct threat to food safety.
            </li>
            <li>
              <span className="font-bold">Stop Rapid Breeding:</span> Rodents
              reproduce incredibly fast, turning a single sighting into a severe
              infestation in a short period.
            </li>
          </ul>
        </section>

        {/* Images row */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <Image
            src="/Images/bugs/rodent3.svg"
            alt="rodent"
            width={300}
            height={100}
            className="w-36 md:w-48 lg:w-64 h-auto"
          />
          <Image
            src="/Images/bugs/rodent1.svg"
            alt="rodent"
            width={300}
            height={100}
            className="w-36 md:w-48 lg:w-64 h-auto mt-4 md:mt-12 md:-ml-12"
          />
        </div>

        {/* Approach */}
        <section className="mt-8">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Approach
          </h3>
          <p className="font-bold text-lg mt-2">
            We follow a strategic and humane process to eliminate rodents and
            secure your property:
          </p>
          <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
            <li>
              <span className="font-bold">Inspection:</span> Our certified
              professionals conduct a thorough inspection to identify the
              species of rodent, their entry points, nesting sites, and travel
              routes.
            </li>
            <li>
              <span className="font-bold">Exclusion:</span> We focus on a
              long-term solution by sealing all entry points, such as cracks in
              the foundation, gaps around pipes, and vents, to prevent future
              access.
            </li>
            <li>
              <span className="font-bold">Trapping & Baiting:</span> We use a
              combination of discreet, professional-grade traps and
              tamper-resistant bait stations placed in strategic, low-traffic
              areas to effectively eliminate the active rodent population.
            </li>
            <li>
              <span className="font-bold">Sanitation & Prevention:</span> We
              provide expert advice on how to remove food sources and harborage
              areas. We will also clean and sanitize affected areas to remove
              odors and disease-causing pathogens.
            </li>
          </ul>
        </section>

        {/* Pros */}
        <section className="mt-8 mb-12">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Pros
          </h3>
          <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
            <li>
              <span className="font-bold">Comprehensive Solution:</span> Our
              approach targets the entire rodent problem, from eliminating the
              current population to preventing future infestations.
            </li>
            <li>
              <span className="font-bold">Safe for Your Home:</span> We use
              professional methods that are effective against rodents but
              designed to be safe for your family and pets.
            </li>
            <li>
              <span className="font-bold">Humane & Effective:</span> We
              prioritize humane methods, and our strategic placement ensures
              quick and effective results.
            </li>
            <li>
              <span className="font-bold">Guaranteed Peace of Mind:</span> We
              stand behind our work with a service guarantee, ensuring your home
              remains rodent-free.
            </li>
          </ul>
        </section>
      </div>

      {/* Yellow section */}
      <div className="w-full mt-12 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-8">
          <h2 className="text-[#2F3293] text-2xl md:text-4xl lg:text-5xl text-center font-bold">
            Why Choose Orion for Rodent Control?
          </h2>
          <ul className="list-disc ml-5 md:ml-8 mt-6 flex flex-col gap-2 text-lg">
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
