"use client"
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/ui/Map"), {
  ssr: false,
});
import PageData from "@/components/ui/PageData";

export default function page() {
  const India = [
    {
      location: "AHMEDABAD",
      mob: "+91 99743 73654",
      link: "ahmedabad",
    },
    {
      location: "JAMSHEDPUR",
      mob: "+91 95765 79260",
      link: "jamshedpur",
    },
    {
      location: "AURANGABAD",
      mob: "+91 98678 26262",
      link: "aurangabad",
    },
    {
      location: "KERALA",
      mob: "+91 48440 54333",
      altMob: "+91 96332 12345",
      link: "kerala",
    },
    {
      location: "BHUBANESWAR",
      mob: "+91 99372 91919",
      link: "bhubaneswar",
    },
    {
      location: "KOLHAPUR",
      mob: "+91 98928 41414",
      link: "kolhapur",
    },
    {
      location: "BANGALORE",
      mob: "+91 99006 51515",
      link: "bangalore",
    },
    {
      location: "KODAIKANAL",
      mob: "+91 95513 20202",
      link: "kodaikanal",
    },
    {
      location: "BILASPUR",
      mob: "+91 99936 82238",
      link: "bilaspur",
    },
    {
      location: "LUCKNOW",
      mob: "+91 95806 53342",
      link: "lucknow",
    },
    {
      location: "BURDWAN",
      mob: "+91 98000 02299",
      link: "burdwan",
    },
    {
      location: "MYSORE",
      mob: "+91 96633 68249",
      link: "mysore",
    },
    {
      location: "CHENNAI",
      mob: "+91 97918 13131",
      link: "chennai",
    },
    {
      location: "MUMBAI",
      mob: "+91 98923 21212",
      link: "mumbai",
    },
    {
      location: "COIMBATORE",
      mob: "+91 90036 28256",
      link: "coimbatore",
    },
    {
      location: "MANGALORE",
      mob: "+91 99729 33567",
      link: "mangalore",
    },
    {
      location: "COCHIN",
      mob: "+91 96332 12345",
      link: "cochin",
    },
    {
      location: "NAGPUR",
      mob: "+91 80075 33009",
      link: "nagpur",
    },
    {
      location: "DEHRADUN",
      mob: "+91 98109 05055",
      link: "dehradun",
    },
    {
      location: "PUNE",
      mob: "+91 98927 21212",
      link: "pune",
    },
    {
      location: "DAMAN",
      mob: "+91 99673 21212",
      link: "daman",
    },
    {
      location: "PATNA",
      mob: "+91 90881 23456",
      link: "patna",
    },
    {
      location: "DELHI",
      mob: "+91 98180 00610",
      link: "delhi",
    },
    {
      location: "PUDUCHERRY",
      mob: "+91 97915 13131",
      link: "puducherry",
    },
    {
      location: "DHANBAD",
      mob: "+91 94709 44177",
      link: "dhanbad",
    },
    {
      location: "RAIPUR",
      mob: "+91 73899 18181",
      link: "raipur",
    },
    {
      location: "GUWAHATI",
      mob: "+91 88118 19191",
      link: "guwahati",
    },
    {
      location: "RANCHI",
      mob: "+91 99550 09024",
      link: "ranchi",
    },
    {
      location: "HALDIA",
      mob: "+91 94343 85553",
      link: "haldia",
    },
    {
      location: "SILIGURI",
      mob: "+91 98001 35539",
      link: "siliguri",
    },
    {
      location: "HYDERABAD",
      mob: "+91 90006 21212",
      link: "hyderabad",
    },
    {
      location: "TRIVANDRUM",
      mob: "+91 81299 99611",
      link: "trivandrum",
    },
    {
      location: "INDORE",
      mob: "+91 98936 90900",
      link: "indore",
    },
    {
      location: "VIJAYAWADA",
      mob: "+91 80085 12121",
      link: "vijayawada",
    },
    {
      location: "JAIPUR",
      mob: "+91 82903 92804",
      link: "jaipur",
    },
    {
      location: "VISAKAPATANAM",
      mob: "+91 96182 19191",
      link: "visakapatanam",
    },
  ];

  const other = [
    {
      location: "BHUTAN",
      mob: "+97 5772 19618",
      link: "bhutan",
    },
    {
      location: "NEPAL",
      mob: "+977 9802781107",
      link: "nepal",
    },
  ];
  return (
    <div className="w-full">
      <PageData segment={"branches"}>
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto relative px-4">
        <h2 className="text-[#2F3293] text-3xl md:text-5xl text-center font-bold mt-10 sm:mt-20">
          Our Branches
        </h2>

        <div className="w-full mt-10 bg-gradient-to-b from-[#FFF300] to-[#FEBA00] relative px-4 sm:px-8 md:px-16 lg:px-24 rounded-tl-4xl rounded-tr-4xl pb-36 pt-10">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-[#2F3293] text-2xl sm:text-3xl lg:text-4xl font-bold">
              INDIA
            </h3>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {India.map((loc, index) => (
                <div key={index} className="text-left w-full sm:w-[220px]">
                  <Link href={`${loc.link}`}>
                    <p className="text-[15px] sm:text-lg font-normal">
                      {loc.location}
                    </p>
                    <p className="text-[13px] sm:text-md">{loc.mob}</p>
                    {loc.altMob && (
                      <p className="text-[13px] sm:text-md">{loc.altMob}</p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-b from-[#FFF300] to-[#FEBA00] relative px-4 rounded-tl-4xl rounded-tr-4xl pt-10 -top-20 pb-40 md:pb-60">
          <h3 className="text-[#2F3293] text-2xl sm:text-3xl lg:text-4xl text-center font-bold">
            NEPAL/BHUTAN
          </h3>
          <div className="grid grid-cols-2 gap-3 mt-10 items-center justify-items-center mb-5">
            {other.map((loc, index) => (
              <div className="w-90% mx-auto" key={index}>
                <Link
                  href={`${loc.link}`}
                  key={index}
                  className="w-[80%] text-left mx-auto"
                >
                  <p className="text-[15px] sm:text-lg font-400">
                    {loc.location}
                  </p>
                  <p className="text-[13px] sm:text-md">{loc.mob}</p>
                </Link>
              </div>
            ))}
          </div>
          <Link
            className="flex justify-center items-center text-sm sm:text-lg"
            href="mailto:orionpestnepal@gmail.com"
          >
            Email: orionpestnepal@gmail.com
          </Link>
          <Map />
        </div>
      </div>
      </PageData>
    </div>
  );
}
