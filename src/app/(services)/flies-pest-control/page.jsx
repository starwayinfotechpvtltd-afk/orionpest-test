// import React from "react";
// import Image from "next/image";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("flies-control");
//   return {
//     title: page?.metaTitle || "Flies Control",
//     description: page?.metaDescription || "",
//   };
// }


// export default function FlyControlPage() {
//   return (
//     <div className="w-full">
//       {/* Main content container */}
//       <PageData segment={"flies-control"}>
//       <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
//         {/* Headings */}
//         <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
//           Fly Control Services
//         </h2>
//         <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
//           Say Goodbye to Fly Infestations
//         </h3>

//         {/* Intro section */}
//         <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
//           <div className="w-full lg:w-1/2">
//             <p className="text-lg leading-relaxed">
//               Flies are not just a nuisance; they pose a serious health risk.
//               Known for their ability to carry and spread a wide range of
//               bacteria and pathogens, they can contaminate food and surfaces,
//               leading to illnesses such as E. coli and Salmonella. Their rapid
//               breeding cycle can turn a small problem into a severe infestation
//               in a matter of days. Our Fly Control Service provides a
//               comprehensive, sanitary, and effective solution to manage and
//               eliminate fly populations.
//             </p>
//           </div>

//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//             <Image
//               src="/Images/bugs/fly1.svg"
//               alt="fly"
//               width={250}
//               height={250}
//               className="w-32 md:w-48 lg:w-56 h-auto"
//             />
//           </div>
//         </div>

//         {/* Why section */}
//         <section className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Why Fly Control is Important?
//           </h3>
//           <ul className="list-disc ml-5 md:ml-8 mt-4 flex flex-col gap-2 text-lg">
//             <li>
//               <span className="font-bold">Prevent Disease Transmission:</span>{" "}
//               Flies travel between unsanitary areas like garbage and animal
//               waste and your food, transmitting over 100 different pathogens.
//             </li>
//             <li>
//               <span className="font-bold">Protect Food and Health:</span> A fly
//               infestation can quickly contaminate food and food preparation
//               areas, posing a direct threat to the health of your family or
//               customers.
//             </li>
//             <li>
//               <span className="font-bold">Maintain Hygiene and Reputation:</span>{" "}
//               In commercial settings, a fly problem can severely damage a
//               business&apos;s reputation and lead to health code violations.
//             </li>
//             <li>
//               <span className="font-bold">Stop Rapid Breeding:</span> Flies can
//               lay hundreds of eggs at a time, allowing their population to
//               explode if not professionally managed.
//             </li>
//           </ul>
//         </section>

//         {/* Images row */}
//         <div className="flex items-center justify-center gap-6 mt-6">
//           <Image
//             src="/Images/bugs/fly2.svg"
//             alt="fly"
//             width={250}
//             height={100}
//             className="w-32 md:w-44 lg:w-56 h-auto"
//           />
//           <Image
//             src="/Images/bugs/fly3.svg"
//             alt="fly"
//             width={250}
//             height={100}
//             className="w-32 md:w-44 lg:w-56 h-auto"
//           />
//         </div>

//         {/* Approach */}
//         <section className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Our Approach
//           </h3>
//           <p className="font-bold text-lg mt-2">
//             We follow a strategic and multi-step process to eliminate flies and
//             prevent their return:
//           </p>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Inspection:</span> We conduct a
//               thorough inspection to identify the species of fly, locate their
//               breeding sites (such as garbage cans, drains, and compost piles),
//               and determine their entry points.
//             </li>
//             <li>
//               <span className="font-bold">Source Elimination:</span> The most
//               critical step is to identify and treat or remove the source of the
//               infestation. We will advise on and implement solutions for
//               sanitation and waste management.
//             </li>
//             <li>
//               <span className="font-bold">Targeted Treatment:</span> We use a
//               combination of methods, including the strategic placement of fly
//               baits, targeted residual sprays in problem areas, and the
//               installation of professional-grade Insect Light Traps (ILTs).
//             </li>
//             <li>
//               <span className="font-bold">Monitoring & Prevention:</span> We
//               provide you with a detailed plan for ongoing sanitation and
//               exclusion to prevent future infestations. Regular monitoring
//               ensures the problem is completely resolved.
//             </li>
//           </ul>
//         </section>

