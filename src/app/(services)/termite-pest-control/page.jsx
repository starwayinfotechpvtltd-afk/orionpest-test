// import React from "react";
// import Image from "next/image";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("termite-control");
//   return {
//     title: page?.metaTitle || "Termite Control",
//     description: page?.metaDescription || "",
//   };
// }


// export default function Page() {
//   return (
//     <div className="w-full">
//       <PageData segment={"termite-control"}>
//         <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto relative">
//           {/* Title */}
//           <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
//             Termite Control Services
//           </h2>
//           <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
//             Say Goodbye to Termite Infestations
//           </h3>

//           {/* Intro Section */}
//           <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-6">
//             <p className="w-full lg:w-1/2 text-lg leading-relaxed">
//               Termites, often called "silent destroyers," can cause immense and
//               costly damage to a home's structure. These wood-eating pests can
//               go unnoticed for years, hollowing out wooden beams, flooring, and
//               furniture from the inside out. A small problem can quickly become
//               a severe and dangerous threat to your property's integrity. Our
//               Termite Control Service provides a proactive, long-lasting
//               solution to protect your most valuable asset.
//             </p>
//             <Image
//               src="/Images/bugs/termite1.svg"
//               alt="termite"
//               height={250}
//               width={250}
//               className="w-40 md:w-52 lg:w-64 h-auto"
//             />
//           </div>

//           {/* Why Termite Control is Important */}
//           <div className="mt-8">
//             <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//               Why Termite Control is Important?
//             </h3>
//             <ul className="list-disc ml-5 md:ml-8 mt-3 text-lg flex flex-col gap-2">
//               <li>
//                 <span className="font-bold">
//                   Prevent Expensive Structural Damage:
//                 </span>{" "}
//                 Termites can silently compromise the very foundation and
//                 framework of your home, leading to major repair costs.
//               </li>
//               <li>
//                 <span className="font-bold">Protect Your Property Value:</span>{" "}
//                 A termite infestation can significantly devalue a property,
//                 making it difficult to sell or rent.
//               </li>
//               <li>
//                 <span className="font-bold">
//                   Avoid Health and Safety Risks:
//                 </span>{" "}
//                 Termite damage can lead to compromised electrical wiring and
//                 weakened structures that may pose a risk to your family.
//               </li>
//               <li>
//                 <span className="font-bold">Stop Rapid Spread:</span> Termite
//                 colonies can grow to millions of individuals, quickly spreading
//                 from a single entry point to other parts of your home and even
//                 to neighboring properties.
//               </li>
//             </ul>
//           </div>

//           {/* Centered Image */}
//           <Image
//             src="/Images/bugs/termite2.png"
//             width={390}
//             height={100}
//             alt="termite"
//             className="mt-4 mx-auto w-48 md:w-64 lg:w-80 h-auto"
//           />

//           {/* Approach */}
//           <div className="mt-10">
//             <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//               Our Approach
//             </h3>
//             <p className="font-bold text-lg mt-2">
//               We follow a scientific and highly effective process to eliminate
//               termites and protect your property:
//             </p>
//             <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//               <li>
//                 <span className="font-bold">Inspection:</span> Our certified
//                 professionals conduct a thorough inspection to identify the type
//                 of termite, the extent of the infestation, and all entry points
//                 and active tunnels.
//               </li>
//               <li>
//                 <span className="font-bold">Customized Treatment:</span> We use
//                 a combination of proven methods, including liquid termiticides
//                 to create a protective barrier around your property and baiting
//                 systems to eliminate the entire colony, including the queen.
//               </li>
//               <li>
//                 <span className="font-bold">Crack & Crevice Treatment:</span> We
//                 treat and seal all cracks, voids, and crevices in your
//                 foundation and walls to prevent future entry.
//               </li>
//               <li>
//                 <span className="font-bold">Monitoring & Prevention:</span> We
//                 provide post-treatment monitoring and guidance on how to prevent
//                 future infestations, such as controlling moisture and removing
//                 wood-to-soil contact.
//               </li>
//             </ul>
//           </div>

//           {/* Pros */}
//           <div className="mt-10">
//             <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//               Pros
//             </h3>
//             <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
//               <li>
//                 <span className="font-bold">Long-Term Protection:</span> Our
//                 treatments provide a durable, long-lasting barrier to prevent
//                 future termite attacks.
//               </li>
//               <li>
//                 <span className="font-bold">Proven Effectiveness:</span> We use
//                 industry-leading products and techniques that are scientifically
//                 proven to be effective against termites.
//               </li>
//               <li>
//                 <span className="font-bold">Minimally Invasive:</span> Our
//                 methods are designed to be as non-disruptive as possible to your
//                 daily life.
//               </li>
//               <li>
//                 <span className="font-bold">Guaranteed Results:</span> We stand
//                 behind our work with a service warranty, ensuring your home
//                 remains termite-free.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Yellow Section */}
//         <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative">
//           <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
//             <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-10">
//               Why Choose Orion for Termite Control?
//             </h2>
//             <ul className="list-disc ml-5 md:ml-8 mt-6 flex flex-col gap-3 text-lg">
//               <li>
//                 <span className="font-bold">Eco-Friendly Methods:</span> Safe,
//                 odorless, and pet-friendly treatments.
//               </li>
//               <li>
//                 <span className="font-bold">Trained Technicians:</span> Skilled
//                 team with years of expertise.
//               </li>
//               <li>
//                 <span className="font-bold">Custom Plans:</span> Tailored
//                 solutions for homes, restaurants, and offices.
//               </li>
//               <li>
//                 <span className="font-bold">Trusted Brand:</span> Serving
//                 clients across India since 1998.
//               </li>
//             </ul>
//           </div>
//         </div>
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

      <HeroSection image="/Images/services/termite.png"/>
      {/* Advanced Control Section */}
      <AdvanceControl image="/Images/services/termite2.png"/>

      {/* Complete Protection Section */}
      <CompleteProtection />

      {/* Diagram Features Info Section */}
      <Diagram />

      {/* Brand Logos / Cards Grid Section */}
      <BrandSection image="/Images/services/termite3.png"/>

      {/* Testimonials Section Component */}
      <TestimonialsSection />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection image="/Images/services/termite4.png"/>

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/services/termite5.png"/>
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
                src="/Images/services/termite5.png"
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
