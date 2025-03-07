import type React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  Badge,
  Button,
} from "@/components/ui/";
import { Building2, Briefcase, ChevronRight } from "lucide-react";

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
    <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl group hover:scale-100">
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 relative">
          <div className="aspect-square overflow-hidden bg-muted/20">
            <Avatar className="w-full h-full rounded-none">
              <AvatarImage
                src={image}
                alt={name}
                className="object-cover transition-transform duration-500 "
              />
              <AvatarFallback className="w-full h-full rounded-none text-2xl">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <Badge
            className="absolute top-4 left-4 flex items-center gap-1.5"
            variant="secondary"
          >
            {icon}
            <span>{iconLabel}</span>
          </Badge>
        </div>

        <CardContent className="md:col-span-3 flex flex-col justify-center p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-3">{name}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">{bio}</p>
          <div className="mt-auto">
            <Button className="inline-flex items-center text-sm font-medium hover:underline">
              View Portfolio <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
