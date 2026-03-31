import React from "react";
import Image from "next/image";
import { RiPokerDiamondsFill } from "react-icons/ri";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

const badges = [
  {
    id: 1,
    image: "/Images/about1.png",
    text: "100%",
  },
  {
    id: 2,
    image: "/Images/about2.png",
    text: "26+",
  },
  {
    id: 3,
    image: "/Images/about3.png",
    text: "04/05",
  },
  {
    id: 4,
    image: "/Images/about4.png",
    text: "256+",
  },
];

export async function generateMetadata() {
  const page = await getPageData("about");
  return {
    title: page?.metaTitle || "About Us",
    description: page?.metaDescription || "",
  };
}


export default function page() {


  return (
    <div className="w-full">
      <PageData segment={"about"}>
        <>
          <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F3293] text-center mt-16 md:mt-28">
              ABOUT OUR JOURNEY
            </h2>
            <p className="mt-6 text-black text-lg leading-relaxed text-justify">
              At Orion Pest Solutions Pvt. Ltd., we believe effective pest
              control is more than eliminating pests — it’s about creating safe,
              healthy, and pest-free environments for homes and businesses. With
              decades of industry experience and a team of certified pest
              management professionals, we deliver innovative, eco-friendly, and
              long-lasting pest control solutions tailored to your specific
              needs.
              <br />
              We specialize in controlling a wide range of pests including
              cockroaches, termites, mosquitoes, bed bugs, rodents, ants, and
              more. Whether it’s a residential property, commercial facility,
              warehouse, or industrial site, we use advanced technology and
              proven methods to ensure complete pest eradication with minimal
              disruption.
              <br />
              Our mission is simple — to protect your property, your health, and
              your peace of mind. Every treatment we perform is designed with
              safety, effectiveness, sustainability, and customer satisfaction
              in mind. At Orion Pest Solutions, we stand for transparent
              communication, fast response times, and guaranteed results.
            </p>
          </div>

          <div className="w-full bg-[#2F3293] py-10 mt-16 md:mt-20">
            <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto flex flex-row justify-around items-center gap-8">
              {badges.map((badge) => (
                <div
                  className="flex flex-col justify-center gap-3 items-center text-center"
                  key={badge.id}
                >
                  <div className="bg-[#FEF200] rounded-full p-3 md:p-4">
                    <Image
                      src={badge?.image}
                      alt={badge.text}
                      height={35}
                      width={35}
                    />
                  </div>
                  <p className="text-[#FEF200] font-medium text-xl md:text-3xl">
                    {badge.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-[90%] sm:w-[80%] md:w-[60%] mx-auto mt-16 md:mt-20">
            <Image
              src="/Images/img2.png"
              alt="image"
              height={400}
              width={500}
              className="w-full lg:w-1/2 h-auto object-contain"
            />
            <div className="flex-1 text-left lg:text-right">
              <div>
                <h3 className="text-[#2F3293] text-2xl md:text-3xl font-bold">
                  OUR MISSION
                </h3>
                <p className="mt-3 text-lg leading-relaxed">
                  To protect, preserve, and promote healthier living and working
                  environments by delivering safe, effective, and
                  environmentally responsible pest control solutions. We aim to
                  exceed customer expectations through advanced technology,
                  trained professionals, and unmatched service quality.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-[#2F3293] text-2xl md:text-3xl font-bold">
                  OUR VISION
                </h3>
                <p className="mt-3 text-lg leading-relaxed">
                  To become a leading pest control service provider in India,
                  recognized for innovation, safety, customer trust, and
                  industry excellence. We strive to continuously improve our
                  services while maintaining the highest professional and
                  ethical standards.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-around items-start gap-8 w-[90%] sm:w-[80%] md:w-[60%] mx-auto mt-10">
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <p className="flex items-center gap-2 text-lg">
                <RiPokerDiamondsFill color="#2F3293" />
                Recommended professional pest control services
              </p>
              <p className="flex items-center gap-2 text-lg">
                <RiPokerDiamondsFill color="#2F3293" />
                Use of government-approved and eco-friendly chemicals
              </p>
              <p className="flex items-center gap-2 text-lg">
                <RiPokerDiamondsFill color="#2F3293" />
                Certified and trained pest control experts
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <p className="flex items-center gap-2 text-lg">
                <RiPokerDiamondsFill color="#2F3293" />
                Safe for children, pets, and families
              </p>
              <p className="flex items-center gap-2 text-lg">
                <RiPokerDiamondsFill color="#2F3293" />
                24/7 customer support and emergency services
              </p>
              <p className="flex items-center gap-2 text-lg">
                <RiPokerDiamondsFill color="#2F3293" />
                Transparent pricing with guaranteed results
              </p>
            </div>
          </div>

          <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto mt-16 md:mt-24">
            <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              The Experts in Pest Control
            </h2>
            <p className="mt-6 md:mt-10 text-lg leading-relaxed">
              Established in 1998, Orion Pest Solutions Pvt. Ltd. is one of
              India’s leading professional pest control service providers. We
              are an ISO 9001:2008 and 14001:14001 certified company and a proud
              member of the Indian Pest Control Association (IPCA) and National
              Pest Management Association (NPMA).
              <br />
              Our services are designed to meet both domestic and commercial
              pest management needs, using safe pesticides, modern equipment,
              and scientifically proven treatment techniques. We focus on
              preventive pest control, long-term protection, and sustainable
              pest management practices.
              <br />
              With a team of highly skilled, experienced, and customer-focused
              technicians, we ensure effective, affordable, and dependable pest
              control solutions across residential, corporate, hospitality,
              healthcare, and industrial sectors.
              <br />
              <b className="text-lg md:text-lg">
                We are your trusted partner in professional pest control.
              </b>
              .
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFF300] to-[#FEBA00] relative mt-16 md:mt-24 border-t-8 border-[#2F3293] pt-12 md:pt-20 pb-60 md:pb-80">
            <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
              <h3 className="text-[#2F3293] text-2xl md:text-4xl font-bold text-center">
                OUR SCORE
              </h3>
              <p className="text-black mt-4 md:mt-6 text-lg leading-relaxed text-center">
                Our success is built on trust, service quality, customer
                satisfaction, and proven performance. We measure our growth
                through positive customer feedback, repeat clients, and
                long-term service relationships.
              </p>

              <div className="mt-12 md:mt-18">
                <h3 className="text-[#2F3293] text-2xl md:text-4xl font-bold text-center">
                  Monthly Maintenance
                </h3>
                <div className="mt-8 md:mt-10">
                  <h3 className="text-[#2F3293] text-center text-lg md:text-2xl font-semibold">
                    Residential Pest Control Services
                  </h3>
                  <p className="text-center mt-3 text-lg">
                    Protect your home from cockroaches, termites, ants, rodents,
                    mosquitoes, bed bugs, and more with our safe, effective, and
                    affordable home pest control solutions.
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="text-[#2F3293] text-center text-lg md:text-2xl font-semibold">
                    Commercial Pest Control Services
                  </h3>
                  <p className="text-center mt-3 text-lg">
                    Customized pest management plans for offices, hotels,
                    restaurants, warehouses, hospitals, and industrial
                    facilities, ensuring compliance, hygiene, and pest-free
                    environments.
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="text-[#2F3293] text-center text-lg md:text-2xl font-semibold">
                    Fumigation Pest Control Services
                  </h3>
                  <p className="text-center mt-3 text-lg">
                    Professional fumigation services for warehouses, food
                    storage units, export shipments, factories, and large
                    facilities, delivering complete pest elimination with
                    maximum safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </PageData>
    </div>
  );
}
