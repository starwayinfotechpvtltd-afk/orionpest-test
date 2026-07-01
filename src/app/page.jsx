// import Image from "next/image";
// import Link from "next/link";
// import Review from "@/components/ui/Testimonials";
// import Form from "@/components/ui/SubmitForm";
// import PageData from "@/components/ui/PageData";
// import { getPageData } from "@/lib/getPageData";

// const certifictions = [
//   {
//     id: 1,
//     image: "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893988/img4_jixnpk.png",
//   },
//   {
//     id: 2,
//     image: "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893988/img3_gpjgns.png",
//   },
//   {
//     id: 3,
//     image: "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893987/img2_kx7drk.png",
//   },
//   {
//     id: 4,
//     image: "https://res.cloudinary.com/dstlumjlw/image/upload/v1770893987/img1_xo6lsw.png",
//   },
// ];

// const clients = [
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894048/img7_m0rsfl.webp",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894047/img6_f1ypc6.jpg",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894050/img8_oa67dw.jpg",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894051/img10_nhwgta.webp",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894052/img11_tsyjhr.png",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894131/img73_tizcd3.png",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894109/img55_kdnu1q.webp",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894048/img6_e55i2r.png",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894045/img4_tmpavf.png",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894046/img5_sau6fx.jpg",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894051/img9_hk2dj1.png",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894056/img15_q3nedu.png",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894055/img13_yqq4fs.png",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894055/img14_yw3d4l.png",
//   "https://res.cloudinary.com/dstlumjlw/image/upload/v1770894044/img3_gha5qo.png",
// ];

// const homeServices = [
//   {
//     image: "/Images/home1.jpg",
//     text: "RESIDENTIAL PEST CONTROL SERVICES",
//     link: "/services/residential",
//   },
//   {
//     image: "/Images/home2.jpg",
//     text: "COMMERCIAL PEST CONTROL SERVICES",
//     link: "/services/commercial",
//   },
//   {
//     image: "/Images/home3.jpg",
//     text: "FUMIGATION PEST CONTROL SERVICES",
//     link: "/services/fumigation",
//   },
//   {
//     image: "/Images/home4.jpg",
//     text: "TERMITE PEST CONTROL SERVICES",
//     link: "/services/termite-control",
//   },
// ];

// const whyChooseUs = [
//   {
//     icon: "/Images/support.png",
//   },
//   {
//     icon: "/Images/professional.png",
//   },
//   {
//     icon: "/Images/environment.png",
//   },
//   {
//     icon: "/Images/satisfaction.png",
//   },
// ];

// export async function generateMetadata() {
//   const page = await getPageData("home");
//   return {
//     title: page?.metaTitle || "Pest Control Services Near You | Trusted Pest Control Company in India",
//     description: page?.metaDescription || "Looking for reliable pest control services near you? Orion Pest offers safe, effective pest control solutions for homes and businesses across India. Book today.",
//   };
// }

// export default function Home() {

//   return (
//     <div className="w-full">
//       {/* <PageData segment={"home"}> */}
//         <>
//           <div className="w-[95%] md:w-[80%] mx-auto">
//             <h1 className="text-[#2F3293] text-2xl md:text-4xl lg:text-5xl font-bold font-sans mx-auto text-center mt-20">
//               Largest Indian Owned <br></br> Pan India Pest Control Company
//             </h1>
//             <h5 className="text-2xl text-center text-[#0094DA] mt-5 font-bold">
//               Orion Pest Solutions Pvt. Ltd
//             </h5>
//             <p className="md:text-center mt-5 text-lg text-justify  px-2">
//               The most trusted and reliable company providing the best pest
//               control solutions in India.
//             </p>

//             <p className="md:text-center text-justify mt-5 max-w-5xl mx-auto text-lg px-2">
//               Established in 1998, we are constantly pushing the envelope with
//               innovations in the niche industry. Today, we take pride in
//               identifying ourselves as the pioneers of the pest management
//               industry.
//             </p>

//             <div className="flex flex-col lg:flex-row gap-10 items-center bg-[#FEF202] rounded-3xl mt-10 w-full overflow-hidden relative">
//               <div className="homepage_image relative w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] xl:h-[560px] 2xl:h-[500px] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none ">
//                 <Image
//                   src="https://res.cloudinary.com/dstlumjlw/image/upload/v1770893894/img3_pp9ild.png"
//                   fill
//                   alt="image"
//                   className="object-cover"
//                 />
//               </div>

//               <div className="w-full lg:w-1/2 font-bold text-[#2F3293] flex flex-col gap-8 items-start justify-center pl-10 lg:pl-0 pr-10 py-10">
//                 <p className="text-justify text-md">
//                   Are you tired of dealing with cockroaches, termites, bed bugs,
//                   or mosquitoes? Don’t worry Orion Pest Solutions is here to
//                   help. We provide safe, affordable, and effective pest control
//                   services to protect your home, office, and surroundings from
//                   unwanted pests.
//                   <br />
//                   <br />
//                   Our team of trained professionals uses modern equipment and
//                   eco-friendly products to ensure complete pest removal without
//                   harming your family, pets, or the environment. Whether you’re
//                   facing a small problem or a major infestation, we’re ready to
//                   provide fast and reliable solutions.
//                   <br />
//                   <br />
//                   We understand that every customer and every property is
//                   different. That’s why we offer customized pest control plans
//                   designed to suit your specific needs. From one-time treatments
//                   to regular maintenance services, we make sure your space stays
//                   pest-free all year round.
//                 </p>

//                 <div className="flex flex-row items-center gap-4 md:gap-8 justify-center mx-auto">
//                   <a
//                     className="bg-[#2F3293] rounded-xl text-white px-3 sm:px-8 py-3 cursor-pointer"
//                     href="tel:1800 419 8181"
//                   >
//                     Call Now
//                   </a>

//                   <a
//                     className="relative overflow-hidden rounded-xl px-3 sm:px-8 py-3 text-white transition-all duration-500 group border-2
//                border-[#2F3293] cursor-pointer bg-[#2F3293]"
//                     href={"contact"}
//                   >
//                     <span className="relative z-10 text-white">
//                       Get a quote
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <p className="md:text-center px-2 text-justify text-md text-lg mt-10">
//               Boasting of an expansive pan-India presence, we operate in{" "}
//               <span className="font-semibold md:font-bold text-black">
//                 Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad,
//                 Jaipur, Indore, Kolhapur, Kodaikanal, Dehradun, Mysore,
//                 Coimbatore, Vijayawada, Bilaspur, Puducherry, Aurangabad,
//                 Burdwan, Visakhapatnam, Guwahati, Ranchi, Dhanbad, Siliguri,
//                 Nagpur, Bhubaneswar, Kerala, Haldia, Jamshedpur, Raipur,
//                 Lucknow, Patna, Cochin, Mangalore, Trivandrum and Daman,
//                 including Bhutan and Nepal.
//               </span>
//             </p>
//           </div>

//           {/* Blue area */}
//           <div className="bg-linear-to-br from-cyan-500 to-blue-500 w-full mt-20 p-10 mb-10 md:mb-20 border-b-8 border-blue-800">
//             <div className="w-[95%] md:w-[80%] mx-auto">
//               <p className="w-full text-white text-justify text-lg">
//                 Our vast experience, helmed by state-of-the-art technology,
//                 keeps you protected from every kind of pest menace. At Orion
//                 Pest Solutions Pvt. Ltd., we relentlessly strive to deliver the
//                 best pest control services in India, combining proven expertise
//                 with modern, science-backed techniques. <br></br> We provide
//                 prompt, affordable, and efficient pest control solutions
//                 designed to eliminate infestations quickly while ensuring
//                 long-term protection. Our comprehensive range of services covers
//                 Commercial Pest Control, Residential Pest Control, Herbal Pest
//                 Control, Termite Control, Mosquito Control, Rodent Control, and
//                 more. Whether it is your home, office, warehouse, or industrial
//                 space, we are available 24/7 at your service, offering
//                 tailor-made solutions to suit every requirement. <br></br>
//                 Headquartered in Kolkata, Orion has steadily grown to become one
//                 of the most trusted pest management companies in India, with a
//                 strong presence across multiple cities. Over the years, we have
//                 successfully catered to residential societies, corporate
//                 offices, hospitals, hotels, educational institutions, and
//                 government establishments—building long-term relationships with
//                 clients who value our professionalism. <br></br> What sets us
//                 apart is our team of highly trained experts who understand the
//                 root cause of infestations and eliminate pests at the source. We
//                 don’t just control pests; we create safe, hygienic, and
//                 pest-free environments that give you peace of mind. Most
//                 importantly, we strictly use safe, eco-friendly, and
//                 government-approved chemicals to protect your health, property,
//                 and the environment. <br></br> At Orion, we believe pest control
//                 is not just about extermination—it’s about prevention,
//                 protection, and lasting peace of mind. Our mission is simple: to
//                 safeguard your surroundings, enhance your quality of life, and
//                 make your spaces healthier and more comfortable. <br></br> So,
//                 if you are looking for India’s most reliable pest control
//                 partner, look no further. With Orion Pest Solutions Pvt. Ltd.,
//                 you’re not just hiring a service—you’re choosing a lifelong
//                 shield against pests.
//               </p>
//             </div>
//           </div>

