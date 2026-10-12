import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center gap-20">
      <div className="w-1/2 h-full relative">
        <Image
          src="/Images/thankyou.png"
          alt="Thank You"
          width={500}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center gap-4">
        <h5 className="text-2xl font-semibold font-serif">Orion Pest</h5>
        <h1 className="text-6xl font-serif font-bold">Thank You For Your <span className="text-[#E78702]">Submission</span>.</h1>
        <p className="text-lg">
          We've received your request. Our pest control team is reviewing your
          details and will be in touch shortly.
        </p>
        <div className="w-full flex flex-col justify-center gap-4">
          <div className="flex flex-row items-center gap-4">
            <div className="border-2 border-[#E78702] text-[#E78702] text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
              01
            </div>
            <p className="text-lg">
              Reviewing your pest control requirements.
            </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="border-2 border-[#E78702] text-[#E78702] text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
              02
            </div>
            <p className="text-lg">Expect a callback within 24 hours.</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="border-2 border-[#E78702] text-[#E78702] text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center">
              03
            </div>
            <p className="text-lg">Arranging an inspection or treatment plan.</p>
          </div>
        </div>
        <div className="w-full flex flex-row gap-4 mt-5">
          <Link href="/" className="bg-[#E78702] hover:bg-[#bd6e01] text-white font-semibold py-3 px-12 rounded cursor-pointer">
            Return Home
          </Link>
          <Link href="/services" className="border border-[#afafaf] text-black font-semibold py-3 px-12 rounded cursor-pointer">
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
