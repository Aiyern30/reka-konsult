import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import Image from "next/image";

const projects = [
  {
    title: "Registration with Lembaga Arkitek Malaysia",
    imgSrc: "/2024_LAM ARKSB CERTIFICATE.png",
    altText: "Registration with Lembaga Arkitek Malaysia",
  },
  {
    title: "Registration with SSM",
    imgSrc: "/Perakuan perbadanan syarikat sendirian_ARKSB.png",
    altText: "Registration with SSM",
  },
  {
    title: "Registration with Kementerian Kewangan Malaysia",
    imgSrc: "/MOF Cert_2022 to 2025.png",
    altText: "Registration with Kementerian Kewangan Malaysia",
  },
  {
    title: "Registration with Jabatan Kastam DiRaja Malaysia",
    imgSrc: "/KASTAM Approval Letter_SST.png",
    altText: "Registration with Jabatan Kastam DiRaja Malaysia",
  },
];

export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <Card key={index} className="w-full h-full pb-5">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="w-full h-full flex justify-center items-center">
              <Image
                src={project.imgSrc} // Image source
                alt={project.altText} // Alt text for the image
                width={800} // Specify width
                height={500} // Specify height
                className="object-contain border" // Adjust styling as needed
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
