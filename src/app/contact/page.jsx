import React from "react";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import { getPageData } from "@/lib/getPageData";

export async function generateMetadata() {
  const page = await getPageData("contact");
  return {
    title: page?.metaTitle || "Contact Us",
    description: page?.metaDescription || "",
  };
}


export default function page() {
  return (
    <div className="flex flex-col justify-center items-center py-20 px-4 md:px-0 pb-80 w-[80%] mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        <div
          className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl px-6 py-10 sm:px-5 lg:px-8 text-white
         lg:text-lg text-md"
        >
          Orion Pest Solutions Pvt. Ltd. <br /> 200W, S.P. Mukherjee Road <br />{" "}
          Kolkata - 700026, West Bengal, India.
        </div>
        <div
          className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl px-6 py-10 sm:px-5 lg:px-8 text-white 
        lg:text-lg text-base flex xl:flex-row flex-col justify-center items-center"
        >
          Email us:
          <Link href="mailto:sales@orionpest.com" className="text-nowrap">
            sales@orionpest.com
          </Link>
        </div>
        <div
          className="bg-gradient-to-b from-[#282CC4] to-[#00023A] rounded-3xl px-6 py-10 sm:px-5 lg:px-8 text-white
         lg:text-lg text-md flex flex-col justify-center"
        >
          <span>
            National toll free helpline:{" "}
            <Link href={"tel:1800 419 8181"} className="text-nowrap">
              1800 419 8181
            </Link>
          </span>
          <span>WhatsApp Us: <Link href="https://wa.me/919800123456">9800123456</Link></span>
        </div>
      </div>
      <h3 className="font-bold text-4xl text-center mt-20">Contact us</h3>
      <p className="text-center mt-2 max-w-xl text-lg">
        Kindly take a moment to fill in the form so that we can provide you with
        the best possible solution.
      </p>

      <ContactForm />
    </div>
  );
}
