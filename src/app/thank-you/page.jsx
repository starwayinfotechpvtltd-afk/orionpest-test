import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 py-20 xl:py-0">
      <div className="w-full lg:w-1/2 h-80 lg:h-full relative">
        <Image
          src="/Images/thankyou.png"
          alt="Thank You"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center gap-4 px-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0D2391]">Thank You For Your <span className="text-[#1095D9]">Submission</span>.</h1>
        <p className="text-lg 2xl:text-xl">
          We've received your request. Our pest control team is reviewing your
          details and will be in touch shortly.
        </p>
        <div className="w-full flex flex-col justify-center gap-4">
          <div className="flex flex-row items-center gap-4">
            <div className="border-2 border-[#E78702] text-[#E78702] text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
              01
            </div>
            <p className="text-lg 2xl:text-xl">
              Reviewing your pest control requirements.
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="border-2 border-[#E78702] text-[#E78702] text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
              02
            </div>
            <p className="text-lg 2xl:text-xl">Expect a callback within 24 hours.</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="border-2 border-[#E78702] text-[#E78702] text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
              03
            </div>
            <p className="text-lg 2xl:text-xl">Arranging an inspection or treatment plan.</p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4 mt-5">
          <Link href="/" className="bg-[#FDC700] hover:bg-[#e2b204] text-white font-semibold py-3 px-12 rounded cursor-pointer text-center">
            Return Home
          </Link>
          <Link href="/services" className="border border-[#afafaf] text-black font-semibold py-3 px-12 rounded cursor-pointer text-center">
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
