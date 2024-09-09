import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import Image from "next/image";
export default function AirportTerminal() {
  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1", "item-2", "item-3"]}
      className="space-y-5"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Low Cost Carrier Terminal (LCCT)</AccordionTrigger>
        <AccordionContent className="grid lg:grid-cols-2 grid-cols-1">
          <Image
            src={"/Featured/Airport Terminal Buildings/lcct.png"}
            alt=""
            width={600}
            height={600}
          />
          <Image
            src={
              "/Featured/Airport Terminal Buildings/Airport Terminal Buildings.jpg"
            }
            alt=""
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Extension of Main Terminal Building, KLIA/Commuter Rail Service
          Station
        </AccordionTrigger>
        <AccordionContent className="flex justify-center items-center">
          <Image
            src={"/Featured/Airport Terminal Buildings/terminal building.jpg"}
            alt=""
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Expansion of Low Cost Carrier Terminal (LCCT)
        </AccordionTrigger>
        <AccordionContent className="flex justify-center items-center">
          <Image
            src={"/Featured/Airport Terminal Buildings/LCCT expansion2.jpg"}
            alt=""
            width={600}
            height={600}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
