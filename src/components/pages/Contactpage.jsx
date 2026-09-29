import React, { useState } from 'react';
import {
  ExternalLink,
  Send,
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle2,
  Building2,
  Compass,
  Hammer,
  Loader2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  Layers,
  Check,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    budget: '',
    message: '',
    source: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setResult('Transmitting your project request...');

    const target = e.currentTarget;
    const web3FormData = new FormData(target);

    web3FormData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE');
    web3FormData.append('subject', `New Project Consultation Request from ${formData.name}`);
    web3FormData.append('from_name', 'Cube 4 Spaces Contact Page');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setResult('Thank you! Your project enquiry has been submitted. Our team at Cube 4 Spaces will reach out to you shortly.');
        target.reset();
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          location: '',
          budget: '',
          message: '',
          source: '',
        });
      } else {
        setStatus('error');
        setResult(data.message || 'Unable to submit enquiry. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setResult('Network error. Please check your internet connection and try again.');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 font-inter text-sm md:text-base font-medium text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100';

  const labelClass =
    'mb-2 block font-poppins text-xs font-bold uppercase tracking-wider text-slate-700';

  return (
    <>
      {}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap');
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {}
      <main className="min-h-screen w-full bg-slate-50 font-inter text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
        
        {/* ==========================================
            HERO SECTION (FULL WIDTH)
           ========================================== */}
        {}
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 lg:py-28 border-b border-slate-200/60">
          <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl" />

          <div className="relative z-10 w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-4 py-2 text-indigo-700 shadow-sm">
                  <Building2 className="h-4 w-4 text-indigo-600" />
                  <span className="font-poppins text-xs font-bold uppercase tracking-wider">
                    Cube 4 Spaces Architecture & Interiors
                  </span>
                </div>

                <h1 className="font-poppins text-4xl font-black leading-[1.15] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                  Transforming Blank Spaces Into{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Architectural Masterpieces.
                  </span>
                </h1>

                <p className="mt-6 max-w-4xl font-inter text-base font-normal leading-relaxed text-slate-600 md:text-lg lg:text-xl">
                  Connect with the team at <strong>Cube 4 Spaces</strong>. From initial CAD floor plans and 3D interior renders to turnkey civil construction, we bring precision and elegance to every detail.
                </p>

                {/* Call to Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-poppins text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95 md:text-base"
                  >
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 font-poppins text-sm font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 md:text-base"
                  >
                    Our Capabilities
                  </a>
                </div>

                {/* Key Metrics */}
                <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-100 pt-8 max-w-3xl">
                  <div>
                    <p className="font-poppins text-2xl font-black text-slate-950 md:text-3xl lg:text-4xl">180+</p>
                    <p className="font-inter text-xs font-medium text-slate-500 md:text-sm">
                      Spaces Delivered
                    </p>
                  </div>
                  <div>
                    <p className="font-poppins text-2xl font-black text-slate-950 md:text-3xl lg:text-4xl">100%</p>
                    <p className="font-inter text-xs font-medium text-slate-500 md:text-sm">
                      Transparent Costs
                    </p>
                  </div>
                  <div>
                    <p className="font-poppins text-2xl font-black text-slate-950 md:text-3xl lg:text-4xl">10 Yrs</p>
                    <p className="font-inter text-xs font-medium text-slate-500 md:text-sm">
                      Structural Warranty
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Showcase Image */}
              <div className="relative lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                    alt="Cube 4 Spaces Modern Living Room Design"
                    className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[580px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/90 p-5 shadow-lg backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-poppins text-sm font-bold text-slate-900">
                          Cube 4 Spaces Studio Project
                        </p>
                        <p className="font-inter text-xs font-medium text-slate-500">
                          Coimbatore, Tamil Nadu
                        </p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-amber-800">
                        <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        <span className="font-poppins text-xs font-bold">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================
            SERVICES SECTION (FULL WIDTH)
           ========================================== */}
        {}
        <section id="services" className="w-full bg-slate-100/70 py-16 md:py-24">
          <div className="w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            
            {/* Section Header */}
            <div className="mx-auto max-w-4xl text-center">
              <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                What We Do
              </span>
              <h2 className="mt-2 font-poppins text-3xl font-black text-slate-950 md:text-4xl lg:text-5xl">
                Comprehensive Architectural & Interior Services
              </h2>
              <p className="mt-4 font-inter text-base font-normal text-slate-600 md:text-lg">
                End-to-end execution—from concept creation and 3D visualization to turnkey construction and custom modular solutions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Compass,
                  title: 'Interior Design',
                  desc: 'Photorealistic 3D rendering, spatial planning, tailored lighting layouts, and curated material palettes.',
                  features: ['3D Concept Renders', 'Material Consultation', 'Lighting & Decor'],
                },
                {
                  icon: Hammer,
                  title: 'Civil Construction',
                  desc: 'End-to-end structural engineering, foundation work, and building construction with quality auditing.',
                  features: ['Architectural Blueprinting', 'Structural Integrity', 'Quality Assurance'],
                },
                {
                  icon: Building2,
                  title: 'Turnkey Execution',
                  desc: 'Hands-off design & build solutions taking projects from bare site to move-in ready handover.',
                  features: ['Single Point of Contact', 'Timeline Commitment', 'Transparent Costing'],
                },
                {
                  icon: Layers,
                  title: 'Modular Systems',
                  desc: 'Precision-engineered modular kitchens, wardrobes, and custom space-saving cabinetry.',
                  features: ['Soft-Close Fittings', 'Moisture Resistant', '10-Year Warranty'],
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-200"
                >
                  <div>
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-slate-950">{service.title}</h3>
                    <p className="mt-3 font-inter text-sm font-normal leading-relaxed text-slate-600">
                      {service.desc}
                    </p>
                  </div>

                  <ul className="mt-6 border-t border-slate-100 pt-5 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 font-inter text-xs font-semibold text-slate-700">
                        <Check className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Workflow Banner */}
            <div className="mt-12 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-900 to-slate-900 p-8 text-white shadow-lg md:p-12">
              <div className="grid gap-8 lg:grid-cols-4 lg:divide-x lg:divide-slate-800">
                <div className="flex items-start gap-4">
                  <span className="font-poppins text-3xl font-black text-indigo-400">01</span>
                  <div>
                    <h4 className="font-poppins font-bold text-base">Initial Meeting</h4>
                    <p className="font-inter text-xs text-slate-400 mt-1">Understanding scope, budget & goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 lg:pl-6">
                  <span className="font-poppins text-3xl font-black text-indigo-400">02</span>
                  <div>
                    <h4 className="font-poppins font-bold text-base">3D Visualization</h4>
                    <p className="font-inter text-xs text-slate-400 mt-1">Photorealistic views & floor layouts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 lg:pl-6">
                  <span className="font-poppins text-3xl font-black text-indigo-400">03</span>
                  <div>
                    <h4 className="font-poppins font-bold text-base">Precision Execution</h4>
                    <p className="font-inter text-xs text-slate-400 mt-1">Supervised site construction & install.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 lg:pl-6">
                  <span className="font-poppins text-3xl font-black text-indigo-400">04</span>
                  <div>
                    <h4 className="font-poppins font-bold text-base">Handover</h4>
                    <p className="font-inter text-xs text-slate-400 mt-1">Quality check & move-in key delivery.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
            CONTACT SECTION (FULL WIDTH)
           ========================================== */}
        {}
        <section id="contact" className="relative w-full overflow-hidden bg-slate-50 py-16 md:py-24">
          <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-slate-300/30 blur-[120px]" />

          <div className="relative z-10 w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            
            {/* Contact Header */}
            <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 shadow-sm">
                  <MessageSquare className="h-4 w-4 text-indigo-600" />
                  <span className="font-poppins text-xs font-bold uppercase tracking-[0.15em] text-indigo-700">
                    Get In Touch
                  </span>
                </div>

                <h2 className="font-poppins text-3xl font-black leading-[1.15] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
                  Let’s Discuss
                  <span className="block text-indigo-600">Your Space Requirement.</span>
                </h2>
              </div>

              <div className="lg:ml-auto">
                <p className="font-inter text-base font-medium leading-relaxed text-slate-600 lg:text-lg">
                  Share your site details, timeline, and preliminary budget. Our team at <strong>Cube 4 Spaces</strong> will evaluate your requirements and schedule a direct consultation.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {['Free Consultation', 'Detailed Estimate', 'Site Evaluation'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-poppins text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form and Details Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              
              {/* Web3Forms Contact Form */}
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl md:p-10 lg:p-12">
                <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-end">
                  <div>
                    <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                      Project Enquiry
                    </span>
                    <h3 className="mt-2 font-poppins text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
                      Send Us a Message
                    </h3>
                  </div>
                  <p className="max-w-xs font-inter text-xs font-medium text-slate-500">
                    Fill in your project details to request a callback from our chief designer.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="e.g., Rajesh Sharma"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="rajesh@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className={labelClass}>
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      >
                        <option value="">Select scope</option>
                        <option value="Residential Interiors">Residential Interiors</option>
                        <option value="Commercial Interiors">Commercial Interiors</option>
                        <option value="Civil Construction">Civil Construction Only</option>
                        <option value="Turnkey Project">Turnkey (Construction + Interiors)</option>
                        <option value="Modular Kitchen & Storage">Modular Kitchen & Storage</option>
                        <option value="Other Scope">Other Custom Project</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="location" className={labelClass}>
                        City / Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="e.g., Coimbatore, Chennai"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelClass}>
                        Estimated Budget (INR)
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select budget range</option>
                        <option value="Below 5 Lakhs">Below ₹5 Lakhs</option>
                        <option value="5 - 15 Lakhs">₹5 Lakhs – ₹15 Lakhs</option>
                        <option value="15 - 30 Lakhs">₹15 Lakhs – ₹30 Lakhs</option>
                        <option value="30 - 50 Lakhs">₹30 Lakhs – ₹50 Lakhs</option>
                        <option value="50 Lakhs+">₹50 Lakhs+</option>
                        <option value="Undecided">Undecided / Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Project Overview & Timeline *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Briefly describe your site, preferred architectural style, and expected start date..."
                    />
                  </div>

                  <div>
                    <label htmlFor="source" className={labelClass}>
                      How Did You Find Us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select channel</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Social Media">Social Media (Instagram / Facebook)</option>
                      <option value="Client Referral">Friend / Client Referral</option>
                      <option value="Saw Active Project">Saw an active project site</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Submission Status Alert */}
                  {status !== 'idle' && (
                    <div
                      className={`flex items-start gap-3 rounded-2xl p-4 text-xs font-semibold md:text-sm ${
                        status === 'loading'
                          ? 'border border-amber-200 bg-amber-50 text-amber-900'
                          : status === 'success'
                          ? 'border border-emerald-200 bg-emerald-50 text-emerald-900'
                          : 'border border-rose-200 bg-rose-50 text-rose-900'
                      }`}
                    >
                      {status === 'loading' && <Loader2 className="h-5 w-5 animate-spin text-amber-600 shrink-0" />}
                      {status === 'success' && <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />}
                      {status === 'error' && <AlertCircle className="h-5 w-5 text-rose-600 shrink-0" />}
                      <span className="mt-0.5">{result}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 font-poppins text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-95 disabled:opacity-70 md:text-base"
                    >
                      {status === 'loading' ? 'Submitting Enquiry...' : 'Submit Project Enquiry'}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="mt-4 text-center font-inter text-xs font-medium text-slate-400">
                      🔒 Privacy Guarantee: Your information is safe and never shared.
                    </p>
                  </div>
                </form>
              </div>

              {/* Sidebar Contact Info */}
              {}
              <aside className="flex flex-col gap-8">
                
                <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl lg:p-10">
                  <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                    Direct Contact
                  </span>

                  <h3 className="mt-2 font-poppins text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
                    Cube 4 Spaces Studio
                  </h3>

                  <div className="mt-8 space-y-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-poppins text-xs font-bold uppercase tracking-wider text-slate-500">
                          Phone / WhatsApp
                        </h4>
                        <p className="mt-1 font-inter text-base font-semibold text-slate-800">
                          +91 98765 43210
                        </p>
                        <p className="font-inter text-sm font-medium text-slate-600">
                          +91 87654 32109
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-poppins text-xs font-bold uppercase tracking-wider text-slate-500">
                          Email Enquiries
                        </h4>
                        <p className="mt-1 truncate font-inter text-base font-semibold text-slate-800">
                         cubefourspaces@gmail.com
                        </p>
                        <p className="truncate font-inter text-sm font-medium text-slate-600">
                         
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-poppins text-xs font-bold uppercase tracking-wider text-slate-500">
                          Working Hours
                        </h4>
                        <p className="mt-1 font-inter text-base font-semibold text-slate-800">
                          Monday – Saturday: 9:00 AM – 7:00 PM
                        </p>
                        <p className="font-inter text-sm font-medium text-slate-500">
                          Sunday: By Prior Appointment
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-poppins text-xs font-bold uppercase tracking-wider text-slate-500">
                          Studio Location
                        </h4>
                        <p className="mt-1 font-inter text-base font-medium leading-relaxed text-slate-700">
                          Cube 4 Spaces
                          <br />
                          Coimbatore, Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <h4 className="font-poppins text-xs font-bold uppercase tracking-wider text-slate-500">
                      Primary Service Areas
                    </h4>
                    <p className="mt-2 font-inter text-sm font-semibold text-slate-700">
                      Coimbatore • Chennai • Bangalore • Hyderabad • Kochi
                    </p>
                  </div>
                </div>

                {/* Quality Guarantee Card */}
                <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-indigo-600" />
                    <h4 className="font-poppins font-bold text-slate-900">Contractual On-Time Guarantee</h4>
                  </div>
                  <p className="mt-2 font-inter text-xs font-medium text-slate-600 leading-relaxed">
                    We stick strictly to committed handover dates backed by contractual timelines for total peace of mind.
                  </p>
                </div>

              </aside>
            </div>

            {/* Embedded Google Map Section (FULL WIDTH) */}
            {}
            <div className="mt-12 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl md:p-10">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
                    Location
                  </span>
                  <h3 className="mt-1 font-poppins text-2xl font-bold text-slate-950 md:text-3xl">
                    Find Cube 4 Spaces
                  </h3>
                  <p className="mt-1 font-inter text-xs font-medium text-slate-500">
                    Visit our studio for material samples and project design consultations.
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=Cube+4+spaces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-5 py-3 font-poppins text-xs font-bold uppercase tracking-wider text-indigo-700 transition-all hover:bg-indigo-600 hover:text-white"
                >
                  Open in Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Exact Google Map Embed */}
              <div className="h-[400px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.4859452144906!2d76.99992007584063!3d11.077114653573846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7d22a2e74b7%3A0x1cf0c55fe95cc923!2sCube%204%20spaces!5e0!3m2!1sen!2sin!4v1790676045671!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Cube 4 Spaces Location Map"
                  className="grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}