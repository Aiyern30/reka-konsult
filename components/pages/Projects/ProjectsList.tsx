"use client";

import { Button, Card, CardContent, CardFooter } from "@/components/ui";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectsList() {
  const router = useRouter();

  const projects = [
    {
      id: "airport-terminal",
      title: "Airport Terminal Buildings",
      image:
        "/Featured/Airport Terminal Buildings/Airport Terminal Buildings.jpg",
      items: [
        "Low Cost Carrier Terminal (LCCT), Extension of Main",
        "Terminal Building, KLIA/Commuter Rail Service",
        "Station, Expansion of Low Cost Carrier Terminal (LCCT)",
      ],
      path: "/Projects/Featured?tab=Airport Terminal Buildings",
    },
    {
      id: "airport-facilities",
      title: "Airport Facilities",
      image: "/Featured/Airport Facilities/aircargonwalkway.jpg",
      items: [
        "TRAFFIC CONTROL TOWER @ KLIA 2",
        "APRON CONTROL TOWER",
        "CUSTOM ONE STOP CENTRE COMPLEX",
        "Air Cargo Handling and Covered Walkway",
        "Landside Fire Station & Baggage Handling",
        "Air Line Marking/Taxi Holding Shelter & Taxi Waiting Area/Immigration Detention Centre",
      ],
      path: "/Projects/Featured?tab=Airport Facilities",
    },
    {
      id: "other-projects",
      title: "Other Projects Undertaken",
      image: "/Featured/Other Taken Projects/AL AMANIAH front.jpg",
      items: [
        "Racing Circuit",
        "Government Facilities",
        "Medical Care Facilities",
        "Mosque",
      ],
      path: "/Projects/Featured?tab=Other Projects Undertaken",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group transition-all duration-300 h-full"
        >
          <Card className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:scale-100">
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                fill
                alt={project.title}
                className="rounded-t-md object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <CardContent className="flex-1 pt-5">
              <div className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <ul className="list-disc list-inside space-y-1.5">
                  {project.items.map((item, index) => (
                    <li key={index} className="leading-tight">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter className="pt-2 pb-4">
              <Button
                onClick={() => router.push(project.path)}
                className="w-full group-hover:bg-primary/90 transition-all"
              >
                View Project Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
