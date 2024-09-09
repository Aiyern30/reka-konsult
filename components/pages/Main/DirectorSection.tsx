import { Avatar, AvatarFallback, AvatarImage, Card } from "@/components/ui";

export default function DirectorSection() {
  return (
    <section id="features" className="px-4 lg:px-10 py-20">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="text-3xl font-bold dark:text-white">The Directors</div>
        <div className="grid gap-y-8 gap-x-16 sm:grid-cols-1 lg:grid-cols-2 pt-8">
          <Card className="flex flex-col justify-center items-center text-center p-6">
            <div className="text-4xl text-gray-600 mb-4">
              <i className="fa-solid fa-architectural-columns"></i>
            </div>
            <Avatar className="w-80 h-80 border-4 border-gray-300 mb-4">
              <AvatarImage src="/User1.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="font-bold text-xl lg:text-2xl mb-2">
              AR. Yeo Soon Teck
            </div>
            <p className="text-gray-700 px-4 text-justify">
              AR. Yeo Soon Teck has a distinguished career in architecture,
              having worked on a diverse range of projects from high-rise
              offices to national monuments. His experience spans across YRM
              Architects, Jabatan Kerja Raya, T.R. Hamzah & Yeang, and Kumpulan
              Perunding, before founding Reka Konsult and leading Arkitek
              Rekakonsult Sdn Bhd as Director.
            </p>
          </Card>
          <Card className="flex flex-col justify-center items-center text-center p-6">
            <div className="text-4xl text-gray-600 mb-4">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <Avatar className="w-80 h-80 border-4 border-gray-300 mb-4">
              <AvatarImage src="/User2.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="font-bold text-xl lg:text-2xl mb-2">
              AR. Mazli Bin Md. Lajis
            </div>
            <p className="text-gray-700 px-4 text-justify">
              AR. Mazli Bin Md. Lajis has a rich background in architectural
              design and project management. From his early work at Juhari
              Hashim Arkitek to significant roles at RDP Architect and Antara
              Akitek Sdn Bhd, he has led major projects and design initiatives.
              He joined Arkitek Rekakonsult Sdn Bhd in 2002, where he is now a
              Director.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
