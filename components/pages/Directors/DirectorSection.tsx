import { Building2, Briefcase, Calendar, ImageIcon } from "lucide-react";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Card,
} from "@/components/ui";

type Director = {
  name: string;
  imageURL: string;
  role: string;
  description: string[];
  imagePictureUrl: string[];
  expertise: string[];
  icon: JSX.Element;
};

const UserDetails: Director[] = [
  {
    name: "AR. YEO SOON TECK",
    imageURL: "/User1.png",
    role: "Director",
    description: [
      "1978, joined YRM Architects and Planners (London) and assisted in projects ranging from Rehabilitation works, Interiors, Commercial buildings projects and Airports.",
      "1981, joined the Jabatan Kerja Raya (Cawangan Bangunan) and worked on the Arkib Negara, Federal Courthouses, and various building projects under taken for the Ministry of Transport and Agriculture.",
      "1983, joined T.R.Hamzah & Yeang Sdn. Bhd. Worked on projects ranging from High Rise offices to Resorts. He was also the Project Architect for Menara Boustead and Plaza Atrium.",
      "1987, joined Kumpulan Perunding as Manager for the Kuala Lumpur office. He worked on projects ranging from Renovations for Banks to Housing, Apartments, Factories and Schools.",
      "1990 formed Reka Konsult and 1995 formed a partnership firm.",
      "2010 Present, Director of Arkitek Rekakonsult Sdn Bhd.",
    ],
    imagePictureUrl: ["/Directors/roof of mtb.jpg"],
    expertise: [
      "Commercial Architecture",
      "High-Rise Buildings",
      "Project Management",
    ],
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    name: "AR. MAZLI BIN MD. LAJIS",
    imageURL: "/User2.png",
    role: "Director",
    description: [
      "1994-1995 joined Juhari Hashim Arkitek as Assistance Architect before further studies.",
      "1996-1997 worked for RDP Architect East Sheen London, United Kingdom in various drawing documentations.",
      "1997-1999 joined Antara Akitek Sdn Bhd as Project Architect and worked on design detailing, authorities submission and site supervision for project of 180 units condominium 'Villa Makmur' at Segambut, 6 storey factory for Tan Chong Tradings at Segambut, factory cum office facilities at Senai Industrial Park.",
      "1999-2002 joined OST Architecture As Design/Project Architect and involved extensively on Housing and Condo. Projects for Perumahan Kinrara Berhad (PKB), Guthrie Development Holding Bhd (GDHB).",
      "2002 2002 joined Arkitek Rekakonsult Sdn Bhd (previously known as Reka Konsult) as Senior Architect and lead the technical team in day to day running of all projects in hand.",
      "2019 Nov 2019, Director of Arkitek Rekakonsult Sdn Bhd",
    ],
    imagePictureUrl: [
      "/Directors/mazli with bomba.jpg",
      "/Directors/mazli at ctrl post.jpg",
    ],
    expertise: [
      "Residential Architecture",
      "Technical Documentation",
      "Site Supervision",
    ],
    icon: <Briefcase className="h-5 w-5" />,
  },
];

export default function DirectorSection() {
  return (
    <section
      id="directors"
      className="py-20 px-4 lg:px-10 bg-gradient-to-b from-background to-muted/20"
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
            Meet the visionary architects who lead our firm with decades of
            combined experience in the industry.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {UserDetails.map((director, index) => (
            <DirectorCard key={index} director={director} />
          ))}
        </div>
      </div>
    </section>
  );
}

type DirectorCardProps = {
  director: Director;
};

function DirectorCard({ director }: DirectorCardProps) {
  return (
    <Card className="overflow-hidden border shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:scale-100">
      <div className="grid md:grid-cols-3 gap-0 h-full">
        {/* Left side - Full height */}
        <div className="md:col-span-1 bg-gradient-to-b from-primary/5 to-primary/10 p-6 flex flex-col items-center justify-start border-r border-border/50 h-full">
          <Badge className="mb-4" variant="outline">
            {director.role}
          </Badge>
          <Avatar className="w-32 h-32 border-4 border-background shadow-xl mb-4">
            <AvatarImage src={director.imageURL} alt={director.name} />
            <AvatarFallback>
              {director.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold text-center mb-2">
            {director.name}
          </h3>

          <div className="mt-4 w-full flex-grow">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {director.expertise.map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:col-span-2 p-6 h-full flex flex-col">
          <div className="space-y-6 flex-grow">
            {/* Career History Section */}
            <div>
              <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Calendar className="h-4 w-4 text-primary" />
                Professional Timeline
              </h4>

              <div className="relative border-l-2 border-primary/20 pl-6 space-y-6">
                {director.description.map((desc, i) => (
                  <TimelineItem key={i} description={desc} />
                ))}
              </div>
            </div>

            {/* Project Gallery Section */}
            {director.imagePictureUrl.length > 0 && (
              <div className="pt-6 border-t border-border/50">
                <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  Project Gallery
                </h4>

                <div
                  className={`grid ${
                    director.imagePictureUrl.length === 1
                      ? "grid-cols-1"
                      : "grid-cols-1 sm:grid-cols-2"
                  } gap-4`}
                >
                  {director.imagePictureUrl.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video overflow-hidden rounded-lg shadow-md group"
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Project by ${director.name}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm font-medium">
                          Project Supervision
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

type TimelineItemProps = {
  description: string;
};

function TimelineItem({ description }: TimelineItemProps) {
  const yearMatch = description.match(
    /^(\d{4}(-\d{4})?|\d{4} Present|\d{4} - Present|\d{4} \w+ \d{4})/
  );
  const year = yearMatch ? yearMatch[0] : "";
  const content = yearMatch
    ? description.substring(year.length + 1)
    : description;

  return (
    <div className="relative">
      <div className="absolute -left-9 p-1 bg-background border-2 border-primary/20 rounded-full">
        <div className="bg-primary/10 p-1 rounded-full">
          <Calendar className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div>
        <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded-md text-sm font-medium mb-2">
          {year}
        </span>
        <p className="text-sm text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}
