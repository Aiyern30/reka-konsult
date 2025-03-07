"use client";

import { cn } from "@/lib/utils";
import ProjectsList from "@/components/pages/Projects/ProjectsList";
import RegisterList from "@/components/pages/Projects/RegisterList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/";

const Projects = () => {
  return (
    <div
      className={cn(
        "min-h-screen bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg p-4"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl mb-2">
            Our Projects & Certifications
          </h1>
          <div className="h-1 w-32 bg-primary mx-auto mb-6"></div>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and professional
            certifications that demonstrate our expertise and qualifications.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="projects">Projects Portfolio</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-0">
            <ProjectsList />
          </TabsContent>

          <TabsContent value="certifications" className="mt-0">
            <RegisterList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
