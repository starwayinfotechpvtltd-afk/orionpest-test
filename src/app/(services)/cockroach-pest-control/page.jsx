// import React from "react";
// import Image from "next/image";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("cockroach-control");
//   return {
//     title: page?.metaTitle || "Cockroach Control",
//     description: page?.metaDescription || "",
//   };
// }

// export default function Page() {
//   return (
//     <div className="w-full">
//       <PageData segment={"cockroach-control"}>
//       <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
//         {/* Title */}
//         <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
//           Cockroach Control Services
//         </h2>
//         <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
//           Say Goodbye to Cockroach Infestations
//         </h3>

//         {/* Intro Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-center mt-6 gap-6">
//           <p className="w-full lg:w-1/2 text-lg leading-relaxed">
//             Cockroaches are one of the most common and persistent household
//             pests. Known for contaminating food, spreading harmful bacteria, and
//             triggering allergies, they breed rapidly and are experts at hiding
//             in cracks and crevices. A small problem can quickly escalate into a
//             full-blown infestation without professional intervention. Our
//             Cockroach Control Service provides a fast, safe, and effective
//             solution for long-lasting relief.
//           </p>
//           <Image
//             src="/Images/bugs/cockroach1.svg"
//             alt="cockroach"
//             height={300}
//             width={300}
//             className="w-48 md:w-60 lg:w-72 h-auto"
//           />
//         </div>

//         {/* Why Control is Important */}
//         <div className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Why Cockroach Control is Important
//           </h3>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 space-y-3 text-lg">
//             <li>
//               <span className="font-bold">Spread of Diseases:</span> Cockroaches
//               are known carriers of harmful bacteria such as E. coli and
//               Salmonella, which can cause food poisoning and other illnesses.
//             </li>
//             <li>
//               <span className="font-bold">Allergen and Asthma Triggers:</span>{" "}
//               Their droppings and shed skin can trigger allergic reactions and
//               asthma attacks, especially in children and individuals with
//               respiratory issues.
//             </li>
//             <li>
//               <span className="font-bold">Contamination:</span> They contaminate
//               food, utensils, and food preparation surfaces, posing a
//               significant health risk.
//             </li>
//             <li>
//               <span className="font-bold">Rapid Reproduction:</span> Cockroaches
//               reproduce at an alarming rate, turning a minor sighting into a
//               severe infestation in a matter of weeks.
//             </li>
//           </ul>
//         </div>

//         {/* Images Section */}
//         <div className="flex flex-row items-center justify-center gap-6 mt-6">
//           <Image
//             src="/Images/bugs/cockroach2.png"
//             height={200}
//             width={200}
//             alt="cockroach"
//             className="w-32 md:w-44 lg:w-52 h-auto"
//           />
//           <Image
//             src="/Images/bugs/cockroach3.png"
//             height={300}
//             width={300}
//             alt="cockroach"
//             className="w-40 md:w-56 lg:w-72 h-auto"
//           />
//         </div>

//         {/* Approach */}
//         <div className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Our Approach
//           </h3>
//           <p className="font-bold text-lg mt-2">
//             We follow a systematic and scientific approach to effectively
//             eliminate cockroaches from your property:
//           </p>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Inspection:</span> Our trained
//               specialists conduct a thorough inspection to identify the species
//               of cockroach, the extent of the infestation, and locate their
//               primary hiding spots and breeding sources.
//             </li>
//             <li>
//               <span className="font-bold">Targeted Treatment:</span> We use a
//               combination of advanced treatments, including eco-friendly gel
//               baits placed in targeted, hard-to-reach areas and odorless sprays
//               in hidden corners and crevices where cockroaches hide.
//             </li>
//             <li>
//               <span className="font-bold">Crack & Crevice Treatment:</span> We
//               seal and treat all potential entry points and hiding spaces to
//               prevent cockroaches from re-establishing themselves.
//             </li>
//             <li>
//               <span className="font-bold">Monitoring & Prevention:</span> We
//               provide you with valuable advice on sanitation practices and other
//               preventative measures. Follow-up visits are scheduled as needed to
//               ensure complete eradication and long-term protection.
//             </li>
//           </ul>
//         </div>

//         {/* Pros */}
//         <div className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Pros
//           </h3>
//           <p className="font-bold text-lg mt-2">
//             We follow a systematic and scientific approach to effectively
//             eliminate cockroaches from your property:
//           </p>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Long-Lasting Protection:</span> Our
//               combination of gel and spray treatments provides a durable barrier
//               against future infestations.
//             </li>
//             <li>
//               <span className="font-bold">Safe for Your Family:</span> We use
//               professional-grade products that are safe for your family, pets,
//               and the environment when applied correctly.
//             </li>
//             <li>
//               <span className="font-bold">Clean and Hassle-Free:</span> Our
//               treatments are odorless, stain-free, and designed to cause minimal
//               disruption to your daily routine.
//             </li>
//             <li>
//               <span className="font-bold">Effective for All Properties:</span>{" "}
//               Our services are tailored to be effective for both residential and
//               commercial spaces, from apartments to restaurants.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Yellow section */}
//       <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80">
//         <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
//           <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-10">
//             Why Choose Orion for Cockroach Control?
//           </h2>
//           <ul className="list-disc ml-5 md:ml-8 mt-6 space-y-3 text-lg">
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
import { ShieldCheck, Phone, MapPin, CalendarDays, Mail } from "lucide-react";
import TestimonialsSection from "@/components/ui/Testimonials";
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
  const page = await getPageData("cockroach-control");
  return {
    title: page?.metaTitle || "Cockroach Control",
    description: page?.metaDescription || "",
  };
}

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection image="/Images/bugs/cockroach6.png"/>
      {/* Advanced Control Section */}
      <AdvanceControl image="/Images/bugs/cockroach7.png"/>

      {/* Complete Protection Section */}
      <CompleteProtection />

      {/* Diagram Features Info Section */}
      <Diagram />

      {/* Brand Logos / Cards Grid Section */}
      <BrandSection image="/Images/icon/vector1.png"/>

      {/* Testimonials Section Component */}
      <TestimonialsSection />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection image="/Images/children.png"/>

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/bugs/cockroach8.png"/>
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
                <span className="text-[#2F3293]">Cockroach-Free.</span>
              </h2>

              <p className="mt-4 max-w-md text-base sm:text-lg leading-relaxed text-gray-600">
                Have questions or need a service? Fill out the form and our
                expert team will get back to you shortly.
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
                src="/Images/bugs/cockroach9.png"
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
