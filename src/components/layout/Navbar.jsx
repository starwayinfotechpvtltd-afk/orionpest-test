"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  {
    id: 1,
    text: "HOME",
    href: "/",
  },
  {
    id: 2,
    text: "SERVICES",
    href: "/pest-control-services",
  },
  {
    id: 3,
    text: "ABOUT",
    href: "/about",
  },
  {
    id: 4,
    text: "CLIENT",
    href: "/clients",
  },
  {
    id: 5,
    text: "BRANCHES",
    href: "/branches",
  },
  {
    id: 6,
    text: "BLOGS",
    href: "https://www.orionpest.com/blog",
  },
  {
    id: 7,
    text: "KNOWLEDGE BASE",
    href: "/knowledgebase",
  },
  {
    id: 8,
    text: "CONTACT",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname(); // detects route
  const [activeTab, setActiveTab] = useState("");

  // On mount, load from localStorage or fallback to current path
  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) {
      setActiveTab(savedTab);
    } else {
      setActiveTab(pathname);
    }
  }, [pathname]);

  // Save active tab whenever it changes
  useEffect(() => {
    if (activeTab) {
      localStorage.setItem("activeTab", activeTab);
    }
  }, [activeTab]);

  return (
    <div className="bg-[#fef200] w-full py-2">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* logo */}
        <Link href="/" onClick={() => setActiveTab("/")}>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>

        {/* navigation */}
        <nav className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
          {navLinks?.map((nav) =>
            nav.href.startsWith("http") ? (
              <a
                key={nav.id}
                href={nav.href}
                className={`${
                  activeTab === nav.href
                    ? "text-[#2F3293]"
                    : "text-gray-700 hover:text-[#2F3293]"
                } font-bold text-base`}
              >
                {nav.text}
              </a>
            ) : (
              <Link
                key={nav.id}
                href={nav.href}
                onClick={() => setActiveTab(nav.href)}
                className={`${
                  activeTab === nav.href
                    ? "text-[#2F3293]"
                    : "text-gray-700 hover:text-[#2F3293]"
                } font-bold text-base`}
              >
                {nav.text}
              </Link>
            ),
          )}
        </nav>
      </div>
    </div>
  );
}
