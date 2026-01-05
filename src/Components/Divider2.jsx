import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DividerSection2 = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2; // because duplicated

      gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 50,
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
      className="relative w-full overflow-hidden bg-red-600 py-6 transform -skew-y-2 border-y-4 border-black"
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {/* CONTENT ×2 */}
        {[...Array(16)].map((_, i) => (
          <MarqueeItem key={i} />
        ))}
      </div>
    </section>
  );
};

const MarqueeItem = () => (
  <div className="flex items-center mx-6 gap-8">
    <span className="text-5xl md:text-7xl font-black italic text-black uppercase tracking-tighter">
      👕 RECREATIVE & REWARDING 👟
    </span>
    <span className="text-4xl text-black/50 mx-4">///</span>
  </div>
);

export default DividerSection2;
