import React from 'react';
import { CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Hammer, Layers } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Smart Interiors for Modern Living',
    subtitle: 'Interior Design',
    description: 'We design functional and beautiful spaces for real life. We create layouts that maximize every square foot, focusing on lighting, materials, and flow.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Kitchen and wardrobe design',
      'Space optimization',
      '3D layout previews',
      'Home and office styling'
    ],
    icon: <Sparkles className="w-5 h-5 text-indigo-600" />
  },
  {
    id: '02',
    title: 'Reliable Construction and Foundations',
    subtitle: 'Construction',
    description: 'We manage residential and commercial projects with a focus on material quality, safety, and completing the work on time.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Full project management',
      'Top-quality materials',
      'Safety checks',
      'On-time completion'
    ],
    icon: <Hammer className="w-5 h-5 text-indigo-600" />
  },
  {
    id: '03',
    title: 'Complete Turnkey Services',
    subtitle: 'Turnkey Solutions',
    description: 'We handle everything from start to finish. You get a ready-to-move-in space without the stress of working with multiple contractors.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80',
    features: [
      'Construction and design together',
      'One point of contact',
      'No communication gaps',
      'Ready-to-use delivery'
    ],
    icon: <Layers className="w-5 h-5 text-indigo-600" />
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 md:py-40 bg-white text-stone-900 overflow-hidden font-[family-name:Inter,sans-serif] w-full flex justify-center"
    >
      {/* Subtle Background Glows */}
      <div className="absolute left-16 top-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-16 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative z-10 w-full max-w-8xl px-6 md:px-16 mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div className="max-w-4xl text-left">
            <span className="mb-4 block text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 font-[family-name:Inter,sans-serif]">
              What We Do
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-950 mb-6 font-[family-name:Inter,sans-serif] leading-[1.05]">
              Services We Provide
            </h2>
            <p className="text-sm md:text-base text-stone-600 leading-relaxed max-w-3xl">
              We create smart, sustainable spaces for living and working with our end-to-end capabilities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button 
              aria-label="Previous" 
              className="flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-950 hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              aria-label="Next" 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-stone-950 text-white hover:bg-stone-800 transition-all duration-300 shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Services Grid with Widened Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col bg-stone-50/50 border border-stone-200/80 backdrop-blur-sm rounded-3xl p-9 md:p-12 transition-all duration-500 hover:shadow-2xl hover:border-indigo-200 justify-between h-full"
            >
              <div>
                {/* ID Header Only - Logo/Icon Removed */}
                <div className="flex justify-between items-center mb-10">
                  <span className="text-4xl font-extrabold text-stone-300 font-[family-name:Inter,sans-serif]">
                    {service.id}
                  </span>
                </div>

                {/* Subtitle */}
                <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-600 uppercase mb-3 block font-[family-name:Inter,sans-serif]">
                  {service.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-stone-950 mb-6 leading-snug font-[family-name:Inter,sans-serif] group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-600 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3.5 border-t border-stone-200/60 pt-6 mt-auto">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-stone-700 text-xs font-medium leading-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Methodology Section --- */}
        <div className="border-t border-stone-100 pt-20 mb-28">
          <div className="text-left max-w-4xl mb-14">
            <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 mb-4 font-[family-name:Inter,sans-serif]">
              Methodology
            </span>
            <h3 className="text-3xl md:text-5xl font-bold text-stone-950 tracking-tight leading-none mb-5 font-[family-name:Inter,sans-serif]">
              How We Work With You
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed max-w-3xl">
              We believe in clear communication and complete transparency. This ensures your project is completed on time and meets high standards of execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'We listen to your ideas and discuss your budget and timeline.' },
              { step: '02', title: 'Planning', desc: 'Our team creates 3D views and structural plans.' },
              { step: '03', title: 'Execution', desc: 'We begin construction and interior setup with daily updates.' },
              { step: '04', title: 'Handover', desc: 'Final check and delivery of your beautiful space.' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-stone-50/50 border border-stone-200/60 hover:border-indigo-500 hover:bg-white transition-all duration-300"
              >
                <span className="text-[10px] text-stone-400 font-bold mb-6 block tracking-widest">{item.step}</span>
                <h4 className="text-base font-bold text-stone-950 font-[family-name:Inter,sans-serif] mb-3">
                  {item.title}
                </h4>
                <p className="text-[11px] text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Why Choose Us Section --- */}
        <div className="border-t border-stone-100 pt-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-2xl text-left">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 font-[family-name:Inter,sans-serif] mb-3 block">
                Why Choose Cube4Spaces
              </span>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-stone-950 mb-6 font-[family-name:Inter,sans-serif]">
                We Build Your Vision From The Ground Up
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-8 max-w-2xl">
                Our collaborative process ensures you stay updated at every stage, preventing miscommunication and cost overruns. We deliver premium material quality with flawless execution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl w-full">
              {[
                'On-time project delivery assurance',
                'Transparent pricing schedules',
                'Single-point-of-contact convenience',
                'Premium material procurement'
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center space-x-4 bg-stone-50 border border-stone-200/80 px-5 py-4 rounded-2xl hover:border-indigo-300 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span className="text-xs font-bold text-stone-800 tracking-wide leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}