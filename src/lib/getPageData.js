import { cache } from "react";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_API_URL;

export const getPageData = cache(async (slug) => {
  try {
    const res = await fetch(`${CMS_URL}/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.page || null;
  } catch (error) {
    return null;
  }
});



// "use client";

// import { useEffect, useState } from "react";

// export default function Page({ slug }) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(`https://orion-pest-cms.vercel.app/api/pages/${slug}`)
//       .then((res) => res.json())
//       .then((data) => setData(data.page || null))
//       .catch((err) => console.error(err));
//   }, [slug]);

//   if (!data) return <div>Loading...</div>;

//   return <div>{data.title}</div>;
// }
