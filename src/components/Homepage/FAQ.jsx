import { useEffect, useState } from "react";
import { Plus, Minus, ArrowRight, ChevronRight } from "lucide-react";
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
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

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

  const handleCategoryChange = (index) => {
    setActiveCategory(index);
    setOpenIndex(0); // Reset accordion when switching categories
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentCategoryData = faqCategories[activeCategory];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24">
      {/* Subtle Background Accents */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-200/30 blur-[100px] md:h-[400px] md:w-[400px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[300px] w-[300px] rounded-full bg-slate-200/40 blur-[100px] md:h-[400px] md:w-[400px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="mb-10 max-w-3xl md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 shadow-sm md:mb-6 md:px-5 md:py-2.5">
   
            <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-700 md:text-xs md:tracking-[0.2em]">
              Help Center
            </span>
          </div>

          <h2 className="font-['Poppins',sans-serif] text-3xl font-black leading-[1.1] text-slate-950 md:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>

          <p className="font-['Inter',sans-serif] mt-4 max-w-xl text-sm font-medium leading-relaxed text-slate-600 md:mt-6 md:text-lg">
            Everything you need to know about our services, process, timelines, materials, and project execution.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] xl:gap-16">
          
          {/* Sidebar / Mobile Tabs */}
          <div className="lg:sticky lg:top-24">
            <div className="flex flex-row gap-2 overflow-x-auto pb-4 max-lg:[&::-webkit-scrollbar]:hidden lg:flex-col lg:gap-3 lg:pb-0">
              {faqCategories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryChange(idx)}
                  className={`font-['Poppins',sans-serif] flex w-max flex-shrink-0 items-center justify-between rounded-xl px-5 py-3 text-xs font-bold transition-all md:text-sm lg:w-full lg:px-6 lg:py-4 lg:text-base ${
                    activeCategory === idx
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "bg-white text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                >
                  {category.title}
                  <ChevronRight
                    className={`hidden h-4 w-4 transition-transform lg:block ${
                      activeCategory === idx ? "translate-x-1 text-white" : "text-transparent"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion Content */}
          <div className="flex min-h-[400px] flex-col gap-3 md:gap-4">
            <div className="mb-2 hidden lg:block">
              <h3 className="font-['Poppins',sans-serif] text-2xl font-bold text-slate-950">
                {currentCategoryData.title} FAQs
              </h3>
            </div>

            {currentCategoryData.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 md:rounded-[2rem] md:p-2 ${
                    isOpen
                      ? "border-indigo-200 bg-white shadow-md"
                      : "border-slate-200 bg-white shadow-sm hover:border-indigo-100"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="flex w-full items-center justify-between p-4 text-left md:p-6"
                  >
                    <span className="font-['Poppins',sans-serif] pr-4 text-sm font-bold leading-snug text-slate-950 md:pr-8 md:text-lg">
                      {faq.question}
                    </span>

                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 md:h-12 md:w-12 md:rounded-xl ${
                        isOpen
                          ? "border-indigo-100 bg-indigo-50 text-indigo-600"
                          : "border-slate-200 bg-slate-50 text-slate-500"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4 md:h-5 md:w-5" />
                      ) : (
                        <Plus className="h-4 w-4 md:h-5 md:w-5" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden px-4 transition-all duration-500 ease-in-out md:px-6 ${
                      isOpen
                        ? "max-h-[300px] pb-4 opacity-100 md:pb-6"
                        : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-slate-600 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Horizontal CTA Section */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-indigo-100 bg-indigo-50 p-6 shadow-sm md:mt-24 md:flex-row md:items-center md:rounded-[2.5rem] md:p-10 lg:p-14">
          <div>
            <h3 className="font-['Poppins',sans-serif] text-2xl font-black leading-tight text-slate-950 md:text-3xl lg:text-4xl">
              Still have questions?
            </h3>
            <p className="font-['Inter',sans-serif] mt-2 max-w-md text-sm font-medium leading-relaxed text-slate-600 md:mt-3 md:text-base">
              Talk to our team and get clear guidance for your space, budget, and project timeline.
            </p>
          </div>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-indigo-700 active:scale-95 sm:w-auto md:rounded-full md:px-10 md:py-4 md:text-base"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>
        
      </div>
    </section>
  );
}