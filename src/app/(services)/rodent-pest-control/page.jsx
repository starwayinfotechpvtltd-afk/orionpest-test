// import React from "react";
// import Image from "next/image";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("rodent-control");
//   return {
//     title: page?.metaTitle || "Rodent Control",
//     description: page?.metaDescription || "",
//   };
// }


// export default function RodentControlPage() {
//   return (
//     <div className="w-full">
//       {/* Main content container */}
//       <PageData segment={"rodent-control"}>
//       <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
//         {/* Headings */}
//         <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
//           Rodent Control Services
//         </h2>
//         <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
//           Say Goodbye to Rodent Infestations
//         </h3>

//         {/* Intro section */}
//         <div className="flex flex-col lg:flex-row items-center gap-6 mt-8">
//           <div className="w-full lg:w-1/2">
//             <p className="text-lg leading-relaxed">
//               Rodents, including mice and rats, are not just a nuisance; they
//               are a significant threat to your property and health. These
//               cunning pests can chew through electrical wires, wooden
//               structures, and insulation, causing costly and dangerous damage.
//               They also spread a variety of diseases through their droppings and
//               urine, posing a serious risk to your family. Our Rodent Control
//               Service provides a safe, effective, and comprehensive solution to
//               eliminate rodents and protect your home.
//             </p>
//           </div>

//           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//             <Image
//               src="/Images/bugs/rodent2.svg"
//               alt="rodent"
//               width={250}
//               height={250}
//               className="w-32 md:w-48 lg:w-56 h-auto"
//             />
//           </div>
//         </div>

//         {/* Why section */}
//         <section className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Why Rodent Control is Important?
//           </h3>
//           <ul className="list-disc ml-5 md:ml-8 mt-4 flex flex-col gap-2 text-lg">
//             <li>
//               <span className="font-bold">Prevent Property Damage:</span>{" "}
//               Rodents constantly gnaw on materials to wear down their teeth,
//               leading to damage to walls, furniture, wiring, and plumbing.
//             </li>
//             <li>
//               <span className="font-bold">Avoid Health Risks:</span> Rodents
//               carry and transmit numerous diseases, including Hantavirus,
//               Salmonellosis, and Leptospirosis, through their waste and bites.
//             </li>
//             <li>
//               <span className="font-bold">Contaminate Food and Surfaces:</span>{" "}
//               They contaminate food storage areas and kitchen surfaces with
//               their droppings and urine, posing a direct threat to food safety.
//             </li>
//             <li>
//               <span className="font-bold">Stop Rapid Breeding:</span> Rodents
//               reproduce incredibly fast, turning a single sighting into a severe
//               infestation in a short period.
//             </li>
//           </ul>
//         </section>

//         {/* Images row */}
//         <div className="flex items-center justify-center gap-6 mt-6">
//           <Image
//             src="/Images/bugs/rodent3.svg"
//             alt="rodent"
//             width={300}
//             height={100}
//             className="w-36 md:w-48 lg:w-64 h-auto"
//           />
//           <Image
//             src="/Images/bugs/rodent1.svg"
//             alt="rodent"
//             width={300}
//             height={100}
//             className="w-36 md:w-48 lg:w-64 h-auto mt-4 md:mt-12 md:-ml-12"
//           />
//         </div>

//         {/* Approach */}
//         <section className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Our Approach
//           </h3>
//           <p className="font-bold text-lg mt-2">
//             We follow a strategic and humane process to eliminate rodents and
//             secure your property:
//           </p>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Inspection:</span> Our certified
//               professionals conduct a thorough inspection to identify the
//               species of rodent, their entry points, nesting sites, and travel
//               routes.
//             </li>
//             <li>
//               <span className="font-bold">Exclusion:</span> We focus on a
//               long-term solution by sealing all entry points, such as cracks in
//               the foundation, gaps around pipes, and vents, to prevent future
//               access.
//             </li>
//             <li>
//               <span className="font-bold">Trapping & Baiting:</span> We use a
//               combination of discreet, professional-grade traps and
//               tamper-resistant bait stations placed in strategic, low-traffic
//               areas to effectively eliminate the active rodent population.
//             </li>
//             <li>
//               <span className="font-bold">Sanitation & Prevention:</span> We
//               provide expert advice on how to remove food sources and harborage
//               areas. We will also clean and sanitize affected areas to remove
//               odors and disease-causing pathogens.
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
//               approach targets the entire rodent problem, from eliminating the
//               current population to preventing future infestations.
//             </li>
//             <li>
//               <span className="font-bold">Safe for Your Home:</span> We use
//               professional methods that are effective against rodents but
//               designed to be safe for your family and pets.
//             </li>
//             <li>
//               <span className="font-bold">Humane & Effective:</span> We
//               prioritize humane methods, and our strategic placement ensures
//               quick and effective results.
//             </li>
//             <li>
//               <span className="font-bold">Guaranteed Peace of Mind:</span> We
//               stand behind our work with a service guarantee, ensuring your home
//               remains rodent-free.
//             </li>
//           </ul>
//         </section>
//       </div>

