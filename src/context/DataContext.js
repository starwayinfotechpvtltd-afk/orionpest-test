// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// const CMS_URL = process.env.CMS_API_URL;

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`https://orion-pest-cms.vercel.app/api/pages`);
//         const result = await res.json();
//         setData(result.pages);
//       } catch (error) {
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
const CMS_URL = process.env.CMS_API_URL;

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          CMS_URL
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();

        setData(result.pages);
      } catch (error) {
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
