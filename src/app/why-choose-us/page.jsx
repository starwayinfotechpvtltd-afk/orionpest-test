import React from "react";
import Review from "@/components/ui/Review";

export default function WhyChooseUs(){
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center p-5 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-10 text-[#2F3293]">Why Choose Us Section</h1>
            <div className="w-full md:w-[80%] lg:w-[60%] text-justify text-lg md:text-xl pb-80">
                <ul className="text-[#2F3293] font-bold list-disc">
                    <li>24/7 Support</li>
                </ul>
                <p className="p-6 bg-[#FEF200] rounded-xl mt-5 text-[#2F3293] font-700">dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text </p>
                <ul className="text-[#2F3293] font-bold list-disc mt-5"><li>Certified Professionals</li></ul>
                <p className="p-6 bg-[#FEF200] rounded-xl mt-5 text-[#2F3293] font-700">dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text </p>
                <ul className="text-[#2F3293] font-bold list-disc mt-5"><li>Eco-Friendly Chemicals</li></ul>
                <p className="p-6 bg-[#FEF200] rounded-xl mt-5 text-[#2F3293] font-700">dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text </p>
                <ul className="text-[#2F3293] font-bold list-disc mt-5">
                    <li>40+ Locations Pan India</li>
                </ul>
                <p className="p-6 bg-[#FEF200] rounded-xl mt-5 text-[#2F3293] font-700 mt-5">dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text </p>
                <ul className="text-[#2F3293] font-bold list-disc mt-5">
                    <li>100% Satisfaction Guarantee</li>
                </ul>
                <p className="p-6 bg-[#FEF200] rounded-xl mt-5 text-[#2F3293] font-700 mt-5">dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text  dummy text dummy text  dummy text  dummy text </p>
                <Review />
            </div>
            
            </div>

    )
}