//         {/* Pros */}
//         <section className="mt-8 mb-12">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Pros
//           </h3>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
//             <li>
//               <span className="font-bold">Comprehensive Solution:</span> Our
//               approach targets flies at every stage of their life cycle, from
//               eggs to adults.
//             </li>
//             <li>
//               <span className="font-bold">Effective & Safe:</span> We use
//               professional-grade products and techniques that are highly
//               effective against flies while being safe for your family, pets,
//               and food environments.
//             </li>
//             <li>
//               <span className="font-bold">Improved Hygiene:</span> Our services
//               not only eliminate flies but also help improve overall sanitation
//               in your home or business.
//             </li>
//             <li>
//               <span className="font-bold">Customized for Your Needs:</span> We
//               create a tailored plan for each unique situation, whether it&apos;s
//               for a residential kitchen or a commercial restaurant.
//             </li>
//           </ul>
//         </section>
//       </div>

//       {/* Yellow section */}
//       <div className="w-full mt-12 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-60">
//         <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-8">
//           <h2 className="text-[#2F3293] text-2xl md:text-4xl lg:text-5xl text-center font-bold">
//             Why Choose Orion for Fly Control?
//           </h2>
//           <ul className="list-disc ml-5 md:ml-8 mt-6 flex flex-col gap-3 text-lg">
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
import { ShieldCheck, Phone, MapPin, CalendarDays, Mail, Shield, Leaf, House } from "lucide-react";
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
  const page = await getPageData("flies-control");
  return {
    title: page?.metaTitle || "Flies Control",
    description: page?.metaDescription || "",
  };
}

const list1 = [
  "Indoor & Outdoor Treatment",
  "Breeding Source Elimination",
  "Fogging & Larvicidal Solutions",
  "Long-Term Flies Prevention",
];

const list2 = [
  "Detailed Property Inspection",
  "Customized Flies Treatment",
  "Advanced Fogging & Spraying",
  "Preventive Monitoring & Protection",
];

const leftFeature = [
  {
    heading: "Target Flies Breeding",
    desc: "Identify and eliminate flies breeding grounds before infestations spread throughout your property.",
  },
  {
    heading: "Prevent Future Infestations",
    desc: "Reduce flies populations with long-lasting treatments and effective preventive solutions.",
  },
];

const rightFeature = [
  {
    heading: "Safe & Eco-Friendly",
    desc: "Family-friendly flies control solutions designed for indoor and outdoor environments.",
  },
  {
    heading: "Long-Lasting Protection",
    desc: "Professional treatments that provide extended defense against flies and breeding cycles.",
  },
];

const cards = [
  {
    heading: "Complete Flies Protection",
    desc: "Professional flies treatment for healthier indoor and outdoor living spaces.",
    image: "/Images/services/flies5.png",
    bgColor: "#FFF6DE",
  },
  {
    heading: "Expert Inspection & Treatment",
    desc: "Detailed inspection followed by customized flies control solutions.",
    image: "/Images/icon/vector2.png",
    bgColor: "#EEF4FF",
  },
  {
    heading: "Long-Lasting Flies Prevention",
    desc: "Prevent flies breeding with advanced monitoring and professional treatment.",
    image: "/Images/icon/vector3.png",
    bgColor: "#FFF1F2",
  },
];

const childSafeStats = [
  {
    title: "Eco-Friendly Treatment",
    desc: "Safe solutions for homes, gardens, and workplaces.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon : ShieldCheck
  },
  {
    title: "Stops Flies Breeding",
    desc: "Eliminates breeding sources before they become a problem.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Shield
  },
  {
    title: "Long-Lasting Results",
    desc: "Extended flies protection throughout the season.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Leaf
  },
  {
    title: "Trusted Since 1998",
    desc: "India's trusted flies control specialists.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: House
  },
];

