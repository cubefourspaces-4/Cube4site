import { ChevronRight, ArrowLeft, ArrowRight, Eye, Heart } from "lucide-react";
import { useState } from "react";

// Import local images from assets
import project1 from "../../assests/gallery/gallery1.webp";
import project2 from "../../assests/gallery/gallery1.webp";
import project3 from "../../assests/gallery/gallery1.webp";
import project4 from "../../assests/gallery/gallery1.webp";
import project5 from "../../assests/gallery/gallery1.webp";
import project6 from "../../assests/gallery/gallery1.webp";
import project7 from "../../assests/gallery/gallery1.webp";
import project8 from "../../assests/gallery/gallery1.webp";
import project9 from "../../assests/gallery/gallery1.webp";
import project10 from "../../assests/gallery/gallery1.webp";

const projects = [
  {
    title: "Modern Apartment Interior",
    category: "Residential",
    description:
      "A clean home interior with smart storage, modular kitchen, wardrobes, and warm lighting.",
    timeline: "6 Weeks",
    img: project1,
    likes: 342,
    views: 890,
  },
  {
    title: "Office Interior Design",
    category: "Commercial",
    description:
      "A practical office layout with workstations, cabins, meeting areas, and brand-focused finishes.",
    timeline: "8 Weeks",
    img: project2,
    likes: 280,
    views: 741,
  },
  {
    title: "Complete Home Turnkey",
    category: "Turnkey",
    description:
      "A full design-to-handover project covering civil work, interiors, furniture, and final setup.",
    timeline: "5 Months",
    img: project3,
    likes: 412,
    views: 1250,
  },
  {
    title: "Compact Home Makeover",
    category: "Residential",
    description:
      "A space-saving home design with multifunctional furniture and optimized storage.",
    timeline: "5 Weeks",
    img: project4,
    likes: 198,
    views: 520,
  },
  {
    title: "Boutique Store Interior",
    category: "Commercial",
    description:
      "A stylish retail space with display areas, trial rooms, billing counter, and customer seating.",
    timeline: "4 Weeks",
    img: project5,
    likes: 154,
    views: 410,
  },
  {
    title: "Startup Office Turnkey",
    category: "Turnkey",
    description:
      "A complete office setup with partitions, flooring, ceiling, pantry, workstations, and branding.",
    timeline: "6 Weeks",
    img: project6,
    likes: 305,
    views: 920,
  },
  {
    title: "Luxury Penthouse Design",
    category: "Residential",
    description:
      "A premium home interior with refined finishes, elegant lighting, and luxury material selection.",
    timeline: "12 Weeks",
    img: project7,
    likes: 512,
    views: 1950,
  },
  {
    title: "Minimal Cafe Interior",
    category: "Commercial",
    description:
      "A warm cafe design with wooden textures, soft lighting, and customer-friendly seating.",
    timeline: "7 Weeks",
    img: project8,
    likes: 318,
    views: 899,
  },
  {
    title: "Guest House Renovation",
    category: "Turnkey",
    description:
      "A complete renovation project designed to create bright, comfortable, and welcoming rooms.",
    timeline: "4 Months",
    img: project9,
    likes: 489,
    views: 1420,
  },
  {
    title: "Creative Studio Interior",
    category: "Commercial",
    description:
      "An open studio space with clean walls, flexible layouts, and focused lighting.",
    timeline: "5 Weeks",
    img: project10,
    likes: 245,
    views: 675,
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-16">
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-indigo-100 bg-white px-4 py-1.5 shadow-sm md:mb-6 md:px-5 md:py-2">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 md:text-sm">
              Selected Works
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] mx-auto text-4xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-5xl">
            Designed Spaces.
            <br />
            <span className="text-indigo-600">Delivered Well.</span>
          </h2>

          <p className="font-['Inter',sans-serif] mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
            Explore our residential, commercial, and turnkey projects designed
            with practical planning, quality materials, and professional
            execution.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-16 md:gap-3">
          {["All", "Residential", "Commercial", "Turnkey"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`font-['Poppins',sans-serif] rounded-full border px-5 py-2 text-[10px] font-bold uppercase tracking-wider transition-all md:px-7 md:py-3 md:text-xs md:tracking-[0.15em] ${
                activeCategory === cat
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Feature Container */}
        <div className="relative mx-auto mb-12 flex w-full max-w-7xl flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:mb-16 md:rounded-[3rem] md:p-10">
          
          {/* Slider Header */}
          <div className="mb-6 flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center md:mb-10">
            <div>
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-600 md:text-xs md:tracking-[0.2em]">
                Project Showcase
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-1 text-2xl font-bold leading-tight text-slate-950 md:mt-2 md:text-4xl lg:text-5xl">
                Recent project work
              </h3>
            </div>

            <div className="hidden items-center gap-2 sm:flex md:gap-3">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 md:h-12 md:w-12"
                aria-label="Previous project"
              >
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition-colors hover:bg-indigo-600 md:h-12 md:w-12"
                aria-label="Next project"
              >
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>

          {/* Main Gallery Display */}
          <div className="relative flex min-h-[460px] w-full items-center justify-center overflow-hidden py-4 sm:min-h-[500px] md:min-h-[600px] md:py-6">
            {filteredProjects.map((project, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex - 1 + filteredProjects.length) %
                  filteredProjects.length;
              const isNext =
                index === (currentIndex + 1) % filteredProjects.length;

              let positionClass =
                "pointer-events-none invisible translate-x-12 scale-95 opacity-0 md:translate-x-24";

              if (isActive) {
                positionClass =
                  "z-30 translate-x-0 scale-100 opacity-100 shadow-xl shadow-slate-900/5";
              } else if (isPrev) {
                positionClass =
                  "z-10 -translate-x-24 scale-90 opacity-20 max-sm:hidden md:-translate-x-44";
              } else if (isNext) {
                positionClass =
                  "z-10 translate-x-24 scale-90 opacity-20 max-sm:hidden md:translate-x-44";
              }

              return (
                <article
                  key={`${project.title}-${index}`}
                  className={`absolute flex aspect-[4/5] w-full max-w-[280px] flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 transition-[opacity,transform] duration-500 ease-out sm:max-w-[320px] md:max-w-[380px] md:rounded-[2rem] md:p-5 lg:max-w-[420px] ${positionClass}`}
                >
                  {/* Card Image */}
                  <div className="relative h-[48%] overflow-hidden rounded-xl border border-slate-100 md:rounded-2xl">
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

                    <div className="absolute bottom-3 left-4 flex items-center gap-4 text-white md:bottom-4 md:left-5">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold md:text-xs">
                        <Eye className="h-3.5 w-3.5 text-indigo-300 md:h-4 md:w-4" />
                        {project.views}
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] font-bold md:text-xs">
                        <Heart className="h-3.5 w-3.5 text-rose-300 md:h-4 md:w-4" />
                        {project.likes}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-4 flex h-[46%] flex-col justify-between md:mt-5">
                    <div>
                      <span className="font-['Poppins',sans-serif] mb-2 block text-[10px] font-bold uppercase tracking-wider text-indigo-600 md:mb-3 md:text-xs md:tracking-[0.15em]">
                        {project.category}
                      </span>

                      <h3 className="font-['Poppins',sans-serif] line-clamp-2 text-xl font-bold leading-tight text-slate-950 md:text-2xl lg:text-3xl">
                        {project.title}
                      </h3>

                      <p className="font-['Inter',sans-serif] mt-2 line-clamp-3 text-xs font-medium leading-relaxed text-slate-600 md:mt-3 md:text-sm">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 md:pt-4">
                      <span className="font-['Poppins',sans-serif] rounded-full bg-indigo-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700 md:px-4 md:py-2 md:text-xs">
                        {project.timeline}
                      </span>

                      <button
                        onClick={() =>
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="font-['Inter',sans-serif] flex items-center text-[10px] font-bold uppercase tracking-wider text-indigo-600 transition-colors hover:text-indigo-500 md:text-xs md:tracking-[0.1em]"
                      >
                        Details
                        <ChevronRight className="ml-0.5 h-3.5 w-3.5 md:ml-1 md:h-4 md:w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="mt-4 flex items-center justify-center gap-4 sm:hidden">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition-colors hover:bg-indigo-600"
              aria-label="Next project"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-2 gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:mt-20 md:gap-5 md:rounded-[2.5rem] md:p-8 lg:grid-cols-4 lg:p-10">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "45+", label: "Happy Clients" },
            { value: "8+", label: "Cities Served" },
            { value: "98%", label: "On-Time Delivery" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-xl bg-slate-50 p-4 text-center md:rounded-[2rem] md:p-6 lg:p-8"
            >
              <span className="font-['Poppins',sans-serif] block text-3xl font-black leading-none text-indigo-600 md:text-4xl lg:text-5xl">
                {stat.value}
              </span>
              <span className="font-['Inter',sans-serif] mt-2 block text-[10px] font-bold uppercase tracking-wider text-slate-500 md:mt-3 md:text-xs md:tracking-[0.15em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Call Section */}
       
        
      </div>
    </section>
  );
}