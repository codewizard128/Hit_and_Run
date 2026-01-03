import React, { useRef, useEffect } from "react";
import { Target, Zap, Users, Crosshair } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../assets/images/Group 61 (2).png'
gsap.registerPlugin(ScrollTrigger);

// Feature Card
const FeatureCard = React.forwardRef(({ icon: Icon, title, desc, index }, ref) => (
  <div
    ref={ref}
    className="relative group feature-card opacity-0 translate-y-12"
  >
    <div className="absolute inset-0 bg-slate-900 lg:-skew-x-12 border border-slate-800 group-hover:border-red-600 transition" />
    
    <div className="relative z-10 p-5 sm:p-6 md:p-8">
      <div className="lg:-skew-x-12 mb-4 sm:mb-6 inline-block">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black border border-slate-700 flex items-center justify-center">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 lg:skew-x-12" />
        </div>
      </div>

      <h3 className="text-base sm:text-lg font-black italic text-white uppercase mb-2">
        {title}
      </h3>

      <p className="text-slate-400 text-sm border-l-2 border-slate-800 pl-4 leading-relaxed">
        {desc}
      </p>

      <div className="absolute top-4 right-4 sm:right-6 text-2xl sm:text-3xl font-black italic text-slate-800/40">
        0{index}
      </div>
    </div>
  </div>
));

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const mm = ScrollTrigger.matchMedia();

    // ✅ Desktop animations
    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        gsap.from(sectionRef.current, {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        gsap.from(imageRef.current, {
          scale: 1.15,
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.from(headingRef.current, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        });

        gsap.from(textRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        });

        gsap.to(cardsRef.current, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 85%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    // ✅ Mobile / Tablet (light animation)
    mm.add("(max-width: 1023px)", () => {
      gsap.set(cardsRef.current, { opacity: 1, y: 0 });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative pt-24 sm:pt-32 lg:pt-48 font-premium"
    >
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div
            ref={imageRef}
            className="w-full lg:w-1/2 max-w-sm sm:max-w-md mx-auto lg:mx-0"
          >
            <div className="aspect-[4/5] lg:-skew-x-6 overflow-hidden border-4 border-slate-800 shadow-2xl">
              <img
                src={img1}
                className="w-full h-full object-cover lg:skew-x-6 scale-105 lg:scale-110"
                alt="Intensity"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-5 bg-red-600/10 border-l-4 border-red-600">
              <span className="text-red-500 font-bold uppercase tracking-widest text-xs">
                About
              </span>
            </div>

            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-white mb-6 lg:mb-8 leading-[0.9]"
            >
              PURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">
                ADRENALINE
              </span>
              <br />
              UNLEASHED.
            </h2>

            <p
              ref={textRef}
              className="text-base sm:text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Hit & Run isn't just a sport—it's a Recreative and Rewarding game.
              The entry to this game is sponsor's bill.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {[
                { icon: Zap, title: "Explosive Speed", index: 1 },
                { icon: Crosshair, title: "Surgical Precision", index: 2 },
                { icon: Users, title: "Squad Tactics", index: 3 },
                { icon: Target, title: "Total Focus", index: 4 },
              ].map((item, i) => (
                <FeatureCard
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  {...item}
                   
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
