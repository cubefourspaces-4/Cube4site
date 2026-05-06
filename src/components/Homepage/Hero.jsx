import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image1 from "../../assests/team/herosection/cubehero1.webp";
import Image2 from "../../assests/team/herosection/cubehero2.webp";
import Image3 from "../../assests/team/herosection/cubehero3.webp";
import Image4 from "../../assests/team/herosection/cubehero4.webp";

const slides = [
  {
    id: 1,
    tag: "ESTD 2023",
    title: "Find your\nGreatness",
    desc: "We help transform spaces with smart design, clear planning, and refined execution that creates a lasting impression.",
    img: Image1,
  },
  {
    id: 2,
    tag: "INTERIOR DESIGN",
    title: "Crafted for\nModern Living",
    desc: "Premium interiors built with thoughtful layouts, elevated finishes, and functional details tailored to your lifestyle.",
    img: Image2,
  },
  {
    id: 3,
    tag: "TURNKEY EXECUTION",
    title: "Build with\nConfidence",
    desc: "From concept to completion, we deliver seamless turnkey execution with precision, clarity, and timeless quality.",
    img: Image3,
  },
  {
    id: 4,
    tag: "LUXURY SPACES",
    title: "Spaces that\nSpeak Style",
    desc: "Elegant interiors and architectural experiences designed to feel refined, immersive, and deeply personal.",
    img: Image4,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative mt-16 min-h-[720px] overflow-hidden bg-black text-white md:min-h-[860px]">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1400ms] ease-out ${
              current === index
                ? "z-20 scale-100 opacity-100"
                : "z-10 scale-110 opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-16 md:min-h-[860px] md:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Content */}
          <div className="max-w-2xl">
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.35em] text-white/60 md:text-xs">
              {slides[current].tag}
            </span>

            <h1 className="whitespace-pre-line text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
              {slides[current].title}
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              {slides[current].desc}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-stone-200">
                Grow Smarter
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20">
                View Projects
              </button>
            </div>

            <div className="mt-14">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                Trusted by 200+ premium brands
              </p>

              <div className="flex flex-wrap items-center gap-8 text-sm font-medium text-white/70">
                <span>Cube4 Living</span>
                <span>Urban Nest</span>
                <span>Studio Form</span>
              </div>
            </div>
          </div>

          {/* Right Visual Stack */}
          <div className="hidden justify-end lg:flex">
            <div className="flex flex-col items-end gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
                Cube4
              </span>

              <div className="text-right text-[7rem] font-semibold leading-[0.8] tracking-tight text-white/95">
                C
                <br />
                4
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                Interior Club
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Carousel Preview */}
      <div className="absolute bottom-8 left-1/2 z-40 w-full max-w-7xl -translate-x-1/2 px-6 md:px-10">
        <div className="flex items-center justify-between gap-4">
          {/* Thumbnails */}
          <div className="grid flex-1 grid-cols-4 gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(index)}
                className={`group relative h-20 overflow-hidden rounded-2xl border transition-all duration-500 md:h-24 ${
                  current === index
                    ? "border-white scale-[1.02]"
                    : "border-white/10 hover:border-white/40"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}