import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DividerSection3 = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2; // because duplicated

      gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const value = parseFloat(x);
            return `${value % totalWidth}px`;
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-red-600 py-6 transform -skew-y-2 border-y-4 border-black -translate-y-9"
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
            <span className="text-2xl md:text-4xl font-black italic text-black uppercase ">
              ENTRY TO THE GAME IS <span className=" text-white">SPONSOR'S BILL !!!</span>
            </span>

            <span className="text-2xl text-black/50 mx-4">///</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DividerSection3;
