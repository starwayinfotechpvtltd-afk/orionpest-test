// import React from "react";
// import Image from "next/image";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("mosquito-control");
//   return {
//     title: page?.metaTitle || "Mosquito Control",
//     description: page?.metaDescription || "",
//   };
// }


// export default function MosquitoControlPage() {
//   return (
//     <div className="w-full">
//       {/* Responsive container */}
//       <PageData segment={"mosquito-control"}>
//       <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
//         {/* Headings */}
//         <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
//           Mosquito Control Services
//         </h2>
//         <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
//           Say Goodbye to Mosquito Infestations
//         </h3>

//         {/* Intro: stacks on mobile, side-by-side on large */}
//         <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
//           <div className="w-full lg:w-1/2">
//             <p className="text-lg leading-relaxed">
//               Mosquitoes are more than just a nuisance; they are a significant
//               health threat. These blood-sucking insects are notorious for
//               carrying and transmitting serious diseases such as Dengue Fever,
//               Malaria, Zika Virus, and West Nile Virus. They breed rapidly in
//               stagnant water and can turn a pleasant outdoor space into a
//               dangerous one. Our Mosquito Control Service offers a comprehensive
//               and multi-faceted approach to reduce mosquito populations and
//               protect your family.
//             </p>
//           </div>

//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//             <Image
//               src="/Images/bugs/mosquito1.png"
//               alt="mosquito"
//               width={300}
//               height={300}
//               className="w-40 md:w-56 lg:w-64 h-auto"
//             />
//           </div>
//         </div>

//         {/* Why important - becomes 2 columns on large screens */}
//         <section className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Why Mosquito Control is Important?
//           </h3>

//           <ul className="list-disc ml-5 md:ml-8 mt-4 flex flex-col gap-2 text-lg">
//             <li>
//               <span className="font-bold">Prevent Disease Transmission:</span>{" "}
//               Mosquitoes are vectors for some of the world's deadliest diseases,
//               posing a direct threat to public health.
//             </li>
//             <li>
//               <span className="font-bold">Enhance Quality of Life:</span> By
//               eliminating mosquitoes, we help you reclaim your outdoor spaces,
//               allowing you to enjoy your yard, patio, and garden without
//               constant irritation from bites.
//             </li>
//             <li>
//               <span className="font-bold">Stop Rapid Breeding:</span> A single
//               container of stagnant water can breed hundreds of mosquitoes in
//               just a few days. Professional control is essential to break their
//               life cycle.
//             </li>
//             <li>
//               <span className="font-bold">Protect Your Pets:</span> Mosquitoes
//               can also transmit heartworm to dogs and cats, a potentially fatal
//               disease.
//             </li>
//           </ul>
//         </section>

//         {/* Two images — stacked on small screens, side-by-side on md+ */}
//         <div className="flex items-center justify-center gap-6 mt-6">
//           <Image
//             src="/Images/bugs/mosquito2.svg"
//             alt="mosquito"
//             width={360}
//             height={100}
//             className="w-40 md:w-56 lg:w-72 h-auto"
//           />
//           <Image
//             src="/Images/bugs/mosquito3.svg"
//             alt="mosquito"
//             width={360}
//             height={100}
//             className="w-40 md:w-56 lg:w-72 h-auto"
//           />
//         </div>

//         {/* Approach */}
//         <section className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Our Approach
//           </h3>
//           <p className="font-bold text-lg mt-2">
//             We follow a strategic and scientific process to manage mosquito
//             populations effectively:
//           </p>

