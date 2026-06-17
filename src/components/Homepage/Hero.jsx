import { useEffect, useMemo, useState, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  CircleDot,
} from "lucide-react";

import Image1 from "../../assests/team/herosection/cubehero1.webp";
import Image2 from "../../assests/team/herosection/cubehero2.webp";
import Image3 from "../../assests/team/herosection/cubehero3.webp";
import Image4 from "../../assests/team/herosection/cubehero4.webp";

const slides = [
  {
    id: 1,
    tag: "ESTD 2023",
    title: "Design Spaces\nThat Feel Premium",
    desc: "Interior, construction, and turnkey solutions planned with clarity, executed with precision, and finished with detail.",
    img: Image1,
  },
  {
    id: 2,
    tag: "INTERIOR DESIGN",
    title: "Crafted for\nModern Living",
    desc: "Functional layouts, refined materials, and elegant finishes tailored for homes, offices, and lifestyle spaces.",
    img: Image2,
  },
  {
    id: 3,
    tag: "TURNKEY EXECUTION",
    title: "Build with\nConfidence",
    desc: "From concept to handover, we manage the complete project journey with transparent coordination.",
    img: Image3,
  },
  {
    id: 4,
    tag: "LUXURY SPACES",
    title: "Spaces That\nSpeak Style",
    desc: "Premium interior experiences designed to look elegant, feel practical, and perform beautifully.",
    img: Image4,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const activeSlide = useMemo(() => slides[current], [current]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 6500);
    return () => window.clearInterval(timer);
  }, [nextSlide]);

  const headingFont =
    "font-[family-name:'Space_Grotesk','Plus_Jakarta_Sans',Inter,sans-serif]";

  return (
    <section className="relative mt-16 min-h-[780px] overflow-hidden bg-slate-950 font-[family-name:Inter,sans-serif] text-white md:min-h-[920px]">
      {/* Active Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = current === index;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? "z-20 opacity-100" : "z-10 opacity-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title.replace("\n", " ")}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                className="h-full w-full object-cover will-change-transform"
              />

              <div className="absolute inset-0 bg-slate-950/45" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
            </div>
          );
        })}
      </div>

      {/* Decorative Blue Glow */}
      <div className="pointer-events-none absolute left-10 top-20 z-30 h-80 w-80 rounded-full bg-blue-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 z-30 h-96 w-96 rounded-full bg-sky-400/10 blur-[150px]" />

      {/* Main Content */}
      <div className="relative z-40 mx-auto flex min-h-[720px] w-full max-w-[1700px] items-center px-5 py-20 sm:px-8 md:min-h-[820px] lg:px-12 xl:px-16">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_420px]">
          {/* Left Content */}
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 shadow-sm backdrop-blur-md">
              <CircleDot className="h-4 w-4 text-blue-300" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-white/80">
                {activeSlide.tag}
              </span>
            </div>

            <h1
              className={`${headingFont} whitespace-pre-line text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              {activeSlide.title}
            </h1>

            <p className="mt-7 max-w-2xl text-sm font-medium leading-7 text-white/75 md:text-base md:leading-8">
              {activeSlide.desc}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-slate-950 shadow-lg transition-all hover:bg-blue-100 active:scale-[0.99]"
              >
                Start Project
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-[0.99]"
              >
                View Projects
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3">
              {[
                { value: "200+", label: "Projects" },
                { value: "3+", label: "Core Services" },
                { value: "2023", label: "Established" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-md"
                >
                  <p
                    className={`${headingFont} text-2xl font-extrabold tracking-[-0.04em] text-white`}
                  >
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/45">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Slider Panel */}
          <div className="hidden lg:block">
            <div className="rounded-[2rem] border border-white/12 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
                    Featured Slide
                  </span>
                  <h3
                    className={`${headingFont} mt-2 text-2xl font-extrabold tracking-[-0.04em] text-white`}
                  >
                    {String(current + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                  </h3>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {slides.map((slide, index) => {
                  const isActive = current === index;

                  return (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(index)}
                      className={`group grid w-full grid-cols-[92px_1fr] items-center gap-4 rounded-[1.25rem] border p-3 text-left transition-all ${
                        isActive
                          ? "border-white/40 bg-white/20"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                    >
                      <div className="h-20 overflow-hidden rounded-[1rem] bg-white/10">
                        <img
                          src={slide.img}
                          alt={slide.title.replace("\n", " ")}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="min-w-0">
                        <span className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-200">
                          {slide.tag}
                        </span>
                        <p className="mt-2 line-clamp-2 text-sm font-black leading-5 text-white">
                          {slide.title.replace("\n", " ")}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-50 px-5 sm:px-8 lg:hidden">
        <div className="mx-auto flex max-w-xl items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl">
          <button
            onClick={prevSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index ? "w-8 bg-white" : "w-2 bg-white/35"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}