import React from "react";

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

export default function InfiniteScroll() {
  return (
    <section className="w-full overflow-hidden bg-[#f5f5f3] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        {/* Left Static Brand Content */}
        <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
          <span className="mb-4 text-[11px] font-bold uppercase tracking-[0.35em] text-stone-400">
            Interior Design Studio
          </span>

          <h2 className="text-center text-5xl font-semibold tracking-tight text-stone-900 md:text-left md:text-7xl">
            Cube4Spaces
          </h2>

          <p className="mt-5 max-w-md text-center text-sm leading-relaxed text-stone-500 md:text-left">
            Smart interior solutions for modern living with premium finishes,
            custom execution, and timeless spatial design.
          </p>
        </div>

        {/* Right Infinite Vertical Scroll */}
        <div className="relative h-[320px] overflow-hidden">
          <div className="absolute left-0 right-0 top-0 z-10 h-20 bg-gradient-to-b from-[#f5f5f3] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 z-10 h-20 bg-gradient-to-t from-[#f5f5f3] to-transparent" />

          <div className="animate-vertical-scroll flex flex-col">
            {[...scrollItems, ...scrollItems].map((item, index) => (
              <div
                key={index}
                className={`py-1 text-4xl font-medium leading-tight tracking-tight md:text-5xl ${
                  item === "Wardrobes" ||
                  item === "Living Spaces" ||
                  item === "Turnkey Design"
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
          @keyframes verticalScroll {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .animate-vertical-scroll {
            animation: verticalScroll 14s linear infinite;
          }
        `}
      </style>
    </section>
  );
}