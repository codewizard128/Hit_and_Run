import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rewards = [
  { emoji: "👕", title: "Exclusive T-Shirt", desc: "" },
  { emoji: "👟", title: "Premium Shoes", desc: "" },
  { emoji: "🎾", title: "Racket", desc: "" },
  { emoji: "🚲", title: "Cycle", desc: "" },
];

const RewardScrollCards = () => {
  const cardsRef = useRef([]);
  const glowRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      // Single timeline for smooth continuous animation
      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 10%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        }
      })
      .fromTo(card, 
        { 
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          scale: 0.75,
          rotateY: i % 2 === 0 ? -12 : 12,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1.08,
          rotateY: 0,
          duration: 0.5,
          ease: "none",
        }
      )
      .to(card, {
        scale: 0.75,
        opacity: 0.2,
        duration: 0.5,
        ease: "none",
      });

      // Glow animation
      gsap.to(glowRef.current[i], {
        opacity: 0.8,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="relative bg-transparent py-32 overflow-hidden">
       
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,0,0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10">
        <h2 className="text-center text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
          <span className=" text-white">Recreative</span> & Rewarding
        </h2>
        <h2 className="text-center text-2xl font-bold font-sans mb-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
            Rewards that are waiting for you !
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-24"></div>

        <div className="flex flex-col items-center gap-32">
          {rewards.map((r, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="w-[90%] max-w-[680px] perspective-1000"
            >
              <div className="relative group">
                {/* Glowing background */}
                <div
                  ref={(el) => (glowRef.current[i] = el)}
                  className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-red-900/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                {/* Main card */}
                <div className="relative bg-gradient-to-br from-zinc-950 via-black to-zinc-950 border border-red-900/50 rounded-3xl px-12 py-14 shadow-2xl backdrop-blur-sm overflow-hidden group-hover:border-red-700/70 transition-all duration-500">
                  
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-red-600/50 rounded-tl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-red-600/50 rounded-br-lg"></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-100"></div>
                    <div className="absolute bottom-16 left-24 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse delay-200"></div>
                  </div>

                  <div className="relative flex items-center gap-8">
                    {/* Emoji container with glow */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-red-900/30 rounded-2xl blur-xl"></div>
                      <div className="relative text-7xl bg-gradient-to-br from-zinc-900 to-black border border-red-800/30 rounded-2xl w-28 h-28 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {r.emoji}
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent group-hover:from-red-300 group-hover:via-red-400 group-hover:to-red-500 transition-all duration-500">
                        {r.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {r.desc}
                      </p>
                      
                      {/* Progress bar decoration */}
                      <div className="mt-4 h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full group-hover:w-full transition-all duration-1000 ease-out"
                          style={{ width: `${(i + 1) * 25}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Side accent */}
                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-600/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:right-8 transition-all duration-500">
                      <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-800 rounded-full"></div>
                    </div>
                  </div>

                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-red-950/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardScrollCards;