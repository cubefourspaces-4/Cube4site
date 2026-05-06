import React, { useState } from "react";
import { X,MessageCircle } from "lucide-react";

// Importing your local assets
import Image1 from '../../assests/gallery/gallery1.webp';
import Image2 from '../../assests/gallery/gallery2.webp';
import Image3 from '../../assests/gallery/gallery3.webp';
import Image4 from '../../assests/gallery/gallery4.webp';
import Image5 from '../../assests/team/herosection/cubehero3.webp';
import Image6 from '../../assests/team/herosection/cubehero4.webp';

const teamMembers = [
  { 
    id: 1, 
    img: Image1,
    category: "Electric Vehicle",
    title: "Kitchen Interior",
    views: 450,
    likes: 320,
    desc: "The Ener.Charge is our advanced wallbox for electric vehicles and masters both self-consumption, grid-stabilization, and dynamic power management." 
  },
  { 
    id: 2, 
    img: Image2,
    category: "Architecture",
    title: "Interior Design",
    views: 280,
    likes: 190,
    desc: "A luxury high-rise development focused on modern amenities and sustainability, providing aesthetic and functional living environments." 
  },
  { 
    id: 3, 
    img: Image3,
    category: "Commercial",
    title: "Global Command Center",
    views: 620,
    likes: 410,
    desc: "Next-generation data infrastructure command center designed for high resilience, security operations, and 24/7 reliability." 
  },
  { 
    id: 4, 
    img: Image4,
    category: "Interior",
    title: "Room",
    views: 390,
    likes: 240,
    desc: "Modern luxury residential transformation bringing out functional and warm aesthetics suitable for modern families." 
  },
  { 
    id: 5, 
    img: Image5,
    category: "Residential",
    title: "Urban House",
    views: 310,
    likes: 180,
    desc: "A sleek, urban detached residence designed to incorporate maximum natural light and sustainable materials." 
  },
  { 
    id: 6, 
    img: Image6,
    category: "Bespoke",
    title: "Workspace",
    views: 400,
    likes: 270,
    desc: "Ergonomic furniture and collaborative workspace layout for modern educational and business hubs." 
  },
  { 
    id: 7, 
    img: Image3,
    category: "Industrial",
    title: "Works",
    views: 210,
    likes: 95,
    desc: "Custom-built industrial infrastructure providing technical, durable spare-part workflows and efficient design." 
  },
  { 
    id: 8, 
    img: Image4,
    category: "Digital",
    title: "Lux Portal",
    views: 520,
    likes: 380,
    desc: "An intuitive, conversion-focused financial dashboard with top-tier user-experience and security." 
  }
];

export default function GalleryGrid() {
  const [activeId, setActiveId] = useState(1);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    const augmentedMember = {
      ...member,
      category: member.category || "General",
      title: member.title || member.name,
      views: member.views || Math.floor(Math.random() * 500),
      likes: member.likes || Math.floor(Math.random() * 300),
      desc: member.desc || `The project embodies innovation in ${member.category.toLowerCase()} design...`
    };
    setSelectedMember(augmentedMember);
    setActiveId(member.id);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const redirectToWhatsApp = (title) => {
    const message = encodeURIComponent(`Hello! I would like to know more about the project: ${title}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section className="bg-white py-28 md:py-40 font-[family-name:Inter,sans-serif] text-stone-900 min-h-screen flex justify-center">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-8 lg:px-12 w-full flex flex-col items-center">
        
        {/* Header Section */}
        <header className="text-center mb-20 md:mb-28 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-950 mb-6 font-[family-name:Inter,sans-serif]">
            OUR PROJECT GALLERY
          </h1>
          <p className="text-sm md:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed mb-8">
            Explore our curated projects, created with careful attention to detail, functionality, and modern execution.
          </p>
          <button 
            onClick={() => redirectToWhatsApp("Project Overview")}
            className="group inline-flex items-center gap-3 text-stone-950 border border-stone-200 hover:border-indigo-600 hover:text-indigo-600 rounded-full px-8 py-3 text-xs font-bold transition bg-stone-50/50 hover:bg-stone-50 font-[family-name:Inter,sans-serif] tracking-wider uppercase shadow-sm"
          >
            Chat on WhatsApp <MessageCircle className="w-4 h-4 text-indigo-600" />
          </button>
        </header>

        {/* Gallery Grid Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-24 px-2">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              onClick={() => openModal(member)}
              className={`group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl ${
                activeId === member.id 
                  ? "border-indigo-600 ring-4 ring-indigo-500/10" 
                  : "border-stone-200/80 hover:border-stone-400"
              }`}
            >
              <img 
                src={member.img} 
                alt={member.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-transparent flex flex-col justify-end p-8 md:p-9 transition-opacity duration-500 ${
                activeId === member.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-indigo-400 mb-3 font-[family-name:Inter,sans-serif]">
                  {member.category}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white truncate leading-tight font-[family-name:Inter,sans-serif]">
                  {member.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Aesthetic Minimal Popup Modal */}
        {selectedMember && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-md p-4 transition-opacity duration-300" 
            onClick={closeModal}
          >
            <div 
              className="relative max-w-3xl max-h-[90vh] w-full flex flex-col items-stretch justify-center rounded-[2.5rem] overflow-hidden bg-white shadow-2xl transition-all duration-500 p-10 md:p-14 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-extrabold rounded-full tracking-widest uppercase mb-6 mx-auto">
                {selectedMember.category}
              </span>
              
              <h2 className="text-3xl md:text-5xl font-extrabold text-stone-950 tracking-tight leading-none mb-6">
                {selectedMember.title}
              </h2>
              
              <p className="text-sm text-stone-600 font-normal leading-relaxed max-w-xl mx-auto mb-10">
                {selectedMember.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-stone-100 pt-8 w-full max-w-md mx-auto">
                <button 
                  onClick={() => redirectToWhatsApp(selectedMember.title)}
                  className="w-full sm:w-auto px-8 py-3.5 bg-stone-950 text-white hover:bg-stone-800 transition text-xs font-bold tracking-wider rounded-full shadow-md inline-flex items-center justify-center gap-3"
                >
                  Get Quote on WhatsApp <MessageCircle className="w-4 h-4 text-indigo-400" />
                </button>
              </div>

              {/* Custom Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white text-stone-950 hover:bg-stone-100 transition shadow-lg"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
}