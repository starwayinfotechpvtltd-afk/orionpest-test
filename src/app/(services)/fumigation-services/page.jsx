import React from "react";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("fumigation-pest-control");
  return {
    title: page?.metaTitle || "Fumigation Pest Control",
    description: page?.metaDescription || "",
  };
}


export default function page() {
  return (
    <div className="w-full pb-80">
      <PageData segment={"fumigation-pest-control"}>
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">Fumigation Pest Control Services</h2>
        <p className="mt-10 text-lg">
          Orion Pest Solutions is a duly approved and accredited ISO certified
          company, committed to provide quality and efficient services in
          fumigation procedures with the `use of METHYL BROMIDE and ALUMINIUM
          PHOSPHIDE to control pests in India. We work 24/7 to help our clients
          protect their surroundings from infectious pesticides through our
          fumigation pest control solutions.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Fumigation pest control services</p>
        <p className="mt-1 text-lg">
          Orion Pest Solutions offers a wide range of fumigation services to
          safeguard your residential and commercial space from pests and protect
          your health from infections and diseases caused by damaging insects
          like termites, cockroaches, mice, bedbugs and flies. We provide the
          most effective fumigation services to eradicate the entire range of
          pests which are detrimental to the health of you and your family as
          well as the image of your business. Our experienced team of
          specialists are dedicated and committed to offer the best fumigation
          pest control services to control pest infestations and eliminate them
          to the core.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div>
            <p className="mt-3 text-black font-bold text-lg">Fumigation procedure</p>
            <p className="mt-1 text-lg">
              Fumigation is a process of eliminating harmful pests and insects
              through the use of gaseous pesticides or fumigants at a certain
              temperature and pressure to suffocate or poison the pests within.
              The infected area is completely sealed off for a certain period of
              time during this process in order to ensure that the fumigants are
              spread inside completely to destroy the existing pest
              infestations.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="md:text-right text-black font-bold text-lg">Methods of fumigation</p>
            <p className="md:text-right text-lg mt-1">
              Fumigation is used to prevent pests in any structural space, food,
              soil or grain. We, at Orion, employ highly experienced pest
              control specialists who are well-versed with the latest technology
              and equipment for pest control and eradication, thereby reducing
              the risk of damage to your home, office or warehouse. We drive
              successful pest control solutions for the human health and
              property which includes the usage of fumigants, safety equipment,
              insecticides, sprayers, and chemicals.
            </p>
          </div>
        </div>
        <p className="text-xl text-[#2F3293] font-bold mt-5">
          At Orion, we offer a wide array of fumigation services, tailored to
          your pest control needs and requirements
        </p>
        <p className="mt-3 text-black font-bold text-lg">Wooden pallets fumigation</p>
        <p className="mt-1 text-lg">
          We carry out fumigation of wooden pallets with methyl bromide at the
          dosage of 48 gms per mtr cube. The wooden pallets are placed in
          fumigation covers which are sealed and then grounded under the floor.
          Gas monitoring is performed during the exposure period and thereafter,
          the fumigation covers are removed.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Empty container fumigation</p>
        <p className="mt-1 text-lg">
          To minimize the risk of damage to your empty holds, we perform
          fumigation services with gaseous pesticides complying with high safety
          standards and practices. We fill the empty containers with Methyl
          Bromide to suffocate the existing pests within and exterminate them.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Cargo fumigation</p>
        <p className="mt-1 text-lg">
          Cargo is used to store goods like animal feed, grains and non-food
          agricultural products and transport them from one place to another on
          the port. Cargoes are highly exposed to the threat of pests and
          insects. Hence, it is mandatory to perform cargo fumigation before
          shipping. We perform cargo fumigation in either solid, liquid or
          gaseous form to protect the goods from pest infestation.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Tobacco fumigation</p>
        <p className="mt-1 text-lg">
          We provide effective tobacco fumigation solutions at warehouses or
          containers with the use of phosphine to prevent moth or beetle
          infestation. We incorporate advanced technology for the fumigation of
          tobacco to control pests, adhering to health and safety standards on
          the whole.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Seeds fumigation</p>
        <p className="mt-1 text-lg">
          Seeds or grains are prone to getting infected by pests and insects.
          Hence, sanitization of seeds is very essential to prevent
          deterioration or losses by employing necessary pest control. Our
          unique seeds fumigation is highly reliable and beneficial to eradicate
          these dangerous pests and insects.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Warehouse fumigation</p>
        <p className="mt-1 text-lg">
          We offer efficient warehouse fumigation solutions to your business to
          avoid deterioration or damage of stored goods or products. Warehouses
          are a much sought after place for rodents, pests and insects. They are
          likely to cause damage to your stored goods in the warehouse,
          affecting your brand reputation. Our warehouse fumigation is carried
          out with the application of phosphine which can penetrate beneath the
          kernels and loosely stored goods and kill the habitats instantly.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Agriculture products fumigation</p>
        <p className="mt-1 text-lg">
          Our agricultural products fumigation is quite helpful in preventing
          major deterioration caused by pests and insects. We employ our best
          technicians to carry out the fumigation to get rid of pest
          infestation. They perform the operation with due diligence and care
          with proper calculation of the amount of fumigants to be used.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Flour Mills fumigation</p>
        <p className="mt-1 text-lg">
          Flour mills are equipped with machinery for grinding, crushing and
          cutting of grains and cereals into flour. In such places, the
          pest-rate generally tends to be on a higher side. Therefore, pest
          control is a mandate to eradicate pest threat and the damage of the
          raw materials. Rest assured, our flour mills fumigation are much
          effective and are implemented with high protection of the raw
          materials from any sort of damage.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Timber fumigation</p>
        <p className="mt-1 text-lg">
          Our pest control services also include timber fumigation with Methyl
          Bromide. Timber is used to build our houses, furniture or flooring. We
          apply liquid or gaseous fumigants to deal with beetle and woodworms in
          timber. The fumigants are deeply penetrated onto all of the timbers to
          offer a substantial pest treatment.
        </p>
        <p className="mt-5 text-black font-bold text-lg">Ship and Aircraft fumigation</p>
        <p className="mt-1 text-lg">
          For transportation of goods in ships and aircrafts using containers,
          fumigation plays a vital role as it is essential to keep away pests
          and insects before entering into a foreign land. We perform the
          fumigation at the loading port as well as at the port of discharge to
          ensure double protection with the highest standards.
        </p>
      </div>
      </PageData>
    </div>
  );
}
