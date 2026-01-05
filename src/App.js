import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./Pages/Hero";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import RegistrationForm from "./Pages/RegistrationPage";
import Rules from "./Pages/Rules";
import Sponsors from "./Pages/Sponser";
import Footer from "./Components/Footer";
import ScrollSection from "./Components/ScrollSection";
import DividerSection from "./Components/Divider";
import AppLoader from "./Components/Loading";
import DividerSection2 from "./Components/Divider2";
import DividerSection3 from "./Components/Divider3";
import RewardsSection from "./Components/rewards";
import ScrollRewards from "./Components/rewards";
import RewardScrollCards from "./Components/rewards";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  /* ---------- Lenis Smooth Scroll ---------- */
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <Router>
      {/* GLOBAL LOADER */}
      {loading && <AppLoader onComplete={() => setLoading(false)} />}

      <div className="relative font-sans text-slate-800 bg-white dark:bg-slate-950 dark:text-slate-100 min-h-screen transition-colors duration-300 flex flex-col">
        
        {/* --- STATIC DOTTED BACKGROUND --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Light Mode Dots (Slate-300) | Dark Mode Dots (Slate-800) */}
          <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-70"></div>
          
          {/* Optional: Radial Fade Mask (Vignette) for a softer look at edges */}
          <div className="absolute inset-0 bg-white/0 dark:bg-slate-950/0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <Navbar />

        <div className="flex-grow z-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <DividerSection2/>
                  <About />
                  <DividerSection />
                  <RewardScrollCards/>
                  <ScrollSection />
                  <DividerSection3/>
                  <RegistrationForm />
                </>
              }
            />
            <Route path="/Rules" element={<Rules />} />
            <Route path="/Sponsors" element={<Sponsors />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}