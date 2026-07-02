// "use client";
// import React from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Newsletter from "../ui/Newsletter";

// export default function Footer({ color }) {
//   const pathname = usePathname();
//   const isContact = pathname.startsWith("/contact");
//   // ${!isContact ? "bg-linear-to-br from-[#ffd900] to-[#ff9900]":"white"}
//   return (
//     <div className="w-full relative bg-[#2F3293] pb-16 md:pb-0 md:py-24">
//       {/* background image */}
//       <Image
//         src="/Images/footer.png"
//         alt="footer"
//         fill
//         className="absolute inset-0 w-full h-auto object-cover sm:object-fill"
//         style={{ top: "-250px" }}
//         priority
//       />

//       {/* content wrapper */}
//       <div className="relative w-[90%] md:w-[60%] mx-auto flex flex-col items-center sm:-top-[100px] px-3">
//         {/* heading */}
//         <h2 className="text-[#FEF200] text-2xl md:text-4xl font-bold text-center">
//           HAVE ANY QUESTIONS?
//         </h2>
//         <p className="text-center text-white mt-2 text-sm md:text-base">
//           We’re here to help—get in touch with us today.
//         </p>
//         {/* input */}
//         <Newsletter />
//         {/* <div className="flex flex-col  justify-center items-center gap-3 w-full mt-6 relative"> */}

//         {/* Social icons */}
//         <div className="flex flex-row items-center gap-2">
//           <Link href={"https://www.facebook.com/Orionpestsolution/"}>
//             <Image
//               src={"/Images/facebook.png"}
//               width={43}
//               height={43}
//               alt="facebook"
//               className="rounded-xl"
//             />
//           </Link>
//           <Link
//             href={
//               "https://in.linkedin.com/in/orion-pest-solutions-pvt-ltd-3ba200a"
//             }
//           >
//             <Image
//               src={"/Images/linkedin.png"}
//               width={43}
//               height={43}
//               alt="linkedin"
//               className="rounded-xl"
//             />
//           </Link>
//           <Link href={"https://www.instagram.com/orionpestindia"}>
//             <Image
//               src={"/Images/instagram.png"}
//               width={43}
//               height={43}
//               alt="instagram"
//             />
//           </Link>
//         </div>
//         {/* </div> */}
//         {/* contact info */}
//         <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-6 gap-6 w-full text-center">
//           {/* address */}
//           <div className="fleX flex-col text-center md:text-left">
//             <p className="text-white">Orion Pest Solutions Pvt. Ltd.</p>
//             <p className="text-white">200W, S.P. Mukherjee Road</p>
//             <p className="text-white">Kolkata - 700026, West Bengal, India.</p>
//           </div>

//           {/* email */}
//           <Link className="flex-1 text-white lg:mr-24 xl:mr-40" href={"mailto:sales@orionpest.com"}>sales@orionpest.com</Link>

//           {/* phone */}
//           <div className="flex flex-col text-center md:text-right">
//             <Link className="text-white text-nowrap" href={"tel:1800 419 8181"}>1800 419 8181</Link>
//             <Link className="text-white" href={"tel:9800123456"}>9800123456</Link>
//           </div>
//         </div>
//         {/* copyright */}
//         <p className="text-white text-center mt-10 text-sm md:text-base">
//           Copyright © 2026 Orion Pest Solutions. All Rights Reserved. Site
//           Designed & Maintained by Starway Web Digital.
//         </p>
//       </div>
//     </div>
//   );
// }

// components/Footer.jsx

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlinePhone, MdEmail } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Our Services", href: "/services" },
    { name: "Our Process", href: "/our-process" },
    { name: "Knowledge Center", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const services = [
    { name: "Cockroach Control", href: "/services/cockroach-control" },
    { name: "Termite Control", href: "/services/termite-control" },
    { name: "Bed Bug Control", href: "/services/bed-bug-control" },
    { name: "Bird Control", href: "/services/bird-control" },
    { name: "All Pest Control Services", href: "/services" },
  ];

  const locations = [
    { name: "Delhi", href: "/locations/delhi" },
    { name: "Mumbai", href: "/locations/mumbai" },
    { name: "Bangalore", href: "/locations/bangalore" },
    { name: "Hyderabad", href: "/locations/hyderabad" },
    { name: "All Locations", href: "/locations" },
  ];
  return (
    <footer>
      {/* CTA Section */}
      <div className="bg-[#042990] text-white">
        <div className="max-w-[85%] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-5">
              <span className="text-[#042990] text-2xl">🎧</span>
            </div>

            <div>
              <h3 className="font-bold text-2xl">
                Get Rid of Cockroaches Today!
              </h3>
              <p className="text-sm text-gray-200">
                Book a free inspection now & enjoy a pest-free home.
              </p>
            </div>
          </div>

          <Link className="bg-[#FFD400] text-[#042990] text-md text-nowrap font-bold px-8 py-3 rounded-md flex items-center gap-2 hover:bg-yellow-400 transition" 
          href={"/contact"}>
            BOOK FREE INSPECTION
            <FiArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#FFD400]">
        <div className="max-w-[85%] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div>
            <Image src="/logo.png" alt="Orion Pest" width={120} height={80} />

            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/Orionpestsolution/"
                className="w-8 h-8 rounded-full bg-[#042990] text-white flex items-center justify-center"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://www.instagram.com/orionpestindia"
                className="w-8 h-8 rounded-full bg-[#042990] text-white flex items-center justify-center"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://in.linkedin.com/in/orion-pest-solutions-pvt-ltd-3ba200a"
                className="w-8 h-8 rounded-full bg-[#042990] text-white flex items-center justify-center"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#042990] mb-3 uppercase text-sm">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#042990] hover:underline transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-[#042990] mb-3 uppercase text-sm">
              Our Services
            </h4>

            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-[#042990] hover:underline transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-[#042990] mb-3 uppercase text-sm">
              Locations
            </h4>

            <ul className="space-y-2 text-sm">
              {locations.map((location) => (
                <li key={location.href}>
                  <Link
                    href={location.href}
                    className="hover:text-[#042990] hover:underline transition"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#042990] mb-3 uppercase text-sm">
              Contact Us
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:18004198181"
                  className="flex items-center gap-2 hover:text-[#042990]"
                >
                  <MdOutlinePhone className="text-[#042990]" />
                  1800 419 8181
                </a>
              </li>

              <li>
                <a
                  href="mailto:sales@orionpest.com"
                  className="flex items-center gap-2 hover:text-[#042990]"
                >
                  <MdEmail className="text-[#042990]" />
                  sales@orionpest.com
                </a>
              </li>

              <li>
                <Link href={"/branches"}
                  className="flex items-center gap-2 hover:text-[#042990]"
                >
                  <HiOutlineLocationMarker className="text-[#042990]" />
                  72+ Locations Across India
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#042990] text-white text-xs">
          <div className="max-w-[85%] mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-2">
            <p>© 2026 Orion Pest Solutions Pvt. Ltd. All Rights Reserved.</p>

            <div className="flex gap-4">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
