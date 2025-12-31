import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayCircle,
  Trophy,
  Target,
  Award,
  Zap,
  Activity,
  Star,
  Ban,
  ShieldAlert,
  Info,
  Maximize2,
  X,
  PlayIcon,
} from "lucide-react";
import bill from "../assets/images/bill.JPG";
import sort from "../assets/images/sort.JPG";
import target from "../assets/images/target.JPG";
// --- SUB-COMPONENTS ---

const RulesHeader = ({ title, subtitle, badge }) => (
  <div className="text-center mb-20 max-w-4xl mx-auto px-6">
    <div className="inline-block px-4 py-1 mb-6 bg-red-600 transform -skew-x-12 border-l-4 border-red-400">
      <span className="block transform skew-x-12 text-white font-bold uppercase tracking-widest text-xs">
        {badge || "Official Protocol"}
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

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Replace this URL with your local video file or hosted URL
  const videoUrl =
    "https://res.cloudinary.com/debuweamw/video/upload/v1766505923/WhatsApp_Video_2025-12-11_at_3.08.16_PM_i1f6yo.mp4";

  return (
    <section className="relative px-6 container mx-auto mb-32 z-20" id="demo">
      <div className="relative transform -skew-x-3 bg-slate-900 border-4 border-slate-800 shadow-2xl overflow-hidden group hover:border-red-600/50 transition-colors duration-500 aspect-video max-w-6xl mx-auto">
        {
          <div className="absolute inset-0 z-40 bg-black">
            {/* 1. We use 'transform skew-x-3' to counteract the container's skew 
                   so the video content looks normal.
                2. 'scale-[1.02]' prevents pixel bleeding at the edges.
             */}
            <video
              src={videoUrl}
              className="w-full h-full object-cover transform skew-x-3 scale-[1.02]"
              autoPlay={true} // Or simply write 'autoPlay'
              muted // Required for autoPlay to work in most browsers
              playsInline // Recommended for better mobile support
            >
              Your browser does not support the video tag.
            </video>
          </div>
        }
      </div>
    </section>
  );
};

