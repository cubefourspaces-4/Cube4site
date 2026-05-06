import { ChevronRight, ArrowLeft, ArrowRight, Eye, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

// Import local images from assets
import project1 from '../../assests/gallery/gallery1.webp';
import project2 from '../../assests/gallery/gallery1.webp';
import project3 from '../../assests/gallery/gallery1.webp';
import project4 from '../../assests/gallery/gallery1.webp';
import project5 from '../../assests/gallery/gallery1.webp';
import project6 from '../../assests/gallery/gallery1.webp';
import project7 from '../../assests/gallery/gallery1.webp';
import project8 from '../../assests/gallery/gallery1.webp';
import project9 from '../../assests/gallery/gallery1.webp';
import project10 from '../../assests/gallery/gallery1.webp';

const projects = [
  {
    title: 'Modern 3BHK Apartment – Whitefield, Bangalore',
    category: 'Residential',
    description: 'A complete interior design project featuring a modular kitchen, floor-to-ceiling wardrobes, and warm lighting. The family wanted a clutter-free, modern look — we delivered smart storage solutions without compromising on style.',
    timeline: 'Completed in 6 weeks',
    img: project1, // Local image
    likes: 342,
    views: 890
  },
  {
    title: 'Modern Office Interior – Coworking Space, Hyderabad',
    category: 'Commercial',
    description: 'A 2,500 sq. ft coworking office requiring open work zones, private cabins, and breakout areas. We handled everything from layout planning and furniture to acoustics and branding elements.',
    timeline: 'Completed in 8 weeks',
    img: project2, // Local image
    likes: 280,
    views: 741
  },
  {
    title: 'Complete Home Turnkey – 2BHK Villa, Pune',
    category: 'Turnkey',
    description: 'From ground-up construction to fully furnished interiors — this was a full turnkey project. We managed civil work, flooring, plumbing, electricals, modular kitchen, wardrobes, furniture, and decor.',
    timeline: 'Completed in 5 months',
    img: project3, // Local image
    likes: 412,
    views: 1250
  },
  {
    title: 'Smart 1BHK Transformation – Mumbai',
    category: 'Residential',
    description: 'A compact 550 sq. ft apartment needed maximum storage without feeling crowded. We designed multi-functional furniture, wall-mounted units, and a space-saving modular kitchen.',
    timeline: 'Completed in 5 weeks',
    img: project4, // Local image
    likes: 198,
    views: 520
  },
  {
    title: 'Boutique Store Interior – Chennai',
    category: 'Commercial',
    description: "A women's clothing boutique needing an elegant, Instagram-worthy interior. We designed display racks, a trial room, a billing counter, and a small seating area.",
    timeline: 'Completed in 4 weeks',
    img: project5, // Local image
    likes: 154,
    views: 410
  },
  {
    title: 'Startup Office Turnkey – Gurugram',
    category: 'Turnkey',
    description: 'A 1,200 sq. ft office requiring minor construction changes + full interiors. We handled partition walls, flooring, false ceilings, workstations, cabins, pantry, and branding.',
    timeline: 'Completed in 6 weeks',
    img: project6, // Local image
    likes: 305,
    views: 920
  },
  {
    title: 'Luxury Penthouse Design – Bangalore',
    category: 'Residential',
    description: 'A spacious, luxurious penthouse featuring high-end Italian marble flooring, designer false ceilings, and a smart home automation system.',
    timeline: 'Completed in 12 weeks',
    img: project7, // Local image
    likes: 512,
    views: 1950
  },
  {
    title: 'Minimalist Cafe Interior – Pune',
    category: 'Commercial',
    description: 'A cozy minimalist cafe with warm wooden textures and pendant lighting, designed to provide customers with an inviting and cozy atmosphere.',
    timeline: 'Completed in 7 weeks',
    img: project8, // Local image
    likes: 318,
    views: 899
  },
  {
    title: 'Cozy Guest House Renovation – Goa',
    category: 'Turnkey',
    description: 'A complete renovation of a coastal guest house, converting old, traditional rooms into bright, breezy seaside retreats.',
    timeline: 'Completed in 4 months',
    img: project9, // Local image
    likes: 489,
    views: 1420
  },
  {
    title: 'Contemporary Art Studio – Delhi',
    category: 'Commercial',
    description: 'A modern, open-space art studio with high ceilings, crisp white walls, and industrial track lighting designed to inspire creativity.',
    timeline: 'Completed in 5 weeks',
    img: project10, // Local image
    likes: 245,
    views: 675
  }
];

export default function Work() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  return (
    <section id="work" className="relative py-32 md:py-40 bg-white overflow-hidden font-sans text-stone-700 min-h-screen flex justify-center">
      {/* Subtle Ambient Background Glows */}
      <div
        className="absolute w-96 h-96 bg-indigo-100 rounded-full blur-[120px] pointer-events-none transition-transform duration-500"
        style={{ transform: `translate(${cursorPos.x * 0.015}px, ${cursorPos.y * 0.015}px)` }}
      />
      <div
        className="absolute w-80 h-80 bg-sky-100 rounded-full blur-[120px] pointer-events-none transition-transform duration-500"
        style={{ transform: `translate(${cursorPos.x * -0.015}px, ${cursorPos.y * -0.015}px)` }}
      />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28 max-w-5xl mx-auto">
          <div className="inline-block px-5 py-2 mb-8 bg-indigo-50 border border-indigo-100 rounded-full">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-indigo-600">
              Our Methodology & Works
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 mb-6 font-[family-name:Inter,sans-serif] leading-tight">
            Modern Spaces & <span className="font-serif italic font-normal text-indigo-600">Precise Execution.</span>
          </h2>
          <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed font-[family-name:Inter,sans-serif]">
            Browse our curated, high-impact projects designed and built to stand the test of time. 
            From luxury residences to functional commercial hubs, each design system is tailored to your vision.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {['All', 'Residential', 'Commercial', 'Turnkey'].map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentIndex(0); }}
              className={`px-8 py-3.5 text-[10px] font-extrabold tracking-[0.2em] uppercase rounded-full transition-all duration-500 border font-[family-name:Inter,sans-serif]
              ${
                activeCategory === cat
                  ? 'bg-stone-950 text-white border-stone-950 shadow-2xl'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:text-stone-950'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* UI Gallery Feature Container */}
        <div className="relative flex flex-col items-center w-full max-w-7xl mx-auto mb-16 px-4">
          
          {/* Header Action For Gallery Slider */}
          <div className="flex items-center justify-between w-full mb-12">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-indigo-600 font-[family-name:Inter,sans-serif]">
              Selected Projects
            </span>
            <div className="flex items-center gap-4">
              <button 
                onClick={prevSlide}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-950 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextSlide}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-stone-950 text-white hover:bg-stone-800 transition-all duration-300 shadow-md"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Gallery Display */}
          <div className="relative flex items-center justify-center gap-8 w-full min-h-[560px] sm:min-h-[620px] py-6 overflow-hidden">
            {filteredProjects.map((project, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
              const isNext = index === (currentIndex + 1) % filteredProjects.length;
              
              let positionClass = "opacity-0 scale-90 translate-x-32 invisible";
              if (isActive) {
                positionClass = "opacity-100 scale-100 z-30 translate-x-0 ring-4 ring-indigo-50 shadow-[0_30px_60px_rgba(0,0,0,0.1)]";
              } else if (isPrev) {
                positionClass = "opacity-20 scale-75 -translate-x-40 md:-translate-x-64 z-10 blur-xs max-md:hidden";
              } else if (isNext) {
                positionClass = "opacity-20 scale-75 translate-x-40 md:translate-x-64 z-10 blur-xs max-md:hidden";
              }

              return (
                <div 
                  key={index}
                  className={`absolute w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] aspect-[4/5] bg-white border border-stone-100 backdrop-blur-sm rounded-[2.5rem] transition-all duration-700 ease-in-out p-8 flex flex-col justify-between ${positionClass}`}
                >
                  {/* Card Image Section */}
                  <div className="relative w-full h-[45%] rounded-[1.5rem] overflow-hidden shadow-sm border border-stone-100">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent" />
                    
                    {/* Metrics Floating Container */}
                    <div className="absolute bottom-4 left-5 flex items-center gap-5 text-white">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold">
                        <Eye className="w-3.5 h-3.5 text-indigo-300" /> {project.views}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold">
                        <Heart className="w-3.5 h-3.5 text-rose-300" /> {project.likes}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Text Area */}
                  <div className="flex flex-col h-[45%] justify-between mt-8">
                    <div>
                      <span className="text-[9px] font-black tracking-[0.2em] text-indigo-600 uppercase mb-3 block font-[family-name:Inter,sans-serif]">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-extrabold text-stone-950 mb-3 leading-snug line-clamp-2 font-[family-name:Inter,sans-serif]">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-stone-600 leading-relaxed line-clamp-3 font-[family-name:Inter,sans-serif]">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-stone-100">
                      <span className="text-[9px] font-bold tracking-widest text-stone-500 bg-stone-50 px-3.5 py-1.5 rounded-full font-[family-name:Inter,sans-serif]">
                        {project.timeline}
                      </span>
                      <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                        className="text-[10px] font-black text-indigo-600 flex items-center hover:text-indigo-500 transition-colors font-[family-name:Inter,sans-serif]"
                      >
                        Details <ChevronRight className="ml-1 w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto mt-32 bg-stone-50 backdrop-blur-sm border border-stone-100 rounded-[2.5rem] p-12 md:p-14">
          <div className="flex flex-col items-center justify-center p-4 text-center border-r border-stone-100">
            <span className="text-indigo-600 font-black text-3xl md:text-5xl mb-2 font-[family-name:Inter,sans-serif]">50+</span>
            <span className="text-[9px] font-extrabold tracking-widest uppercase text-stone-500 font-[family-name:Inter,sans-serif]">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center lg:border-r border-stone-100">
            <span className="text-indigo-600 font-black text-3xl md:text-5xl mb-2 font-[family-name:Inter,sans-serif]">45+</span>
            <span className="text-[9px] font-extrabold tracking-widest uppercase text-stone-500 font-[family-name:Inter,sans-serif]">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center border-r border-stone-100">
            <span className="text-indigo-600 font-black text-3xl md:text-5xl mb-2 font-[family-name:Inter,sans-serif]">8+</span>
            <span className="text-[9px] font-extrabold tracking-widest uppercase text-stone-500 font-[family-name:Inter,sans-serif]">Cities Served</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-indigo-600 font-black text-3xl md:text-5xl mb-2 font-[family-name:Inter,sans-serif]">98%</span>
            <span className="text-[9px] font-extrabold tracking-widest uppercase text-stone-500 font-[family-name:Inter,sans-serif]">On-Time Delivery</span>
          </div>
        </div>

        {/* Action Call Section */}
        <div className="text-center mt-32 border-t border-stone-100 pt-20 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-950 mb-5 font-[family-name:Inter,sans-serif]">
            Have a project in mind?
          </h3>
          <p className="text-xs md:text-sm text-stone-600 leading-relaxed mb-10 font-[family-name:Inter,sans-serif]">
            See something you like — or want something completely different? Share your ideas with us. We'll give you a free consultation and a transparent quote.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="group px-10 py-4 bg-stone-950 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-2xl active:scale-95 transition-all duration-300 hover:bg-stone-800 font-[family-name:Inter,sans-serif]"
          >
            Request a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}