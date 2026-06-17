import { useEffect, useState } from "react";
import {
  ExternalLink,
  Send,
  Phone,
  Mail,
  Clock,
  MapPin,
  Sparkles,
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

  const headingFont =
    "font-[family-name:'Space_Grotesk','Plus_Jakarta_Sans',Inter,sans-serif]";

  const inputClass =
    "w-full rounded-[1.25rem] border border-blue-100 bg-white px-5 py-4 text-sm font-medium text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100";

  const labelClass =
    "mb-3 block text-[10px] font-black uppercase tracking-[0.16em] text-slate-500";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4f8ff] py-24 font-[family-name:Inter,sans-serif] text-slate-950 md:py-32"
    >
      {/* Blue Background Effects */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-sky-300/20 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-5 py-2.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-700" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                Get In Touch
              </span>
            </div>

            <h2
              className={`${headingFont} max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-slate-950 md:text-5xl`}
            >
              Let’s Discuss
              <span className="block text-blue-700">
                Your Space Requirement.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm font-medium leading-7 text-slate-600 md:text-base">
              Share your project requirement, budget, location, and timeline.
              Our team will review the details and guide you with the right
              design, construction, or turnkey execution approach.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Consultation", "Budgeting", "Execution"].map((item) => (
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

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Contact Form */}
          <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-[0_24px_70px_rgba(37,99,235,0.10)] md:p-10 lg:p-12">
            <div className="mb-10 flex flex-col justify-between gap-5 border-b border-blue-50 pb-8 md:flex-row md:items-end">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                  Project Enquiry
                </span>

                <h3
                  className={`${headingFont} mt-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl`}
                >
                  Send Us a Message
                </h3>
              </div>

              <p className="max-w-md text-sm font-medium leading-7 text-slate-500">
                This form helps us qualify scope, timeline, and project
                readiness before the first discussion.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
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

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
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
                    <option value="Residential Interiors">
                      Residential Interiors
                    </option>
                    <option value="Commercial Interiors">
                      Commercial Interiors
                    </option>
                    <option value="Construction Only">Construction Only</option>
                    <option value="Turnkey (Construction + Interiors)">
                      Turnkey (Construction + Interiors)
                    </option>
                    <option value="Modular Kitchen / Wardrobe Only">
                      Modular Kitchen / Wardrobe Only
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
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
                    <option value="Less than ₹2 lakhs">
                      Less than ₹2 lakhs
                    </option>
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
                <label htmlFor="message" className={labelClass}>
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className={`${inputClass} resize-none`}
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
                  <option value="Google Search">Google Search</option>
                  <option value="Instagram / Facebook">
                    Instagram / Facebook
                  </option>
                  <option value="Friend / Family Referral">
                    Friend / Family Referral
                  </option>
                  <option value="Justdial / Sulekha">Justdial / Sulekha</option>
                  <option value="Saw our work online">
                    Saw our work online
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-4 rounded-[1.25rem] bg-blue-700 px-8 py-5 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-700/20 transition-all hover:bg-blue-800 active:scale-[0.99]"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="mt-6 text-center text-[10px] font-medium tracking-wide text-slate-400">
                  We respect your privacy. Your details will never be shared.
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm md:p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                Direct Contact
              </span>

              <h3
                className={`${headingFont} mt-3 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950`}
              >
                Reach Our Team
              </h3>

              <div className="mt-8 space-y-7">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Phone
                    </h4>
                    <p className="text-sm font-medium text-slate-600">
                      +91 98765 43210
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      +91 87654 32109
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Email
                    </h4>
                    <p className="truncate text-sm font-medium text-slate-600">
                      hello@cube4spaces.com
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-slate-600">
                      projects@cube4spaces.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Office Hours
                    </h4>
                    <p className="text-sm font-medium text-slate-600">
                      Mon – Sat: 9:00 AM – 7:00 PM
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400">
                      Sunday visits by appointment
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                      Office Address
                    </h4>
                    <p className="text-sm font-medium leading-7 text-slate-600">
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

              <div className="mt-8 border-t border-blue-50 pt-7">
                <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                  Service Areas
                </h4>
                <p className="text-sm font-medium leading-7 text-slate-600">
                  Coimbatore, Chennai, Bangalore, Mumbai, Pune, and Hyderabad.
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* Map Section */}
        <div className="mt-8 rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm md:p-8 lg:p-10">
          <div className="mb-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                Location
              </span>

              <h3
                className={`${headingFont} mt-3 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl`}
              >
                Find Us Here
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-slate-500">
                Our main design studio and project coordination office.
              </p>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-blue-700 transition-all hover:border-blue-300 hover:bg-blue-100"
            >
              View on Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="h-[420px] overflow-hidden rounded-[1.5rem] border border-blue-100 bg-blue-50 shadow-sm">
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

        {/* Closing Note */}
        <div className="mx-auto mt-8 max-w-2xl rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-sm">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
            Response SLA
          </span>

          <h3
            className={`${headingFont} mt-3 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950`}
          >
            We’ll Get Back to You Soon
          </h3>

          <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-7 text-slate-500">
            Every inquiry is reviewed by our team. Expect a response within 24
            hours, often sooner.
          </p>
        </div>
      </div>
    </section>
  );
}