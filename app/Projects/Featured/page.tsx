import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const FeaturedProject = () => {
  return <div
  className={cn(
    "bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
    "p-4 m-4"
  )}
><Tabs defaultValue="Airport Terminal Buildings">
  <TabsList>
    <TabsTrigger value="Airport Terminal Buildings">Airport Terminal Buildings</TabsTrigger>
    <TabsTrigger value="Airport Facilities">Airport Facilities</TabsTrigger>
    <TabsTrigger value="Other Projects Undertaken">Airport Facilities</TabsTrigger>
  </TabsList>
  <TabsContent value="Airport Terminal Buildings"><Accordion type="multiple" defaultValue={["item-1","item-2","item-3"]} className="space-y-5">
  <AccordionItem value="item-1">
    <AccordionTrigger>Low Cost Carrier Terminal (LCCT)</AccordionTrigger>
    <AccordionContent>
      <Image src={"/lcct.png"} alt="" width={800} height={800}></Image>
      <Image src={"/Airport Terminal Buildings.jpg"} alt="" width={800} height={800}></Image>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Extension of Main Terminal Building, KLIA/Commuter Rail Service Station</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Expansion of Low Cost Carrier Terminal (LCCT)</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</TabsContent>
  <TabsContent value="Airport Facilities">Change your Airport Facilities here.</TabsContent>
  <TabsContent value="Other Projects Undertaken">Other Projects Undertaken</TabsContent>

</Tabs>
</div>;
};

export default FeaturedProject;
