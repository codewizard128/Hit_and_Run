import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DividerSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        trackRef.current,
        { xPercent: 0 },
        {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,          // 🔥 moves ONLY on scroll
            invalidateOnRefresh: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-red-600 py-6 transform -skew-y-2 border-y-4 border-black"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Scroll-moving track */}
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center mx-6 gap-8">
            <span className="text-5xl md:text-7xl font-black italic text-black uppercase tracking-tighter">
              HIT HARD RUN FAST
            </span>

           

            

            <span className="text-4xl text-black/50 mx-4">///</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DividerSection;
