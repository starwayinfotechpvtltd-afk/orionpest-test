// import React from "react";
// import Image from "next/image";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("ant-control");
//   return {
//     title: page?.metaTitle || "Ant Control",
//     description: page?.metaDescription || "",
//   };
// }

// export default function Page() {
//   return (
//     <div className="w-full">
//       <PageData segment={"ant-control"}>
//       <div className="w-full md:w-[80%] lg:w-[60%] mx-auto relative px-4">
//         <h2 className="text-[#2F3293] text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-20">
//           Ant Control Services
//         </h2>
//         <h3 className="text-center text-[#0094DA] text-2xl sm:text-3xl lg:text-4xl font-bold mt-3">
//           Say Goodbye to Ant Infestations
//         </h3>

//         {/* Intro section */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
//           <p className="w-full md:w-1/2 text-lg">
//             Ants are one of the most persistent and widespread household pests.
//             While some species are just a nuisance, others can cause significant
//             damage or even pose health risks. They are masters at finding their
//             way into homes in search of food and water, often forming long
//             trails and building nests in hard-to-reach places. A small foraging
//             trail can quickly become a large-scale infestation. Our Ant Control
//             Service provides a comprehensive, targeted, and long-lasting
//             solution to eliminate ants and protect your property.
//           </p>
//           <Image
//             src="/Images/bugs/ant1.svg"
//             alt="ant"
//             height={250}
//             width={250}
//             className="w-[180px] sm:w-[220px] lg:w-[250px] mx-auto"
//           />
//         </div>

//         {/* Importance section */}
//         <div className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl sm:text-3xl lg:text-4xl font-bold">
//             Why Ant Control is Important?
//           </h3>
//           <ul className="list-disc ml-6 sm:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Contaminate Food:</span> Ants can
//               travel through unsanitary areas and then crawl all over your food,
//               utensils, and countertops, contaminating them with bacteria.
//             </li>
//             <li>
//               <span className="font-bold">Property Damage:</span> Certain
//               species, such as carpenter ants, can cause structural damage by
//               excavating wood to create nests.
//             </li>
//             <li>
//               <span className="font-bold">Painful Bites and Stings:</span> Some
//               ants, like fire ants, can deliver painful and allergic reactions
//               through their bites or stings.
//             </li>
//             <li>
//               <span className="font-bold">Stop Rapid Colony Growth:</span> Ants
//               live in vast colonies, and a small trail of foragers is often just
//               the tip of the iceberg, with the main colony hidden somewhere
//               nearby.
//             </li>
//           </ul>
//         </div>

//         {/* Ant images */}
//         <div className="flex items-center justify-evenly gap-6 mt-6">
//           <Image
//             src="/Images/bugs/ant2.svg"
//             width={200}
//             height={100}
//             alt="ant"
//             className="w-[180px] sm:w-[220px] lg:w-[250px]"
//           />
//           <Image
//             src="/Images/bugs/ant3.svg"
//             width={200}
//             height={100}
//             alt="ant"
//             className="w-[180px] sm:w-[220px] lg:w-[250px]"
//           />
//         </div>

//         {/* Approach */}
//         <div className="mt-10">
//           <h3 className="text-[#0094DA] text-2xl sm:text-3xl lg:text-4xl font-bold">
//             Our Approach
//           </h3>
//           <p className="font-bold text-lg mt-2">
//             We follow a systematic and effective process to eliminate ants at
//             their source:
//           </p>
//           <ul className="list-disc ml-6 sm:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Inspection:</span> Our experts conduct
//               a detailed inspection to identify the ant species, locate the
//               nest, and track their entry points and foraging trails.
//             </li>
//             <li>
//               <span className="font-bold">Targeted Baiting:</span> We use
//               professional-grade ant baits that are irresistible to ants. The
//               foragers carry the bait back to the colony, including the queen,
//               ensuring the entire nest is eliminated from the inside out.
//             </li>
//             <li>
//               <span className="font-bold">Barrier Treatment:</span> We apply
//               targeted, long-lasting liquid treatments to the exterior of your
//               home, creating a protective barrier that prevents new ants from
//               entering.
//             </li>
//             <li>
//               <span className="font-bold">Exclusion & Prevention:</span> We
//               provide you with valuable advice on how to prevent future
//               infestations, such as sealing cracks and crevices and maintaining
//               proper sanitation to remove food sources.
//             </li>
//           </ul>
//         </div>

