import { useEffect, useState } from "react";
import {
  ExternalLink,
  Send,
  Phone,
  Mail,
  Clock,
  MapPin,

} from "lucide-react";
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

  const inputClass =
    "font-['Inter',sans-serif] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm md:text-base font-medium text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50";

  const labelClass =
    "font-['Poppins',sans-serif] mb-2 block text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500";

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-slate-50 py-12 md:py-24"
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-indigo-200/30 blur-[100px] md:h-[400px] md:w-[400px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-slate-200/40 blur-[100px] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="mb-10 grid gap-6 md:mb-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 shadow-sm md:mb-6 md:px-5 md:py-2.5">
 
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-700 md:text-xs md:tracking-[0.2em]">
                Get In Touch
              </span>
            </div>

            <h2 className="font-['Poppins',sans-serif] max-w-4xl text-3xl font-black leading-[1.1] tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
              Let’s Discuss
              <span className="block text-indigo-600">
                Your Space Requirement.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-slate-600 md:text-base lg:text-lg">
              Share your project requirement, budget, location, and timeline.
              Our team will review the details and guide you with the right
              design, construction, or turnkey execution approach.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
              {["Consultation", "Budgeting", "Execution"].map((item) => (
                <span
                  key={item}
                  className="font-['Poppins',sans-serif] rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm md:px-4 md:py-2 md:text-xs md:tracking-[0.15em]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] md:gap-8">
          
          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:rounded-[2rem] md:p-10 lg:p-12">
            <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-100 pb-6 md:mb-10 md:flex-row md:items-end md:pb-8">
              <div>
                <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 md:text-xs">
                  Project Enquiry
                </span>
                <h3 className="font-['Poppins',sans-serif] mt-2 text-2xl font-bold leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                  Send Us a Message
                </h3>
              </div>
              <p className="font-['Inter',sans-serif] max-w-sm text-xs font-medium leading-relaxed text-slate-500 md:text-sm">
                This form helps us qualify scope, timeline, and project
                readiness before the first discussion.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-7">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7">
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

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7">
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
                    <option value="">Select one</option>
                    <option value="Residential Interiors">Residential Interiors</option>
                    <option value="Commercial Interiors">Commercial Interiors</option>
                    <option value="Construction Only">Construction Only</option>
                    <option value="Turnkey">Turnkey (Construction + Interiors)</option>
                    <option value="Modular Kitchen">Modular Kitchen / Wardrobe Only</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-7">
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
                    placeholder="e.g., Coimbatore, Bangalore"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Estimated Budget ₹
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select range</option>
                    <option value="< 2 Lakhs">Less than ₹2 lakhs</option>
                    <option value="2-5 Lakhs">₹2 – ₹5 lakhs</option>
                    <option value="5-10 Lakhs">₹5 – ₹10 lakhs</option>
                    <option value="10-20 Lakhs">₹10 – ₹20 lakhs</option>
                    <option value="20-35 Lakhs">₹20 – ₹35 lakhs</option>
                    <option value="35+ Lakhs">₹35 lakhs+</option>
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none md:rows-6`}
                  placeholder="Tell us about your space, requirements, and timeline..."
                />
              </div>

              <div>
                <label htmlFor="source" className={labelClass}>
                  How did you hear about us?
                </label>
                <select
                  id="source"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select one</option>
                  <option value="Google">Google Search</option>
                  <option value="Social">Instagram / Facebook</option>
                  <option value="Referral">Friend / Family Referral</option>
                  <option value="Directory">Justdial / Sulekha</option>
                  <option value="Online">Saw our work online</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-2 md:pt-4">
                <button
                  type="submit"
                  className="font-['Inter',sans-serif] group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-indigo-700 active:scale-95 md:rounded-2xl md:px-8 md:py-5 md:text-base md:tracking-[0.15em]"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
                </button>
                <p className="font-['Inter',sans-serif] mt-4 text-center text-[10px] font-medium text-slate-400 md:mt-5 md:text-xs">
                  We respect your privacy. Your details will never be shared.
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6 md:gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-8 lg:p-10">
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-600 md:text-xs md:tracking-[0.2em]">
                Direct Contact
              </span>

              <h3 className="font-['Poppins',sans-serif] mt-2 text-2xl font-bold leading-tight text-slate-950 md:mt-3 md:text-3xl lg:text-4xl">
                Reach Our Team
              </h3>

              <div className="mt-6 space-y-5 md:mt-8 md:space-y-7">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 md:h-12 md:w-12 md:rounded-2xl">
                    <Phone className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h4 className="font-['Poppins',sans-serif] mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 md:mb-2 md:text-xs md:tracking-[0.15em]">
                      Phone
                    </h4>
                    <p className="font-['Inter',sans-serif] text-sm font-semibold text-slate-700 md:text-base">
                      +91 98765 43210
                    </p>
                    <p className="font-['Inter',sans-serif] mt-0.5 text-sm font-semibold text-slate-700 md:mt-1 md:text-base">
                      +91 87654 32109
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 md:h-12 md:w-12 md:rounded-2xl">
                    <Mail className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-['Poppins',sans-serif] mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 md:mb-2 md:text-xs md:tracking-[0.15em]">
                      Email
                    </h4>
                    <p className="font-['Inter',sans-serif] truncate text-sm font-semibold text-slate-700 md:text-base">
                      hello@cube4spaces.com
                    </p>
                    <p className="font-['Inter',sans-serif] mt-0.5 truncate text-sm font-semibold text-slate-700 md:mt-1 md:text-base">
                      projects@cube4spaces.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 md:h-12 md:w-12 md:rounded-2xl">
                    <Clock className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h4 className="font-['Poppins',sans-serif] mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 md:mb-2 md:text-xs md:tracking-[0.15em]">
                      Office Hours
                    </h4>
                    <p className="font-['Inter',sans-serif] text-sm font-semibold text-slate-700 md:text-base">
                      Mon – Sat: 9:00 AM – 7:00 PM
                    </p>
                    <p className="font-['Inter',sans-serif] mt-1 text-xs font-medium text-slate-500 md:text-sm">
                      Sunday visits by appointment
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600 md:h-12 md:w-12 md:rounded-2xl">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <h4 className="font-['Poppins',sans-serif] mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 md:mb-2 md:text-xs md:tracking-[0.15em]">
                      Office Address
                    </h4>
                    <p className="font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-slate-600 md:text-base">
                      #15, 5th Cross, Race Course Road
                      <br />
                      Opposite to Railway Station
                      <br />
                      Coimbatore – 641018
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5 md:mt-8 md:pt-6">
                <h4 className="font-['Poppins',sans-serif] mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 md:mb-3 md:text-xs md:tracking-[0.15em]">
                  Service Areas
                </h4>
                <p className="font-['Inter',sans-serif] text-sm font-medium leading-relaxed text-slate-600 md:text-base">
                  Coimbatore, Chennai, Bangalore, Mumbai, Pune, and Hyderabad.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Map Section */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:mt-8 md:rounded-[2rem] md:p-8 lg:p-10">
          <div className="mb-6 grid gap-4 md:mb-8 md:grid-cols-[1fr_auto] md:items-end md:gap-6">
            <div>
              <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-600 md:text-xs md:tracking-[0.2em]">
                Location
              </span>
              <h3 className="font-['Poppins',sans-serif] mt-1 text-2xl font-bold leading-tight text-slate-950 md:mt-2 md:text-3xl lg:text-4xl">
                Find Us Here
              </h3>
              <p className="font-['Inter',sans-serif] mt-2 text-xs font-medium text-slate-500 md:mt-3 md:text-sm">
                Our main design studio and project coordination office.
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Inter',sans-serif] inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-indigo-700 transition-all hover:border-indigo-200 hover:bg-white md:rounded-full md:px-5 md:text-xs md:tracking-[0.15em]"
            >
              View on Google Maps
              <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
          </div>

          <div className="h-[300px] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm md:h-[420px] md:rounded-[1.5rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.101235332616!2d76.9558443750419!3d11.01397028909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85906a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sCoimbatore%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1715000000000!3m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="grayscale contrast-100 filter transition-all hover:grayscale-0"
            />
          </div>
        </div>

        {/* Closing Note */}
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 text-center shadow-sm md:mt-8 md:rounded-[2rem] md:p-8">
          <span className="font-['Poppins',sans-serif] text-[10px] font-bold uppercase tracking-wider text-indigo-600 md:text-xs md:tracking-[0.2em]">
            Response SLA
          </span>
          <h3 className="font-['Poppins',sans-serif] mt-2 text-xl font-bold leading-tight text-slate-950 md:mt-3 md:text-2xl lg:text-3xl">
            We’ll Get Back to You Soon
          </h3>
          <p className="font-['Inter',sans-serif] mx-auto mt-3 max-w-md text-xs font-medium leading-relaxed text-slate-600 md:mt-4 md:text-sm">
            Every inquiry is reviewed by our team. Expect a response within 24
            hours, often sooner.
          </p>
        </div>
        
      </div>
    </section>
  );
}