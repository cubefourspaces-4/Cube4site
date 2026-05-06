import { useEffect, useState } from "react";
import { ExternalLink,  Send, MessageCircle } from "lucide-react";
import Lenis from "@studio-freight/lenis";




export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    budget: "",
    message: "",
    source: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 bg-white text-stone-900 overflow-hidden font-[family-name:Inter,sans-serif] flex justify-center"
    >
      {/* Subtle background glow accents */}
      <div className="absolute left-16 top-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-16 h-96 w-96 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-8 md:px-16 lg:px-24 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-24 md:mb-32">
          <span className="mb-6 block text-xs font-black tracking-[0.25em] uppercase text-indigo-600 font-[family-name:Inter,sans-serif]">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-stone-950 mb-8 leading-[1.05]">
            Let's talk about <br />
            <span className="font-serif italic font-normal text-indigo-600">your space.</span>
          </h2>
          <p className="text-sm md:text-lg text-stone-500 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? Need a quote? Or just want to ask a few questions? We're here to help. 
            Fill out the form below or reach out to us directly.
          </p>
        </div>

        {/* Layout Grid: Form & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start max-w-[1800px] mx-auto mb-32">
          
          {/* Section 1: Contact Form (Spans 2 Columns) */}
          <div className="lg:col-span-2 bg-stone-50/50 border border-stone-200/80 rounded-[2.5rem] p-12 md:p-16 backdrop-blur-sm shadow-sm hover:border-indigo-400/50 transition-all duration-500">
            <h3 className="text-3xl md:text-4xl font-extrabold text-stone-950 mb-12 tracking-tight leading-none">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 mb-4">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-white border border-stone-200 rounded-[1.5rem] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors text-sm font-medium shadow-sm"
                    placeholder="e.g., Rajesh Sharma"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 mb-4">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-white border border-stone-200 rounded-[1.5rem] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors text-sm font-medium shadow-sm"
                    placeholder="rajesh@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 mb-4">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-white border border-stone-200 rounded-[1.5rem] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors text-sm font-medium shadow-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 mb-4">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-white border border-stone-200 rounded-[1.5rem] text-stone-900 focus:outline-none focus:border-indigo-600 transition-colors text-sm font-medium shadow-sm"
                  >
                    <option value="">Select one</option>
                    <option value="Residential Interiors">Residential Interiors</option>
                    <option value="Commercial Interiors">Commercial Interiors</option>
                    <option value="Construction Only">Construction Only</option>
                    <option value="Turnkey (Construction + Interiors)">Turnkey (Construction + Interiors)</option>
                    <option value="Modular Kitchen / Wardrobe Only">Modular Kitchen / Wardrobe Only</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 mb-4">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-white border border-stone-200 rounded-[1.5rem] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors text-sm font-medium shadow-sm"
                    placeholder="e.g., Coimbatore, Bangalore"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 mb-4">
                    Estimated Budget (₹)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-white border border-stone-200 rounded-[1.5rem] text-stone-900 focus:outline-none focus:border-indigo-600 transition-colors text-sm font-medium shadow-sm"
                  >
                    <option value="">Select range</option>
                    <option value="Less than ₹2 lakhs">Less than ₹2 lakhs</option>
                    <option value="₹2 – ₹5 lakhs">₹2 – ₹5 lakhs</option>
                    <option value="₹5 – ₹10 lakhs">₹5 – ₹10 lakhs</option>
                    <option value="₹10 – ₹20 lakhs">₹10 – ₹20 lakhs</option>
                    <option value="₹20 – ₹35 lakhs">₹20 – ₹35 lakhs</option>
                    <option value="₹35 lakhs+">₹35 lakhs+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 mb-4">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-6 py-6 bg-white border border-stone-200 rounded-[1.5rem] text-stone-900 placeholder-stone-400 focus:outline-none focus:border-indigo-600 transition-colors resize-none text-sm font-medium shadow-sm"
                  placeholder="Tell us about your space, requirements, and timeline..."
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.15em] text-stone-400 mb-4">
                  How did you hear about us?
                </label>
                <select
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white border border-stone-200 rounded-[1.5rem] text-stone-900 focus:outline-none focus:border-indigo-600 transition-colors text-sm font-medium shadow-sm"
                >
                  <option value="">Select one</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Instagram / Facebook">Instagram / Facebook</option>
                  <option value="Friend / Family Referral">Friend / Family Referral</option>
                  <option value="Justdial / Sulekha">Justdial / Sulekha</option>
                  <option value="Saw our work online">Saw our work online</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="group w-full px-8 py-6 bg-stone-950 text-white rounded-[1.5rem] font-black text-xs tracking-widest uppercase transition-all duration-300 hover:bg-stone-800 active:scale-95 flex items-center justify-center shadow-2xl"
                >
                  Send Message <Send className="ml-4 w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-stone-400 mt-8 tracking-wide">
                  We respect your privacy. Your details will never be shared.
                </p>
              </div>
            </form>
          </div>

          {/* Section 2: Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-stone-50/50 border border-stone-200/80 rounded-[2.5rem] p-12 shadow-sm">
              <h3 className="text-2xl font-extrabold text-stone-950 mb-10 tracking-tight">
                Get in Touch Directly
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-stone-200 text-stone-900 rounded-2xl flex items-center justify-center font-black text-xs shadow-sm">
                    📞
                  </div>
                  <div className="ml-6">
                    <h4 className="text-stone-950 font-black text-[10px] uppercase tracking-wider mb-2">Phone</h4>
                    <p className="text-sm text-stone-600 hover:text-indigo-600 transition duration-300 mb-1">+91 98765 43210</p>
                    <p className="text-sm text-stone-600 hover:text-indigo-600 transition duration-300">+91 87654 32109 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-stone-200 text-stone-900 rounded-2xl flex items-center justify-center font-black text-xs shadow-sm">
                    ✉️
                  </div>
                  <div className="ml-6">
                    <h4 className="text-stone-950 font-black text-[10px] uppercase tracking-wider mb-2">Email</h4>
                    <p className="text-sm text-stone-600 hover:text-indigo-600 transition duration-300 truncate mb-1">hello@cube4spaces.com</p>
                    <p className="text-sm text-stone-600 hover:text-indigo-600 transition duration-300 truncate">projects@cube4spaces.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-stone-200 text-stone-900 rounded-2xl flex items-center justify-center font-black text-xs shadow-sm">
                    🕘
                  </div>
                  <div className="ml-6">
                    <h4 className="text-stone-950 font-black text-[10px] uppercase tracking-wider mb-2">Office Hours</h4>
                    <p className="text-sm text-stone-600 mb-1">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-xs text-stone-400 italic">Sun: Closed (Site visits by appointment)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-stone-200 text-stone-900 rounded-2xl flex items-center justify-center font-black text-xs shadow-sm">
                    📍
                  </div>
                  <div className="ml-6">
                    <h4 className="text-stone-950 font-black text-[10px] uppercase tracking-wider mb-2">Office Address</h4>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      #15, 5th Cross, Race Course Road<br />
                      Opposite to Railway Station<br />
                      Coimbatore – 641018<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="border-t border-stone-200/60 pt-8">
                  <h4 className="text-stone-950 font-black text-[10px] uppercase tracking-wider mb-3">Service Areas</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    We primarily serve: <strong>Coimbatore | Chennai | Bangalore | Mumbai | Pune | Hyderabad</strong>
                  </p>
                  <p className="text-[10px] text-stone-400 mt-3 italic">
                    *Travel available for larger projects – just ask.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Connect Buttons */}
            <div className="bg-stone-950 text-white rounded-[2.5rem] p-12 border border-stone-900 shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-4 tracking-tight">Prefer a Quick Chat?</h3>
              <p className="text-sm text-stone-400 mb-10 leading-relaxed">
                Click the WhatsApp button to start a conversation. We typically reply within 30 minutes during business hours.
              </p>
              <div className="space-y-5">
                <a 
                  href="https://wa.me/918765432109" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full px-6 py-5 bg-emerald-600 text-white rounded-2xl font-black text-xs tracking-widest uppercase flex items-center justify-center hover:bg-emerald-500 active:scale-95 transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-3" />
                  Chat on WhatsApp
                </a>
                <button 
                  onClick={() => alert('Request a Callback clicked')}
                  className="w-full px-6 py-5 bg-transparent text-stone-300 border border-stone-800 rounded-2xl font-black text-xs tracking-widest uppercase flex items-center justify-center hover:bg-stone-900 active:scale-95 transition"
                >
                  Request a Callback
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Section: Google Maps Section */}
        <div className="mt-28 max-w-[1700px] mx-auto">
          <div className="bg-stone-50/50 border border-stone-200/80 rounded-[2.5rem] p-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-stone-950 mb-3 tracking-tight">Find Us Here</h3>
                <p className="text-[10px] text-stone-400 uppercase tracking-[0.25em]">Our Main Design Studio & Office</p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-indigo-600 font-extrabold hover:text-indigo-500 transition mt-6 md:mt-0 gap-3"
              >
                View on Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="w-full h-[450px] rounded-[2rem] overflow-hidden border border-stone-200 shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.101235332616!2d76.9558443750419!3d11.01397028909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85906a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sCoimbatore%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1715000000000!3m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="grayscale contrast-[95%]"
              />
            </div>
          </div>
        </div>

       

       

        {/* Closing Section */}
        <div className="mt-20 max-w-2xl mx-auto rounded-[2.5rem] bg-stone-50 border border-stone-200/80 p-12 text-center">
          <h3 className="text-xl font-extrabold text-stone-950 mb-3 tracking-tight">We'll Get Back to You Soon</h3>
          <p className="text-sm text-stone-500 leading-relaxed max-w-md mx-auto">
            We know you're excited about your space — and so are we. Every inquiry is personally read by a real person. Expect a response within 24 hours, often sooner.
          </p>
        </div>

      </div>
    </section>
  );
}