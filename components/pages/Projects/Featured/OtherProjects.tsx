"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/";
import { Badge } from "@/components/ui/";
import {
  Building,
  Calendar,
  MapPin,
  ArrowRight,
  Maximize2,
  DollarSign,
} from "lucide-react";

const projects = [
  {
    id: "racing-circuit",
    title: "Racing Circuit - Sepang F1 Circuit Pit Building",
    description:
      "The Pit Building is designed to house the main facilities for the hosting of a Formula One racing event. It contains the pits and team rooms, the race control centre, the press conference room, the paddock clubs, and offices.",
    location: "Sepang, Malaysia",
    year: "1999",
    client: "Sepang International Circuit",
    cost: "RM 46.5 million",
    scope: "Detailed Design and Construction Supervision",
    images: [
      {
        src: "/Featured/Other Taken Projects/Racing Circuit.jpg",
        alt: "Sepang F1 Circuit",
        caption: "Sepang F1 Circuit Pit Building",
      },
    ],
    details: [
      {
        title: "Facilities Overview",
        content:
          "The pits, located on the ground floor, are where all preparations are conducted, and where racing cars of the participating teams are housed. The first-floor paddock clubs serve as the gathering place for local and international social elites during the event.",
      },
      {
        title: "Design & Project Team",
        content:
          "The concept design was created by Tilke Ingenieurs, while the detailed design and construction supervision was carried out by Reka Konsult, as part of the project management team led by Sepang F1 Circuit Main Consultants Iktisas Ingenieurs Sdn Bhd and Tilke Gmbh.",
      },
    ],
    features: [
      "30 pit garages for F1 teams",
      "Race control center with advanced monitoring systems",
      "Media center and press conference facilities",
      "VIP paddock clubs with premium amenities",
      "Administrative offices and support facilities",
    ],
  },
  {
    id: "government-facilities",
    title: "Government Facilities",
    description:
      "Our firm has designed and developed various government facilities that combine functionality, security, and architectural excellence to serve the public sector effectively.",
    location: "Various locations, Malaysia",
    year: "2005-2020",
    client: "Various Government Agencies",
    scope: "Architectural Design, Project Management",
    images: [
      {
        src: "/Featured/Other Taken Projects/Government_Facilities.png",
        alt: "Government Facilities",
        caption: "Government Administrative Building",
      },
    ],
    details: [
      {
        title: "Project Overview",
        content:
          "Our government facility projects include administrative buildings, public service centers, and specialized government facilities designed to meet the specific requirements of various agencies.",
      },
    ],
    features: [
      "Secure access control systems",
      "Energy-efficient building design",
      "Public service areas with optimal flow",
      "Staff facilities and office spaces",
      "Integration with urban context",
    ],
  },
  {
    id: "medical-facilities",
    title: "Medical Care Facilities",
    description:
      "We have designed healthcare facilities that prioritize patient care, operational efficiency, and healing environments to support medical professionals and patients alike.",
    location: "Various locations, Malaysia",
    year: "2008-2018",
    client: "Ministry of Health / Private Healthcare Providers",
    scope: "Architectural Design, Medical Planning",
    images: [
      {
        src: "/Featured/Other Taken Projects/medical care facilities.png",
        alt: "Medical Care Facilities",
        caption: "Modern Healthcare Facility",
      },
    ],
    details: [
      {
        title: "Healthcare Design Approach",
        content:
          "Our healthcare projects focus on creating environments that promote healing, support efficient medical operations, and provide comfort for patients, visitors, and staff.",
      },
    ],
    features: [
      "Patient-centered design principles",
      "Efficient clinical workflow layouts",
      "Infection control considerations",
      "Natural light and healing environments",
      "Flexible spaces for evolving healthcare needs",
    ],
  },
  {
    id: "mosque",
    title: "Mosque Projects",
    description:
      "Our mosque projects blend traditional Islamic architectural elements with modern design and construction techniques to create beautiful and functional places of worship.",
    location: "Various locations, Malaysia",
    year: "2010-2022",
    client: "Various Religious Authorities",
    scope: "Architectural Design, Interior Design",
    images: [
      {
        src: "/Featured/Other Taken Projects/MOSQUE.png",
        alt: "Masjid Kuala Kubu & Masjid Taman Sri Melati",
        caption: "Masjid Kuala Kubu & Masjid Taman Sri Melati, Selayang",
      },
      {
        src: "/Featured/Other Taken Projects/AL AMANIAH front.jpg",
        alt: "Masjid Al'Amaniah",
        caption: "Cadangan Menaiktaraf Masjid Al'Amaniah, Daerah Gombak",
      },
    ],
    details: [
      {
        title: "MASJID KUALA KUBU & MASJID TAMAN SRI MELATI, SELAYANG",
        content:
          "The mosque serves the community as a place of worship and community gathering, featuring a large prayer hall, meeting rooms, and facilities for ablution and educational programs.",
      },
      {
        title: "Cadangan Menaiktaraf Masjid Al'Amaniah, Daerah Gombak",
        content:
          "This project involved the upgrading and modernization of the existing Masjid Al'Amaniah to better serve the growing community while preserving its cultural and religious significance.",
      },
    ],
    features: [
      "Prayer halls with traditional Islamic design elements",
      "Modern ablution facilities",
      "Community gathering spaces",
      "Educational areas for religious studies",
      "Sustainable building features",
    ],
  },
];

export default function OtherProjects() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(
    "racing-circuit"
  );

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="space-y-10 py-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl mb-4">
          Other Projects Undertaken
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Our diverse portfolio extends beyond airport projects to include
          various specialized facilities that demonstrate our versatility and
          expertise in different sectors.
        </p>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          className={`bg-white dark:bg-slate-800/50 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
            expandedProject === project.id ? "ring-2 ring-primary/20" : ""
          }`}
        >
          <div
            className="p-6 cursor-pointer flex justify-between items-center"
            onClick={() => toggleProject(project.id)}
          >
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20"
              >
                {project.year}
              </Badge>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
            </div>
            <ArrowRight
              className={`h-5 w-5 text-primary transition-transform duration-300 ${
                expandedProject === project.id ? "rotate-90" : ""
              }`}
            />
          </div>

          {expandedProject === project.id && (
            <div className="px-6 pb-6">
              <div className="lg:flex gap-8">
                <div className="lg:w-1/2 mb-6 lg:mb-0">
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-primary mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          Location
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {project.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-2 text-primary mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          Year
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {project.year}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Building className="h-5 w-5 mr-2 text-primary mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200">
                          Client
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {project.client}
                        </p>
                      </div>
                    </div>
                    {project.cost && (
                      <div className="flex items-start">
                        <DollarSign className="h-5 w-5 mr-2 text-primary mt-0.5" />
                        <div>
                          <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200">
                            Project Cost
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {project.cost}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {project.details &&
                    project.details.map((detail, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="text-md font-medium text-slate-900 dark:text-slate-200 mb-2">
                          {detail.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {detail.content}
                        </p>
                      </div>
                    ))}

                  <div className="mt-6">
                    <h4 className="text-md font-medium text-slate-900 dark:text-slate-200 mb-2">
                      Key Features
                    </h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-1/2">
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
          )}
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
