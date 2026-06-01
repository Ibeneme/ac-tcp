import { Heart, ArrowUp } from "lucide-react";
import React from "react";

interface FooterProps {
  setActiveSection: (section: "home" | "about" | "works" | "faq") => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-slate-950 py-20 px-6 border-t border-slate-900 font-['Rethink_Sans']">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Left - Branding */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tighter text-white">
              CHARLES <span className="text-purple-500">ASSOR</span>
            </h2>
            <p className="text-slate-400 text-[15px] max-w-xs">
              UI Designer & Founder of Assor Power
              <br />I create beautiful and easy-to-use websites and apps.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
              © 2026 • Port Harcourt, Nigeria
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 block">
                MENU
              </span>
              <div className="flex flex-col gap-3 text-sm">
                <button
                  onClick={() => setActiveSection("home")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => setActiveSection("about")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  About Me
                </button>
                <button
                  onClick={() => setActiveSection("works")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  My Projects
                </button>
                <button
                  onClick={() => setActiveSection("faq")}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  FAQs
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4 block">
                TALK TO ME
              </span>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="https://wa.me/2348166803089"
                  target="_blank"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
           
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>Made with love in Port Harcourt</p>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            Built with <Heart className="w-4 h-4 text-purple-500" />
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors mt-4 md:mt-0"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