const EquipmentCard = ({
  title,
  imageSrc,
  desc,
  items,
  icon: Icon,
  onImageClick,
}) => (
  <div className="relative group">
    {/* Slash Background */}
    <div className="absolute inset-0 bg-slate-900 transform -skew-x-12 border border-slate-800 group-hover:border-red-600 group-hover:bg-slate-800/90 transition-all duration-300 shadow-2xl"></div>
    <div className="absolute top-0 right-0 w-3 h-3 bg-red-600 transform -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative z-10 p-6 flex flex-col h-full transform -skew-x-12">
      {/* Unskew content wrapper */}
      <div className="transform skew-x-12 h-full flex flex-col">
        <div
          className="relative h-56 mb-6 border-2 border-slate-800 overflow-hidden cursor-zoom-in group/img"
          onClick={() => onImageClick(imageSrc)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500"
          />

          <div className="absolute top-4 left-4 z-20 bg-red-600 p-2">
            <Icon size={20} className="text-white" />
          </div>

          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-2xl font-black italic text-white uppercase">
              {title}
            </h3>
          </div>

          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover/img:opacity-100 transition-opacity">
            <div className="bg-black/80 p-1.5 border border-slate-600">
              <Maximize2 size={16} className="text-white" />
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm font-medium mb-6 flex-grow leading-relaxed border-l-2 border-slate-800 pl-4">
          {desc}
        </p>

        <div className="bg-black/40 p-4 border border-slate-800/50">
          <div className="flex items-center gap-2 mb-3 text-red-500 text-xs font-bold uppercase tracking-widest">
            <Info size={12} /> Specs
          </div>
          <div className="space-y-2">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex justify-between text-xs border-b border-slate-800 pb-1 last:border-0 last:pb-0"
              >
                <span className="text-slate-500 font-bold uppercase">
                  {item.label}
                </span>
                <span className="text-white font-mono">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RulesList = () => (
  <div className="space-y-6">
    {[
      {
        id: "01",
        title: "The Setup",
        desc: "Competition begins in a 15x15m arena. Striker defends the X against 5 fielders.",
        icon: Target,
      },
      {
        id: "02",
        title: "The Throw",
        desc: "Underarm delivery targeting upper X zone. Must range from hip to knee height.",
        icon: Zap,
      },
      {
        id: "03",
        title: "Hit & Run",
        desc: "Striker launches the Sort into play. Fielders mobilize. Every completed base run adds to the tally.",
        icon: Activity,
      },
    ].map((step, i) => (
      <div key={i} className="relative pl-8 group">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-800 group-hover:bg-red-600 transition-colors"></div>
        <div className="bg-slate-900/50 border border-slate-800 p-6 relative overflow-hidden group-hover:border-slate-600 transition-all">
          {/* Updated Watermark opacity for dark theme visibility */}
          <div className="absolute top-0 right-0 text-6xl font-black italic text-white opacity-5 group-hover:opacity-10 transition-opacity -mt-2 -mr-4 select-none">
            {step.id}
          </div>
          <div className="relative z-10 flex gap-4 items-start">
            <div className="text-red-500 mt-1">
              <step.icon size={24} />
            </div>
            <div>
              <h4 className="text-xl font-black italic text-white uppercase mb-2">
                {step.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ScoringCard = () => (
  <div className="relative bg-black border-2 border-slate-800 p-8 transform -skew-x-3 shadow-2xl">
    <div className="transform skew-x-3">
      <h3 className="text-2xl font-black italic text-white mb-8 uppercase border-b border-slate-800 pb-4 flex items-center gap-3">
        <div className="bg-red-600 p-1.5">
          <Activity size={20} className="text-white" />
        </div>
        Scoring Intel
      </h3>

      <div className="space-y-6">
        <div className="flex gap-4 p-4 bg-green-900/10 border border-green-900/30">
          <div className="text-green-500">
            <Star size={24} />
          </div>
          <div>
            <strong className="block text-green-400 font-bold uppercase text-sm mb-1">
              Point Earned
            </strong>
            <p className="text-xs text-slate-400 leading-relaxed">
              Successful in-bounds hit or completed run between bases.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              icon: Ban,
              color: "text-red-500",
              title: "Direct Hit",
              desc: "Sort contacts X. Immediate Elimination.",
            },
            {
              icon: ShieldAlert,
              color: "text-orange-500",
              title: "Boundary Breach",
              desc: "Hit lands outside arena bounds.",
            },
            {
              icon: Trophy,
              color: "text-rose-500",
              title: "Aerial Catch",
              desc: "Fielder secures Sort mid-flight.",
            },
          ].map((rule, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-slate-900/50 border-l-2 border-slate-700 hover:border-red-500 transition-colors"
            >
              <rule.icon size={18} className={rule.color} />
              <div>
                <div className="text-white font-bold text-xs uppercase">
                  {rule.title}
                </div>
                <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">
                  {rule.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---

export default function SectionRules() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="rules"
      className="relative min-h-screen bg-slate-950 font-sans overflow-hidden pt-32 pb-24 text-slate-100"
    >
      {/* Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;0,900;1,900&display=swap');
        .font-sans { font-family: 'Montserrat', sans-serif; }
        .text-stroke-white { -webkit-text-stroke: 1px white; color: transparent; }
      `}</style>

      {/* Dotted Texture Overlay - White dots with low opacity */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zM1 5h2v2H1V5zm4 0h2v2H5V5zm4 0h2v2H9V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zM1 9h2v2H1V9zm4 0h2v2H5V9zm4 0h2v2H9V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zM1 13h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM1 17h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Geometric Bridge */}
      <div className="absolute top-0 left-0 w-full h-24 bg-slate-950 transform -skew-y-2 origin-top-left z-10 -mt-12 shadow-2xl border-b border-white/5"></div>

      {/* Local Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[60%] h-[60%] bg-gradient-to-b from-red-900/5 to-transparent transform skew-x-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <RulesHeader
          title={
            <>
              MASTER THE <span className="text-red-600">ARENA</span>
            </>
          }
          subtitle="Your definitive guide to Hit & Run. Master the equipment, perfect the mechanics, dominate the competition."
          badge="Official Rulebook 2025"
        />

        <VideoSection />

        {/* Equipment Grid */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h3 className="text-2xl font-black italic text-slate-500 uppercase tracking-widest">
              Equipments
            </h3>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 px-4">
            <EquipmentCard
              title="The Bill"
              imageSrc={bill}
              desc="Striker's weapon. Five unified cane stumps for explosive power."
              icon={Trophy}
              onImageClick={setSelectedImage}
              items={[
                { label: "Length", value: '25-28"' },
                { label: "Zone", value: '14-15"' },
                { label: "Weight", value: "1.25 kg" },
              ]}
            />
            <EquipmentCard
              title="The Sort"
              imageSrc={sort}
              desc="Five interlocked ribbons creating unpredictable flight paths."
              icon={Target}
              onImageClick={setSelectedImage}
              items={[
                { label: "Shape", value: "Cubic" },
                { label: "Mat", value: "Leather" },
                { label: "Weight", value: "200g" },
              ]}
            />
            <EquipmentCard
              title="The Target"
              imageSrc={target}
              desc="X-shaped structure of reinforced stumps. Protect at all costs."
              icon={Award}
              onImageClick={setSelectedImage}
              items={[
                { label: "Height", value: '30"' },
                { label: "Width", value: '2"' },
                { label: "Base", value: "Weighted" },
              ]}
            />
          </div>
        </div>

        {/* Rules & Scoring Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h3 className="text-3xl font-black italic text-white mb-8 uppercase border-l-4 border-red-600 pl-4">
              Rules of Engagement
            </h3>
            <RulesList />
          </div>
          <div className="lg:col-span-5 sticky top-8">
            <ScoringCard />
          </div>
        </div>
        <div class="flex flex-col items-center gap-4 mt-6">
          <p class="text-red-300 text-sm tracking-wide text-center">
            Download the complete rules of{" "}
            <span class="font-semibold text-red-400">Hit &amp; Run</span>
          </p>

          <a
            href="https://res.cloudinary.com/debuweamw/image/upload/v1766586029/Hit_and_Run_1_r5bhda.pdf"
            download
            class="inline-flex items-center gap-2 px-6 py-2 rounded-lg
           bg-red-600 text-white font-semibold uppercase
           hover:bg-red-700 transition duration-300
           shadow-md hover:shadow-lg active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            Download
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="absolute top-8 right-8 cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              <X
                size={32}
                className="text-white hover:text-red-500 transition-colors"
              />
            </div>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage}
              alt="Detail"
              className="max-w-full max-h-[85vh] object-contain border-4 border-slate-800 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none">
              <span className="bg-black/80 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest border border-slate-800">
                Press ESC to Close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
