import { useEffect, useState } from "react";
import { Plus, Minus, Sparkles, } from "lucide-react";
import Lenis from "@studio-freight/lenis";


const faqCategories = [
  {
    title: "Category 1: General",
    faqs: [
      {
        question: "Q1. What makes Cube4Spaces different from other construction or interior companies?",
        answer: "Most companies specialize in either construction or interiors — not both. Cube4Spaces does both under one roof. That means you don't have to coordinate between separate teams, deal with miscommunication, or manage conflicting timelines. We give you a single point of contact, a single budget, and complete accountability from foundation to finishing."
      },
      {
        question: "Q2. Do you handle both residential and commercial projects?",
        answer: "Yes. We work on homes (apartments, villas, independent houses) as well as commercial spaces (offices, coworking spaces, retail stores, boutiques, and restaurants). The process and quality remain the same — only the design changes to suit your needs."
      }
    ]
  },
  {
    title: "Category 2: Construction",
    faqs: [
      {
        question: "Q3. Do you only do interiors, or full construction as well?",
        answer: "We do both. You can hire us only for interiors (if your structure is already built), only for construction (if you need the shell ready), or for a complete turnkey solution (construction + interiors together). We recommend the last option for the smoothest experience."
      },
      {
        question: "Q4. How do you ensure construction quality?",
        answer: "We use only high-quality, branded materials for civil work, plumbing, electricals, and finishing. Our project managers conduct regular site inspections and quality checks at every stage. You also get progress updates with photos, and you're welcome to visit the site anytime."
      }
    ]
  },
  {
    title: "Category 3: Interiors",
    faqs: [
      {
        question: "Q5. Do you provide 3D designs before starting interiors?",
        answer: "Absolutely. Before we begin any interior work, we create detailed 2D layout plans and 3D visualizations. You'll see exactly how your modular kitchen, wardrobes, furniture, lighting, and overall space will look. We make changes based on your feedback until you're 100% happy."
      },
      {
        question: "Q6. What is included in your interior design service?",
        answer: "Our interior service includes space planning, modular kitchen, wardrobes, false ceilings, lighting design, furniture, flooring selection, wall finishes, and decor. In short — everything inside your home or office. We also offer partial interiors if you only need specific rooms done."
      }
    ]
  },
  {
    title: "Category 4: Process",
    faqs: [
      {
        question: "Q7. How long does a typical project take?",
        answer: "It depends on the scope:\n- Only interiors (2-3 BHK home): 4–8 weeks\n- Only interiors (office up to 1,500 sq. ft): 5–7 weeks\n- Construction + interiors (turnkey home): 4–6 months\n- Construction only (shell): 3–5 months\nWe give you a clear timeline before signing the agreement and stick to it as much as possible."
      },
      {
        question: "Q8. What is your process? How do we start?",
        answer: "We follow a simple 4-step process:\n1. Consult – Free discussion + site visit + budget estimate\n2. Design – 2D layouts + 3D visuals + material selection + final quote\n3. Build – Execution with regular updates and quality checks\n4. Finish – Final walkthrough + handover + post-support\nYou can start by filling out the contact form or giving us a call."
      }
    ]
  },
  {
    title: "Category 5: Budget & Timeline",
    faqs: [
      {
        question: "Q9. How much does a project cost? Can you give a rough estimate?",
        answer: "Costs vary based on project size, materials, design complexity, and location. As a very rough guide:\n- Basic interior (2BHK): ₹3–5 lakhs\n- Premium interior (2BHK): ₹6–10 lakhs\n- Construction only (1,000 sq. ft shell): ₹12–18 lakhs\n- Turnkey (construction + interiors): ₹20–35 lakhs\nWe provide a detailed, transparent quote after the site visit and design discussion — with no hidden charges."
      },
      {
        question: "Q10. Do you provide a written contract and warranty?",
        answer: "Yes. Every project comes with a detailed written agreement covering scope, timeline, payment schedule, materials, and terms. We also offer a warranty on our work — typically 1 year on interiors and 3–5 years on construction (structural). Specifics are mentioned in the contract."
      },
      {
        question: "Q11. What payment terms do you follow?",
        answer: "We follow a milestone-based payment plan — not a lump sum upfront. For example:\n- 20% advance on booking\n- 30% after design approval\n- 30% after 50% execution\n- 20% on final handover\nExact terms are shared in the agreement. No hidden fees or surprises."
      }
    ]
  },
  {
    title: "Category 6: Materials & Customization",
    faqs: [
      {
        question: "Q12. Can I choose my own materials (tiles, wood, paint, etc.)?",
        answer: "Yes. We recommend materials based on quality and budget, but the final choice is always yours. You can pick from our vendor partners or source your own — we'll work with whatever you choose. We never force a brand or supplier."
      },
      {
        question: "Q13. Do you offer modular kitchens and wardrobes?",
        answer: "Yes — that's one of our core services. We design and install modular kitchens with soft-close drawers, bottle pull-outs, tall units, and chimney provisions. Wardrobes come with multiple storage options, shutters (laminate, acrylic, glass, or wood), and internal accessories. All made to measure for your space."
      }
    ]
  }
];

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState(0);
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
              Assistance Center
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 mb-6 leading-none">
            Frequently Asked <span className="font-serif italic font-normal text-indigo-600">Questions</span>
          </h2>
          <p className="text-sm md:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Got questions? We've got answers. Can't find what you're looking for? Contact us anytime.
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
                        <span className="text-base md:text-lg font-extrabold text-stone-950 pr-8 leading-snug">
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
                          isOpen ? "max-h-[300px] opacity-100 scale-100 mt-6" : "max-h-0 opacity-0 scale-95"
                        }`}
                      >
                        <p className="pb-4 text-sm text-stone-600 leading-relaxed whitespace-pre-line">
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
          <h3 className="text-2xl md:text-4xl font-extrabold text-stone-950 mb-5 tracking-tight">
            Still have questions?
          </h3>
          <p className="text-xs md:text-sm text-stone-500 mb-10 max-w-md mx-auto leading-relaxed">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-9 py-4 bg-stone-950 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 hover:bg-stone-800 active:scale-95"
          >
            Contact Us
          </button>
        </div>
        
      </div>
    </section>
  );
}