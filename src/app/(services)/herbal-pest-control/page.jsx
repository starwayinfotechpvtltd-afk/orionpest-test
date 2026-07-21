// import React from "react";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("herbal-pest-control");
//   return {
//     title: page?.metaTitle || "Herbal Pest Control",
//     description: page?.metaDescription || "",
//   };
// }


// export default function page() {
//   return (
//     <div className="w-full pb-80">
//       <PageData segment={"herbal-pest-control"}>
//       <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
//         <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">
//           Herbal Pest Control Services
//         </h2>
//         <p className="mt-10 text-lg">
//           At Orion Pest Control, we believe in offering our customers
//           innovative, environmentally-friendly, and sustainable pest management
//           solutions. Our Herbal Pest Control services are designed to protect
//           your home and business while promoting a healthier, greener
//           environment. Say goodbye to harmful chemicals and embrace nature’s
//           power with our safe and effective herbal treatments.
//         </p>
//         <p className="mt-3 text-lg font-bold text-black">
//           Why Choose Herbal Pest Control?
//         </p>
//         <p className="text-md font-bold text-black">
//           Eco-Friendly and Non-Toxic
//         </p>
//         <p className="mt-1 text-lg">
//           Unlike traditional chemical pest control methods, herbal pest control
//           uses natural plant-based solutions. These non-toxic ingredients
//           effectively eliminate pests while being safe for your family, pets,
//           and the environment. By choosing herbal pest control, you help reduce
//           the use of harmful chemicals that can pollute water, soil, and air.
//         </p>
//         <p className="text-md font-bold text-black mt-5">
//           Targeted Pest Control Solutions
//         </p>
//         <p className="mt-1 text-lg">
//           Herbal pest control targets a wide range of common pests, including
//           ants, mosquitoes, spiders, cockroaches, and rodents, without harming
//           beneficial insects or wildlife. Our herbal formulations act as
//           repellents or disrupt the pests’ natural behavior, leading to
//           long-term pest control results.
//         </p>
//         <p className="mt-5 text-md font-bold text-black">
//           Safe for Children and Pets
//         </p>
//         <p className="mt-1 text-lg">
//           One of the primary advantages of herbal pest control is that it is
//           safe for everyone in your household, including children and pets. You
//           no longer have to worry about the risks associated with toxic
//           pesticides that can harm your loved ones.
//         </p>
//         <p className="mt-5 text-md font-bold text-black">
//           Sustainable and Natural
//         </p>
//         <p className="mt-1 text-lg">
//           Our herbal pest control services are in line with our commitment to
//           sustainability. By using natural remedies such as essential oils,
//           plant extracts, and herbal powders, we provide an eco-conscious
//           solution that doesn’t contribute to the growing problem of pesticide
//           resistance.
//         </p>
//         <p className="mt-3 text-lg font-bold text-black">
//           How Does Herbal Pest Control Work?
//         </p>
//         <p className="mt-3 text-md font-bold text-black">
//           Herbal pest control uses plant-based substances that are known to
//           repel or eliminate pests. Some of the key ingredients in our
//           treatments include
//         </p>
//         <ul className="list-disc ml-4 text-lg flex flex-col gap-2 mt-3">
//           <li>
//             Peppermint Oil: A natural repellent for ants, spiders, and rodents.
//           </li>
//           <li>
//             Cedarwood: Effective for repelling moths, termites, and other
//             insects.
//           </li>
//           <li>
//             Neem Oil: A powerful pest deterrent for a wide range of insects,
//             including mosquitoes, beetles, and aphids.
//           </li>
//           <li>Eucalyptus: Helps repel mosquitoes and other flying insects.</li>
//           <li>
//             Lemongrass: Known for repelling pests like ticks, fleas, and flies.
//           </li>
//         </ul>
//         <p className="mt-5 text-lg">
//           When these herbal solutions are applied strategically around your home
//           or business, they create an environment that pests find uncomfortable,
//           leading them to move elsewhere without causing harm to your property
//           or the ecosystem.
//         </p>
//         <p className="mt-5 text-lg font-bold text-black">
//           Our Herbal Pest Control Process
//         </p>
//         <p className="mt-5 text-md font-bold text-black">
//           At Orion Pest Control, we take a personalized approach to every pest
//           issue. Our process is simple, efficient, and environmentally friendly:
//         </p>
//         <ol className="list-decimal ml-4 text-lg mt-3 flex flex-col gap-2">
//           <li>
//             Inspection: We conduct a thorough inspection of your property to
//             identify the types of pests and any potential entry points.
//           </li>
//           <li>
//             Tailored Treatment Plan: Based on the inspection, we craft a
//             customized herbal pest control plan that is designed to address the
//             specific needs of your space.
//           </li>
//           <li>
//             Herbal Treatment Application: We apply our eco-friendly, herbal pest
//             control solutions to both the interior and exterior of your
//             property.
//           </li>
//           <li>
//             Follow-Up: Our team will monitor the effectiveness of the treatment
//             and offer ongoing support as needed to ensure long-term pest
//             control.
//           </li>
//         </ol>
//         <p className="mt-3 text-lg font-bold text-black">
//           Benefits of Choosing Orion Pest Control’s Herbal Solutions
//         </p>
//         <ul className="list-disc ml-4 text-lg mt-3 flex flex-col gap-2">
//           <li>
//             No Harsh Chemicals: Our treatments are made from natural ingredients
//             that are safe for people, pets, and plants.
//           </li>
//           <li>
//             Long-Term Protection: Our herbal remedies work to keep pests at bay
//             for the long term, minimizing the need for frequent reapplications.
//           </li>
//           <li>
//             Affordable and Effective: Our herbal pest control services offer a
//             cost-effective alternative to traditional pest control methods, with
//             sustainable results.
//           </li>
//           <li>
//             Preventative Care: We don’t just eliminate pests—we help prevent
//             future infestations by identifying and addressing the root cause.
//           </li>
//         </ul>
//         <p className="mt-3 text-lg font-bold text-black">
//           Pests We Treat with Herbal Solutions
//         </p>
//         <ul className="list-disc ml-4 text-lg mt-3 flex flex-col gap-2">
//           <li>
//             Ants: Herbal oils such as peppermint and cinnamon are highly
//             effective in driving ants away.
//           </li>
//           <li>
//             Mosquitoes: Eucalyptus and citronella oils act as natural mosquito
//             repellents.
//           </li>
//           <li>
//             Rodents: Strong-smelling herbs like peppermint and bay leaves can
//             deter rodents from entering your space.
//           </li>
//           <li>
//             Spiders: Essential oils like tea tree and lavender discourage
//             spiders from nesting in your home.
//           </li>
//         </ul>
//         <p className="mt-5 text-lg font-bold text-black text-center">
//           Get Started with Herbal Pest Control Today
//         </p>
//         <p className="mt-5 text-lg">
//           At Orion Pest Control, we are committed to providing safe, natural,
//           and effective pest control solutions that align with your eco-friendly
//           values. Our herbal pest control services are the perfect choice for
//           anyone looking to protect their home or business from pests without
//           compromising on safety or environmental responsibility.
//         </p>
//         <p className="mt-3 text-lg">
//           Contact us today to schedule a consultation and learn more about how
//           our herbal pest control solutions can give you peace of mind, knowing
//           your property is safe and pest-free!
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
//   const page = await getPageData("herbal-control");
//   return {
//     title: page?.metaTitle || "Herbal Control",
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
//   "Advanced Anti-  Herbal Solutions",
//   "Long-Term Monitoring & Warranty",
// ];

