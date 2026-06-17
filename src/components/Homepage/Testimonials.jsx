import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya Mehta",
    location: "Bangalore",
    project: "3BHK Home Interiors",
    content:
      "Cube4Spaces delivered a clean and functional home interior. The kitchen, wardrobes, and storage planning were handled professionally and completed on time.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Aditya Soman",
    location: "Mumbai",
    project: "2BHK Apartment Interiors",
    content:
      "The team understood our space limitations and gave us practical design ideas. The final output was modern, simple, and very useful for daily living.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Neha Reddy",
    location: "Hyderabad",
    project: "Office Interior",
    content:
      "Our office was planned with the right balance of work zones, meeting areas, and brand feel. The process was smooth and well coordinated.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Rajesh Iyer",
    location: "Pune",
    project: "Complete Turnkey Home",
    content:
      "Cube4Spaces managed everything from execution to final setup. We had one team, one timeline, and clear updates throughout the project.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sneha Kapoor",
    location: "Bangalore",
    project: "Modular Kitchen",
    content:
      "The kitchen design was practical, elegant, and easy to use. The team suggested good materials and completed the installation neatly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Karthik Nair",
    location: "Chennai",
    project: "Boutique Interior",
    content:
      "They created a premium-looking retail space within our budget. The lighting, display area, and customer flow were planned very well.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const headingFont =
    "font-[family-name:'Playfair_Display','Cormorant_Garamond',Georgia,serif]";

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-20 text-stone-950 md:py-28">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-7 w-[2px] rotate-45 rounded-full bg-red-500" />

            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-700">
              What Clients Say
            </span>
          </div>

          <h2
            className={`${headingFont} text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-stone-900 sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            Honest Feedback
            <br />
            From Valued People
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm font-medium leading-7 text-stone-500 md:text-base">
            Real feedback from homeowners and businesses who trusted
            Cube4Spaces to design, execute, and deliver their spaces with care.
          </p>
        </div>

        {/* Main Testimonial Layout */}
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-[190px_1fr]">
          {/* Left Image Selector */}
          <div className="mx-auto flex w-full max-w-[190px] flex-row gap-3 rounded-[2rem] bg-white p-3 shadow-sm ring-1 ring-stone-200 lg:flex-col">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => setActiveIndex(index)}
                className={`relative h-24 flex-1 overflow-hidden rounded-[1.4rem] transition-all duration-300 lg:h-36 ${
                  activeIndex === index
                    ? "ring-2 ring-red-400 ring-offset-2 ring-offset-white"
                    : "opacity-70 grayscale hover:opacity-100 hover:grayscale-0"
                }`}
                aria-label={`View testimonial from ${testimonial.name}`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Featured Review Card */}
          <article className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-100 md:rounded-[2.5rem] md:px-20 md:py-16 xl:px-24">
            <Quote className="absolute -right-4 -top-8 h-44 w-44 rotate-180 text-stone-100 md:h-64 md:w-64" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="max-w-5xl text-3xl font-medium leading-tight tracking-[-0.04em] text-stone-900 md:text-5xl">
                  {active.content}
                </p>

                <p className="mt-7 max-w-2xl text-sm font-medium leading-7 text-stone-500 md:text-base">
                  Trust, clarity, and consistent execution are the reasons our
                  clients continue to recommend Cube4Spaces.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <h4 className="text-lg font-black tracking-[-0.02em] text-stone-950">
                    {active.name}
                  </h4>

                  <p className="mt-1 text-sm font-medium text-stone-500">
                    {active.project}, {active.location}
                  </p>

                  <div className="mt-5 h-px w-full max-w-md border-t border-dashed border-stone-300" />
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(Math.floor(active.rating))].map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-red-500 text-red-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom Selectors */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-${testimonial.project}`}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-5 py-2 text-xs font-black uppercase tracking-[0.14em] transition-all ${
                activeIndex === index
                  ? "bg-stone-950 text-white"
                  : "bg-white text-stone-500 ring-1 ring-stone-200 hover:text-stone-950"
              }`}
            >
              {testimonial.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}