// "use client";
// import React, { useState, useEffect } from "react";
// import services from "../../app/pest-control-services/services.json";
// import Link from "next/link";
// import Image from "next/image";

// export default function Services() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [showAll, setShowAll] = useState(false);
//   useEffect(() => {
//     const checkMobile=()=>{
//       setIsMobile(window.innerWidth < 768)
//     }
//     checkMobile()
//     // const handleResize = () => setIsMobile(window.innerWidth < 768);
//     // window.addEventListener("resize", handleResize);
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const visibleServices =
//     isMobile && !showAll ? services.slice(0, 3) : services;
//   return (
//     <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-4 xl:gap-10">
//       {visibleServices.map((service, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center text-center h-full"
//         >
//           <Image
//             src={service.image}
//             height={120}
//             width={120}
//             alt={service.service}
//           />

//           <h4 className="text-[#2F3293] font-semibold text-[20px] mt-4">
//             {service.service}
//           </h4>

//           <div className="bg-[#FEF200] p-5 rounded-2xl mt-4 flex flex-col flex-1 w-full">
//             <p className="flex-1">{service.text}</p>

//             <Link
//               href={`/${service.link}`}
//               className="flex justify-center mt-4"
//             >
//               <button className="bg-[#2F3293] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 text-lg font-bold text-white px-5 lg:px-5 py-2 rounded">
//                 Read more
//               </button>
//             </Link>
//           </div>
//         </div>
//       ))}
//       {isMobile && !showAll && (
//         <button
//           onClick={() => setShowAll(true)}
//           className="bg-[#2F3293] text-center transitio duration-300 ease-in-out hover:-translate-y-1 hover:scale-104 text-lg font-bold mt-3 text-white px-6 py-2 rounded cursor-pointer"
//         >
//           {" "}
//           Show more{" "}
//         </button>
//       )}
//     </div>
//   );
// }

"use client";
import React from "react";
import services from "../../app/pest-control-services/services.json";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  return (
    <section className="py-5">
      <div className="max-w-full mx-auto px-6">
        <div className="border-b border-gray-300 my-12"></div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 gap-y-16 items-stretch">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col h-full">
              {/* Image */}
              <div
                className="overflow-hidden rounded-3xl cursor-pointer"
                onClick={() => router.push(service.link)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="pt-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-start">
                    {service.service}
                  </h3>

                  <p className="text-gray-600 leading-8">{service.text}</p>
                </div>

                <Link
                  href={service.link}
                  className="mt-8 inline-flex w-fit px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 hover:text-white hover:border-[#2C2AA5] duration-300 bg-yellow-500"
                >
                  Read More ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
