import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  DraftingCompass,
  Building2,
  ClipboardCheck,
  BadgeCheck,
} from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Interior Design',
    description:
      'Functional and elegant interior design for homes, offices, kitchens, wardrobes, and complete living spaces.',
    features: [
      'Space planning',
      '3D design preview',
      'Kitchen & wardrobe design',
      'Home and office styling',
    ],
    icon: DraftingCompass,
  },
  {
    id: '02',
    title: 'Construction',
    description:
      'Reliable residential and commercial construction with strong supervision, quality materials, and planned delivery.',
    features: [
      'Project supervision',
      'Quality materials',
      'Safety-focused work',
      'Timeline-based delivery',
    ],
    icon: Building2,
  },
  {
    id: '03',
    title: 'Turnkey Projects',
    description:
      'Complete design and build execution from planning to final handover through one responsible project team.',
    features: [
      'Single point of contact',
      'Design + build execution',
      'Transparent coordination',
      'Ready-to-use handover',
    ],
    icon: ClipboardCheck,
  },
];

const benefits = [
  'Transparent project planning',
  'Clear delivery timelines',
  'Quality material selection',
  'One team from design to handover',
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.06),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.06),transparent_40%)]" />

      {/* Full Width Container with scaling padding */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        
        {/* Header Section */}
        <div className="mb-24 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <span className="font-['Poppins',sans-serif] mb-8 inline-flex rounded-full border border-indigo-100 bg-indigo-50/50 px-6 py-2.5 text-base font-bold uppercase tracking-[0.2em] text-indigo-700 shadow-sm backdrop-blur-sm">
              Our Services
            </span>

            <h2 className="font-['Poppins',sans-serif] max-w-6xl text-6xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-6xl xl:text-[4.5rem] leading-[1.05]">
              Design. Build. Deliver.
            </h2>

            <p className="font-['Inter',sans-serif] mt-8 max-w-4xl text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
              Cube4Spaces creates beautiful, functional, and ready-to-use
              spaces with complete interior, construction, and turnkey project
              support.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-slate-900 bg-slate-950 p-10 text-white shadow-2xl md:p-12">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md">
              <BadgeCheck className="h-8 w-8 text-indigo-400" strokeWidth={2} />
            </div>

            <h3 className="font-['Poppins',sans-serif] text-3xl font-bold leading-snug md:text-4xl">
              End-to-end project ownership
            </h3>

            <p className="font-['Inter',sans-serif] mt-5 text-lg font-normal leading-relaxed text-slate-300 md:text-xl">
              From first consultation to final handover, our team keeps your
              project structured, transparent, and professionally managed.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl xl:p-12"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-slate-900 transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-600/25">
                    <Icon className="h-9 w-9" strokeWidth={1.8} />
                  </div>

                  <span className="font-['Poppins',sans-serif] text-6xl font-black text-slate-100 transition-colors duration-500 group-hover:text-indigo-50">
                    {service.id}
                  </span>
                </div>

                <h3 className="font-['Poppins',sans-serif] text-4xl font-bold tracking-tight text-slate-950">
                  {service.title}
                </h3>

                <p className="font-['Inter',sans-serif] mt-6 flex-grow text-xl font-medium leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-10 space-y-5 border-t border-slate-100 pt-10">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-6 w-6 flex-shrink-0 text-indigo-600"
                        strokeWidth={2.5}
                      />
                      <span className="font-['Inter',sans-serif] text-lg font-semibold text-slate-800">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-32 grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="font-['Poppins',sans-serif] text-base font-bold uppercase tracking-[0.2em] text-indigo-700">
              Why Choose Cube4Spaces
            </span>

            <h3 className="font-['Poppins',sans-serif] mt-6 max-w-3xl text-5xl font-black tracking-tight text-slate-950 md:text-6xl xl:text-7xl leading-[1.1]">
              Better planning. Better finish. Better handover.
            </h3>

            <p className="font-['Inter',sans-serif] mt-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-600">
              We combine design thinking, execution discipline, and transparent
              coordination to help you build a space that looks good and works
              well.
            </p>

            <button className="font-['Inter',sans-serif] mt-12 inline-flex items-center gap-4 rounded-full bg-slate-950 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-slate-950/10 transition-all duration-300 hover:bg-indigo-600 hover:shadow-indigo-600/25 hover:-translate-y-1">
              Start Your Project
              <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50">
                  <CheckCircle2 className="h-7 w-7 text-indigo-600" strokeWidth={2.5} />
                </div>
                <span className="font-['Inter',sans-serif] text-xl font-semibold leading-snug text-slate-900">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}