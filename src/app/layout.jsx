import { Geist, Geist_Mono } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "./globals.css";
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer";
import { DataProvider } from "@/context/DataContext";
import { GoogleAnalytics } from '@next/third-parties/google'



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
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
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
