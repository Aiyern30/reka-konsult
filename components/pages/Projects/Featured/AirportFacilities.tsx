import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import Image from "next/image";
export default function AirportFacilities() {
  return (
    <Accordion
      type="multiple"
      defaultValue={[
        "item-1",
        "item-2",
        "item-3",
        "item-4",
        "item-5",
        "item-6",
      ]}
      className="space-y-5"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>TRAFFIC CONTROL TOWER @ KLIA 2</AccordionTrigger>
        <AccordionContent className="flex justify-center items-center">
          <Image
            src={"/Featured/Airport Facilities/traffic control.jpg"}
            alt=""
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>APRON CONTROL TOWER</AccordionTrigger>
        <AccordionContent className="flex justify-center items-center">
          <Image
            src={"/Featured/Airport Facilities/Apron.jpg"}
            alt=""
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>CUSTOM ONE STOP CENTRE COMPLEX</AccordionTrigger>
        <AccordionContent className="flex justify-center items-center">
          <Image
            src={"/Featured/Airport Facilities/Custom Onestop centre.jpg"}
            alt=""
            width={600}
            height={600}
          />
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
            width={600}
            height={600}
          />
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
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Air Line Marking/Taxi Holding Shelter & Taxi Waiting Area/Immigration
          Detention Centre
        </AccordionTrigger>
        <AccordionContent className="flex justify-center items-center">
          <Image
            src={"/Featured/Airport Facilities/linemarkingtaxifirestation.jpg"}
            alt=""
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