// const leftFeature = [
//   {
//     heading: "Target Hidden Colonies",
//     desc: "Advanced detection identifies   herbal activity before major structural damage occurs.",
//   },
//   {
//     heading: "Prevent Future Damage",
//     desc: "Protect your investment with long-lasting   herbal prevention treatments.",
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
//     heading: "Comprehensive   Herbal Protection",
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
//     desc: "Protect your property from costly   herbal damage with preventive care.",
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
//     desc: "India's trusted   herbal specialists.",
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
//     question: "How long does   herbal treatment take?",
//     answer:
//       "Most   herbal   herbal treatments are completed within a few hours, depending on the size of the property and the severity of infestation.",
//   },
//   {
//     id: "03",
//     question: "Is   herbal treatment safe for children and pets?",
//     answer:
//       "Yes. Orion uses government-approved   herbal treatment solutions that are safe when applied by certified professionals.",
//   },
//   {
//     id: "04",
//     question: "How long does   herbal protection last?",
//     answer:
//       "Our treatments provide long-term protection, and preventive maintenance can significantly extend effectiveness.",
//   },
//   {
//     id: "05",
//     question: "Do you provide   herbal warranties?",
//     answer:
//       "Yes. Selected   herbal treatment plans include service warranties for additional peace of mind.",
//   },
//   {
//     id: "06",
//     question: "How much does   herbal treatment cost?",
//     answer:
//       "The cost depends on property size, infestation level, and treatment type. Contact us for a free site inspection and personalized quotation.",
//   },
// ];

