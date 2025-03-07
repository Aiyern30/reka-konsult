"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Badge, Button } from "@/components/ui/";
import {
  ArrowDown,
  Building,
  ChevronRight,
  Clock,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-all"
      style={{ height: "calc(100vh - 32px)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className='[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]'></div>
      </div>

      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/20 bg-[center_top_-1px] [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="px-4 py-1 text-sm backdrop-blur-sm bg-background/30"
          >
            Established 1990
          </Badge>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold dark:text-white tracking-tight mb-4">
            ARKITEK REKAKONSULT
            <span className="text-primary block md:inline"> SDN BHD</span>
          </h1>
          <p className="font-light text-base md:text-2xl dark:text-neutral-200 max-w-3xl mx-auto">
            Designing the Future of Architecture with Innovation and Integrity
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4"
        >
          <FeatureItem icon={<Building />} text="Award-winning Designs" />
          <FeatureItem icon={<Clock />} text="30+ Years Experience" />
          <FeatureItem icon={<Compass />} text="Innovative Solutions" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <Button
            size="lg"
            className="px-8"
            onClick={() => router.push("/Projects")}
          >
            Our Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group"
            onClick={() => router.push("/ContactUs")}
          >
            Contact Us
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-background/30 border border-border/50">
      <div className="text-primary">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
