"use client"
import React from "react";
import { useData } from "@/context/DataContext";
import parse from "html-react-parser";

export default function PageData({ segment, children }) {
  const { data, loading } = useData();

  //if (loading) return <div>Loading...</div>;

  const currentPage = data?.find((page) => page.slug === segment);

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





// "use client";

// import React from "react";
// import { useData } from "@/context/DataContext";
// import parse from "html-react-parser";
// import * as RiIcons from "react-icons/ri";

// const options = {
//   replace(domNode) {
//     console.log("DOM Node:", domNode);

//     if (domNode.type !== "tag") return;

//     console.log("Tag Name:", domNode.name);

//     const componentName =
//       domNode.name.charAt(0).toUpperCase() + domNode.name.slice(1);

//     console.log("Component Name:", componentName);

//     console.log("Icon:", RiIcons[componentName]);

//     const Icon = RiIcons[componentName];

//     if (Icon) {
//       return <Icon />;
//     }
//   },
// };
// function PageData({ segment, children }) {
//   const { data } = useData();

//   const currentPage = data?.find((page) => page.slug === segment);

//   console.log(currentPage)


//   if (!currentPage) return children;

//   return (
//     <div>
//       {currentPage.pageData.map((block) => (
//         <div key={block._id} className="mb-8">
//           {parse(block.content, options)}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PageData