//           {/* Form area */}
//           <div className="w-[90%] md:w-[600px] bg-[#2F3293] rounded-3xl mx-auto p-10">
//             <h2 className="md:text-4xl text-3xl text-white font-bold text-center mb-3">
//               Contact Us
//             </h2>
//             <Form />
//           </div>

//           {/* Grid area */}
//           <div className="w-[90%] md:w-full mx-auto mt-20">
//             <div className="md:flex justify-between items-center gap-4 md:w-[60%] mx-auto">

//               <div className="flex-1 min-w-0 flex flex-col gap-8">
//                 <div className="flex flex-col gap-3">
//                   <h3 className="text-2xl font-bold text-[#2F3293]">
//                     PAN INDIA SERVICES
//                   </h3>
//                   <p className="whitespace-normal break-words text-lg">
//                     Orion Pest Solutions Private Limited provides a range of
//                     pest control services in more than 72 locations in India
//                     including Nepal and Bhutan.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <h3 className="text-2xl font-bold text-[#2F3293]">
//                     GUARANTEED RESULTS
//                   </h3>
//                   <p className="text-lg whitespace-normal break-words">
//                     With our indepth experience over 27 plus years, we continue
//                     to enhance our operational excellence, safety, capability,
//                     customer service and innovations.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   <h3 className="text-2xl font-bold text-[#2F3293]">
//                     COST EFFECTIVE SOLUTIONS
//                   </h3>
//                   <p className="text-lg whitespace-normal break-words">
//                     Orion Pest Solutions Private Limited provides a range of
//                     pest control services in more than 72 locations in India
//                     including Nepal and Bhutan.
//                   </p>
//                 </div>
//               </div>
//               <div className="h-[550px] w-[300px] relative">
//               <img
//                 src="https://res.cloudinary.com/dstlumjlw/image/upload/v1770893893/img1_flrbu6.png"
//                 alt="img1"
//                 fill
//                 className="object-cover"
//               /></div>
//             </div>
//           </div>

//           {/* Pest Control Processes */}
//           <div className="mt-20 py-20 px-10 md:px-0 bg-[#5557a5] w-full">
//             <div className="md:w-[60%] mx-auto">
//               <div className="flex xl:flex-row flex-col justify-between items-center gap-10">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-white">
//                     Three Step Pest Control Process
//                   </h3>
//                   <p className="text-lg font-semibold text-white mt-5">
//                     1: INSPECT
//                   </p>
//                   <p className="text-white text-lg">
//                     Inspect to pinpoint pest issues.
//                   </p>
//                   <p className="text-lg font-semibold text-white mt-3">
//                     2: IDENTIFY
//                   </p>
//                   <p className="text-white text-lg">
//                     Identify not only the pest, but the true cause of the
//                     problem.
//                   </p>
//                   <p className="text-lg font-semibold text-white mt-3">
//                     3: TREAT
//                   </p>
//                   <p className="text-white text-lg">
//                     Treat in the most environmentally responsible way to
//                     alleviate current issues and help prevent any future
//                     recurrence.
//                   </p>
//                 </div>
//                 <Image
//                   src={"/Images/home.jpg"}
//                   height={500}
//                   width={500}
//                   alt="home image"
//                   className="p-2 border-1 border-gray-300 rounded"
//                 />
//               </div>
//               <p className="text-xl font-semibold mt-10 text-white">
//                 ORION INTEGRATED PEST MANAGEMENT (IPM)
//               </p>
//               <p className="text-lg text-white">
//                 Orion IPM is an approach to pest control. It coheres to regular
//                 monitoring services in order to determine if and when the pest
//                 treatments are needed.
//               </p>
//             </div>
//           </div>

//           {/* Home services */}
//           <div className="md:w-[60%] w-[90%] mx-auto mt-10">
//             <h3 className="text-center text-[#2F3293] font-bold text-5xl">
//               Services
//             </h3>
//             <div className="mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-5 w-full mt-10 gap-2">
//               {homeServices.map((item, index) => (
//                 <Link
//                   href={`${item.link}`}
//                   className="flex flex-col items-center justify-center gap-3 hover:shadow-2xl p-3 cursor-pointer py-5"
//                   key={index}
//                 >
//                   <Image
//                     src={item.image}
//                     height={250}
//                     width={250}
//                     alt={`home${index}`}
//                     className="p-2 border-1 border-gray-400"
//                   />
//                   <p className="md:text-lg text-center font-stretch-90%">
//                     {item.text}
//                   </p>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Review */}
//           <div className="w-[90%] md:w-full mx-auto overflow-hidden">
//             <div className="md:w-[60%] mx-auto">
//               <Review />
//             </div>
//           </div>

//           {/* Yellow area */}
//           <div className="bg-linear-to-br from-[#FFF300] to-[#FEBA00] pb-60 md:pb-80 relative mt-10 md:mt-20">
//             <div className="w-full md:w-[60%] mx-auto px-5">
//               <h2 className="text-2xl md:text-4xl font-bold uppercase text-[#2F3293] pt-16 pb-12 text-center">
//                 Membership & Certification
//               </h2>
//               <div className="flex gap-3 items-center justify-center">
//                 {certifictions.map((image) => (
//                   <div
//                     className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] relative"
//                     key={image.id}
//                   >
//                     <img
//                       src={image?.image}
//                       alt="img1"
//                       fill
//                       className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-12">
//                 <h4 className="text-center text-3xl font-bold uppercase text-[#2F3293]">
//                   Our clients
//                 </h4>
//                 <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-10 justify-center items-center">
//                   {clients.map((client, index) => (
//                     <div
//                       className="w-24 h-20 md:w-32 md:h-20 relative mx-auto"
//                       key={index}
//                     >
//                       <Image
//                         src={client}
//                         fill
//                         alt={`img${index}`}
//                         className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-2xl bg-white object-cover"
//                         key={index}
//                         style={{
//                           boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       {/* </PageData> */}
//     </div>
//   );
// }

// import React from "react";
// import {
//   ShieldCheck,
//   Phone,
//   ArrowRight,
//   Calendar,
//   UsersRound,
//   MapPin,
//   Headset,
//   Award,
//   Bug,
//   ChevronDown,
//   Mail,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaStar, FaLocationDot } from "react-icons/fa6";
// import { IoShieldCheckmark } from "react-icons/io5";
// import InfoCard from "@/components/services/ui/InfoCard";
// import TestimonialsSection from "@/components/ui/Testimonials";
// import BrandSection from "@/components/services/BrandSection";
// import ChildSafeSection from "@/components/services/ChildSafeSection";
// import FAQSection from "@/components/ui/FAQ";
// import ContactInfo from "@/components/services/ui/ContactInfo";
// import Form from "@/components/ui/Form";

// export default function page() {
//   const stat = [
//     {
//       icon: <Calendar />,
//       heading: "27+",
//       subHeading: "Years Experience",
//     },
//     {
//       icon: <UsersRound />,
//       heading: "1Million+",
//       subHeading: "Happy Customers",
//     },
//     {
//       icon: <MapPin />,
//       heading: "72+",
//       subHeading: "Cities Covered",
//     },
//   ];

