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

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24">
      {/* Subtle Background Accents */}
      <div className="pointer-events-none absolute -left-20 top-20 h-[300px] w-[300px] rounded-full bg-indigo-200/30 blur-[100px] md:h-[400px] md:w-[400px]" />
      
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 shadow-sm md:mb-6 md:px-5 md:py-2.5">
            <span className="h-3 w-[2px] rotate-45 rounded-full bg-indigo-600 md:h-4" />
            <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-700 md:text-xs md:tracking-[0.2em]">
              What Clients Say
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] text-3xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            Honest Feedback
            <br />
            <span className="text-indigo-600">From Valued People</span>
          </h2>

          <p className="font-['Inter',sans-serif] mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
            Real feedback from homeowners and businesses who trusted
            Cube4Spaces to design, execute, and deliver their spaces with care.
          </p>
        </div>

        {/* Main Testimonial Layout */}
        <div className="mx-auto grid max-w-[1300px] items-start gap-4 md:gap-6 lg:grid-cols-[160px_1fr] lg:items-center xl:grid-cols-[180px_1fr] xl:gap-10">
          
          {/* Image Selector (Horizontal on Mobile, Vertical on Desktop) */}
          <div className="mx-auto flex w-full max-w-full flex-row gap-2 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200 lg:max-w-[180px] lg:flex-col md:rounded-[2rem] md:p-3 md:gap-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <button
                key={testimonial.name}
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 flex-1 overflow-hidden rounded-xl transition-all duration-300 sm:h-20 md:h-24 lg:h-32 lg:rounded-[1.4rem] ${
                  activeIndex === index
                    ? "ring-2 ring-indigo-500 ring-offset-2 ring-offset-white"
                    : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
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
          <article className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-white px-6 py-8 shadow-md ring-1 ring-slate-100 sm:min-h-[380px] md:min-h-[400px] md:rounded-[2.5rem] md:px-12 md:py-12 lg:px-16 xl:px-20">
            <Quote className="absolute -right-4 -top-6 h-32 w-32 rotate-180 text-slate-50 md:-right-6 md:-top-10 md:h-56 md:w-56" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="font-['Poppins',sans-serif] max-w-4xl text-xl font-bold leading-snug text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl">
                  "{active.content}"
                </p>

                <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-xs font-medium leading-relaxed text-slate-500 md:mt-6 md:text-base">
                  Trust, clarity, and consistent execution are the reasons our
                  clients continue to recommend Cube4Spaces.
                </p>
              </div>

              <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 md:mt-10 md:grid-cols-[1fr_auto] md:items-center md:gap-6 md:pt-8">
                <div>
                  <h4 className="font-['Poppins',sans-serif] text-base font-bold text-slate-950 md:text-lg">
                    {active.name}
                  </h4>
                  <p className="font-['Inter',sans-serif] mt-0.5 text-xs font-medium text-slate-500 md:mt-1 md:text-sm">
                    {active.project}, {active.location}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(Math.floor(active.rating))].map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-indigo-500 text-indigo-500 md:h-5 md:w-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom Selectors */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-12 md:gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-${testimonial.project}`}
              onClick={() => setActiveIndex(index)}
              className={`font-['Poppins',sans-serif] rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all md:px-5 md:py-2.5 md:text-xs md:tracking-[0.15em] ${
                activeIndex === index
                  ? "bg-slate-950 text-white shadow-md"
                  : "bg-white text-slate-500 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-indigo-600"
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