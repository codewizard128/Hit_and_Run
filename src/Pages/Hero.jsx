import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import mainImage from '../assets/images/Frame 11.png'
/* ---------- Button ---------- */
const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const base =
    "inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 transform md:-skew-x-12 disabled:opacity-50 disabled:cursor-not-allowed";
  const counter = "md:skew-x-12 inline-flex items-center";

  const variants = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 border-l-4 border-red-800",
    secondary:
      "bg-white text-slate-900 hover:bg-slate-200 border-l-4 border-slate-400",
    outline:
      "bg-transparent text-slate-300 border border-slate-700 hover:border-red-500 hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className={counter}>{children}</span>
    </button>
  );
};

/* ---------- Hero ---------- */
const Hero = () => (
  <header className="relative min-h-[90vh] flex items-center overflow-hidden font-premium pb-6">
    {/* Background */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute top-0 right-0 h-full w-[45%] bg-red-700 -skew-x-12 translate-x-32 hidden lg:block shadow-[-50px_0_100px_rgba(0,0,0,0.5)]" />
    </div>

    <div className="container mx-auto px-4 mt-20 sm:px-6 relative z-10 pt-24 lg:pt-0">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black italic text-white tracking-tighter leading-[0.9] mb-6">
            HIT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              HARD.
            </span>
            <br />
            RUN{" "}
            <span className="text-slate-700">
              FAST.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-md mx-auto lg:mx-0 mb-8 border-l-4 border-red-600 pl-4 sm:pl-6">
            The world's most intense field sport. Precision mechanics meet
            explosive speed in the ultimate test of athleticism.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("register")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register
            </Button>

            <Link to="/Rules">
              <Button variant="outline">
                <Play className="w-4 h-4 mr-2" /> Watch Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-5/12 relative h-[360px] sm:h-[450px] lg:h-[700px] flex justify-center lg:justify-end">
          <div className="relative w-full h-full lg:w-[120%] lg:h-[85%] bg-slate-800 lg:-ml-20 overflow-hidden shadow-2xl border-4 border-slate-900 group lg:-rotate-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />

            <img
              src={mainImage}
              alt="Sport Action"
              className="w-full h-full object-cover scale-105 sm:scale-110 group-hover:scale-100 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 z-20">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-red-500 font-bold text-xs tracking-widest">
                    Hit and Run
                  </div>
                   
                   
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center text-white">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Blobs */}
          <div className="absolute top-12 -left-8 w-20 h-20 bg-red-500 rounded-full blur-[50px] opacity-30 hidden sm:block" />
          <div className="absolute -bottom-10 right-10 w-52 h-52 bg-orange-500 rounded-full blur-[80px] opacity-20 hidden sm:block" />
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
