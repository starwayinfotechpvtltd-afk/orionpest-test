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

      {
        source: "/services/commercial",
        destination: "/commercial-pest-control",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/pest-control-services",
        permanent: true,
      },
      {
        source: "/termites",
        destination: "/termite-pest-control",
        permanent: true,
      },
      {
        source: "/mosquitoes",
        destination: "/mosquito-control",
        permanent: true,
      },
      {
        source: "/ant-pest-control",
        destination: "/ant-control",
        permanent: true,
      },
      {
        source: "/flies-pest-control",
        destination: "/flies-control",
        permanent: true,
      },
      {
        source: "/rodent-pest-control",
        destination: "/rodent-control",
        permanent: true,
      },
      {
        source: "/bird-pest-control",
        destination: "/bird-control",
        permanent: true,
      },
      {
        source: "/our-branches",
        destination: "/branches",
        permanent: true,
      },
      {
        source: "/commercial-pest-control-services",
        destination: "/commercial-pest-control",
        permanent: true,
      },
      {
        source: "/termite-control-services",
        destination: "/termite-pest-control",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
