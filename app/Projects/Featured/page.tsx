"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AirportTerminal from "@/components/pages/Projects/Featured/AirportTerminal";
import AirportFacilities from "@/components/pages/Projects/Featured/AirportFacilities";
import OtherProjects from "@/components/pages/Projects/Featured/OtherProjects";

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
        <TabsList className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto">
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
          <AirportTerminal />
        </TabsContent>
        <TabsContent value="Airport Facilities">
          <AirportFacilities />
        </TabsContent>
        <TabsContent value="Other Projects Undertaken">
          <OtherProjects />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Header = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <FeaturedProject />
  </Suspense>
);

export default Header;
