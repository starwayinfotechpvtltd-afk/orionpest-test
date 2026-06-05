import { Geist, Geist_Mono } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DataProvider } from "@/context/DataContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orion Pest Solutions",
  description: "Orion Pest Solutions Pvt. Ltd.",
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "dy0_-iTpw2WKxPf9-1bifr671L2BZLrp9_aYNfVpUDg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-1002775744"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-1002775744');
    `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics gaId="G-LZ821J5CSF" />
        <DataProvider>
          <Header />
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-white text-black">
            {children}
          </main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
