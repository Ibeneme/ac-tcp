import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activeSection: "home" | "about" | "works" | "faq";
  setActiveSection: (section: "home" | "about" | "works" | "faq") => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/2348166803089";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "pt-4" : "pt-8"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 flex justify-center">
        <div
          className={`flex items-center justify-between w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-6 py-3 backdrop-blur-md transition-all duration-500 shadow-xl ${
            scrolled ? "border-slate-700" : ""
          }`}
        >
          {/* Logo / Brand Name */}
          <div
            onClick={() => setActiveSection("home")}
            className="flex items-center cursor-pointer"
          >
            <span className="text-lg font-black text-white tracking-tighter">
              CHARLES <span className="text-purple-400">ASSOR</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveSection("home")}
              className={`text-xs font-bold uppercase transition-colors ${
                activeSection === "home"
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setActiveSection("about")}
              className={`text-xs font-bold uppercase transition-colors ${
                activeSection === "about"
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              About
            </button>

            <button
              onClick={() => setActiveSection("works")}
              className={`text-xs font-bold uppercase transition-colors ${
                activeSection === "works"
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Works
            </button>

            <button
              onClick={() => setActiveSection("faq")}
              className={`text-xs font-bold uppercase transition-colors ${
                activeSection === "faq"
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              FAQ
            </button>
          </div>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-xs font-bold text-white transition-all hover:shadow-lg hover:shadow-purple-500/20"
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center text-slate-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-6 right-6 top-[88px] z-[-1] rounded-3xl bg-slate-900 border border-slate-700 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <button
                onClick={() => {
                  setActiveSection("home");
                  setIsOpen(false);
                }}
                className={`py-3 text-lg font-medium ${
                  activeSection === "home"
                    ? "text-purple-400"
                    : "text-slate-300"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setActiveSection("about");
                  setIsOpen(false);
                }}
                className={`py-3 text-lg font-medium ${
                  activeSection === "about"
                    ? "text-purple-400"
                    : "text-slate-300"
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => {
                  setActiveSection("works");
                  setIsOpen(false);
                }}
                className={`py-3 text-lg font-medium ${
                  activeSection === "works"
                    ? "text-purple-400"
                    : "text-slate-300"
                }`}
              >
                My Works
              </button>
              <button
                onClick={() => {
                  setActiveSection("faq");
                  setIsOpen(false);
                }}
                className={`py-3 text-lg font-medium ${
                  activeSection === "faq" ? "text-purple-400" : "text-slate-300"
                }`}
              >
                FAQs
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-600 py-4 font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