//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Inspection:</span> Our experts will
//               conduct a thorough inspection of your property to identify all
//               potential mosquito breeding sites, such as standing water in
//               flowerpots, gutters, ponds, and other containers.
//             </li>
//             <li>
//               <span className="font-bold">Larval Control:</span> We target
//               mosquitoes at their source by applying eco-friendly larvicides to
//               stagnant water sources, preventing mosquito larvae from developing
//               into biting adults.
//             </li>
//             <li>
//               <span className="font-bold">Adult Mosquito Treatment:</span> We
//               apply targeted treatments to areas where adult mosquitoes rest,
//               such as shrubs, trees, tall grasses, and other vegetation. This
//               includes misting and barrier spray applications.
//             </li>
//             <li>
//               <span className="font-bold">Prevention & Education:</span> We
//               provide you with crucial information on how to eliminate breeding
//               sites around your home and educate you on proactive steps to keep
//               mosquitoes at bay.
//             </li>
//           </ul>
//         </section>

//         {/* Pros - 2 columns on large screens */}
//         <section className="mt-8 mb-12">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Pros
//           </h3>

//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
//             <li>
//               <span className="font-bold">Highly Effective:</span> Our
//               multi-pronged approach targets mosquitoes at every stage of their
//               life cycle for maximum control.
//             </li>
//             <li>
//               <span className="font-bold">Customized to Your Property:</span> We
//               tailor our treatment plans to your specific needs and the unique
//               landscape of your property.
//             </li>
//             <li>
//               <span className="font-bold">Safe for Your Environment:</span> We
//               use professional-grade products that are effective against
//               mosquitoes but designed to be safe for your family, pets, and
//               beneficial insects like bees.
//             </li>
//             <li>
//               <span className="font-bold">Long-Lasting Results:</span> Our
//               barrier treatments provide continuous protection, allowing you to
//               enjoy your outdoor spaces with peace of mind.
//             </li>
//           </ul>
//         </section>
//       </div>

//       {/* Yellow section — responsive widths and smaller padding on mobile */}
//       <div className="w-full mt-12 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-60">
//         <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-8">
//           <h2 className="text-[#2F3293] text-2xl md:text-4xl lg:text-5xl text-center font-bold">
//             Why Choose Orion for Mosquito Control?
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
  const page = await getPageData("mosquito-control");
  return {
    title: page?.metaTitle || "Mosquito Control",
    description: page?.metaDescription || "",
  };
}

const list1 = [
  "Indoor & Outdoor Treatment",
  "Breeding Source Elimination",
  "Fogging & Larvicidal Solutions",
  "Long-Term Mosquito Prevention",
];

const list2 = [
  "Detailed Property Inspection",
  "Customized Mosquito Treatment",
  "Advanced Fogging & Spraying",
  "Preventive Monitoring & Protection",
];

const leftFeature = [
  {
    heading: "Target Mosquito Breeding",
    desc: "Identify and eliminate mosquito breeding grounds before infestations spread throughout your property.",
  },
  {
    heading: "Prevent Future Infestations",
    desc: "Reduce mosquito populations with long-lasting treatments and effective preventive solutions.",
  },
];

const rightFeature = [
  {
    heading: "Safe & Eco-Friendly",
    desc: "Family-friendly mosquito control solutions designed for indoor and outdoor environments.",
  },
  {
    heading: "Long-Lasting Protection",
    desc: "Professional treatments that provide extended defense against mosquitoes and breeding cycles.",
  },
];

const cards = [
  {
    heading: "Complete Mosquito Protection",
    desc: "Professional mosquito treatment for healthier indoor and outdoor living spaces.",
    image: "/Images/services/mosquito4.png",
    bgColor: "#FFF6DE",
  },
  {
    heading: "Expert Inspection & Treatment",
    desc: "Detailed inspection followed by customized mosquito control solutions.",
    image: "/Images/icon/vector2.png",
    bgColor: "#EEF4FF",
  },
  {
    heading: "Long-Lasting Mosquito Prevention",
    desc: "Prevent mosquito breeding with advanced monitoring and professional treatment.",
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
    title: "Stops Mosquito Breeding",
    desc: "Eliminates breeding sources before they become a problem.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Shield
  },
  {
    title: "Long-Lasting Results",
    desc: "Extended mosquito protection throughout the season.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Leaf
  },
  {
    title: "Trusted Since 1998",
    desc: "India's trusted mosquito control specialists.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: House
  },
];

