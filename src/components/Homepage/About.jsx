import React from "react";
import {
  Award,
  Eye,
  ShieldCheck,
  Heart,
  ArrowRight,
  Building2,
  Ruler,
  ClipboardCheck,

  CheckCircle2,
} from "lucide-react";

import AboutImage from "../../assests/team/herosection/cubehero3.webp";

export default function About() {
  const coreValues = [
    {
      icon: Award,
      title: "Quality",
      desc: "Premium materials, clean finishing, and reliable workmanship.",
    },
    {
      icon: Eye,
      title: "Design Clarity",
      desc: "Thoughtful layouts shaped around lifestyle and practical use.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Delivery",
      desc: "Clear timelines, transparent updates, and managed execution.",
    },
    {
      icon: Heart,
      title: "Client First",
      desc: "Your vision, comfort, and budget guide every decision.",
    },
  ];

  const highlights = [
    {
      icon: Building2,
      title: "Interior + Construction",
      desc: "One integrated team for design and build execution.",
    },
    {
      icon: Ruler,
      title: "Planned Execution",
      desc: "Every stage is structured before work begins.",
    },
    {
      icon: ClipboardCheck,
      title: "Handover Ready",
      desc: "We deliver spaces that are finished, checked, and ready to use.",
    },
  ];

  const operatingPrinciples = [
    "Single accountable team",
    "Transparent project updates",
    "Material and execution discipline",
    "Final quality checks before handover",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24"
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-indigo-200/30 blur-[100px] md:h-[500px] md:w-[500px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-slate-300/40 blur-[120px] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="mb-10 grid gap-6 md:mb-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm md:mb-6 md:px-5 md:py-2.5">
            
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.15em] text-indigo-700 md:text-sm">
                About Cube4Spaces
              </span>
            </div>

            <h1 className="font-['Poppins',sans-serif] max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Design, Build,
              <span className="block text-indigo-600">
                and Deliver with Discipline.
              </span>
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-base font-medium leading-relaxed text-slate-600 md:text-lg">
              Cube4Spaces creates functional, elegant, and ready-to-use spaces
              through integrated interior design, construction, and turnkey
              project execution.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="font-['Inter',sans-serif] mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-indigo-600 active:scale-95 sm:w-auto md:mt-8 md:px-8 md:py-4 md:text-lg"
            >
              Start Project
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Main About Block */}
        <div className="mb-6 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:mb-10 md:rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[250px] overflow-hidden md:min-h-[400px] lg:min-h-[600px]">
            <img
              src={AboutImage}
              alt="Cube4Spaces interior design and execution"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 md:bottom-8 md:left-8 md:right-8">
              {["Design", "Build", "Handover"].map((item) => (
                <span
                  key={item}
                  className="font-['Poppins',sans-serif] rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700 shadow-sm backdrop-blur md:px-4 md:py-2 md:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center p-5 md:p-10 lg:p-12">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-sm">
              Our Story
            </span>

            <h2 className="font-['Poppins',sans-serif] mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
              We bring design and execution under one roof.
            </h2>

            <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-base lg:text-lg">
              Cube4Spaces was built to solve a common problem in construction
              and interiors: poor coordination between design teams, vendors,
              contractors, and site execution. We simplify the process by
              managing planning, design, material coordination, execution, and
              handover through one responsible team.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 md:gap-5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-indigo-100 hover:bg-white hover:shadow-md md:rounded-2xl md:p-5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-indigo-600 shadow-sm md:mb-4 md:h-12 md:w-12 md:rounded-xl">
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-['Poppins',sans-serif] text-base font-bold leading-snug text-slate-950 md:text-lg">
                      {item.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] mt-2 text-xs font-medium leading-relaxed text-slate-500 md:text-sm">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission + Advantage */}
        <div className="mb-6 grid gap-6 lg:grid-cols-2 md:mb-10 md:gap-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-sm">
              Mission
            </span>

            <h3 className="font-['Poppins',sans-serif] mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
              Spaces that feel beautiful and work better.
            </h3>

            <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
              Our mission is to create residential and commercial spaces that
              are practical, elegant, and built to last. We combine smart
              layouts, material discipline, and transparent coordination to
              reduce project stress and improve final outcomes.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-sm">
              Advantage
            </span>

            <h3 className="font-['Poppins',sans-serif] mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
              One team. One timeline. One standard.
            </h3>

            <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
              Instead of managing separate designers, contractors, and vendors,
              you work with one coordinated team. This helps avoid delays,
              confusion, cost leakage, and execution gaps.
            </p>

            <div className="mt-6 grid gap-3 md:mt-8">
              {operatingPrinciples.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3 md:rounded-2xl"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-indigo-600" strokeWidth={2.5} />
                  <span className="font-['Inter',sans-serif] text-sm font-semibold text-slate-700 md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Core Values */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:mb-10 md:rounded-[2rem] md:p-10 lg:p-12">
          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-end md:mb-12 md:gap-8">
            <div>
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-sm">
                Core Values
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-2 max-w-2xl text-3xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
                The principles behind every project.
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] max-w-xl text-base font-medium leading-relaxed text-slate-600 lg:ml-auto md:text-lg">
              Good interiors are not created only by design. They are created
              through discipline, detail, communication, and ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="group rounded-xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-xl md:rounded-2xl md:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-indigo-600 shadow-sm transition-colors group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white md:mb-8 md:h-14 md:w-14">
                    <Icon className="h-6 w-6" strokeWidth={2.5} />
                  </div>
                  <h4 className="font-['Poppins',sans-serif] text-xl font-bold text-slate-950 md:text-2xl">
                    {value.title}
                  </h4>
                  <p className="font-['Inter',sans-serif] mt-2 text-sm font-medium leading-relaxed text-slate-600 md:mt-3 md:text-base">
                    {value.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Team + Execution Culture */}
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] md:mb-12 md:gap-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-sm">
              Team
            </span>
            <h3 className="font-['Poppins',sans-serif] mt-3 max-w-2xl text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
              Designers, engineers, managers, and skilled execution partners.
            </h3>
            <p className="font-['Inter',sans-serif] mt-4 max-w-2xl text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
              We bring together interior designers, construction professionals,
              project coordinators, and skilled craftsmen to deliver a complete
              project experience. Our approach is collaborative, practical, and
              outcome-focused.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
            <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-sm">
              Execution Culture
            </span>
            <h3 className="font-['Poppins',sans-serif] mt-3 text-2xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
              Detail is the difference.
            </h3>
            <p className="font-['Inter',sans-serif] mt-4 text-base font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
              We focus on planning before execution, site coordination during
              work, and final checks before handover. That is how we protect
              design intent, budget discipline, and client confidence.
            </p>
          </article>
        </div>

        {/* Final CTA */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:rounded-[2.5rem] md:p-10 lg:p-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center md:gap-10">
            <div>
              <span className="font-['Poppins',sans-serif] text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-sm">
                Your vision guides everything we do
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 md:mt-4 md:text-4xl lg:text-5xl">
                Ready to build beyond ordinary?
              </h3>
              <p className="font-['Inter',sans-serif] mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-600 md:mt-5 md:text-lg">
                Share your requirement and our team will guide you with the
                right design, budget, and execution plan.
              </p>
            </div>

            <div className="lg:text-right">
              <button
                onClick={() => scrollToSection("contact")}
                className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-indigo-600 active:scale-95 sm:w-auto md:rounded-full md:px-10 md:py-5 md:text-lg"
              >
                Start Project
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}