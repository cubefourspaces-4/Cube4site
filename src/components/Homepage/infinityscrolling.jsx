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
    <section className="relative w-full overflow-hidden bg-slate-50 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:gap-10 lg:px-12 xl:px-24">
        
        {/* Left Static Brand Content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="font-['Poppins',sans-serif] mb-6 inline-block rounded-full bg-indigo-100/50 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-indigo-700">
            Interior Design Studio
          </span>

          <h2 className="font-['Poppins',sans-serif] text-5xl font-black tracking-tight text-slate-950 sm:text-6xl xl:text-[4rem] leading-[1.05]">
            Cube4Spaces<span className="text-indigo-600">.</span>
          </h2>

          <p className="font-['Inter',sans-serif] mt-6 max-w-lg text-sm font-medium leading-relaxed text-slate-600 md:text-lg lg:text-xl">
            Smart interior solutions for modern living with premium finishes,
            custom execution, and timeless spatial design.
          </p>
        </div>

        {/* Right Infinite Vertical Scroll */}
        <div className="vertical-scroll-mask relative h-[420px] w-full overflow-hidden lg:h-[450px]">
          <div className="vertical-scroll-track">
            {duplicatedItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className={`font-['Poppins',sans-serif] vertical-scroll-item py-2.5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
                  activeItems.has(item)
                    ? "text-slate-900"
                    : "text-slate-300 hover:text-indigo-400"
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
            contain: strict;
            mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              black 15%,
              black 85%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              black 15%,
              black 85%,
              transparent 100%
            );
          }

          .vertical-scroll-track {
            display: flex;
            flex-direction: column;
            animation: cubeVerticalScroll 30s linear infinite;
            will-change: transform;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000px;
          }

          .vertical-scroll-item {
            line-height: 1.2;
            white-space: nowrap;
            backface-visibility: hidden;
            transform: translate3d(0, 0, 0);
            transition: color 0.2s ease;
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