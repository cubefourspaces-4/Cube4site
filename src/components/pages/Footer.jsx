import React from "react";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  X,
} from "lucide-react";
import Logo from "../../assests/cubelogo.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 py-12 md:px-16 md:py-20 flex justify-center font-[family-name:Inter,sans-serif]">
      <div className="mx-auto grid w-full max-w-[1700px] grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">
        
        {/* Left Brand Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-indigo-900 p-10 text-white shadow-[0_20px_60px_rgba(79,70,229,0.2)] flex flex-col justify-between min-h-[480px]">
          <div>
            <img
              src={Logo}
              alt="Cube4Spaces Logo"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <div className="mt-28 max-w-[280px]">
              <h3 className="text-3xl font-extrabold leading-tight tracking-tight font-[family-name:Inter,sans-serif]">
                Smarter design execution, powered by precision.
              </h3>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-indigo-300">Stay in touch!</p>
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, href: "#" },
                { icon: X, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-white/20 border border-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
        </div>

        {/* Right Content Panel */}
        <div className="relative rounded-[2.5rem] bg-stone-50/50 p-10 md:p-14 shadow-sm border border-stone-200/60 flex flex-col justify-between">
          {/* Floating Badge */}
          <div className="absolute -top-8 right-8 hidden md:block">
            <div className="flex h-24 w-24 rotate-12 items-center justify-center rounded-[2rem] bg-gradient-to-br from-indigo-400 to-indigo-800 shadow-[0_18px_35px_rgba(79,70,229,0.28)]">
              <img
                src={Logo}
                alt="Cube4Spaces Mark"
                className="h-11 w-11 object-contain brightness-0 invert"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mt-4 text-stone-900">
            {/* Navigation */}
            <div>
              <p className="mb-8 text-[9px] font-black uppercase tracking-[0.25em] text-stone-400 font-[family-name:Inter,sans-serif]">Navigation</p>
              <ul className="space-y-4 text-sm font-extrabold text-stone-950">
                {["How it works", "Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                  <li key={item}>
                    <a href="/" className="transition hover:text-indigo-600 duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="mb-8 text-[9px] font-black uppercase tracking-[0.25em] text-stone-400 font-[family-name:Inter,sans-serif]">Company</p>
              <ul className="space-y-4 text-sm font-extrabold text-stone-950">
                {[
                  "Blog",
                  "About",
                  "Terms and Condition",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a href="/" className="transition hover:text-indigo-600 duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col justify-between h-full">
              <div className="pt-1">
                <p className="text-[10px] font-black tracking-[0.15em] text-indigo-600 uppercase mb-3 font-[family-name:Inter,sans-serif]">
                  Newsletter
                </p>
                <h3 className="text-2xl font-extrabold leading-tight text-stone-950 tracking-tight">
                  Stay ahead with Cube4.
                </h3>
              </div>

              <div className="mt-8 md:mt-0">
                <div className="flex items-center rounded-2xl bg-white p-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.05)] border border-stone-200">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="h-11 flex-1 bg-transparent px-3 text-xs text-stone-950 placeholder:text-stone-400 focus:outline-none font-medium"
                  />
                  <button className="inline-flex h-11 items-center justify-center rounded-xl bg-stone-950 px-5 text-xs font-black text-white transition hover:bg-stone-800 uppercase tracking-wider shadow-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-stone-200/80 pt-6 text-[10px] font-semibold text-stone-400 mt-12">
            © {currentYear} Cube4Spaces. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}