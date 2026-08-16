import { useEffect, useRef } from "react";
import {
  ChevronRight,
  BookOpen,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";
import Lenis from "@studio-freight/lenis";
import { motion, useInView } from "framer-motion";

const blogs = [
  {
    category: "Design Tips",
    title: "5 Smart Storage Ideas for Small Apartments",
    description:
      "Short on space? You don't need a bigger home — just smarter storage. From under-bed drawers to floor-to-ceiling wardrobes, we share five practical ideas that can double your storage without making your home feel cramped. Perfect for 1BHK and 2BHK apartments.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Space Optimization", "Wardrobes", "Apartment"],
    readTime: "4 min read",
    date: "March 12, 2026",
  },
  {
    category: "Construction",
    title: "Construction vs. Interiors: Why One Team Saves You Time & Money",
    description:
      "Hiring separate teams for construction and interiors often leads to delays, miscommunication, and budget overruns. In this post, we explain why an integrated approach — one team handling both — is smarter, faster, and more cost-effective for your project.",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Turnkey", "Cost Efficiency", "Management"],
    readTime: "6 min read",
    date: "March 28, 2026",
  },
  {
    category: "Trends",
    title: "Top 6 Interior Design Trends for 2026",
    description:
      "What's shaping modern homes this year? Think warm neutrals, curved furniture, sustainable materials, and smart lighting. We break down the top trends you can actually use — without blowing your budget or chasing fads.",
    image:
      "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["2026 Trends", "Lighting", "Sustainability"],
    readTime: "5 min read",
    date: "April 02, 2026",
  },
  {
    category: "How-To",
    title: "Modular Kitchen vs. Traditional Kitchen – Which One Is Right?",
    description:
      "Modular kitchens offer speed and flexibility. Traditional kitchens offer durability and customization. Which one should you choose? We compare costs, maintenance, lifespan, and design options to help you decide based on your cooking habits and budget.",
    image:
      "https://images.pexels.com/photos/3797992/pexels-photo-3797992.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Kitchen", "Maintenance", "Comparison"],
    readTime: "7 min read",
    date: "April 15, 2026",
  },
  {
    category: "Project Spotlight",
    title: "Before & After: How We Transformed a 550 sq. ft Apartment",
    description:
      "A cramped 1BHK in Mumbai became a spacious, airy home — without moving a single wall. See how we used mirrored wardrobes, a foldable dining table, and smart lighting to completely transform the space. Photos included.",
    image:
      "https://images.pexels.com/photos/276722/pexels-photo-276722.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Transformation", "Mumbai", "Space Saving"],
    readTime: "4 min read",
    date: "April 22, 2026",
  },
  {
    category: "Commercial",
    title: "Designing a Productive Office: 4 Non-Negotiables",
    description:
      "A good office isn't just about desks and chairs. Lighting, acoustics, breakout areas, and smart storage matter just as much. We share four must-haves for any modern workspace — based on our experience designing coworking spaces and startup offices.",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Office", "Acoustics", "Coworking"],
    readTime: "5 min read",
    date: "May 01, 2026",
  },
];

const BlogCard = ({ blog, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl md:rounded-[2rem]"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100 md:h-60">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-transparent" />
        <span className="font-['Poppins',sans-serif] absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700 shadow-sm backdrop-blur-md md:left-5 md:top-5 md:px-4 md:py-2 md:text-xs md:tracking-[0.15em]">
          {blog.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-8">
        <div className="font-['Inter',sans-serif] mb-3 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 md:mb-4 md:gap-3 md:text-xs">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-indigo-500 md:h-4 md:w-4" />
            {blog.date}
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{blog.readTime}</span>
        </div>

        <h3 className="font-['Poppins',sans-serif] mb-2 text-lg font-bold leading-snug text-slate-950 transition-colors group-hover:text-indigo-600 md:mb-4 md:text-2xl">
          {blog.title}
        </h3>

        <p className="font-['Inter',sans-serif] mb-5 line-clamp-3 text-xs font-medium leading-relaxed text-slate-600 md:mb-7 md:text-sm md:leading-7">
          {blog.description}
        </p>

        <div className="mt-auto border-t border-slate-100 pt-4 md:pt-6">
          <div className="mb-4 flex flex-wrap gap-2 md:mb-6">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="font-['Poppins',sans-serif] rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-indigo-700 md:px-3 md:py-1.5 md:text-[10px] md:tracking-[0.15em]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="/journal"
            className="font-['Inter',sans-serif] inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-950 transition-colors hover:text-indigo-600 md:gap-2 md:text-xs md:tracking-[0.15em]"
          >
            Read Article
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 md:h-4 md:w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default function BlogSectionClassic() {
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

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  return (
    <section
      id="blog"
      className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-indigo-200/30 blur-[100px] md:h-[400px] md:w-[400px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-slate-200/40 blur-[100px] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="mb-8 grid gap-5 md:mb-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 shadow-sm md:mb-6 md:px-5 md:py-2.5">
              <BookOpen className="h-4 w-4 text-indigo-600" />
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-700 md:text-xs md:tracking-[0.2em]">
                The Journal / 2026
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] max-w-3xl text-3xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
              Design Insights for
              <span className="block text-indigo-600">Smarter Spaces.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-xs font-medium leading-relaxed text-slate-600 md:text-sm lg:text-base">
              Practical guidance on interiors, construction, material choices,
              space planning, and execution strategy for homeowners and
              business decision-makers.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
              {["Interiors", "Construction", "Execution"].map((item) => (
                <span
                  key={item}
                  className="font-['Poppins',sans-serif] rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-600 shadow-sm md:px-4 md:py-2 md:text-[10px] md:tracking-[0.15em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-6 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:mb-12 md:rounded-[2.5rem] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-auto lg:min-h-[440px]">
            <img
              src={featuredBlog.image}
              alt={featuredBlog.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950/50" />
            <span className="font-['Poppins',sans-serif] absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700 shadow-sm md:left-6 md:top-6 md:px-4 md:py-2 md:text-xs md:tracking-[0.15em]">
              Featured
            </span>
          </div>

          <div className="flex flex-col justify-between p-5 md:p-8 lg:p-12">
            <div>
              <div className="font-['Inter',sans-serif] mb-3 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 md:mb-5 md:gap-3 md:text-xs">
                <span className="text-indigo-600">{featuredBlog.category}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>{featuredBlog.date}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>{featuredBlog.readTime}</span>
              </div>

              <h3 className="font-['Poppins',sans-serif] text-2xl font-black leading-tight text-slate-950 md:text-3xl lg:text-4xl">
                {featuredBlog.title}
              </h3>

              <p className="font-['Inter',sans-serif] mt-3 text-xs font-medium leading-relaxed text-slate-600 md:mt-5 md:text-sm lg:text-base">
                {featuredBlog.description}
              </p>
            </div>

            <div className="mt-6 md:mt-10">
              <div className="mb-5 flex flex-wrap gap-2 md:mb-8">
                {featuredBlog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-['Poppins',sans-serif] rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-indigo-700 md:px-3 md:py-1.5 md:text-[10px] md:tracking-[0.15em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="/journal"
                className="font-['Inter',sans-serif] inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-indigo-700 active:scale-95 sm:w-auto md:rounded-full md:px-8 md:py-4 md:text-sm md:tracking-[0.1em]"
              >
                Read Featured Article
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:gap-7 lg:grid-cols-2 xl:grid-cols-3">
          {remainingBlogs.map((blog, idx) => (
            <BlogCard key={blog.title} blog={blog} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
}