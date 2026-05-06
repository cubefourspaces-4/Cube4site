import { useEffect, useRef } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Priya Mehta",
    company: "Whitefield, Bangalore",
    role: "3BHK Apartment Interiors",
    content:
      "We wanted a modern, clutter-free home — and Cube4Spaces delivered exactly that. The modular kitchen and wardrobes are high quality, and the team was always available to answer questions. They finished on time and within budget. Would definitely recommend.",
    rating: 5,
  },
  {
    name: "Aditya Soman",
    company: "Andheri, Mumbai",
    role: "2BHK Apartment Interiors",
    content:
      "I was nervous about hiring an interior designer for my small 2BHK. But Cube4Spaces understood my space constraints perfectly. They suggested smart storage solutions and gave me a beautiful 3D design before starting. The final result exceeded my expectations. Thank you!",
    rating: 5,
  },
  {
    name: "Neha Reddy",
    company: "Hitech City, Hyderabad",
    role: "Founder, Innovate Works",
    content:
      "Cube4Spaces designed our coworking office from scratch. They understood our brand vibe and created a space that's both productive and relaxing. The team was professional, punctual, and transparent about costs. Our members love the new space. Highly recommended for commercial projects.",
    rating: 5,
  },
  {
    name: "Rajesh Iyer",
    company: "Hinjewadi, Pune",
    role: "Complete Home Turnkey (2BHK Villa)",
    content:
      "This was our first home, and we didn't know where to start. Cube4Spaces handled everything — from construction to furniture to final decor. We didn't have to deal with multiple vendors or chase anyone. The quality is excellent, and we moved in exactly when they promised. Best decision we made.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    company: "Indiranagar, Bangalore",
    role: "Modular Kitchen Only",
    content:
      "We only needed a modular kitchen, not a full interior. Cube4Spaces didn't push us to do more. They designed a beautiful kitchen with soft-close drawers and a tall unit. Installation was clean and fast. One small delay in material delivery, but they communicated well. Happy overall.",
    rating: 4.5,
  },
  {
    name: "Karthik Nair",
    company: "T Nagar, Chennai",
    role: "Owner, Tangerine Boutique",
    content:
      "Cube4Spaces designed our women's clothing boutique on a tight budget. They created an elegant, Instagram-worthy space without overspending. The display racks, lighting, and trial rooms are perfect. Our customers constantly compliment the store. Great value for money.",
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-stone-50/50 border border-stone-200/80 rounded-[2.5rem] p-10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-indigo-400/50 w-full max-w-lg mx-auto h-full flex flex-col justify-between"
    >
      <div className="absolute top-8 right-8 text-stone-200 group-hover:text-indigo-500/5 transition-colors">
        <Quote className="w-20 h-20" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-1 mb-6">
            {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-indigo-600 fill-current" />
            ))}
            {testimonial.rating % 1 !== 0 && (
              <Star className="w-4 h-4 text-indigo-600 fill-half" />
            )}
          </div>

          <p className="text-xs text-stone-600 leading-relaxed mb-8">
            "{testimonial.content}"
          </p>
        </div>

        <div className="flex items-center border-t border-stone-200/60 pt-6 mt-auto">
          <div>
            <h4 className="text-sm font-extrabold text-stone-950 mb-1.5 font-[family-name:Inter,sans-serif]">
              {testimonial.name}
            </h4>
            <p className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
              {testimonial.role} • <span className="text-indigo-600">{testimonial.company}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
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

  return (
    <section className="py-32 md:py-48 bg-white text-stone-900 relative overflow-hidden font-[family-name:Inter,sans-serif] flex justify-center">
      {/* Subtle Background Accent Gradient */}
      <div className="absolute left-16 top-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-16 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 w-full">
        
        {/* Header */}
        <div className="text-center mb-20 md:mb-28 max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-3 bg-indigo-50 px-6 py-2.5 rounded-full mb-8 border border-indigo-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-600">
              Assistance Center
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 mb-6 leading-none">
            What Our <span className="font-serif italic font-normal text-indigo-600">Clients Say</span>
          </h2>
          <p className="text-sm md:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from the businesses and homeowners we've helped transform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {testimonials.map((t, i) => (
            <TestimonialCard key={`testimonial-${i}`} testimonial={t} index={i} />
          ))}
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 bg-stone-50/60 backdrop-blur-sm border border-stone-200/80 rounded-[2.5rem] p-12 md:p-14">
          <div className="flex flex-col items-center justify-center p-4 text-center border-r border-stone-100">
            <span className="text-indigo-600 font-black text-3xl md:text-5xl mb-2 font-[family-name:Inter,sans-serif]">4.9/5</span>
            <span className="text-[9px] font-extrabold tracking-widest uppercase text-stone-500 font-[family-name:Inter,sans-serif]">Average Rating</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center lg:border-r border-stone-100">
            <span className="text-indigo-600 font-black text-3xl md:text-5xl mb-2 font-[family-name:Inter,sans-serif]">50+</span>
            <span className="text-[9px] font-extrabold tracking-widest uppercase text-stone-500 font-[family-name:Inter,sans-serif]">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center border-r border-stone-100">
            <span className="text-indigo-600 font-black text-3xl md:text-5xl mb-2 font-[family-name:Inter,sans-serif]">8+</span>
            <span className="text-[9px] font-extrabold tracking-widest uppercase text-stone-500 font-[family-name:Inter,sans-serif]">Cities Served</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-indigo-600 font-black text-3xl md:text-5xl mb-2 font-[family-name:Inter,sans-serif]">98%</span>
            <span className="text-[9px] font-extrabold tracking-widest uppercase text-stone-500 font-[family-name:Inter,sans-serif]">Satisfaction Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}