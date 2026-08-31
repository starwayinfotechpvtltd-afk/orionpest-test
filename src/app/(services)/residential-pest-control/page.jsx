// import React from "react";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("residential-pest-control");
//   return {
//     title: page?.metaTitle || "Residential Pest Control",
//     description: page?.metaDescription || "",
//   };
// }

// export default function page() {

//     const whyChooseUs=[
//         "Guaranteed satisfaction",
//         "24/7 service available",
//         "Certified &Experienced professionals",
//         "100% Safe and Reliable",
//         "Money-back Guarantee"
//     ]
//   return (
//     <div className="w-full pb-80">
//       <PageData segment={"residential-pest-control"}>
//       <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
//         <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">
//           Residential Pest Control Services
//         </h2>
//         <p className="mt-10 text-lg font-bold">
//           Home pest control
//           <br></br>
//           Looking for a home pest control treatment? No worries. We’re here to
//           help!
//         </p>
//         <p className="mt-3 text-lg">
//           Orion Pest Control offers the most effective, safe and reliable home
//           pest control solutions for homeowners and builders in India at
//           affordable prices. We are committed to keep you away from the hazards
//           caused by infectious pests and give you a healthy and happy life. With
//           a team of highly skilled exterminators having proven expertise, we
//           take pride in providing swift and efficient home pest control services
//           to safeguard your home from pest infestations. Whether it is termites,
//           bed bugs, cockroaches, rodents, ants, lizards, spiders or mosquitoes,
//           we help you in dealing pests at your home and bring back your smile.
//         </p>
//         <p className="mt-3 text-lg">
//           A home is where you dwell with your loved ones. It is very important
//           to keep your family and home protected against unwanted pest problem
//           to lead a healthy and peaceful living. At Orion, we have the best team
//           in place to identify your pest problem and provide necessary
//           recommendations and solutions. We are the most trusted home pest
//           control service provider in the region.
//         </p>
//         <p className="mt-3 text-lg">
//           A home is where you dwell with your loved ones. It is very important
//           to keep your family and home protected against unwanted pest problem
//           to lead a healthy and peaceful living. At Orion, we have the best team
//           in place to identify your pest problem and provide necessary
//           recommendations and solutions. We are the most trusted home pest
//           control service provider in the region.
//         </p>
//         <p className="mt-3 text-lg font-bold">Why Choose Us?</p>
//         <ul className="list-disc ml-3 mt-3">
//             {whyChooseUs.map((item, index)=>
//             <li key={index} className="text-lg">{item}</li>
//             )}
//         </ul>
//       </div>
//       </PageData>
//     </div>
//   );
// }

















// Debkanta Added This 

// import Image from "next/image";
// import {
//   ShieldCheck,
//   Phone,
//   MapPin,
//   CalendarDays,
//   Mail,
//   Shield,
//   Leaf,
//   House,
// } from "lucide-react";
// import TestimonialsSection from "@/components/services/ui/Testimonials";
// import FAQSection from "@/components/ui/FAQ";
// import Form from "@/components/ui/Form";
// import { getPageData } from "@/lib/getPageData";
// import HeroSection from "@/components/services/HeroSection";
// import SupportCard from "@/components/services/ui/SupportCard";
// import ContactInfo from "@/components/services/ui/ContactInfo";
// import AdvanceControl from "@/components/services/AdvanceControl";
// import CompleteProtection from "@/components/services/CompleteProtection";
// import Diagram from "@/components/services/Diagram";
// import BrandSection from "@/components/services/BrandSection";
// import ChildSafeSection from "@/components/services/ChildSafeSection";

// export async function generateMetadata() {
//   const page = await getPageData("residential-control");
//   return {
//     title: page?.metaTitle || "Residential Control",
//     description: page?.metaDescription || "",
//   };
// }

// const list1 = [
//   "Pre-Construction Treatment",
//   "Post-Construction Treatment",
//   "Wood Protection Solutions",
//   "Soil & Foundation Treatment",
// ];

