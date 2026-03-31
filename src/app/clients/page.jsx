import {clientsData} from "./clients"
import Image from "next/image";

export default function Clients() {
  return (
    <div className="w-full pb-80">
        {/* header section */}
      <div
        className="relative h-[50vh] w-full bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/Images/clients/client_header.jpg')",
          backgroundSize: "cover"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Clients</h1>
          <p className="text-lg md:text-xl max-w-5xl mx-auto">
            We’re proud to serve a wide range of clients—from homeowners and
            property managers to commercial businesses and industrial
            facilities. Our commitment to safety, reliability, and long-term
            protection has earned us the trust of hundreds of satisfied clients.
          </p>
        </div>
      </div>
      <div className="w-[95%] md:w-[80%] mx-auto">
        

        {/* clients */}
        <div className="flex flex-wrap items-center gap-10 mt-20">
            {clientsData.map((client, index)=>
            <div className="h-20 w-32 relative mx-auto" key={index}>
              <Image src={`${client}`} fill alt={`image${index}`} className="object-cover rounded-2xl shadow-xl hover:scale-110 duration-300 transition ease-in-out"/>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
