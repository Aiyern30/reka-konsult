"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";
import ProjectsList from "@/components/pages/Projects/ProjectsList";
import RegisterList from "@/components/pages/Projects/RegisterList";

const Projects = () => {
  return (
    <div
      className={cn(
        "bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        "p-4 m-4"
      )}
    >
      <Accordion
        type="multiple"
        defaultValue={["item-1", "item-2"]}
        className="space-y-5"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>List of Past Project Undertaken</AccordionTrigger>
          <AccordionContent>
            <ProjectsList />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Registration with Boards</AccordionTrigger>
          <AccordionContent>
            <RegisterList />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Projects;