// const list2 = [
//   "Detailed Property Inspection",
//   "Customized Treatment Plan",
//   "Advanced Anti-Residential Solutions",
//   "Long-Term Monitoring & Warranty",
// ];

// const leftFeature = [
//   {
//     heading: "Target Hidden Colonies",
//     desc: "Advanced detection identifies residential activity before major structural damage occurs.",
//   },
//   {
//     heading: "Prevent Future Damage",
//     desc: "Protect your investment with long-lasting residential prevention treatments.",
//   },
// ];

// const rightFeature = [
//   {
//     heading: "Safe & Eco-Friendly",
//     desc: "Environmentally responsible solutions that are safe for families and pets.",
//   },
//   {
//     heading: "Long-Lasting Protection",
//     desc: "Professional-grade treatments with extended protection against re-infestation.",
//   },
// ];

// const cards = [
//   {
//     heading: "Comprehensive Residential Protection",
//     desc: "Complete structural protection with advanced anti-ant technology.",
//     image: "/Images/services/ant2.png",
//     bgColor: "#FFF6DE",
//   },
//   {
//     heading: "Expert Inspection & Treatment",
//     desc: "Professional inspection followed by customized treatment solutions.",
//     image: "/Images/icon/vector2.png",
//     bgColor: "#EEF4FF",
//   },
//   {
//     heading: "Long-Term Structural Safety",
//     desc: "Protect your property from costly residential damage with preventive care.",
//     image: "/Images/icon/vector3.png",
//     bgColor: "#FFF1F2",
//   },
// ];

// const childSafeStats = [
//   {
//     title: "Non-Toxic Solutions",
//     desc: "Safe treatment methods for indoor environments.",
//     bgColor: "#DEE9FC",
//     color: "#2F3293",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Deep Foundation Protection",
//     desc: "Stops ants at the source.",
//     bgColor: "#DEE9FC",
//     color: "#2F3293",
//     icon: Shield,
//   },
//   {
//     title: "Long-Lasting Results",
//     desc: "Extended protection against future infestations.",
//     bgColor: "#DEE9FC",
//     color: "#2F3293",
//     icon: Leaf,
//   },
//   {
//     title: "Trusted Since 1998",
//     desc: "India's trusted residential specialists.",
//     bgColor: "#DEE9FC",
//     color: "#2F3293",
//     icon: House,
//   },
// ];

// const faqs = [
//   {
//     id: "01",
//     question: "How do I know if my home has ants?",
//     answer:
//       "Common signs include mud tubes, hollow-sounding wood, discarded wings, damaged wooden furniture, and unexplained cracks. Schedule a professional inspection for confirmation.",
//   },
//   {
//     id: "02",
//     question: "How long does residential treatment take?",
//     answer:
//       "Most residential residential treatments are completed within a few hours, depending on the size of the property and the severity of infestation.",
//   },
//   {
//     id: "03",
//     question: "Is residential treatment safe for children and pets?",
//     answer:
//       "Yes. Orion uses government-approved residential treatment solutions that are safe when applied by certified professionals.",
//   },
//   {
//     id: "04",
//     question: "How long does residential protection last?",
//     answer:
//       "Our treatments provide long-term protection, and preventive maintenance can significantly extend effectiveness.",
//   },
//   {
//     id: "05",
//     question: "Do you provide residential warranties?",
//     answer:
//       "Yes. Selected residential treatment plans include service warranties for additional peace of mind.",
//   },
//   {
//     id: "06",
//     question: "How much does residential treatment cost?",
//     answer:
//       "The cost depends on property size, infestation level, and treatment type. Contact us for a free site inspection and personalized quotation.",
//   },
// ];

// export default function page() {
//   return (
//     <div className="w-full">
//       {/* Hero Section */}

