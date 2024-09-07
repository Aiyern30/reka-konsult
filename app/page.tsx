// page.tsx

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg"
        style={{ height: "calc(100vh - 32px)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className='[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]'></div>
        </div>
        <div
          className="relative flex flex-col gap-4 items-center justify-center px-4 text-center"
          style={{ opacity: 1, transform: "none", willChange: "auto" }}
        >
          <div className="text-3xl md:text-6xl font-bold dark:text-white">
            ARKITEK REKAKONSULT SDN BHD
          </div>
          <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
            together with .
          </div>
          <a
            href="https://www.canva.com/design/DAGMGgnm47E/l4ks1Tk5hTTmbVnjGYv-rA/view?utm_content=DAGMGgnm47E&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
          >
            Get to know more
          </a>
        </div>
      </section>
      <section id="features" className="px-4 lg:px-10 py-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-3xl font-bold dark:text-white">What we do</div>
          <div className="grid gap-y-8 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="w-80">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

            <Card className="w-80">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>

            <Card className="w-80">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section id="features" className="px-4 lg:px-10 py-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="text-3xl font-bold dark:text-white">
            The Directors
          </div>
          <div className="grid gap-y-8 gap-x-16 sm:grid-cols-1 lg:grid-cols-2 pt-4">
            <div className="flex flex-col justify-center items-center text-center">
              <Avatar className="w-80 h-80 border-4 border-black mb-4">
                <AvatarImage src="/user1.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="font-bold text-xl lg:text-2xl mb-2">
                AR. Yeo Soon Teck
              </div>
              <p className="text-gray-700 px-4 text-justify">
                AR. Yeo Soon Teck has a distinguished career in architecture,
                having worked on a diverse range of projects from high-rise
                offices to national monuments. His experience spans across YRM
                Architects, Jabatan Kerja Raya, T.R. Hamzah & Yeang, and
                Kumpulan Perunding, before founding Reka Konsult and leading
                Arkitek Rekakonsult Sdn Bhd as Director.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <Avatar className="w-80 h-80 border-4 border-black mb-4">
                <AvatarImage src="/user2.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="font-bold text-xl lg:text-2xl mb-2">
                AR. Mazli Bin Md. Lajis
              </div>
              <p className="text-gray-700 px-4 text-justify">
                AR. Mazli Bin Md. Lajis has a rich background in architectural
                design and project management. From his early work at Juhari
                Hashim Arkitek to significant roles at RDP Architect and Antara
                Akitek Sdn Bhd, he has led major projects and design
                initiatives. He joined Arkitek Rekakonsult Sdn Bhd in 2002,
                where he is now a Director.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
