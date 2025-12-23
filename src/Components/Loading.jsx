import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AppLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    tl.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "left",
      }
    ).to(loaderRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      pointerEvents: "none",
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-black italic text-white mb-6 tracking-widest">
          LOADING
        </h2>

        <div className="w-64 h-1 bg-white/20 overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-red-600 origin-left"
          />
        </div>
      </div>
    </div>
  );
}