//       <HeroSection
//         image="/Images/services/residential.png"
//         topbadge="ANT PEST CONTROL SERVICES"
//         heading={
//           <>
//             <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
//               Say Goodbye to Pests With 
//               <br />
//               <span className="text-[#1095D9]">Residential Pest Control</span>
//             </h1>
//           </>
//         }
//         subHeading="Safe. Effective. Long-Lasting Protection."
//         desc="Protect your home from hidden residential damage with Orion Pest Control. Our advanced residential treatment solutions eliminate active infestations and provide long-lasting protection for homes, offices, and commercial properties. Safe, effective, and trusted since 1970."
//         stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
//         imageStyle="absolute w-[88%] h-[88%] top-10 left-0 z-[10px] rounded-full"
//       />
//       {/* Advanced Control Section */}
//       <AdvanceControl
//         image="/Images/services/ant5.png"
//         heading={
//           <>
//             <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
//               Advanced Residential Control for
//               <span className="text-[#1095D9]"> Homes & Businesses</span>
//             </h2>
//           </>
//         }
//         desc="Birds silently weaken wooden structures before visible damage appears. Our experienced technicians use modern detection methods and proven treatment techniques to eliminate ants from the source while preventing future infestations."
//         list={list1}
//       />

//       {/* Complete Protection Section */}
//       <CompleteProtection
//       heading={
//           <>
//             <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
//               Complete Protection for
//               <span className="text-[#1095D9]"> Every Corner</span>
//             </h2>
//           </>
//         }
//         desc="Our comprehensive residential control process protects every vulnerable area of your property, ensuring complete structural safety and long-lasting defense against ants."
//         list={list2}
//         image="/Images/services/home.png"
//       />

//       {/* Diagram Features Info Section */}
//       <Diagram
//         topbadge="COMPLETE STRUCTURAL PROTECTION"
//         heading={
//           <>
//           <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
//             Complete Residential Control
//             <br />
//             <span className="text-[#0094DA]">at Every Place.</span>
//           </h2>
//           </>
//         }
//         desc="Whether it's a home, office, warehouse, hotel, or commercial building, our specialized residential treatment keeps every property protected against hidden residential attacks."
//         leftFeature={leftFeature}
//         rightFeature={rightFeature}
//       />

//       {/* Brand Logos / Cards Grid Section */}
//       <BrandSection heading={
//         <>
//         <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
//               Preferred by{" "}
//               <span className="text-[#0094DA]">Homes & Businesses</span> Across
//               India
//             </h2>
//         </>
//       } cards={cards} />

//       {/* Testimonials Section Component */}
//       <TestimonialsSection
//         heading={
//           <>
//           <h2 className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
//             Trusted by Thousands.
//             <br />
//             <span className="text-[#0094DA]">Residential Free,</span>{" "}
//             <span className="text-[#2F3293]">Every Time.</span>
//           </h2>
//           </>
//         }
//         desc="See why homeowners, businesses, and builders trust Orion Pest Control for dependable residential protection and exceptional service."
//       />

//       {/* Child Safe Environment Highlight Grid */}
//       <ChildSafeSection
//         image1="/Images/services/residential1.png"
//         image2="/Images/services/ant4.png"
//         name="Residential"
//         tagline="Safe for your little ones. Tough on ants."
//         desc={
//           <>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 mt-4">
//               Our eco-friendly residential treatments provide maximum protection while remaining safe for your children, pets, and the environment. Enjoy complete peace of mind without compromising your family's safety.
//             </p>
//             <br />
//           </>
//         }
//         childSafeStats={childSafeStats}
//       />

