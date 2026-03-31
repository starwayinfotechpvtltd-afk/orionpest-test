import React from "react";
import Image from "next/image";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("flies-control");
  return {
    title: page?.metaTitle || "Flies Control",
    description: page?.metaDescription || "",
  };
}


export default function FlyControlPage() {
  return (
    <div className="w-full">
      {/* Main content container */}
      <PageData segment={"flies-control"}>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        {/* Headings */}
        <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
          Fly Control Services
        </h2>
        <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
          Say Goodbye to Fly Infestations
        </h3>

        {/* Intro section */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
          <div className="w-full lg:w-1/2">
            <p className="text-lg leading-relaxed">
              Flies are not just a nuisance; they pose a serious health risk.
              Known for their ability to carry and spread a wide range of
              bacteria and pathogens, they can contaminate food and surfaces,
              leading to illnesses such as E. coli and Salmonella. Their rapid
              breeding cycle can turn a small problem into a severe infestation
              in a matter of days. Our Fly Control Service provides a
              comprehensive, sanitary, and effective solution to manage and
              eliminate fly populations.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/Images/bugs/fly1.svg"
              alt="fly"
              width={250}
              height={250}
              className="w-32 md:w-48 lg:w-56 h-auto"
            />
          </div>
        </div>

        {/* Why section */}
        <section className="mt-8">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Fly Control is Important?
          </h3>
          <ul className="list-disc ml-5 md:ml-8 mt-4 flex flex-col gap-2 text-lg">
            <li>
              <span className="font-bold">Prevent Disease Transmission:</span>{" "}
              Flies travel between unsanitary areas like garbage and animal
              waste and your food, transmitting over 100 different pathogens.
            </li>
            <li>
              <span className="font-bold">Protect Food and Health:</span> A fly
              infestation can quickly contaminate food and food preparation
              areas, posing a direct threat to the health of your family or
              customers.
            </li>
            <li>
              <span className="font-bold">Maintain Hygiene and Reputation:</span>{" "}
              In commercial settings, a fly problem can severely damage a
              business&apos;s reputation and lead to health code violations.
            </li>
            <li>
              <span className="font-bold">Stop Rapid Breeding:</span> Flies can
              lay hundreds of eggs at a time, allowing their population to
              explode if not professionally managed.
            </li>
          </ul>
        </section>

        {/* Images row */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <Image
            src="/Images/bugs/fly2.svg"
            alt="fly"
            width={250}
            height={100}
            className="w-32 md:w-44 lg:w-56 h-auto"
          />
          <Image
            src="/Images/bugs/fly3.svg"
            alt="fly"
            width={250}
            height={100}
            className="w-32 md:w-44 lg:w-56 h-auto"
          />
        </div>

        {/* Approach */}
        <section className="mt-8">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Approach
          </h3>
          <p className="font-bold text-lg mt-2">
            We follow a strategic and multi-step process to eliminate flies and
            prevent their return:
          </p>
          <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
            <li>
              <span className="font-bold">Inspection:</span> We conduct a
              thorough inspection to identify the species of fly, locate their
              breeding sites (such as garbage cans, drains, and compost piles),
              and determine their entry points.
            </li>
            <li>
              <span className="font-bold">Source Elimination:</span> The most
              critical step is to identify and treat or remove the source of the
              infestation. We will advise on and implement solutions for
              sanitation and waste management.
            </li>
            <li>
              <span className="font-bold">Targeted Treatment:</span> We use a
              combination of methods, including the strategic placement of fly
              baits, targeted residual sprays in problem areas, and the
              installation of professional-grade Insect Light Traps (ILTs).
            </li>
            <li>
              <span className="font-bold">Monitoring & Prevention:</span> We
              provide you with a detailed plan for ongoing sanitation and
              exclusion to prevent future infestations. Regular monitoring
              ensures the problem is completely resolved.
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
              approach targets flies at every stage of their life cycle, from
              eggs to adults.
            </li>
            <li>
              <span className="font-bold">Effective & Safe:</span> We use
              professional-grade products and techniques that are highly
              effective against flies while being safe for your family, pets,
              and food environments.
            </li>
            <li>
              <span className="font-bold">Improved Hygiene:</span> Our services
              not only eliminate flies but also help improve overall sanitation
              in your home or business.
            </li>
            <li>
              <span className="font-bold">Customized for Your Needs:</span> We
              create a tailored plan for each unique situation, whether it&apos;s
              for a residential kitchen or a commercial restaurant.
            </li>
          </ul>
        </section>
      </div>

      {/* Yellow section */}
      <div className="w-full mt-12 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-60">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-8">
          <h2 className="text-[#2F3293] text-2xl md:text-4xl lg:text-5xl text-center font-bold">
            Why Choose Orion for Fly Control?
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
