import { useEffect, useMemo, useState, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

import Image1 from "../../assests/team/herosection/cubehero1.webp";
import Image2 from "../../assests/team/herosection/cubehero2.webp";
import Image3 from "../../assests/team/herosection/cubehero3.webp";
import Image4 from "../../assests/team/herosection/cubehero4.webp";

// =====================================================
// HERO SLIDES
// =====================================================

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

// =====================================================
// HERO
// =====================================================

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const activeSlide = useMemo(
    () => slides[current],
    [current]
  );

  // =====================================================
  // NEXT SLIDE
  // =====================================================

  const nextSlide = useCallback(() => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, []);

  // =====================================================
  // PREVIOUS SLIDE
  // =====================================================

  const prevSlide = useCallback(() => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  }, []);

  // =====================================================
  // GO TO SLIDE
  // =====================================================

  const goToSlide = useCallback((index) => {
    setCurrent(index);
  }, []);

  // =====================================================
  // PRELOAD IMAGES
  // =====================================================

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, []);

  // =====================================================
  // AUTO SLIDER
  // =====================================================

  useEffect(() => {
    const timer = window.setInterval(
      nextSlide,
      6500
    );

    return () => {
      window.clearInterval(timer);
    };
  }, [nextSlide]);

  // =====================================================
  // SCROLL
  // =====================================================

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <section
      className="
        relative
        mt-16
        min-h-[820px]
        overflow-hidden
        bg-neutral-950
        text-white
        md:min-h-[900px]
        lg:min-h-[920px]
        xl:min-h-[940px]
      "
      style={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* =====================================================
          BACKGROUND SLIDES
      ===================================================== */}

      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = current === index;

          return (
            <div
              key={slide.id}
              className={`
                absolute
                inset-0
                transition-opacity
                duration-1000
                ease-in-out
                transform-gpu
                will-change-opacity
                backface-hidden
                ${
                  isActive
                    ? "z-20 opacity-100"
                    : "z-10 opacity-0 pointer-events-none"
                }
              `}
            >
              <img
                src={slide.img}
                alt={slide.title.replace(
                  "\n",
                  " "
                )}
                loading={
                  index === 0
                    ? "eager"
                    : "lazy"
                }
                fetchPriority={
                  index === 0
                    ? "high"
                    : "auto"
                }
                decoding="async"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  scale-[1.01]
                  transform-gpu
                  backface-hidden
                "
              />

              {/* Main Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-black/35
                "
              />

              {/* Left Gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/90
                  via-black/60
                  to-black/15
                "
              />

              {/* Bottom Gradient */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/25
                  to-transparent
                "
              />

              {/* Top Gradient */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-40
                  bg-gradient-to-b
                  from-black/40
                  to-transparent
                "
              />
            </div>
          );
        })}
      </div>

      {/* =====================================================
          DECORATIVE LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[15%]
          z-30
          h-[320px]
          w-[320px]
          rounded-full
          bg-white/[0.06]
          blur-[130px]
          transform-gpu
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-120px]
          right-[-80px]
          z-30
          h-[450px]
          w-[450px]
          rounded-full
          bg-amber-100/[0.06]
          blur-[150px]
          transform-gpu
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-40
          mx-auto
          flex
          min-h-[820px]
          w-full
          max-w-[1800px]
          items-center
          px-5
          py-24
          sm:px-8
          md:min-h-[900px]
          md:px-12
          lg:min-h-[920px]
          lg:px-16
          xl:min-h-[940px]
          xl:px-20
          2xl:px-24
        "
      >
        <div className="w-full">
          {/* =================================================
              LEFT / MAIN CONTENT
          ================================================= */}

          <div
            className="
              max-w-[1000px]
            "
          >
            {/* =================================================
                SLIDE TAG
            ================================================= */}

            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/20
                bg-white/[0.08]
                px-5
                py-3
                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-white
                  shadow-[0_0_14px_rgba(255,255,255,0.8)]
                "
              />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white/85
                "
              >
                {activeSlide.tag}
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              className="
                whitespace-pre-line
                font-[Poppins,sans-serif]
                text-[48px]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                text-white

                sm:text-[58px]

                md:text-[70px]

                lg:text-[82px]

                xl:text-[94px]

                2xl:text-[104px]
              "
            >
              {activeSlide.title}
            </h1>

            {/* =================================================
                ACCENT LINE
            ================================================= */}

            <div
              className="
                mt-8
                h-[2px]
                w-20
                bg-white/80
              "
            />

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-8
                max-w-[680px]
                text-[16px]
                font-normal
                leading-8
                text-white/75

                sm:text-[17px]

                md:text-[18px]
                md:leading-9
              "
            >
              {activeSlide.desc}
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* Start Project */}

              <button
                onClick={() =>
                  scrollToSection("contact")
                }
                className="
                  group
                  inline-flex
                  h-[56px]
                  items-center
                  gap-4
                  rounded-full
                  bg-white
                  px-7
                  font-[Poppins,sans-serif]
                  text-[13px]
                  font-semibold
                  tracking-[0.02em]
                  text-neutral-950
                  shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-neutral-100
                  active:translate-y-0
                "
              >
                <span>
                  Start a Project
                </span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-neutral-950
                    text-white
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight
                    className="h-4 w-4"
                  />
                </span>
              </button>

              {/* View Projects */}

              <button
                onClick={() =>
                  scrollToSection("projects")
                }
                className="
                  inline-flex
                  h-[56px]
                  items-center
                  rounded-full
                  border
                  border-white/25
                  bg-white/[0.07]
                  px-7
                  font-[Poppins,sans-serif]
                  text-[13px]
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/15
                  active:translate-y-0
                "
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE SLIDER CONTROLS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-0
          right-0
          z-50
          px-5
          sm:px-8
          lg:hidden
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[500px]
            items-center
            justify-between
            rounded-full
            border
            border-white/15
            bg-black/30
            px-3
            py-3
            backdrop-blur-2xl
          "
        >
          {/* Previous */}

          <button
            onClick={prevSlide}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/[0.08]
              text-white
              transition-all
              hover:bg-white/15
              active:scale-95
            "
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Indicators */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() =>
                  goToSlide(index)
                }
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    current === index
                      ? "w-9 bg-white"
                      : "w-2 bg-white/30"
                  }
                `}
                aria-label={`Go to slide ${
                  index + 1
                }`}
              />
            ))}
          </div>

          {/* Next */}

          <button
            onClick={nextSlide}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/[0.08]
              text-white
              transition-all
              hover:bg-white/15
              active:scale-95
            "
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* =====================================================
          DESKTOP SCROLL INDICATOR
      ===================================================== */}

      <div
        className="
          absolute
          bottom-9
          right-10
          z-50
          hidden
          items-center
          gap-3
          xl:flex
        "
      >
        <span
          className="
            font-[Poppins,sans-serif]
            text-[10px]
            font-medium
            uppercase
            tracking-[0.2em]
            text-white/45
          "
        >
          Scroll to explore
        </span>

        <div
          className="
            h-px
            w-12
            bg-white/30
          "
        />
      </div>
    </section>
  );
}