// export default function page() {
//   return (
//     <div className="w-full">
//       {/* Hero Section */}

//       <HeroSection
//         image="/Images/services/herbal.png"
//         topbadge="ANT PEST CONTROL SERVICES"
//         heading={
//           <>
//             <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
//               Say Goodbye to Pests With 
//               <br />
//               <span className="text-[#1095D9]">Herbal Pest Control</span>
//             </h1>
//           </>
//         }
//         subHeading="Safe. Effective. Long-Lasting Protection."
//         desc="Protect your home from hidden   herbal damage with Orion Pest Control. Our advanced   herbal treatment solutions eliminate active infestations and provide long-lasting protection for homes, offices, and  herbal properties. Safe, effective, and trusted since 1970."
//         stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
//         imageStyle="absolute w-[90%] h-[90%] top-10 left-0 z-[10px] rounded-full"
//       />
//       {/* Advanced Control Section */}
//       <AdvanceControl
//         image="/Images/services/ant5.png"
//         heading={
//           <>
//             <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
//               Advanced Herbal Control for
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
//         desc="Our comprehensive   herbal control process protects every vulnerable area of your property, ensuring complete structural safety and long-lasting defense against ants."
//         list={list2}
//         image="/Images/services/home.png"
//       />

//       {/* Diagram Features Info Section */}
//       <Diagram
//         topbadge="COMPLETE STRUCTURAL PROTECTION"
//         heading={
//           <>
//           <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
//             Complete Herbal Control
//             <br />
//             <span className="text-[#0094DA]">at Every Place.</span>
//           </h2>
//           </>
//         }
//         desc="Whether it's a home, office, warehouse, hotel, or  herbal building, our specialized   herbal treatment keeps every property protected against hidden   herbal attacks."
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
//             <span className="text-[#0094DA]">Harbal Free,</span>{" "}
//             <span className="text-[#2F3293]">Every Time.</span>
//           </h2>
//           </>
//         }
//         desc="See why homeowners, businesses, and builders trust Orion Pest Control for dependable   herbal protection and exceptional service."
//       />

//       {/* Child Safe Environment Highlight Grid */}
//       <ChildSafeSection
//         image1="/Images/services/herbal2.png"
//         image2="/Images/services/ant4.png"
//         name="  Herbal"
//         tagline="Safe for your little ones. Tough on ants."
//         desc={
//           <>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 mt-4">
//               Our eco-friendly   herbal treatments provide maximum protection while remaining safe for your children, pets, and the environment. Enjoy complete peace of mind without compromising your family's safety.
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
//                 <span className="text-[#2F3293]">  Herbal-Free.</span>
//               </h2>

