import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  DraftingCompass,
  Building2,
  ClipboardCheck,
  Ruler,
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

const process = [
  {
    step: '01',
    title: 'Consult',
    desc: 'We understand your space, budget, style, and timeline.',
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'We prepare layouts, material ideas, and execution roadmap.',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Our team manages construction and interior work with regular updates.',
  },
  {
    step: '04',
    title: 'Handover',
    desc: 'We inspect, finish, and deliver your completed space.',
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
      className="relative overflow-hidden bg-[#f8f7f4] py-20 md:py-28 font-[family-name:Inter,sans-serif]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_32%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-24">
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-stone-200 bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.18em] text-indigo-700 shadow-sm">
              Our Services
            </span>

            <h2 className="max-w-5xl text-5xl font-black tracking-[-0.04em] text-stone-950 sm:text-6xl lg:text-7xl xl:text-8xl">
              Design. Build. Deliver.
            </h2>

            <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-stone-700 md:text-xl">
              Cube4Spaces creates beautiful, functional, and ready-to-use
              spaces with complete interior, construction, and turnkey project
              support.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-800 bg-stone-950 p-8 text-white shadow-2xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <BadgeCheck className="h-7 w-7" />
            </div>

            <h3 className="text-2xl font-extrabold leading-tight">
              End-to-end project ownership
            </h3>

            <p className="mt-4 text-base leading-7 text-white/75">
              From first consultation to final handover, our team keeps your
              project structured, transparent, and professionally managed.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl xl:p-10"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-stone-200 bg-[#f8f7f4] text-stone-950 transition-all duration-300 group-hover:border-indigo-700 group-hover:bg-indigo-700 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <span className="text-5xl font-black text-stone-200">
                    {service.id}
                  </span>
                </div>

                <h3 className="text-3xl font-black tracking-tight text-stone-950 xl:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-5 min-h-[112px] text-lg font-medium leading-8 text-stone-600">
                  {service.description}
                </p>

                <ul className="mt-8 space-y-4 border-t border-stone-100 pt-7">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-base font-bold text-stone-800"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-700"
                        strokeWidth={2}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-24 grid gap-12 rounded-[2.5rem] border border-stone-200 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[0.7fr_1.3fr] xl:p-14">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-indigo-700">
              How We Work
            </span>

            <h3 className="mt-5 text-4xl font-black tracking-tight text-stone-950 md:text-5xl xl:text-6xl">
              A simple process for stress-free execution.
            </h3>

            <p className="mt-6 text-lg font-medium leading-8 text-stone-600">
              We keep your project journey clear, practical, and easy to track
              from planning to delivery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-stone-200 bg-[#f8f7f4] p-7 transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-black text-indigo-700">
                    {item.step}
                  </span>

                  <Ruler className="h-5 w-5 text-stone-400" strokeWidth={1.8} />
                </div>

                <h4 className="text-2xl font-black text-stone-950">
                  {item.title}
                </h4>

                <p className="mt-3 text-base font-medium leading-7 text-stone-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em] text-indigo-700">
              Why Choose Cube4Spaces
            </span>

            <h3 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-stone-950 md:text-5xl xl:text-6xl">
              Better planning. Better finish. Better handover.
            </h3>

            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-stone-600">
              We combine design thinking, execution discipline, and transparent
              coordination to help you build a space that looks good and works
              well.
            </p>

            <button className="mt-9 inline-flex items-center gap-3 rounded-full bg-stone-950 px-8 py-4 text-base font-black text-white shadow-lg transition hover:bg-indigo-700">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-md"
              >
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-indigo-700" />
                <span className="text-lg font-black leading-snug text-stone-900">
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