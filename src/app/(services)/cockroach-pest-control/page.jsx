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

"use client";
import Image from "next/image";
import {
  ShieldCheck,
  FlaskConical,
  BadgeCheck,
  Phone,
  Users,
  Building2,
  MapPin,
  Headphones,
  ArrowRight,
  Crosshair,
  Clock3,
  Shield,
  Target,
  Leaf,
  CalendarDays,
  House,
  Heart,
  Mail,
} from "lucide-react";
import Link from "next/link";
import TestimonialsSection from "@/components/ui/Testimonials";
import FAQSection from "@/components/ui/FAQ";
import Form from "@/components/ui/Form";

export async function generateMetadata() {
  const page = await getPageData("cockroach-control");
  return {
    title: page?.metaTitle || "Cockroach Control",
    description: page?.metaDescription || "",
  };
}

export default function page() {
  const locations = [
    {
      icon: "/Images/icon/icon2.png",
      title: "Commercial",
    },
    {
      icon: "/Images/icon/icon6.png",
      title: "Hotels",
    },
    {
      icon: "/Images/icon/icon1.png",
      title: "Residential",
    },
    {
      icon: "/Images/icon/icon7.png",
      title: "Restaurants",
    },
    {
      icon: "/Images/icon/icon5.png",
      title: "Warehouses",
      active: true,
    },
  ];

  const logos = [
    "/Images/clients/tcs.png",
    "/Images/clients/birla.png",
    "/Images/clients/fortis.png",
    "/Images/clients/redbull.png",
    "/Images/clients/nykaa.png",
    "/Images/clients/visa.png",
    "/Images/clients/hpgas.png",
  ];

  const card = [
    {
      heading: "Complete Cockroach Control for Every Space",
      desc: "Advanced treatment to eliminate cockroaches from every corner.",
      bgColor: "#FFF6DE",
      image: "/Images/icon/vector1.png",
    },
    {
      heading: "Expert Inspection & Smart Solutions",
      desc: "Detailed inspection and targeted methods for lasting results.",
      bgColor: "#EEF4FF",
      image: "/Images/icon/vector2.png",
    },
    {
      heading: "Long-Lasting Protection You Can Rely On",
      desc: "Safe, eco-friendly & effective protection for your peace of mind.",
      bgColor: "#FFF1F2",
      image: "/Images/icon/vector3.png",
    },
  ];
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-30 from-white to-[#F4F6F9]">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-1">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-700 tracking-wide text-sm sm:text-base">
                  COCKROACH PEST CONTROL
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[5rem]">
                Say Goodbye to
                <br />
                <span className="text-[#1095D9]">Cockroaches</span>
              </h1>

              <p className="mt-4 md:mt-6 text-lg sm:text-xl text-gray-600 font-medium">
                Safe. Effective. Long-Lasting Protection.
              </p>

              <p className="mt-4 text-gray-500 max-w-xl leading-relaxed text-base sm:text-lg md:text-xl">
                Over five decades expert pest control trusted by millions of
                homes and businesses across India. Our proven methods ensure a
                clean, healthy and roach-free environment.
              </p>

              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
                <Feature
                  icon={<ShieldCheck size={30} />}
                  title="Safe for Family & Pets"
                />
                <Feature
                  icon={<FlaskConical size={30} />}
                  title="Odourless Treatment"
                />
                <Feature
                  icon={<BadgeCheck size={30} />}
                  title="Government Approved"
                />
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link className="w-full sm:w-auto justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer" href="/contact">
                  BOOK FREE INSPECTION
                  <ArrowRight size={18} />
                </Link>

                <Link className="w-full sm:w-auto justify-center border border-gray-300 hover:border-yellow-400 px-6 sm:px-8 py-4 rounded-xl flex items-center gap-3 font-medium text-sm sm:text-base" href='tel:1800 419 8181'>
                  <Phone size={18} />
                  CALL 1800 419 8181
                </Link>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="flex justify-center order-1 lg:order-2 overflow-visible py-8 lg:py-0">
              {/* Circle Background scaled responsively */}
              <div className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] rounded-full bg-linear-90 from-white via-[#FEC42A]/50 to-[#FEC42A]">
                <div className="relative -left-10 z-[1px] h-[85%] w-[88%] rounded-full mx-auto mt-[7%]">
                  <Image
                    src="/Images/bugs/bg.png"
                    alt="Cockroach Pest Control"
                    fill
                    className="object-cover drop-shadow-2xl rounded-full"
                  />
                </div>
                {/* Image Card Overlap scaled to container layout */}
                <div className="absolute w-[105%] h-[105%] -top-[8%] -left-[15%] z-[10px]">
                  <Image
                    src="/Images/bugs/cockroach6.png"
                    alt="Cockroach Pest Control"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Badge repositioned neatly for smaller displays */}
                <div className="absolute -right-4 top-4 sm:right-4 sm:top-10 lg:right-10 lg:top-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-3 sm:p-6 w-32 sm:w-48 flex flex-col justify-center items-center">
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                    <ShieldCheck className="text-yellow-500 w-6 h-6 sm:w-12 sm:h-12" />
                  </div>
                  <p className="text-gray-600 text-[10px] sm:text-sm text-center leading-tight">
                    India's Most Trusted Pest Control Brand
                  </p>
                  <span className="text-yellow-500 font-bold text-xs sm:text-base mt-1 sm:mt-2">
                    Since 1970
                  </span>
                  <div className="w-12 sm:w-20 h-[2px] sm:h-[3px] bg-yellow-500 mt-1 sm:mt-2 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="mt-12 lg:-mt-5 bg-white rounded-2xl border-[#F6F6F8] border shadow-sm relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#F6F6F8]">
              <Stat
                icon={<Users size={35} />}
                title="50+ Years"
                subtitle="of Expertise"
                color="#FDC700"
              />
              <Stat
                icon={<Building2 size={35} />}
                title="Serving 1M+ Homes"
                subtitle="& Businesses"
                color="#FDC700"
              />
              <Stat
                icon={<MapPin size={35} />}
                title="Pan India"
                subtitle="Service Network"
                color="#FDC700"
              />
              <Stat
                icon={<Headphones size={35} />}
                title="24×7 Expert"
                subtitle="Support"
                color="#FDC700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Control Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 py-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Left section */}
          <div className="w-full lg:w-[50%]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Advanced Cockroach Control for
              <span className="text-[#1095D9]"> Homes & Businesses</span>
            </h2>
            <p className="text-base sm:text-lg max-w-xl mt-6 text-gray-600">
              Our expert solutions eliminate cockroaches at the source and keep
              your spaces hygienic, safe and healthy. Long-lasting protection
              you can trust.
            </p>
            <div className="mt-8 space-y-2">
              <List
                icon={<Crosshair size={25} />}
                title="Kills Cockroaches at the Source"
                bgColor="#FDD608"
                color="#000"
              />
              <List
                icon={<BadgeCheck size={25} />}
                title="Safe for Family, Pets & Environment"
                bgColor="#FDD608"
                color="#000"
              />
              <List
                icon={<Clock3 size={25} />}
                title="Long-Lasting Protection"
                bgColor="#FDD608"
                color="#000"
              />
            </div>
            <Link className="w-90 justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer mt-10" href="/contact">
                  BOOK FREE INSPECTION
                  <ArrowRight size={18} />
                </Link>
          </div>
          {/* Right section */}
          <div className="w-full lg:w-[50%] flex justify-center relative">
            <div className="relative h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full max-w-2xl">
              <Image
                src="/Images/bugs/cockroach7.png"
                alt="cockroach"
                fill
                className="object-cover rounded-2xl"
              />
              {/* Badge Overlay */}
              <div className="absolute -right-4 top-4 sm:right-4 sm:top-10 lg:right-10 lg:top-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-3 sm:p-6 w-32 sm:w-48 flex flex-col justify-center items-center">
                <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2 sm:mb-4">
                  <ShieldCheck className="text-yellow-500 w-6 h-6 sm:w-12 sm:h-12" />
                </div>
                <p className="text-gray-600 text-[10px] sm:text-sm text-center leading-tight">
                  India's Most Trusted Pest Control Brand
                </p>
                <span className="text-yellow-500 font-bold text-xs sm:text-base mt-1 sm:mt-2">
                  Since 1970
                </span>
                <div className="w-12 sm:w-20 h-[2px] sm:h-[3px] bg-yellow-500 mt-1 sm:mt-2 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Protection Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left section image */}
          <div className="w-full lg:w-[48%] flex justify-center relative order-2 lg:order-1">
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-3xl">
              <Image
                src="/Images/home.png"
                alt="cockroach"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Right section content */}
          <div className="w-full lg:w-[48%] order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Complete Protection for
              <span className="text-[#1095D9]"> Every Corner</span>
            </h2>
            <p className="text-base sm:text-lg max-w-xl mt-4 text-gray-600">
              Cockroaches hide in places you can't see. Our targeted treatment
              reaches deep into hiding spots to ensure a cockroach-free
              environment.
            </p>
            <div className="mt-6 space-y-3">
              <List
                icon={<Crosshair size={25} />}
                title="Targets Hidden Breeding Spots"
                bgColor="#2F3293"
                color="#fff"
              />
              <List
                icon={<BadgeCheck size={25} />}
                title="Prevents Re-infection"
                bgColor="#2F3293"
                color="#fff"
              />
              <List
                icon={<Clock3 size={25} />}
                title="Ideal for Homes, Offices, Restaurants & Commercial Spaces"
                bgColor="#2F3293"
                color="#fff"
              />
            </div>
            <Link className="w-90 justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer mt-10" href="/contact">
                  BOOK FREE INSPECTION
                  <ArrowRight size={18} />
                </Link>
          </div>
        </div>
      </section>

      {/* Diagram Features Info Section */}
      <section className="relative overflow-hidden bg-[#F5F7FB] py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5f7fb_60%)]" />

        <div className="relative mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-8 w-full">
          {/* Top Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex bg-yellow-400 text-[#0D1A63] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-md text-xs sm:text-sm">
              Complete Cockroach Control
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem]">
              Complete Cockroach Control
              <br />
              <span className="text-[#0094DA]">at Every Place.</span>
            </h2>

            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              We provide end-to-end cockroach control solutions tailored for
              every environment. Safe, effective, and long-lasting protection
              you can trust.
            </p>
          </div>

          {/* Main Content Dial Diagram Layout */}
          <div className="relative mt-20 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-20">
            {/* Left Features */}
            <div className="space-y-8 md:space-y-10 w-full sm:max-w-md lg:w-72 order-2 lg:order-1">
              <InfoCard
                icon={<Target size={30} />}
                title="Targets Hidden Breeding Spots"
                description="We eliminate cockroaches where they hide and breed."
              />
              <InfoCard
                icon={<Shield size={30} />}
                title="Prevents Re-Infestation"
                description="Advanced treatment methods ensure longer protection."
              />
            </div>

            {/* Center Circle Ring Group */}
            <div className="relative flex justify-center items-center order-1 lg:order-2 my-6 lg:my-0 scale-75 sm:scale-100">
              <div className="absolute w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] rounded-full border-[10px] sm:border-[14px] border-[#2F3293]" />
              <div className="absolute w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] rounded-full border-[6px] sm:border-[8px] border-blue-200" />
              <div className="absolute top-4 sm:top-6 left-2 w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="absolute top-4 sm:top-6 right-2 w-3 h-3 bg-yellow-400 rounded-full" />

              <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden shadow-2xl border-[6px] sm:border-[10px] border-white">
                <Image
                  src="/Images/icon/icon4.webp"
                  alt="House"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute z-[2] -bottom-5  w-28 sm:w-36 h-28 sm:h-36">
                <Image
                  src="/Images/icon/icon3.png"
                  alt="icon"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8 md:space-y-10 w-full sm:max-w-md lg:w-72 order-3">
              <InfoCard
                icon={<Leaf size={30} />}
                title="Safe & Eco-Friendly"
                description="Non-toxic, odourless and safe for your family and pets."
              />
              <InfoCard
                icon={<CalendarDays size={30} />}
                title="Long-Lasting Protection"
                description="Residual protection for lasting peace of mind."
              />
            </div>
          </div>

          {/* Location Cards Component List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 bg-[#F5F7FB] relative mt-10 lg:-mt-5">
            {locations.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border ${
                  item.active
                    ? "border-blue-600 lg:scale-105"
                    : "border-gray-100"
                }`}
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-blue-50 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.icon}/${index}`}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-[#07155F]">
                  {item.title}
                </h3>
                <div className="mt-3 w-12 h-1 bg-yellow-400 mx-auto rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos / Cards Grid Section */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F3293] leading-tight">
              Preferred by{" "}
              <span className="text-[#0094DA]">Homes & Businesses</span> Across
              India
            </h2>
            <div className="w-24 sm:w-48 h-1 bg-yellow-400 rounded-full mx-auto mt-4" />
          </div>

          {/* Logos Responsive Flex/Grid Grid */}
          <div className="mt-12 md:mt-14">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8 items-center">
              {logos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={logo}
                    alt="brand"
                    width={120}
                    height={50}
                    className="object-contain transition opacity-80 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-200 mt-12" />

          {/* Feature Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 relative z-10">
            {card.map((item, index) => (
              <div key={index}>
                <FeatureCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Absolute Wave Graphics Decorative Accent Vector */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 220"
            className="w-full h-auto min-h-[80px]"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1247E0" />
                <stop offset="100%" stopColor="#0B3CCB" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C360,110 1080,10 1440,60 L1440,75 C1080,25 360,125 0,75 Z"
              fill="#FBBF24"
            />
            <path
              d="M0,80 C360,130 1080,30 1440,80 L1440,220 L0,220 Z"
              fill="url(#waveGradient)"
            />
          </svg>
        </div>
      </section>

      {/* Testimonials Section Component */}
      <section>
        <TestimonialsSection />
      </section>

      {/* Child Safe Environment Highlight Grid */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-0">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left section image element wrapper */}
          <div className="w-full lg:w-[48%] flex justify-center relative order-2 lg:order-1">
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-xl">
              <Image
                src="/Images/home2.png"
                alt="cockroach"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Right section typography card context content layout details stack */}
          <div className="w-full lg:w-[48%] order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#36388D] w-full leading-tight">
              Child Safe
              <span className="text-[#1095D9]"> Cockroach Control,</span>
              Complete Peace of Mind.
            </h2>
            <p className="text-base sm:text-lg max-w-xl mt-4 text-gray-600">
              We use advanced, low-order and non-toxic treatment that eliminate
              cockroaches effectively without harming your children, pets or the
              environment.
            </p>
            <p className="text-base sm:text-lg max-w-xl mt-4 font-semibold text-gray-800">
              Safe for your little ones. Tough on cockroaches.
            </p>
            <div className="bg-[#F3F6FC] rounded-2xl p-4 sm:p-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-6 mt-6">
              <span className="shrink-0">
                <ShieldCheck color="#195ED3" size={50} />
              </span>
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-[#36388D] text-base sm:text-2xl font-semibold leading-tight">
                  SAFE FOR CHILDREN. <br /> SAFE FOR HOMES.
                </p>
                <p className="text-sm lg:text-md text-gray-600">
                  Powerful protection you can trust.
                </p>
              </div>
              <div className="relative w-52 h-32 shrink-0">
                <Image
                  src="/Images/children.png"
                  alt="children"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Extended Stats Matrix Bar Layout */}
        <div className="mt-12 bg-white rounded-2xl border-[#F6F6F8] border shadow-sm max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-[#F6F6F8]">
            <Stat
              icon={<Leaf size={35} />}
              title="Non-toxic & Low Odor"
              subtitle="Safe treatments for your family and pets."
              bgColor="#DEE9FC"
              color="#2F3293"
            />
            <Stat
              icon={<Shield size={35} />}
              title="Deep & targeted action"
              subtitle="Reaches hidden areas and eliminates at the sources"
              bgColor="#DEE9FC"
              color="#2F3293"
            />
            <Stat
              icon={<House size={35} />}
              title="Long Lasting Protection"
              subtitle="Keeps your home protected from re-infestation."
              bgColor="#DEE9FC"
              color="#2F3293"
            />
            <Stat
              icon={<Heart size={35} />}
              title="Trusted by Thousands"
              subtitle="Reliable service for a cleaner, healthier tomorrow."
              bgColor="#DEE9FC"
              color="#2F3293"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Grid Framework Group Section Wrapper */}
      <section className="bg-[#FCFCFD] pb-16 md:pb-20 pt-12">
        <FAQSection />
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
      <section className="relative overflow-hidden bg-[#FEFEFE] py-16 md:py-24"
      style={{
              background: "url('/Images/CTA_background.webp')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>

        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 w-full relative z-[2]">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* LEFT SIDE CONTENT SECTION */}
            <div>
              <p className="font-semibold uppercase tracking-widest text-smsm:text-base">
                <span className="text-blue-600">Get In</span>{" "}
                <span className="text-yellow-500">Touch</span>
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2F3293]">
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

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <div className="text-yellow-500 bg-[#FDF9EE] p-2 rounded-full text-[20px]">
        {icon}
      </div>
      <span className="font-medium text-md w-32">{title}</span>
    </div>
  );
}

function List({ icon, title, bgColor, color }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <div
        className="text-black bg-[#F9CF02] p-2 rounded-full text-[20px] mb-2  "
        style={{ backgroundColor: bgColor, color: color }}
      >
        {icon}
      </div>
      <span className="font-semibold text-md">{title}</span>
    </div>
  );
}

