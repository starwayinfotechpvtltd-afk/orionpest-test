// import React from "react";
// import Image from "next/image";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("bedbug-control");
//   return {
//     title: page?.metaTitle || "Bedbug Control",
//     description: page?.metaDescription || "",
//   };
// }

// export default function Page() {
//   return (
//     <div className="w-full">
//       <PageData segment={"bedbug-control"}>
//       <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto relative">
//         {/* Title */}
//         <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
//           Bed Bug Control Services
//         </h2>
//         <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
//           Say Goodbye to Bed Bug Infestations
//         </h3>

//         {/* Intro Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-6">
//           <p className="w-full lg:w-1/2 text-lg leading-relaxed">
//             Bed bugs are a nightmare for homeowners and travelers alike, feeding
//             on blood and leaving behind itchy, red welts. They are master
//             hiders, often found in mattresses, furniture, and cracks in the
//             walls, making them incredibly difficult to eradicate without
//             professional intervention. Our Bed Bug Control Service offers a
//             comprehensive and effective solution for quick, safe, and
//             long-lasting relief.
//           </p>
//           <Image
//             src="/Images/bugs/bedbug1.svg"
//             alt="bedbug"
//             height={250}
//             width={250}
//             className="w-40 md:w-52 lg:w-64 h-auto"
//           />
//         </div>

//         {/* Why Bed Bug Control is Important */}
//         <div className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Why Bed Bug Control is Important
//           </h3>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Cause severe itching and discomfort:</span>{" "}
//               Bed bug bites can lead to incessant scratching, which may result
//               in secondary skin infections.
//             </li>
//             <li>
//               <span className="font-bold">Trigger allergic reactions:</span>{" "}
//               Some individuals may experience more severe allergic reactions to
//               bed bug bites.
//             </li>
//             <li>
//               <span className="font-bold">Spread rapidly:</span> A single
//               pregnant female can start a full-blown infestation in a short
//               period, spreading from one room to another.
//             </li>
//             <li>
//               <span className="font-bold">Affect mental health:</span> The
//               stress and anxiety associated with a bed bug infestation can
//               significantly impact sleep and overall well-being.
//             </li>
//           </ul>
//         </div>

//         {/* Image Centered */}
//         <Image
//           src="/Images/bugs/bedbug2.png"
//           width={400}
//           height={100}
//           alt="bedbug"
//           className="mt-4 mx-auto w-48 md:w-64 lg:w-80 h-auto"
//         />

//         {/* Approach */}
//         <div className="mt-10">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Our Approach
//           </h3>
//           <p className="font-bold text-lg mt-2">
//             We follow a thorough, multi-step process to eliminate bed bugs from
//             your home:
//           </p>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Inspection:</span> Our experts conduct
//               a detailed inspection to locate all bed bug hiding spots,
//               including mattresses, bed frames, furniture, and even electrical
//               outlets.
//             </li>
//             <li>
//               <span className="font-bold">Treatment:</span> We use a combination
//               of methods, such as heat treatment, which is highly effective in
//               killing all life stages of bed bugs, and targeted application of
//               insecticides to residual areas.
//             </li>
//             <li>
//               <span className="font-bold">Crack & Crevice Treatment:</span> We
//               treat all potential harborage areas to ensure no bed bugs are left
//               behind.
//             </li>
//             <li>
//               <span className="font-bold">Monitoring & Prevention:</span> We
//               provide you with valuable tips on how to prevent future
//               infestations and may schedule follow-up visits to ensure the
//               problem is completely resolved.
//             </li>
//           </ul>
//         </div>

//         {/* Pros */}
//         <div className="mt-10">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Pros
//           </h3>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3 text-lg">
//             <li>
//               <span className="font-bold">Highly effective:</span> Our
//               treatments are designed to eliminate bed bugs at all life stages,
//               including eggs.
//             </li>
//             <li>
//               <span className="font-bold">Safe for your home:</span> We use
//               professional-grade products and techniques that are safe for your
//               family and pets when applied correctly.
//             </li>
//             <li>
//               <span className="font-bold">Minimal disruption:</span> Our methods
//               are designed to be as minimally disruptive to your daily life as
//               possible.
//             </li>
//             <li>
//               <span className="font-bold">Comprehensive solution:</span> We
//               don't just kill the bugs you see; we target the entire infestation
//               to prevent a recurrence.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Yellow Section */}
//       <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative">
//         <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
//           <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-10">
//             Why Choose Orion for Bed Bug Control?
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
  const page = await getPageData("bedbug-control");
  return {
    title: page?.metaTitle || "Bedbug Control",
    description: page?.metaDescription || "",
  };
}

const list1 = [
  "Mattress & Furniture Treatment",
  "Hotel & Hostel Bed Bug Control",
  "Residential Bed Bug Removal",
  "Complete Egg Elimination",
];

const list2 = [
  "Thorough Property Inspection",
  "Customized Bed Bug Treatment",
  "Advanced Heat & Chemical Solutions",
  "Follow-Up Monitoring & Prevention",
];

const leftFeature = [
  {
    heading: "Find Hidden Infestations",
    desc: "Our experts inspect mattresses, furniture, wall cracks, and upholstery to locate even the smallest bed bug colonies.",
  },
  {
    heading: "Prevent Re-Infestation",
    desc: "Our advanced treatment methods destroy bed bugs at every life stage, including eggs, preventing future outbreaks.",
  },
];

