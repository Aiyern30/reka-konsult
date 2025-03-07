"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/";
import { Badge } from "@/components/ui/";
import { Building, MapPin, Maximize2 } from "lucide-react";

const projects = [
  {
    id: "lcct",
    title: "Low Cost Carrier Terminal (LCCT)",
    description:
      "The Low Cost Carrier Terminal (LCCT) was designed to accommodate the growing demand for budget air travel in the region, providing efficient and cost-effective facilities for low-cost airlines.",
    location: "Kuala Lumpur International Airport, Malaysia",
    year: "2006",
    client: "Malaysia Airports Holdings Berhad",
    scope:
      "Architectural Design, Construction Documentation, Construction Supervision",
    images: [
      {
        src: "/Featured/Airport Terminal Buildings/lcct.png",
        alt: "LCCT Exterior View",
        caption: "Exterior view of the Low Cost Carrier Terminal",
      },
      {
        src: "/Featured/Airport Terminal Buildings/Airport Terminal Buildings.jpg",
        alt: "LCCT Interior",
        caption: "Interior facilities of the LCCT",
      },
    ],
    features: [
      "35,290 square meters of floor space",
      "Capacity to handle 10 million passengers annually",
      "30 check-in counters",
      "Efficient passenger flow design",
      "Cost-effective construction methods",
    ],
  },
  {
    id: "main-terminal",
    title:
      "Extension of Main Terminal Building, KLIA/Commuter Rail Service Station",
    description:
      "This project involved the expansion of the main terminal building at KLIA to accommodate increasing passenger traffic and the integration of a commuter rail service station for improved connectivity.",
    location: "Kuala Lumpur International Airport, Malaysia",
    year: "2008",
    client: "Malaysia Airports Holdings Berhad",
    scope: "Architectural Design, Structural Engineering, MEP Services",
    images: [
      {
        src: "/Featured/Airport Terminal Buildings/terminal building.jpg",
        alt: "Main Terminal Extension",
        caption:
          "The expanded main terminal building with integrated rail station",
      },
    ],
    features: [
      "Seamless integration with existing terminal structure",
      "Enhanced passenger facilities",
      "Direct connection to rail transportation",
      "Improved traffic flow and accessibility",
      "Modern architectural design",
    ],
  },
  {
    id: "lcct-expansion",
    title: "Expansion of Low Cost Carrier Terminal (LCCT)",
    description:
      "The expansion project of the LCCT was undertaken to increase capacity and improve facilities to meet the growing demand for low-cost air travel in the region.",
    location: "Kuala Lumpur International Airport, Malaysia",
    year: "2009",
    client: "Malaysia Airports Holdings Berhad",
    scope: "Architectural Design, Project Management, Construction Supervision",
    images: [
      {
        src: "/Featured/Airport Terminal Buildings/LCCT expansion2.jpg",
        alt: "LCCT Expansion",
        caption: "The expanded LCCT with additional facilities",
      },
    ],
    features: [
      "Increased terminal capacity by 50%",
      "Additional check-in counters and gates",
      "Expanded retail and F&B areas",
      "Improved baggage handling systems",
      "Enhanced passenger amenities",
    ],
  },
];

export default function AirportTerminal() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  return (
    <div className="space-y-12 py-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl mb-4">
          Airport Terminal Buildings
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Our firm has extensive experience in designing and developing airport
          terminal buildings that balance functionality, passenger experience,
          and operational efficiency.
        </p>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white dark:bg-slate-800/50 rounded-xl shadow-md overflow-hidden mb-10"
        >
          <div className="lg:flex">
            <div className="lg:w-1/2 p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {project.year}
                </Badge>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  {project.location}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-2 flex items-center">
                    <Building className="h-4 w-4 mr-2 text-primary" />
                    Project Details
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>
                      <span className="font-medium">Client:</span>{" "}
                      {project.client}
                    </li>
                    <li>
                      <span className="font-medium">Year:</span> {project.year}
                    </li>
                    <li>
                      <span className="font-medium">Scope:</span>{" "}
                      {project.scope}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-2">
                    Key Features
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-6 lg:p-8 bg-slate-50 dark:bg-slate-800">
              <div className="grid grid-cols-1 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="relative h-64 w-full overflow-hidden rounded-lg">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <Maximize2 className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 text-center">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="relative h-[80vh]">
            {selectedImage && (
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            )}
          </div>
          {selectedImage && (
            <div className="p-4 bg-white dark:bg-slate-900">
              <p className="text-center text-slate-600 dark:text-slate-400">
                {selectedImage.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
