import type React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  Badge,
  // Button,
} from "@/components/ui/";
import { Building2, Briefcase } from "lucide-react";

export default function DirectorSection() {
  return (
    <section
      id="directors"
      className="py-24 px-4 lg:px-10 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-sm font-medium"
          >
            Our Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Directors
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Meet the visionary architects leading our firm with decades of
            combined experience in the industry.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Director 1 */}
          <DirectorCard
            name="AR. Yeo Soon Teck"
            image="/User1.png"
            icon={<Building2 className="h-5 w-5" />}
            iconLabel="Architecture"
            bio="AR. Yeo Soon Teck has a distinguished career in architecture, having worked on a diverse range of projects from high-rise offices to national monuments. His experience spans across YRM Architects, Jabatan Kerja Raya, T.R. Hamzah & Yeang, and Kumpulan Perunding, before founding Reka Konsult and leading Arkitek Rekakonsult Sdn Bhd as Director."
          />

          {/* Director 2 */}
          <DirectorCard
            name="AR. Mazli Bin Md. Lajis"
            image="/User2.png"
            icon={<Briefcase className="h-5 w-5" />}
            iconLabel="Management"
            bio="AR. Mazli Bin Md. Lajis has a rich background in architectural design and project management. From his early work at Juhari Hashim Arkitek to significant roles at RDP Architect and Antara Akitek Sdn Bhd, he has led major projects and design initiatives. He joined Arkitek Rekakonsult Sdn Bhd in 2002, where he is now a Director."
          />
        </div>
      </div>
    </section>
  );
}

interface DirectorCardProps {
  name: string;
  image: string;
  icon: React.ReactNode;
  iconLabel: string;
  bio: string;
}

function DirectorCard({
  name,
  image,
  icon,
  iconLabel,
  bio,
}: DirectorCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl group hover:scale-100 relative">
      {/* Image at the top */}
      <div className="relative w-full">
        <Avatar className="w-full max-w-[300px] mx-auto h-auto rounded-lg overflow-hidden">
          <AvatarImage
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <AvatarFallback className="w-full h-full rounded-lg text-2xl">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        {/* Badge centered below the image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
          <Badge className="px-3 py-1 flex items-center gap-1">
            {icon}
            <span>{iconLabel}</span>
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardContent className="flex flex-col justify-center text-center p-6 md:p-8 mt-10">
        <h3 className="text-2xl font-bold mb-3">{name}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{bio}</p>
        {/* <div className="mt-auto">
          <Button className="inline-flex items-center text-sm font-medium">
            View Portfolio <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
}
