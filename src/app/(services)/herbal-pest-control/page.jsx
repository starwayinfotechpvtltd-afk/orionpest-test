import React from "react";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("herbal-pest-control");
  return {
    title: page?.metaTitle || "Herbal Pest Control",
    description: page?.metaDescription || "",
  };
}


export default function page() {
  return (
    <div className="w-full pb-80">
      <PageData segment={"herbal-pest-control"}>
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">
          Herbal Pest Control Services
        </h2>
        <p className="mt-10 text-lg">
          At Orion Pest Control, we believe in offering our customers
          innovative, environmentally-friendly, and sustainable pest management
          solutions. Our Herbal Pest Control services are designed to protect
          your home and business while promoting a healthier, greener
          environment. Say goodbye to harmful chemicals and embrace nature’s
          power with our safe and effective herbal treatments.
        </p>
        <p className="mt-3 text-lg font-bold text-black">
          Why Choose Herbal Pest Control?
        </p>
        <p className="text-md font-bold text-black">
          Eco-Friendly and Non-Toxic
        </p>
        <p className="mt-1 text-lg">
          Unlike traditional chemical pest control methods, herbal pest control
          uses natural plant-based solutions. These non-toxic ingredients
          effectively eliminate pests while being safe for your family, pets,
          and the environment. By choosing herbal pest control, you help reduce
          the use of harmful chemicals that can pollute water, soil, and air.
        </p>
        <p className="text-md font-bold text-black mt-5">
          Targeted Pest Control Solutions
        </p>
        <p className="mt-1 text-lg">
          Herbal pest control targets a wide range of common pests, including
          ants, mosquitoes, spiders, cockroaches, and rodents, without harming
          beneficial insects or wildlife. Our herbal formulations act as
          repellents or disrupt the pests’ natural behavior, leading to
          long-term pest control results.
        </p>
        <p className="mt-5 text-md font-bold text-black">
          Safe for Children and Pets
        </p>
        <p className="mt-1 text-lg">
          One of the primary advantages of herbal pest control is that it is
          safe for everyone in your household, including children and pets. You
          no longer have to worry about the risks associated with toxic
          pesticides that can harm your loved ones.
        </p>
        <p className="mt-5 text-md font-bold text-black">
          Sustainable and Natural
        </p>
        <p className="mt-1 text-lg">
          Our herbal pest control services are in line with our commitment to
          sustainability. By using natural remedies such as essential oils,
          plant extracts, and herbal powders, we provide an eco-conscious
          solution that doesn’t contribute to the growing problem of pesticide
          resistance.
        </p>
        <p className="mt-3 text-lg font-bold text-black">
          How Does Herbal Pest Control Work?
        </p>
        <p className="mt-3 text-md font-bold text-black">
          Herbal pest control uses plant-based substances that are known to
          repel or eliminate pests. Some of the key ingredients in our
          treatments include
        </p>
        <ul className="list-disc ml-4 text-lg flex flex-col gap-2 mt-3">
          <li>
            Peppermint Oil: A natural repellent for ants, spiders, and rodents.
          </li>
          <li>
            Cedarwood: Effective for repelling moths, termites, and other
            insects.
          </li>
          <li>
            Neem Oil: A powerful pest deterrent for a wide range of insects,
            including mosquitoes, beetles, and aphids.
          </li>
          <li>Eucalyptus: Helps repel mosquitoes and other flying insects.</li>
          <li>
            Lemongrass: Known for repelling pests like ticks, fleas, and flies.
          </li>
        </ul>
        <p className="mt-5 text-lg">
          When these herbal solutions are applied strategically around your home
          or business, they create an environment that pests find uncomfortable,
          leading them to move elsewhere without causing harm to your property
          or the ecosystem.
        </p>
        <p className="mt-5 text-lg font-bold text-black">
          Our Herbal Pest Control Process
        </p>
        <p className="mt-5 text-md font-bold text-black">
          At Orion Pest Control, we take a personalized approach to every pest
          issue. Our process is simple, efficient, and environmentally friendly:
        </p>
        <ol className="list-decimal ml-4 text-lg mt-3 flex flex-col gap-2">
          <li>
            Inspection: We conduct a thorough inspection of your property to
            identify the types of pests and any potential entry points.
          </li>
          <li>
            Tailored Treatment Plan: Based on the inspection, we craft a
            customized herbal pest control plan that is designed to address the
            specific needs of your space.
          </li>
          <li>
            Herbal Treatment Application: We apply our eco-friendly, herbal pest
            control solutions to both the interior and exterior of your
            property.
          </li>
          <li>
            Follow-Up: Our team will monitor the effectiveness of the treatment
            and offer ongoing support as needed to ensure long-term pest
            control.
          </li>
        </ol>
        <p className="mt-3 text-lg font-bold text-black">
          Benefits of Choosing Orion Pest Control’s Herbal Solutions
        </p>
        <ul className="list-disc ml-4 text-lg mt-3 flex flex-col gap-2">
          <li>
            No Harsh Chemicals: Our treatments are made from natural ingredients
            that are safe for people, pets, and plants.
          </li>
          <li>
            Long-Term Protection: Our herbal remedies work to keep pests at bay
            for the long term, minimizing the need for frequent reapplications.
          </li>
          <li>
            Affordable and Effective: Our herbal pest control services offer a
            cost-effective alternative to traditional pest control methods, with
            sustainable results.
          </li>
          <li>
            Preventative Care: We don’t just eliminate pests—we help prevent
            future infestations by identifying and addressing the root cause.
          </li>
        </ul>
        <p className="mt-3 text-lg font-bold text-black">
          Pests We Treat with Herbal Solutions
        </p>
        <ul className="list-disc ml-4 text-lg mt-3 flex flex-col gap-2">
          <li>
            Ants: Herbal oils such as peppermint and cinnamon are highly
            effective in driving ants away.
          </li>
          <li>
            Mosquitoes: Eucalyptus and citronella oils act as natural mosquito
            repellents.
          </li>
          <li>
            Rodents: Strong-smelling herbs like peppermint and bay leaves can
            deter rodents from entering your space.
          </li>
          <li>
            Spiders: Essential oils like tea tree and lavender discourage
            spiders from nesting in your home.
          </li>
        </ul>
        <p className="mt-5 text-lg font-bold text-black text-center">
          Get Started with Herbal Pest Control Today
        </p>
        <p className="mt-5 text-lg">
          At Orion Pest Control, we are committed to providing safe, natural,
          and effective pest control solutions that align with your eco-friendly
          values. Our herbal pest control services are the perfect choice for
          anyone looking to protect their home or business from pests without
          compromising on safety or environmental responsibility.
        </p>
        <p className="mt-3 text-lg">
          Contact us today to schedule a consultation and learn more about how
          our herbal pest control solutions can give you peace of mind, knowing
          your property is safe and pest-free!
        </p>
      </div>
      </PageData>
    </div>
  );
}
