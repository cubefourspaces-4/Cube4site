import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, ExternalLink } from "lucide-react";
import logo from "../../assests/cubelogo.webp";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Change styles on scroll to add a subtle shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white/70 backdrop-blur-lg border-b border-stone-200/40 ${scrolled ? "shadow-sm py-2.5" : "py-4"}`}>
      <nav className="mx-auto max-w-[1700px] px-8 lg:px-16 w-full flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 object-contain rounded-2xl shadow-sm"
            />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-stone-950 font-[family-name:Inter,sans-serif]">
            CUBE4SPACES<span className="text-indigo-600">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-2xl text-[10px] font-extrabold tracking-[0.15em] transition-all duration-300 uppercase
                ${isActive 
                  ? "text-white bg-stone-950 shadow-md" 
                  : "text-stone-600 hover:text-stone-950 hover:bg-stone-100/60"}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 200)}
              className={`px-5 py-2.5 rounded-2xl text-[10px] font-extrabold tracking-[0.15em] transition-all duration-300 text-stone-600 hover:text-stone-950 hover:bg-stone-100/60 flex items-center gap-2 focus:outline-none uppercase ${
                servicesOpen ? "text-stone-950 bg-stone-100/60" : ""
              }`}
            >
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mt-3 w-64 bg-white border border-stone-100 rounded-3xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] py-3 flex flex-col transition-all duration-300 origin-top z-50 ${
                servicesOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              }`}
            >
              {serviceItems.map((service) => (
                <NavLink
                  key={service.name}
                  to={service.path}
                  className={({ isActive }) =>
                    `px-6 py-3.5 text-[10px] font-bold tracking-widest transition-colors duration-200 flex items-center justify-between uppercase
                    ${isActive ? "text-indigo-600 bg-stone-50" : "text-stone-600 hover:text-stone-950 hover:bg-stone-50"}`
                  }
                >
                  {service.name}
                  <ExternalLink className="w-3.5 h-3.5 opacity-30" />
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection('quote')}
            className="bg-stone-950 text-white px-7 py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.15em] hover:bg-stone-800 active:scale-[96%] shadow-lg transition-all duration-300"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-2xl hover:bg-stone-100 transition-colors text-stone-950 border border-stone-200/60"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-stone-950 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-full h-0.5 bg-stone-950 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-0.5 bg-stone-950 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 border-t border-stone-100 mt-5 shadow-inner" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-8 space-y-4 bg-white border-t border-stone-200/30">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-xs font-black tracking-widest uppercase transition-colors ${isActive ? "text-indigo-600" : "text-stone-500 hover:text-stone-950"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <span className="text-[9px] font-black tracking-[0.25em] text-stone-400 pt-3 border-t border-stone-200/50 uppercase">
            Services
          </span>
          {serviceItems.map((service) => (
            <NavLink
              key={service.name}
              to={service.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-xs pl-4 border-l-2 font-bold transition-colors ${
                  isActive ? "text-indigo-600 border-indigo-600" : "text-stone-500 border-stone-200 hover:text-stone-950"
                }`
              }
            >
              {service.name}
            </NavLink>
          ))}
          <button 
            onClick={() => { scrollToSection('quote'); setIsOpen(false); }}
            className="w-full bg-stone-950 text-white py-3.5 rounded-2xl font-black text-xs tracking-widest uppercase mt-4"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}