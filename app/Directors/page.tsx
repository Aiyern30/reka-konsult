import DirectorSection from "@/components/pages/Directors/DirectorSection";
import { cn } from "@/lib/utils";
import React from "react";

const DirectorsPage = () => {
  return (
    <div
      className={cn(
        "bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        "p-4 m-4"
      )}
    >
      <DirectorSection />
    </div>
  );
};

export default DirectorsPage;