//   // About Us
//   const features = [
//     {
//       icon: <Bug size={40} />,
//       title: "Trust & Experience Focused",
//       description:
//         "With years of hands-on experience, SafePest delivers reliable pest control service.",
//       active: false,
//     },
//     {
//       icon: <ShieldCheck size={40} />,
//       title: "Customer-Centric",
//       description:
//         "At SafePest, your safety and comfort come first. We tailor every pest control plan.",
//       active: true,
//     },
//     {
//       icon: <Award size={40} />,
//       title: "Eco & Safety Focused",
//       description:
//         "We use environmentally responsible and safe eco-products suitable for families.",
//       active: false,
//     },
//   ];

//   const stats = [
//     {
//       number: "6K+",
//       title: "Happy Customers",
//     },
//     {
//       number: "10+",
//       title: "Years Experience",
//     },
//     {
//       number: "100%",
//       title: "Satisfaction",
//     },
//     {
//       number: "98%",
//       title: "Success Rate",
//     },
//   ];

//   // Diagram section
//   const locations = [
//     {
//       icon: "/Images/icon/icon2.png",
//       title: "Commercial",
//     },
//     {
//       icon: "/Images/icon/icon6.png",
//       title: "Hotels",
//     },
//     {
//       icon: "/Images/icon/icon1.png",
//       title: "Residential",
//       active: true,
//     },
//     {
//       icon: "/Images/icon/icon7.png",
//       title: "Restaurants",
//     },
//     {
//       icon: "/Images/icon/icon5.png",
//       title: "Warehouses",
//     },
//   ];

//   const leftFeature = [
//     {
//       heading: "Find Hidden Infestations",
//       desc: "Our experts inspect mattresses, furniture, wall cracks, and upholstery to locate even the smallest bed bug colonies.",
//     },
//     {
//       heading: "Prevent Re-Infestation",
//       desc: "Our advanced treatment methods destroy bed bugs at every life stage, including eggs, preventing future outbreaks.",
//     },
//   ];

//   const rightFeature = [
//     {
//       heading: "Safe & Effective Treatment",
//       desc: "Professional solutions designed to eliminate bed bugs while remaining safe for families and pets.",
//     },
//     {
//       heading: "Long-Lasting Protection",
//       desc: "Comprehensive treatments that reduce the risk of bed bugs returning.",
//     },
//   ];

//   // Services
//   const services = [
//     {
//       title: "Cockroach\nControl",
//       image: "/Images/services/cockroach.png",
//     },
//     {
//       title: "Termite\nControl",
//       image: "/Images/services/termite.png",
//     },
//     {
//       title: "Bed Bug\nControl",
//       image: "/Images/services/bedbug.png",
//     },
//     {
//       title: "Rodent\nControl",
//       image: "/Images/services/rodent.png",
//     },
//     {
//       title: "Mosquito\nControl",
//       image: "/Images/services/mosquito.png",
//     },
//     {
//       title: "Ant\nControl",
//       image: "/Images/services/ant.png",
//     },
//     {
//       title: "Bird\nControl",
//       image: "/Images/services/bird.png",
//     },
//   ];

//   // Brand section

//   const cards1 = [
//     {
//       heading: "Complete Bed Bug Elimination",
//       desc: "Professional treatments that eliminate bed bugs from every hiding place.",
//       image: "/Images/services/bedbug3.png",
//       bgColor: "#FFF6DE",
//     },
//     {
//       heading: "Expert Inspection & Treatment",
//       desc: "Accurate inspection followed by customized treatment plans for complete control.",
//       image: "/Images/icon/vector2.png",
//       bgColor: "#EEF4FF",
//     },
//     {
//       heading: "Long-Term Bed Bug Protection",
//       desc: "Prevent future infestations with professional monitoring and preventive solutions.",
//       image: "/Images/icon/vector3.png",
//       bgColor: "#FFF1F2",
//     },
//   ];

//   // About Us
//   const cards2 = [
//     {
//       number: "01",
//       title: "Protect your spaces",
//       description:
//         "We safeguard your home, office, or commercial property with safe and effective treatments designed to eliminate pests and prevent them from coming back.",
//     },
//     {
//       number: "02",
//       title: "Promote Healthy Living",
//       description:
//         "We use eco-friendly and pet-safe solutions that protect your loved ones while making the space you live in healthier.",
//     },
//     {
//       number: "03",
//       title: "Build Trust",
//       description:
//         "Our service includes transparent pricing and guaranteed results which builds lasting relationships with our customers.",
//     },
//   ];

//   // Cities section
//   const cities = [
//     {
//       name: "Delhi",
//       image: "/Images/delhi.jpg",
//     },
//     {
//       name: "Mumbai",
//       image: "/Images/mumbai.jpg",
//     },
//     {
//       name: "Bengaluru",
//       image: "/Images/bengalore.jpg",
//     },
//     {
//       name: "Chennai",
//       image: "/Images/chennai.jpg",
//     },
//     {
//       name: "Hyderabad",
//       image: "/Images/hydrabad.jpg",
//     },
//     {
//       name: "Kolkata",
//       image: "/Images/kolkata.webp",
//     },
//   ];

//   return (
//     <div>
//       {/* Hero section */}
//       <section className="relative overflow-hidden bg-linear-30 from-white to-[#F4F6F9]">
//         <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 py-12 md:py-16 lg:py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="order-1">
//               {/* Logo */}
//               <div className="flex items-center gap-2 mb-6 md:mb-8">
//                 <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
//                   <ShieldCheck className="w-4 h-4 text-white" />
//                 </div>
//                 <span className="font-semibold text-gray-700 tracking-wide text-sm sm:text-base">
//                   India's Most Trusted Pest Control Company
//                 </span>
//               </div>

//               <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
//                 Safe, Effective & Reliable Pest Control Solutions
//                 <br />
//                 <span className="text-[#1095D9]">Accross India</span>
//               </h1>

//               <p className="mt-4 md:mt-6 text-lg sm:text-xl text-gray-600 font-medium">
//                 27+ years of experience of delivering safe, eco-friendly and
//                 government approved pest control services for Homes, Offices &
//                 Industries in 72+ locations.
//               </p>

//               <p className="mt-4 text-gray-500 max-w-xl leading-relaxed text-base sm:text-lg md:text-xl"></p>

//               {/* Features */}
//               <div className="mt-8 grid grid-cols-2 md:grid-cols-3 justify-between gap-10">
//                 {stat.map((item, index) => (
//                   <div key={index} className="flex items-center gap-2">
//                     <div className="text-xl p-2 bg-[#FECE18] rounded-full">
//                       {item.icon}
//                     </div>
//                     <div className="space-y-0">
//                       <p className="text-[#0D2391] text-lg font-bold text-nowrap">
//                         {item.heading}
//                       </p>
//                       <p className="text-md text-nowrap">{item.subHeading}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="mt-10 flex flex-col xl:flex-row gap-4">
//                 <Link
//                   className="w-full sm:w-auto justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer"
//                   href="/contact"
//                 >
//                   BOOK FREE INSPECTION
//                   <ArrowRight size={18} />
//                 </Link>

//                 <Link
//                   className="w-full sm:w-auto justify-center border border-gray-300 hover:border-yellow-400 px-6 sm:px-8 py-4 rounded-xl flex items-center gap-3 font-medium text-sm sm:text-base"
//                   href="tel:1800 419 8181"
//                 >
//                   <Phone size={18} />
//                   CALL 1800 419 8181
//                 </Link>
//               </div>
//             </div>

//             {/* Right Image Container */}
//             <div className="flex justify-center order-1 lg:order-2 overflow-visible py-8 lg:py-0">
//               {/* Circle Background scaled responsively */}
//               <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[570px] xl:h-[570px] 2xl:w-[700px] 2xl:h-[700px] rounded-full bg-linear-90 from-white via-[#FEC42A]/50 to-[#FEC42A]">
//                 <div className="relative -left-7 2xl:-left-10 z-[1px] h-[85%] w-[88%] rounded-full mx-auto mt-[7%]">
//                   <Image
//                     src="/Images/bugs/bg.png"
//                     alt="Cockroach Pest Control"
//                     fill
//                     className="object-cover drop-shadow-2xl rounded-full"
//                   />
//                 </div>
//                 {/* Image Card Overlap scaled to container layout */}
//                 <div className="relative">
//                   <Image
//                     src="/Images/services/residential.png"
//                     alt="Cockroach Pest Control"
//                     fill
//                     className="object-contain drop-shadow-2xl rounded-full"
//                   />
//                 </div>

