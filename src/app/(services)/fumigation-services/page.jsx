// import React from "react";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("fumigation-pest-control");
//   return {
//     title: page?.metaTitle || "Fumigation Pest Control",
//     description: page?.metaDescription || "",
//   };
// }


// export default function page() {
//   return (
//     <div className="w-full pb-80">
//       <PageData segment={"fumigation-pest-control"}>
//       <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
//         <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">Fumigation Pest Control Services</h2>
//         <p className="mt-10 text-lg">
//           Orion Pest Solutions is a duly approved and accredited ISO certified
//           company, committed to provide quality and efficient services in
//           fumigation procedures with the `use of METHYL BROMIDE and ALUMINIUM
//           PHOSPHIDE to control pests in India. We work 24/7 to help our clients
//           protect their surroundings from infectious pesticides through our
//           fumigation pest control solutions.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Fumigation pest control services</p>
//         <p className="mt-1 text-lg">
//           Orion Pest Solutions offers a wide range of fumigation services to
//           safeguard your residential and commercial space from pests and protect
//           your health from infections and diseases caused by damaging insects
//           like termites, cockroaches, mice, bedbugs and flies. We provide the
//           most effective fumigation services to eradicate the entire range of
//           pests which are detrimental to the health of you and your family as
//           well as the image of your business. Our experienced team of
//           specialists are dedicated and committed to offer the best fumigation
//           pest control services to control pest infestations and eliminate them
//           to the core.
//         </p>
//         <div className="flex flex-col md:flex-row justify-between mt-5">
//           <div>
//             <p className="mt-3 text-black font-bold text-lg">Fumigation procedure</p>
//             <p className="mt-1 text-lg">
//               Fumigation is a process of eliminating harmful pests and insects
//               through the use of gaseous pesticides or fumigants at a certain
//               temperature and pressure to suffocate or poison the pests within.
//               The infected area is completely sealed off for a certain period of
//               time during this process in order to ensure that the fumigants are
//               spread inside completely to destroy the existing pest
//               infestations.
//             </p>
//           </div>
//           <div className="mt-4 md:mt-0">
//             <p className="md:text-right text-black font-bold text-lg">Methods of fumigation</p>
//             <p className="md:text-right text-lg mt-1">
//               Fumigation is used to prevent pests in any structural space, food,
//               soil or grain. We, at Orion, employ highly experienced pest
//               control specialists who are well-versed with the latest technology
//               and equipment for pest control and eradication, thereby reducing
//               the risk of damage to your home, office or warehouse. We drive
//               successful pest control solutions for the human health and
//               property which includes the usage of fumigants, safety equipment,
//               insecticides, sprayers, and chemicals.
//             </p>
//           </div>
//         </div>
//         <p className="text-xl text-[#2F3293] font-bold mt-5">
//           At Orion, we offer a wide array of fumigation services, tailored to
//           your pest control needs and requirements
//         </p>
//         <p className="mt-3 text-black font-bold text-lg">Wooden pallets fumigation</p>
//         <p className="mt-1 text-lg">
//           We carry out fumigation of wooden pallets with methyl bromide at the
//           dosage of 48 gms per mtr cube. The wooden pallets are placed in
//           fumigation covers which are sealed and then grounded under the floor.
//           Gas monitoring is performed during the exposure period and thereafter,
//           the fumigation covers are removed.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Empty container fumigation</p>
//         <p className="mt-1 text-lg">
//           To minimize the risk of damage to your empty holds, we perform
//           fumigation services with gaseous pesticides complying with high safety
//           standards and practices. We fill the empty containers with Methyl
//           Bromide to suffocate the existing pests within and exterminate them.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Cargo fumigation</p>
//         <p className="mt-1 text-lg">
//           Cargo is used to store goods like animal feed, grains and non-food
//           agricultural products and transport them from one place to another on
//           the port. Cargoes are highly exposed to the threat of pests and
//           insects. Hence, it is mandatory to perform cargo fumigation before
//           shipping. We perform cargo fumigation in either solid, liquid or
//           gaseous form to protect the goods from pest infestation.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Tobacco fumigation</p>
//         <p className="mt-1 text-lg">
//           We provide effective tobacco fumigation solutions at warehouses or
//           containers with the use of phosphine to prevent moth or beetle
//           infestation. We incorporate advanced technology for the fumigation of
//           tobacco to control pests, adhering to health and safety standards on
//           the whole.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Seeds fumigation</p>
//         <p className="mt-1 text-lg">
//           Seeds or grains are prone to getting infected by pests and insects.
//           Hence, sanitization of seeds is very essential to prevent
//           deterioration or losses by employing necessary pest control. Our
//           unique seeds fumigation is highly reliable and beneficial to eradicate
//           these dangerous pests and insects.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Warehouse fumigation</p>
//         <p className="mt-1 text-lg">
//           We offer efficient warehouse fumigation solutions to your business to
//           avoid deterioration or damage of stored goods or products. Warehouses
//           are a much sought after place for rodents, pests and insects. They are
//           likely to cause damage to your stored goods in the warehouse,
//           affecting your brand reputation. Our warehouse fumigation is carried
//           out with the application of phosphine which can penetrate beneath the
//           kernels and loosely stored goods and kill the habitats instantly.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Agriculture products fumigation</p>
//         <p className="mt-1 text-lg">
//           Our agricultural products fumigation is quite helpful in preventing
//           major deterioration caused by pests and insects. We employ our best
//           technicians to carry out the fumigation to get rid of pest
//           infestation. They perform the operation with due diligence and care
//           with proper calculation of the amount of fumigants to be used.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Flour Mills fumigation</p>
//         <p className="mt-1 text-lg">
//           Flour mills are equipped with machinery for grinding, crushing and
//           cutting of grains and cereals into flour. In such places, the
//           pest-rate generally tends to be on a higher side. Therefore, pest
//           control is a mandate to eradicate pest threat and the damage of the
//           raw materials. Rest assured, our flour mills fumigation are much
//           effective and are implemented with high protection of the raw
//           materials from any sort of damage.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Timber fumigation</p>
//         <p className="mt-1 text-lg">
//           Our pest control services also include timber fumigation with Methyl
//           Bromide. Timber is used to build our houses, furniture or flooring. We
//           apply liquid or gaseous fumigants to deal with beetle and woodworms in
//           timber. The fumigants are deeply penetrated onto all of the timbers to
//           offer a substantial pest treatment.
//         </p>
//         <p className="mt-5 text-black font-bold text-lg">Ship and Aircraft fumigation</p>
//         <p className="mt-1 text-lg">
//           For transportation of goods in ships and aircrafts using containers,
//           fumigation plays a vital role as it is essential to keep away pests
//           and insects before entering into a foreign land. We perform the
//           fumigation at the loading port as well as at the port of discharge to
//           ensure double protection with the highest standards.
//         </p>
//       </div>
//       </PageData>
//     </div>
//   );
// }















