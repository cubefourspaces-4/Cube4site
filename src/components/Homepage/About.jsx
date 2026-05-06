import React from "react";
import { Award, Eye, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import AboutImage from "../../assests/team/herosection/cubehero3.webp"; // Imported image

export default function About() {
  const coreValues = [
    { icon: Award, title: "Quality", desc: "No shortcuts on materials or workmanship." },
    { icon: Eye, title: "Creativity", desc: "Every space gets a unique, thoughtful design." },
    { icon: ShieldCheck, title: "Professionalism", desc: "Clear timelines, budgets, and communication." },
    { icon: Heart, title: "Customer First", desc: "Your vision guides everything we do." },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white text-stone-900 py-32 md:py-48 font-[family-name:Inter,sans-serif] flex justify-center"
    >
      {/* Subtle Ambient Glows */}
      <div className="absolute left-16 top-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-16 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-[1700px] px-6 sm:px-8 lg:px-12">
        
        {/* Main Title Section */}
        <div className="mb-28 max-w-6xl">
          <span className="mb-4 block text-xs font-black tracking-[0.25em] uppercase text-indigo-600 font-[family-name:Inter,sans-serif]">
            About Cube4Spaces
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-stone-950 leading-[1.05] font-[family-name:Inter,sans-serif]">
            Modern Design. <span className="font-serif italic font-normal text-indigo-600">Quality Execution.</span>
          </h1>
        </div>

        {/* Sections 1 & 2: Story and Mission */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-stretch mb-28">
          
          <div className="rounded-[2.5rem] border border-stone-200/80 bg-stone-50/50 p-12 md:p-16 h-full flex flex-col justify-between backdrop-blur-sm transition-all hover:shadow-2xl hover:border-indigo-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 mb-6 block font-[family-name:Inter,sans-serif]">
                01 / Our Story
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-stone-950 mb-6 tracking-tight leading-snug font-[family-name:Inter,sans-serif]">
                How We Started
              </h3>
              <p className="text-sm leading-relaxed text-stone-600 max-w-xl">
                Cube4Spaces was born from a simple idea — why should construction and interior design be handled by different teams? 
                We saw too many projects suffer from poor coordination, delays, and mismatched visions. 
                So we built a company that does both, seamlessly. 
                Today, we’re a trusted name for modern, functional, and timeless spaces across residential and commercial projects.
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-stone-200/80 bg-stone-50/50 p-12 md:p-16 h-full flex flex-col justify-between backdrop-blur-sm transition-all hover:shadow-2xl hover:border-indigo-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 mb-6 block font-[family-name:Inter,sans-serif]">
                02 / What Drives Us
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-stone-950 mb-6 tracking-tight leading-snug font-[family-name:Inter,sans-serif]">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-stone-600 max-w-xl">
                Our mission is to create spaces that people love to live and work in — without the usual stress of construction and design. 
                We combine smart planning, quality materials, and honest communication to deliver projects on time and within budget. 
                Every space we touch should feel effortless, beautiful, and built to last.
              </p>
            </div>
          </div>

        </div>

        {/* --- MODIFIED: DECREASED IMAGE SIZE & CHANGED UI --- */}
        {/* Container: Focus on Text Visuals and Smaller Image */}
        <div className="mb-28 grid grid-cols-1 md:grid-cols-12 gap-12 items-center rounded-[3rem] border border-stone-200/50 bg-stone-50/30 p-12 md:p-16 shadow-sm">
          
          {/* Image Column - Smaller, now takes up 4/12 columns on md+ screens */}
          <div className="md:col-span-4 relative flex justify-center aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl group">
            <img 
              src={AboutImage} 
              alt="Modern interior design showcase" 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
            />
            {/* Opaque dark overlay - Kept, but slightly lighter to balance */}
            <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[1px]" />
          </div>
          
          {/* Text Column - More prominent, taking up 8/12 columns */}
          <div className="md:col-span-8 space-y-6">
            <h4 className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-tight font-[family-name:Inter,sans-serif]">
              Crafting Exceptional Environments
            </h4>
            <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-3xl">
              Explore how we bring visions to life through harmonious design and precise execution.
            </p>
          </div>
        </div>
        {/* --- END MODIFIED SECTION --- */}

        {/* Section 3: Core Values */}
        <div className="mb-28 rounded-[3rem] border border-stone-200/50 bg-stone-50/30 p-12 md:p-16 shadow-sm">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-stone-400 text-center mb-4 block font-[family-name:Inter,sans-serif]">
            03 / Our Core Values
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold text-center text-stone-950 mb-16 tracking-tight font-[family-name:Inter,sans-serif]">
            The Principles We Stand By
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, index) => (
              <div
                key={index}
                className="group relative rounded-3xl border border-stone-200/80 bg-white p-10 hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex p-4 rounded-2xl bg-indigo-50 text-indigo-600 mb-8 shadow-sm">
                    <val.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-stone-950 mb-3 font-[family-name:Inter,sans-serif]">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-stone-500 mt-2">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sections 4 & 5: Team and Advantage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-28">
          
          <div className="rounded-[2.5rem] border border-stone-200/80 bg-stone-50/50 p-12 md:p-16 h-full flex flex-col justify-between backdrop-blur-sm transition-all hover:shadow-2xl hover:border-indigo-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 mb-6 block font-[family-name:Inter,sans-serif]">
                04 / The Team
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-stone-950 mb-6 tracking-tight leading-snug font-[family-name:Inter,sans-serif]">
                Who We Are
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                We are a tight-knit team of interior designers, construction engineers, project managers, and skilled craftspeople. 
                Each member brings years of experience and a shared passion for building better spaces. 
                We collaborate closely collaborate with you — and with each other — so there are no gaps between design and execution. 
                When you choose Cube4Spaces, you get a whole team, not just a contractor.
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-stone-200/80 bg-stone-50/50 p-12 md:p-16 h-full flex flex-col justify-between backdrop-blur-sm transition-all hover:shadow-2xl hover:border-indigo-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 mb-6 block font-[family-name:Inter,sans-serif]">
                05 / Advantage
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-stone-950 mb-6 tracking-tight leading-snug font-[family-name:Inter,sans-serif]">
                Why Cube4Spaces?
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                Unlike most companies that specialize in only construction or only interiors, we do both — under one roof. 
                That means no back-and-forth between different vendors, no finger-pointing when something goes wrong, and no delays because of poor coordination. 
                You get a single point of contact, a single timeline, and a single standard of quality. 
                From foundation to final furnishing — we deliver complete, hassle-free spaces.
              </p>
            </div>
          </div>

        </div>

        {/* Call to Action Section */}
        <div className="mx-auto max-w-3xl text-center border-t border-stone-200 pt-20 pb-10">
          <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-indigo-600 mb-5 font-[family-name:Inter,sans-serif]">
            Your vision guides everything we do
          </p>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-950 sm:text-5xl font-[family-name:Inter,sans-serif] mb-10 leading-[1.1]">
            Ready to Build Beyond Ordinary?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="rounded-full bg-stone-950 text-white px-9 py-4 text-xs font-bold uppercase tracking-wider transition hover:bg-stone-800 shadow-2xl active:scale-95 font-[family-name:Inter,sans-serif] inline-flex items-center gap-3"
            >
              Start Project <ArrowRight className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}