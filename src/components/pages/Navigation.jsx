import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ExternalLink, ArrowUpRight } from "lucide-react";
import logo from "../../assests/cubelogo.webp";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Contact", path: "/" },
  ];

  const serviceItems = [
    { name: "Interior Design", path: "/" },
    { name: "Construction", path: "/" },
    { name: "Turnkey Solutions", path: "/" },
  ];

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all duration-300 ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-white transition-all duration-500 ${
        scrolled
          ? "border-b border-blue-100/70 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex w-full max-w-[1700px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 xl:px-16 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo Section */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white p-1.5 shadow-sm transition-all group-hover:border-blue-300 group-hover:bg-blue-50">
            <img
              src={logo}
              alt="Cube4Spaces Logo"
              className="h-full w-full rounded-xl object-contain"
            />
          </div>

          <div className="leading-none">
            <span className="block font-[family-name:'Space_Grotesk','Plus_Jakarta_Sans',Inter,sans-serif] text-lg font-extrabold tracking-[-0.04em] text-slate-950">
              CUBE4SPACES
              <span className="text-blue-700">.</span>
            </span>

            <span className="mt-1 hidden text-[9px] font-black uppercase tracking-[0.22em] text-slate-400 sm:block">
              Design · Build · Handover
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center rounded-full border border-blue-100 bg-white px-1.5 py-1.5 shadow-sm md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={navLinkClass}>
              {link.name}
            </NavLink>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.16em] transition-all duration-300 ${
                servicesOpen
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute right-0 top-[calc(100%+14px)] w-72 origin-top-right rounded-[1.5rem] border border-blue-100 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.12)] transition-all duration-300 ${
                servicesOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="px-4 pb-3 pt-3">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                  Services
                </span>
                <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
                  Integrated design, construction, and turnkey execution.
                </p>
              </div>

              <div className="border-t border-blue-50 pt-2">
                {serviceItems.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-[1.15rem] px-4 py-3.5 transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                      }`
                    }
                  >
                    <span className="text-xs font-black uppercase tracking-[0.13em]">
                      {service.name}
                    </span>

                    <ExternalLink className="h-3.5 w-3.5 opacity-35 transition-all group-hover:opacity-100" />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => scrollToSection("quote")}
            className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-700 px-6 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-700/15 transition-all duration-300 hover:bg-blue-800 active:scale-[0.98]"
          >
            Get Quote
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-slate-950 shadow-sm transition-all hover:bg-blue-50 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-slate-950 transition-all duration-300 ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-slate-950 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-slate-950 transition-all duration-300 ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-500 md:hidden ${
          isOpen
            ? "max-h-[620px] border-t border-blue-100 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1700px] px-5 py-5 sm:px-8">
          <div className="rounded-[1.5rem] border border-blue-100 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-[1.15rem] px-4 py-3.5 text-xs font-black uppercase tracking-[0.16em] transition-all ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="my-5 border-t border-blue-50 pt-5">
              <span className="px-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
                Services
              </span>

              <div className="mt-3 grid gap-2">
                {serviceItems.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `rounded-[1.15rem] border px-4 py-3.5 text-xs font-bold uppercase tracking-[0.13em] transition-all ${
                        isActive
                          ? "border-blue-200 bg-blue-50 text-blue-700"
                          : "border-blue-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                      }`
                    }
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                scrollToSection("quote");
                setIsOpen(false);
              }}
              className="inline-flex w-full items-center justify-center gap-3 rounded-[1.15rem] bg-blue-700 px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-700/15 transition-all hover:bg-blue-800 active:scale-[0.98]"
            >
              Get Quote
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}