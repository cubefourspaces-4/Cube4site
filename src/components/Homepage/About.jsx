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
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import AboutImage from "../../assests/team/herosection/cubehero3.webp";

export default function About() {
  const headingFont =
    "font-[family-name:'Space_Grotesk','Plus_Jakarta_Sans',Inter,sans-serif]";

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
      className="relative w-full overflow-hidden bg-[#f4f8ff] py-24 font-[family-name:Inter,sans-serif] text-slate-950 md:py-32"
    >
      {/* Soft background accents only */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-2.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                About Cube4Spaces
              </span>
            </div>

            <h1
              className={`${headingFont} max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-slate-950 md:text-5xl`}
            >
              Design, Build,
              <span className="block text-blue-700">
                and Deliver with Discipline.
              </span>
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm font-medium leading-7 text-slate-600 md:text-base">
              Cube4Spaces creates functional, elegant, and ready-to-use spaces
              through integrated interior design, construction, and turnkey
              project execution.
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-slate-950 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:bg-blue-700 active:scale-[0.99]"
            >
              Start Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main About Block */}
        <div className="mb-8 grid overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_24px_70px_rgba(37,99,235,0.10)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-[560px]">
            <img
              src={AboutImage}
              alt="Cube4Spaces interior design and execution"
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
              {["Design", "Build", "Handover"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
              Our Story
            </span>

            <h2
              className={`${headingFont} mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl`}
            >
              We bring design and execution under one roof.
            </h2>

            <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 md:text-base">
              Cube4Spaces was built to solve a common problem in construction
              and interiors: poor coordination between design teams, vendors,
              contractors, and site execution. We simplify the process by
              managing planning, design, material coordination, execution, and
              handover through one responsible team.
            </p>

            <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-600 md:text-base">
              Our focus is simple: create spaces that look refined, function
              well, and are delivered with professional discipline.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-blue-100 bg-[#f4f8ff] p-5 transition-all hover:border-blue-300 hover:bg-white"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3
                      className={`${headingFont} text-base font-extrabold leading-snug tracking-[-0.025em] text-slate-950`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission + Advantage - no dark block */}
        <div className="mb-8 grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm md:p-10 lg:p-12">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
              Mission
            </span>

            <h3
              className={`${headingFont} mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl`}
            >
              Spaces that feel beautiful and work better.
            </h3>

            <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-slate-600 md:text-base">
              Our mission is to create residential and commercial spaces that
              are practical, elegant, and built to last. We combine smart
              layouts, material discipline, and transparent coordination to
              reduce project stress and improve final outcomes.
            </p>
          </article>

          <article className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm md:p-10 lg:p-12">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
              Advantage
            </span>

            <h3
              className={`${headingFont} mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl`}
            >
              One team. One timeline. One quality standard.
            </h3>

            <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-slate-600 md:text-base">
              Instead of managing separate designers, contractors, and vendors,
              you work with one coordinated team. This helps avoid delays,
              confusion, cost leakage, and execution gaps.
            </p>

            <div className="mt-8 grid gap-3">
              {operatingPrinciples.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-700" />
                  <span className="text-sm font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Core Values */}
        <div className="mb-8 rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm md:p-10 lg:p-12">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                Core Values
              </span>

              <h3
                className={`${headingFont} mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl`}
              >
                The principles behind every project.
              </h3>
            </div>

            <p className="max-w-2xl text-sm font-medium leading-7 text-slate-600 md:text-base lg:ml-auto">
              Good interiors are not created only by design. They are created
              through discipline, detail, communication, and ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-[1.75rem] border border-blue-100 bg-[#f4f8ff] p-7 transition-all hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-[0_24px_70px_rgba(37,99,235,0.10)]"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-sm transition-all group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h4
                    className={`${headingFont} text-2xl font-extrabold tracking-[-0.035em] text-slate-950`}
                  >
                    {value.title}
                  </h4>

                  <p className="mt-4 text-sm font-medium leading-6 text-slate-600">
                    {value.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Team + Execution Culture */}
        <div className="mb-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm md:p-10 lg:p-12">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
              Team
            </span>

            <h3
              className={`${headingFont} mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl`}
            >
              Designers, engineers, managers, and skilled execution partners.
            </h3>

            <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-slate-600 md:text-base">
              We bring together interior designers, construction professionals,
              project coordinators, and skilled craftsmen to deliver a complete
              project experience. Our approach is collaborative, practical, and
              outcome-focused.
            </p>
          </article>

          <article className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm md:p-10 lg:p-12">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
              Execution Culture
            </span>

            <h3
              className={`${headingFont} mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl`}
            >
              Detail is the difference.
            </h3>

            <p className="mt-6 text-sm font-medium leading-7 text-slate-600 md:text-base">
              We focus on planning before execution, site coordination during
              work, and final checks before handover. That is how we protect
              design intent, budget discipline, and client confidence.
            </p>
          </article>
        </div>

        {/* Final CTA - no blue block */}
        <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-[0_24px_70px_rgba(37,99,235,0.10)] md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                Your vision guides everything we do
              </span>

              <h3
                className={`${headingFont} mt-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl`}
              >
                Ready to build beyond ordinary?
              </h3>

              <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-600 md:text-base">
                Share your requirement and our team will guide you with the
                right design, budget, and execution plan.
              </p>
            </div>

            <div className="lg:text-right">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:bg-blue-700 active:scale-[0.99]"
              >
                Start Project
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}