//                 {/* Badge repositioned neatly for smaller displays */}
//                 <div className="absolute -right-4 top-4 sm:right-4 sm:top-10 lg:right-0 lg:top-0 xl:right-10 xl:top-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl p-3 sm:p-6 w-32 sm:w-48 flex flex-col justify-center items-center">
//                   <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-2 sm:mb-4">
//                     <ShieldCheck className="text-yellow-500 w-6 h-6 sm:w-12 sm:h-12" />
//                   </div>
//                   <p className="text-gray-600 text-[10px] sm:text-sm text-center leading-tight">
//                     India's Most Trusted Pest Control Brand
//                   </p>
//                   <span className="text-yellow-500 font-bold text-xs sm:text-base mt-1 sm:mt-2">
//                     Since 1970
//                   </span>
//                   <div className="w-12 sm:w-20 h-[2px] sm:h-[3px] bg-yellow-500 mt-1 sm:mt-2 rounded-2xl"></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Stats Grid */}
//           <div className="mt-10  bg-white rounded-2xl border-[#F6F6F8] border shadow-sm relative">
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#F6F6F8] bg-[#0D2391] rounded-2xl py-10">
//               <div className="flex items-start gap-5 px-5">
//                 <div className="rounded-full p-3 bg-[#FECE18]">
//                   <FaStar size={26} color="#0D2391" />
//                 </div>
//                 <div className="space-y-0.5">
//                   <p className="text-white text-xl font-bold">4.8/5</p>
//                   <div className="flex items-center gap-1">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <div key={i}>
//                         <FaStar color="#FECE18" />
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-white">Google Rating</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-5 px-5">
//                 <div className="relative rounded-full w-[60px] h-[60px]">
//                   <Image
//                     src="/Images/ipca.png"
//                     alt="IPCA"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <div className="space-y-0.5">
//                   <p className="text-white text-xl font-bold">IPCA</p>
//                   <p className="text-white">Member</p>
//                   <p className="text-white">
//                     (Indian Pest Control Association)
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-5 px-5">
//                 <div className="rounded-full p-3 bg-[#FECE18]">
//                   <IoShieldCheckmark size={26} color="#0D2391" />
//                 </div>
//                 <div className="space-y-0.5">
//                   <p className="text-white text-xl font-bold">ISO</p>
//                   <p className="text-white">9001:2015</p>
//                   <p className="text-white">Certified</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-5 px-5">
//                 <div className="rounded-full p-3 bg-[#FECE18]">
//                   <UsersRound size={26} color="#0D2391" />
//                 </div>
//                 <div className="space-y-0.5">
//                   <p className="text-white text-xl font-bold">25,000+</p>
//                   <p className="text-white">Business Served</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-5 px-5">
//                 <div className="rounded-full p-3 bg-[#FECE18]">
//                   <Headset size={26} color="#0D2391" />
//                 </div>
//                 <div className="space-y-0.5">
//                   <p className="text-white text-xl font-bold">Quick Response</p>
//                   <p className="text-white">Same day service accorss cities</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Abou Us section */}
//       <section className="bg-white py-20">
//         <div className="max-w-[80%] mx-auto px-6">
//           {/* Top */}

//           <div className="flex gap-40 items-start">
//             {/* Left */}

//             <div>
//               <button className="inline-flex items-center gap-3 border rounded-full px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 transition text-nowrap">
//                 <span className="bg-yellow-400 rounded-full p-1">
//                   <ArrowRight size={16} />
//                 </span>
//                 About Us
//               </button>
//             </div>

//             {/* Right */}

//             <div>
//               <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-black">
//                 Orion Pest is a Trusted Pest Control Company Dedicated to
//                 Protecting Homes and Businesses With Safe.
//               </h2>

//               <Link
//                 href="/about"
//                 className="mt-8 bg-yellow-400 hover:bg-yellow-500 transition rounded-xl px-8 py-4 font-semibold flex items-center gap-4 w-fit cursor-pointer"
//               >
//                 Learn More About Us
//                 <ArrowRight />
//               </Link>
//             </div>
//           </div>

//           {/* Cards */}

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
//             {features.map((item, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-300 rounded-3xl p-6 hover:shadow-xl transition"
//               >
//                 <div className="bg-[#2F3293] text-white w-20 h-20 rounded-full flex items-center justify-center">
//                   {item.icon}
//                 </div>

//                 <div
//                   className={`mt-8 rounded-2xl p-6 ${
//                     item.active ? "bg-yellow-100" : "bg-indigo-50"
//                   }`}
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 mt-4 leading-7">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Stats */}

//           <div className="grid grid-cols-2 lg:grid-cols-4 mt-20">
//             {stats.map((item, index) => (
//               <div
//                 key={index}
//                 className={`text-center py-6 ${
//                   index !== stats.length - 1
//                     ? "lg:border-r-2 border-yellow-400"
//                     : ""
//                 }`}
//               >
//                 <h2 className="text-6xl font-black">{item.number}</h2>

//                 <p className="text-indigo-700 mt-3 font-semibold text-xl">
//                   {item.title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Diagram */}
//       <section className="relative overflow-hidden bg-[#F5F7FB] py-16 md:py-24">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5f7fb_60%)]" />

//         <div className="relative mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-8 w-full">
//           {/* Top Heading */}
//           <div className="text-center max-w-4xl mx-auto">
//             <span className="inline-flex bg-yellow-400 text-[#0D1A63] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-md text-xs sm:text-sm">
//               COMPLETE COCKROACH CONTROL
//             </span>

//             <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-10">
//               Complete Bed Bug Control
//               <br />
//               <span className="text-[#0094DA]">at Every Place.</span>
//             </h2>

//             <p className="mt-4 text-gray-600 text-base sm:text-lg">
//               Whether it's your home, hotel, hostel, apartment, hospital, or
//               commercial property, our specialized bed bug treatment ensures
//               complete protection and restful sleep.
//             </p>
//           </div>

//           {/* Main Content Dial Diagram Layout */}
//           <div className="relative mt-3 md:mt-20 flex flex-col lg:flex-row items-center justify-center lg:gap-16 xl:gap-20">
//             {/* Left Features */}
//             <div className="space-y-8 md:space-y-10 w-full sm:max-w-md lg:w-72 order-2 lg:order-1">
//               {leftFeature.map((item, index) => (
//                 <div key={index}>
//                   <InfoCard
//                     index={index}
//                     title={item.heading}
//                     description={item.desc}
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Center Circle Ring Group */}
//             <div className="relative flex justify-center items-center order-1 lg:order-2 my-6 lg:my-0 scale-75 sm:scale-100">
//               <div className="absolute w-[400px] h-[400px] sm:w-[430px] sm:h-[430px] lg:w-[460px] lg:h-[460px] rounded-full border-[10px] sm:border-[14px] border-[#2F3293]" />
//               <div className="absolute w-[370px] h-[370px] sm:w-[390px] sm:h-[390px] lg:w-[420px] lg:h-[420px] rounded-full border-[6px] sm:border-[8px] border-blue-200" />
//               <div className="absolute top-12 sm:top-8 left-2 w-3 h-3 bg-yellow-400 rounded-full" />
//               <div className="absolute top-12   sm:top-8 right-2 w-3 h-3 bg-yellow-400 rounded-full" />

//               <div className="relative w-[350px] h-[350px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl border-[6px] sm:border-[10px] border-white">
//                 <Image
//                   src="/Images/icon/icon4.webp"
//                   alt="House"
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               <div className="absolute z-[2] -bottom-5  w-28 sm:w-36 h-28 sm:h-36">
//                 <Image
//                   src="/Images/icon/icon3.png"
//                   alt="icon"
//                   fill
//                   className="object-cover z-[2]"
//                 />
//               </div>
//             </div>