//         {/* Pros */}
//         <div className="mt-10">
//           <h3 className="text-[#0094DA] text-2xl sm:text-3xl lg:text-4xl font-bold">
//             Pros
//           </h3>
//           <ul className="list-disc ml-6 sm:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Effective for the Entire Colony:</span>{" "}
//               Our baiting system ensures the elimination of the queen and the
//               entire colony, not just the visible foragers.
//             </li>
//             <li>
//               <span className="font-bold">Long-Lasting Protection:</span> Our
//               combination of baiting and barrier treatments provides a durable,
//               long-term solution.
//             </li>
//             <li>
//               <span className="font-bold">Minimal Disruption:</span> Our methods
//               are designed to be minimally invasive, with no strong odors or
//               lingering residue.
//             </li>
//             <li>
//               <span className="font-bold">Safe and Targeted:</span> We use
//               professional-grade products that are highly effective against ants
//               while being safe for your family and pets when applied correctly.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Yellow section */}
//       <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative px-4">
//         <div className="w-full md:w-[80%] lg:w-[60%] mx-auto">
//           <h2 className="text-[#2F3293] text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-10">
//             Why Choose Orion for Ant Control?
//           </h2>
//           <ul className="list-disc ml-6 sm:ml-8 mt-6 sm:mt-10 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Eco-Friendly Methods:</span> Safe,
//               odorless, and pet-friendly treatments.
//             </li>
//             <li>
//               <span className="font-bold">Trained Technicians:</span> Skilled
//               team with years of expertise.
//             </li>
//             <li>
//               <span className="font-bold">Custom Plans:</span> Tailored
//               solutions for homes, restaurants, and offices.
//             </li>
//             <li>
//               <span className="font-bold">Trusted Brand:</span> Serving clients
//               across India since 1998.
//             </li>
//           </ul>
//         </div>
//       </div>
//       </PageData>
//     </div>
//   );
// }

import Image from "next/image";
import {
  ShieldCheck,
  Phone,
  MapPin,
  CalendarDays,
  Mail,
  Shield,
  Leaf,
  House,
} from "lucide-react";
import TestimonialsSection from "@/components/services/ui/Testimonials";
import FAQSection from "@/components/ui/FAQ";
import Form from "@/components/ui/Form";
import { getPageData } from "@/lib/getPageData";
import HeroSection from "@/components/services/HeroSection";
import SupportCard from "@/components/services/ui/SupportCard";
import ContactInfo from "@/components/services/ui/ContactInfo";
import AdvanceControl from "@/components/services/AdvanceControl";
import CompleteProtection from "@/components/services/CompleteProtection";
import Diagram from "@/components/services/Diagram";
import BrandSection from "@/components/services/BrandSection";
import ChildSafeSection from "@/components/services/ChildSafeSection";

export async function generateMetadata() {
  const page = await getPageData("ant-control");
  return {
    title: page?.metaTitle || "Ant Control",
    description: page?.metaDescription || "",
  };
}

const list1 = [
  "Pre-Construction Treatment",
  "Post-Construction Treatment",
  "Wood Protection Solutions",
  "Soil & Foundation Treatment",
];

const list2 = [
  "Detailed Property Inspection",
  "Customized Treatment Plan",
  "Advanced Anti-Ant Solutions",
  "Long-Term Monitoring & Warranty",
];

const leftFeature = [
  {
    heading: "Target Hidden Colonies",
    desc: "Advanced detection identifies ant activity before major structural damage occurs.",
  },
  {
    heading: "Prevent Future Damage",
    desc: "Protect your investment with long-lasting ant prevention treatments.",
  },
];

const rightFeature = [
  {
    heading: "Safe & Eco-Friendly",
    desc: "Environmentally responsible solutions that are safe for families and pets.",
  },
  {
    heading: "Long-Lasting Protection",
    desc: "Professional-grade treatments with extended protection against re-infestation.",
  },
];

