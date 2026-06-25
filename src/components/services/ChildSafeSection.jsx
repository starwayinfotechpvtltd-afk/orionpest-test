import React from 'react'
import {
  ShieldCheck,
  Shield,
  Leaf,
  House,
  Heart,
} from "lucide-react";
import Image from 'next/image';
import Stat from './ui/Stat';

export default function ChildSafeSection({image}) {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-0">
        <div className="mx-auto max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">
          {/* Left section image element wrapper */}
          <div className="w-full lg:w-[50%] flex justify-center relative order-2 lg:order-1">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <Image
                src="/Images/home2.png"
                alt="cockroach"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Right section typography card context content layout details stack */}
          <div className="w-full lg:w-[48%] order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#36388D] w-full leading-tight">
              Child Safe
              <span className="text-[#1095D9]"> Cockroach Control,</span>
              Complete Peace of Mind.
            </h2>
            <p className="text-base sm:text-lg max-w-xl mt-4 text-gray-600">
              We use advanced, low-order and non-toxic treatment that eliminate
              cockroaches effectively without harming your children, pets or the
              environment.
            </p>
            <p className="text-base sm:text-lg max-w-xl mt-4 font-semibold text-gray-800">
              Safe for your little ones. Tough on cockroaches.
            </p>
            <div className="bg-[#F3F6FC] rounded-2xl p-4 sm:p-6 lg:px-10 hidden xl:flex flex-col sm:flex-row justify-between items-center gap-6 mt-6">
              <span className="shrink-0">
                <ShieldCheck color="#195ED3" size={50} />
              </span>
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-[#36388D] text-base sm:text-2xl font-semibold leading-tight">
                  SAFE FOR CHILDREN. <br /> SAFE FOR HOMES.
                </p>
                <p className="text-sm lg:text-md text-gray-600">
                  Powerful protection you can trust.
                </p>
              </div>
              <div className="relative w-52 h-32 shrink-0">
                <Image
                  src={image}
                  alt="children"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F3F6FC] rounded-2xl p-4 sm:p-6 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-6 max-w-[80%] mx-auto lg:hidden">
          <span className="shrink-0">
            <ShieldCheck color="#195ED3" size={50} />
          </span>
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[#36388D] text-base sm:text-2xl font-semibold leading-tight">
              SAFE FOR CHILDREN. <br /> SAFE FOR HOMES.
            </p>
            <p className="text-sm lg:text-md text-gray-600">
              Powerful protection you can trust.
            </p>
          </div>
          <div className="relative w-52 h-32 shrink-0">
            <Image
              src="/Images/children.png"
              alt="children"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Extended Stats Matrix Bar Layout */}
        <div className="mt-12 bg-white rounded-2xl border-[#F6F6F8] border shadow-sm max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-[#F6F6F8]">
            <Stat
              icon={<Leaf size={35} />}
              title="Non-toxic & Low Odor"
              subtitle="Safe treatments for your family and pets."
              bgColor="#DEE9FC"
              color="#2F3293"
            />
            <Stat
              icon={<Shield size={35} />}
              title="Deep & targeted action"
              subtitle="Reaches hidden areas and eliminates at the sources"
              bgColor="#DEE9FC"
              color="#2F3293"
            />
            <Stat
              icon={<House size={35} />}
              title="Long Lasting Protection"
              subtitle="Keeps your home protected from re-infestation."
              bgColor="#DEE9FC"
              color="#2F3293"
            />
            <Stat
              icon={<Heart size={35} />}
              title="Trusted by Thousands"
              subtitle="Reliable service for a cleaner, healthier tomorrow."
              bgColor="#DEE9FC"
              color="#2F3293"
            />
          </div>
        </div>
      </section>
  )
}
