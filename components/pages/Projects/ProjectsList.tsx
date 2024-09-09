"use client";

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function ProjectsList() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col w-80">
          <CardHeader>
            <CardTitle>Airport Terminal Buildings</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 px-2">
            <div className="relative w-full h-60 mb-4">
              <Image
                src="/Featured/Airport Terminal Buildings/Airport Terminal Buildings.jpg"
                fill
                alt="Airport Terminal Buildings"
                className="rounded-md"
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="text-xs text-gray-400 px-2">
              <ul className="list-disc list-inside">
                <li>Low Cost Carrier Terminal (LCCT), Extension of Main</li>
                <li>Terminal Building, KLIA/Commuter Rail Service</li>
                <li>Station, Expansion of Low Cost Carrier Terminal (LCCT)</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button
              onClick={() =>
                router.push("/Projects/Featured?tab=Airport Terminal Buildings")
              }
            >
              View Project
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col w-80">
          <CardHeader>
            <CardTitle>Airport Facilities</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 px-2">
            <div className="relative w-full h-60 mb-4">
              <Image
                src="/Featured/Airport Facilities/aircargonwalkway.jpg"
                fill
                alt="Airport Terminal Buildings"
                className="rounded-md"
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="text-xs text-gray-400 px-2">
              <ul className="list-disc list-inside">
                <li>TRAFFIC CONTROL TOWER @ KLIA 2</li>
                <li>APRON CONTROL TOWER</li>
                <li>CUSTOM ONE STOP CENTRE COMPLEX</li>
                <li>Air Cargo Handling and Covered Walkway</li>
                <li>Landside Fire Station & Baggage Handling</li>
                <li>
                  Air Line Marking/Taxi Holding Shelter & Taxi Waiting
                  Area/Immigration Detention Centre
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button
              onClick={() =>
                router.push("/Projects/Featured?tab=Airport Facilities")
              }
            >
              View Project
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col w-80">
          <CardHeader>
            <CardTitle>Other Projects Undertaken</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 px-2">
            <div className="relative w-full h-60 mb-4">
              <Image
                src="/Featured/Other Taken Projects/AL AMANIAH front.jpg"
                fill
                alt="Other Projects Undertaken"
                className="rounded-md"
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="text-xs text-gray-400 px-2">
              <ul className="list-disc list-inside">
                <li>Racing Circuit</li>
                <li>Government Facilities</li>
                <li>Medical Care Facilities</li>
                <li>Mosque</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button
              onClick={() =>
                router.push("/Projects/Featured?tab=Other Projects Undertaken")
              }
            >
              View Project
            </Button>{" "}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