const faqs = [
  {
    id: "01",
    question: "How do I reduce mosquitoes around my home?",
    answer:
      "Remove stagnant water, clean drains regularly, maintain gardens, and schedule professional mosquito treatment for complete protection.",
  },
  {
    id: "02",
    question: "How long does mosquito treatment take?",
    answer:
      "Most mosquito control treatments are completed within a few hours, depending on the size of the property and treatment area.",
  },
  {
    id: "03",
    question: "Is mosquito treatment safe for children and pets?",
    answer:
      "Yes. Orion Pest Control uses government-approved products that are professionally applied and safe for families and pets.",
  },
  {
    id: "04",
    question: "Do you provide mosquito fogging services?",
    answer:
      "Yes. We offer fogging, spraying, larvicidal treatment, and customized mosquito management solutions for residential and commercial properties.",
  },
  {
    id: "05",
    question: "How much does mosquito control cost?",
    answer:
      "Pricing depends on your property size, mosquito activity, and treatment requirements. Contact us today for a free inspection and customized quotation.",
  },
  {
    id: "06",
    question: "How long does mosquito protection last?",
    answer:
      "Treatment effectiveness depends on environmental conditions, but our professional solutions provide long-lasting mosquito control with regular maintenance.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/mosquito.png"
        topbadge="TERMITE PEST CONTROL SERVICES"
        heading={
          <>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Say Goodbye to
              <br />
              <span className="text-[#1095D9]">Mosquitoes</span>
            </h1>
          </>
        }
        subHeading="Safe. Effective. Long-Lasting Protection."
        desc="Protect your family from mosquitoes and mosquito-borne diseases with Orion Pest Control's professional mosquito control services. Our advanced mosquito treatment solutions eliminate breeding sources, reduce mosquito populations, and provide long-lasting protection for homes, gardens, offices, and commercial properties."
        stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
        imageStyle="absolute w-[105%] h-[105%] -top-[16%] -left-[20%] sm:-left-[32%] z-[10px]"
      />
      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/mosquito2.png"
        heading={
          <>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Mosquito Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc="Mosquitoes breed quickly in stagnant water and hidden outdoor areas, increasing the risk of diseases like dengue, malaria, and chikungunya. Our certified professionals use advanced inspection and treatment methods to eliminate mosquitoes and prevent future breeding."
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
        desc="Our comprehensive mosquito control program targets breeding sites, resting areas, and outdoor spaces to provide complete protection for your family and property."
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="COMPLETE MOSQUITO PROTECTION"
        heading={
          <>
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
            Complete Mozquito Control
            <br />
            <span className="text-[#0094DA]">at Every Place.</span>
          </h2>
          </>
        }
        desc="From residential homes to offices, hospitals, hotels, restaurants, schools, and commercial spaces, our mosquito control solutions keep every environment safer and healthier."
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
            <span className="text-[#0094DA]">Mosquito Control,</span>{" "}
            <span className="text-[#2F3293]">Every Time.</span>
          </h2>
          </>
        }
        desc="See why thousands of families and businesses choose Orion Pest Control for safe, effective, and long-lasting mosquito control services."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/mosquito3.png"
        image2="/Images/services/mosquito5.png"
        name="Mosquito"
        tagline="Child Safe Mosquito Control, Complete Peace of Mind."
        desc="Our environmentally responsible mosquito treatments help protect your family from mosquito bites while remaining safe for children, pets, and everyday living."
        childSafeStats={childSafeStats}
      />

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/services/mosquito2.png" faqs={faqs}/>
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
                <span className="text-[#2F3293]">Mosquito-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your family from mosquito bites and mosquito-borne diseases with professional mosquito control services from Orion Pest Control.
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
                src="/Images/services/mosquito2.png"
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
