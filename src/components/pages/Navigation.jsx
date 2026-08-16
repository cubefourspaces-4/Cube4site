import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ExternalLink, ArrowUpRight, Menu, X } from "lucide-react";
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
    `font-['Inter',sans-serif] text-base font-medium px-4 py-2.5 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
    }`;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        
        {/* Logo Section */}
        <Link
          to="/"
          className="group flex items-center gap-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white p-1.5 shadow-sm transition-all group-hover:border-indigo-200 group-hover:shadow-md">
            <img
              src={logo}
              alt="Cube4Spaces Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-['Poppins',sans-serif] text-2xl font-bold tracking-tight text-gray-900">
              CUBE4SPACES<span className="text-indigo-600">.</span>
            </span>
            <span className="font-['Inter',sans-serif] text-sm font-medium text-gray-500">
              Design · Build · Handover
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 md:flex">
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
              className={`font-['Inter',sans-serif] flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-200 ${
                servicesOpen
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
              }`}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-[calc(100%+8px)] w-72 -translate-x-1/2 origin-top rounded-2xl border border-gray-100 bg-white p-2.5 shadow-xl transition-all duration-300 ${
                servicesOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-2 scale-95 opacity-0"
              }`}
            >
              <div className="px-3 pb-2 pt-2">
                <span className="font-['Poppins',sans-serif] text-sm font-semibold text-gray-900">
                  Our Services
                </span>
                <p className="font-['Inter',sans-serif] mt-1 text-sm text-gray-500">
                  Integrated design, construction, and turnkey execution.
                </p>
              </div>

              <div className="mt-2 flex flex-col gap-1 border-t border-gray-100 pt-2">
                {serviceItems.map((service) => (
                  <NavLink
                    key={service.name}
                    to={service.path}
                    className={({ isActive }) =>
                      `group flex items-center justify-between rounded-xl px-3 py-3 transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                      }`
                    }
                  >
                    <span className="font-['Inter',sans-serif] text-sm font-medium">
                      {service.name}
                    </span>
                    <ExternalLink className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
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
            className="font-['Inter',sans-serif] inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-indigo-700 hover:shadow-md active:scale-95"
          >
            Get Quote
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[800px] border-t border-gray-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto w-full px-5 py-6 sm:px-8">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-['Inter',sans-serif] rounded-xl px-4 py-3.5 text-lg font-medium transition-all ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="my-6 border-t border-gray-100 pt-6">
            <span className="font-['Poppins',sans-serif] px-4 text-sm font-semibold text-gray-400">
              SERVICES
            </span>

            <div className="mt-4 flex flex-col gap-2">
              {serviceItems.map((service) => (
                <NavLink
                  key={service.name}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-['Inter',sans-serif] rounded-xl border px-4 py-3.5 text-base font-medium transition-all ${
                      isActive
                        ? "border-indigo-100 bg-indigo-50 text-indigo-700"
                        : "border-transparent text-gray-700 hover:bg-gray-50"
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
            className="font-['Inter',sans-serif] mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-lg font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 active:scale-95"
          >
            Get Quote
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}