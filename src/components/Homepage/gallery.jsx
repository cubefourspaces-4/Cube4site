import React, { useState } from "react";
import { X, MessageCircle, ArrowUpRight } from "lucide-react";

import Image1 from "../../assests/gallery/gallery1.webp";
import Image2 from "../../assests/gallery/gallery2.webp";
import Image3 from "../../assests/gallery/gallery3.webp";
import Image4 from "../../assests/gallery/gallery4.webp";
import Image5 from "../../assests/team/herosection/cubehero3.webp";
import Image6 from "../../assests/team/herosection/cubehero4.webp";

const projects = [
  {
    id: 1,
    img: Image1,
    category: "Kitchen",
    title: "Modular Kitchen",
    desc: "Elegant kitchen design with smart storage, premium finish, and practical workflow.",
  },
  {
    id: 2,
    img: Image2,
    category: "Interior",
    title: "Living Interior",
    desc: "Modern interior styling designed for comfort, function, and visual balance.",
  },
  {
    id: 3,
    img: Image3,
    category: "Commercial",
    title: "Office Space",
    desc: "A productive workspace planned with clean design and efficient space usage.",
  },
  {
    id: 4,
    img: Image4,
    category: "Bedroom",
    title: "Luxury Room",
    desc: "Warm bedroom interiors with refined materials and a calm premium look.",
  },
  {
    id: 5,
    img: Image5,
    category: "Residential",
    title: "Urban Home",
    desc: "A complete home concept focused on light, space, and long-term usability.",
  },
  {
    id: 6,
    img: Image6,
    category: "Workspace",
    title: "Creative Studio",
    desc: "A smart workspace designed for focus, collaboration, and modern business needs.",
  },
];

const bottomCards = [
  {
    label: "Planning",
    title: "Smart space planning",
    desc: "We plan every corner for comfort, flow, and practical daily use.",
    dark: true,
  },
  {
    label: "Execution",
    title: "Quality-driven interiors",
    desc: "Clean finishes, reliable materials, and supervised project delivery.",
    image: Image2,
  },
  {
    label: "Turnkey",
    title: "Design to handover",
    desc: "One team manages the full journey from concept to completion.",
    image: Image5,
  },
  {
    label: "Support",
    title: "A team you can trust",
    desc: "Clear communication, timely updates, and professional coordination.",
    soft: true,
  },
];