// Debkanta Added These

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
//   const page = await getPageData("fumigation-control");
//   return {
//     title: page?.metaTitle || "Fumigation Control",
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
//   "Advanced Anti-   Fumigation Solutions",
//   "Long-Term Monitoring & Warranty",
// ];

// const leftFeature = [
//   {
//     heading: "Target Hidden Colonies",
//     desc: "Advanced detection identifies    fumigation activity before major structural damage occurs.",
//   },
//   {
//     heading: "Prevent Future Damage",
//     desc: "Protect your investment with long-lasting    fumigation prevention treatments.",
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
//     heading: "Comprehensive    Fumigation Protection",
//     desc: "Complete structural protection with advanced anti-ant technology.",
//     image: "/Images/services/flies5.png",
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
//     desc: "Protect your property from costly    fumigation damage with preventive care.",
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
//     desc: "India's trusted    fumigation specialists.",
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
//     question: "How long does    fumigation treatment take?",
//     answer:
//       "Most    fumigation    fumigation treatments are completed within a few hours, depending on the size of the property and the severity of infestation.",
//   },
//   {
//     id: "03",
//     question: "Is    fumigation treatment safe for children and pets?",
//     answer:
//       "Yes. Orion uses government-approved    fumigation treatment solutions that are safe when applied by certified professionals.",
//   },
//   {
//     id: "04",
//     question: "How long does    fumigation protection last?",
//     answer:
//       "Our treatments provide long-term protection, and preventive maintenance can significantly extend effectiveness.",
//   },
//   {
//     id: "05",
//     question: "Do you provide    fumigation warranties?",
//     answer:
//       "Yes. Selected    fumigation treatment plans include service warranties for additional peace of mind.",
//   },
//   {
//     id: "06",
//     question: "How much does    fumigation treatment cost?",
//     answer:
//       "The cost depends on property size, infestation level, and treatment type. Contact us for a free site inspection and personalized quotation.",
//   },
// ];

