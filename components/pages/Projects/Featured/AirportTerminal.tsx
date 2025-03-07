"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/";
import { Badge } from "@/components/ui/";
import { Card, CardContent } from "@/components/ui";
import { MapPin, Maximize2, CheckCircle } from "lucide-react";

const projects = [
  {
    id: "traffic-control",
    title: "TRAFFIC CONTROL TOWER @ KLIA 2",
    description:
      "The Traffic Control Tower at KLIA 2 is a state-of-the-art facility designed to manage air traffic operations with advanced technology and optimal visibility of the airfield.",
    location: "KLIA 2, Malaysia",
    year: "2013",
    client: "Malaysia Airports Holdings Berhad",
    scope: "Architectural Design, Structural Engineering, MEP Services",
    images: [
      {
        src: "/Featured/Airport Facilities/traffic control.jpg",
        alt: "Traffic Control Tower",
        caption: "The Traffic Control Tower at KLIA 2",
      },
    ],
    features: [
      "Height of 77 meters",
      "360-degree visibility of the airfield",
      "Advanced air traffic management systems",
      "Earthquake-resistant design",
      "Integrated communication systems",
    ],
  },
  {
    id: "apron-control",
    title: "APRON CONTROL TOWER",
    description:
      "The Apron Control Tower is designed to manage aircraft movements on the ground, ensuring safe and efficient operations in the apron area of the airport.",
    location: "Kuala Lumpur International Airport, Malaysia",
    year: "2012",
    client: "Malaysia Airports Holdings Berhad",
    scope: "Architectural Design, Construction Documentation",
    images: [
      {
        src: "/Featured/Airport Facilities/Apron.jpg",
        alt: "Apron Control Tower",
        caption: "The Apron Control Tower facility",
      },
    ],
    features: [
      "Strategic positioning for optimal visibility",
      "Advanced ground movement monitoring systems",
      "Integrated with main air traffic control",
      "Ergonomic control room design",
      "Weather-resistant construction",
    ],
  },
  {
    id: "custom-center",
    title: "CUSTOM ONE STOP CENTRE COMPLEX",
    description:
      "The Custom One Stop Centre Complex centralizes customs operations, providing efficient processing of goods and streamlining import/export procedures.",
    location: "Kuala Lumpur International Airport, Malaysia",
    year: "2010",
    client: "Royal Malaysian Customs Department",
    scope: "Architectural Design, Interior Design, Project Management",
    images: [
      {
        src: "/Featured/Airport Facilities/Custom Onestop centre.jpg",
        alt: "Custom One Stop Centre",
        caption: "The Custom One Stop Centre Complex",
      },
    ],
    features: [
      "Centralized customs processing facilities",
      "Integrated documentation systems",
      "Secure inspection areas",
      "Administrative offices",
      "Staff amenities and facilities",
    ],
  },
  {
    id: "cargo-walkway",
    title: "Air Cargo Handling and Covered Walkway",
    description:
      "This project combines efficient air cargo handling facilities with covered walkways to ensure smooth operations regardless of weather conditions.",
    location: "Kuala Lumpur International Airport, Malaysia",
    year: "2011",
    client: "Malaysia Airports Holdings Berhad",
    scope: "Architectural Design, Structural Engineering",
    images: [
      {
        src: "/Featured/Airport Facilities/aircargonwalkway.jpg",
        alt: "Air Cargo and Walkway",
        caption: "Air Cargo Handling facility and Covered Walkway",
      },
    ],
    features: [
      "Weather-protected cargo handling areas",
      "Efficient cargo flow design",
      "Covered pedestrian walkways",
      "Integration with existing airport infrastructure",
      "Durable materials for longevity",
    ],
  },
  {
    id: "fire-station",
    title: "Landside Fire Station & Baggage Handling",
    description:
      "This dual-purpose facility houses both the landside fire station for emergency response and baggage handling operations for the airport.",
    location: "Kuala Lumpur International Airport, Malaysia",
    year: "2009",
    client: "Malaysia Airports Holdings Berhad",
    scope: "Architectural Design, Fire Safety Engineering",
    images: [
      {
        src: "/Featured/Airport Facilities/Landside.jpg",
        alt: "Landside Fire Station",
        caption: "Landside Fire Station and Baggage Handling facility",
      },
    ],
    features: [
      "Rapid response fire station design",
      "Integrated baggage handling systems",
      "Emergency vehicle bays",
      "Staff accommodation and training facilities",
      "24/7 operational capability",
    ],
  },
  {
    id: "taxi-immigration",
    title:
      "Air Line Marking/Taxi Holding Shelter & Immigration Detention Centre",
    description:
      "This project encompasses multiple facilities including air line marking, taxi holding shelters, and an immigration detention center.",
    location: "Kuala Lumpur International Airport, Malaysia",
    year: "2010",
    client: "Malaysia Airports Holdings Berhad / Immigration Department",
    scope: "Architectural Design, Security Design",
    images: [
      {
        src: "/Featured/Airport Facilities/linemarkingtaxifirestation.jpg",
        alt: "Taxi Holding and Immigration",
        caption:
          "Air Line Marking, Taxi Holding Shelter and Immigration facilities",
      },
    ],
    features: [
      "Precision air line marking design",
      "Weather-protected taxi holding areas",
      "Secure immigration detention facilities",
      "Integration with airport security systems",
      "Compliance with international standards",
    ],
  },
];

export default function AirportFacilities() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  return (
    <div className="space-y-8 py-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl mb-4">
          Airport Facilities
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Our portfolio includes a diverse range of specialized airport
          facilities designed to support efficient airport operations and
          enhance passenger experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden h-full border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-56 w-full overflow-hidden group">
              <Image
                src={project.images[0].src || "/placeholder.svg"}
                alt={project.images[0].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                onClick={() => setSelectedImage(project.images[0])}
              >
                <Maximize2 className="h-8 w-8 text-white" />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge
                  variant="outline"
                  className="bg-primary/80 text-white border-primary/20"
                >
                  {project.year}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                {project.location}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                  Key Features
                </h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  {project.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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
