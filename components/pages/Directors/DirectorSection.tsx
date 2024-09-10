import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";

import Image from "next/image";

const UserDetails = [
  {
    name: "AR. YEO SOON TECK ",
    imageURL: "/User1.png",
    description: [
      "1978, joined YRM Architects and Planners (London) and assisted in projects ranging from Rehabilitation works, Interiors, Commercial buildings projects and Airports.",
      "1981, joined the Jabatan Kerja Raya (Cawangan Bangunan) and worked on the Arkib Negara, Federal Courthouses, and various building projects under taken for the Ministry of Transport and Agriculture.",
      "1983, joined T.R.Hamzah & Yeang Sdn. Bhd. Worked on projects ranging from High Rise offices to Resorts. He was also the Project Architect for Menara Boustead and Plaza Atrium.",
      "1987, joined Kumpulan Perunding as Manager for the Kuala Lumpur office. He worked on projects ranging from Renovations for Banks to Housing, Apartments, Factories and Schools.",
      "1990 formed Reka Konsult and 1995 formed a partnership firm.",
      "2010 - Present, Director of Arkitek Rekakonsult Sdn Bhd.",
    ],
    imagePictureUrl: ["/Directors/roof of mtb.jpg"],
  },
  {
    name: "AR. MAZLI BIN MD. LAJIS",
    imageURL: "/User2.png",
    description: [
      "1994-1995 joined  Juhari Hashim Arkitek as Assistance Architect before further studies.",
      "1996 -1997 worked for RDP Architect East Sheen London, United Kingdom in various drawing documentations.",
      "1997-1999 joined Antara Akitek Sdn Bhd as Project Architect and worked on design detailing, authorities submission and site supervision for project of 180 units condominium “Villa Makmur” at Segambut, 6 storey factory for Tan Chong Tradings at Segambut, factory cum office facilities at Senai Industrial Park.",
      "1999-2002 joined OST Architecture As Design/Project Architect and involved extensively on Housing and Condo. Projects for Perumahan Kinrara Berhad (PKB), Guthrie Development Holding Bhd (GDHB).",
      "June 2002 joined Arkitek Rekakonsult Sdn Bhd (previously known as Reka Konsult) as Senior Architect and lead the technical team in day to day running of all projects in hand.",
      "Nov 2019, Director of Arkitek Rekakonsult Sdn Bhd",
    ],
    imagePictureUrl: [
      "/Directors/mazli with bomba.jpg",
      "/Directors/mazli at ctrl post.jpg",
    ],
  },
];

export default function DirectorSection() {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
      {UserDetails.map((user, index) => (
        <Card className="transition-none hover:scale-100" key={index}>
          <CardHeader className="text-center ">
            <Avatar className="mx-auto w-48 h-48">
              <AvatarImage src={user.imageURL} />
              <AvatarFallback>{user.name}</AvatarFallback>
            </Avatar>

            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {user.description.map((desc, index) => (
              <li className="text-sm mt-2 text-justify" key={index}>
                {desc}
              </li>
            ))}
            <div
              className={`grid gap-5 mt-5 ${
                user.imagePictureUrl.length === 1
                  ? "grid-cols-1 justify-center"
                  : "sm:grid-cols-1 lg:grid-cols-2"
              }`}
            >
              {user.imagePictureUrl.map((url, index) => (
                <Image
                  className="mx-auto"
                  src={url}
                  alt={user.name}
                  width={300}
                  height={300}
                  key={index}
                  priority
                />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
