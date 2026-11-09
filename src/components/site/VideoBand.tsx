import { news } from "@/data/site";

export function VideoBand() {
  const image = news[news.length - 1]?.image ?? "";
  return (
    <section className="relative overflow-hidden bg-brand-red" aria-label="Inside our production">
      <div className="relative h-[70vh] min-h-[430px]">
        <img
          src={image}
          alt="Inside the Royal Beverage production line"
          className="absolute inset-0 h-full w-full object-cover grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-secondary/25" />
        <svg
          aria-hidden="true"
          className="absolute top-0 left-0 block h-[70px] w-full text-brand-red md:h-[100px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,26 C1210,84 920,6 640,40 C400,69 170,38 0,74 Z"
            fill="currentColor"
          />
        </svg>
        <button
          aria-label="Play the production film"
          className="group absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white text-white transition-transform hover:scale-110"
        >
          <span className="ml-1.5 block h-0 w-0 border-y-[13px] border-l-[22px] border-y-transparent border-l-white" />
        </button>
      </div>
    </section>
  );
}