// export default function page() {
//   return (
//     <div className="w-full">
//       {/* Hero Section */}

//       <HeroSection
//         image="/Images/services/fumigation.png"
//         topbadge="ANT PEST CONTROL SERVICES"
//         heading={
//           <>
//             <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
//               Say Goodbye to Pests With 
//               <br />
//               <span className="text-[#1095D9]">Fumigation Pest Control</span>
//             </h1>
//           </>
//         }
//         subHeading="Safe. Effective. Long-Lasting Protection."
//         desc="Protect your home from hidden    fumigation damage with Orion Pest Control. Our advanced    fumigation treatment solutions eliminate active infestations and provide long-lasting protection for homes, offices, and   fumigation properties. Safe, effective, and trusted since 1970."
//         stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
//         imageStyle="absolute w-[90%] h-[90%] top-10 left-0 z-[10px] rounded-full"
//       />
//       {/* Advanced Control Section */}
//       <AdvanceControl
//         image="/Images/services/ant5.png"
//         heading={
//           <>
//             <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
//               Advanced Fumigation Control for
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
//         desc="Our comprehensive    fumigation control process protects every vulnerable area of your property, ensuring complete structural safety and long-lasting defense against ants."
//         list={list2}
//         image="/Images/services/home.png"
//       />

//       {/* Diagram Features Info Section */}
//       <Diagram
//         topbadge="COMPLETE STRUCTURAL PROTECTION"
//         heading={
//           <>
//           <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
//             Complete Fumigation Control
//             <br />
//             <span className="text-[#0094DA]">at Every Place.</span>
//           </h2>
//           </>
//         }
//         desc="Whether it's a home, office, warehouse, hotel, or   fumigation building, our specialized    fumigation treatment keeps every property protected against hidden    fumigation attacks."
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
//             <span className="text-[#0094DA]">Fumigation Free,</span>{" "}
//             <span className="text-[#2F3293]">Every Time.</span>
//           </h2>
//           </>
//         }
//         desc="See why homeowners, businesses, and builders trust Orion Pest Control for dependable    fumigation protection and exceptional service."
//       />

//       {/* Child Safe Environment Highlight Grid */}
//       <ChildSafeSection
//         image1="/Images/services/home.png"
//         image2="/Images/services/rodent3.png"
//         name="   Fumigation"
//         tagline="Safe for your little ones. Tough on ants."
//         desc={
//           <>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 mt-4">
//               Our eco-friendly    fumigation treatments provide maximum protection while remaining safe for your children, pets, and the environment. Enjoy complete peace of mind without compromising your family's safety.
//             </p>
//             <br />
//           </>
//         }
//         childSafeStats={childSafeStats}
//       />

//       {/* FAQ Accordion Grid Framework Group Section Wrapper */}
//       <section className="bg-[#FCFCFD] pb-16 md:pb-20">
//         <FAQSection image="/Images/services/bedbug-1.png" faqs={faqs} />
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
//                 <span className="text-[#2F3293]">   Fumigation-Free.</span>
//               </h2>

//               <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
//                 Protect your property before ants cause costly structural
//                 damage. Book a professional    fumigation inspection with our
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
//                 src="/Images/services/mosquito2.png"
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



















