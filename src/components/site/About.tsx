import { products } from "@/data/site";

const canOf = (name: string) => products.find((p) => p.name === name)?.image ?? "";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream grain">
      <div className="relative mx-auto max-w-[110rem] px-6 pt-10 pb-40 md:px-10 md:pb-48">
        <p className="script text-3xl text-secondary md:text-4xl">Something about us</p>

        <h2 className="distress mt-3 font-display leading-[0.85] uppercase text-secondary">
          <span className="block text-[clamp(4rem,9.5vw,8.5rem)]">Our</span>
          <span className="block text-[clamp(4rem,9.5vw,8.5rem)]">Company</span>
        </h2>

        <div className="relative z-10 mt-8 max-w-xl">
          <p className="text-lg leading-relaxed text-secondary/85">
            Royal Beverage, founded in 1994, is a leading producer of refreshing and carbonated
            beverages, committed to delivering high-quality products that meet consumer needs. With
            a strong focus on innovation and excellent service, the company aims to expand
            internationally and become a global leader in the private label beverage sector.
          </p>
          <a
            href="#production"
            className="mt-9 inline-block bg-brand-red px-11 py-4 font-display text-xl tracking-wide text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            About
          </a>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute right-[2%] bottom-2 z-0 hidden h-[30rem] w-[34rem] md:block lg:right-[6%]">
          <img
            src={canOf("Frostea Ice Tea")}
            alt=""
            className="absolute bottom-6 left-0 h-[24rem] w-auto -rotate-9 object-contain drop-shadow-2xl"
          />
          <img
            src={canOf("RC Cola Zero")}
            alt=""
            className="absolute right-0 bottom-6 h-[24rem] w-auto rotate-9 object-contain drop-shadow-2xl"
          />
          <img
            src={canOf("RC Cola")}
            alt=""
            className="absolute bottom-0 left-1/2 h-[29rem] w-auto -translate-x-1/2 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 block h-[80px] w-full text-brand-red md:h-[110px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C220,116 460,14 760,44 C1030,71 1240,30 1440,58 L1440,120 L0,120 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
