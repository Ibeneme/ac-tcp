import { motion, type Variants } from "framer-motion";
import { Layers, Sparkles, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = { // 2. Add the type here
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const // 3. Add 'as const' to narrow the type
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-slate-950 flex flex-col justify-center pt-[120px] items-center px-6 overflow-hidden md:px-12 selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-[120px] animate-pulse duration-[10000ms]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md mb-6 hover:border-purple-500/50 transition-colors"
        >
          <Sparkles size={11} className="text-pink-400" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
            4 Years Experience
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-7xl font-black text-slate-100 tracking-tighter leading-[1.1] uppercase mb-6"
        >
          Charles Assor
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            UI Designer & Founder
          </span>
        </motion.h1>

        {/* Simple Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base md:text-lg text-slate-400 mb-10 leading-relaxed"
        >
          I create beautiful, easy-to-use designs for websites and apps that
          help businesses grow and succeed.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <button className="px-6 py-3 bg-white text-slate-950 font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-transform text-sm">
            <Layers size={16} /> See My Designs
          </button>
          <button className="px-6 py-3 bg-slate-900 text-slate-300 border border-slate-800 rounded-lg flex items-center gap-2 hover:border-slate-600 transition-colors text-sm">
            <Mail size={16} /> Let's Work Together
          </button>
        </motion.div>

        {/* Footer Grid - Simplified */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full border-t border-slate-900/50 pt-8"
        >
          {[
            {
              title: "Smart Designs",
              desc: "I make interfaces that are both beautiful and easy for people to use.",
            },
            {
              title: "Assor Power",
              desc: "My design studio helping businesses look professional online.",
            },
            {
              title: "Proven Results",
              desc: "4 years creating designs that help brands grow.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-slate-900/20 border border-slate-900/50 hover:bg-slate-900/40 transition-colors"
            >
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
