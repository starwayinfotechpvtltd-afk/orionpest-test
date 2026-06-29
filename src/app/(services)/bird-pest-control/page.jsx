// import React from "react";
// import Image from "next/image";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";


// export async function generateMetadata() {
//   const page = await getPageData("bird-control");
//   return {
//     title: page?.metaTitle || "Bird Control",
//     description: page?.metaDescription || "",
//   };
// }


// export default function Page() {
//   return (
//     <div className="w-full">
//       <PageData segment={"bird-control"}>
//       <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto relative">
//         {/* Title */}
//         <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-20">
//           Bird Control Services
//         </h2>
//         <h3 className="text-center text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
//           Say Goodbye to Nuisance Bird Infestations
//         </h3>

//         {/* Intro Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-6">
//           <p className="w-full lg:w-1/2 text-lg leading-relaxed">
//             While beautiful in nature, birds can become a major nuisance when
//             they roost on buildings, ledges, and other structures. Their
//             droppings are not only unsightly but also highly corrosive, damaging
//             paint, rooftops, and machinery. They can also carry diseases and
//             parasites, posing a health risk to people. Our Bird Control Service
//             offers a humane, effective, and lasting solution to deter birds and
//             protect your property.
//           </p>
//           <Image
//             src="/Images/bugs/bird1.svg"
//             alt="bird"
//             height={300}
//             width={300}
//             className="w-40 md:w-52 lg:w-72 h-auto"
//           />
//         </div>

//         {/* Why Bird Control is Important */}
//         <div className="mt-8">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Why Bird Control is Important?
//           </h3>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
//             <li>
//               <span className="font-bold">Prevent Property Damage:</span> Bird
//               droppings are highly acidic and can corrode building materials,
//               vehicles, and air conditioning units, leading to costly repairs.
//             </li>
//             <li>
//               <span className="font-bold">Avoid Health Risks:</span> Bird nests
//               and droppings can harbor and spread over 60 diseases, including
//               Salmonella and E. coli, and attract other pests like mites,
//               ticks, and fleas.
//             </li>
//             <li>
//               <span className="font-bold">Maintain Aesthetic Appeal:</span> Bird
//               nests and droppings can make a property look dirty and poorly
//               maintained, negatively impacting your business or home's image.
//             </li>
//             <li>
//               <span className="font-bold">Reduce Noise and Mess:</span> Roosting
//               birds can create a significant amount of noise and a continuous
//               mess from nesting materials and droppings.
//             </li>
//           </ul>
//         </div>

//         {/* Center Image */}
//         <Image
//           src="/Images/bugs/bird2.png"
//           width={300}
//           height={50}
//           alt="bird"
//           className="mt-4 mx-auto w-40 md:w-60 lg:w-72 h-auto"
//         />

//         {/* Approach */}
//         <div className="mt-10">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Our Approach
//           </h3>
//           <p className="font-bold text-lg mt-2">
//             We follow a safe, humane, and effective process to manage and deter
//             birds:
//           </p>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-3 text-lg">
//             <li>
//               <span className="font-bold">Inspection:</span> We perform a
//               thorough inspection to identify the bird species, the extent of
//               the infestation, and their entry, roosting, and nesting sites.
//             </li>
//             <li>
//               <span className="font-bold">Customized Solutions:</span> We use a
//               combination of non-lethal, humane deterrents, such as bird spikes
//               on ledges, netting to block off large areas, and electric shock
//               tracks to create a harmless, uncomfortable landing spot.
//             </li>
//             <li>
//               <span className="font-bold">Cleaning & Sanitation:</span> We
//               safely and professionally clean and sanitize the affected areas to
//               remove all droppings, nesting materials, and associated pathogens.
//             </li>
//             <li>
//               <span className="font-bold">Monitoring & Prevention:</span> We
//               advise on preventative measures, such as removing food sources and
//               sealing potential entry points, and can schedule follow-up visits
//               to ensure the solution remains effective.
//             </li>
//           </ul>
//         </div>

//         {/* Pros */}
//         <div className="mt-10">
//           <h3 className="text-[#0094DA] text-2xl md:text-3xl lg:text-4xl font-bold">
//             Pros
//           </h3>
//           <ul className="list-disc ml-5 md:ml-8 mt-3 flex flex-col gap-2 text-lg">
//             <li>
//               <span className="font-bold">Humane & Safe:</span> All our methods
//               are designed to deter birds without causing them harm.
//             </li>
//             <li>
//               <span className="font-bold">Long-Lasting Protection:</span> Our
//               installations provide a durable, long-term solution to bird
//               problems.
//             </li>
//             <li>
//               <span className="font-bold">Aesthetically Pleasing:</span> Our
//               solutions, like transparent netting, are designed to be effective
//               without detracting from your property's appearance.
//             </li>
//             <li>
//               <span className="font-bold">Effective for Various Species:</span>{" "}
//               We have solutions for a wide range of common nuisance birds,
//               including pigeons, sparrows, and starlings.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Yellow Section */}
//       <div className="w-full mt-20 border-t-8 border-[#2F3293] bg-gradient-to-br from-[#FFF300] to-[#FEBA00] pb-80 relative">
//         <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
//           <h2 className="text-[#2F3293] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-10">
//             Why Choose Orion for Bird Control?
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
  const page = await getPageData("bird-control");
  return {
    title: page?.metaTitle || "Bird Control",
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
  "Advanced Anti-Bird Solutions",
  "Long-Term Monitoring & Warranty",
];

