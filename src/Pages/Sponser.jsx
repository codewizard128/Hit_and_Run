import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Zap, Plus, ExternalLink, X } from 'lucide-react';

// --- SUB-COMPONENTS ---

const Header = ({ title, subtitle }) => (
  <div className="text-center mb-16 max-w-4xl mx-auto px-6 relative z-10">
    <div className="inline-block px-4 py-1 mb-6 bg-red-600 transform -skew-x-12 border-l-4 border-red-400">
      <span className="block transform skew-x-12 text-white font-bold uppercase tracking-widest text-xs">
        Partners & Allies
      </span>
    </div>
    <h2 className="text-5xl md:text-7xl font-black italic text-white mb-6 tracking-tighter leading-[0.85]">
      {title}
    </h2>
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className="h-1 w-12 bg-red-600 transform -skew-x-12"></div>
      <div className="h-3 w-3 bg-red-600 transform -skew-x-12"></div>
      <div className="h-1 w-12 bg-red-600 transform -skew-x-12"></div>
    </div>
    <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto border-l-4 border-slate-700 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
      {subtitle}
    </p>
  </div>
);

// --- MOCK DATA GENERATOR ---
const generateSponsors = () => {
  const sponsors = Array(100).fill(null);
  
  // Fill some slots with dummy data
  const premiumSponsors = [
    { id: 1, name: "Hit and Run", img: "https://res.cloudinary.com/debuweamw/image/upload/v1766586180/WhatsApp_Image_2025-12-13_at_7.45.47_PM_xnriat.jpg", color: "bg-blue-900" },
  ];

  premiumSponsors.forEach(s => {
    sponsors[s.id] = s;
  });

  return sponsors;
};

const SponsorCell = ({ index, data, onClick }) => {
  const row = Math.floor(index / 10);
  const col = index % 10;
  const isDark = (row + col) % 2 === 1;
  
  // Base style for the chessboard look
  const baseClasses = `
    relative aspect-square flex items-center justify-center 
    transition-all duration-300 border border-slate-900/50
    ${isDark ? 'bg-slate-900/80' : 'bg-slate-900/40'}
    hover:z-20 hover:scale-110 hover:shadow-2xl hover:border-red-500/50 cursor-pointer
    group overflow-hidden
  `;

  return (
    <motion.div 
      className={baseClasses}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.005 }} // Staggered ripple load
      onClick={() => onClick(data, index)}
    >
      {data ? (
        // Occupied Cell
        <div className="w-full h-full p-4 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent opacity-60"></div>
          <img 
            src={data.img} 
            alt={data.name} 
            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 drop-shadow-lg relative z-10" 
          />
          {/* Shine effect */}
          <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine" />
        </div>
      ) : (
        // Empty Cell (Available)
        <div className="w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Plus className="text-red-600 mb-1" size={20} />
          <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">
            Sponsor
          </span>
        </div>
      )}
      
      {/* Coordinate Label (Optional - like real chess board) */}
      <div className="absolute bottom-1 right-1 text-[8px] text-slate-800 font-mono opacity-50 select-none">
        {String.fromCharCode(65 + col)}{8 - row}
      </div>
    </motion.div>
  );
};

const SponsorModal = ({ data, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
    onClick={onClose}
  >
    <div 
      className="bg-slate-900 border-2 border-red-600 w-full max-w-md transform -skew-x-3 p-1 shadow-2xl relative"
      onClick={e => e.stopPropagation()}
    >
      {/* Decorative corners */}
      <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-600"></div>
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-600"></div>

      <div className="bg-black p-8 transform skew-x-3 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {data ? (
          // Existing Sponsor Info
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-white/5 rounded-full flex items-center justify-center p-6 mb-6 border border-slate-800">
              <img src={data.img} alt={data.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-3xl font-black italic text-white mb-2 uppercase">{data.name}</h3>
            <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-6">Official Partner</p>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Proud supporter of the Hit & Run League. Powering athletes to reach their peak performance in the arena.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white hover:text-red-500 transition-colors font-bold uppercase text-sm group">
              Visit Website <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ) : (
          // Become a Sponsor CTA
          <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-red-600/10 rounded-full flex items-center justify-center mb-6 border border-red-600/30 text-red-500">
              <Zap size={32} />
            </div>
            <h3 className="text-3xl font-black italic text-white mb-4 uppercase">Claim This Cell</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Join the elite grid. Showcase your brand to thousands of athletes and fans in the 10x10 arena.
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black italic uppercase py-4 tracking-widest transition-all clip-path-slash">
              Become a Sponsor
            </button>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export default function Sponsors() {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sponsors = generateSponsors();

  const handleCellClick = (data, index) => {
    setModalData(data); // Pass null if empty, object if filled
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen bg-slate-950 font-sans overflow-hidden pt-32 pb-24 text-slate-100">
      {/* Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;0,900;1,900&display=swap');
        .font-sans { font-family: 'Montserrat', sans-serif; }
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 1s;
        }
      `}</style>

      {/* Dotted Texture Overlay */}
      <div 
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zM1 5h2v2H1V5zm4 0h2v2H5V5zm4 0h2v2H9V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zM1 9h2v2H1V9zm4 0h2v2H5V9zm4 0h2v2H9V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zM1 13h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM1 17h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` 
          }}
      />

      {/* Geometric Bridge */}
      <div className="absolute top-0 left-0 w-full h-24 bg-slate-950 transform -skew-y-2 origin-top-left z-10 -mt-12 shadow-2xl border-b border-white/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <Header 
          title={<>Our <span className="text-red-600">Sponsers</span></>}
          subtitle="Our ecosystem of elite partners. Each cell represents a pillar of support for the Hit & Run League."
        />

        {/* The Chessboard Grid */}
        <div className="max-w-4xl mx-auto relative">
          {/* Border Frame */}
          <div className="absolute -inset-4 border-2 border-red-600/20 z-0 pointer-events-none transform skew-x-1"></div>
          
          {/* Grid Container */}
          {/* On mobile: 5 cols x 20 rows. On Desktop: 10 cols x 10 rows */}
          <div className="grid grid-cols-5 md:grid-cols-10 gap-[1px] bg-slate-800 border border-slate-800 shadow-2xl relative z-10">
            {sponsors.map((data, idx) => (
              <SponsorCell 
                key={idx} 
                index={idx} 
                data={data} 
                onClick={handleCellClick}
              />
            ))}
          </div>

           
        </div>

         
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <SponsorModal 
            data={modalData} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}