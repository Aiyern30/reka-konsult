import ContactForm from "@/components/pages/ContactUs/ContactForm";
import { cn } from "@/lib/utils";
import React from "react";

const ContactPage = () => {
  return (
    <div
      className={cn(
        "bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        "p-4 m-4"
      )}
    >
      <ContactForm />
    </div>
  );
};

export default ContactPage;
