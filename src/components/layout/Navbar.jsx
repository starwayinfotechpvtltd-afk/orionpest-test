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

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/pest-control-services" },
    { name: "Locations", href: "/branches" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white">
      <div className="max-w-[80%] mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" onClick={() => setActiveTab("/")}>
          <div className="w-[100px] h-[100px] relative">
            <Image src="/logo.png" alt="logo" fill className="object-contain"/>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-medium text-gray-700 hover:text-[#042990] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <a href="tel:18002126969" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#042990] flex items-center justify-center">
              <FaPhoneAlt className="text-white text-sm" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[11px] text-gray-500">Call Now</span>
              <span className="font-bold text-[#042990] text-sm">
                1800 212 696969
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
