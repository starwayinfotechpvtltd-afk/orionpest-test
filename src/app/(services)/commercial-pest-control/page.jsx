import React from "react";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("commercial-pest-control");
  return {
    title: page?.metaTitle || "Commercial Pest Control",
    description: page?.metaDescription || "",
  };
}


export default function page() {
  return (
    <div className="w-full pb-80">
      <PageData segment={"commercial-pest-control"}>
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">
          Commercial Pest Control Services
        </h2>
        <p className="mt-10 text-lg font-bold text-black">
          Pest Management Services for Your Business
        </p>
        <p className="mt-3 text-lg font-bold text-black">A TRUSTED PROVIDER OF PEST CONTROL SOLUTIONS FOR OVER 20 YEARS</p>
        <p className="mt-1 text-lg">
          Pest infestation in a commercial environment can make a financial
          impact on your business. Just one pest attack is enough to make a
          negative publicity, with the instant sharing of information through
          Social Media. We can help you from such consequences before they
          destroy your reputation.
        </p>
        <p className="text-[#0094DA] text-center mt-6 text-xl font-bold">COMMERCIAL PEST CONTROL SERVICES FOR ALL KIND OF BUSINESSES</p>
        <p className="mt-3 text-lg font-bold text-black">Restaurants and Hotels</p>
        <p className="mt-1 text-lg">
          Negative experience of customers during dining will directly affect
          your business. The presence of pests can damage your brand’s
          reputation. Nowadays customers give more priority to neatness and
          health. Hygiene surroundings ensures that food prepared for your
          customers is safe to eat. Our specialists can provide pest control for
          restaurants and hotels. We have the key to maintain your reputation.
        </p>
        <p className="mt-3 text-lg font-bold text-black">Corporate Offices and Buildings</p>
        <p className="mt-1 text-lg">
          Pest infestation can interrupt your office time and employees feel
          they are in risk. Reasons behind risk is that pests can spread
          diseases, damage to properties, equipment and buildings. Orion has
          expert pest management specialists. Our services are based on your
          business needs.
        </p>
        <p className="mt-3 text-lg font-bold text-black">Private Hospitals and Nursing Homes</p>
        <p className="mt-1 text-lg">
          We all know that pests cause serious health issues, that they transmit
          pathogenic germs and spread diseases. Patients, staff, and visitors
          needs safer and hygienic environment. Patient treatment and
          accommodation facilities should be clean and sterile as possible to
          minimise the risk. Orion Pest Solutions Pvt Ltd have a team of pest
          management experts to solve the pest problems quickly.
        </p>
        <p className="mt-3 text-lg font-bold text-black">Schools and Other Educational Institutions</p>
        <p className="mt-1 text-lg">
          Schools and educational institutions should be safe for students and
          staffs. We have to keep these surroundings protected from unwanted
          pests. Pest infestation in a school will make a negative effect on
          institutions reputation. Pest management with expert technicians will
          make you safer.
        </p>
        <p className="mt-3 text-lg font-bold text-black">Godowns and Food Processing Plants</p>
        <p className="mt-1 text-lg">
          Pests can damage products,services and your brand name.Pest management
          provides several benefits. People have no idea how to deal with
          unwanted pests. Orion Pest management provides several services with
          benefits, quick response within no time and immediate result is
          guaranteed.
        </p>
        <p className="text-[#0094DA] text-center mt-6 text-xl font-bold">Key benefits you get from commercial pest control services</p>
        <p className="mt-1 text-lg">
          Pest infestation in various commercial setups can have a few
          advantages when contrasting it with controlling insects like rodents,
          bugs or termites all alone. We are educated professionals who realize
          where to deal with and how to discuss Termite, Cockroach and other
          insects. We are furnishing few reasons why should you opt for
          commercial pest control services.
        </p>
        <p className="mt-1 text-lg">
          Paying a normal expense in advance can include and cost a few thousand
          rupees every year. Pests like Termites manipulates businesses know
          precisely what to look for, and the cost of their service contrasted
          with repairing delayed termite harm. Orion pest offers you flexibility
          in pricing and satisfactory work in terms of extermination of your
          termite, cockroach and other insects.
        </p>
        <p className="mt-3 text-lg font-bold text-black">
          We provide the highest levels of risk management, reassurance and
          responsiveness to customers across multi-site and single site
          operations.
        </p>
        <p className="mt-1 text-lg">
          Whether it is a restaurant or commercial office, in order to maintain
          world-class quality of your business, engaging experts of commercial
          pest control is a smart decision.
        </p>
      </div>
      </PageData>
    </div>
  );
}