//             {/* Right Features */}
//             <div className="space-y-8 md:space-y-10 w-full sm:max-w-md lg:w-72 order-3">
//               {rightFeature.map((item, index) => (
//                 <div key={index}>
//                   <InfoCard
//                     index={index + 2}
//                     title={item.heading}
//                     description={item.desc}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Location Cards Component List Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 bg-[#F5F7FB] relative mt-10 lg:-mt-5">
//             {locations.map((item, index) => (
//               <div
//                 key={index}
//                 className={`bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border ${
//                   item.active
//                     ? "border-blue-600 lg:scale-105"
//                     : "border-gray-100"
//                 }`}
//               >
//                 <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-blue-50 flex items-center justify-center">
//                   <Image
//                     src={item.icon}
//                     alt={`${item.icon}/${index}`}
//                     fill
//                     className="object-cover rounded-full"
//                   />
//                 </div>
//                 <h3 className="mt-5 text-lg sm:text-xl font-semibold text-[#07155F]">
//                   {item.title}
//                 </h3>
//                 <div className="mt-3 w-12 h-1 bg-yellow-400 mx-auto rounded-full" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-24 bg-white">
//         <div className="max-w-[80%] mx-auto px-5">
//           <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
//             {/* LEFT */}

//             <div>
//               {/* Badge */}

//               <span className="inline-block rounded-full bg-yellow-100 text-[#102B83] px-5 py-2 text-sm font-bold uppercase tracking-wide">
//                 Our Services
//               </span>

//               {/* Heading */}

//               <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-[#102B83] leading-tight">
//                 Pest Control for Every Need
//               </h2>

//               <p className="mt-3 max-w-2xl text-lg text-gray-600 leading-8">
//                 From crawling insects to rodents and birds, we provide complete
//                 protection for your home, office, and commercial spaces.
//               </p>

//               {/* Services */}

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
//                 {services.map((service, index) => (
//                   <div
//                     key={index}
//                     className="group bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 p-3 cursor-pointer"
//                   >
//                     <div className="flex justify-center">
//                       <Image
//                         src={service.image}
//                         alt={service.title}
//                         width={150}
//                         height={150}
//                         className="object-contain h-32 w-auto transition duration-300 group-hover:scale-110"
//                       />
//                     </div>

//                     <h3 className="mt-5 text-[#102B83] font-bold text-xl leading-7 text-center">
//                       {service.title}
//                     </h3>

//                     <div className="mt-2 w-20 h-1 rounded bg-yellow-400 mx-auto"></div>
//                   </div>
//                 ))}
//                 {/* Button */}

//                 <button
//                   className="bg-[#102B83] hover:bg-[#0b2165] text-white p-5 rounded-xl font-semibold flex items-center transition
//                  h-full w-full cursor-pointer text-xl"
//                 >
//                   View All Services
//                   <ArrowRight size={30} />
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT */}

//             <div>
//               <div className="bg-[#102B83] rounded-3xl p-8 text-white shadow-2xl">
//                 <h3 className="text-4xl font-bold">Get Free Inspection</h3>

//                 <p className="mt-4 text-gray-200 leading-8">
//                   Fill in the form and our expert will connect with you.
//                 </p>

//                 <form className="space-y-5 mt-10">
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     className="w-full rounded-xl px-5 py-4 text-gray-800 outline-none bg-white"
//                   />

//                   <input
//                     type="text"
//                     placeholder="Mobile Number"
//                     className="w-full rounded-xl px-5 py-4 text-gray-800 outline-none bg-white"
//                   />

//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="w-full rounded-xl px-5 py-4 text-gray-800 outline-none bg-white"
//                   />

//                   <div className="relative">
//                     <select className="appearance-none w-full rounded-xl px-5 py-4 text-gray-800 outline-none bg-white">
//                       <option>Select City</option>
//                       <option>Kolkata</option>
//                       <option>Delhi</option>
//                       <option>Mumbai</option>
//                     </select>

//                     <ChevronDown
//                       className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600"
//                       size={18}
//                     />
//                   </div>

//                   <div className="relative">
//                     <select className="appearance-none w-full rounded-xl px-5 py-4 text-gray-800 outline-none bg-white">
//                       <option>Type of Service</option>
//                       <option>Cockroach Control</option>
//                       <option>Termite Control</option>
//                       <option>Bird Control</option>
//                     </select>

//                     <ChevronDown
//                       className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600"
//                       size={18}
//                     />
//                   </div>

//                   <button className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-xl py-4 font-bold text-[#102B83] text-lg transition">
//                     Submit Request
//                   </button>
//                 </form>

//                 <div className="border-t border-blue-700 mt-8 pt-6 flex justify-between text-sm">
//                   <div className="flex items-center gap-2 text-md">
//                     <ShieldCheck size={22} className="text-yellow-400" />
//                     No Spam
//                   </div>

//                   <div className="flex items-center gap-2 text-md">
//                     <ShieldCheck size={22} className="text-yellow-400" />
//                     100% Confidential
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonial Section*/}
//       <TestimonialsSection />

//       <BrandSection
//         heading={
//           <>
//             <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
//               Preferred by{" "}
//               <span className="text-[#0094DA]">Homes & Businesses</span> Across
//               India
//             </h2>
//           </>
//         }
//         cards={cards1}
//       />

//       {/* About Us */}
//       <section className="relative overflow-hidden bg-gradient-to-t from-yellow-100/80 via-[#F5FEFF] to-transparent py-24 ">
//         {/* Decorative Bugs */}

//         <Image
//           src="/Images/services/termite.png"
//           alt=""
//           width={200}
//           height={200}
//           className="absolute right-8 top-10 hidden lg:block"
//         />

//         <Image
//           src="/Images/services/ant.png"
//           alt=""
//           width={200}
//           height={200}
//           className="absolute left-10 bottom-8 hidden lg:block"
//         />

//         {/* Yellow Glow */}

//         <div className="absolute bottom-0 left-0 right-0 h-52  pointer-events-none" />

//         <div className="max-w-[80%] mx-auto px-6">
//           <div className="grid lg:grid-cols-2 justify-between gap-16 items-center">
//             {/* LEFT IMAGE */}

//             <div className="relative flex">
//               <Image
//                 src="/Images/man.png"
//                 alt="Pest Control"
//                 width={650}
//                 height={760}
//                 priority
//                 className="w-full max-w-xl h-auto"
//               />
//             </div>

//             {/* CONTENT */}

//             <div>
//               <div className="flex items-center gap-4">
//                 <span className="text-[#17329C] font-semibold text-lg">
//                   About Us
//                 </span>

//                 <span className="w-10 h-[3px] rounded-full bg-yellow-400" />
//               </div>

//               <h2 className="mt-6 text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
//                 Keeping Your Spaces
//                 <br />
//                 Healthy and Pest-Free
//               </h2>

//               <p className="mt-8 text-gray-600 text-lg leading-9">
//                 At Pest Control, we believe every home and workplace deserves to
//                 be safe, clean, and pest-free. With years of expertise in pest
//                 management, our certified team delivers eco-friendly solutions
//                 that protect your family, property, and peace of mind.
//               </p>

//               <p className="mt-6 text-gray-600 text-lg leading-9">
//                 We specialize in eliminating everything from common household
//                 pests to rodents and mosquitoes, ensuring long-lasting
//                 protection and peace of mind.
//               </p>
//             </div>
//           </div>

//           {/* Feature Cards */}

//           <div className="relative lg:-mt-40 mt-14 lg:ml-[300px]">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {cards2.map((item) => (
//                 <div
//                   key={item.number}
//                   className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
//                 >
//                   <h3 className="text-6xl font-bold text-[#17329C]">
//                     {item.number}
//                   </h3>

//                   <div className="w-12 h-1 bg-yellow-400 rounded mt-3 mb-7"></div>

//                   <h4 className="text-2xl font-semibold text-gray-900">
//                     {item.title}
//                   </h4>

//                   <p className="mt-5 text-gray-600 leading-8">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cities Section */}
//       <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
//         <div className="max-w-[80%] mx-auto px-5">
//           {/* Badge */}

//           <div className="inline-flex items-center rounded-full bg-yellow-100 px-5 py-2">
//             <span className="text-[#12308F] font-semibold text-sm uppercase tracking-wide">
//               PAN INDIA SERVICE
//             </span>
//           </div>

//           {/* Heading */}

//           <h2 className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-bold text-[#12308F] leading-tight">
//             Pest Control Services Across India
//           </h2>

//           <p className="mt-5 max-w-2xl text-gray-600 text-base md:text-lg leading-8">
//             We provide safe, effective, and eco-friendly pest control solutions
//             in
//             <span className="font-semibold text-[#12308F]">
//               {" "}
//               all major cities across India.
//             </span>
//           </p>