export default function GalleryGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const redirectToWhatsApp = (title) => {
    const message = encodeURIComponent(
      `Hello! I would like to know more about this Cube4Spaces project: ${title}`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f5f0] py-20 text-stone-950 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-stone-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-200/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <header className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-stone-200 bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-stone-500 shadow-sm">
              Project Gallery
            </span>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-stone-950 sm:text-6xl md:text-7xl lg:text-8xl">
              Crafted Spaces.
              <br />
              Built Beautifully.
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg font-medium leading-8 text-stone-600 md:text-xl">
              Explore selected Cube4Spaces projects across interiors, kitchens,
              homes, offices, and turnkey spaces.
            </p>

            <button
              onClick={() => redirectToWhatsApp("Project Gallery")}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-stone-950 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg transition hover:bg-orange-600"
            >
              Chat on WhatsApp
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Gallery Grid - 6 x 1 on large screens */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => openModal(project)}
              className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                index % 2 === 0 ? "2xl:mt-0" : "2xl:mt-12"
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-90" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-stone-800 backdrop-blur">
                    {project.category}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-950 backdrop-blur transition group-hover:bg-orange-600 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-3 block text-xs font-black uppercase tracking-[0.18em] text-white/60">
                    0{project.id}
                  </span>

                  <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm font-medium leading-6 text-white/75">
                    {project.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Studio Section */}
        <section className="mt-24 overflow-hidden rounded-[3rem] bg-[#f4f2ed] px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            {/* Top Heading */}
            <div className="mb-16 grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:items-start">
              <div className="hidden lg:block">
                <div className="mt-10 h-5 w-5 rotate-45 bg-orange-600" />
              </div>

              <div>
                <span className="mb-5 block text-xs font-black uppercase tracking-[0.22em] text-orange-600">
                  About Studio
                </span>

                <h2 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-stone-950 sm:text-5xl md:text-6xl lg:text-7xl">
                  Cube4Spaces is an interior studio{" "}
                  <span className="inline-flex h-10 w-24 translate-y-1 rounded-full bg-gradient-to-r from-orange-700 via-orange-400 to-stone-950 shadow-inner md:h-12 md:w-32" />{" "}
                  that creates beautiful spaces with{" "}
                  <span className="text-stone-400">
                    practical planning and premium execution.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm font-medium leading-6 text-stone-500 md:text-base md:leading-7">
                  We combine design thinking, material knowledge, and site
                  execution to deliver interiors that look refined and work well
                  in real life.
                </p>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 xl:items-end">
              {bottomCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`group relative min-h-[300px] overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl md:min-h-[360px] ${
                    index === 1 ? "xl:translate-y-12" : ""
                  } ${index === 3 ? "xl:translate-y-12" : ""} ${
                    card.dark
                      ? "border-stone-900 bg-stone-950 text-white"
                      : card.soft
                      ? "border-stone-200 bg-stone-200 text-stone-950"
                      : "border-stone-200 bg-white text-white"
                  }`}
                >
                  {card.image && (
                    <>
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/35 to-transparent" />
                    </>
                  )}

                  <div className="relative z-10 flex h-full min-h-[250px] flex-col justify-between md:min-h-[300px]">
                    <div className="flex items-start justify-between">
                      <span
                        className={`rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] ${
                          card.dark
                            ? "border-white/30 text-white/80"
                            : card.soft
                            ? "border-stone-400 text-stone-600"
                            : "border-white/40 text-white/80"
                        }`}
                      >
                        {card.label}
                      </span>

                      <span className="mt-2 h-3 w-3 rotate-45 bg-orange-600" />
                    </div>

                    <div>
                      <h3
                        className={`text-2xl font-black leading-tight tracking-[-0.04em] md:text-3xl ${
                          card.dark
                            ? "text-white"
                            : card.soft
                            ? "text-stone-950"
                            : "text-white"
                        }`}
                      >
                        {card.title}
                      </h3>

                      <p
                        className={`mt-4 max-w-xs text-sm font-medium leading-6 ${
                          card.dark
                            ? "text-white/60"
                            : card.soft
                            ? "text-stone-500"
                            : "text-white/65"
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Strip */}
            <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-white p-7 shadow-sm md:flex-row md:items-center md:p-9">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-orange-600">
                  Start Your Project
                </span>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-stone-950 md:text-4xl">
                  Ready to design your space?
                </h3>
              </div>

              <button
                onClick={() => redirectToWhatsApp("New Interior Project")}
                className="inline-flex items-center gap-3 rounded-full bg-stone-950 px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg transition hover:bg-orange-600"
              >
                Get Project Quote
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4 backdrop-blur-md"
            onClick={closeModal}
          >
            <div
              className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl md:grid-cols-[1fr_0.9fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-h-[320px] md:min-h-[560px]">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent md:hidden" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="mb-5 inline-flex w-fit rounded-full bg-orange-50 px-5 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600">
                  {selectedProject.category}
                </span>

                <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-stone-950 md:text-6xl">
                  {selectedProject.title}
                </h2>

                <p className="mt-6 text-lg font-medium leading-8 text-stone-600">
                  {selectedProject.desc}
                </p>

                <div className="mt-9 border-t border-stone-100 pt-7">
                  <button
                    onClick={() => redirectToWhatsApp(selectedProject.title)}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-stone-950 px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg transition hover:bg-orange-600 sm:w-auto"
                  >
                    Get Quote on WhatsApp
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-stone-950 shadow-lg transition hover:bg-stone-100"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}