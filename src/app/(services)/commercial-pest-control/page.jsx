// import React from "react";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// export async function generateMetadata() {
//   const page = await getPageData("commercial-pest-control");
//   return {
//     title: page?.metaTitle || "Commercial Pest Control",
//     description: page?.metaDescription || "",
//   };
// }

// export default function page() {
//   return (
//     <div className="w-full pb-80">
//       <PageData segment={"commercial-pest-control"}>
//       <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
//         <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">
//           Commercial Pest Control Services
//         </h2>
//         <p className="mt-10 text-lg font-bold text-black">
//           Pest Management Services for Your Business
//         </p>
//         <p className="mt-3 text-lg font-bold text-black">A TRUSTED PROVIDER OF PEST CONTROL SOLUTIONS FOR OVER 20 YEARS</p>
//         <p className="mt-1 text-lg">
//           Pest infestation in a commercial environment can make a financial
//           impact on your business. Just one pest attack is enough to make a
//           negative publicity, with the instant sharing of information through
//           Social Media. We can help you from such consequences before they
//           destroy your reputation.
//         </p>
//         <p className="text-[#0094DA] text-center mt-6 text-xl font-bold">COMMERCIAL PEST CONTROL SERVICES FOR ALL KIND OF BUSINESSES</p>
//         <p className="mt-3 text-lg font-bold text-black">Restaurants and Hotels</p>
//         <p className="mt-1 text-lg">
//           Negative experience of customers during dining will directly affect
//           your business. The presence of pests can damage your brand’s
//           reputation. Nowadays customers give more priority to neatness and
//           health. Hygiene surroundings ensures that food prepared for your
//           customers is safe to eat. Our specialists can provide pest control for
//           restaurants and hotels. We have the key to maintain your reputation.
//         </p>
//         <p className="mt-3 text-lg font-bold text-black">Corporate Offices and Buildings</p>
//         <p className="mt-1 text-lg">
//           Pest infestation can interrupt your office time and employees feel
//           they are in risk. Reasons behind risk is that pests can spread
//           diseases, damage to properties, equipment and buildings. Orion has
//           expert pest management specialists. Our services are based on your
//           business needs.
//         </p>
//         <p className="mt-3 text-lg font-bold text-black">Private Hospitals and Nursing Homes</p>
//         <p className="mt-1 text-lg">
//           We all know that pests cause serious health issues, that they transmit
//           pathogenic germs and spread diseases. Patients, staff, and visitors
//           needs safer and hygienic environment. Patient treatment and
//           accommodation facilities should be clean and sterile as possible to
//           minimise the risk. Orion Pest Solutions Pvt Ltd have a team of pest
//           management experts to solve the pest problems quickly.
//         </p>
//         <p className="mt-3 text-lg font-bold text-black">Schools and Other Educational Institutions</p>
//         <p className="mt-1 text-lg">
//           Schools and educational institutions should be safe for students and
//           staffs. We have to keep these surroundings protected from unwanted
//           pests. Pest infestation in a school will make a negative effect on
//           institutions reputation. Pest management with expert technicians will
//           make you safer.
//         </p>
//         <p className="mt-3 text-lg font-bold text-black">Godowns and Food Processing Plants</p>
//         <p className="mt-1 text-lg">
//           Pests can damage products,services and your brand name.Pest management
//           provides several benefits. People have no idea how to deal with
//           unwanted pests. Orion Pest management provides several services with
//           benefits, quick response within no time and immediate result is
//           guaranteed.
//         </p>
//         <p className="text-[#0094DA] text-center mt-6 text-xl font-bold">Key benefits you get from commercial pest control services</p>
//         <p className="mt-1 text-lg">
//           Pest infestation in various commercial setups can have a few
//           advantages when contrasting it with controlling insects like rodents,
//           bugs or termites all alone. We are educated professionals who realize
//           where to deal with and how to discuss Termite, Cockroach and other
//           insects. We are furnishing few reasons why should you opt for
//           commercial pest control services.
//         </p>
//         <p className="mt-1 text-lg">
//           Paying a normal expense in advance can include and cost a few thousand
//           rupees every year. Pests like Termites manipulates businesses know
//           precisely what to look for, and the cost of their service contrasted
//           with repairing delayed termite harm. Orion pest offers you flexibility
//           in pricing and satisfactory work in terms of extermination of your
//           termite, cockroach and other insects.
//         </p>
//         <p className="mt-3 text-lg font-bold text-black">
//           We provide the highest levels of risk management, reassurance and
//           responsiveness to customers across multi-site and single site
//           operations.
//         </p>
//         <p className="mt-1 text-lg">
//           Whether it is a restaurant or commercial office, in order to maintain
//           world-class quality of your business, engaging experts of commercial
//           pest control is a smart decision.
//         </p>
//       </div>
//       </PageData>
//     </div>
//   );
// }

import Image from "next/image";
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
// import ChildSafeSection from "@/components/services/ChildSafeSection";

