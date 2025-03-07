"use client";

import dynamic from "next/dynamic";
import { Phone, Mail, MapPin, Clock, Loader2, Building } from "lucide-react";

const MapComponent = dynamic(() => import("./MapComponents"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[400px] bg-slate-100 dark:bg-slate-800 rounded-lg">
      <Loader2 className="h-8 w-8 text-primary animate-spin" />
    </div>
  ),
});

const companyCoords = { lat: 3.07374, lon: 101.65811 };

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-136px)] bg-zinc-50 dark:bg-zinc-900 text-slate-950 dark:text-slate-50 transition-all py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl mb-4">
            Contact Us
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We'd love to hear from you. Feel free to reach out through any of
            the channels below.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Contact Information */}
            <div className="p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <Building className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Reka Konsult Sdn Bhd
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Telephone Number
                    </h3>
                    <a
                      href="tel:+601115260030"
                      className="mt-1 text-base text-primary hover:underline"
                    >
                      +011 1526 0030
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Email Address
                    </h3>
                    <a
                      href="mailto:rekakon@gmail.com"
                      className="mt-1 text-base text-primary hover:underline"
                    >
                      rekakon@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Address
                    </h3>
                    <a
                      href="https://www.google.com.my/maps/search/+No.+151-2-6A,+Mutiara+Puchong+Business+Centre,+Batu+6+1%2F2,+Jalan+++++++++++++++++Puchong,+58200+Kuala+Lumpur./@3.074075,101.6565562,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-base text-primary hover:underline"
                    >
                      No. 151-2-6A, Mutiara Puchong Business Centre, Batu 6 1/2,
                      Jalan Puchong, 58200 Kuala Lumpur.
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      Business Hours
                    </h3>
                    <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[500px] w-full overflow-hidden relative">
              <div className="absolute inset-0">
                <MapComponent lat={companyCoords.lat} lon={companyCoords.lon} />
              </div>
            </div>
          </div>
        </div>

        {/* Additional information or directions */}
        <div className="mt-10 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Visiting us? The office is easily accessible via public
            transportation and has ample parking space nearby.
          </p>
        </div>
      </div>
    </div>
  );
}
