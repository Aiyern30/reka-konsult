"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/";
import { cn } from "@/lib/utils";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AirportTerminal from "@/components/pages/Projects/Featured/AirportTerminal";
import AirportFacilities from "@/components/pages/Projects/Featured/AirportFacilities";
import OtherProjects from "@/components/pages/Projects/Featured/OtherProjects";

const FeaturedProject = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") || "Airport Terminal Buildings"
  );

  useEffect(() => {
    // Update URL when tab changes
    router.push(`/Projects/Featured?tab=${activeTab}`, { scroll: false });
  }, [activeTab, router]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={cn(
        "min-h-[calc(100vh-136px)] bg-zinc-50 dark:bg-zinc-900 text-slate-950 dark:text-slate-50 transition-all",
        "py-8 px-4 sm:px-6 lg:px-8"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl mb-2">
            Featured Projects
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our portfolio of significant projects that showcase our
            expertise and commitment to excellence in architectural design.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <div className="sticky top-0 z-10 bg-zinc-50 dark:bg-zinc-900 pt-2 pb-4">
            <TabsList className="grid sm:grid-cols-1 md:grid-cols-3 h-auto w-full max-w-3xl mx-auto">
              <TabsTrigger value="Airport Terminal Buildings">
                Airport Terminal Buildings
              </TabsTrigger>
              <TabsTrigger value="Airport Facilities">
                Airport Facilities
              </TabsTrigger>
              <TabsTrigger value="Other Projects Undertaken">
                Other Projects
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="Airport Terminal Buildings" className="mt-6">
            <AirportTerminal />
          </TabsContent>
          <TabsContent value="Airport Facilities" className="mt-6">
            <AirportFacilities />
          </TabsContent>
          <TabsContent value="Other Projects Undertaken" className="mt-6">
            <OtherProjects />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default function FeaturedProjectPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      }
    >
      <FeaturedProject />
    </Suspense>
  );
}