//           {/* Cards */}

//           <div className="mt-12">
//             {/* Mobile */}

//             <div className="flex gap-5 overflow-x-auto pb-5 lg:hidden snap-x snap-mandatory scrollbar-hide">
//               {cities.map((city) => (
//                 <div
//                   key={city.name}
//                   className="min-w-[260px] snap-center rounded-2xl overflow-hidden shadow-lg bg-white border group"
//                 >
//                   <div className="relative h-80 overflow-hidden">
//                     <Image
//                       src={city.image}
//                       alt={city.name}
//                       fill
//                       className="object-cover group-hover:scale-110 duration-500"
//                     />
//                   </div>

//                   <div className="bg-[#12308F] text-white px-6 py-5 flex items-center gap-2">
//                     <MapPin
//                       size={18}
//                       className="fill-yellow-400 text-yellow-400"
//                     />

//                     <span className="font-semibold text-lg">{city.name}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Desktop */}

//             <div className="hidden lg:grid grid-cols-6 gap-5">
//               {cities.map((city) => (
//                 <div
//                   key={city.name}
//                   className="rounded-2xl overflow-hidden shadow-lg border group cursor-pointer"
//                 >
//                   <div className="relative h-[330px] overflow-hidden">
//                     <Image
//                       src={city.image}
//                       alt={city.name}
//                       fill
//                       className="object-cover group-hover:scale-110 transition duration-500"
//                     />
//                   </div>

//                   <div className="bg-[#12308F] text-white py-5 px-6 flex items-center gap-2">
//                     <FaLocationDot
//                       size={18}
//                       className="fill-yellow-400 text-yellow-400"
//                     />

//                     <span className="font-semibold text-2xl">{city.name}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Child safe section */}
//       <ChildSafeSection />

//       {/* FAQ section */}
//       <FAQSection />

//       <section
//               className="relative overflow-hidden bg-[#FEFEFE] py-16 md:py-24"
//               style={{
//                 background: "url('/Images/CTA_background.webp')",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "no-repeat",
//               }}
//             >
//               <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 w-full relative z-[2]">
//                 <div className="grid gap-12 lg:grid-cols-2 items-start">
//                   {/* LEFT SIDE CONTENT SECTION */}
//                   <div>
//                     <p className="font-semibold uppercase tracking-widest text-smsm:text-base">
//                       <span className="text-blue-600">Get In</span>{" "}
//                       <span className="text-yellow-500">Touch</span>
//                     </p>

//                     <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight text-[#2F3293]">
//                       We're Here to
//                       <br />
//                       <span className="text-[#0095DA]">Help You Stay</span>
//                       <br />
//                       <span className="text-[#2F3293]">Extermination-Free.</span>
//                     </h2>

//                     <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-gray-600">
//                       Protect your property before ants cause costly structural
//                       damage. Book a professional extermination inspection with our
//                       certified experts today.
//                     </p>

//                     {/* Contact Info Row Components Column Base List Block */}
//                     <div className="mt-10 space-y-6 sm:space-y-8">
//                       <ContactInfo
//                         icon={<Phone size={24} />}
//                         title="CALL US"
//                         link="1800 419 8181"
//                         value="1800 419 8181"
//                         bg="bg-yellow-400"
//                       />
//                       <ContactInfo
//                         icon={<Mail size={24} />}
//                         title="EMAIL US"
//                         link="sales@orionpest.com"
//                         value="sales@orionpest.com"
//                         bg="bg-yellow-400"
//                       />
//                       <ContactInfo
//                         icon={<MapPin size={24} />}
//                         title="OUR HEAD OFFICE"
//                         value="200W,S P Mukherjee Road, Road, beside Bank of Baroda, Tollygunge, Kolkata, West Bengal 700026"
//                         bg="bg-yellow-400"
//                       />
//                     </div>
//                   </div>

//                   {/* RIGHT SIDE FORM COMPONENT BLOCK */}
//                   <div className="w-full">
//                     <Form />
//                   </div>
//                 </div>
//               </div>
//               {/* Bottom Decorative Circle Vector Element Shape Component Mock Container */}
//               <div className="absolute -bottom-12 -left-32 hidden xl:block overflow-hidden">
//                 <div
//                   className="relative overflow-hidden border-4 border-yellow-400 w-[450px] h-[230px] rounded-t-full"
//                   style={{
//                     background: "url('/Images/bugs/bg.png')",
//                     backgroundSize: "cover",
//                     backgroundRepeat: "no-repeat",
//                   }}
//                 >
//                   <div className="absolute left-32 top-5 w-52 h-52">
//                     <Image
//                       src="/Images/services/ant.png"
//                       alt="Cockroach"
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </section>
//     </div>
//   );
// }

import React from "react";
import {
  ShieldCheck,
  Phone,
  ArrowRight,
  Calendar,
  UsersRound,
  MapPin,
  Headset,
  Award,
  Bug,
  ChevronDown,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaLocationDot } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import InfoCard from "@/components/services/ui/InfoCard";
import TestimonialsSection from "@/components/ui/Testimonials";
import BrandSection from "@/components/services/BrandSection";
import ChildSafeSection from "@/components/services/ChildSafeSection";
import FAQSection from "@/components/ui/FAQ";
import ContactInfo from "@/components/services/ui/ContactInfo";
import Form from "@/components/ui/Form";

