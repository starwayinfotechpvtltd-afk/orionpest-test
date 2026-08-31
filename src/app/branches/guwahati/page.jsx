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
      heading: "Fast Response",
      subHeading: "On-time. Every time.",
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
      heading: "5+ Years",
      subHeading: "Of Experience",
    },
    {
      icon: <UsersRound />,
      heading: "Kolkata Based",
      subHeading: "Trusted Locally",
    },
    {
      icon: <MapPin />,
      heading: "Eco-Friendly Solutions",
      subHeading: "Safe for You & Environment",
    },
    {
      icon: <MapPin />,
      heading: "Affordable Pricing",
      subHeading: "No Hidden Charges",
    },
  ];

  const stats4 = [
    {
      value: "90%",
      title: "Pest Elimination",
      description: "Effective & Long Lasting Results",
      icon: Bug,
    },
    {
      value: "90%",
      title: "Happy Customers",
      description: "Trusted by Homes & Businesses",
      icon: FaHome,
    },
    {
      value: "50%",
      title: "Repeat Customers",
      description: "Choose Us Again for Our Service",
      icon: IoShieldCheckmark,
    },
  ];

  const services = [
    {
      title: "Cockroach Control",
      description: "Eliminate cockroaches and prevent re-infestation.",
      image: "/Images/services/cockroach.png",
      icon: Bug,
      href: "/cockroach-pest-control",
    },
    {
      title: "Termite Control",
      description: "Protect your property from silent termite damage.",
      image: "/Images/services/termite.png",
      icon: Bug,
      href: "/termite-pest-control",
    },
    {
      title: "Bed Bug Control",
      description: "Get rid of bed bugs and sleep peacefully.",
      image: "/Images/services/bedbug.png",
      icon: Bug,
      href: "/bedbug-pest-control",
    },
    {
      title: "Rodent Control",
      description: "Keep rats and mice away from your space.",
      image: "/Images/services/rodent.png",
      icon: Bug,
      href: "/rodent-control",
    },
    {
      title: "Mosquito Control",
      description: "Reduce mosquito breeding and enjoy a bite-free life.",
      image: "/Images/services/mosquito.png",
      icon: Bug,
      href: "/mosquito-control",
    },
    {
      title: "Ant Control",
      description: "Eliminate ant colonies and stop them from coming back.",
      image: "/Images/services/ant.png",
      icon: Bug,
      href: "/ant-control",
    },
    {
      title: "Bird Control",
      description: "Safe and humane bird control solutions.",
      image: "/Images/services/bird.png",
      icon: Bird,
      href: "/bird-control",
    },
    {
      title: "Fly Control",
      description: "Control flies and keep your surroundings hygienic.",
      image: "/Images/services/flies.png",
      icon: Bug,
      href: "/flies-control",
    },
    {
      title: "Fumigation Services",
      description: "Deep treatment for severe pest infestations.",
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
      "Reach out to us via call, form, or WhatsApp. We’re ready to assist you.",
    icon: PhoneCall,
  },
  {
    number: "02",
    title: "Inspection",
    description:
      "Our experts inspect your property to identify the pest problem and its source.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Customized Plan",
    description:
      "We design a customized treatment plan tailored to your specific needs.",
    icon: Crosshair,
  },
  {
    number: "04",
    title: "Treatment",
    description:
      "Our trained professionals carry out the treatment using safe and effective methods.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Follow-Up & Protection",
    description:
      "We ensure long-term protection with follow-ups and preventive measures.",
    icon: House,
  },
];

const protectionFeatures = [
  {
    title: "Safe & Non-Toxic",
    description:
      "We use eco-friendly products that are safe for your family, pets, and the environment.",
    icon: Leaf,
  },
  {
    title: "Guaranteed Results",
    description:
      "Our treatments are effective and backed by a service quality guarantee.",
    icon: Award,
  },
  {
    title: "Trained Professionals",
    description:
      "Our team is highly trained, certified, and experienced in handling all pest problems.",
    icon: UserCheck,
  },
  {
    title: "Long-Term Protection",
    description:
      "We focus on prevention and provide solutions that keep pests away for the long run.",
    icon: Shield,
  },
];

