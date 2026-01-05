import React from "react";

const Banner = ({ message = "Registration Open" }) => {
  return (
    <div className="relative w-[240px] md:w-[260px] mx-auto overflow-hidden rounded-full border-4 border-black bg-gradient-to-r from-red-700 via-red-500 to-red-700 py-3 shadow-[8px_8px_0px_#000]">
      {/* glow layer */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-sm pointer-events-none" />

      {/* shine sweep */}
      <div className="absolute -left-1/3 top-0 h-full w-1/3 bg-white/20 rotate-12 blur-xl opacity-60 pointer-events-none" />

      <div className="relative flex items-center justify-center gap-4 px-8">
        <span className="text-xl md:text-2xl drop-shadow">🚀</span>
        <h1 className="text-lg md:text-2xl font-extrabold text-black uppercase tracking-[0.2em] whitespace-nowrap">
          {message}
        </h1>
        <span className="text-xl md:text-2xl drop-shadow">🚀</span>
      </div>
    </div>
  );
};

export default Banner;
