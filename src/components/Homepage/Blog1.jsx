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
    title: "Modular Kitchen vs. Traditional Kitchen – Which One Is Right for You?",
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_24px_70px_rgba(37,99,235,0.14)]"
    >
      <div className="relative h-60 overflow-hidden bg-blue-50">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-md">
          {blog.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-blue-500" />
            {blog.date}
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{blog.readTime}</span>
        </div>

        <h3 className="mb-4 text-xl font-extrabold leading-snug tracking-[-0.025em] text-slate-950 transition-colors group-hover:text-blue-700 md:text-2xl">
          {blog.title}
        </h3>

        <p className="mb-7 line-clamp-4 text-sm font-medium leading-7 text-slate-600">
          {blog.description}
        </p>

        <div className="mt-auto">
          <div className="mb-6 flex flex-wrap gap-2 border-t border-blue-50 pt-5">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="/journal"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-slate-950 transition-colors hover:text-blue-700"
          >
            Read Article
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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

    return () => {
      lenis.destroy();
    };
  }, []);

  const featuredBlog = blogs[0];
  const remainingBlogs = blogs.slice(1);

  const headingFont =
    "font-[family-name:'Space_Grotesk','Plus_Jakarta_Sans',Inter,sans-serif]";

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#f4f8ff] py-24 font-[family-name:Inter,sans-serif] text-slate-950 md:py-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-2.5 shadow-sm">
              <BookOpen className="h-4 w-4 text-blue-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                The Journal / 2026
              </span>
            </div>

            <h2
              className={`${headingFont} max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-slate-950 md:text-5xl`}
            >
              Design Insights for
              <span className="block text-blue-700">Smarter Spaces.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm font-medium leading-7 text-slate-600 md:text-base">
              Practical guidance on interiors, construction, material choices,
              space planning, and execution strategy for homeowners and
              business decision-makers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Interiors", "Construction", "Execution"].map((item) => (
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

        {/* Featured Article */}
        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="mb-8 grid overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_30px_90px_rgba(37,99,235,0.12)] lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[470px]">
            <img
              src={featuredBlog.image}
              alt={featuredBlog.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-blue-950/45 lg:to-transparent" />

            <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              Featured
            </span>
          </div>

          <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                <span>{featuredBlog.category}</span>
                <span className="h-1 w-1 rounded-full bg-blue-300" />
                <span>{featuredBlog.date}</span>
                <span className="h-1 w-1 rounded-full bg-blue-300" />
                <span>{featuredBlog.readTime}</span>
              </div>

              <h3
                className={`${headingFont} max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl`}
              >
                {featuredBlog.title}
              </h3>

              <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-slate-600 md:text-base">
                {featuredBlog.description}
              </p>
            </div>

            <div className="mt-10">
              <div className="mb-7 flex flex-wrap gap-2">
                {featuredBlog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="/journal"
                className="inline-flex items-center gap-4 rounded-full bg-blue-700 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-700/20 transition-all hover:bg-blue-800"
              >
                Read Featured Article
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {remainingBlogs.map((blog, idx) => (
            <BlogCard key={blog.title} blog={blog} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}