//               <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
//                 Protect your property before ants cause costly structural
//                 damage. Book a professional   herbal inspection with our
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
  const page = await getPageData("herbal-control");
  return {
    title: page?.metaTitle || "Herbal Pest Control Services | Eco-Friendly & Safe Pest Solutions",
    description: page?.metaDescription || "Choose herbal pest control services for a safe, chemical-free approach. Eco-friendly pest solutions ideal for homes and workplaces across India.",
  };
}

const list1 = [
  "100% Plant-Based Extracts",
  "Chemical-Free Formulations",
  "Odorless & Stain-Free",
  "No Need to Vacate Premises",
];

const list2 = [
  "Detailed Property Inspection",
  "Eco-Friendly Treatment Plan",
  "Targeted Herbal Gel Baiting",
  "Long-Term Natural Protection",
];

const leftFeature = [
  {
    heading: "Target Hidden Pests Naturally",
    desc: "Our herbal gels and botanical sprays identify and eliminate roaches, ants, and other pests without harsh chemical fumes.",
  },
  {
    heading: "Prevent Chemical Exposure",
    desc: "Protect your family's health and your indoor air quality by choosing natural pest management instead of synthetic pesticides.",
  },
];

const rightFeature = [
  {
    heading: "Safe & Eco-Friendly",
    desc: "Environmentally responsible Herbal Pest Control that is completely safe for children, pets, pregnant women, and the elderly.",
  },
  {
    heading: "Long-Lasting Protection",
    desc: "Professional-grade botanical treatments offering extended protection against pest re-infestation.",
  },
];

const cards = [
  {
    heading: "Kitchens & Dining Areas",
    desc: "100% safe to apply near food storage, cabinets, and dining areas without emptying your kitchen.",
    image: "/Images/services/herbal.png",
    bgColor: "#FFF6DE",
  },
  {
    heading: "Hospitals & Clinics",
    desc: "Zero toxic fumes and completely odorless treatments perfect for sensitive healthcare environments.",
    image: "/Images/icon/vector2.png",
    bgColor: "#EEF4FF",
  },
  {
    heading: "Homes with Pets & Kids",
    desc: "Worry-free natural pest control ensuring your loved ones are safe from chemical hazards.",
    image: "/Images/icon/vector3.png",
    bgColor: "#FFF1F2",
  },
];

