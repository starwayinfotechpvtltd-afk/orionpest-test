// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      // Contact
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      
      // Contact
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },

      // Contact
      {
        source: "/locations",
        destination: "/branches",
        permanent: true,
      },

      // Fumigation
      {
        source: "/services/fumigation",
        destination: "/fumigation-services",
        permanent: true,
      },

      // Residential
      {
        source: "/services/residential",
        destination: "/residential-pest-control",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
