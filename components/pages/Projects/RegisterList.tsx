"use client";
import { Card, CardContent } from "@/components/ui";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/";
import { Badge } from "@/components/ui/";
import { Calendar, Award, FileCheck, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Registration with Lembaga Arkitek Malaysia",
    imgSrc: "/2024_LAM ARKSB CERTIFICATE.png",
    altText: "Registration with Lembaga Arkitek Malaysia",
    organization: "Lembaga Arkitek Malaysia",
    type: "Professional License",
    validUntil: "2025",
  },
  {
    title: "Registration with SSM",
    imgSrc: "/Perakuan perbadanan syarikat sendirian_ARKSB.png",
    altText: "Registration with SSM",
    organization: "Suruhanjaya Syarikat Malaysia",
    type: "Corporate Registration",
    validUntil: "Permanent",
  },
  {
    title: "Registration with Kementerian Kewangan Malaysia",
    imgSrc: "/MOF Cert_2022 to 2025.png",
    altText: "Registration with Kementerian Kewangan Malaysia",
    organization: "Kementerian Kewangan Malaysia",
    type: "Government Vendor",
    validUntil: "2025",
  },
  {
    title: "Registration with Jabatan Kastam DiRaja Malaysia",
    imgSrc: "/KASTAM Approval Letter_SST.png",
    altText: "Registration with Jabatan Kastam DiRaja Malaysia",
    organization: "Jabatan Kastam DiRaja Malaysia",
    type: "Tax Registration",
    validUntil: "Permanent",
  },
];

export default function RegisterList() {
  return (
    <div className="py-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
          Professional Registrations & Certifications
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Our firm maintains active registrations with key regulatory bodies and
          professional organizations, ensuring compliance and professional
          standards in all our operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="group h-full overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-800">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-medium text-slate-900 dark:text-slate-100 line-clamp-2">
                    {cert.organization}
                  </h3>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 dark:bg-slate-900/50">
                  <Image
                    src={cert.imgSrc || "/placeholder.svg"}
                    alt={cert.altText}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {cert.type}
                    </Badge>
                    {cert.validUntil && (
                      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        Valid until: {cert.validUntil}
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {cert.title}
                  </p>
                  <div className="mt-3 text-xs text-primary flex items-center">
                    <span>View Certificate</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>

            <DialogContent className="sm:max-w-3xl">
              <DialogTitle>{cert.title}</DialogTitle>
              <div className="mt-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-md">
                <div
                  className="relative w-full"
                  style={{ height: "70vh", maxHeight: "600px" }}
                >
                  <Image
                    src={cert.imgSrc || "/placeholder.svg"}
                    alt={cert.altText}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex items-center text-sm">
                  <Award className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium">{cert.organization}</span>
                </div>
                {cert.validUntil && (
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>Valid until: {cert.validUntil}</span>
                  </div>
                )}
                <div className="flex items-center text-sm">
                  <FileCheck className="h-4 w-4 mr-2 text-primary" />
                  <span>{cert.type}</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
