"use client"
import React from "react";
import { useData } from "@/context/DataContext";
import parse from "html-react-parser";

export default function PageData({ segment, children }) {
  const { data, loading } = useData();

  //if (loading) return <div>Loading...</div>;

  console.log(data)
  console.log(segment)
  const currentPage = data?.find((page) => page.slug === segment);
  console.log(currentPage)

  if (!currentPage) return children;

  return (
    <div>
      {currentPage.pageData.map((block) => (
        <div key={block._id} className="mb-8">
          {parse(block.content)}
        </div>
      ))}
    </div>
  );
}