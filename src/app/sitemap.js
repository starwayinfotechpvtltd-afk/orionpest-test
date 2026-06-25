import { MetadataRoute } from "next";

const BASE_URL = "https://www.orionpest.com";

const routes = [
  "/",
  "/about",
  "/pest-control-services",
  "/eco-friendly",
  "/pest-removal",
  "/extermination",
  "/cockroach-pest-control",
  "/bedbug-pest-control",
  "/termite-pest-control",
  "/mosquito-pest-control",
  "/flies-pest-control",
  "/rodent-pest-control",
  "/bird-pest-control",
  "/ant-pest-control",
  "/residential-pest-control",
  "/commercial-pest-control",
  "/herbal-pest-control",
  "/fumigation-services",
  "/branches",
  "/contact",

  // Branches
  "/branches/ahmedabad",
  "/branches/kerala",
  "/branches/bangalore",
  "/branches/lucknow",
  "/branches/chennai",
  "/branches/mangalore",
  "/branches/dehradun",
  "/branches/patna",
  "/branches/dhanbad",
  "/branches/ranchi",
  "/branches/hyderabad",
  "/branches/vijayawada",
  "/branches/jamshedpur",
  "/branches/bhubaneswar",
  "/branches/kodaikanal",
  "/branches/burdwan",
  "/branches/mumbai",
  "/branches/cochin",
  "/branches/pune",
  "/branches/delhi",
  "/branches/raipur",
  "/branches/haldia",
  "/branches/trivandrum",
  "/branches/jaipur",
  "/branches/aurangabad",
  "/branches/kolhapur",
  "/branches/bilaspur",
  "/branches/mysore",
  "/branches/coimbatore",
  "/branches/nagpur",
  "/branches/daman",
  "/branches/puducherry",
  "/branches/guwahati",
  "/branches/siliguri",
  "/branches/indore",
  "/branches/visakapatanam",
  "/branches/bhutan",
  "/branches/nepal",

  "/knowledgebase",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority:
      route === "/"
        ? 1.0
        : route.startsWith("/branches/")
        ? 0.7
        : 0.8,
  }));
}