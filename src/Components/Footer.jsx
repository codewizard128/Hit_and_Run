import React from "react";
import {
  Flame,
    Youtube,
    Instagram,
    Twitter,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";
import logo from '../assets/images/logo.jpeg'
const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="w-10 h-10 bg-slate-900 border border-slate-800 flex items-center justify-center transform -skew-x-12 hover:bg-red-600 hover:border-red-600 hover:text-white text-slate-400 transition-all duration-300 group"
  >
    <Icon
      size={18}
      className="transform skew-x-12 group-hover:scale-110 transition-transform"
    />
  </a>
);

const FooterLink = ({ text, href }) => (
  <li>
    <a
      href={href}
      className="text-slate-400 hover:text-white text-sm font-medium uppercase tracking-wider flex items-center gap-2 group transition-colors"
    >
      <span className="w-1 h-1 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      <span className="transform group-hover:translate-x-1 transition-transform">
        {text}
      </span>
    </a>
  </li>
);

export default function Footer() {
  return (
    <footer className="relative bg-black pt-32 pb-12 overflow-hidden font-premium">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;0,900;1,900&display=swap');
        .font-premium { font-family: 'Montserrat', sans-serif; }
      `}</style>

 
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-2 group w-fit">
              <div className=" bg-red-600 transform -skew-x-12 w-10">
                <img src={logo} alt="" height="40"/>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black italic text-white leading-none tracking-tighter">
                  HIT<span className="text-red-600">&</span>RUN
                </span>
                 
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The premier high-intensity field sport. Precision
              mechanics meet explosive speed in the ultimate test of
              athleticism.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Instagram} href="#" />
              <SocialLink icon={Youtube} href="#" />
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-black italic uppercase tracking-wider mb-6 border-l-4 border-red-600 pl-3">
              Explore
            </h4>
            <ul className="space-y-4">
              <FooterLink text="Home" href="/" />
              <FooterLink text="Rules & Equip" href="/rules" />
              <FooterLink text="Our Sponsors" href="/sponsors" />
              <FooterLink text="Register" href="#register" />
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-black italic uppercase tracking-wider mb-6 border-l-4 border-red-600 pl-3">
              Connect with us
            </h4>
            <ul className="space-y-4">
               
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-red-600 flex-shrink-0" />
                <span>+91 9061655123</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-red-600 flex-shrink-0" />
                <span>hitandrun7306@gmail.com</span>
              </li>
            </ul>
          </div>

           
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-600">
          <p>© 2025 Hit & Run League. All Rights Reserved.</p>
          <div className="flex gap-8">
             
          </div>
        </div>
      </div>
    </footer>
  );
}