const faqs = [
  {
    id: "01",
    question: "How do I reduce flies around my home?",
    answer:
      "Remove stagnant water, clean drains regularly, maintain gardens, and schedule professional flies treatment for complete protection.",
  },
  {
    id: "02",
    question: "How long does flies treatment take?",
    answer:
      "Most flies control treatments are completed within a few hours, depending on the size of the property and treatment area.",
  },
  {
    id: "03",
    question: "Is flies treatment safe for children and pets?",
    answer:
      "Yes. Orion Pest Control uses government-approved products that are professionally applied and safe for families and pets.",
  },
  {
    id: "04",
    question: "Do you provide flies fogging services?",
    answer:
      "Yes. We offer fogging, spraying, larvicidal treatment, and customized flies management solutions for residential and commercial properties.",
  },
  {
    id: "05",
    question: "How much does flies control cost?",
    answer:
      "Pricing depends on your property size, flies activity, and treatment requirements. Contact us today for a free inspection and customized quotation.",
  },
  {
    id: "06",
    question: "How long does flies protection last?",
    answer:
      "Treatment effectiveness depends on environmental conditions, but our professional solutions provide long-lasting flies control with regular maintenance.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/flies.png"
        topbadge="TERMITE PEST CONTROL SERVICES"
        heading={
          <>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Say Goodbye to
              <br />
              <span className="text-[#1095D9]">Files</span>
            </h1>
          </>
        }
        subHeading="Safe. Effective. Long-Lasting Protection."
        desc="Protect your family from flies and flies-borne diseases with Orion Pest Control's professional flies control services. Our advanced flies treatment solutions eliminate breeding sources, reduce flies populations, and provide long-lasting protection for homes, gardens, offices, and commercial properties."
        stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
        imageStyle="absolute w-[80%] h-[80%] top-[10%] -left-[20%] sm:-left-[10%] z-[10px]"
      />
      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/mosquito2.png"
       heading={
          <>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Flies Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc="Flies breed quickly in stagnant water and hidden outdoor areas, increasing the risk of diseases like dengue, malaria, and chikungunya. Our certified professionals use advanced inspection and treatment methods to eliminate flies and prevent future breeding."
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
        desc="Our comprehensive flies control program targets breeding sites, resting areas, and outdoor spaces to provide complete protection for your family and property."
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="COMPLETE FLIES PROTECTION"
        heading={
          <>
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
            Complete Flies Control
            <br />
            <span className="text-[#0094DA]">at Every Place.</span>
          </h2>
          </>
        }
        desc="From residential homes to offices, hospitals, hotels, restaurants, schools, and commercial spaces, our flies control solutions keep every environment safer and healthier."
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
            <span className="text-[#0094DA]">Flies Control,</span>{" "}
            <span className="text-[#2F3293]">Every Time.</span>
          </h2>
          </>
        }
        desc="See why thousands of families and businesses choose Orion Pest Control for safe, effective, and long-lasting flie control services."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/flies3.png"
        image2="/Images/services/flies4.png"
        name="Flies"
        tagline="Child Safe Flies Control, Complete Peace of Mind."
        desc="Our environmentally responsible flies treatments help protect your family from flies bites while remaining safe for children, pets, and everyday living."
        childSafeStats={childSafeStats}
      />

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/services/flies2.png" faqs={faqs}/>
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl border border-slate-100 bg-[#F9FAFE] p-6 sm:p-8 shadow-lg max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto">
          <SupportCard
            icon={<Phone size={26} />}
            title="Need Immediate Assistance?"
            text="Call us now for quick support"
            highlight="1800 212 696969"
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
                <span className="text-[#2F3293]">Flies-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your family from flies bites and flies-borne diseases with professional flies control services from Orion Pest Control.
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
                src="/Images/services/flies2.png"
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