function Stat({ icon, title, subtitle, bgColor, color }) {
  return (
    <div className="p-6 flex items-center gap-4">
      <div
        className={`p-4 rounded-full`}
        style={{ backgroundColor: bgColor, color: color }}
      >
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 text-lg">{title}</h4>

        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-20 h-16 rounded-full border border-[#2F3293] flex items-center justify-center p-1">
        <div className="w-14 h-14 rounded-full bg-[#2F3293] shadow-md flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#07155F] mb-2 text-xl">{title}</h4>

        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ item, index }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-8 shadow-md hover:-translate-y-2 transition-all duration-300`}
      key={index}
      style={{
        backgroundColor: item.bgColor,
      }}
    >
      <div className="flex gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#09185E] w-64">
            {item.heading}
          </h3>

          <p className="mt-4 text-gray-600 w-[230px] text-sm">{item.desc}</p>
        </div>
      </div>

      <Link
        className="mt-8 flex cursor-pointer items-center gap-3 font-semibold text-[#09185E]"
        href="/contact"
      >
        Learn More
        <span className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
          <ArrowRight size={18} />
        </span>
      </Link>

      <div className="absolute lg:-right-0 lg:-bottom-10 -right-16 -bottom-10">
        <Image src={item.image} alt="Cockroach" width={180} height={180} />
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, value, bg, link }) {
  return (
    <div className="flex items-start gap-5">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${bg}`}
      >
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-blue-600">{title}</h4>

        <Link className="mt-1 whitespace-pre-line text-lg text-[#081A5C]" href={link && !link.includes("@") ? `tel:${link}`:`mailto:${link}`}>
          {value}
        </Link>
      </div>
    </div>
  );
}

function SupportCard({ icon, title, text, highlight }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-[#081A5C]">{title}</h4>

        <p className="text-sm text-gray-500">{text}</p>

        <p className="mt-1 font-semibold text-[#081A5C]">{highlight}</p>
      </div>
    </div>
  );
}