// Asad Added These
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
  const page = await getPageData("fumigation-control");
  return {
    title: page?.metaTitle || "Expert Pest Control Fumigation Services | Orion Pest",
    description: page?.metaDescription || "Need professional Fumigation services? With 27+ years of expertise and 5K+ businesses served, we offer zero-residue pest control fumigation services.",
  };
}

const list1 = [
  "Container & Cargo Fumigation",
  "Warehouse & Silo Fumigation",
  "Structural Fumigation",
  "ISPM-15 Export Compliance",
];

const list2 = [
  "Thorough Area Assessment",
  "Strict Sealing & Tenting",
  "Controlled Gas Application",
  "Post-Treatment Aeration & Clearance",
];

const leftFeature = [
  {
    heading: "Eradicate Severe Infestations",
    desc: "Gas penetrates deep into wood, packaging, and structures where standard sprays and baits cannot reach.",
  },
  {
    heading: "Protect Goods & Cargo",
    desc: "Ensure your stored commodities and export shipments are pest-free and globally compliant.",
  },
];

const rightFeature = [
  {
    heading: "Zero Residue Left Behind",
    desc: "Once properly aerated, the fumigant dissipates completely, leaving no toxic residue on your surfaces or goods.",
  },
  {
    heading: "Strict Safety Protocols",
    desc: "Our highly certified technicians execute all fumigation procedures under rigorous government and industry safety standards.",
  },
];

const cards = [
  {
    heading: "Cargo & Shipping",
    desc: "Reliable container fumigation ensuring your international shipments meet global phytosanitary standards.",
    image: "/Images/services/fumigation.png",
    bgColor: "#FFF6DE",
  },
  {
    heading: "Warehouses & Facilities",
    desc: "Large-scale treatments to protect stored grains, raw materials, and finished goods from destructive pests.",
    image: "/Images/icon/vector2.png",
    bgColor: "#EEF4FF",
  },
  {
    heading: "Residential & Commercial Structures",
    desc: "Deep-penetrating structural fumigation for extreme infestations like drywood termites and bed bugs.",
    image: "/Images/icon/vector3.png",
    bgColor: "#FFF1F2",
  },
];

const childSafeStats = [
  {
    title: "Zero Residue",
    desc: "Leaves no harmful residue after the aeration process is complete.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: ShieldCheck,
  },
  {
    title: "Deep Penetration",
    desc: "Eliminates pests hiding deep within structural crevices.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Shield,
  },
  {
    title: "Strict Safety Standard",
    desc: "Highly regulated treatments ensuring safety post-clearance.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Leaf,
  },
  {
    title: "27+ Years of Trust",
    desc: "Serving 5K+ businesses since 1998 with proven success.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: House,
  },
];

