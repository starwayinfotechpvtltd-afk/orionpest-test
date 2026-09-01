import {
  Calendar,
  UsersRound,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Bug,
  Bird,
  Leaf,
  SprayCan,
  Award,
  House,
  UserCheck,
  Crosshair,
  Shield,
  PhoneCall,
  ClipboardList,
  Check,
  ChevronRight,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Form from "@/components/ui/Form";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import TestimonialsSection from "@/components/ui/Testimonials";
import BrandSection from "@/components/services/BrandSection";
import FAQSection from "@/components/ui/FAQ";
import ContactInfo from "@/components/services/ui/ContactInfo";

export const metadata = {
  title: "Pest Control Company in Lucknow | 27+ Years of Trusted Pest Services - Orion Pest",
  description:
    "Looking for the top pest control company in Lucknow? Orion Pest Solutions provides safe, odorless pest control services, termite control, cockroach removal & rodent defense across Lucknow. 27+ years of trust. Book a free inspection today!",
};

const stats = [
  {
    icon: <Calendar />,
    heading: "Safe Treatments",
    subHeading: "Family & Pet Friendly",
  },
  {
    icon: <UsersRound />,
    heading: "Expert Technicians",
    subHeading: "Trained & Verified",
  },
  {
    icon: <MapPin />,
    heading: "Fast Local Response",
    subHeading: "Across Lucknow",
  },
];

const servicesName = [
  "Ant Control",
  "Termite Control",
  "Cockroach Control",
  "Bed Bug Control",
  "Rodent Control",
  "Mosquito Control",
  "Bird Control",
  "Fly Control",
  "Fumigation Services",
];

const stats2 = [
  {
    icon: <Calendar />,
    heading: "Safe Treatments",
    subHeading: "Family & Pet Friendly",
  },
  {
    icon: <UsersRound />,
    heading: "Expert Technicians",
    subHeading: "Trained & Verified",
  },
  {
    icon: <MapPin />,
    heading: "Fast Response",
    subHeading: "On-time. Every time.",
  },
];

const stats3 = [
  {
    icon: <Calendar />,
    heading: "27+ Years",
    subHeading: "Of Industry Experience",
  },
  {
    icon: <UsersRound />,
    heading: "Lucknow Operations",
    subHeading: "Local Certified Team",
  },
  {
    icon: <MapPin />,
    heading: "Eco-Friendly Solutions",
    subHeading: "Safe for Family & Pets",
  },
  {
    icon: <MapPin />,
    heading: "Transparent Pricing",
    subHeading: "No Hidden Charges",
  },
];

const stats4 = [
  {
    value: "99%",
    percentage: 99,
    title: "Pest Elimination",
    description: "Effective & Long Lasting Results",
    icon: Bug,
  },
  {
    value: "10k+",
    percentage: 98,
    title: "Happy Customers",
    description: "Trusted by Homes & Businesses",
    icon: FaHome,
  },
  {
    value: "95%",
    percentage: 95,
    title: "Repeat & Referral",
    description: "Chosen for Consistent Quality",
    icon: IoShieldCheckmark,
  },
];

const services = [
  {
    title: "Cockroach Control",
    description: "Specialized cockroach control in Lucknow using odorless gel baits and targeted sprays for modular kitchens and commercial pantries.",
    image: "/Images/services/cockroach.png",
    icon: Bug,
    href: "/cockroach-pest-control",
  },
  {
    title: "Termite Control",
    description: "Advanced pre & post-construction termite control in Lucknow to safeguard furniture, flooring, and interior woodwork.",
    image: "/Images/services/termite.png",
    icon: Bug,
    href: "/termite-pest-control",
  },
  {
    title: "Bed Bug Control",
    description: "Comprehensive multi-step treatments to eliminate bed bugs, nymphs, and eggs permanently.",
    image: "/Images/services/bedbug.png",
    icon: Bug,
    href: "/bedbug-pest-control",
  },
  {
    title: "Rodent Control",
    description: "Safe baiting, trapping, and entry-point sealing to keep rats and mice away from your property.",
    image: "/Images/services/rodent.png",
    icon: Bug,
    href: "/rodent-control",
  },
  {
    title: "Mosquito Control",
    description: "Targeted larvicide and misting solutions to destroy mosquito breeding spots safely.",
    image: "/Images/services/mosquito.png",
    icon: Bug,
    href: "/mosquito-control",
  },
  {
    title: "Ant Control",
    description: "Fast-acting colony elimination that stops ant trails in kitchens, pantries, and gardens.",
    image: "/Images/services/ant.png",
    icon: Bug,
    href: "/ant-control",
  },
  {
    title: "Bird Control",
    description: "Durable, humane bird netting and spikes for balconies, windows, and commercial buildings.",
    image: "/Images/services/bird.png",
    icon: Bird,
    href: "/bird-control",
  },
  {
    title: "Fly Control",
    description: "Hygienic fly management for restaurants, cloud kitchens, food processing units, and homes.",
    image: "/Images/services/flies.png",
    icon: Bug,
    href: "/flies-control",
  },
  {
    title: "Fumigation Services",
    description: "Deep gas and mist fumigation for export containers, warehouses, godowns, and severe infestations.",
    image: "/Images/services/fumigation9.png",
    icon: SprayCan,
    href: "/fumigation-services",
  },
];

const certifications = [
  {
    title: "ISO 14001:2009",
    subtitle: "Environmental Management Systems",
    description: "International standard for environmental management systems.",
    logo: "/Images/certifications/img1.png",
  },
  {
    title: "IPCA Member",
    subtitle: "Indian Pest Control Association",
    description:
      "Proud member of the leading association for pest management professionals in India.",
    logo: "/Images/certifications/img2.png",
  },
  {
    title: "NPMA Member",
    subtitle: "National Pest Management Association",
    description:
      "Associated with the national body committed to advancing pest management standards.",
    logo: "/Images/certifications/img3.png",
  },
  {
    title: "ISO 9001:2008",
    subtitle: "Quality Management Systems",
    description:
      "International standard for quality management and customer satisfaction.",
    logo: "/Images/certifications/img4.png",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Call or fill out our quick form to tell us about your pest issue and schedule a convenient visit.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Inspection",
    description:
      "Our certified technicians inspect your property to identify pest species, entry routes, and nesting areas.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Customized Plan",
    description:
      "We design a targeted, non-disruptive treatment plan suited specifically to your space and requirements.",
    icon: Crosshair,
  },
  {
    number: "04",
    title: "Safe Treatment",
    description:
      "We apply government-approved, low-toxicity formulations with precision and utmost care for your safety.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Follow-Up & Protection",
    description:
      "We provide prevention tips and scheduled follow-ups to ensure your space stays pest-free long term.",
    icon: House,
  },
];

const protectionFeatures = [
  {
    title: "Safe & Eco-Friendly",
    description:
      "We use approved, low-toxicity formulations that are completely safe for your family, children, and pets.",
    icon: Leaf,
  },
  {
    title: "Guaranteed Results",
    description:
      "Every treatment is backed by proven protocols and a commitment to prompt warranty re-service if needed.",
    icon: Award,
  },
  {
    title: "Trained Professionals",
    description:
      "Our technicians in Lucknow are certified, background-verified, and trained in modern pest management.",
    icon: UserCheck,
  },
  {
    title: "Long-Term Prevention",
    description:
      "We eliminate root breeding colonies and provide actionable proofing advice to stop pests from returning.",
    icon: Shield,
  },
];

const faq = [
  {
    id: "01",
    question: "Why should I choose Orion Pest Solutions in Lucknow?",
    answer:
      "Orion Pest Solutions is an established pest control company in Lucknow with over two decades of industry experience. We offer government-approved, low-toxicity treatments, certified local technicians, and guaranteed results tailored to Lucknow's climate conditions.",
  },
  {
    id: "02",
    question: "How does your cockroach control in Lucknow work?",
    answer:
      "We use advanced odorless gel baits placed in hidden corners, cabinet hinges, and kitchen crevices where roaches breed, along with targeted sprays where necessary. It requires minimal preparation, so you don't have to empty all your kitchen utensils.",
  },
  {
    id: "03",
    question: "When is the right time to get termite control in Lucknow?",
    answer:
      "Subterranean termites are active throughout the year in Lucknow. If you notice mud tubes along walls, hollow-sounding wooden doors, or fine wood dust, you should book a termite inspection immediately.",
  },
  {
    id: "04",
    question: "Are your pest control treatments safe for children, seniors, and pets?",
    answer:
      "Yes. We prioritize human and pet safety by using Central Insecticides Board (CIB) approved, eco-friendly formulations. Our technicians will also advise on any brief precautions if specific spray treatments are being conducted.",
  },
  {
    id: "05",
    question: "How long does a typical pest control treatment take?",
    answer:
      "A standard residential treatment for a 2BHK or 3BHK flat usually takes between 45 to 90 minutes. Specialized treatments like comprehensive termite drilling or deep fumigation can take longer depending on property size.",
  },
  {
    id: "06",
    question: "Which areas in Lucknow do you serve?",
    answer:
      "We serve all residential and commercial zones across Lucknow, including Gomti Nagar, Indira Nagar, Hazratganj, Aliganj, Mahanagar, Ashiyana, Rajajipuram, Vikas Nagar, and Shaheed Path.",
  },
];

export default async function page() {
  return (
    <div className="w-full">
      {/* Hero section */}
      <section
        className="relative overflow-hidden bg-linear-30 from-white to-[#F4F6F9]"
        style={{
          backgroundImage: "url(/Images/branches/header.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-8 items-center justify-between">
            {/* Left Content */}
            <div className="w-full space-y-8">
              {/* Tag */}
              <div className="mb-6 md:mb-8">
                <span className="font-semibold text-gray-700 tracking-wide text-sm sm:text-base">
                  PROFESSIONAL. RELIABLE. EFFECTIVE
                </span>
                <div className="h-[2px] w-28 bg-amber-300 mt-2"></div>
              </div>

              {/* H1 Headline */}
              <div className="space-y-2">
                <h1 className="text-[34px] sm:text-5xl w-full md:w-2xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.8rem]">
                  The Best Pest Control Company in 
                  <span className="text-[#1095D9]"> Lucknow </span>
                </h1>
                <div className="h-[2px] w-28 bg-amber-300"></div>
              </div>

              <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
                Looking for a trusted pest control company in Lucknow? Orion Pest Solutions offers safe, fast, and eco-friendly pest control services across Lucknow. From residences in Gomti Nagar, Indira Nagar, and Hazratganj to commercial hubs in Aliganj and Shaheed Path, we ensure complete pest relief.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-6 md:gap-10 2xl:divide-x-1 divide-amber-400">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start md:items-center gap-2"
                  >
                    <div className="text-3xl text-[#FECE18] shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-0">
                      <p className="text-[#0D2391] text-base sm:text-lg font-bold break-words sm:whitespace-nowrap">
                        {item.heading}
                      </p>
                      <p className="text-sm md:text-base break-words sm:whitespace-nowrap">
                        {item.subHeading}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  className="w-full sm:w-auto justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer"
                  href="/contact"
                >
                  BOOK FREE INSPECTION
                  <ArrowRight size={18} />
                </Link>

                <Link
                  className="w-full sm:w-auto justify-center border border-gray-300 hover:border-yellow-400 px-6 sm:px-8 py-4 rounded-xl flex items-center gap-3 font-medium text-sm sm:text-base transition"
                  href="tel:1800 419 8181"
                >
                  <Phone size={18} />
                  CALL 1800 419 8181
                </Link>
              </div>
            </div>
            <div className="w-full flex items-end justify-end">
              <div className="xl:w-[80%] w-[100%]">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceMarquee />

      {/* Services Overview / Local Information Section */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full bg-[#FDC82A] p-10 flex flex-col justify-center items-center space-y-10">
          <div className="w-[400px] md:w-[500px] h-[400px] xl:w-[600px] xl:h-[500px] relative">
            <Image
              src={"/Images/branches/img1.png"}
              alt="Pest control company in Lucknow"
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-white p-2 rounded-2xl divide-x-2 divide-gray-400 flex flex-wrap justify-center md:justify-start gap-2 xl:gap-10 items-center w-fit px-2 pr-3">
            <Link
              href={"/contact"}
              className="bg-[#FECE18] rounded-2xl p-3 flex items-center gap-5 w-full md:w-fit uppercase cursor-pointer text-sm xl:text-xl font-bold text-[#0D2391]"
            >
              <div className="bg-[#0D2391] px-2.5 py-3 text-white rounded-full">
                <Phone />
              </div>
              BOOK A SERVICE
            </Link>
            <Link
              href={"tel:1800 419 8181"}
              className="flex items-center gap-5 w-full md:w-fit uppercase text-md xl:text-xl font-bold text-[#0D2391] cursor-pointer"
            >
              <div className="bg-[#0D2391] px-2.5 py-3 text-white rounded-full">
                <Phone />
              </div>
              1800 419 8181
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between gap-6 md:gap-10 xl:divide-x-1 divide-amber-400 mt-10">
            {stats2.map((item, index) => (
              <div
                key={index}
                className="flex items-start md:items-center gap-2"
              >
                <div className="text-xl p-2 bg-[#FECE18] rounded-full shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-0">
                  <p className="text-[#0D2391] text-base sm:text-lg font-bold break-words sm:whitespace-nowrap">
                    {item.heading}
                  </p>
                  <p className="text-sm md:text-base break-words sm:whitespace-nowrap">
                    {item.subHeading}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full space-y-5 py-12 md:py-20 px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="bg-[#FECE18] h-[5px] w-28 rounded"></div>
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D2391] font-bold leading-tight">
              Pest Control Services <br />
              <span className="text-[#FECE18]">in Lucknow</span>
            </h2>
          </div>
          <div className="bg-[#0D2391] h-[5px] w-28 rounded"></div>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Lucknow's subtropical climate, humid monsoon months, and extensive use of timber in traditional and modern homes make pest management an essential priority. Subterranean termites pose severe threats to wooden door frames, wardrobes, and false ceilings, while cockroaches, mosquitoes, and rodents constantly trouble residential kitchens and commercial establishments.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            As a leading pest control company in Lucknow, Orion Pest Solutions brings over 27 years of proven industry experience to your doorstep. We don't rely on superficial sprays; our certified technicians locate root nesting colonies, apply odorless, government-approved formulations, and establish deep chemical barriers. Whether you need reliable cockroach control in Lucknow or specialized termite control in Lucknow, our certified local team ensures clean, long-lasting results.
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Our full-spectrum pest control services in Lucknow protect bungalows, apartments, restaurants, hospitals, and educational institutions with transparent pricing and dependable warranties.
          </p>
          <Link
            href={"/about"}
            className="bg-[#0D2391] rounded-2xl px-10 py-4 font-semibold flex items-center gap-2 text-white mt-8 w-fit"
          >
            LEARN MORE <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="w-full bg-[#0D2391]">
        <div className="grid grid-cols-2 lg:grid-cols-4 w-[95%] xl:w-[80%] mx-auto justify-center items-center gap-2 2xl:gap-10 xl:divide-x-1 divide-amber-400 p-5 gap-y-6">
          {stats3.map((item, index) => (
            <div key={index} className="flex items-start md:items-center gap-2 xl:gap-5 w-full">
              <div className="text-xl text-white p-2 shrink-0">{item.icon}</div>
              <div className="space-y-0">
                <p className="text-white text-base text-md xl:text-lg break-words sm:whitespace-nowrap">
                  {item.heading}
                </p>
                <p className="text-sm xl:text-base break-words sm:whitespace-nowrap text-white">
                  {item.subHeading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AboutExperience */}
      <section
        className="relative py-8 sm:py-12 lg:py-16 w-full"
        style={{
          backgroundImage: "url('/Images/branches/img3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[28px] lg:grid-cols-[1fr_1fr]">
            {/* LEFT CONTENT */}
            <div className="relative z-10 bg-white py-8 pr-0 sm:py-10 lg:py-12 lg:pr-10 xl:py-14">
              {/* Brand */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#FECE18] bg-white shadow-sm">
                  <FaHome
                    size={20}
                    strokeWidth={2.5}
                    className="text-[#FECE18]"
                    fill="currentColor"
                  />
                </div>

                <div className="flex items-center gap-2 text-md font-bold tracking-wide text-[#10265c]">
                  <span className="h-[2px] w-3 bg-[#10265c]" />
                  ORION PEST CONTROL
                  <span className="h-[2px] w-3 bg-[#10265c]" />
                </div>
              </div>

              {/* Heading */}
              <h2 className="max-w-2xl text-[38px] font-extrabold leading-[1.03] tracking-[-1.8px] text-[#0D2391] sm:text-[48px] lg:text-[43px] xl:text-[50px]">
                Reliable Pest Control.
                <br />
                Safer Spaces.
                <br />
                <span className="text-[#ffd000]">Healthier</span> Lives.
              </h2>

              {/* Yellow line */}
              <div className="my-5 h-[3px] w-12 rounded-full bg-[#ffd000]" />

              {/* Description */}
              <p className="max-w-2xl leading-[1.65] text-gray-700">
                Orion Pest Solutions is an established pest control company in Lucknow dedicated to keeping homes, housing societies, and commercial premises pest-free. Our certified technicians combine scientific pest management, eco-friendly formulations, and precision treatment methods to ensure clean, healthy spaces.
              </p>

              {/* STAT CARDS */}
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-3">
                {stats4.map((stat) => {
                  const Icon = stat.icon;
                  const percentage = stat.percentage || 95;
                  const radius = 38;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset =
                    circumference - (percentage / 100) * circumference;

                  return (
                    <div
                      key={stat.title}
                      className="rounded-2xl text-center flex flex-col items-center"
                    >
                      {/* Circular progress */}
                      <div className="relative mb-3 h-[130px] w-[130px] flex items-center justify-center">
                        <svg
                          viewBox="0 0 100 100"
                          className="h-full w-full -rotate-90"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="#fff0b1"
                            strokeWidth="7"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="#ffd000"
                            strokeWidth="7"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                          />
                        </svg>

                        {/* Centered content with icon stacked cleanly on top of value */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          <Icon
                            size={22}
                            strokeWidth={2.2}
                            className="text-[#0d2c68] mb-1"
                          />
                          <span className="text-lg font-extrabold leading-none text-[#10265c]">
                            {stat.value}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-bold text-[#0c2860] text-base">
                        {stat.title}
                      </h3>

                      <p className="mx-auto mt-1 max-w-[140px] text-xs sm:text-sm leading-[1.45] text-gray-600">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* PROMISE BAR */}
              <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-[#fff9df] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3 lg:px-4">
                <div className="flex flex-col xl:flex-row items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffd000] text-[#0c2860]">
                    <ShieldCheck size={19} strokeWidth={2.5} />
                  </div>

                  <div className="xl:border-r border-[#e9d77d] pr-3">
                    <p className="text-lg font-bold text-[#10265c] text-nowrap">
                      Our Promise
                    </p>
                  </div>

                  <p className="max-w-2xl text-md leading-[1.45] text-gray-600 text-center md:text-start">
                    Safe methods, certified local team, and complete customer satisfaction.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#092864] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123b85]"
                >
                  Get in Touch
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT EXPERIENCE SECTION */}
            <div className="relative min-h-[530px] overflow-hidden bg-[#fffaf0] sm:min-h-[620px] lg:min-h-[680px]">
              {/* Decorative dots */}
              <div className="absolute right-8 top-8 grid grid-cols-5 gap-3 opacity-70">
                {Array.from({ length: 20 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-[5px] w-[5px] rounded-full bg-[#ffd000]"
                  />
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col px-7 py-10 sm:px-12 sm:py-12 lg:px-10 xl:px-12">
                {/* Label */}
                <div>
                  <p className="text-lg font-bold uppercase tracking-wide text-[#0b2a64]">
                    Experience Of
                  </p>

                  <div className="mt-3 h-[3px] w-20 bg-[#ffd000]" />
                </div>

                {/* Main image composition */}
                <div className="relative mt-5 flex-1">
                  {/* House image */}
                  <div className="absolute left-1/2 top-3 h-[390px] w-[90%] md:w-[78%] -translate-x-1/2 overflow-hidden sm:h-[450px] sm:w-[82%] lg:h-[440px] xl:h-[480px]">
                    <Image
                      src="/Images/branches/img2.png"
                      alt="Pest control services in Lucknow"
                      fill
                      priority
                      className="object-contain md:object-cover"
                    />
                    <div className="absolute bottom-0 right-0 z-10 sm:right-4">
                      <span className="text-[18px] font-extrabold uppercase tracking-wide text-[#092864] sm:text-[21px]">
                        Years
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <TestimonialsSection />
      <MembershipCertification />

      <section className="max-w-[80%] mx-auto bg-[#0D2391] rounded-2xl">
        <div className="grid grid-cols-2 xl:grid-cols-4 w-[95%] xl:w-[80%] mx-auto justify-center items-center gap-6 xl:divide-x-1 divide-amber-400 p-5">
          {stats3.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start md:items-center gap-5">
              <div className="text-xl text-white p-2 shrink-0">{item.icon}</div>
              <div className="space-y-0">
                <p className="text-white text-base sm:text-lg break-words sm:whitespace-nowrap text-center md:text-start">
                  {item.heading}
                </p>
                <p className="text-sm md:text-base break-words sm:whitespace-nowrap text-white text-center md:text-start">
                  {item.subHeading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BrandSection
        heading={
          <>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#2F3293] leading-tight">
              Preferred by{" "}
              <span className="text-[#0094DA]">Homes & Businesses</span> Across
              India
            </h3>
          </>
        }
      />
      <ProcessSection />
      <ProtectionSection />
      <FAQSection faqs={faq} />

      <section
        className="relative overflow-hidden bg-[#FEFEFE] py-0 pb-10 md:py-16"
        style={{
          background: "url('/Images/CTA_background.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 w-full relative z-[2]">
          <div className="grid gap-10 lg:gap-12 xl:grid-cols-2 items-start">
            {/* LEFT SIDE CONTENT SECTION */}
            <div>
              <p className="font-semibold uppercase tracking-widest text-sm sm:text-base">
                <span className="text-blue-600">Get In</span>{" "}
                <span className="text-yellow-500">Touch</span>
              </p>

              <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2F3293] break-words">
                We&apos;re Here to
                <br />
                <span className="text-[#0095DA]">Help You Stay</span>
                <br />
                <span className="text-[#2F3293]">Pest-Free.</span>
              </h2>

              <p className="mt-4 sm:mt-5 max-w-lg text-lg leading-relaxed text-gray-600">
                Don&apos;t let pests compromise your family&apos;s health or business reputation. Book a professional inspection with our certified Lucknow pest control experts today.
              </p>

              {/* Contact Info Row Components Column Base List Block */}
              <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-8">
                <ContactInfo
                  icon={<Phone size={20} className="sm:w-6 sm:h-6" />}
                  title="CALL US"
                  link="tel:1800 419 8181"
                  value="1800 419 8181"
                  bg="bg-yellow-400"
                />
                <ContactInfo
                  icon={<Mail size={20} className="sm:w-6 sm:h-6" />}
                  title="EMAIL US"
                  link="mailto:sales@orionpest.com"
                  value="sales@orionpest.com"
                  bg="bg-yellow-400"
                />
                <ContactInfo
                  icon={<MapPin size={20} className="sm:w-6 sm:h-6" />}
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
      </section>
    </div>
  );
}

const ServiceGroup = () => (
  <div className="flex shrink-0 items-center">
    {servicesName.map((service, index) => (
      <div key={`${service}-${index}`} className="flex shrink-0 items-center">
        {/* Service */}
        <span
          className="
            px-4
            text-base
            font-semibold
            tracking-[-0.2px]
            text-white
            sm:px-5
            sm:text-lg
            lg:text-xl
          "
        >
          {service}
        </span>

        {/* Dot between services */}
        <span
          className="
            flex
            h-2
            w-2
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white
          "
        />
      </div>
    ))}
  </div>
);

function ServiceMarquee() {
  return (
    <section
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-[#292d7f]
      "
    >
      <div
        className="
          flex
          h-[64px]
          w-full
          items-center
          overflow-hidden
        "
      >
        <div
          className="
            flex
            w-max
            shrink-0
            items-center
            whitespace-nowrap
            animate-marquee-right
          "
        >
          {/* First complete group */}
          <ServiceGroup />

          {/* Second identical group */}
          <ServiceGroup />
        </div>
      </div>

      {/* Yellow bottom line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-1/2
          bg-[#ffc400]
        "
      />
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <Link
      href={`${service.href}`}
      className="group bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 p-3 cursor-pointer flex flex-col justify-between"
    >
      <div className="flex justify-center">
        <Image
          src={service.image}
          alt={service.title}
          width={150}
          height={150}
          className="object-contain h-24 sm:h-32 w-auto transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="text-center space-y-2 flex flex-col items-center">
        <h3 className="mt-4 sm:mt-5 text-[#102B83] font-bold text-lg sm:text-xl leading-snug sm:leading-7 text-nowrap">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600">{service.description}</p>
        <p className="text-sm text-center mt-2 font-semibold flex items-center gap-1 text-[#0D2391]">
          Learn More <ChevronRight size={16} />
        </p>
      </div>
    </Link>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
      "
    >
      {/* Subtle background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[25%]
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-[#fff2bf]
          opacity-60
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-160px]
          bottom-[5%]
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-[#fff3c6]
          opacity-50
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[80%]
          sm:px-7
          lg:px-8
        "
      >
        {/* HEADER */}
        <div className="mx-auto max-w-[720px] text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-[#f5c400]" />

            <span
              className="
                text-xl
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#f0bd00]
              "
            >
              Our Services
            </span>

            <span className="h-px w-6 bg-[#f5c400]" />
          </div>

          {/* Heading */}
          <h2
            className="
              mt-4
              font-serif
              text-[34px]
              font-bold
              leading-[1.05]
              tracking-[-1px]
              text-[#0c2860]
              sm:text-[42px]
              lg:text-[46px]
            "
          >
            Complete Pest Solutions
            <br />
            <span className="text-[#f4bd00]">in Lucknow</span>
          </h2>

          {/* Yellow underline */}
          <div className="mx-auto mt-3 h-[3px] w-12 rounded-full bg-[#ffc900]" />

          {/* Description */}
          <p
            className="
              mx-auto mt-4
              max-w-[650px]
              leading-[1.7]
              text-gray-600
            "
          >
            From stubborn termites to pesky cockroaches, mosquitoes, and rodents, explore our specialized pest control services in Lucknow designed for homes, apartments, clinics, and commercial spaces.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
          <Link
            className="group bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 p-3 cursor-pointer flex flex-col justify-end items-center"
            href={"/pest-control-services"}
          >
            <div className="text-[#ffc900]">
              <ShieldCheck size={80} />
            </div>
            <h3 className="mt-4 sm:mt-5 font-bold text-lg sm:text-xl leading-snug sm:leading-7 text-nowrap text-[#0c2860]">
              All Pest Solutions
            </h3>
            <p className="text-sm text-center mt-3 text-gray-600">
              Comprehensive pest control for homes and commercial establishments.
            </p>
            <p className="text-sm text-center mt-4 font-semibold flex items-center gap-1 text-[#0D2391]">
              Learn More <ChevronRight size={16} />
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ certification }) {
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[380px]
        flex-col
        overflow-hidden
        rounded-[18px]
        bg-white
        shadow-[0_8px_25px_rgba(35,58,120,0.09)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(35,58,120,0.15)]
        border border-gray-200
      "
    >
      {/* TOP CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-1
          flex-col
          items-center
          px-5
          pb-24
          pt-5
          text-center
        "
      >
        {/* Logo circle */}
        <div
          className="
            relative
            flex
            h-[145px]
            w-[145px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border-2
            border-[#dce5fb]
            bg-white
          "
        >
          <div
            className="
              absolute
              inset-[9px]
              rounded-full
              border
              border-[#e4eaf7]
            "
          />

          <Image
            src={`${certification.logo}`}
            alt={certification.title}
            width={112}
            height={112}
            className="
              relative
              z-10
              h-[108px]
              w-[108px]
              object-contain
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-5
            font-bold
            leading-tight
            text-[#172f87]
            text-md
          "
        >
          {certification.title}
        </h3>

        {/* Subtitle */}
        <p
          className="
            mt-2
            text-sm
            font-medium
            leading-[1.45]
            text-[#30343d]
          "
        >
          {certification.subtitle}
        </p>
      </div>

      {/* BLUE BOTTOM PANEL */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          min-h-[94px]
          bg-[#263ba7]
          px-5
          pb-4
          pt-7
          text-center
        "
      >
        {/* Curved top edge */}
        <div
          className="
            absolute
            -top-[18px]
            left-[-5%]
            h-[35px]
            w-[110%]
            rounded-[50%]
            bg-white
          "
        />

        <div
          className="
            absolute
            -top-[7px]
            left-[-5%]
            h-[30px]
            w-[110%]
            rounded-[50%]
            bg-[#263ba7]
          "
        />

        {/* Check badge */}
        <div
          className="
            absolute
            left-1/2
            top-[-15px]
            flex
            h-[30px]
            w-[30px]
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border-[2px]
            border-white
            bg-[#263ba7]
            text-white
            shadow-sm
          "
        >
          <Check size={15} strokeWidth={3} />
        </div>

        <p
          className="
            relative
            z-10
            mx-auto
            max-w-[215px]
            text-sm
            leading-[1.55]
            text-white/95
          "
        >
          {certification.description}
        </p>
      </div>
    </div>
  );
}

function MembershipCertification() {
  return (
    <section
      id="certifications"
      className="
        relative
        bg-white
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Left dots decoration */}
      <div
        className="
          pointer-events-none
          absolute
          left-7
          top-10
          grid
          grid-cols-6
          gap-[13px]
          opacity-70
          sm:left-10
          lg:left-12
        "
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="
              h-[4px]
              w-[4px]
              rounded-full
              bg-[#c9d5f5]
            "
          />
        ))}
      </div>

      {/* Right shield decoration */}
      <div
        className="
          pointer-events-none
          absolute
          right-8
          top-8
          hidden
          opacity-[0.08]
          lg:block
        "
      >
        <ShieldCheck size={170} strokeWidth={1.3} className="text-[#17368f]" />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[80%]
          px-5
          sm:px-7
          lg:px-8
        "
      >
        <header className="mx-auto max-w-[750px] text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#2943bd]" />

            <span
              className="
                rounded-full
                bg-gradient-to-r
                from-[#20349c]
                to-[#2f46b5]
                px-5
                py-2
                text-[13px]
                font-semibold
                uppercase
                tracking-wide
                text-white
                shadow-[0_5px_12px_rgba(39,59,165,0.18)]
              "
            >
              Our Memberships & Certifications
            </span>

            <span className="h-px w-7 bg-[#2943bd]" />
          </div>

          {/* Heading */}
          <h2
            className="
             text-3xl sm:text-5xl font-bold text-[#2F3293] leading-tight mt-6
            "
          >
            Membership & Certification
          </h2>

          {/* Heading underline */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[5px] w-16 rounded-full bg-[#293fae]" />
            <span className="h-[5px] w-2 rounded-full bg-[#293fae]" />
          </div>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              leading-[1.7]
              text-[#3c4250]
            "
          >
            Our industry accreditations reflect our ongoing commitment to international safety standards, eco-conscious pest control, and quality service.
          </p>
        </header>

        {/* CERTIFICATION GRID */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step }) {
  const Icon = step.icon;

  return (
    <div
      className="
        group relative flex min-w-0 w-full flex-col
        items-center rounded-[10px]
        border border-[#edf0f7]
        bg-white
        px-4 pb-5 pt-5
        text-center
        shadow-[0_4px_18px_rgba(20,40,90,0.06)]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_28px_rgba(20,40,90,0.11)]
      "
    >
      {/* Step number */}
      <div
        className="
          absolute left-0 top-0
          flex h-[29px] w-[29px]
          -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-[#0c2d85]
          text-[15px]
          font-bold
          text-white
        "
      >
        {step.number}
      </div>

      {/* Icon */}
      <div
        className="
          flex h-[68px] w-[68px]
          items-center justify-center
          rounded-full
          bg-[#f5f7fc]
          text-[#123b98]
          transition-all duration-300
          group-hover:scale-105
          group-hover:bg-[#eef2ff]
        "
      >
        <Icon size={40} strokeWidth={1.7} />
      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          text-[12px]
          font-bold
          leading-tight
          text-[#10275e]
          sm:text-xl
        "
      >
        {step.title}
      </h3>

      {/* Underline */}
      <div
        className="
          mt-2
          h-[2px]
          w-8
          rounded-full
          bg-[#2945b2]
          transition-all duration-300
          group-hover:w-12
        "
      />

      {/* Description */}
      <p
        className="
          mt-3
          leading-[1.65]
          text-[#555c6d]
          text-sm
        "
      >
        {step.description}
      </p>
    </div>
  );
}

function ProcessSection() {
  return (
    <section
      id="process"
      className="
        relative
        w-full
        max-w-full
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[80%]
          min-w-0
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <header
          className="
            mx-auto
            w-full
            max-w-[700px]
            text-center
          "
        >
          {/* Eyebrow */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              sm:gap-3
            "
          >
            <span className="h-px w-6 bg-[#2943bd] sm:w-7" />

            <span
              className="
                rounded-full
                bg-gradient-to-r
                from-[#1e3498]
                to-[#3048b6]
                px-4
                py-1.5
                text-[13px]
                font-semibold
                uppercase
                tracking-wide
                text-white
                shadow-[0_4px_10px_rgba(39,59,165,0.16)]
                sm:px-5
                sm:py-2
              "
            >
              Our Process
            </span>

            <span className="h-px w-6 bg-[#2943bd] sm:w-7" />
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl sm:text-5xl font-bold text-[#2F3293] leading-tight mt-6
            "
          >
            Our Proven 5-Step Process
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-[620px]
              px-2
              text-[#555c6d]
            "
          >
            A systematic, hassle-free approach designed to solve pest problems quickly and keep Lucknow properties protected year-round.
          </p>
        </header>

        <div
          className="
            relative
            mt-10
            sm:mt-12
          "
        >
          {/* DESKTOP CONNECTING LINE */}
          <div
            className="
              pointer-events-none
              absolute
              left-[9%]
              right-[9%]
              top-[88px]
              hidden
              border-t
              border-dashed
              border-[#8297d8]
              lg:block
            "
          />

          {/* DESKTOP ARROWS */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              top-[76px]
              hidden
              items-center
              justify-between
              lg:flex
            "
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="
                  flex
                  h-[25px]
                  w-[25px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#4563bd]
                  bg-white
                  text-[#1e3e9e]
                  shadow-sm
                "
              >
                <ArrowRight size={12} strokeWidth={2} />
              </div>
            ))}
          </div>

          {/* MOBILE VERTICAL LINE */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[55px]
              left-[24px]
              top-[30px]
              border-l
              border-dashed
              border-[#9aabe0]
              sm:left-[28px]
              lg:hidden
            "
          />

          {/* CARDS */}
          <div
            className="
              relative
              grid
              w-full
              min-w-0
              grid-cols-1
              gap-7
              sm:grid-cols-2
              sm:gap-6
              xl:grid-cols-5
              lg:gap-5
            "
          >
            {processSteps.map((step) => (
              <ProcessCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtectionFeature({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="group min-w-0 text-center">
      {/* Icon */}
      <div
        className="
          mx-auto
          flex
          h-[62px]
          w-[62px]
          items-center
          justify-center
          rounded-full
          bg-[#f1f4fc]
          text-[#123b98]
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:bg-[#e8edfc]
        "
      >
        <Icon size={31} strokeWidth={1.6} />
      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          text-lg
          font-bold
          leading-tight
          text-[#102d75]
        "
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-3
          text-sm
          leading-[1.65]
          text-[#535a69]
          sm:leading-[1.7]
        "
      >
        {feature.description}
      </p>
    </div>
  );
}

function ProtectionSection() {
  return (
    <section
      id="protection"
      className="
        w-full
        max-w-full
        overflow-hidden
        bg-white
        py-8
        sm:py-10
        lg:py-12
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[80%]
          px-3
          sm:px-5
          lg:px-8
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[16px]
            border
            border-[#e9edf5]
            bg-white
            shadow-[0_5px_25px_rgba(20,40,90,0.08)]
          "
        >
          {/* TOP CONTENT */}
          <div
            className="
              grid
              min-w-0
              grid-cols-1
              lg:grid-cols-[38%_62%]
            "
          >
            {/* LEFT IMAGE */}
            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                sm:min-h-[380px]
                lg:min-h-[350px]
              "
            >
              <Image
                src="/Images/branches/img4.png"
                alt="Pest control company in Lucknow"
                fill
                priority
                className="
                  object-cover
                  object-center
                "
                sizes="
                  (max-width: 1024px) 100vw,
                  38vw
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-transparent
                  to-[#092d87]/10
                  lg:hidden
                "
              />
            </div>

            {/* RIGHT CONTENT */}
            <div
              className="
                relative
                min-w-0
                px-5
                pb-8
                pt-7
              "
            >
              {/* HEADING */}
              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0
                    justify-center
                    items-center
                    rounded-full
                    bg-[#f1f4fc]
                    text-[#123b98]
                  "
                >
                  <ShieldCheck size={40} strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <h2
                    className="
                      text-3xl
                      font-bold 
                      leading-[1.1]
                      tracking-[-0.7px]
                      text-[#10337f]
                    "
                  >
                    Protection You Can Rely On
                  </h2>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        h-[4px]
                        w-14
                        rounded-full
                        bg-[#143b98]
                      "
                    />

                    <span
                      className="
                        h-[4px]
                        w-[6px]
                        rounded-full
                        bg-[#143b98]
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-3
                      max-w-[610px]
                      leading-[1.65]
                      text-[#444b59]
                    "
                  >
                    We protect Lucknow homes and commercial facilities with proactive pest management, using safe chemicals that keep your family, pets, and workspace secure.
                  </p>
                </div>
              </div>

              {/* FEATURES */}
              <div
                className="
                  mt-7
                  grid
                  grid-cols-1
                  gap-7
                  sm:grid-cols-2
                  xl:grid-cols-4
                "
              >
                {protectionFeatures.map((feature) => (
                  <ProtectionFeature
                    key={feature.title}
                    feature={feature}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA BAR */}
          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-4
              bg-[#092f91]
              px-5
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7
              lg:px-8
            "
          >
            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-[42px]
                  w-[42px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/70
                  text-white
                "
              >
                <PhoneCall size={21} strokeWidth={1.6} />
              </div>

              <div
                className="
                  flex
                  min-w-0
                  flex-wrap
                  items-center
                  gap-x-3
                  gap-y-1
                "
              >
                <span
                  className="
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  Need Immediate Assistance in Lucknow?
                </span>

                <span
                  className="
                    text-md
                    text-white/90
                  "
                >
                  Our local experts are just a call away!
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                h-[40px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-4
                rounded-[7px]
                bg-white
                px-5
                text-md
                font-bold
                text-[#123581]
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#f7f9ff]
                hover:shadow-md
                sm:w-auto
                sm:min-w-[145px]
              "
            >
              <span>Get in Touch</span>

              <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