const childSafeStats = [
  {
    title: "100% Non-Toxic",
    desc: "Safe treatment methods using natural, plant-derived ingredients.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: ShieldCheck,
  },
  {
    title: "Odorless & Fume-Free",
    desc: "No lingering smells or harmful chemical off-gassing.",
    bgColor: "#DEE9FC",
    color: "#2F3293",
    icon: Shield,
  },
  {
    title: "Lasting Natural Defense",
    desc: "Extended protection against recurring household pests.",
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
    question: "What is Herbal Pest Control?",
    answer:
      "Herbal Pest Control uses plant-derived, eco-friendly ingredients and essential oils instead of harsh synthetic chemicals to eliminate pests like cockroaches and ants safely.",
  },
  {
    id: "02",
    question: "Do I need to empty my kitchen for the treatment?",
    answer:
      "No! One of the biggest benefits of herbal gel treatments is that you do not need to empty cabinets, cover food items, or leave the house.",
  },
  {
    id: "03",
    question: "Is Herbal Pest Control safe for children, pets, and pregnant women?",
    answer:
      "Absolutely. Our treatments are 100% non-toxic, odorless, and fume-free, making them the safest option for sensitive individuals, babies, and pets.",
  },
  {
    id: "04",
    question: "How long does it take for the herbal treatment to work?",
    answer:
      "You will notice a significant reduction in pest activity within 24 to 48 hours as pests consume the herbal baits and carry it back to their colonies.",
  },
  {
    id: "05",
    question: "Does the herbal treatment leave any bad smell or stains?",
    answer:
      "No. Our herbal gels and sprays are completely odorless (or have a mild pleasant botanical scent) and do not stain walls, floors, or furniture.",
  },
  {
    id: "06",
    question: "How much does Herbal Pest Control cost?",
    answer:
      "The cost depends on the size of your property and the extent of the infestation. Contact us for a free site inspection and a customized quotation.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/herbal.png"
        topbadge="ECO-FRIENDLY PEST CONTROL"
        heading={
          <>
            {/* H1 #1 (The Only H1) */}
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Say Goodbye to Pests With 
              <br />
              <span className="text-[#1095D9]">Herbal Pest Control</span>
            </h1>
          </>
        }
        subHeading="Safe. Natural. Long-Lasting Protection."
        desc={
          <>
            Protect your home from pests safely with Orion Pest Control. As a trusted{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              Pest control company in India
            </Link>
            , our advanced Herbal Pest Control solutions eliminate active infestations using 100% plant-based, non-toxic ingredients. Established in 1998, we bring 27+ years of expertise and have proudly served 5K+ Businesses.
          </>
        }
        stats={["100% Child & Pet Safe", "No Harmful Chemicals", "Odorless Treatment"]}
        imageStyle="absolute w-[90%] h-[90%] top-10 left-0 z-[10px] rounded-full"
      />

      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/herbal2.png"
        heading={
          <>
            {/* H2 #1 */}
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Herbal Pest Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc={
          <>
            Standard chemical sprays can leave toxic residues and harmful fumes. Our experienced technicians use natural, botanical{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              Pest control solutions
            </Link>{" "}
            and proven baiting techniques to eliminate pests at their source while keeping your indoor air quality perfectly safe.
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
              <span className="text-[#1095D9]"> Every Corner</span>
            </h3>
          </>
        }
        desc={
          <>
            Our comprehensive herbal control process protects every vulnerable area of your property. For families, our green{" "}
            <Link href="https://www.orionpest.com/residential-pest-control/" className="text-blue-600 hover:underline font-semibold">
              Residential pest control services
            </Link>{" "}
            ensure complete hygiene and long-lasting defense against common household pests without chemical exposure.
          </>
        }
        list={list2}
        image="/Images/services/home.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="CHEMICAL-FREE PROTECTION"
        heading={
          <>
            {/* H3 #2 */}
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
              Complete Natural Control
              <br />
              <span className="text-[#0094DA]">at Every Place.</span>
            </h3>
          </>
        }
        desc={
          <>
            Whether it's a home, office, hospital, hotel, or food processing facility, our specialized Herbal Pest Control keeps every property protected. Looking for nationwide coverage or dedicated{" "}
            <Link href="https://www.orionpest.com" className="text-blue-600 hover:underline font-semibold">
              Pest Control Services Kolkata
            </Link>
            ? We deliver safe, sustainable results.
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
              <span className="text-[#0094DA]">Homes & Businesses</span> Across India
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
              <span className="text-[#0094DA]">Natural Protection,</span>{" "}
              <span className="text-[#2F3293]">Every Time.</span>
            </h3>
          </>
        }
        desc="See why homeowners, schools, and hospitals trust Orion Pest Control for dependable herbal protection and exceptional, safe service."
      />

      {/* Child Safe Environment Highlight Grid */}
      <ChildSafeSection
        image1="/Images/services/herbal2.png"
        image2="/Images/services/herbal.png"
        name="Herbal"
        tagline="Safe for your little ones. Tough on pests."
        desc={
          <>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 mt-4">
              Our eco-friendly Herbal Pest Control treatments provide maximum eradication while remaining completely safe for your children, pets, and the environment. Backed by 27+ years of expertise, enjoy complete peace of mind without compromising your family's health.
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
            title="Safe. Eco-Friendly. Reliable."
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
                Protect your property from pests without exposing your loved ones to toxic chemicals. Book a professional Herbal Pest Control inspection with our certified experts today.
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
                src="/Images/services/herbal.png"
                alt="Herbal Pest Control"
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
