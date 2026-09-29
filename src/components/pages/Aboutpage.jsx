import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, ChevronDown, 
  X, Building2, Home, Briefcase, Users, ShieldCheck, 
  Layers, MessageSquare, Star, Check,
  ChevronRight
} from 'lucide-react';

const KineticBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-white">
      {/* Soft color washes for minimal contrast depth */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-none bg-blue-50/50" />
      <div className="absolute top-[40%] -right-[15%] w-[45vw] h-[45vw] rounded-none bg-slate-100/60" />
      <div className="absolute -bottom-[10%] left-[20%] w-[50vw] h-[50vw] rounded-none bg-indigo-50/40" />

      {/* Floating Blueprint SVG Polygons & Geometric Accents without strokes */}
      <svg className="absolute w-full h-full inset-0 opacity-[0.03] text-blue-900" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,50 160,150 40,150" fill="currentColor" />
        <rect x="80%" y="20%" width="120" height="120" fill="currentColor" transform="rotate(25 800 200)" />
        <circle cx="15%" cy="70%" r="80" fill="currentColor" />
      </svg>
    </div>
  );
};

const AnimatedStatCard = ({ value, label, subtitle, icon: Icon }) => {
  return (
    <div className="group relative p-8 rounded-none bg-slate-50 hover:bg-slate-100 transition-colors duration-300 overflow-hidden">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 rounded-none bg-blue-600 text-white flex items-center justify-center transition-colors">
          <Icon className="w-7 h-7" />
        </div>
        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-none">
          Verified
        </span>
      </div>
      <div className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
        {value}
      </div>
      <div className="font-poppins font-bold text-slate-800 text-lg mt-2">
        {label}
      </div>
      {subtitle && (
        <p className="font-inter text-xs text-slate-500 mt-1 font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Inject Poppins & Inter Fonts dynamically
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stepsData = [
    {
      stepNum: "01",
      badge: "Step 1",
      title: "Consult (Understand & Plan)",
      subtitle: "We sit with you and understand your needs, budget, and timeline.",
      bullets: ["Free consultation", "Site visit and measurements", "Discuss budget and timeline"]
    },
    {
      stepNum: "02",
      badge: "Step 2",
      title: "Design (Create & Visualize)",
      subtitle: "We turn your ideas into clear designs with material selection and visuals.",
      bullets: ["2D floor layouts", "3D realistic visuals", "Final material selection and quote"]
    },
    {
      stepNum: "03",
      badge: "Step 3",
      title: "Build (Execute & Construct)",
      subtitle: "Actual work begins with strict quality checks and experienced site management.",
      bullets: ["Dedicated project manager", "Regular progress tracking", "Quality and structural checks"]
    },
    {
      stepNum: "04",
      badge: "Step 4",
      title: "Handover (Deliver & Finish)",
      subtitle: "We complete the final touches and hand over the keys with support after the project.",
      bullets: ["Final walkthrough and review", "Fix small issues and deep clean", "Keys handed over"]
    }
  ];

  const faqData = [
    {
      q: "What makes Cube4Spaces different?",
      a: "We provide design, construction, and interiors under one roof. You get one team, one timeline, and clear responsibility from planning to final handover."
    },
    {
      q: "Do you handle residential and commercial projects?",
      a: "Yes. We work on apartments, villas, independent homes, offices, retail stores, boutiques, restaurants, and other commercial spaces."
    },
    {
      q: "Which cities do you serve?",
      a: "We mainly serve Coimbatore and Tamil Nadu. We also take projects in Bangalore, Mumbai, Pune, and Hyderabad."
    },
    {
      q: "How long does a project take?",
      a: "It depends on the size and scope. A small home interior may take 5–6 weeks. A full home or office project may take 3–6 months. We give you a clear timeline before starting."
    },
    {
      q: "Do you provide 3D designs?",
      a: "Yes. We provide 2D floor layouts and 3D realistic visuals so you can see how your space will look before work begins."
    },
    {
      q: "Is the consultation free?",
      a: "Yes. The first consultation is free. We visit your site, take measurements, and discuss your budget and timeline."
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsConsultModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      
      <style>{`
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Kinetic Background */}
      <KineticBackground />

      {/* Main Container Wrapper */}
      <main className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-[1700px] mx-auto pt-8 pb-24 space-y-20">

        {}
        <section className="relative pt-6 pb-12">
          {/* Top Brand Header Bar */}
          <div className="flex items-center justify-between pb-8 mb-12 bg-slate-50 p-6 rounded-none">
           

          
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-none bg-blue-50 text-blue-700 text-xs font-inter font-bold uppercase tracking-wider">
                
                <span>Full-Service Interior Design & Construction</span>
              </div>

              <h1 className="font-poppins text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                About <span className="text-blue-600">Cube4Spaces</span>
              </h1>

              <p className="font-poppins text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                We Design. We Build. We Deliver.
              </p>

              <div className="space-y-4 font-inter text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl">
                <p>
                  Cube4Spaces is a full-service interior design and construction company based in Coimbatore, Tamil Nadu. We help homeowners, shop owners, and business people create beautiful, practical, and ready-to-use spaces.
                </p>
                <p>
                  Whether it is your dream home, a new office, a boutique store, or a restaurant — we handle everything from the first idea to the final handover.
                </p>
              </div>

              {/* High impact emphasis box */}
              <div className="p-6 rounded-none bg-slate-900 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-poppins text-base sm:text-lg font-bold tracking-wide text-blue-300">
                    One team. One contact. Complete responsibility.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center font-poppins">
                <button 
                  onClick={() => setIsConsultModalOpen(true)}
                  className="px-8 py-4 rounded-none bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-colors flex items-center gap-3"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="#services"
                  className="px-8 py-4 rounded-none bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base transition-colors"
                >
                  Explore What We Do
                </a>
              </div>
            </div>

            {/* Glass-free Flat Info Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-none bg-slate-100 p-8 sm:p-10 space-y-8">
                <div className="flex items-center justify-between pb-6 bg-slate-200/60 p-4 rounded-none">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-none bg-blue-600 text-white flex items-center justify-center">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-black text-xl text-slate-900">Cube4Spaces</h3>
                      <p className="font-inter text-xs font-semibold text-slate-500">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-none bg-blue-100 text-blue-800 text-xs font-inter font-extrabold">
                    Est. 2023
                  </span>
                </div>

                <div className="space-y-4 font-inter">
                  <div className="flex items-center gap-3.5 p-4 rounded-none bg-white">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-800">Full Interior Design & Construction</span>
                  </div>
                  <div className="flex items-center gap-3.5 p-4 rounded-none bg-white">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-800">Residential Homes & Commercial Spaces</span>
                  </div>
                  <div className="flex items-center gap-3.5 p-4 rounded-none bg-white">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-sm font-bold text-slate-800">Ready-to-use Handover with Keys</span>
                  </div>
                </div>

                <div className="pt-4 text-center bg-slate-200/50 p-4 rounded-none">
                  <p className="font-inter text-xs text-slate-600 font-bold tracking-wide uppercase">
                    Serving Coimbatore, Chennai, Bangalore, Mumbai & More
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {}
        <section id="about" className="relative p-10 sm:p-14 rounded-none bg-slate-50 space-y-8">
          <div className="max-w-4xl space-y-2">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              About Us
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight pt-2">
              Who We Are
            </h2>
            <p className="font-poppins text-xl font-bold text-blue-600 pt-1">
              Cube4Spaces – Interior Design, Construction & Full Project Solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 space-y-6 font-inter text-slate-600 text-lg leading-relaxed">
              <p className="font-semibold text-slate-900 text-xl">
                We started in 2023 with one clear goal: to make interior and construction work simple, honest, and stress-free for our clients.
              </p>

              <div className="p-8 rounded-none bg-blue-50 space-y-4">
                <p className="font-poppins text-base font-extrabold text-blue-950 uppercase tracking-wider">
                  Most people face the same problems when building or renovating:
                </p>
                <ul className="space-y-3 font-medium text-slate-800 text-base">
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600 mt-2 shrink-0" />
                    <span>The designer says one thing, the contractor does another.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600 mt-2 shrink-0" />
                    <span>Materials get delayed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600 mt-2 shrink-0" />
                    <span>Costs keep increasing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600 mt-2 shrink-0" />
                    <span>Nobody takes full responsibility.</span>
                  </li>
                </ul>
              </div>

              <p className="font-poppins text-xl font-extrabold text-slate-900 pt-2">
                We built Cube4Spaces to solve exactly these problems.
              </p>

              <p className="font-medium text-slate-700">
                We bring design and execution under one roof. So you don't have to run behind different people. You talk to one team. We plan, design, build, and hand over — on time and with quality.
              </p>
            </div>

            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-6">
              <AnimatedStatCard value="50+" label="Projects Completed" subtitle="Residential & Commercial" icon={Building2} />
              <AnimatedStatCard value="45+" label="Happy Clients" subtitle="Trust & Quality Handover" icon={Users} />
              <AnimatedStatCard value="8+" label="Cities Served" subtitle="Across TN & Major Metro" icon={MapPin} />
              <AnimatedStatCard value="98%" label="On-Time Delivery" subtitle="Strict Progress Timeline" icon={Clock} />
              <div className="sm:col-span-2 p-5 rounded-none bg-slate-900 text-white text-center font-poppins text-xs font-bold uppercase tracking-widest">
                2023 Established in Coimbatore, Tamil Nadu
              </div>
            </div>

          </div>
        </section>

        {}
        <section id="services" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              Services
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              What We Do
            </h2>
            <p className="font-inter text-slate-600 text-lg font-medium">
              We provide complete interior design and construction services for homes and businesses.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-4 font-inter">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-none text-sm font-bold transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-6 py-3 rounded-none text-sm font-bold transition-colors ${
                  activeTab === 'residential' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                For Homes (Residential)
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-6 py-3 rounded-none text-sm font-bold transition-colors ${
                  activeTab === 'commercial' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                For Shops & Offices (Commercial)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {(activeTab === 'all' || activeTab === 'residential') && (
              <div className="rounded-none bg-slate-50 p-8 flex flex-col justify-between relative">
                <div>
                  <div className="w-14 h-14 rounded-none bg-blue-600 text-white flex items-center justify-center mb-6">
                    <Home className="w-7 h-7" />
                  </div>
                  <h3 className="font-poppins text-2xl font-black text-slate-900 mb-6">
                    For Homes (Residential)
                  </h3>
                  <ul className="space-y-3.5 font-inter text-slate-700 text-base font-medium">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-blue-600" />
                      Full home interiors
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-blue-600" />
                      Modular kitchens
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-blue-600" />
                      Wardrobes and storage units
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-blue-600" />
                      Living room and bedroom design
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-blue-600" />
                      False ceiling and lighting
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-blue-600" />
                      Painting and finishing work
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-blue-600" />
                      Complete home construction and renovation
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'commercial') && (
              <div className="rounded-none bg-slate-50 p-8 flex flex-col justify-between relative">
                <div>
                  <div className="w-14 h-14 rounded-none bg-indigo-600 text-white flex items-center justify-center mb-6">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <h3 className="font-poppins text-2xl font-black text-slate-900 mb-6">
                    For Shops and Offices (Commercial)
                  </h3>
                  <ul className="space-y-3.5 font-inter text-slate-700 text-base font-medium">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-indigo-600" />
                      Office interior design
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-indigo-600" />
                      Shop and boutique interiors
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-indigo-600" />
                      Restaurant and cafe design
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-indigo-600" />
                      Workstations and cabins
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-indigo-600" />
                      Reception and meeting room design
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-none bg-indigo-600" />
                      Brand-focused finishes and styling
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="rounded-none bg-slate-900 p-8 text-white flex flex-col justify-between relative">
              <div>
                <div className="w-14 h-14 rounded-none bg-blue-600 text-white flex items-center justify-center mb-6">
                  <Layers className="w-7 h-7" />
                </div>
                <h3 className="font-poppins text-2xl font-black text-white mb-6">
                  Complete Project Solutions
                </h3>
                <ul className="space-y-4 font-inter text-slate-300 text-base font-semibold mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    Full design + build service
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    One team from start to finish
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    Clear pricing and timeline
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    Ready-to-use handover with keys
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={() => setIsConsultModalOpen(true)}
                className="w-full py-4 rounded-none bg-blue-600 hover:bg-blue-500 text-white font-poppins font-bold text-sm uppercase tracking-wider transition-colors"
              >
                Get Free Consultation
              </button>
            </div>

          </div>
        </section>

        {}
        <section id="why-us" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              Our Advantage
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Why People Choose Cube4Spaces
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="font-poppins text-blue-600 font-black text-2xl">01</div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">
                1. One Team for Everything
              </h3>
              <p className="font-inter text-slate-600 text-base leading-relaxed">
                You don't need to manage separate designers, contractors, carpenters, and vendors. We handle all of it. One team. One contact person. One standard.
              </p>
            </div>

            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="font-poppins text-blue-600 font-black text-2xl">02</div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">
                2. Clear Planning Before Work Starts
              </h3>
              <p className="font-inter text-slate-600 text-base leading-relaxed">
                Every stage is planned before we begin. You know what will happen, when it will happen, and how much it will cost.
              </p>
            </div>

            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="font-poppins text-blue-600 font-black text-2xl">03</div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">
                3. Honest and Clear Pricing
              </h3>
              <p className="font-inter text-slate-600 text-base leading-relaxed">
                No hidden charges. No surprise costs in the middle. You get a clear quote before work starts.
              </p>
            </div>

            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="font-poppins text-blue-600 font-black text-2xl">04</div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">
                4. Quality Materials and Workmanship
              </h3>
              <p className="font-inter text-slate-600 text-base leading-relaxed">
                We use good quality materials and skilled workers. Our finishing is clean and reliable.
              </p>
            </div>

            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="font-poppins text-blue-600 font-black text-2xl">05</div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">
                5. On-Time Delivery
              </h3>
              <p className="font-inter text-slate-600 text-base leading-relaxed">
                We respect your time. We follow a fixed timeline and keep you updated at every stage.
              </p>
            </div>

            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="font-poppins text-blue-600 font-black text-2xl">06</div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">
                6. Final Quality Check Before Handover
              </h3>
              <p className="font-inter text-slate-600 text-base leading-relaxed">
                We don't just finish the work — we check everything. Only when it is perfect, we hand over the keys.
              </p>
            </div>

          </div>
        </section>

        {}
        <section className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              Journey
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Story
            </h2>
            <p className="font-poppins text-2xl font-bold text-slate-800">
              From a Simple Idea to a Trusted Name
            </p>
            
            <div className="space-y-4 font-inter text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>Cube4Spaces was started in 2023 in Coimbatore, Tamil Nadu.</p>
              <p>The idea was simple: make construction and interiors easier for common people.</p>
              
              <div className="p-6 rounded-none bg-slate-100 space-y-3">
                <p className="font-poppins font-bold text-slate-900 text-base">
                  We saw that many families and business owners were struggling with:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-blue-600" />
                    Delays in work
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-blue-600" />
                    Poor coordination between teams
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-blue-600" />
                    Cost overruns
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-blue-600" />
                    Bad finishing
                  </li>
                  <li className="col-span-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-none bg-blue-600" />
                    No one taking final responsibility
                  </li>
                </ul>
              </div>

              <p className="font-bold text-slate-900">We decided to fix this.</p>
              <p>We built a team that handles planning, design, material selection, execution, and handover — all under one roof.</p>

              <div className="p-6 rounded-none bg-blue-50 text-slate-800 font-medium">
                Today, we have completed 50+ projects and served 45+ happy clients across 8+ cities in India, including Coimbatore, Chennai, Bangalore, Mumbai, Pune, and Hyderabad.
                <p className="font-poppins font-bold text-blue-700 mt-2 text-lg">
                  And we are just getting started.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 sm:p-12 rounded-none bg-slate-900 text-white space-y-10">
              <div>
                <span className="font-inter text-blue-400 text-xs font-black uppercase tracking-widest">Our Purpose</span>
                <h3 className="font-poppins text-3xl font-black mt-1">Our Mission</h3>
                <p className="font-poppins text-xl font-bold text-blue-400 mt-2">
                  Spaces That Feel Beautiful and Work Better
                </p>
                <p className="font-inter text-slate-300 text-sm mt-3 leading-relaxed">
                  Our mission is to create homes and commercial spaces that are:
                </p>
                
                <div className="grid sm:grid-cols-3 gap-3 mt-4">
                  <div className="p-4 rounded-none bg-slate-800 text-center">
                    <span className="block font-poppins font-bold text-base text-blue-400">Practical</span>
                    <span className="font-inter text-xs text-slate-400">easy to use every day</span>
                  </div>
                  <div className="p-4 rounded-none bg-slate-800 text-center">
                    <span className="block font-poppins font-bold text-base text-blue-400">Elegant</span>
                    <span className="font-inter text-xs text-slate-400">beautiful to look at</span>
                  </div>
                  <div className="p-4 rounded-none bg-slate-800 text-center">
                    <span className="block font-poppins font-bold text-base text-blue-400">Built to Last</span>
                    <span className="font-inter text-xs text-slate-400">strong and reliable</span>
                  </div>
                </div>

                <p className="font-inter text-sm text-slate-300 mt-4 leading-relaxed">
                  We use smart layouts, disciplined material selection, and clear coordination to reduce your stress and improve the final result. Your vision guides everything we do.
                </p>
              </div>

              <div className="pt-8 bg-slate-800/50 p-6 rounded-none">
                <h3 className="font-poppins text-3xl font-black">Our Vision</h3>
                <p className="font-poppins text-blue-400 text-lg font-bold mt-1">
                  To Be Tamil Nadu's Most Trusted Interior and Construction Team
                </p>
                <p className="font-inter text-sm text-slate-300 mt-3 leading-relaxed">
                  We want to be the first name people think of when they plan to build or renovate their home or business space in Tamil Nadu. We want to be known for:
                </p>
                <div className="flex flex-wrap gap-2.5 mt-4 font-inter">
                  <span className="px-4 py-1.5 rounded-none bg-slate-800 text-xs font-bold text-slate-200">Honest work</span>
                  <span className="px-4 py-1.5 rounded-none bg-slate-800 text-xs font-bold text-slate-200">Clear pricing</span>
                  <span className="px-4 py-1.5 rounded-none bg-slate-800 text-xs font-bold text-slate-200">Quality finishing</span>
                  <span className="px-4 py-1.5 rounded-none bg-slate-800 text-xs font-bold text-slate-200">On-time delivery</span>
                  <span className="px-4 py-1.5 rounded-none bg-slate-800 text-xs font-bold text-slate-200">Happy clients</span>
                </div>
              </div>

            </div>
          </div>

        </section>

        {}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              Principles
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="font-inter text-slate-600 text-base font-medium">
              These are the principles behind every project we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="w-12 h-12 rounded-none bg-blue-600 text-white font-poppins font-black text-xl flex items-center justify-center">
                Q
              </div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">Quality</h3>
              <p className="font-inter text-sm text-slate-600 leading-relaxed">
                Premium materials, clean finishing, and reliable workmanship.
              </p>
            </div>

            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="w-12 h-12 rounded-none bg-blue-600 text-white font-poppins font-black text-xl flex items-center justify-center">
                D
              </div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">Design Clarity</h3>
              <p className="font-inter text-sm text-slate-600 leading-relaxed">
                Thoughtful layouts shaped around your lifestyle and practical use.
              </p>
            </div>

            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="w-12 h-12 rounded-none bg-blue-600 text-white font-poppins font-black text-xl flex items-center justify-center">
                P
              </div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">Professional Delivery</h3>
              <p className="font-inter text-sm text-slate-600 leading-relaxed">
                Clear timelines, transparent updates, and managed execution.
              </p>
            </div>

            <div className="p-8 rounded-none bg-slate-50 space-y-4">
              <div className="w-12 h-12 rounded-none bg-blue-600 text-white font-poppins font-black text-xl flex items-center justify-center">
                C
              </div>
              <h3 className="font-poppins text-xl font-bold text-slate-900">Client First</h3>
              <p className="font-inter text-sm text-slate-600 leading-relaxed">
                Your vision, comfort, and budget guide every decision.
              </p>
            </div>

          </div>
        </section>

        {}
        <section id="process" className="p-10 sm:p-14 rounded-none bg-slate-50 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              Workflow
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Process – How We Work
            </h2>
            <p className="font-inter text-slate-600 text-base sm:text-lg font-medium">
              We follow a simple 4-step process. This keeps everything clear and organized.
            </p>

            <div className="inline-block pt-2">
              <span className="font-poppins text-sm font-extrabold text-blue-800 px-6 py-2 rounded-none bg-blue-100">
                Consult → Design → Build → Handover
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4 font-inter">
              {stepsData.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 rounded-none transition-colors flex items-center justify-between ${
                    activeStep === idx 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-poppins font-black text-2xl ${activeStep === idx ? 'text-blue-200' : 'text-blue-600'}`}>
                      {step.stepNum}
                    </span>
                    <div>
                      <span className={`font-poppins text-xs font-bold uppercase tracking-wider block ${activeStep === idx ? 'text-blue-100' : 'text-blue-600'}`}>
                        {step.badge}
                      </span>
                      <h4 className="font-poppins font-bold text-lg">{step.title}</h4>
                    </div>
                  </div>
                  <ChevronRight className={`w-6 h-6 ${activeStep === idx ? 'opacity-100' : 'opacity-40'}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-none bg-slate-900 text-white min-h-[360px] flex flex-col justify-between">
                <div>
                  <div className="inline-block px-4 py-1.5 rounded-none bg-blue-600 text-white font-poppins font-bold text-xs uppercase mb-6">
                    {stepsData[activeStep].badge}
                  </div>
                  <h3 className="font-poppins text-3xl font-black text-white mb-4">
                    {stepsData[activeStep].title}
                  </h3>
                  <p className="font-inter text-slate-300 text-lg mb-8 font-medium">
                    {stepsData[activeStep].subtitle}
                  </p>

                  <div className="space-y-3.5 font-inter">
                    {stepsData[activeStep].bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-3.5 p-4 rounded-none bg-slate-800">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                        <span className="text-base font-semibold text-slate-100">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 bg-slate-800/80 p-4 rounded-none flex justify-between items-center font-inter text-xs text-slate-300">
                  <span>Step {activeStep + 1} of 4</span>
                  <div className="flex gap-2 font-poppins">
                    <button 
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="px-4 py-2 rounded-none bg-slate-700 disabled:opacity-30 hover:bg-slate-600 text-xs font-bold"
                    >
                      Previous
                    </button>
                    <button 
                      onClick={() => setActiveStep(Math.min(3, activeStep + 1))}
                      disabled={activeStep === 3}
                      className="px-4 py-2 rounded-none bg-blue-600 text-white font-bold disabled:opacity-30 text-xs"
                    >
                      Next
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {}
        <section className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              People
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Our Team
            </h2>
            <p className="font-poppins text-2xl font-bold text-slate-800">
              Designers, Engineers, Managers, and Skilled Workers
            </p>

            <p className="font-inter text-lg text-slate-600">
              We bring together:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 font-inter text-base font-bold text-slate-800">
              <div className="flex items-center gap-3 p-4 rounded-none bg-slate-100">
                <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                Interior designers
              </div>
              <div className="flex items-center gap-3 p-4 rounded-none bg-slate-100">
                <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                Construction professionals
              </div>
              <div className="flex items-center gap-3 p-4 rounded-none bg-slate-100">
                <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                Project coordinators
              </div>
              <div className="flex items-center gap-3 p-4 rounded-none bg-slate-100">
                <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                Skilled craftsmen and workers
              </div>
            </div>

            <p className="font-inter text-lg text-slate-600">
              Our approach is collaborative, practical, and focused on results.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 sm:p-12 rounded-none bg-slate-50 space-y-6">
              <div className="w-14 h-14 rounded-none bg-blue-600 text-white flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              
              <h3 className="font-poppins text-3xl font-black text-slate-900">
                Single Point of Contact
              </h3>

              <p className="font-inter text-lg text-slate-600 leading-relaxed">
                Every project has a dedicated project manager who is your single point of contact. You don't need to call ten different people. You call one person, and we handle the rest.
              </p>

              <div className="p-5 rounded-none bg-blue-100 flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-blue-700 shrink-0" />
                <span className="font-inter text-sm sm:text-base font-bold text-slate-900">
                  Complete accountability & transparent weekly updates
                </span>
              </div>
            </div>
          </div>

        </section>

        {}
        <section className="p-10 sm:p-14 rounded-none bg-slate-50 space-y-12">
          
          <div className="grid lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
                Location
              </span>
              <h2 className="font-poppins text-3xl sm:text-4xl font-black text-slate-900">
                Where We Work
              </h2>

              <div className="p-8 rounded-none bg-white space-y-6">
                <h3 className="font-poppins text-2xl font-bold text-slate-900">Our Office</h3>

                <div className="space-y-4 font-inter text-base text-slate-700">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Cube4Spaces</p>
                      <p>1, Perumal Kovil Street</p>
                      <p>Saravanampatti</p>
                      <p>Coimbatore – 641035</p>
                      <p>Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div className="font-bold">
                      <p><a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">+91 98765 43210</a> / <a href="tel:+918765432109" className="hover:text-blue-600 transition-colors">+91 87654 32109</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div className="font-bold">
                      <p><a href="mailto:hello@cube4spaces.com" className="hover:text-blue-600 transition-colors">hello@cube4spaces.com</a> / <a href="mailto:projects@cube4spaces.com" className="hover:text-blue-600 transition-colors">projects@cube4spaces.com</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Office Hours:</p>
                      <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                      <p>Sunday visits by appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
                Coverage
              </span>
              <h2 className="font-poppins text-3xl sm:text-4xl font-black text-slate-900">
                Service Areas
              </h2>

              <div className="p-8 rounded-none bg-white space-y-6">
                <p className="font-inter text-lg text-slate-800 font-bold">
                  We serve customers in:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 font-inter">
                  <div className="p-4 rounded-none bg-blue-600 text-white font-extrabold text-base flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-white" />
                    Coimbatore (Main Office)
                  </div>
                  <div className="p-4 rounded-none bg-slate-100 text-slate-800 font-bold text-base flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                    Chennai
                  </div>
                  <div className="p-4 rounded-none bg-slate-100 text-slate-800 font-bold text-base flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                    Bangalore
                  </div>
                  <div className="p-4 rounded-none bg-slate-100 text-slate-800 font-bold text-base flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                    Mumbai
                  </div>
                  <div className="p-4 rounded-none bg-slate-100 text-slate-800 font-bold text-base flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                    Pune
                  </div>
                  <div className="p-4 rounded-none bg-slate-100 text-slate-800 font-bold text-base flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-none bg-blue-600" />
                    Hyderabad
                  </div>
                </div>

                <p className="font-inter text-base font-bold text-slate-700 pt-2">
                  And other cities across Tamil Nadu and India.
                </p>
              </div>
            </div>

          </div>
        </section>

        {}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              Testimonial
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              What Clients Say About Us
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-10 sm:p-14 rounded-none bg-slate-50 relative">
              <div className="flex gap-1.5 text-blue-600 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>

              <p className="font-inter text-xl sm:text-2xl text-slate-800 italic leading-relaxed mb-8 font-medium">
                "Cube4Spaces delivered a clean and functional home interior. The kitchen, wardrobes, and storage planning were handled professionally and completed on time."
              </p>

              <div className="flex items-center justify-between pt-8 bg-slate-200/50 p-4 rounded-none">
                <div>
                  <h4 className="font-poppins font-extrabold text-xl text-slate-900">— Priya Mehta</h4>
                  <p className="font-inter text-sm font-semibold text-slate-500">3BHK Home Interiors, Bangalore</p>
                </div>
              </div>
            </div>

            <p className="font-inter text-center text-base font-bold text-slate-600 mt-8">
              Trust, clarity, and consistent execution are the reasons our clients continue to recommend Cube4Spaces.
            </p>
          </div>
        </section>

        {}
        <section id="faq" className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="font-inter text-blue-700 text-xs font-black uppercase tracking-widest bg-blue-100 px-3 py-1 rounded-none">
              Help & Clarity
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-none bg-slate-50 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-poppins font-bold text-slate-900 text-lg sm:text-xl flex justify-between items-center gap-4 hover:bg-slate-100 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown className={`w-6 h-6 text-blue-600 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 font-inter text-base text-slate-600 bg-white p-6 pt-4 leading-relaxed font-medium">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {}
        <section id="contact" className="relative p-10 sm:p-16 rounded-none bg-slate-900 text-white overflow-hidden">
          <div className="relative z-10 max-w-4xl space-y-8">
            <span className="font-inter text-blue-400 text-xs font-black uppercase tracking-widest bg-blue-950 px-4 py-1.5 rounded-none">
              Get Started
            </span>
            
            <h2 className="font-poppins text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Ready to Start Your Project?
            </h2>
            
            <p className="font-poppins text-2xl font-bold text-blue-400">
              Let's Build Something Beautiful Together.
            </p>
            
            <p className="font-inter text-lg sm:text-xl text-slate-300 leading-relaxed font-medium max-w-2xl">
              Share your requirement and our team will guide you with the right design, budget, and execution plan.
            </p>

            <div className="pt-4 grid sm:grid-cols-3 gap-6 font-inter text-base font-bold">
              <a 
                href="tel:+919876543210" 
                className="p-6 rounded-none bg-slate-800 hover:bg-slate-700 flex items-center gap-4 transition-colors"
              >
                <Phone className="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-normal">Call Us</span>
                  +91 98765 43210
                </div>
              </a>

              <a 
                href="https://wa.me/918765432109" 
                target="_blank" 
                rel="noreferrer"
                className="p-6 rounded-none bg-slate-800 hover:bg-slate-700 flex items-center gap-4 transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-normal">WhatsApp</span>
                  +91 87654 32109
                </div>
              </a>

              <a 
                href="mailto:hello@cube4spaces.com" 
                className="p-6 rounded-none bg-slate-800 hover:bg-slate-700 flex items-center gap-4 transition-colors"
              >
                <Mail className="w-6 h-6 text-blue-400 shrink-0" />
                <div>
                  <span className="block text-xs text-slate-400 font-normal">Email</span>
                  hello@cube4spaces.com
                </div>
              </a>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="px-10 py-5 rounded-none bg-blue-600 hover:bg-blue-500 text-white font-poppins font-black text-lg transition-colors inline-flex items-center gap-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {}
      <footer className="bg-slate-100 py-12 font-inter text-xs font-semibold text-slate-500 relative z-10">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-none bg-blue-600 text-white font-poppins font-black text-sm flex items-center justify-center">
              C4
            </div>
            <div>
              <span className="font-poppins font-bold text-slate-900 text-base">Cube4Spaces</span>
              <p className="text-slate-500 text-xs">Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>

          <p className="text-center md:text-right text-slate-500">
            &copy; {new Date().getFullYear()} Cube4Spaces. Interior Design & Construction. All Rights Reserved.
          </p>
        </div>
      </footer>

      {}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80">
          <div className="bg-white rounded-none p-8 sm:p-10 max-w-lg w-full relative">
            <button 
              onClick={() => setIsConsultModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-none hover:bg-slate-100 text-slate-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!formSubmitted ? (
              <>
                <h3 className="font-poppins text-3xl font-black text-slate-900 mb-2">
                  Start Your Project
                </h3>
                <p className="font-inter text-sm text-slate-600 mb-6 font-medium">
                  Share your details with Cube4Spaces and we will get back to you with a free consultation and project plan.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4 font-inter">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input required type="text" placeholder="e.g. Anand Kumar" className="w-full px-4 py-3 rounded-none bg-slate-100 text-sm focus:outline-none focus:bg-slate-200" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-none bg-slate-100 text-sm focus:outline-none focus:bg-slate-200" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Type</label>
                    <select className="w-full px-4 py-3 rounded-none bg-slate-100 text-sm focus:outline-none focus:bg-slate-200">
                      <option>Full Home Interiors</option>
                      <option>Modular Kitchens & Storage</option>
                      <option>Office / Commercial Interior</option>
                      <option>Shop / Boutique / Restaurant</option>
                      <option>Complete Home Construction</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Location / City</label>
                    <input type="text" placeholder="e.g. Saravanampatti, Coimbatore" className="w-full px-4 py-3 rounded-none bg-slate-100 text-sm focus:outline-none focus:bg-slate-200" />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-none bg-blue-600 hover:bg-blue-700 text-white font-poppins font-bold text-base transition-colors mt-2"
                  >
                    Submit Requirement
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4 font-inter">
                <div className="w-16 h-16 rounded-none bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-poppins text-2xl font-black text-slate-900">Thank You!</h4>
                <p className="text-slate-600 font-medium text-sm">
                  Cube4Spaces team will get in touch with you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}