//       {/* FAQ Accordion Grid Framework Group Section Wrapper */}
//       <section className="bg-[#FCFCFD] pb-16 md:pb-20">
//         <FAQSection image="/Images/services/cockroach3.png" faqs={faqs} />
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl border border-slate-100 bg-[#F9FAFE] p-6 sm:p-8 shadow-lg max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto">
//           <SupportCard
//             icon={<Phone size={26} />}
//             title="Need Immediate Assistance?"
//             text="Call us now for quick support"
//             highlight="1800 212 696969"
//           />
//           <SupportCard
//             icon={<CalendarDays size={26} />}
//             title="Schedule an Inspection"
//             text="Book a professional inspection"
//             highlight="At your convenience"
//           />
//           <SupportCard
//             icon={<ShieldCheck size={26} />}
//             title="Safe. Effective. Reliable."
//             text="Trusted by thousands of homes"
//             highlight="Across India"
//           />
//         </div>
//       </section>

//       {/* Interactive Contact Form Matrix Content Group Grid Footer Element */}
//       <section
//         className="relative overflow-hidden bg-[#FEFEFE] py-10 md:py-24"
//         style={{
//           background: "url('/Images/CTA_background.webp')",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 w-full relative z-[2]">
//           <div className="grid gap-12 lg:grid-cols-2 items-start">
//             {/* LEFT SIDE CONTENT SECTION */}
//             <div>
//               <p className="font-semibold uppercase tracking-widest text-smsm:text-base">
//                 <span className="text-blue-600">Get In</span>{" "}
//                 <span className="text-yellow-500">Touch</span>
//               </p>

//               <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#2F3293]">
//                 We're Here to
//                 <br />
//                 <span className="text-[#0095DA]">Help You Stay</span>
//                 <br />
//                 <span className="text-[#2F3293]">Residential-Free.</span>
//               </h2>

//               <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
//                 Protect your property before ants cause costly structural
//                 damage. Book a professional residential inspection with our
//                 certified experts today.
//               </p>

//               {/* Contact Info Row Components Column Base List Block */}
//               <div className="mt-10 space-y-6 sm:space-y-8">
//                 <ContactInfo
//                   icon={<Phone size={24} />}
//                   title="CALL US"
//                   link="1800 419 8181"
//                   value="1800 419 8181"
//                   bg="bg-yellow-400"
//                 />
//                 <ContactInfo
//                   icon={<Mail size={24} />}
//                   title="EMAIL US"
//                   link="sales@orionpest.com"
//                   value="sales@orionpest.com"
//                   bg="bg-yellow-400"
//                 />
//                 <ContactInfo
//                   icon={<MapPin size={24} />}
//                   title="OUR HEAD OFFICE"
//                   value="200W,S P Mukherjee Road, Road, beside Bank of Baroda, Tollygunge, Kolkata, West Bengal 700026"
//                   bg="bg-yellow-400"
//                 />
//               </div>
//             </div>

//             {/* RIGHT SIDE FORM COMPONENT BLOCK */}
//             <div className="w-full">
//               <Form />
//             </div>
//           </div>
//         </div>
//         {/* Bottom Decorative Circle Vector Element Shape Component Mock Container */}
//         <div className="absolute -bottom-12 -left-32 hidden xl:block overflow-hidden">
//           <div
//             className="relative overflow-hidden border-4 border-yellow-400 w-[450px] h-[230px] rounded-t-full"
//             style={{
//               background: "url('/Images/bugs/bg.png')",
//               backgroundSize: "cover",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             <div className="absolute left-32 top-5 w-52 h-52">
//               <Image
//                 src="/Images/services/ant.png"
//                 alt="Cockroach"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





















// Asad Added This 

import Image from "next/image";
import Link from "next/link";
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
  const page = await getPageData("residential-control");
  return {
    title: page?.metaTitle || "Residential Pest Control Services Near You | Safe Home Pest Solutions",
    description: page?.metaDescription || "Protect your home with reliable residential pest control services near you. Orion Pest provides safe, effective treatments for all common household pests.",
  };
}

const list1 = [
  "Comprehensive Home Inspection",
  "Targeted Eradication Techniques",
  "Odorless & Child-Safe Treatments",
  "Year-Round Preventive Protection",
];

const list2 = [
  "Detailed Property Assessment",
  "Customized Treatment Plan",
  "Eco-Friendly Extermination",
  "Long-Term Monitoring & Warranty",
];

const leftFeature = [
  {
    heading: "Identify Hidden Infestations",
    desc: "Advanced detection tools locate pest activity inside walls, crevices, and foundations before major structural damage occurs.",
  },
  {
    heading: "Prevent Future Damage",
    desc: "Protect your family's health and your home's structural integrity with long-lasting pest prevention treatments.",
  },
];

