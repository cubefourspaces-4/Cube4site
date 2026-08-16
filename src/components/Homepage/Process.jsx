import { useRef } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
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
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: delay * 0.08 }}
    >
      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-600 md:h-5 md:w-5" />
      <span className="font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-slate-600 md:text-base">
        {text}
      </span>
    </motion.li>
  );
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section
      id="process"
      ref={ref}
      className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24"
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-indigo-200/30 blur-[100px] md:h-[400px] md:w-[400px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-slate-200/40 blur-[100px] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="mb-10 grid gap-6 md:mb-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 shadow-sm md:mb-6 md:px-5 md:py-2">
          
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-700 md:text-xs md:tracking-[0.2em]">
                Workflow Timeline
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] max-w-4xl text-3xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
              How We Manage
              <span className="block text-indigo-600">
                Your Project Journey.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-slate-600 md:text-base lg:text-lg">
              A structured execution workflow designed to reduce ambiguity,
              improve coordination, and give clients clear visibility from
              consultation to final handover.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
              {["Consult", "Design", "Build", "Handover"].map((item) => (
                <span
                  key={item}
                  className="font-['Poppins',sans-serif] rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-colors hover:border-indigo-200 hover:text-indigo-600 md:px-4 md:py-2 md:text-xs md:tracking-[0.15em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line (Centered on the 80px nodes -> top 40px) */}
          <div className="absolute left-0 right-0 top-[40px] hidden h-[2px] bg-slate-200 lg:block" />

          <motion.div
            className="absolute left-0 top-[40px] hidden h-[2px] bg-indigo-600 lg:block"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, idx) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col"
              >
                {/* Step Number Node */}
                <div className="relative z-10 mb-4 flex items-center justify-between md:mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-indigo-300 group-hover:shadow-md lg:h-20 lg:w-20 lg:rounded-2xl">
                    <span className="font-['Poppins',sans-serif] text-xl font-black text-indigo-600 lg:text-3xl">
                      {step.step}
                    </span>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-colors group-hover:border-indigo-200 group-hover:text-indigo-600 lg:flex">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl md:rounded-[2rem] md:p-8">
                  <div>
                    <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-600 md:text-xs md:tracking-[0.15em]">
                      {step.subtitle}
                    </span>

                    <h3 className="font-['Poppins',sans-serif] mt-2 text-xl font-bold leading-tight text-slate-950 md:mt-3 md:text-2xl lg:text-3xl">
                      {step.title}
                    </h3>

                    <p className="font-['Inter',sans-serif] mt-3 text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5 md:mt-6 md:space-y-4 md:pt-6">
                    {step.points.map((point, pointIndex) => (
                      <AnimatedPoint
                        key={point}
                        text={point}
                        delay={pointIndex + idx * 2} // Staggers internally and across cards
                      />
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 md:pt-8">
                    <div className="inline-block rounded-full bg-indigo-50 px-3 py-1.5 md:px-4 md:py-2">
                      <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-700 md:text-xs md:tracking-[0.15em]">
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