export async function generateMetadata() {
  const page = await getPageData("commercial-control");
  return {
    title: page?.metaTitle || "Commercial Control",
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
  "Advanced Anti- Commercial Solutions",
  "Long-Term Monitoring & Warranty",
];

const leftFeature = [
  {
    heading: "Target Hidden Colonies",
    desc: "Advanced detection identifies  commercial activity before major structural damage occurs.",
  },
  {
    heading: "Prevent Future Damage",
    desc: "Protect your investment with long-lasting  commercial prevention treatments.",
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
    heading: "Comprehensive  Commercial Protection",
    desc: "Complete structural protection with advanced anti-ant technology.",
    image: "/Images/services/ant2.png",
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
    desc: "Protect your property from costly  commercial damage with preventive care.",
    image: "/Images/icon/vector3.png",
    bgColor: "#FFF1F2",
  },
];

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
//     title: "Trusted Since 1970",
//     desc: "India's trusted  commercial specialists.",
//     bgColor: "#DEE9FC",
//     color: "#2F3293",
//     icon: House,
//   },
// ];

const faqs = [
  {
    id: "01",
    question: "How do I know if my home has ants?",
    answer:
      "Common signs include mud tubes, hollow-sounding wood, discarded wings, damaged wooden furniture, and unexplained cracks. Schedule a professional inspection for confirmation.",
  },
  {
    id: "02",
    question: "How long does  commercial treatment take?",
    answer:
      "Most  commercial  commercial treatments are completed within a few hours, depending on the size of the property and the severity of infestation.",
  },
  {
    id: "03",
    question: "Is  commercial treatment safe for children and pets?",
    answer:
      "Yes. Orion uses government-approved  commercial treatment solutions that are safe when applied by certified professionals.",
  },
  {
    id: "04",
    question: "How long does  commercial protection last?",
    answer:
      "Our treatments provide long-term protection, and preventive maintenance can significantly extend effectiveness.",
  },
  {
    id: "05",
    question: "Do you provide  commercial warranties?",
    answer:
      "Yes. Selected  commercial treatment plans include service warranties for additional peace of mind.",
  },
  {
    id: "06",
    question: "How much does  commercial treatment cost?",
    answer:
      "The cost depends on property size, infestation level, and treatment type. Contact us for a free site inspection and personalized quotation.",
  },
];

export default function page() {
  return (
    <div className="w-full">
      {/* Hero Section */}

      <HeroSection
        image="/Images/services/commercial.png"
        topbadge="ANT PEST CONTROL SERVICES"
        heading={
          <>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
              Say Goodbye to Pests With
              <br />
              <span className="text-[#1095D9]">Commercial Pest Control</span>
            </h1>
          </>
        }
        subHeading="Safe. Effective. Long-Lasting Protection."
        desc="Protect your home from hidden  commercial damage with Orion Pest Control. Our advanced  commercial treatment solutions eliminate active infestations and provide long-lasting protection for homes, offices, and commercial properties. Safe, effective, and trusted since 1970."
        stats={["Safe for Family", "Certified Experts", "Long-Term Protection"]}
        imageStyle="absolute w-[90%] h-[90%] top-10 left-0 z-[10px] rounded-full"
      />
      {/* Advanced Control Section */}
      <AdvanceControl
        image="/Images/services/ant5.png"
        heading={
          <>
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Commercial Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
          </>
        }
        desc="Birds silently weaken wooden structures before visible damage appears. Our experienced technicians use modern detection methods and proven treatment techniques to eliminate ants from the source while preventing future infestations."
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
        desc="Our comprehensive  commercial control process protects every vulnerable area of your property, ensuring complete structural safety and long-lasting defense against ants."
        list={list2}
        image="/Images/services/commercial2.png"
      />

      {/* Diagram Features Info Section */}
      <Diagram
        topbadge="COMPLETE STRUCTURAL PROTECTION"
        heading={
          <>
          <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
            Complete Commercial Control
            <br />
            <span className="text-[#0094DA]">at Every Place.</span>
          </h2>
          </>
        }
        desc="Whether it's a home, office, warehouse, hotel, or commercial building, our specialized  commercial treatment keeps every property protected against hidden  commercial attacks."
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
            <span className="text-[#0094DA]">Commercial Free,</span>{" "}
            <span className="text-[#2F3293]">Every Time.</span>
          </h2>
          </>
        }
        desc="See why homeowners, businesses, and builders trust Orion Pest Control for dependable  commercial protection and exceptional service."
      />

      {/* Child Safe Environment Highlight Grid */}
      {/* <ChildSafeSection
        image1="/Images/services/ commercial1.png"
        image2="/Images/services/ant4.png"
        name=" Commercial"
        tagline="Safe for your little ones. Tough on ants."
        desc="Our eco-friendly  commercial treatments provide maximum protection while remaining safe for your children, pets, and the environment. Enjoy complete peace of mind without compromising your family's safety."
        childSafeStats={childSafeStats}
      /> */}

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 mt-20">
        <FAQSection image="/Images/services/cockroach3.png" faqs={faqs} />
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
                <span className="text-[#2F3293]"> Commercial-Free.</span>
              </h2>

              <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
                Protect your property before ants cause costly structural
                damage. Book a professional commercial inspection with our
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
                src="/Images/services/ant.png"
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