const rightFeature = [
  {
    heading: "Safe & Eco-Friendly",
    desc: "Environmentally responsible pest control formulations that are completely safe for your children and pets.",
  },
  {
    heading: "Long-Lasting Protection",
    desc: "Professional-grade treatments that create a durable barrier against recurring pest infestations.",
  },
];

const cards = [
  {
    heading: "Kitchens & Dining Areas",
    desc: "Safe, odorless treatments to eliminate cockroaches and ants without contaminating food storage.",
    image: "/Images/services/flies5.png",
    bgColor: "#FFF6DE",
  },
  {
    heading: "Bedrooms & Living Spaces",
    desc: "Discreet and highly effective pest control ensuring a hygienic, comfortable environment for your family.",
    image: "/Images/icon/vector2.png",
    bgColor: "#EEF4FF",
  },
  {
    heading: "Exteriors & Foundations",
    desc: "Protect your property from termites, rodents, and mosquitoes before they enter your home.",
    image: "/Images/icon/vector3.png",
    bgColor: "#FFF1F2",
  },
];

const childSafeStats = [
  {
    title: "100% Non-Toxic",
    desc: "Safe treatment methods designed specifically for indoor home environments.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: ShieldCheck,
  },
  {
    title: "Odorless & Fume-Free",
    desc: "No lingering smells or need to vacate your home for days.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Shield,
  },
  {
    title: "Long-Lasting Defense",
    desc: "Extended protection against common household bugs and rodents.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Leaf,
  },
  {
    title: "27+ Years of Trust",
    desc: "Serving 1 Lakh+ homes and 5K+ businesses since 1998.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: House,
  },
];

