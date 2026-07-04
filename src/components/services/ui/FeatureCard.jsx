import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function FeatureCard({ item, index }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-8 shadow-md hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between`}
      key={index}
      style={{
        backgroundColor: item.bgColor,
      }}
    >
      <div className="flex gap-4">
        <div>
          <h3 className="text-md lg:text-2xl xl:text-xl font-bold text-[#09185E] md:w-[400px] lg:w-[500px] xl:w-64">
            {item.heading}
          </h3>

          <p className="mt-4 text-gray-700 md:w-[400px] lg:w-[500px] xl:w-[230px] text-sm lg:text-lg xl:text-sm">
            {item.desc}
          </p>
        </div>
      </div>

      <Link
        className="mt-2 flex cursor-pointer items-center gap-3 font-semibold text-[#09185E]"
        href="/contact"
      >
        Learn More
        <span className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
          <ArrowRight size={18} />
        </span>
      </Link>

      <div className="absolute 2xl:-right-0 2xl:-bottom-10 md:-right-0 lg:-bottom-5 hidden sm:block">
        <Image src={item.image} alt="Cockroach" width={180} height={180} />
      </div>
    </div>
  );
}