export default function page() {
  const stat = [
    {
      icon: <Calendar />,
      heading: "27+",
      subHeading: "Years Experience",
    },
    {
      icon: <UsersRound />,
      heading: "1Million+",
      subHeading: "Happy Customers",
    },
    {
      icon: <MapPin />,
      heading: "72+",
      subHeading: "Cities Covered",
    },
  ];

  // About Us
  const features = [
    {
      icon: <Bug size={40} />,
      title: "Trust & Experience Focused",
      description:
        "With years of hands-on experience, SafePest delivers reliable pest control service.",
      active: false,
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Customer-Centric",
      description:
        "At SafePest, your safety and comfort come first. We tailor every pest control plan.",
      active: true,
    },
    {
      icon: <Award size={40} />,
      title: "Eco & Safety Focused",
      description:
        "We use environmentally responsible and safe eco-products suitable for families.",
      active: false,
    },
  ];

  const stats = [
    {
      number: "6K+",
      title: "Happy Customers",
    },
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "100%",
      title: "Satisfaction",
    },
    {
      number: "98%",
      title: "Success Rate",
    },
  ];

  // Diagram section
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
      active: true,
    },
    {
      icon: "/Images/icon/icon7.png",
      title: "Restaurants",
    },
    {
      icon: "/Images/icon/icon5.png",
      title: "Warehouses",
    },
  ];

  const leftFeature = [
    {
      heading: "Find Hidden Infestations",
      desc: "Our experts inspect mattresses, furniture, wall cracks, and upholstery to locate even the smallest bed bug colonies.",
    },
    {
      heading: "Prevent Re-Infestation",
      desc: "Our advanced treatment methods destroy bed bugs at every life stage, including eggs, preventing future outbreaks.",
    },
  ];

  const rightFeature = [
    {
      heading: "Safe & Effective Treatment",
      desc: "Professional solutions designed to eliminate bed bugs while remaining safe for families and pets.",
    },
    {
      heading: "Long-Lasting Protection",
      desc: "Comprehensive treatments that reduce the risk of bed bugs returning.",
    },
  ];

  // Services
  const services = [
    {
      title: "Cockroach\nControl",
      image: "/Images/services/cockroach.png",
    },
    {
      title: "Termite\nControl",
      image: "/Images/services/termite.png",
    },
    {
      title: "Bed Bug\nControl",
      image: "/Images/services/bedbug.png",
    },
    {
      title: "Rodent\nControl",
      image: "/Images/services/rodent.png",
    },
    {
      title: "Mosquito\nControl",
      image: "/Images/services/mosquito.png",
    },
    {
      title: "Ant\nControl",
      image: "/Images/services/ant.png",
    },
    {
      title: "Bird\nControl",
      image: "/Images/services/bird.png",
    },
  ];

  // Brand section

  const cards1 = [
    {
      heading: "Complete Bed Bug Elimination",
      desc: "Professional treatments that eliminate bed bugs from every hiding place.",
      image: "/Images/services/bedbug3.png",
      bgColor: "#FFF6DE",
    },
    {
      heading: "Expert Inspection & Treatment",
      desc: "Accurate inspection followed by customized treatment plans for complete control.",
      image: "/Images/icon/vector2.png",
      bgColor: "#EEF4FF",
    },
    {
      heading: "Long-Term Bed Bug Protection",
      desc: "Prevent future infestations with professional monitoring and preventive solutions.",
      image: "/Images/icon/vector3.png",
      bgColor: "#FFF1F2",
    },
  ];

  // About Us
  const cards2 = [
    {
      number: "01",
      title: "Protect your spaces",
      description:
        "We safeguard your home, office, or commercial property with safe and effective treatments designed to eliminate pests and prevent them from coming back.",
    },
    {
      number: "02",
      title: "Promote Healthy Living",
      description:
        "We use eco-friendly and pet-safe solutions that protect your loved ones while making the space you live in healthier.",
    },
    {
      number: "03",
      title: "Build Trust",
      description:
        "Our service includes transparent pricing and guaranteed results which builds lasting relationships with our customers.",
    },
  ];

  // Cities section
  const cities = [
    {
      name: "Delhi",
      image: "/Images/delhi.jpg",
    },
    {
      name: "Mumbai",
      image: "/Images/mumbai.jpg",
    },
    {
      name: "Bengaluru",
      image: "/Images/bengalore.jpg",
    },
    {
      name: "Chennai",
      image: "/Images/chennai.jpg",
    },
    {
      name: "Hyderabad",
      image: "/Images/hydrabad.jpg",
    },
    {
      name: "Kolkata",
      image: "/Images/kolkata.webp",
    },
  ];

  return (
    <div className="overflow-x-hidden w-full max-w-[100vw]">
      {/* Hero section */}
      <section
        className="relative overflow-hidden bg-linear-30 from-white to-[#F4F6F9]"
        style={{
          backgroundImage: "url(/Images/header.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center justify-between">
            {/* Left Content */}
            <div className="w-full">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6 md:mb-8">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-700 tracking-wide text-sm sm:text-base">
                  India's Most Trusted Pest Control Company
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold text-[#36388D] leading-tight lg:!leading-[4.5rem]">
                Safe, Effective & Reliable Pest Control Solutions
                <br />
                <span className="text-[#1095D9]">Across India</span>
              </h1>

              <p className="mt-4 md:mt-6 text-lg sm:text-xl text-gray-600 font-medium">
                27+ years of experience of delivering safe, eco-friendly and
                government approved pest control services for Homes, Offices &
                Industries in 72+ locations.
              </p>

              <p className="mt-4 text-gray-500 max-w-xl leading-relaxed text-base sm:text-lg md:text-xl"></p>

              {/* Features */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 justify-between gap-6 md:gap-10">
                {stat.map((item, index) => (
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
              <div className="lg:w-[80%] w-[100%]">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Stats Grid */}
      <div className="-mt-10 bg-white rounded-2xl border-[#F6F6F8] border shadow-sm relative max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-8 xl:gap-y-0 xl:divide-x divide-[#F6F6F8]/30 bg-[#0D2391] rounded-2xl py-8 xl:py-10 items-center">
          <div className="flex items-start gap-5 px-5 lg:px-8">
            <div className="rounded-full p-3 bg-[#FECE18] shrink-0">
              <FaStar size={24} color="#0D2391" />
            </div>
            <div className="space-y-0.5">
              <p className="text-white text-xl font-bold">4.8/5</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i}>
                    <FaStar color="#FECE18" size={14} />
                  </div>
                ))}
              </div>
              <p className="text-white text-sm">Google Rating</p>
            </div>
          </div>
          <div className="flex items-start gap-5 px-5 lg:px-8">
            <div className="relative rounded-full w-[54px] h-[54px] shrink-0">
              <Image
                src="/Images/ipca.png"
                alt="IPCA"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-0.5">
              <p className="text-white text-xl font-bold">IPCA</p>
              <p className="text-white text-sm">Member</p>
            </div>
          </div>
          <div className="flex items-start gap-5 px-5 lg:px-8">
            <div className="rounded-full p-3 bg-[#FECE18] shrink-0">
              <IoShieldCheckmark size={24} color="#0D2391" />
            </div>
            <div className="space-y-0.5">
              <p className="text-white text-xl font-bold">ISO</p>
              <p className="text-white text-sm">9001:2015</p>
              <p className="text-white text-sm">Certified</p>
            </div>
          </div>
          <div className="flex items-start gap-5 px-5 lg:px-8">
            <div className="rounded-full p-3 bg-[#FECE18] shrink-0">
              <UsersRound size={24} color="#0D2391" />
            </div>
            <div className="space-y-0.5">
              <p className="text-white text-xl font-bold">25,000+</p>
              <p className="text-white text-sm">Business Served</p>
            </div>
          </div>
          <div className="flex items-start gap-5 px-5 lg:px-8">
            <div className="rounded-full p-3 bg-[#FECE18] shrink-0">
              <Headset size={24} color="#0D2391" />
            </div>
            <div className="space-y-0.5">
              <p className="text-white text-xl font-bold">Quick Response</p>
              <p className="text-white text-sm">
                Same day service across cities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us section */}
      <section className="bg-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-0">
          {/* Top */}

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-32 items-start">
            {/* Left */}

            <div>
              <button className="inline-flex items-center gap-3 border rounded-full px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 transition text-nowrap">
                <span className="bg-yellow-400 rounded-full p-1">
                  <ArrowRight size={16} />
                </span>
                About Us
              </button>
            </div>

            {/* Right */}

            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Orion Pest is a Trusted Pest Control Company Dedicated to
                Protecting Homes and Businesses With Safe.
              </h2>

              <Link
                href="/about"
                className="mt-8 bg-yellow-400 hover:bg-yellow-500 transition rounded-xl px-6 sm:px-8 py-4 font-semibold flex items-center gap-4 w-fit cursor-pointer text-sm sm:text-base"
              >
                Learn More About Us
                <ArrowRight />
              </Link>
            </div>
          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20">
            {features.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-3xl p-6 hover:shadow-xl transition"
              >
                <div className="bg-[#2F3293] text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>

                <div
                  className={`mt-6 sm:mt-8 rounded-2xl p-6 ${
                    item.active ? "bg-yellow-100" : "bg-indigo-50"
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-4 leading-7 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 mt-16 sm:mt-20">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`text-center py-4 sm:py-6 ${
                  index !== stats.length - 1
                    ? "lg:border-r-2 border-yellow-400"
                    : ""
                }`}
              >
                <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black">
                  {item.number}
                </h2>

                <p className="text-indigo-700 mt-2 sm:mt-3 font-semibold text-lg sm:text-xl">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagram */}
      <section className="relative overflow-hidden bg-[#F5F7FB] py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5f7fb_60%)]" />

        <div className="relative mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 w-full">
          {/* Top Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex bg-yellow-400 text-[#0D1A63] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-md text-xs sm:text-sm">
              COMPLETE COCKROACH CONTROL
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight lg:!leading-[3.9rem] mt-6 sm:mt-10">
              Complete Bed Bug Control
              <br className="hidden sm:block" />
              <span className="text-[#0094DA]"> at Every Place.</span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
              Whether it's your home, hotel, hostel, apartment, hospital, or
              commercial property, our specialized bed bug treatment ensures
              complete protection and restful sleep.
            </p>
          </div>

          {/* Main Content Dial Diagram Layout */}
          <div className="relative mt-12 md:mt-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 xl:gap-20">
            {/* Left Features */}
            <div className="space-y-6 md:space-y-10 w-full sm:max-w-md lg:w-72 order-2 lg:order-1">
              {leftFeature.map((item, index) => (
                <div key={index}>
                  <InfoCard
                    index={index}
                    title={item.heading}
                    description={item.desc}
                  />
                </div>
              ))}
            </div>

            {/* Center Circle Ring Group */}
            <div className="relative flex justify-center items-center order-1 lg:order-2 my-6 lg:my-0 scale-75 sm:scale-90 lg:scale-90 xl:scale-100">
              <div className="absolute w-[400px] h-[400px] sm:w-[430px] sm:h-[430px] lg:w-[460px] lg:h-[460px] rounded-full border-[10px] sm:border-[14px] border-[#2F3293]" />
              <div className="absolute w-[370px] h-[370px] sm:w-[390px] sm:h-[390px] lg:w-[420px] lg:h-[420px] rounded-full border-[6px] sm:border-[8px] border-blue-200" />
              <div className="absolute top-12 sm:top-8 left-2 w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="absolute top-12 sm:top-8 right-2 w-3 h-3 bg-yellow-400 rounded-full" />

              <div className="relative w-[350px] h-[350px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl border-[6px] sm:border-[10px] border-white">
                <Image
                  src="/Images/icon/icon4.webp"
                  alt="House"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute z-[2] -bottom-5 w-28 sm:w-36 h-28 sm:h-36">
                <Image
                  src="/Images/icon/icon3.png"
                  alt="icon"
                  fill
                  className="object-cover z-[2]"
                />
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-6 md:space-y-10 w-full sm:max-w-md lg:w-72 order-3">
              {rightFeature.map((item, index) => (
                <div key={index}>
                  <InfoCard
                    index={index + 2}
                    title={item.heading}
                    description={item.desc}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Location Cards Component List Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 bg-[#F5F7FB] relative mt-16 lg:mt-10 z-10">
            {locations.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border ${
                  item.active
                    ? "border-blue-600 lg:scale-105"
                    : "border-gray-100"
                }`}
              >
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto rounded-full bg-blue-50 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.icon}/${index}`}
                    fill
                    className="object-cover rounded-full p-2 lg:p-0"
                  />
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl font-semibold text-[#07155F]">
                  {item.title}
                </h3>
                <div className="mt-2 sm:mt-3 w-10 sm:w-12 h-1 bg-yellow-400 mx-auto rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-8 xl:gap-12">
            {/* LEFT */}

            <div>
              {/* Badge */}

              <span className="inline-block rounded-full bg-yellow-100 text-[#102B83] px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-bold uppercase tracking-wide">
                Our Services
              </span>

              {/* Heading */}

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B83] leading-tight">
                Pest Control for Every Need
              </h2>

              <p className="mt-3 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed sm:leading-8">
                From crawling insects to rodents and birds, we provide complete
                protection for your home, office, and commercial spaces.
              </p>

              {/* Services */}

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
                {services.map((service, index) => (
                  <div
                    key={index}
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

                    <div>
                      <h3 className="mt-4 sm:mt-5 text-[#102B83] font-bold text-lg sm:text-xl leading-snug sm:leading-7 text-center whitespace-pre-line">
                        {service.title}
                      </h3>
                      <div className="mt-2 w-16 sm:w-20 h-1 rounded bg-yellow-400 mx-auto"></div>
                    </div>
                  </div>
                ))}
                {/* Button */}

                <button
                  className="bg-[#102B83] hover:bg-[#0b2165] text-white p-4 sm:p-5 rounded-xl font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 transition 
                 h-full w-full cursor-pointer text-lg sm:text-xl text-center"
                >
                  View All Services
                  <ArrowRight size={24} className="sm:w-8 sm:h-8" />
                </button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="w-full">
              <Form bgColor="#102B83" header="Get a Free Quote" color="#fff" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section*/}
      <TestimonialsSection />

      <BrandSection
        heading={
          <>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2F3293] leading-tight">
              Preferred by{" "}
              <span className="text-[#0094DA]">Homes & Businesses</span> Across
              India
            </h2>
          </>
        }
        cards={cards1}
      />

      {/* About Us */}
      <section className="relative overflow-hidden bg-gradient-to-t from-yellow-100/80 via-[#F5FEFF] to-transparent py-16 sm:py-24 ">
        {/* Decorative Bugs */}

        <Image
          src="/Images/services/termite.png"
          alt=""
          width={200}
          height={200}
          className="absolute right-8 top-10 hidden xl:block pointer-events-none"
        />

        <Image
          src="/Images/services/ant.png"
          alt=""
          width={200}
          height={200}
          className="absolute left-10 bottom-8 hidden xl:block pointer-events-none"
        />

        {/* Yellow Glow */}

        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-52 pointer-events-none" />

        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="grid lg:grid-cols-2 justify-between gap-10 lg:gap-16 items-center">
            {/* LEFT IMAGE */}

            <div className="relative flex justify-center lg:justify-start">
              <Image
                src="/Images/man.png"
                alt="Pest Control Expert"
                width={650}
                height={760}
                priority
                className="w-full max-w-md lg:max-w-xl h-auto"
              />
            </div>

            {/* CONTENT */}

            <div>
              <div className="flex items-center gap-4">
                <span className="text-[#17329C] font-semibold text-base sm:text-lg">
                  About Us
                </span>

                <span className="w-10 h-[3px] rounded-full bg-yellow-400" />
              </div>

              <h2 className="mt-4 sm:mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                Keeping Your Spaces
                <br className="hidden sm:block" />
                Healthy and Pest-Free
              </h2>

              <p className="mt-6 sm:mt-8 text-gray-600 text-base sm:text-lg leading-relaxed sm:leading-9">
                At Pest Control, we believe every home and workplace deserves to
                be safe, clean, and pest-free. With years of expertise in pest
                management, our certified team delivers eco-friendly solutions
                that protect your family, property, and peace of mind.
              </p>

              <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed sm:leading-9">
                We specialize in eliminating everything from common household
                pests to rodents and mosquitoes, ensuring long-lasting
                protection and peace of mind.
              </p>
            </div>
          </div>

          {/* Feature Cards */}

          <div className="relative mt-12 lg:-mt-24 xl:-mt-32 lg:ml-auto lg:w-[85%] xl:w-auto xl:ml-[300px] z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {cards2.map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17329C]">
                    {item.number}
                  </h3>

                  <div className="w-10 sm:w-12 h-1 bg-yellow-400 rounded mt-3 mb-5 sm:mb-7"></div>

                  <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="mt-4 sm:mt-5 text-gray-600 leading-relaxed sm:leading-8 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden relative">
        <div className="max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-0">
          {/* Badge */}

          <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-1.5 sm:px-5 sm:py-2">
            <span className="text-[#12308F] font-semibold text-xs sm:text-sm uppercase tracking-wide">
              PAN INDIA SERVICE
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#12308F] leading-tight">
            Pest Control Services Across India
          </h2>

          <p className="mt-4 sm:mt-5 max-w-2xl text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8">
            We provide safe, effective, and eco-friendly pest control solutions
            in
            <span className="font-semibold text-[#12308F]">
              {" "}
              all major cities across India.
            </span>
          </p>

          {/* Cards */}

          <div className="mt-10 sm:mt-12">
            {/* Mobile / Tablet Scroll */}

            <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 lg:hidden snap-x snap-mandatory scrollbar-hide">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="min-w-[240px] sm:min-w-[280px] snap-center rounded-2xl overflow-hidden shadow-lg bg-white border group shrink-0"
                >
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-110 duration-500"
                    />
                  </div>

                  <div className="bg-[#12308F] text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-2">
                    <MapPin
                      size={18}
                      className="fill-yellow-400 text-yellow-400 shrink-0"
                    />

                    <span className="font-semibold text-base sm:text-lg">
                      {city.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop */}

            <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-6 gap-5">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="rounded-2xl overflow-hidden shadow-lg border group cursor-pointer"
                >
                  <div className="relative h-[280px] xl:h-[330px] overflow-hidden">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="bg-[#12308F] text-white py-4 xl:py-5 px-5 xl:px-6 flex items-center gap-2">
                    <FaLocationDot
                      size={18}
                      className="fill-yellow-400 text-yellow-400 shrink-0"
                    />

                    <span className="font-semibold text-lg xl:text-xl">
                      {city.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Child safe section */}
      <ChildSafeSection />

      {/* FAQ section */}
      <FAQSection />

      <section
        className="relative overflow-hidden bg-[#FEFEFE] py-16 md:py-24"
        style={{
          background: "url('/Images/CTA_background.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 w-full relative z-[2]">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
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

              <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
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
        {/* Bottom Decorative Circle Vector Element Shape Component Mock Container */}
        <div className="absolute -bottom-12 -left-32 hidden xl:block overflow-hidden pointer-events-none">
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
                alt="Ant"
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
