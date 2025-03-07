"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, RefreshCw } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
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

            {/* Error Message */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Something went wrong
              </h1>
              <div className="h-1 w-16 bg-primary mx-auto mb-6"></div>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We apologize for the inconvenience. Please try again or return
                to the homepage.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="px-5 py-2.5 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </button>

              <Link
                href="/"
                className="px-5 py-2.5 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </div>

            {/* Additional Help */}
            <div className="mt-12 text-sm text-slate-500 dark:text-slate-500">
              <p>
                If this problem persists, please contact our team at{" "}
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
      </body>
    </html>
  );
}