const cards = [
  {
    heading: "Comprehensive Ant Protection",
    desc: "Complete structural protection with advanced anti-ant technology.",
    image: "/Images/services/ant2.png",
    bgColor: "#FFF6DE",
  },
  {
    heading: "Expert Inspection & Treatment",
    desc: "Professional inspection followed by customized treatment solutions.",
    image: "/Images/icon/vector2.png",
    bgColor: "#EEF4FF",
  },
  {
    heading: "Long-Term Structural Safety",
    desc: "Protect your property from costly ant damage with preventive care.",
    image: "/Images/icon/vector3.png",
    bgColor: "#FFF1F2",
  },
];

const childSafeStats = [
  {
    title: "Non-Toxic Solutions",
    desc: "Safe treatment methods for indoor environments.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: ShieldCheck,
  },
  {
    title: "Deep Foundation Protection",
    desc: "Stops ants at the source.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Shield,
  },
  {
    title: "Long-Lasting Results",
    desc: "Extended protection against future infestations.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Leaf,
  },
  {
    title: "Trusted Since 1998",
    desc: "India's trusted ant specialists.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: House,
  },
];

const faqs = [
  {
    id: "01",
    question: "How do I know if my home has ants?",
    answer:
      "Common signs include mud tubes, hollow-sounding wood, discarded wings, damaged wooden furniture, and unexplained cracks. Schedule a professional inspection for confirmation.",
  },
  {
    id: "02",
    question: "How long does ant treatment take?",
    answer:
      "Most residential ant treatments are completed within a few hours, depending on the size of the property and the severity of infestation.",
  },
  {
    id: "03",
    question: "Is ant treatment safe for children and pets?",
    answer:
      "Yes. Orion uses government-approved ant treatment solutions that are safe when applied by certified professionals.",
  },
  {
    id: "04",
    question: "How long does ant protection last?",
    answer:
      "Our treatments provide long-term protection, and preventive maintenance can significantly extend effectiveness.",
  },
  {
    id: "05",
    question: "Do you provide ant warranties?",
    answer:
      "Yes. Selected ant treatment plans include service warranties for additional peace of mind.",
  },
  {
    id: "06",
    question: "How much does ant treatment cost?",
    answer:
      "The cost depends on property size, infestation level, and treatment type. Contact us for a free site inspection and personalized quotation.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/ant.png"
        topbadge="ANT PEST CONTROL SERVICES"
        heading={
          <>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Say Goodbye to
              <br />
              <span className="text-[#1095D9]">Ants</span>
            </h1>
          </>
        }
        subHeading="Safe. Effective. Long-Lasting Protection."
        desc="Protect your home from hidden ant damage with Orion Pest Control. Our advanced ant treatment solutions eliminate active infestations and provide long-lasting protection for homes, offices, and commercial properties. Safe, effective, and trusted since 1970."
        stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
        imageStyle="absolute w-[80%] h-[80%] top-[0%] -left-[20%] sm:left-[0%] z-[10px]"
      />
      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/ant5.png"
        heading={
          <>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Ant Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc="Birds silently weaken wooden structures before visible damage appears. Our experienced technicians use modern detection methods and proven treatment techniques to eliminate ants from the source while preventing future infestations."
        list={list1}
      />

      {/* Complete Protection Section */}
      <CompleteProtection
        heading={
          <>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Complete Protection for
              <span className="text-[#1095D9]"> Every Corner</span>
            </h2>
          </>
        }
        desc="Our comprehensive ant control process protects every vulnerable area of your property, ensuring complete structural safety and long-lasting defense against ants."
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="COMPLETE STRUCTURAL PROTECTION"
        heading={
          <>
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
            Complete Ant Control
            <br />
            <span className="text-[#0094DA]">at Every Place.</span>
          </h2>
          </>
        }
        desc="Whether it's a home, office, warehouse, hotel, or commercial building, our specialized ant treatment keeps every property protected against hidden ant attacks."
        leftFeature={leftFeature}
        rightFeature={rightFeature}
      />

      {/* Brand Logos / Cards Grid Section */}
      <BrandSection heading={
        <>
        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
              Preferred by{" "}
              <span className="text-[#0094DA]">Homes & Businesses</span> Across
              India
            </h2>
        </>
      } cards={cards} />

      {/* Testimonials Section Component */}
      <TestimonialsSection
        heading={
          <>
          <h2 className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
            Trusted by Thousands.
            <br />
            <span className="text-[#0094DA]">Ant Control,</span>{" "}
            <span className="text-[#2F3293]">Every Time.</span>
          </h2>
          </>
        }
        desc="See why homeowners, businesses, and builders trust Orion Pest Control for dependable ant protection and exceptional service."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/ant3.png"
        image2="/Images/services/ant4.png"
        name="Ant"
        tagline="Safe for your little ones. Tough on ants."
        desc="Our eco-friendly ant treatments provide maximum protection while remaining safe for your children, pets, and the environment. Enjoy complete peace of mind without compromising your family's safety."
        childSafeStats={childSafeStats}
      />

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/services/ant.png" faqs={faqs} />
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl border border-slate-100 bg-[#F9FAFE] p-6 sm:p-8 shadow-lg max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto">
          <SupportCard
            icon={<Phone size={26} />}
            title="Need Immediate Assistance?"
            text="Call us now for quick support"
            highlight="1800 419 8181"
            link="1800 419 8181"
          />
          <SupportCard
            icon={<CalendarDays size={26} />}
            title="Schedule an Inspection"
            text="Book a professional inspection"
            highlight="At your convenience"
          />
          <SupportCard
            icon={<ShieldCheck size={26} />}
            title="Safe. Effective. Reliable."
            text="Trusted by thousands of homes"
            highlight="Across India"
          />
        </div>
      </section>

      {/* Interactive Contact Form Matrix Content Group Grid Footer Element */}
      <section
        className="relative overflow-hidden bg-[#FEFEFE] py-16 md:py-24"
        style={{
          background: "url('/Images/CTA_background.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 w-full relative z-[2]">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* LEFT SIDE CONTENT SECTION */}
            <div>
              <p className="font-semibold uppercase tracking-widest text-smsm:text-base">
                <span className="text-blue-600">Get In</span>{" "}
                <span className="text-yellow-500">Touch</span>
              </p>

              <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#2F3293]">
                We're Here to
                <br />
                <span className="text-[#0095DA]">Help You Stay</span>
                <br />
                <span className="text-[#2F3293]">Ant-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your property before ants cause costly structural
                damage. Book a professional ant inspection with our certified
                experts today.
              </p>

              {/* Contact Info Row Components Column Base List Block */}
              <div className="mt-10 space-y-6 sm:space-y-8">
                <ContactInfo
                  icon={<Phone size={24} />}
                  title="CALL US"
                  link="1800 419 8181"
                  value="1800 419 8181"
                  bg="bg-yellow-400"
                />
                <ContactInfo
                  icon={<Mail size={24} />}
                  title="EMAIL US"
                  link="sales@orionpest.com"
                  value="sales@orionpest.com"
                  bg="bg-yellow-400"
                />
                <ContactInfo
                  icon={<MapPin size={24} />}
                  title="OUR HEAD OFFICE"
                  value="200W,S P Mukherjee Road, Road, beside Bank of Baroda, Tollygunge, Kolkata, West Bengal 700026"
                  bg="bg-yellow-400"
                />
              </div>
            </div>

            {/* RIGHT SIDE FORM COMPONENT BLOCK */}
            <div className="w-full">
              <Form />
            </div>
          </div>
        </div>
        {/* Bottom Decorative Circle Vector Element Shape Component Mock Container */}
        <div className="absolute -bottom-12 -left-32 hidden xl:block overflow-hidden">
          <div
            className="relative overflow-hidden border-4 border-yellow-400 w-[450px] h-[230px] rounded-t-full"
            style={{
              background: "url('/Images/bugs/bg.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute left-32 top-5 w-52 h-52">
              <Image
                src="/Images/services/ant.png"
                alt="Cockroach"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
