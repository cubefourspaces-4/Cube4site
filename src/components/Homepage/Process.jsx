import { useRef } from 'react';
import { Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Consult',
    subtitle: 'Understand & Plan',
    description: 'We sit down with you to understand your exact requirements, budgets, and timelines.',
    points: [
      'Free consultation',
      'Site visit & measurements',
      'Discuss budget & timeline'
    ],
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Create & Visualize',
    description: 'We turn your ideas into concrete designs with accurate material selection and visualization.',
    points: [
      '2D floor layouts',
      '3D photo-realistic visuals',
      'Final material selection & quote'
    ],
  },
  {
    step: '03',
    title: 'Build',
    subtitle: 'Execute & Construct',
    description: 'Actual execution begins with strict quality checks and experienced site management.',
    points: [
      'Dedicated project manager',
      'Regular progress tracking',
      'Quality & structural checks'
    ],
  },
  {
    step: '04',
    title: 'Finish',
    subtitle: 'Deliver & Handover',
    description: 'We put the final touches on your space and hand over the keys with post-project support.',
    points: [
      'Final walkthrough & review',
      'Snag fixes & deep clean',
      'Keys handed over'
    ],
  }
];

const AnimatedPoint = ({ text, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.li
      ref={ref}
      className="flex items-center text-stone-600 text-sm font-medium font-[family-name:Inter,sans-serif]"
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: delay * 0.05 }}
    >
      <ChevronRight className="w-4 h-4 text-indigo-600 mr-3 flex-shrink-0" />
      {text}
    </motion.li>
  );
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      id="process" 
      className="relative py-32 md:py-48 bg-white overflow-hidden font-[family-name:Inter,sans-serif] flex justify-center text-stone-900" 
      ref={ref}
    >
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1700px] px-6 lg:px-12 mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-6 py-2.5 rounded-full mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-indigo-600">
              Workflow Timeline
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 mb-6 font-[family-name:Inter,sans-serif]">
            How We <span className="font-serif italic font-normal text-indigo-600">Work.</span>
          </h2>
          <p className="text-sm md:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Simple, transparent, and built around you. From first call to final key — we're with you at every step.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
          {steps.map((step, idx) => {
            return (
              <div key={idx} className="relative flex flex-col group h-full">

                {/* Step indicator and path */}
                <div className="w-full flex items-center mb-8 px-1 relative h-[38px]">
                  <span className="text-sm font-black tracking-widest text-stone-400 font-mono">
                    {step.step} /
                  </span>
                  <div className="relative flex items-center h-full ml-auto md:ml-0 md:w-full">
                    <div className="w-full h-[2px] bg-stone-100 hidden md:block rounded-full" />
                    <motion.div
                      className="absolute left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-full hidden md:block"
                      initial={{ width: '0%' }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ duration: 1.2, delay: idx * 0.2, ease: 'easeOut' }}
                    />
                    <div className={`w-3.5 h-3.5 rounded-full border-2 absolute right-0 md:right-auto z-10 hidden md:block
                      ${idx === 0 ? 'bg-indigo-600 border-indigo-600 shadow-[0_0_12px_rgba(79,70,229,0.4)]' : 'bg-white border-stone-400'}`}
                    />
                  </div>
                </div>

                {/* Main Heading Text and Subtitle Container */}
                <div className="flex flex-col text-left mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.15em] text-indigo-600 leading-none font-[family-name:Inter,sans-serif]">
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl font-extrabold text-stone-950 mt-3 mb-0 leading-tight font-[family-name:Inter,sans-serif]">
                    {step.title}
                  </h3>
                </div>

                {/* Content Container */}
                <div className="bg-stone-50/50 border border-stone-200/80 p-10 rounded-[2.5rem] backdrop-blur-sm flex flex-col justify-between flex-grow transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)]">
                  <div>
                    <p className="text-sm text-stone-600 leading-relaxed mb-8">
                      {step.description}
                    </p>

                    <ul className="space-y-4 mb-8 border-t border-stone-200/60 pt-6">
                      {step.points.map((pt, index) => (
                        <AnimatedPoint key={index} text={pt} delay={index} />
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-stone-200/60 pt-6 mt-auto">
                    <span className="text-[9px] font-black tracking-[0.2em] text-stone-400 uppercase">
                      Process Check
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Section */}
        <div className="relative z-20 w-full max-w-6xl mx-auto bg-stone-50 p-10 md:p-14 rounded-[2.5rem] border border-stone-200/80 shadow-xl mt-28">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <h4 className="text-stone-950 font-extrabold text-2xl mb-2 tracking-tight leading-tight">
                Integrity in Every Interaction
              </h4>
              <p className="text-stone-500 text-sm max-w-md leading-relaxed mx-auto lg:mx-0 font-[family-name:Inter,sans-serif]">
                We maintain a single-point-of-contact approach, leaving no room for coordination gaps or hidden fees.
              </p>
            </div>
            <button
              onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 px-8 py-4 bg-stone-950 text-white font-black text-xs uppercase tracking-wider rounded-full hover:bg-stone-800 transition-all active:scale-95 shadow-2xl flex-shrink-0"
            >
              Get Started <ArrowRight className="w-4 h-4 text-indigo-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}