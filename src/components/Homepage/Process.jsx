import { useRef } from "react";
import {
  Sparkles,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Consult",
    subtitle: "Understand & Plan",
    description:
      "We sit down with you to understand your exact requirements, budgets, and timelines.",
    points: [
      "Free consultation",
      "Site visit & measurements",
      "Discuss budget & timeline",
    ],
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Create & Visualize",
    description:
      "We turn your ideas into concrete designs with accurate material selection and visualization.",
    points: [
      "2D floor layouts",
      "3D photo-realistic visuals",
      "Final material selection & quote",
    ],
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Execute & Construct",
    description:
      "Actual execution begins with strict quality checks and experienced site management.",
    points: [
      "Dedicated project manager",
      "Regular progress tracking",
      "Quality & structural checks",
    ],
  },
  {
    step: "04",
    title: "Finish",
    subtitle: "Deliver & Handover",
    description:
      "We put the final touches on your space and hand over the keys with post-project support.",
    points: [
      "Final walkthrough & review",
      "Snag fixes & deep clean",
      "Keys handed over",
    ],
  },
];

const AnimatedPoint = ({ text, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.li
      ref={ref}
      className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-600"
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: delay * 0.06 }}
    >
      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
      <span>{text}</span>
    </motion.li>
  );
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  const headingFont =
    "font-[family-name:'Space_Grotesk','Plus_Jakarta_Sans',Inter,sans-serif]";

  return (
    <section
      id="process"
      ref={ref}
      className="relative overflow-hidden bg-[#f4f8ff] py-24 font-[family-name:Inter,sans-serif] text-slate-950 md:py-32"
    >
      {/* Blue Ambient Background */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-2.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                Workflow Timeline
              </span>
            </div>

            <h2
              className={`${headingFont} max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-slate-950 md:text-5xl`}
            >
              How We Manage
              <span className="block text-blue-700">
                Your Project Journey.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm font-medium leading-7 text-slate-600 md:text-base">
              A structured execution workflow designed to reduce ambiguity,
              improve coordination, and give clients clear visibility from
              consultation to final handover.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Consult", "Design", "Build", "Handover"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-blue-100 lg:block" />

          <motion.div
            className="absolute left-0 top-[42px] hidden h-px bg-blue-600 lg:block"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.12,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col"
              >
                {/* Step Number Node */}
                <div className="relative z-10 mb-7 flex items-center justify-between">
                  <div className="flex h-[84px] w-[84px] items-center justify-center rounded-[1.5rem] border border-blue-100 bg-white shadow-sm transition-all duration-500 group-hover:border-blue-300 group-hover:shadow-[0_18px_50px_rgba(37,99,235,0.14)]">
                    <span
                      className={`${headingFont} text-2xl font-extrabold tracking-[-0.04em] text-blue-700`}
                    >
                      {step.step}
                    </span>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm lg:flex">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex flex-1 flex-col rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">
                      {step.subtitle}
                    </span>

                    <h3
                      className={`${headingFont} mt-3 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  <ul className="mt-7 space-y-4 border-t border-blue-50 pt-6">
                    {step.points.map((point, pointIndex) => (
                      <AnimatedPoint
                        key={point}
                        text={point}
                        delay={pointIndex}
                      />
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <div className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-blue-700">
                        Process Check
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}