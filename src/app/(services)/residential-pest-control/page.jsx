import React from "react";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("residential-pest-control");
  return {
    title: page?.metaTitle || "Residential Pest Control",
    description: page?.metaDescription || "",
  };
}


export default function page() {

    const whyChooseUs=[
        "Guaranteed satisfaction",
        "24/7 service available",
        "Certified &Experienced professionals",
        "100% Safe and Reliable",
        "Money-back Guarantee"
    ]
  return (
    <div className="w-full pb-80">
      <PageData segment={"residential-pest-control"}>
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto">
        <h2 className="text-4xl text-center text-[#2F3293] font-bold mt-20">
          Residential Pest Control Services
        </h2>
        <p className="mt-10 text-lg font-bold">
          Home pest control
          <br></br>
          Looking for a home pest control treatment? No worries. We’re here to
          help!
        </p>
        <p className="mt-3 text-lg">
          Orion Pest Control offers the most effective, safe and reliable home
          pest control solutions for homeowners and builders in India at
          affordable prices. We are committed to keep you away from the hazards
          caused by infectious pests and give you a healthy and happy life. With
          a team of highly skilled exterminators having proven expertise, we
          take pride in providing swift and efficient home pest control services
          to safeguard your home from pest infestations. Whether it is termites,
          bed bugs, cockroaches, rodents, ants, lizards, spiders or mosquitoes,
          we help you in dealing pests at your home and bring back your smile.
        </p>
        <p className="mt-3 text-lg">
          A home is where you dwell with your loved ones. It is very important
          to keep your family and home protected against unwanted pest problem
          to lead a healthy and peaceful living. At Orion, we have the best team
          in place to identify your pest problem and provide necessary
          recommendations and solutions. We are the most trusted home pest
          control service provider in the region.
        </p>
        <p className="mt-3 text-lg">
          A home is where you dwell with your loved ones. It is very important
          to keep your family and home protected against unwanted pest problem
          to lead a healthy and peaceful living. At Orion, we have the best team
          in place to identify your pest problem and provide necessary
          recommendations and solutions. We are the most trusted home pest
          control service provider in the region.
        </p>
        <p className="mt-3 text-lg font-bold">Why Choose Us?</p>
        <ul className="list-disc ml-3 mt-3">
            {whyChooseUs.map((item, index)=>
            <li key={index} className="text-lg">{item}</li>
            )}
        </ul>
      </div>
      </PageData>
    </div>
  );
}
