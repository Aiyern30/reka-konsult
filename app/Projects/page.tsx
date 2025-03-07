"use client";

import { cn } from "@/lib/utils";
import ProjectsList from "@/components/pages/Projects/ProjectsList";

const Projects = () => {
  return (
    <div
      className={cn(
        "min-h-[calc(100vh-136px)] bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-all",
        "py-8 px-4 sm:px-6 lg:px-8"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl mb-2">
            Our Projects Portfolio
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our comprehensive range of successfully completed projects,
            showcasing our expertise and commitment to excellence.
          </p>
        </div>

        <ProjectsList />
      </div>
    </div>
  );
};

export default Projects;