const faqs = [
  {
    id: "01",
    question: "What is fumigation?",
    answer:
      "Fumigation is a highly effective pest control method that fills an enclosed space with gaseous pesticides (fumigants) to suffocate and eliminate pests within.",
  },
  {
    id: "02",
    question: "Do I need to leave the premises during fumigation?",
    answer:
      "Yes. The treated area must be completely evacuated, sealed, and strictly off-limits to humans and pets until our experts clear the building post-aeration.",
  },
  {
    id: "03",
    question: "How long does fumigation take?",
    answer:
      "The process generally takes between 24 to 72 hours, which includes preparation, gas exposure time, and thorough aeration and clearance testing.",
  },
  {
    id: "04",
    question: "Is fumigation safe for my belongings and goods?",
    answer:
      "Yes. Fumigant gases penetrate deeply but do not leave any toxic surface residue on your furniture, equipment, or stored commodities.",
  },
  {
    id: "05",
    question: "Do you offer fumigation for export cargo?",
    answer:
      "Absolutely. We provide ISPM-15 compliant container and pallet fumigation services to ensure your export shipments meet international trade regulations.",
  },
  {
    id: "06",
    question: "How much do Fumigation services cost?",
    answer:
      "The cost depends on the volume of the space, the type of commodity, and the specific fumigant required. Contact us for a precise, customized quotation.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/fumigation.png"
        topbadge="EXPERT FUMIGATION SERVICES"
        heading={
          <>
            {/* H1 #1 (The Only H1) */}
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Elite Level
              <br />
              <span className="text-[#1095D9]">Pest Control Fumigation Services</span>
            </h1>
          </>
        }
        subHeading="Deep Penetration. Zero Residue. Total Eradication."
        desc={
          <>
            Resolve severe infestations and protect your cargo with Orion Pest Control. As a top-rated provider of{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              pest control services
            </Link>
            , our professional Fumigation services are fast, compliant, and leave no residue. Established in 1998, we bring 27+ years of expertise and have proudly served 5K+ Businesses.
          </>
        }
        stats={["Government Approved", "ISPM-15 Compliant", "Zero Residue"]}
        imageStyle="absolute w-[90%] h-[90%] top-10 left-0 z-[10px] rounded-full"
      />

      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/fumigation.png"
        heading={
          <>
            {/* H2 #1 */}
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Fumigation services for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc={
          <>
            Certain pests hide deep inside goods, wooden pallets, and structural frameworks where sprays cannot reach. Our certified technicians use top-tier{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              Pest control solutions
            </Link>{" "}
            and advanced gas treatments to penetrate every crevice, ensuring 100% eradication of pests at all life stages.
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
              <span className="text-[#1095D9]"> Your Assets</span>
            </h3>
          </>
        }
        desc={
          <>
            Our comprehensive fumigation process targets everything from stored product insects to severe wood-boring pests. Whether it's shipping containers or large-scale{" "}
            <Link href="https://www.orionpest.com/residential-pest-control/" className="text-blue-600 hover:underline font-semibold">
              Residential pest control services
            </Link>{" "}
            for extreme infestations, we ensure complete structural safety and compliance.
          </>
        }
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="DEEP STRUCTURAL ERADICATION"
        heading={
          <>
            {/* H3 #2 */}
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
              Comprehensive Fumigation Solutions
              <br />
              <span className="text-[#0094DA]">for Every Need.</span>
            </h3>
          </>
        }
        desc={
          <>
            Whether you require import/export compliance for a warehouse, or deep structural eradication for a commercial building, our nationwide network and dedicated{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              Pest Control Services Kolkata
            </Link>{" "}
            ensure your property and goods remain completely protected.
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
              <span className="text-[#0094DA]">Enterprises & Homes</span> Across India
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
              Trusted by 5K+ Businesses.
              <br />
              <span className="text-[#0094DA]">Reliable Fumigation,</span>{" "}
              <span className="text-[#2F3293]">Every Time.</span>
            </h3>
          </>
        }
        desc="See why facility managers, exporters, and homeowners trust Orion Pest Control for safe, compliant, and highly effective pest control fumigation services."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/home.png"
        image2="/Images/services/fumigation.png"
        name="Fumigation"
        tagline="Strict safety protocols. Zero residue."
        desc={
          <>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 mt-4">
              Fumigation requires absolute expertise. Our Pest control fumigation services follow rigorous regulatory protocols to ensure your property is 100% safe, aerated, and entirely residue-free before reentry is permitted.
            </p>
            <br />
          </>
        }
        childSafeStats={childSafeStats}
      />

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20">
        <FAQSection image="/Images/services/fumigation.png" faqs={faqs} />
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl border border-slate-100 bg-[#F9FAFE] p-6 sm:p-8 shadow-lg max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto mt-10">
          <SupportCard
            icon={<Phone size={26} />}
            title="Need Immediate Assistance?"
            text="Call us now for quick support"
            highlight="1800 419 8181"
          />
          <SupportCard
            icon={<CalendarDays size={26} />}
            title="Schedule an Assessment"
            text="Book a professional inspection"
            highlight="At your convenience"
          />
          <SupportCard
            icon={<ShieldCheck size={26} />}
            title="Safe. Compliant. Reliable."
            text="Trusted by 5K+ Businesses"
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
                Protect your commodities and structures before severe infestations cause critical damage. Book our expert Pest control fumigation services today.
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
                src="/Images/services/fumigation.png"
                alt="Fumigation Services"
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
