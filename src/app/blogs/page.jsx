import React from "react";
import Image from "next/image";
import Form from "@/components/ui/SubmitForm";
import PageData from "@/components/ui/PageData";

export default function page() {
  return (
    <div className="w-full pb-60">
      <PageData segment={"blogs"}>
      <div className="w-[95%] md:w-[80%] mx-auto pb-20">
        <h2 className="text-[#2F3293] text-center text-4xl md:text-5xl font-bold mt-20 uppercase">
          Blogs
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#2F3293] rounded-t-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/Images/img2.png"
                  alt={`blog${index}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Section */}
              <p className="p-4 bg-amber-300 w-full text-center font-medium">
                Blog Title {index + 1}
              </p>
            </div>
          ))}
        </div>
        {/* Form area */}
        <div className="w-[90%] md:w-[600px] bg-[#2F3293] rounded-3xl mx-auto p-10 mt-28">
          <h2 className="text-4xl text-white font-bold text-center mb-3">
            Contact Us
          </h2>
          <h2 className="text-4xl text-white font-bold text-center mb-8">
            DUMMY TEXT
          </h2>
          <Form />
        </div>
      </div>
      </PageData>
    </div>
  );
}