const leftFeature = [
  {
    heading: "Target Hidden Colonies",
    desc: "Advanced detection identifies bird activity before major structural damage occurs.",
  },
  {
    heading: "Prevent Future Damage",
    desc: "Protect your investment with long-lasting bird prevention treatments.",
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
    heading: "Comprehensive Bird Protection",
    desc: "Complete structural protection with advanced anti-bird technology.",
    image: "/Images/services/bird3.png",
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
    desc: "Protect your property from costly bird damage with preventive care.",
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
    desc: "Stops birds at the source.",
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
    title: "Trusted Since 1970",
    desc: "India's trusted bird specialists.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: House
  },
];

const faqs = [
  {
    id: "01",
    question: "How do I know if my home has birds?",
    answer:
      "Common signs include mud tubes, hollow-sounding wood, discarded wings, damaged wooden furniture, and unexplained cracks. Schedule a professional inspection for confirmation.",
  },
  {
    id: "02",
    question: "How long does bird treatment take?",
    answer:
      "Most residential bird treatments are completed within a few hours, depending on the size of the property and the severity of infestation.",
  },
  {
    id: "03",
    question: "Is bird treatment safe for children and pets?",
    answer:
      "Yes. Orion uses government-approved bird treatment solutions that are safe when applied by certified professionals.",
  },
  {
    id: "04",
    question: "How long does bird protection last?",
    answer:
      "Our treatments provide long-term protection, and preventive maintenance can significantly extend effectiveness.",
  },
  {
    id: "05",
    question: "Do you provide bird warranties?",
    answer:
      "Yes. Selected bird treatment plans include service warranties for additional peace of mind.",
  },
  {
    id: "06",
    question: "How much does bird treatment cost?",
    answer:
      "The cost depends on property size, infestation level, and treatment type. Contact us for a free site inspection and personalized quotation.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/bird.png"
        topbadge="BIRD PEST CONTROL SERVICES"
        heading={
          <>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Say Goodbye to
              <br />
              <span className="text-[#1095D9]">Birds</span>
            </h1>
          </>
        }
        subHeading="Safe. Effective. Long-Lasting Protection."
        desc="Protect your home from hidden bird damage with Orion Pest Control. Our advanced bird treatment solutions eliminate active infestations and provide long-lasting protection for homes, offices, and commercial properties. Safe, effective, and trusted since 1970."
        stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
        imageStyle="absolute w-[80%] h-[80%] top-[0%] -left-[20%] sm:left-[0%] z-[10px]"
      />
      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/bird2.png"
        heading={
          <>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Bird Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc="Birds silently weaken wooden structures before visible damage appears. Our experienced technicians use modern detection methods and proven treatment techniques to eliminate birds from the source while preventing future infestations."
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
        desc="Our comprehensive bird control process protects every vulnerable area of your property, ensuring complete structural safety and long-lasting defense against birds."
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="COMPLETE STRUCTURAL PROTECTION"
        heading={
          <>
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
            Complete Bird Control
            <br />
            <span className="text-[#0094DA]">at Every Place.</span>
          </h2>
          </>
        }
        desc="Whether it's a home, office, warehouse, hotel, or commercial building, our specialized bird treatment keeps every property protected against hidden bird attacks."
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
            <span className="text-[#0094DA]">Bird Control,</span>{" "}
            <span className="text-[#2F3293]">Every Time.</span>
          </h2>
          </>
        }
        desc="See why homeowners, businesses, and builders trust Orion Pest Control for dependable bird protection and exceptional service."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/bird3.png"
        image2="/Images/services/bird4.png"
        name="Bird"
        tagline="Safe for your little ones. Tough on birds."
        desc="Our eco-friendly bird treatments provide maximum protection while remaining safe for your children, pets, and the environment. Enjoy complete peace of mind without compromising your family's safety."
        childSafeStats={childSafeStats}
      />

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/services/bird.png" faqs={faqs}/>
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
                <span className="text-[#2F3293]">Bird-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your property before birds cause costly structural damage. Book a professional bird inspection with our certified experts today.
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
                src="/Images/services/bird.png"
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