//       {/* Yellow section */}
//       <div className="w-full mt-12 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80">
//         <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-8">
//           <h2 className="text-[#2F3293] text-2xl md:text-4xl lg:text-5xl text-center font-bold">
//             Why Choose Orion for Rodent Control?
//           </h2>
//           <ul className="list-disc ml-5 md:ml-8 mt-6 flex flex-col gap-2 text-lg">
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
  const page = await getPageData("rodent-control");
  return {
    title: page?.metaTitle || "Rodent Control",
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
  "Advanced Anti-Rodent Solutions",
  "Long-Term Monitoring & Warranty",
];

const leftFeature = [
  {
    heading: "Target Hidden Colonies",
    desc: "Advanced detection identifies rodent activity before major structural damage occurs.",
  },
  {
    heading: "Prevent Future Damage",
    desc: "Protect your investment with long-lasting rodent prevention treatments.",
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
    heading: "Comprehensive Rodent Protection",
    desc: "Complete structural protection with advanced anti-rodent technology.",
    image: "/Images/services/rodent5.png",
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
    desc: "Protect your property from costly rodent damage with preventive care.",
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
    icon : ShieldCheck
  },
  {
    title: "Deep Foundation Protection",
    desc: "Stops rodents at the source.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Shield
  },
  {
    title: "Long-Lasting Results",
    desc: "Extended protection against future infestations.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Leaf
  },
  {
    title: "Trusted Since 1998",
    desc: "India's trusted rodent specialists.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: House
  },
];

const faqs = [
  {
    id: "01",
    question: "How do I know if my home has rodents?",
    answer:
      "Common signs include mud tubes, hollow-sounding wood, discarded wings, damaged wooden furniture, and unexplained cracks. Schedule a professional inspection for confirmation.",
  },
  {
    id: "02",
    question: "How long does rodent treatment take?",
    answer:
      "Most residential rodent treatments are completed within a few hours, depending on the size of the property and the severity of infestation.",
  },
  {
    id: "03",
    question: "Is rodent treatment safe for children and pets?",
    answer:
      "Yes. Orion uses government-approved rodent treatment solutions that are safe when applied by certified professionals.",
  },
  {
    id: "04",
    question: "How long does rodent protection last?",
    answer:
      "Our treatments provide long-term protection, and preventive maintenance can significantly extend effectiveness.",
  },
  {
    id: "05",
    question: "Do you provide rodent warranties?",
    answer:
      "Yes. Selected rodent treatment plans include service warranties for additional peace of mind.",
  },
  {
    id: "06",
    question: "How much does rodent treatment cost?",
    answer:
      "The cost depends on property size, infestation level, and treatment type. Contact us for a free site inspection and personalized quotation.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/rodent.png"
        topbadge="RODENT PEST CONTROL SERVICES"
        heading={
          <>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Say Goodbye to
              <br />
              <span className="text-[#1095D9]">Redents</span>
            </h1>
          </>
        }
        subHeading="Safe. Effective. Long-Lasting Protection."
        desc="Protect your home from hidden rodent damage with Orion Pest Control. Our advanced rodent treatment solutions eliminate active infestations and provide long-lasting protection for homes, offices, and commercial properties. Safe, effective, and trusted since 1970."
        stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
        imageStyle="absolute w-[90%] h-[90%] -top-[0%] -left-[20%] sm:-left-[10%] z-[10px]"
      />
      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/rodent2.png"
        heading={
          <>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Rodent Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc="Rodents silently weaken wooden structures before visible damage appears. Our experienced technicians use modern detection methods and proven treatment techniques to eliminate rodents from the source while preventing future infestations."
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
        desc="Our comprehensive rodent control process protects every vulnerable area of your property, ensuring complete structural safety and long-lasting defense against rodents."
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="COMPLETE STRUCTURAL PROTECTION"
        heading={
          <>
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
            Complete Rodent Control
            <br />
            <span className="text-[#0094DA]">at Every Place.</span>
          </h2>
          </>
        }
        desc="Whether it's a home, office, warehouse, hotel, or commercial building, our specialized rodent treatment keeps every property protected against hidden rodent attacks."
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
            <span className="text-[#0094DA]">Rodent Control,</span>{" "}
            <span className="text-[#2F3293]">Every Time.</span>
          </h2>
          </>
        }
        desc="See why homeowners, businesses, and builders trust Orion Pest Control for dependable rodent protection and exceptional service."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/rodent4.png"
        image2="/Images/services/rodent3.png"
        name="Rodent"
        tagline="Safe for your little ones. Tough on rodents."
        desc="Our eco-friendly rodent treatments provide maximum protection while remaining safe for your children, pets, and the environment. Enjoy complete peace of mind without compromising your family's safety."
        childSafeStats={childSafeStats}
      />

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/services/rodent2.png" faqs={faqs}/>
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
                <span className="text-[#2F3293]">Rodent-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your property before rodents cause costly structural damage. Book a professional rodent inspection with our certified experts today.
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
                src="/Images/services/rodent2.png"
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
