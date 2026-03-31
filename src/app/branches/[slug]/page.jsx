import React from "react";
import branches from "../branchesData.json";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
import PageData from "@/components/ui/PageData";
import { getPageData } from "@/lib/getPageData";

// Generate paths for all branches
export async function generateStaticParams() {
  return Object.keys(branches).map((slug) => ({ slug }));
}


export async function generateMetadata({params}) {
  const { slug } = params;
  const page = await getPageData(slug);
  return {
    title: page?.metaTitle || slug,
    description: page?.metaDescription || "",
  };
}

export default async function BranchPage({ params }) {
  const { slug } = params;
  const branch = branches[slug];

  if (!branch) {
    return <p className="text-center mt-10">Branch not found</p>;
  }

  console.log(slug)

  return (
    <div className="w-full">
      <PageData segment={slug}>
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto relative px-4">
        <h2 className="text-[#2F3293] text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-10 sm:mt-20">
          {branch.heading}
        </h2>

        <div className="mt-10 mb-60">
          {branch.content.map((para, index) => (
            <span key={index}>
              <p>{para}</p>
              <br />
            </span>
          ))}

          <div className="flex md:flex-row flex-col items-center gap-5 justify-center mx-auto mt-20">
            {branch.mobile && (
              <Link href={`tel:${branch.mobile}`}>
                <button
                  className="flex items-center bg-[#FEF200] py-3 px-5 rounded-2xl mx-auto cursor-pointer"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.3) 4px 4px 2px",
                  }}
                >
                  <FaPhone />
                  <span className="ml-2">{branch.mobile}</span>
                </button>
              </Link>
            )}

            {branch.otherMobile && (
              <Link href={`tel:${branch.otherMobile}`}>
                <button
                  className="flex items-center bg-[#FEF200] py-3 px-5 rounded-2xl mx-auto cursor-pointer"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.3) 4px 4px 2px",
                  }}
                >
                  <FaPhone />
                  <span className="ml-2">{branch.otherMobile}</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      </PageData>
    </div>
  );
}
