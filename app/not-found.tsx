"use client";

import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center">
        {/* Company Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/rk logo.jpg"
            alt="Reka Konsult Logo"
            width={300}
            height={300}
            className="w-auto object-contain"
          />
        </div>

        {/* 404 Message */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            404
          </h1>
          <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
            Page Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <Home className="h-4 w-4" />
            Return to Homepage
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link
              href="/Projects"
              className="px-5 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              View Our Projects
            </Link>

            <Link
              href="/ContactUs"
              className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-sm text-slate-500 dark:text-slate-500">
          <p>
            If you believe this is an error, please contact our team at{" "}
            <a
              href="mailto:rekakon@gmail.com"
              className="text-primary hover:underline"
            >
              rekakon@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
