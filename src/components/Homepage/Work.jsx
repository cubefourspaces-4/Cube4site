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

  const headingFont =
    "font-[family-name:Sora,Plus_Jakarta_Sans,Inter,sans-serif] font-extrabold tracking-[-0.055em]";

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
      className="relative min-h-screen overflow-hidden bg-[#f4f7fb] py-20 text-stone-950 md:py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-5xl text-center md:mb-20">
          <div className="mb-6 inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 shadow-sm">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
              Selected Works
            </span>
          </div>

          <h2
            className={`mx-auto max-w-5xl text-5xl leading-[0.98] text-stone-950 sm:text-6xl md:text-7xl lg:text-8xl ${headingFont}`}
          >
            Designed Spaces.
            <br />
            <span className="text-blue-500">Delivered Well.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-8 text-stone-600 md:text-lg">
            Explore our residential, commercial, and turnkey projects designed
            with practical planning, quality materials, and professional
            execution.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {["All", "Residential", "Commercial", "Turnkey"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`rounded-full border px-7 py-3 text-xs font-black uppercase tracking-[0.16em] transition-colors ${
                activeCategory === cat
                  ? "border-blue-700 bg-blue-700 text-white"
                  : "border-blue-100 bg-white text-stone-600 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Feature Container */}
        <div className="relative mx-auto mb-16 flex w-full max-w-7xl flex-col items-center rounded-[3rem] border border-blue-100 bg-white p-5 shadow-sm sm:p-8 md:p-10">
          {/* Slider Header */}
          <div className="mb-10 flex w-full items-center justify-between gap-5">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">
                Project Showcase
              </span>

              <h3
                className={`mt-3 text-3xl leading-tight text-stone-950 md:text-5xl ${headingFont}`}
              >
                Recent project work
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-stone-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                aria-label="Previous project"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-950 text-white transition-colors hover:bg-blue-700"
                aria-label="Next project"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Main Gallery Display */}
          <div className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden py-6 sm:min-h-[620px]">
            {filteredProjects.map((project, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index ===
                (currentIndex - 1 + filteredProjects.length) %
                  filteredProjects.length;
              const isNext =
                index === (currentIndex + 1) % filteredProjects.length;

              let positionClass =
                "pointer-events-none invisible translate-x-24 scale-95 opacity-0";

              if (isActive) {
                positionClass =
                  "z-30 translate-x-0 scale-100 opacity-100 shadow-xl";
              } else if (isPrev) {
                positionClass =
                  "z-10 -translate-x-44 scale-90 opacity-20 max-md:hidden";
              } else if (isNext) {
                positionClass =
                  "z-10 translate-x-44 scale-90 opacity-20 max-md:hidden";
              }

              return (
                <article
                  key={`${project.title}-${index}`}
                  className={`absolute flex aspect-[4/5] w-full max-w-[300px] flex-col justify-between rounded-[2.25rem] border border-blue-100 bg-white p-5 transition-[opacity,transform] duration-500 ease-out sm:max-w-[360px] md:max-w-[420px] ${positionClass}`}
                >
                  {/* Card Image */}
                  <div className="relative h-[48%] overflow-hidden rounded-[1.6rem] border border-stone-100">
                    <img
                      src={project.img}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 to-transparent" />

                    <div className="absolute bottom-4 left-5 flex items-center gap-5 text-white">
                      <div className="flex items-center gap-1.5 text-xs font-bold">
                        <Eye className="h-4 w-4 text-blue-300" />
                        {project.views}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-bold">
                        <Heart className="h-4 w-4 text-rose-300" />
                        {project.likes}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-6 flex h-[44%] flex-col justify-between">
                    <div>
                      <span className="mb-3 block text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                        {project.category}
                      </span>

                      <h3
                        className={`line-clamp-2 text-2xl leading-tight text-stone-950 md:text-3xl ${headingFont}`}
                      >
                        {project.title}
                      </h3>

                      <p className="mt-4 line-clamp-3 text-sm font-medium leading-6 text-stone-600">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-blue-50 pt-5">
                      <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-blue-700">
                        {project.timeline}
                      </span>

                      <button
                        onClick={() =>
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="flex items-center text-xs font-black uppercase tracking-[0.12em] text-blue-700 transition-colors hover:text-blue-500"
                      >
                        Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto mt-20 grid w-full max-w-7xl grid-cols-2 gap-4 rounded-[2.5rem] border border-blue-100 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-4">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "45+", label: "Happy Clients" },
            { value: "8+", label: "Cities Served" },
            { value: "98%", label: "On-Time Delivery" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] bg-[#f4f7fb] p-6 text-center"
            >
              <span
                className={`block text-4xl leading-none text-blue-700 md:text-5xl ${headingFont}`}
              >
                {stat.value}
              </span>

              <span className="mt-3 block text-xs font-black uppercase tracking-[0.16em] text-stone-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Call Section */}
        <div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-[3rem] bg-blue-950 p-8 text-center text-white shadow-sm md:p-14">
          <span className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">
            Start Your Project
          </span>

          <h3
            className={`mx-auto mt-4 max-w-3xl text-4xl leading-tight text-white md:text-6xl ${headingFont}`}
          >
            Have a project in mind?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-white/65 md:text-lg">
            Share your requirement with us. We will guide you with the right
            design, timeline, and transparent project estimate.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-9 rounded-full bg-white px-9 py-4 text-sm font-black uppercase tracking-[0.12em] text-blue-950 shadow-lg transition-colors hover:bg-blue-500 hover:text-white"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}