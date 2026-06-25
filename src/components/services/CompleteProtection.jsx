import React from 'react'
import {
  BadgeCheck,
  ArrowRight,
  Crosshair,
  Clock3,
} from "lucide-react";
import List from './ui/List';
import Image from 'next/image';
import Link from 'next/link';

export default function CompleteProtection() {
  return (
    <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left section image */}
          <div className="w-full lg:w-[48%] flex justify-center relative order-2 lg:order-1">
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-3xl">
              <Image
                src="/Images/home.png"
                alt="cockroach"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Right section content */}
          <div className="w-full lg:w-[48%] order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Complete Protection for
              <span className="text-[#1095D9]"> Every Corner</span>
            </h2>
            <p className="text-base sm:text-lg max-w-xl mt-4 text-gray-600">
              Cockroaches hide in places you can't see. Our targeted treatment
              reaches deep into hiding spots to ensure a cockroach-free
              environment.
            </p>
            <div className="mt-6 space-y-3">
              <List
                icon={<Crosshair size={25} />}
                title="Targets Hidden Breeding Spots"
                bgColor="#2F3293"
                color="#fff"
              />
              <List
                icon={<BadgeCheck size={25} />}
                title="Prevents Re-infection"
                bgColor="#2F3293"
                color="#fff"
              />
              <List
                icon={<Clock3 size={25} />}
                title="Ideal for Homes, Offices, Restaurants & Commercial Spaces"
                bgColor="#2F3293"
                color="#fff"
              />
            </div>
            <Link
              className="w-68 md:w-90 justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition flex items-center gap-2 text-sm sm:text-base cursor-pointer mt-10 mx-auto"
              href="/contact"
            >
              BOOK FREE INSPECTION
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
  )
}