const faqs = [
  {
    id: "01",
    question: "How do I know if my home needs pest control?",
    answer:
      "Common signs include unexplained property damage, droppings, unusual odors, hollow-sounding wood, and spotting live insects. A professional inspection confirms the extent of the issue.",
  },
  {
    id: "02",
    question: "How long does a residential treatment take?",
    answer:
      "Most residential pest control treatments are seamlessly completed within 1 to 3 hours, depending on the size of your property and the severity of the infestation.",
  },
  {
    id: "03",
    question: "Is the treatment safe for my children and pets?",
    answer:
      "Absolutely. Orion Pest Control uses government-approved, eco-friendly formulations that are strictly applied by certified professionals to ensure your family's safety.",
  },
  {
    id: "04",
    question: "Do I need to leave my home during the treatment?",
    answer:
      "For most standard treatments, you do not need to vacate. However, our technicians will advise you on specific precautions depending on the treatment plan selected.",
  },
  {
    id: "05",
    question: "Do you offer warranties for your services?",
    answer:
      "Yes. Our comprehensive Residential pest control services come with dedicated service warranties to provide you with absolute peace of mind.",
  },
  {
    id: "06",
    question: "How much does residential pest control cost?",
    answer:
      "The cost depends on the size of your home and the type of pests being treated. Contact us today for a free site inspection and personalized quotation.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/residential.png"
        topbadge="EXPERT HOME PEST CONTROL"
        heading={
          <>
            {/* H1 #1 (The Only H1) */}
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Protect Your Home With 
              <br />
              <span className="text-[#1095D9]">Residential Pest Control</span>
            </h1>
          </>
        }
        subHeading="Safe. Effective. Long-Lasting Protection."
        desc={
          <>
            Keep your home and family safe from unwanted pests with Orion Pest Control. As a highly trusted{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              Pest control company in India
            </Link>
            , our top-tier Residential pest control services eliminate active infestations and prevent them from coming back. Established in 1998, we bring 27+ years of expertise to protect your living spaces.
          </>
        }
        stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
        imageStyle="absolute w-[88%] h-[88%] top-10 left-0 z-[10px] rounded-full"
      />

      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/bedbug2.png"
        heading={
          <>
            {/* H2 #1 */}
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Residential Pest Control for
              <span className="text-[#1095D9]"> Your Home</span>
            </h2>
          </>
        }
        desc={
          <>
            Pests like cockroaches, termites, and rodents silently damage your home and threaten your family's health. Our certified technicians use modern{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              Pest control solutions
            </Link>{" "}
            and proven integrated pest management techniques to eliminate pests from the source while keeping your indoor environment perfectly safe.
          </>
        }
        list={list1}
      />

      {/* Complete Protection Section */}
      <CompleteProtection
        heading={
          <>
            {/* H3 #1 */}
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Complete Protection for
              <span className="text-[#1095D9]"> Every Room</span>
            </h3>
          </>
        }
        desc={
          <>
            Our comprehensive{" "}
            <Link href="https://www.orionpest.com/residential-pest-control/" className="text-blue-600 hover:underline font-semibold">
              Residential pest control services
            </Link>{" "}
            protect every vulnerable area of your property, ensuring structural safety and a hygienic living space. We provide targeted treatments for kitchens, bedrooms, and exteriors.
          </>
        }
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="TOTAL HOME DEFENSE"
        heading={
          <>
            {/* H3 #2 */}
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
              Total Pest Management
              <br />
              <span className="text-[#0094DA]">for Your Home.</span>
            </h3>
          </>
        }
        desc={
          <>
            Whether it's an apartment, villa, or independent house, our specialized treatments keep your property protected. Looking for reliable nationwide coverage or dedicated{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              Pest Control Services Kolkata
            </Link>
            ? We deliver safe, family-friendly results.
          </>
        }
        leftFeature={leftFeature}
        rightFeature={rightFeature}
      />

      {/* Brand Logos / Cards Grid Section */}
      <BrandSection
        heading={
          <>
            {/* H3 #3 */}
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
              Preferred by{" "}
              <span className="text-[#0094DA]">Families & Homeowners</span> Across India
            </h3>
          </>
        }
        cards={cards}
      />

      {/* Testimonials Section Component */}
      <TestimonialsSection
        heading={
          <>
            {/* H3 #4 */}
            <h3 className="mt-4 text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
              Trusted by Thousands.
              <br />
              <span className="text-[#0094DA]">Pest-Free Homes,</span>{" "}
              <span className="text-[#2F3293]">Every Time.</span>
            </h3>
          </>
        }
        desc="See why thousands of homeowners, renters, and property managers trust Orion Pest Control for dependable residential protection and exceptional service."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/home.png"
        image2="/Images/services/ant4.png"
        name="Residential"
        tagline="Safe for your family. Tough on pests."
        desc={
          <>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 mt-4">
              Our eco-friendly Residential pest control services provide maximum protection while remaining completely safe for your children, pets, and the environment. Backed by 27+ years of expertise, enjoy total peace of mind without compromising your family's health.
            </p>
            <br />
          </>
        }
        childSafeStats={childSafeStats}
      />

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-10">
        <FAQSection image="/Images/services/cockroach3.png" faqs={faqs} />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl border border-slate-100 bg-[#F9FAFE] p-6 sm:p-8 shadow-lg max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto mt-10">
          <SupportCard
            icon={<Phone size={26} />}
            title="Need Immediate Assistance?"
            text="Call us now for quick support"
            highlight="1800 419 8181"
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
        className="relative overflow-hidden bg-[#FEFEFE] py-10 md:py-24"
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

              {/* H2 #2 */}
              <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#2F3293]">
                We're Here to
                <br />
                <span className="text-[#0095DA]">Help You Stay</span>
                <br />
                <span className="text-[#2F3293]">Pest-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your property before pests cause costly structural damage or health issues. Book professional Residential pest control services with our certified experts today.
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
                  value="200W, S P Mukherjee Road, beside Bank of Baroda, Tollygunge, Kolkata, West Bengal 700026"
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
                src="/Images/services/rodent.png"
                alt="Residential Pest Control Services"
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
