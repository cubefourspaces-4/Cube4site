import { useEffect, useState } from "react";
import { Plus, Minus, Sparkles } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const faqCategories = [
  {
    title: "General",
    faqs: [
      {
        question: "What makes Cube4Spaces different?",
        answer:
          "Cube4Spaces provides design, construction, and interiors under one roof. You get one team, one timeline, and clear accountability from planning to final handover.",
      },
      {
        question: "Do you handle residential and commercial projects?",
        answer:
          "Yes. We work on apartments, villas, independent homes, offices, retail stores, boutiques, restaurants, and other commercial spaces.",
      },
    ],
  },
  {
    title: "Construction",
    faqs: [
      {
        question: "Do you provide full construction services?",
        answer:
          "Yes. We handle construction, interiors, and complete turnkey projects. You can choose only construction, only interiors, or a complete design-to-handover solution.",
      },
      {
        question: "How do you maintain construction quality?",
        answer:
          "We follow planned supervision, quality material selection, regular site checks, and stage-wise progress updates to maintain execution standards.",
      },
    ],
  },
  {
    title: "Interiors",
    faqs: [
      {
        question: "Do you provide 3D designs before execution?",
        answer:
          "Yes. We provide layout planning and 3D design views before execution so you can review the design clearly before work begins.",
      },
      {
        question: "What is included in your interior service?",
        answer:
          "Our interior service includes space planning, modular kitchen, wardrobes, false ceiling, lighting, furniture, finishes, and styling support.",
      },
    ],
  },
  {
    title: "Process",
    faqs: [
      {
        question: "How long does a typical project take?",
        answer:
          "Timelines depend on scope. Standard home interiors usually take 4 to 8 weeks. Larger construction or turnkey projects may take 3 to 6 months.",
      },
      {
        question: "How do we start the project?",
        answer:
          "The process starts with a consultation. We understand your requirement, review the space, prepare a design direction, share an estimate, and then begin execution after approval.",
      },
    ],
  },
  {
    title: "Budget & Timeline",
    faqs: [
      {
        question: "How much does a project cost?",
        answer:
          "Cost depends on area, materials, design scope, and project complexity. We provide a clear estimate after understanding your requirement and site condition.",
      },
      {
        question: "Do you provide a written agreement?",
        answer:
          "Yes. Every project includes a written scope, timeline, payment schedule, material details, and agreed terms.",
      },
      {
        question: "What payment terms do you follow?",
        answer:
          "We follow milestone-based payments linked to project progress. The exact payment schedule is shared clearly before execution begins.",
      },
    ],
  },
  {
    title: "Materials & Customization",
    faqs: [
      {
        question: "Can I choose my own materials?",
        answer:
          "Yes. We recommend suitable materials based on usage, quality, and budget, but the final selection is always made with your approval.",
      },
      {
        question: "Do you offer modular kitchens and wardrobes?",
        answer:
          "Yes. We design and install modular kitchens, wardrobes, storage units, and custom furniture based on your space and requirement.",
      },
    ],
  },
];

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const headingFont =
    "font-[family-name:Sora,Plus_Jakarta_Sans,Inter,sans-serif] font-extrabold tracking-[-0.055em]";

  // Lenis smooth scrolling integration
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const toggleFAQ = (catIdx, index) => {
    if (openCategory === catIdx && openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenCategory(catIdx);
      setOpenIndex(index);
    }
  };

  return (
    <section className="relative py-32 md:py-48 bg-white text-stone-900 overflow-hidden font-[family-name:Inter,sans-serif] flex justify-center">
      {/* Subtle Background Accent Gradient */}
      <div className="absolute left-16 top-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-16 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 w-full">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center space-x-3 bg-indigo-50 px-6 py-2.5 rounded-full mb-8 border border-indigo-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-indigo-600">
              Help Center
            </span>
          </div>

          <h2
            className={`text-5xl md:text-6xl lg:text-7xl text-stone-950 mb-6 leading-[0.98] ${headingFont}`}
          >
            Frequently Asked{" "}
            <span className="text-indigo-600">Questions</span>
          </h2>

          <p className="text-sm md:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Clear answers about our services, process, timelines, materials,
            budget, and project handover.
          </p>
        </div>

        {/* FAQ Categories & List */}
        <div className="max-w-6xl mx-auto">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-20">
              <h3 className="text-[11px] font-black tracking-[0.25em] text-indigo-600 uppercase mb-8">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.faqs.map((faq, idx) => {
                  const isOpen = openCategory === catIdx && openIndex === idx;

                  return (
                    <div
                      key={idx}
                      className="bg-stone-50/50 border border-stone-200/80 rounded-[2.5rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-indigo-400/50 p-4 md:p-6"
                    >
                      <button
                        onClick={() => toggleFAQ(catIdx, idx)}
                        className="w-full px-4 py-4 flex items-center justify-between text-left"
                      >
                        <span className="text-base md:text-xl font-extrabold text-stone-950 pr-8 leading-snug tracking-[-0.02em]">
                          {faq.question}
                        </span>

                        <div className="flex-shrink-0 w-11 h-11 bg-white border border-stone-200 rounded-2xl flex items-center justify-center shadow-sm">
                          {isOpen ? (
                            <Minus className="w-4 h-4 text-stone-950" />
                          ) : (
                            <Plus className="w-4 h-4 text-stone-950" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`transition-all duration-500 ease-in-out px-4 overflow-hidden bg-transparent ${
                          isOpen
                            ? "max-h-[300px] opacity-100 scale-100 mt-6"
                            : "max-h-0 opacity-0 scale-95"
                        }`}
                      >
                        <p className="pb-4 text-sm md:text-base text-stone-600 leading-relaxed whitespace-pre-line font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-12 py-20 mt-32 bg-stone-50 rounded-[2.5rem] border border-stone-200/80 shadow-xl">
          <h3
            className={`text-3xl md:text-5xl text-stone-950 mb-5 leading-tight ${headingFont}`}
          >
            Still have questions?
          </h3>

          <p className="text-sm md:text-base text-stone-500 mb-10 max-w-md mx-auto leading-relaxed font-medium">
            Talk to our team and get clear guidance for your space, budget, and
            project timeline.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-9 py-4 bg-stone-950 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 hover:bg-stone-800 active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}