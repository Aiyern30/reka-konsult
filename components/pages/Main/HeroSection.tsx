// HeroSection.tsx
export default function HeroSection() {
  return (
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
          Designing the Future of Architecture with Innovation and Integrity
        </div>
      </div>
    </section>
  );
}
