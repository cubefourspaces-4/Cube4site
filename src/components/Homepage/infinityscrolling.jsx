import React, { useMemo } from "react";

const scrollItems = [
  "Luxury Interiors",
  "Modular Kitchens",
  "Wardrobes",
  "Living Spaces",
  "False Ceiling",
  "Turnkey Design",
  "Commercial Interiors",
  "Space Planning",
  "Custom Furniture",
  "Lighting Design",
  "Luxury Interiors",
  "Modular Kitchens",
];

const activeItems = new Set(["Wardrobes", "Living Spaces", "Turnkey Design"]);

function InfiniteScroll() {
  const duplicatedItems = useMemo(
    () => [...scrollItems, ...scrollItems],
    []
  );

  return (
    <section className="w-full overflow-hidden bg-[#f5f5f3] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        {/* Left Static Brand Content */}
        <div className="flex flex-col items-center justify-center md:items-start">
          <span className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-stone-400">
            Interior Design Studio
          </span>

          <h2 className="text-center text-5xl font-semibold tracking-tight text-stone-900 md:text-left md:text-5xl">
            Cube4Spaces
          </h2>

          <p className="mt-5 max-w-md text-center text-sm leading-7 text-stone-500 md:text-left md:text-base">
            Smart interior solutions for modern living with premium finishes,
            custom execution, and timeless spatial design.
          </p>
        </div>

        {/* Right Infinite Vertical Scroll */}
        <div className="vertical-scroll-mask relative h-[320px] overflow-hidden">
          <div className="vertical-scroll-track">
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`vertical-scroll-item ${
                  activeItems.has(item)
                    ? "text-stone-800"
                    : "text-stone-300"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .vertical-scroll-mask {
            contain: layout paint style;
            mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              black 18%,
              black 82%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              black 18%,
              black 82%,
              transparent 100%
            );
          }

          .vertical-scroll-track {
            display: flex;
            flex-direction: column;
            animation: cubeVerticalScroll 22s linear infinite;
            will-change: transform;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            contain: layout paint style;
          }

          .vertical-scroll-item {
            padding: 0.15rem 0;
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 500;
            line-height: 1.08;
            letter-spacing: -0.04em;
            white-space: nowrap;
            backface-visibility: hidden;
            transform: translate3d(0, 0, 0);
          }

          @keyframes cubeVerticalScroll {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(0, -50%, 0);
            }
          }

          .vertical-scroll-mask:hover .vertical-scroll-track {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .vertical-scroll-track {
              animation: none;
              transform: none;
            }
          }
        `}
      </style>
    </section>
  );
}

export default React.memo(InfiniteScroll);