"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/";
import { Dialog, DialogContent } from "@/components/ui/";
import {
  Award,
  Calendar,
  FileText,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const corporateInfo = [
  {
    id: "ssm",
    imgSrc: "/Corporate_Information/SSM.jpeg",
    title: "REGISTRAR OF COMPANY (SSM)",
    icon: <FileText className="h-5 w-5" />,
    category: "Registration",
    date: "17th June 2010",
    regNo: "Registration No: 904797-A (201001021027)",
    additional: "(Previously known as Reka Konsult since 1990)",
    description:
      "Official registration with the Companies Commission of Malaysia (Suruhanjaya Syarikat Malaysia), confirming our status as a legally incorporated business entity.",
  },
  {
    id: "mof",
    imgSrc: "/Corporate_Information/MOF.jpeg",
    title: "MINISTRY OF FINANCE (MOF)",
    icon: <ShieldCheck className="h-5 w-5" />,
    category: "Certification",
    certNo: "No Sijil: J260390122002344619",
    regNo: "No Pendaftaran: 465-02032430",
    validity: "Tempoh sah laku: 31/10/2022 - 13/11/2025",
    description:
      "Registration with the Ministry of Finance Malaysia, qualifying our firm to participate in government procurement and tender opportunities.",
  },
  {
    id: "jkdm",
    imgSrc: "/Corporate_Information/JKDM2.jpeg",
    title: "JABATAN KASTAM DIRAJA MALAYSIA",
    icon: <FileText className="h-5 w-5" />,
    category: "Tax Registration",
    sstNo: "SST No: B16-1808-31037820",
    description:
      "Registration with the Royal Malaysian Customs Department for Sales and Service Tax (SST) compliance, authorizing our firm to collect and remit applicable taxes.",
  },
  {
    id: "lam",
    imgSrc: "/Corporate_Information/LAM.png",
    title: "LEMBAGA ARKITEK MALAYSIA (LAM)",
    icon: <Award className="h-5 w-5" />,
    category: "Professional License",
    certNo: "No Perakuan: 271/2025",
    regNo: "Registration No: BC/A 127",
    description:
      "Professional registration with the Board of Architects Malaysia, officially recognizing our firm as a qualified architectural practice authorized to provide architectural services in Malaysia.",
  },
  {
    id: "acam",
    imgSrc: "/Corporate_Information/ACAM.jpg",
    title: "ASSOCIATION OF CONSULTING ARCHITECTURES MALAYSIA",
    icon: <Award className="h-5 w-5" />,
    category: "Professional Membership",
    certNo: "Corporate Member: C53",
    description:
      "Membership with the Association of Consulting Architects Malaysia, connecting our firm to the professional network of architectural practices and industry standards.",
  },
];

export default function CorporatePage() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    null | (typeof corporateInfo)[0]
  >(null);

  return (
    <div
      className={cn(
        "min-h-screen bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg p-4"
      )}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl mb-4">
            Corporate Information
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our firm maintains active registrations and certifications with key
            regulatory bodies and professional organizations, demonstrating our
            commitment to professional standards and legal compliance.
          </p>
        </div>

        {/* Certificates grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {corporateInfo.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col h-full group cursor-pointer"
              onClick={() => setSelectedCertificate(item)}
            >
              <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {item.category}
                  </Badge>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>

              <div className="flex flex-col md:flex-row p-4 gap-4 h-full">
                <div className="flex justify-center items-center bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
                  <div className="relative h-20 w-28">
                    <Image
                      src={item.imgSrc || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    {item.date && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        <span>{item.date}</span>
                      </div>
                    )}
                    {item.regNo && <div className="text-xs">{item.regNo}</div>}
                    {item.certNo && (
                      <div className="text-xs">{item.certNo}</div>
                    )}
                    {item.sstNo && <div className="text-xs">{item.sstNo}</div>}
                    {item.validity && (
                      <div className="text-xs text-primary">
                        {item.validity}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate dialog */}
        <Dialog
          open={!!selectedCertificate}
          onOpenChange={() => setSelectedCertificate(null)}
        >
          <DialogContent className="sm:max-w-2xl">
            {selectedCertificate && (
              <div className="space-y-6">
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg flex items-center justify-center">
                    <div className="relative h-40 w-52">
                      <Image
                        src={selectedCertificate.imgSrc || "/placeholder.svg"}
                        alt={selectedCertificate.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <Badge className="mb-3">
                      {selectedCertificate.category}
                    </Badge>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {selectedCertificate.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      {selectedCertificate.description}
                    </p>

                    <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      {selectedCertificate.date && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>Date: {selectedCertificate.date}</span>
                        </div>
                      )}
                      {selectedCertificate.regNo && (
                        <div className="flex items-start gap-2">
                          <FileText className="h-4 w-4 text-primary mt-0.5" />
                          <span>Registration: {selectedCertificate.regNo}</span>
                        </div>
                      )}
                      {selectedCertificate.certNo && (
                        <div className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-primary mt-0.5" />
                          <span>Certificate: {selectedCertificate.certNo}</span>
                        </div>
                      )}
                      {selectedCertificate.sstNo && (
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span>{selectedCertificate.sstNo}</span>
                        </div>
                      )}
                      {selectedCertificate.validity && (
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Calendar className="h-4 w-4" />
                          <span>{selectedCertificate.validity}</span>
                        </div>
                      )}
                      {selectedCertificate.additional && (
                        <div className="mt-4 text-slate-500 dark:text-slate-400 italic">
                          {selectedCertificate.additional}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mt-4">
                  <h3 className="font-medium text-slate-900 dark:text-slate-100 mb-2 flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-2 text-primary" />
                    Official Verification
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    This certification/registration can be verified through the
                    official channels of {selectedCertificate.title}. The
                    document is maintained in our corporate records and is
                    available for inspection by authorized parties.
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
