// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// const CMS_URL = process.env.NEXT_PUBLIC_CMS_API_URL;

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`https://orion-pest-cms.vercel.app/api/pages`);
//         const result = await res.json();
//         console.log(result)
//         setData(result.pages);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <DataContext.Provider value={{ data, loading }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);



"use client";

import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://orion-pest-cms.vercel.app/api/pages"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        console.log("API result:", result);

        setData(result.pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);