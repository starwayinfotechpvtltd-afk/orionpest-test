"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Newsletter from "../ui/Newsletter";

export default function Footer({ color }) {
  const pathname = usePathname();
  const isContact = pathname.startsWith("/contact");
  // ${!isContact ? "bg-linear-to-br from-[#ffd900] to-[#ff9900]":"white"}
  return (
    <div className="w-full relative bg-[#2F3293] pb-16 md:pb-0 md:py-24">
      {/* background image */}
      <Image
        src="/Images/footer.png"
        alt="footer"
        fill
        className="absolute inset-0 w-full h-auto object-cover sm:object-fill"
        style={{ top: "-250px" }}
        priority
      />

      {/* content wrapper */}
      <div className="relative w-[90%] md:w-[60%] mx-auto flex flex-col items-center sm:-top-[100px] px-3">
        {/* heading */}
        <h2 className="text-[#FEF200] text-2xl md:text-4xl font-bold text-center">
          HAVE ANY QUESTIONS?
        </h2>
        <p className="text-center text-white mt-2 text-sm md:text-base">
          We’re here to help—get in touch with us today.
        </p>
        {/* input */}
        <Newsletter />
        {/* <div className="flex flex-col  justify-center items-center gap-3 w-full mt-6 relative"> */}

        {/* Social icons */}
        <div className="flex flex-row items-center gap-2">
          <Link href={"https://www.facebook.com/Orionpestsolution/"}>
            <Image
              src={"/Images/facebook.png"}
              width={43}
              height={43}
              alt="facebook"
              className="rounded-xl"
            />
          </Link>
          <Link
            href={
              "https://in.linkedin.com/in/orion-pest-solutions-pvt-ltd-3ba200a"
            }
          >
            <Image
              src={"/Images/linkedin.png"}
              width={43}
              height={43}
              alt="linkedin"
              className="rounded-xl"
            />
          </Link>
          <Link href={"https://www.instagram.com/orionpestindia"}>
            <Image
              src={"/Images/instagram.png"}
              width={43}
              height={43}
              alt="instagram"
            />
          </Link>
        </div>
        {/* </div> */}
        {/* contact info */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-6 gap-6 w-full text-center">
          {/* address */}
          <div className="fleX flex-col text-center md:text-left">
            <p className="text-white">Orion Pest Solutions Pvt. Ltd.</p>
            <p className="text-white">200W, S.P. Mukherjee Road</p>
            <p className="text-white">Kolkata - 700026, West Bengal, India.</p>
          </div>

          {/* email */}
          <Link className="flex-1 text-white lg:mr-24 xl:mr-40" href={"mailto:sales@orionpest.com"}>sales@orionpest.com</Link>

          {/* phone */}
          <div className="flex flex-col text-center md:text-right">
            <Link className="text-white text-nowrap" href={"tel:1800 419 8181"}>1800 419 8181</Link>
            <Link className="text-white" href={"tel:9800123456"}>9800123456</Link>
          </div>
        </div>
        {/* copyright */}
        <p className="text-white text-center mt-10 text-sm md:text-base">
          Copyright © 2026 Orion Pest Solutions. All Rights Reserved. Site
          Designed & Maintained by Starway Web Digital.
        </p>
      </div>
    </div>
  );
}