const faq = [
  {
    id: "01",
    question: "Do I need to leave my home during the treatment?",
    answer:
      "It depends on the type of treatment. Some services allow you to stay home, while others may require you to leave for a few hours. Your technician will explain everything before work begins.",
  },
  {
    id: "02",
    question: "Is your treatment safe for children, elderly family members, and pets?",
    answer:
      "We use approved pest control products and follow application guidelines carefully. Before treatment, we'll let you know any temporary precautions that should be followed for maximum safety.",
  },
  {
    id: "03",
    question: "Will my kitchen utensils and food need to be covered?",
    answer:
      "For certain treatments, yes. We provide simple preparation instructions before your appointment so your food and kitchen items remain protected.",
  },
  {
    id: "04",
    question: "How long does it take to completely eliminate the infestation?",
    answer:
      "The timeline depends on the pest. Cockroaches may reduce significantly within days, while termites and bed bugs often require multiple visits or monitoring for complete control.",
  },
  {
    id: "05",
    question: "Do restaurants and food businesses require more frequent pest control?",
    answer:
      "Yes. Businesses that handle food generally benefit from scheduled preventive treatments because even a minor infestation can affect hygiene, customer trust, and compliance.",
  },
  {
    id: "06",
    question: "How quickly can someone come for an inspection?",
    answer:
      "We understand that pest issues can't always wait. Depending on your location and availability, we aim to schedule inspections as quickly as possible.",
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
              {/* Logo */}
              <div className="mb-6 md:mb-8">
                {/* <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div> */}
                <span className="font-semibold text-gray-700 tracking-wide text-sm sm:text-base">
                  PROFESSIONAL. RELIABLE. EFFECTIVE
                </span>
                <div className="h-[2px] w-28 bg-amber-300 mt-2"></div>
              </div>

              <div className="space-y-2">
                <h1 className="text-[34px] sm:text-5xl w-full md:w-xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[3.8rem]">
                  Pest Control Services in <br />
                  <span className="text-[#1095D9]"> Kolkata </span>
                </h1>
                <div className="h-[2px] w-28 bg-amber-300"></div>
              </div>

              <p className="text-lg sm:text-xl text-gray-700 font-medium">
                Established in 1998, we are constantly pushing the envelope with
                innovations in the niche industry. Today, we take pride in
                identifying ourselves as the pioneers of the pest management
                industry.
              </p>

              <p className="mt-4 text-gray-500 max-w-xl leading-relaxed text-base sm:text-lg md:text-xl"></p>

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

      <section className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full bg-[#FDC82A] p-10 flex flex-col justify-center items-center space-y-10">
          <div className="w-[400px] md:w-[500px] h-[400px] xl:w-[600px] xl:h-[500px] relative">
            <Image
              src={"/Images/branches/img1.png"}
              alt=""
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

        <div className="w-full space-y-5 py-20 px-10 md:px-20">
          <div className="bg-[#FECE18] h-[5px] w-28 rounded"></div>
          <div className="space-y-5">
            <p className="text-2xl md:text-3xl font-bold text-black">WELCOME TO</p>
            <h3 className="text-3xl md:text-6xl text-[#0D2391] font-bold">
              24X7 PEST CONTROL <br />
              <span className="text-[#FECE18]">IN CHENNAI</span>
            </h3>
          </div>
          <div className="bg-[#0D2391] h-[5px] w-28 rounded"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quasi
            beatae, ipsa ad obcaecati magnam quaerat pariatur voluptatem officia
            suscipit cum accusamus asperiores. Ad laborum dicta nostrum ut
            voluptatem minima enim, facilis nulla molestias iure repudiandae
            accusamus porro odit incidunt praesentium culpa dolores natus vel.
            Odio corrupti doloremque, sequi dolorum explicabo voluptates
            cupiditate quo deserunt consectetur fugiat nostrum numquam dolores
            enim ex magnam est deleniti ratione officia obcaecati. Tempora
            quibusdam ad perferendis odio vitae libero ab repellat sapiente
            ducimus quae ipsam ratione non excepturi delectus obcaecati,
            accusamus tempore, debitis fugit in! Vitae dolore dolores quibusdam
            nesciunt voluptatum tempore, rerum cupiditate.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            quidem eaque eius! Dolorem eius necessitatibus exercitationem maxime
            placeat aliquam hic, sed sequi vel. Reprehenderit excepturi facere
            aut eum, maxime tempora laborum quibusdam accusamus corporis vitae
            obcaecati dolores harum, molestiae aliquid explicabo exercitationem
            maiores! Ab, voluptate! Esse iste vel, commodi exercitationem
            eveniet ad ut consectetur ipsa iure voluptate vero tempore quod aut.
            Vero, voluptates! Enim quas corrupti magnam eum ipsa deleniti,
            perspiciatis cumque, odio sunt esse sint eligendi amet itaque vero
            maxime nostrum ab omnis iste facere sapiente excepturi ut minima.
            Rem inventore totam illum facilis fugit, laborum non! Tempora,
            itaque.
          </p>
          <Link
            href={"/about"}
            className="bg-[#0D2391] rounded-2xl px-10 py-4 font-semibold flex items-center gap-2 text-white mt-10 w-fit"
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
            {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
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
                Orion Pest Control, based in Chennai, delivers high-quality pest
                control services for homes and businesses. Our skilled team uses
                safe methods, advanced technology, and premium producree
                environment you can rely on.ts to eliminate pests and ensure a
                clean, healthy and pest-f
              </p>

              {/* =================================================
                STAT CARDS
            ================================================== */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-3">
                {stats4.map((stat) => {
                  const Icon = stat.icon;
                  // Convert "90%" / "50%" into a number
    const percentage = parseFloat(stat.value);

    // Circle configuration
    const radius = 39;
    const circumference = 2 * Math.PI * radius-60;

    // Calculate progress based on percentage
    const progress = (percentage / 100) * circumference;

                  return (
                    <div key={stat.title} className="rounded-2xl text-center">
                      {/* Circular progress */}
                      <div className="relative mx-auto mb-3 h-[150px] w-[150px]">
                        <svg
                          viewBox="0 0 100 100"
                          className="h-full w-full -rotate-45"
                         >
                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="#fff0b1"
                            strokeWidth="7"
                            strokeDasharray={`${circumference} ${circumference}`}
                            strokeLinecap="round"
                          />

                          <circle
                            cx="50"
                            cy="50"
                            r={radius}
                            fill="none"
                            stroke="#ffd000"
                            strokeWidth="7"
                             strokeDasharray={`${progress} ${circumference}`}
                            strokeLinecap="round"
                          />
                        </svg>

                        <div className="absolute top-2 inset-0 flex flex-col items-center justify-cente">
                          <Icon
                            size={25}
                            strokeWidth={2.5}
                            className="mb-1 text-[#0d2c68]"
                          />
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-xl font-extrabold leading-none text-[#10265c]">
                            {stat.value}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-bold text-[#0c2860] text-md">
                        {stat.title}
                      </h3>

                      <p className="mx-auto mt-1 max-w-[120px] text-sm leading-[1.45] text-gray-600">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                PROMISE BAR
            ================================================== */}
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
                    Safe methods, expert team, and complete customer
                    satisfaction.
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

            {/* =====================================================
              RIGHT EXPERIENCE SECTION
          ====================================================== */}
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
                      alt="Modern home"
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
      <FAQSection faqs={faq}/>
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
                We're Here to
                <br />
                <span className="text-[#0095DA]">Help You Stay</span>
                <br />
                <span className="text-[#2F3293]">Extermination-Free.</span>
              </h2>

              <p className="mt-4 sm:mt-5 max-w-lg text-lg leading-relaxed text-gray-600">
                Protect your property before ants cause costly structural
                damage. Book a professional extermination inspection with our
                certified experts today.
              </p>

              {/* Contact Info Row Components Column Base List Block */}
              <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-8">
                <ContactInfo
                  icon={<Phone size={20} className="sm:w-6 sm:h-6" />}
                  title="CALL US"
                  link="1800 419 8181"
                  value="1800 419 8181"
                  bg="bg-yellow-400"
                />
                <ContactInfo
                  icon={<Mail size={20} className="sm:w-6 sm:h-6" />}
                  title="EMAIL US"
                  link="sales@orionpest.com"
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
        <p className="text-sm">{service.description}</p>
        {/* <div className="mt-2 w-16 sm:w-20 h-1 rounded bg-yellow-400 mx-auto"></div> */}
        <p className="text-sm text-center mt-2 font-semibold flex items-center gap-1">
          Learn More <ChevronRight />
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
        {/* ============================================
            HEADER
        ============================================= */}

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
            <span className="text-[#f4bd00]">for Every Space</span>
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
            From common household pests to complex infestations, we provide
            safe, effective, and long-lasting pest control solutions.
          </p>
        </div>

        {/* ============================================
            SERVICES GRID
        ============================================= */}

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
            <p className="text-sm text-center mt-3">
              Comprehensive pest control for homes and business
            </p>
            <p className="text-sm text-center mt-4 font-semibold flex items-center gap-1">
              Learn More <ChevronRight />
            </p>
          </Link>
        </div>

        {/* ============================================
            VIEW ALL SERVICES BUTTON
        ============================================= */}

        {/* <div className="mt-8 flex justify-center">
          <Link
            href="/pest-control-services"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-4
              rounded-md
              bg-[#ffc400]
              px-7
              py-2.5
              text-md
              font-bold
              text-[#111111]
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#f2b900]
              hover:shadow-md
            "
          >
            View All Services
            <ArrowRight
              size={20}
              strokeWidth={2.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div> */}
      </div>
    </section>
  );
}




function CertificationCard(certification) {

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
      {/* =========================================
          TOP CONTENT
      ========================================== */}

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
            src={`${certification.certification.logo}`}
            alt={certification.certification.title}
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
          {certification.certification.title}
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
          {certification.certification.subtitle}
        </p>
      </div>

      {/* =========================================
          BLUE BOTTOM PANEL
      ========================================== */}

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
          {certification.certification.description}
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
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      {/* Left dots */}
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

      {/* =========================================
          CONTENT
      ========================================== */}

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
        {/* =========================================
            HEADER
        ========================================== */}

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
            Our memberships and certifications reflect our commitment to quality
            service, safety standards, and environmental care.
          </p>
        </header>

        {/* =========================================
            CERTIFICATION GRID
        ========================================== */}

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




function ProcessCard({step}) {
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
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      {/* <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          border
          border-[#f1f4fb]
        "
      /> */}

      {/* <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[-100px]
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-[#f1f4fb]
        "
      /> */}

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

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
        {/* =========================================
            HEADER
        ========================================== */}

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
            A systematic approach to pest control that ensures effective
            results, safety, and long-term protection for your home or business.
          </p>
        </header>

        {/* =========================================
            PROCESS
        ========================================== */}

        <div
          className="
            relative
            mt-10
            sm:mt-12
          "
        >
          {/* =======================================
              DESKTOP CONNECTING LINE
          ======================================== */}

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

          {/* =======================================
              DESKTOP ARROWS
          ======================================== */}

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

          {/* =======================================
              MOBILE VERTICAL LINE
          ======================================== */}

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

          {/* =======================================
              CARDS
          ======================================== */}

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


function ProtectionFeature({feature, index}) {
  const Icon = feature.icon;

  return (
    <div
      className={`
        group
        min-w-0
        text-center
      `}
    >
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
      {/* ==========================================
          MAIN CARD
      =========================================== */}

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
          {/* ======================================
              TOP CONTENT
          ======================================= */}

          <div
            className="
              grid
              min-w-0
              grid-cols-1
              lg:grid-cols-[38%_62%]
            "
          >
            {/* ====================================
                LEFT IMAGE
            ===================================== */}

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
                alt="Professional pest control service"
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

              {/* Image overlay */}

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

              {/* =================================
                  DIAGONAL DIVIDER
              ================================== */}

              {/* <div
                className="
                  pointer-events-none
                  absolute
                  right-[-1px]
                  top-0
                  hidden
                  h-full
                  w-[70px]
                  bg-white
                  lg:block
                "
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                }}
              /> */}

              {/* <div
                className="
                  pointer-events-none
                  absolute
                  right-[36px]
                  top-0
                  hidden
                  h-full
                  w-[5px]
                  bg-[#123b98]
                  lg:block
                "
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                }}
              /> */}
            </div>

            {/* ====================================
                RIGHT CONTENT
            ===================================== */}

            <div
              className="
                relative
                min-w-0
                px-5
                pb-8
                pt-7
                
              "
            >
              {/* =================================
                  HEADING
              ================================== */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                {/* Shield */}

                <div
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0
                    justify-center
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

                  {/* Heading underline */}

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
                    We use advanced techniques and high-quality products to
                    ensure a pest-free environment for your loved ones and your
                    property.
                  </p>
                </div>
              </div>

              {/* =================================
                  FEATURES
              ================================== */}

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
                {protectionFeatures.map((feature, index) => (
                  <ProtectionFeature
                    key={feature.title}
                    feature={feature}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ======================================
              CTA BAR
          ======================================= */}

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
            {/* Left */}

            <div
              className="
                flex
                min-w-0
                items-center
                gap-3
              "
            >
              {/* Phone Icon */}

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
                  Need Immediate Assistance?
                </span>

                <span
                  className="
                    text-md
                    text-white/90
                  "
                >
                  Our team is just a call away!
                </span>
              </div>
            </div>

            {/* Button */}

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