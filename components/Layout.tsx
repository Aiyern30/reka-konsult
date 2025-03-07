import React from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="mt-[80px]">{children}</main>
    </div>
  );
};

export default Layout;
