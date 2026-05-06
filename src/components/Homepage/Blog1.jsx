import { useEffect, useRef } from 'react';
import { ExternalLink, ChevronRight, BookOpen } from 'lucide-react';
import Lenis from '@studio-freight/lenis';
import { motion, useInView } from 'framer-motion';

const blogs = [
  {
    category: "Design Tips",
    title: "5 Smart Storage Ideas for Small Apartments",
    description: "Short on space? You don't need a bigger home — just smarter storage. From under-bed drawers to floor-to-ceiling wardrobes, we share five practical ideas that can double your storage without making your home feel cramped. Perfect for 1BHK and 2BHK apartments.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Space Optimization", "Wardrobes", "Apartment"],
    readTime: "4 min read",
    date: "March 12, 2026",
  },
  {
    category: "Construction",
    title: "Construction vs. Interiors: Why One Team Saves You Time & Money",
    description: "Hiring separate teams for construction and interiors often leads to delays, miscommunication, and budget overruns. In this post, we explain why an integrated approach — one team handling both — is smarter, faster, and more cost-effective for your project.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Turnkey", "Cost Efficiency", "Management"],
    readTime: "6 min read",
    date: "March 28, 2026",
  },
  {
    category: "Trends",
    title: "Top 6 Interior Design Trends for 2026",
    description: "What's shaping modern homes this year? Think warm neutrals, curved furniture, sustainable materials, and smart lighting. We break down the top trends you can actually use — without blowing your budget or chasing fads.",
    image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["2026 Trends", "Lighting", "Sustainability"],
    readTime: "5 min read",
    date: "April 02, 2026",
  },
  {
    category: "How-To",
    title: "Modular Kitchen vs. Traditional Kitchen – Which One Is Right for You?",
    description: "Modular kitchens offer speed and flexibility. Traditional kitchens offer durability and customization. Which one should you choose? We compare costs, maintenance, lifespan, and design options to help you decide based on your cooking habits and budget.",
    image: "https://images.pexels.com/photos/3797992/pexels-photo-3797992.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Kitchen", "Maintenance", "Comparison"],
    readTime: "7 min read",
    date: "April 15, 2026",
  },
  {
    category: "Project Spotlight",
    title: "Before & After: How We Transformed a 550 sq. ft Apartment",
    description: "A cramped 1BHK in Mumbai became a spacious, airy home — without moving a single wall. See how we used mirrored wardrobes, a foldable dining table, and smart lighting to completely transform the space. Photos included.",
    image: "https://images.pexels.com/photos/276722/pexels-photo-276722.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Transformation", "Mumbai", "Space Saving"],
    readTime: "4 min read",
    date: "April 22, 2026",
  },
  {
    category: "Commercial",
    title: "Designing a Productive Office: 4 Non-Negotiables",
    description: "A good office isn't just about desks and chairs. Lighting, acoustics, breakout areas, and smart storage matter just as much. We share four must-haves for any modern workspace — based on our experience designing coworking spaces and startup offices.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Office", "Acoustics", "Coworking"],
    readTime: "5 min read",
    date: "May 01, 2026",
  },
];

const BlogCard = ({ blog, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group flex flex-col h-full bg-stone-50/50 border border-stone-200/80 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-indigo-400/50 p-8 md:p-10 justify-between"
    >
      <div>
        {/* Card Header Image */}
        <div className="h-64 overflow-hidden rounded-[1.5rem] mb-10 relative border border-stone-200/60 shadow-sm">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent"></div>
          <span className="absolute top-5 left-5 bg-white backdrop-blur-sm text-[9px] font-black uppercase tracking-widest text-indigo-600 px-4 py-1.5 rounded-full border border-stone-100 shadow-sm">
            {blog.category}
          </span>
        </div>

        {/* Card Content */}
        <div>
          <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.15em] text-stone-400 uppercase mb-5 font-[family-name:Inter,sans-serif]">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-extrabold text-stone-950 mb-5 leading-snug tracking-tight font-[family-name:Inter,sans-serif] group-hover:text-indigo-600 transition-colors">
            {blog.title}
          </h3>

          <p className="text-xs text-stone-600 leading-relaxed mb-8">
            {blog.description}
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-8 border-t border-stone-200/60 pt-6">
          {blog.tags.map((tag, tid) => (
            <span
              key={tid}
              className="text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="/journal"
          className="inline-flex items-center text-xs font-black tracking-widest uppercase text-stone-950 hover:text-indigo-600 transition-colors font-[family-name:Inter,sans-serif]"
        >
          Read Chapter <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default function BlogSectionClassic() {
  // Lenis smooth scrolling
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section id="blog" className="relative py-32 md:py-48 bg-white overflow-hidden font-[family-name:Inter,sans-serif] flex justify-center text-stone-900">
      
      {/* Subtle Background Gradient Effect */}
      <div className="absolute left-16 top-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-16 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-12 w-full">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="inline-flex items-center space-x-3 bg-indigo-50 px-6 py-2.5 rounded-full mb-8 border border-indigo-100 shadow-sm">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-600">
              The Journal / 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 mb-6 font-[family-name:Inter,sans-serif]">
            Our Latest <span className="font-serif italic font-normal text-indigo-600">Chapters</span>
          </h2>
          <p className="text-sm md:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">
            A curated selection of design perspectives, architecture advice, and construction insights written by the team.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-28">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} index={idx} />
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="relative z-20 w-full max-w-6xl mx-auto bg-stone-50 p-12 md:p-14 rounded-[2.5rem] border border-stone-200/80 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <h4 className="font-[family-name:Inter,sans-serif] font-extrabold text-2xl text-stone-950 mb-2 tracking-tight">
                Begin a Conversation
              </h4>
              <p className="text-stone-500 text-sm max-w-md leading-relaxed mx-auto lg:mx-0 font-[family-name:Inter,sans-serif]">
                Looking to build or redesign your space? Reach out for a free design consultation and budget blueprint.
              </p>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-4 px-8 py-4 bg-stone-950 text-white font-black text-xs tracking-wider rounded-full transition-all active:scale-95 shadow-2xl hover:bg-stone-800 no-underline"
            >
              Consult an Expert <ExternalLink className="w-4 h-4 text-indigo-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}