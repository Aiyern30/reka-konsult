"use client";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponents"), { ssr: false });

const companyCoords = { lat: 3.07374, lon: 101.65811 };

export default function ContactForm() {
  return (
    <>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-4xl font-bold">Contact Us</h2>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left max-w-lg">
            {/* Telephone Number */}
            <div className="font-bold">Telephone Number:</div>
            <a
              href="tel:++601115260030"
              className="text-blue-500 hover:underline"
            >
              +601 1152 60030
            </a>

            {/* Email Address */}
            <div className="font-bold">Email Address:</div>
            <a
              href="mailto:rekakon@gmail.com"
              className="text-blue-500 hover:underline"
            >
              rekakon@gmail.com
            </a>

            {/* Address */}
            <div className="font-bold">Address:</div>
            <a
              href="https://www.google.com.my/maps/search/+No.+151-2-6A,+Mutiara+Puchong+Business+Centre,+Batu+6+1%2F2,+Jalan+++++++++++++++++Puchong,+58200+Kuala+Lumpur./@3.074075,101.6565562,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="text-blue-500 hover:underline text-left"
            >
              <div>
                No. 151-2-6A, Mutiara Puchong Business Centre, Batu 6 1/2,
                <br />
                Jalan Puchong, 58200 Kuala Lumpur.
              </div>
            </a>
          </div>
        </div>
        <MapComponent lat={companyCoords.lat} lon={companyCoords.lon} />
      </div>
    </>
  );
}
