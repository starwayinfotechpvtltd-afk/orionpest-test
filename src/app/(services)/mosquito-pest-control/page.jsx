import React from "react";
import Image from "next/image";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("mosquito-control");
  return {
    title: page?.metaTitle || "Mosquito Control",
    description: page?.metaDescription || "",
  };
}


export default function MosquitoControlPage() {
  return (
    <div className="w-full">
      {/* Responsive container */}
      <PageData segment={"mosquito-control"}>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        {/* Headings */}
        <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
          Mosquito Control Services
        </h2>
        <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
          Say Goodbye to Mosquito Infestations
        </h3>

        {/* Intro: stacks on mobile, side-by-side on large */}
        <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
          <div className="w-full lg:w-1/2">
            <p className="text-lg leading-relaxed">
              Mosquitoes are more than just a nuisance; they are a significant
              health threat. These blood-sucking insects are notorious for
              carrying and transmitting serious diseases such as Dengue Fever,
              Malaria, Zika Virus, and West Nile Virus. They breed rapidly in
              stagnant water and can turn a pleasant outdoor space into a
              dangerous one. Our Mosquito Control Service offers a comprehensive
              and multi-faceted approach to reduce mosquito populations and
              protect your family.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/Images/bugs/mosquito1.png"
              alt="mosquito"
              width={300}
              height={300}
              className="w-40 md:w-56 lg:w-64 h-auto"
            />
          </div>
        </div>

        {/* Why important - becomes 2 columns on large screens */}
        <section className="mt-8">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Mosquito Control is Important?
          </h3>

          <ul className="list-disc ml-5 md:ml-8 mt-4 flex flex-col gap-2 text-lg">
            <li>
              <span className="font-bold">Prevent Disease Transmission:</span>{" "}
              Mosquitoes are vectors for some of the world's deadliest diseases,
              posing a direct threat to public health.
            </li>
            <li>
              <span className="font-bold">Enhance Quality of Life:</span> By
              eliminating mosquitoes, we help you reclaim your outdoor spaces,
              allowing you to enjoy your yard, patio, and garden without
              constant irritation from bites.
            </li>
            <li>
              <span className="font-bold">Stop Rapid Breeding:</span> A single
              container of stagnant water can breed hundreds of mosquitoes in
              just a few days. Professional control is essential to break their
              life cycle.
            </li>
            <li>
              <span className="font-bold">Protect Your Pets:</span> Mosquitoes
              can also transmit heartworm to dogs and cats, a potentially fatal
              disease.
            </li>
          </ul>
        </section>

        {/* Two images — stacked on small screens, side-by-side on md+ */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <Image
            src="/Images/bugs/mosquito2.svg"
            alt="mosquito"
            width={360}
            height={100}
            className="w-40 md:w-56 lg:w-72 h-auto"
          />
          <Image
            src="/Images/bugs/mosquito3.svg"
            alt="mosquito"
            width={360}
            height={100}
            className="w-40 md:w-56 lg:w-72 h-auto"
          />
        </div>

        {/* Approach */}
        <section className="mt-8">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Approach
          </h3>
          <p className="font-bold text-lg mt-2">
            We follow a strategic and scientific process to manage mosquito
            populations effectively:
          </p>

          <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
            <li>
              <span className="font-bold">Inspection:</span> Our experts will
              conduct a thorough inspection of your property to identify all
              potential mosquito breeding sites, such as standing water in
              flowerpots, gutters, ponds, and other containers.
            </li>
            <li>
              <span className="font-bold">Larval Control:</span> We target
              mosquitoes at their source by applying eco-friendly larvicides to
              stagnant water sources, preventing mosquito larvae from developing
              into biting adults.
            </li>
            <li>
              <span className="font-bold">Adult Mosquito Treatment:</span> We
              apply targeted treatments to areas where adult mosquitoes rest,
              such as shrubs, trees, tall grasses, and other vegetation. This
              includes misting and barrier spray applications.
            </li>
            <li>
              <span className="font-bold">Prevention & Education:</span> We
              provide you with crucial information on how to eliminate breeding
              sites around your home and educate you on proactive steps to keep
              mosquitoes at bay.
            </li>
          </ul>
        </section>

        {/* Pros - 2 columns on large screens */}
        <section className="mt-8 mb-12">
          <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
            Pros
          </h3>

          <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
            <li>
              <span className="font-bold">Highly Effective:</span> Our
              multi-pronged approach targets mosquitoes at every stage of their
              life cycle for maximum control.
            </li>
            <li>
              <span className="font-bold">Customized to Your Property:</span> We
              tailor our treatment plans to your specific needs and the unique
              landscape of your property.
            </li>
            <li>
              <span className="font-bold">Safe for Your Environment:</span> We
              use professional-grade products that are effective against
              mosquitoes but designed to be safe for your family, pets, and
              beneficial insects like bees.
            </li>
            <li>
              <span className="font-bold">Long-Lasting Results:</span> Our
              barrier treatments provide continuous protection, allowing you to
              enjoy your outdoor spaces with peace of mind.
            </li>
          </ul>
        </section>
      </div>

      {/* Yellow section — responsive widths and smaller padding on mobile */}
      <div className="w-full mt-12 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-60">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-8">
          <h2 className="text-[#2F3293] text-2xl md:text-4xl lg:text-5xl text-center font-bold">
            Why Choose Orion for Mosquito Control?
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
