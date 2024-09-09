"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const FeaturedProject = () => {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("tab") || "Airport Terminal Buildings";
  return (
    <div
      className={cn(
        "bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        "p-4 m-4"
      )}
    >
      <Tabs defaultValue={selectedTab}>
        <TabsList className="flex flex-wrap gap-2 overflow-x-auto">
          <TabsTrigger value="Airport Terminal Buildings">
            Airport Terminal Buildings
          </TabsTrigger>
          <TabsTrigger value="Airport Facilities">
            Airport Facilities
          </TabsTrigger>
          <TabsTrigger value="Other Projects Undertaken">
            Other Projects Undertaken
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Airport Terminal Buildings">
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3"]}
            className="space-y-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Low Cost Carrier Terminal (LCCT)
              </AccordionTrigger>
              <AccordionContent className="grid lg:grid-cols-2 grid-cols-1">
                <Image
                  src={"/Featured/Airport Terminal Buildings/lcct.png"}
                  alt=""
                  width={800}
                  height={800}
                ></Image>
                <Image
                  src={
                    "/Featured/Airport Terminal Buildings/Airport Terminal Buildings.jpg"
                  }
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Extension of Main Terminal Building, KLIA/Commuter Rail Service
                Station
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={
                    "/Featured/Airport Terminal Buildings/terminal building.jpg"
                  }
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Expansion of Low Cost Carrier Terminal (LCCT)
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={
                    "/Featured/Airport Terminal Buildings/LCCT expansion2.jpg"
                  }
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="Airport Facilities">
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3"]}
            className="space-y-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                TRAFFIC CONTROL TOWER @ KLIA 2
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={"/Featured/Airport Facilities/traffic control.jpg"}
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>APRON CONTROL TOWER</AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={"/Featured/Airport Facilities/Apron.jpg"}
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                CUSTOM ONE STOP CENTRE COMPLEX
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={"/Featured/Airport Facilities/Custom Onestop centre.jpg"}
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Air Cargo Handling and Covered Walkway
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={"/Featured/Airport Facilities/aircargonwalkway.jpg"}
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Landside Fire Station & Baggage Handling
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={"/Featured/Airport Facilities/Landside.jpg"}
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Air Line Marking/Taxi Holding Shelter & Taxi Waiting
                Area/Immigration Detention Centre
              </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={
                    "/Featured/Airport Facilities/linemarkingtaxifirestation.jpg"
                  }
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="Other Projects Undertaken">
          <Accordion
            type="multiple"
            defaultValue={["item-1", "item-2", "item-3"]}
            className="space-y-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Racing Circuit</AccordionTrigger>
              <AccordionContent className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <Image
                  src={"/Featured/Other Taken Projects/Racing Circuit.jpg"}
                  alt="Sepang F1 Circuit"
                  layout="responsive"
                  width={600}
                  height={400}
                />
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    Sepang F1 Circuit - Pit Building
                  </h2>

                  <p>
                    The Pit Building is designed to house the main facilities
                    for the hosting of a Formula One racing event. It contains
                    the pits and team rooms, the race control centre, the press
                    conference room, the paddock clubs, and offices.
                  </p>

                  <h3 className="text-lg font-medium">Facilities Overview</h3>
                  <p>
                    The pits, located on the ground floor, are where all
                    preparations are conducted, and where racing cars of the
                    participating teams are housed. The first-floor paddock
                    clubs serve as the gathering place for local and
                    international social elites during the event.
                  </p>

                  <h3 className="text-lg font-medium">Design & Project Team</h3>
                  <p>
                    The concept design was created by Tilke Ingenieurs, while
                    the detailed design and construction supervision was carried
                    out by Reka Konsult, as part of the project management team
                    led by Sepang F1 Circuit Main Consultants Iktisas Ingenieurs
                    Sdn Bhd and Tilke Gmbh.
                  </p>

                  <div className="text-sm text-gray-500">
                    <p>
                      <strong>Completed:</strong> 1999
                    </p>
                    <p>
                      <strong>Project Cost:</strong> RM 46.5 million
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Government Facilites</AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={
                    "/Featured/Other Taken Projects/Government_Facilities.png"
                  }
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Medical care facilities </AccordionTrigger>
              <AccordionContent className="flex justify-center items-center">
                <Image
                  src={
                    "/Featured/Other Taken Projects/medical care facilities.png"
                  }
                  alt=""
                  width={800}
                  height={800}
                ></Image>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Mosque</AccordionTrigger>
              <AccordionContent className="grid lg:grid-cols-2 grid-cols-1">
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold text-center">
                    MASJID KUALA KUBU & MASJID TAMAN SRI MELATI,SELAYANG
                  </h2>
                  <Image
                    src={"/Featured/Other Taken Projects/MOSQUE.png"}
                    alt=""
                    width={800}
                    height={800}
                  ></Image>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold text-center">
                    Cadangan Menaiktaraf Masjid Al’Amaniah, Daerah Gombak
                  </h2>
                  <Image
                    src={"/Featured/Other Taken Projects/AL AMANIAH front.jpg"}
                    alt=""
                    width={800}
                    height={800}
                  ></Image>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeaturedProject;