const rightFeature = [
  {
    heading: "Safe & Effective Treatment",
    desc: "Professional solutions designed to eliminate bed bugs while remaining safe for families and pets.",
  },
  {
    heading: "Long-Lasting Protection",
    desc: "Comprehensive treatments that reduce the risk of bed bugs returning.",
  },
];

const cards = [
  {
    heading: "Complete Bed Bug Elimination",
    desc: "Professional treatments that eliminate bed bugs from every hiding place.",
    image: "/Images/services/bedbug3.png",
    bgColor: "#FFF6DE",
  },
  {
    heading: "Expert Inspection & Treatment",
    desc: "Accurate inspection followed by customized treatment plans for complete control.",
    image: "/Images/icon/vector2.png",
    bgColor: "#EEF4FF",
  },
  {
    heading: "Long-Term Bed Bug Protection",
    desc: "Prevent future infestations with professional monitoring and preventive solutions.",
    image: "/Images/icon/vector3.png",
    bgColor: "#FFF1F2",
  },
];

const childSafeStats = [
  {
    title: "Non-Toxic Solutions",
    desc: "Safe treatment options for indoor living spaces.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon : ShieldCheck
  },
  {
    title: "Deep Crack Treatment",
    desc: "Targets hidden bed bugs inside furniture and walls.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Shield
  },
  {
    title: "Long-Lasting Results",
    desc: "Extended protection against recurring infestations.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Leaf
  },
  {
    title: "Trusted Since 1998",
    desc: "India's trusted pest management experts.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: House
  },
];

const faqs = [
  {
    id: "01",
    question: "How do I know if I have bed bugs?",
    answer:
      "Common signs include itchy bite marks, blood stains on bedsheets, tiny dark spots on mattresses, and live bed bugs hiding in mattress seams or furniture.",
  },
  {
    id: "02",
    question: "How long does bed bug treatment take?",
    answer:
      "Most treatments are completed within a few hours, depending on the severity of the infestation and property size.",
  },
  {
    id: "03",
    question: "Is bed bug treatment safe for children and pets?",
    answer:
      "Yes. Orion Pest Control uses government-approved products and follows safe application methods suitable for residential environments.",
  },
  {
    id: "04",
    question: "Can bed bugs return after treatment?",
    answer:
      "Professional treatment combined with proper preventive measures greatly reduces the chances of re-infestation. Follow-up inspections may also be recommended.",
  },
  {
    id: "05",
    question: "Do you provide treatment for hotels and hostels?",
    answer:
      "Yes. We provide specialized bed bug control services for hotels, hostels, PG accommodations, hospitals, apartments, and commercial properties.",
  },
  {
    id: "06",
    question: "How much does bed bug treatment cost?",
    answer:
      "Treatment cost depends on the infestation level, property size, and treatment method. Contact us for a free inspection and customized quotation.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/bedbug.png"
        topbadge="BED BUG PEST CONTROL SERVICES"
       heading={
          <>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Say Goodbye to
              <br />
              <span className="text-[#1095D9]">Bed Bugs</span>
            </h1>
          </>
        }
        subHeading="Safe. Effective. Long-Lasting Protection."
        desc="Sleep peacefully again with Orion Pest Control's professional bed bug treatment services. We eliminate bed bugs from mattresses, furniture, sofas, hotels, and homes using advanced treatment methods that are safe, effective, and provide long-lasting protection against re-infestation."
        stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
        imageStyle="absolute w-[105%] h-[105%] -top-[16%] -left-[20%] sm:-left-[32%] z-[10px]"
      />
      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/bedbug2.png"
        heading={
          <>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Bed Bugs Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc="Bed bugs hide deep inside mattresses, furniture, cracks, and upholstery, making them difficult to eliminate without professional treatment. Our expert technicians use advanced inspection and targeted treatment methods to completely remove bed bugs and their eggs."
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
        desc="Our comprehensive bed bug treatment targets every hiding place, ensuring complete elimination while preventing future infestations."
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="COMPLETE BED BUG ELIMINATION"
        heading={
          <>
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
            Complete Bed Bug Control
            <br />
            <span className="text-[#0094DA]">at Every Place.</span>
          </h2>
          </>
        }
        desc="Whether it's your home, hotel, hostel, apartment, hospital, or commercial property, our specialized bed bug treatment ensures complete protection and restful sleep."
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
            <span className="text-[#0094DA]">Bed Bug Control,</span>{" "}
            <span className="text-[#2F3293]">Every Time.</span>
          </h2>
          </>
        }
        desc="Discover why thousands of families, hotels, and businesses rely on Orion Pest Control for fast, reliable, and effective bed bug treatment."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/bedbug4.png"
        image2="/Images/services/bedbug5.png"
        name="Bed Bug "
        tagline="Child Safe Bed Bug Control, Peaceful Sleep Guaranteed."
        desc="Our professionally applied bed bug treatments eliminate infestations while keeping your family, children, pets, and indoor environment safe. Sleep comfortably knowing your home is protected."
        childSafeStats={childSafeStats}
      />

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/services/bedbug-1.png" faqs={faqs} name="Bed Bug"/>
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
                <span className="text-[#2F3293]">Termite-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your property before termites cause costly structural
                damage. Book a professional termite inspection with our
                certified experts today.
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
                src="/Images/services/bedbug-1.png"
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
