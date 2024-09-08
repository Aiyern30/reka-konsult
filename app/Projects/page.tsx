"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";

const Projects = () => {

  const router = useRouter();

  return (
    <div
      className={cn(
        "bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        "p-4 m-4"
      )}
    >
      <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>List of Past Project Undertaken</AccordionTrigger>
          <AccordionContent >
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col w-80">
                  <CardHeader>
                    <CardTitle>Airport Terminal Buildings</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 px-2">
                    <div className="relative w-full h-60 mb-4">
                      <Image
                        src="/Airport Terminal Buildings.jpg"
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
                        <li>
                          Low Cost Carrier Terminal (LCCT), Extension of Main
                        </li>
                        <li>Terminal Building, KLIA/Commuter Rail Service</li>
                        <li>
                          Station, Expansion of Low Cost Carrier Terminal (LCCT)
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button onClick={()=> router.push("/Projects/Featured")}>View Project</Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col w-80">
                  <CardHeader>
                    <CardTitle>Airport Facilities</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 px-2">
                    <div className="relative w-full h-60 mb-4">
                      <Image
                        src="/Airport Terminal Buildings.jpg"
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
                    <Button>View Project</Button>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col w-80">
                  <CardHeader>
                    <CardTitle>Other Projects Undertaken</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 px-2">
                    <div className="relative w-full h-60 mb-4">
                      <Image
                        src="/Other Projects Taken.png"
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
                    <Button>View Project</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Registration with Boards</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4 items-center justify-center w-full">
              <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>
                      Registration with Lembaga Arkitek Malaysia
                    </CardTitle>
                    <Button
                      onClick={() =>
                        window.open("/2024_LAM ARKSB CERTIFICATE.pdf", "_blank")
                      }
                    >
                      View in Full Screen
                    </Button>
                  </CardHeader>
                  <CardContent className="w-full h-full">
                    <iframe
                      src="/2024_LAM ARKSB CERTIFICATE.pdf#zoom=100"
                      width="100%"
                      height="100%"
                      className="border w-full h-[500px]"
                    ></iframe>
                  </CardContent>
                </Card>

                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>Registration with SSM</CardTitle>
                    <Button
                      onClick={() =>
                        window.open(
                          "/Perakuan perbadanan syarikat sendirian_ARKSB.pdf",
                          "_blank"
                        )
                      }
                    >
                      View in Full Screen
                    </Button>
                  </CardHeader>
                  <CardContent className="w-full h-full">
                    <iframe
                      src="/Perakuan perbadanan syarikat sendirian_ARKSB.pdf#zoom=100"
                      width="100%"
                      height="100%"
                      className="border w-full h-[500px]"
                    ></iframe>
                  </CardContent>
                </Card>

                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>
                      Registration with Kementerian Kewangan Malaysia
                    </CardTitle>
                    <Button
                      onClick={() =>
                        window.open("/MOF Cert_2022 to 2025.pdf", "_blank")
                      }
                    >
                      View in Full Screen
                    </Button>
                  </CardHeader>
                  <CardContent className="w-full h-full">
                    <iframe
                      src="/MOF Cert_2022 to 2025.pdf#zoom=100"
                      width="100%"
                      height="100%"
                      className="border w-full h-[500px]"
                    ></iframe>
                  </CardContent>
                </Card>

                <Card className="w-full h-full">
                  <CardHeader>
                    <CardTitle>
                      Registration with Jabatan Kastam DiRaja Malaysia
                    </CardTitle>
                    <Button
                      onClick={() =>
                        window.open("/KASTAM Approval Letter_SST.pdf", "_blank")
                      }
                    >
                      View in Full Screen
                    </Button>
                  </CardHeader>

                  <CardContent className="w-full h-full">
                    <iframe
                      src="/KASTAM Approval Letter_SST.pdf#zoom=100"
                      width="100%"
                      height="100%"
                      className="border w-full h-[500px]"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Projects;
