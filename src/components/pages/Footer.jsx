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
    <footer className="flex w-full justify-center bg-slate-50 px-4 py-8 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr]">
        
        {/* Left Brand Card */}
        <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl md:min-h-[480px] md:rounded-[2.5rem] md:p-10 lg:p-12">
          {/* Subtle Background Glows */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-600/20 blur-[80px]" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-indigo-500/20 blur-[80px]" />

          <div className="relative z-10">
            <img
              src={Logo}
              alt="Cube4Spaces Logo"
              className="h-12 w-auto object-contain brightness-0 invert md:h-16"
            />
            <div className="mt-16 max-w-[300px] md:mt-24">
              <h3 className="font-['Poppins',sans-serif] text-3xl font-black leading-tight  text-white md:text-4xl lg:text-4xl">
                Smarter design execution.
              </h3>
            </div>
          </div>

          <div className="relative z-10 mt-12 md:mt-0">
            <p className="font-['Poppins',sans-serif] mb-3 text-[10px] font-bold uppercase tracking-wider text-indigo-400 md:mb-5 md:text-xs md:tracking-[0.2em]">
              Stay in touch
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              {[
                { icon: MessageCircle, href: "https://wa.me/919876543210" },
                { icon: X, href: "https://twitter.com/cube4spaces" },
                { icon: Instagram, href: "https://www.instagram.com/cube4spaces/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/cube4spaces/" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:border-indigo-500 hover:bg-indigo-600 md:h-12 md:w-12 md:rounded-2xl"
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Content Panel */}
        <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:rounded-[2.5rem] md:p-10 lg:p-12">
          
          {/* Floating Badge (Desktop Only) */}
          <div className="absolute -right-6 -top-6 hidden lg:block xl:-right-8 xl:-top-8">
            <div className="flex h-20 w-20 rotate-12 items-center justify-center rounded-[1.5rem] bg-indigo-600 shadow-lg shadow-indigo-600/25 xl:h-24 xl:w-24 xl:rounded-[2rem]">
              <img
                src={Logo}
                alt="Cube4Spaces Mark"
                className="h-10 w-10 object-contain brightness-0 invert xl:h-12 xl:w-12"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            
            {/* Navigation */}
            <div>
              <p className="font-['Poppins',sans-serif] mb-4 text-[10px] font-bold uppercase tracking-wider text-slate-400 md:mb-6 md:text-xs md:tracking-[0.2em]">
                Navigation
              </p>
              <ul className="flex flex-col gap-3 md:gap-4">
                {["How it works", "Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="font-['Inter',sans-serif] text-sm font-semibold text-slate-800 transition-colors hover:text-indigo-600 md:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="font-['Poppins',sans-serif] mb-4 text-[10px] font-bold uppercase tracking-wider text-slate-400 md:mb-6 md:text-xs md:tracking-[0.2em]">
                Company
              </p>
              <ul className="flex flex-col gap-3 md:gap-4">
                {[
                  "Blog",
                  "About",
                  "Terms and Conditions",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="/"
                      className="font-['Inter',sans-serif] text-sm font-semibold text-slate-800 transition-colors hover:text-indigo-600 md:text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col justify-between sm:col-span-2 lg:col-span-1">
              <div>
                <p className="font-['Poppins',sans-serif] mb-2 text-[10px] font-bold uppercase tracking-wider text-indigo-600 md:mb-3 md:text-xs md:tracking-[0.2em]">
                  Newsletter
                </p>
                <h3 className="font-['Poppins',sans-serif] text-2xl font-black leading-tight tracking-tight text-slate-950 md:text-3xl lg:text-4xl">
                  Stay ahead with Cube4.
                </h3>
              </div>

              <div className="mt-6 md:mt-8 lg:mt-0">
                <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1.5 shadow-sm md:rounded-2xl md:p-2">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="font-['Inter',sans-serif] h-10 flex-1 bg-transparent px-3 text-sm font-medium text-slate-950 placeholder:text-slate-400 focus:outline-none md:h-12 md:px-4 md:text-base"
                  />
                  <button className="font-['Inter',sans-serif] inline-flex h-10 items-center justify-center rounded-lg bg-slate-950 px-4 text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-indigo-600 md:h-12 md:rounded-xl md:px-6 md:text-xs">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="font-['Inter',sans-serif] mt-10 border-t border-slate-100 pt-5 text-center text-xs font-medium text-slate-400 sm:text-left md:mt-16 md:pt-6 md:text-sm">
            © {currentYear} Cube4Spaces. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}