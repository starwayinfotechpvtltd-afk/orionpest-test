// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// const navLinks = [
//   {
//     id: 1,
//     text: "HOME",
//     href: "/",
//   },
//   {
//     id: 2,
//     text: "SERVICES",
//     href: "/pest-control-services",
//   },
//   {
//     id: 3,
//     text: "ABOUT",
//     href: "/about",
//   },
//   {
//     id: 4,
//     text: "CLIENT",
//     href: "/clients",
//   },
//   {
//     id: 5,
//     text: "BRANCHES",
//     href: "/branches",
//   },
//   {
//     id: 6,
//     text: "BLOGS",
//     href: "https://www.orionpest.com/blog",
//   },
//   {
//     id: 7,
//     text: "KNOWLEDGE BASE",
//     href: "/knowledgebase",
//   },
//   {
//     id: 8,
//     text: "CONTACT",
//     href: "/contact",
//   },
// ];

// export default function Navbar() {
//   const pathname = usePathname(); // detects route
//   const [activeTab, setActiveTab] = useState("");

//   // On mount, load from localStorage or fallback to current path
//   useEffect(() => {
//     const savedTab = localStorage.getItem("activeTab");
//     if (savedTab) {
//       setActiveTab(savedTab);
//     } else {
//       setActiveTab(pathname);
//     }
//   }, [pathname]);

//   // Save active tab whenever it changes
//   useEffect(() => {
//     if (activeTab) {
//       localStorage.setItem("activeTab", activeTab);
//     }
//   }, [activeTab]);

//   return (
//     <div className="bg-[#fef200] w-full py-2">
//       <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//         {/* logo */}
//         <Link href="/" onClick={() => setActiveTab("/")}>
//           <Image src="/logo.png" alt="logo" width={100} height={100} />
//         </Link>

//         {/* navigation */}
//         <nav className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
//           {navLinks?.map((nav) =>
//             nav.href.startsWith("http") ? (
//               <a
//                 key={nav.id}
//                 href={nav.href}
//                 className={`${
//                   activeTab === nav.href
//                     ? "text-[#2F3293]"
//                     : "text-gray-700 hover:text-[#2F3293]"
//                 } font-bold text-base`}
//               >
//                 {nav.text}
//               </a>
//             ) : (
//               <Link
//                 key={nav.id}
//                 href={nav.href}
//                 onClick={() => setActiveTab(nav.href)}
//                 className={`${
//                   activeTab === nav.href
//                     ? "text-[#2F3293]"
//                     : "text-gray-700 hover:text-[#2F3293]"
//                 } font-bold text-base`}
//               >
//                 {nav.text}
//               </Link>
//             ),
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/pest-control-services" },
    { name: "Locations", href: "/branches" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[80%] mx-auto px-4 lg:px-0">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/">
            <div className="relative w-[90px] h-[90px]">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-gray-700 hover:text-[#042990] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <a
            href="tel:18004198181"
            className="hidden lg:flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-[#042990] flex items-center justify-center">
              <FaPhoneAlt className="text-white text-sm" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Call Now</p>
              <p className="font-bold text-[#042990]">
                1800 419 8181
              </p>
            </div>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-2xl text-[#042990]"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b">

          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
          />

          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* Links */}
        <nav className="flex flex-col p-6 gap-6">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-[#042990]"
            >
              {link.name}
            </Link>
          ))}

        </nav>

        {/* Contact */}
        <div className="absolute bottom-10 left-6 right-6">

          <a
            href="tel:18004198181"
            className="flex items-center gap-3 p-4 rounded-xl bg-[#042990] text-white"
          >
            <FaPhoneAlt />

            <div>
              <p className="text-xs opacity-80">Call Now</p>
              <p className="font-bold">
                1800 419 8181
              </p>
            </div>

          </a>

        </div>
      </div>
    </header>
  );
}