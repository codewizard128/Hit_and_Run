import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BackgroundAnimation() {
  const containerRef = useRef(null);
  const blobRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each blob with random movement
      blobRefs.current.forEach((blob) => {
        gsap.to(blob, {
          x: "random(-200, 200)", // Move randomly on X axis
          y: "random(-200, 200)", // Move randomly on Y axis
          scale: "random(0.8, 1.2)", // Pulse size
          duration: "random(10, 20)", // Slow, varying speed
          repeat: -1,
          yoyo: true, // Go back and forth
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to store refs
  const addToRefs = (el) => {
    if (el && !blobRefs.current.includes(el)) {
      blobRefs.current.push(el);
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Blob 1: Purple/Pink */}
      <div
        ref={addToRefs}
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 dark:opacity-20 animate-blob"
      ></div>

      {/* Blob 2: Cyan/Blue */}
      <div
        ref={addToRefs}
        className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 dark:opacity-20 animate-blob animation-delay-2000"
      ></div>

      {/* Blob 3: Rose/Orange */}
      <div
        ref={addToRefs}
        className="absolute -bottom-32 left-1/3 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 dark:opacity-20 animate-blob animation-delay-4000"
      ></div>
      
      {/* Optional: Overlay Grid Texture to keep the tech vibe */}
       <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1z' fill='%2394a3b8'/%3E%3C/svg%3E")`,
          }}
        />
    </div>
  );
}