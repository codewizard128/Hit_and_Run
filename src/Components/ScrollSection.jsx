import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Crosshair, Dumbbell, Flame, Trophy } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    id: "01",
    title: "The Arena",
    subtitle: "15x15 Meter Battleground",
    desc: "The game unfolds in a tight 15x15-meter grid. Teams of 5 enter the field. The striker stands guard at the 'X' symbol, protecting the upper target zone from the incoming Sort.",
    icon: Crosshair,
    color: "text-slate-500",
    bg: "bg-slate-900"
  },
  {
    id: "02",
    title: "The Gear",
    subtitle: "Bill, Sort, & Target",
    desc: "Wield the 'Bill'—a 1.25kg concave cane bat. Face the 'Sort'—a 200g leather ribbon cube designed for unpredictable flight. Defend the 30-inch X-Target at all costs.",
    icon: Dumbbell,
    color: "text-orange-500",
    bg: "bg-slate-950"
  },
  {
    id: "03",
    title: "The Mechanics",
    subtitle: "Strike & Sprint",
    desc: "Face the underarm throw aimed at your hip-to-knee zone. Blast the Sort inside the line for a Hit Point. Sprint base-to-base for a Run Point. Every move counts.",
    icon: Flame,
    color: "text-red-600",
    bg: "bg-black"
  },
  {
    id: "04",
    title: "The Verdict",
    subtitle: "Victory or Elimination",
    desc: "Direct hits on the 'X', aerial catches, or out-of-bounds shots mean immediate elimination. Accumulate maximum Hits and Runs to secure the win.",
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-red-950"
  }
];

export default function ScrollSection() {
  const targetRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  /* ---------- Framer Motion Scroll ---------- */
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  /* ---------- GSAP Animations ---------- */
  useEffect(() => {
    // Header intro
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        }
      }
    );

    // Phase card reveal
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 120, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
          }
        }
      );
    });
  }, []);

  return (
    <section className="font-premium bg-transparent">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;0,900;1,900&display=swap');
        .font-premium { font-family: 'Montserrat', sans-serif; }
        .text-stroke-title { 
          -webkit-text-stroke: 1px rgba(255,255,255,0.1); 
          color: transparent; 
        }
      `}</style>

      {/* Intro Header */}
      <div
        ref={headerRef}
        className="py-24 px-6 border-b border-white/5 relative z-10 bg-transparent"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black italic text-white mb-6 uppercase tracking-tighter">
            Game <span className="text-red-600">Evolution</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From the concave Bill to the leather Sort.Explore the new intense field sport.
          </p>
        </div>
      </div>

      {/* Scroll Container */}
      <div ref={targetRef} className="relative h-[300vh] bg-transparent">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          <motion.div style={{ x }} className="flex">
            {phases.map((phase, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`w-screen h-screen flex flex-col justify-center items-center relative ${phase.bg} border-r border-white/5 overflow-hidden flex-shrink-0`}
              >
                {/* Giant Text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[20vw] font-black italic text-stroke-title uppercase opacity-20 -rotate-12 translate-y-12 whitespace-nowrap">
                    {phase.title}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <div className={`w-20 h-20 bg-transparent border border-slate-700 flex items-center justify-center -skew-x-12 mb-8 ${phase.color}`}>
                      <phase.icon size={40} className="skew-x-12" />
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black italic text-white uppercase leading-[0.85] mb-4">
                      {phase.title}
                    </h3>
                    <div className={`h-2 w-24 ${phase.color.replace('text-', 'bg-')} -skew-x-12`} />
                  </div>

                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 -skew-x-6 shadow-xl">
                    <div className="skew-x-6">
                      <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${phase.color}`}>
                        {phase.subtitle}
                      </h4>
                      <p className="text-xl text-slate-300 leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-red-600 h-2 w-full" />
    </section>
  );
}
