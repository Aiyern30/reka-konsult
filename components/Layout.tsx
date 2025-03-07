import React from "react";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="mt-[80px]">
        {children}
        <Toaster />
      </main>
    </div>
  );
};

export default Layout;
