import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import React from "react";

const Projects = () => {
  return (
    <div
      className={cn(
        "bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        "p-4"
      )}
    >
      <Accordion type="multiple" defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>List of Past Project Undertaken</AccordionTrigger>
          <AccordionContent className="p-4">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>Airport Terminal Buildings</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>

                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>Airport Facilities</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>

                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>Other Projects Undertaken</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Registration with Boards</AccordionTrigger>
          <AccordionContent className="p-4">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>
                      Registration with Lembaga Arkitek Malaysia
                    </CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>

                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>Registration with SSM</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>
                      Registration with Kementerian Kewangan Malaysia
                    </CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>
                      Registration with Jabatan Kastam DiRaja Malaysia
                    </CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
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
