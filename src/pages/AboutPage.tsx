import { motion } from "framer-motion";
import {
  Zap,
  Palette,
  Code,
  Briefcase,
  Award,
  Users,
  ArrowUpRight,
} from "lucide-react";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-slate-950  text-slate-400 py-24 px-6 md:px-12 font-['Rethink_Sans'] tracking-tight">
      <div className="max-w-3xl mx-auto">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Charles Assor
          </h1>
          <p className="text-sm md:text-base font-medium text-purple-400 mb-6 font-mono uppercase tracking-wider">
            Founder, Assor Power &bull; UI Designer
          </p>
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
            Building clean digital products that turn complex ideas into
            effortless user experiences.
          </p>
        </motion.div>

        {/* CORE CAPABILITIES */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 border-y border-slate-900 py-12">
          <div>
            <div className="flex items-center gap-2 mb-3 text-purple-400 font-mono text-[11px] uppercase tracking-widest">
              <Palette className="w-3.5 h-3.5" /> Design
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Crafting intuitive interfaces that look stunning and feel natural.
              Currently steering the brand and product direction at{" "}
              <span className="text-white font-medium">Pickars</span>.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3 text-purple-400 font-mono text-[11px] uppercase tracking-widest">
              <Code className="w-3.5 h-3.5" /> Development
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Bridging the gap between pixels and production. I code fluid,
              responsive front-ends that do justice to the design.
            </p>
          </div>
        </div>

        {/* CURRENT PROJECTS */}
        <div className="mb-24">
          <h2 className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Zap className="text-yellow-500 w-3.5 h-3.5" /> CURRENTLY BUILDING
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 rounded-xl border border-slate-900 bg-zinc-950/50 hover:border-purple-500/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <Zap className="text-yellow-500 w-5 h-5" />
                <span className="text-[9px] font-mono uppercase tracking-widest bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded">
                  Beta 2026
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                MechanicConnect
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                On-demand mechanics for Port Harcourt. Instant access to vetted
                automotive repair professionals.
              </p>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-6 rounded-xl border border-slate-900 bg-zinc-950/50 hover:border-purple-500/30 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <Briefcase className="text-purple-400 w-5 h-5" />
                <a
                  href="https://www.boringthinkers.com"
                  className="text-slate-500 group-hover:text-purple-400 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                Assor Power
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Digital studio delivering elite web design and development
                strategy for high-growth brands.
              </p>
            </motion.div>
          </div>
        </div>

        {/* APPROACH */}
        <div className="mb-24">
          <h2 className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mb-6">
            THE PHILOSOPHY
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Award,
                title: "Pixel Perfect",
                desc: "No lazy layouts. Detail is everything.",
              },
              {
                icon: Users,
                title: "Human Centric",
                desc: "Built for real people, not tech experts.",
              },
              {
                icon: Zap,
                title: "High Momentum",
                desc: "Shipped fast, without cutting corners.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-zinc-950/30 border border-slate-950"
              >
                <item.icon className="text-purple-500 mb-3 w-4 h-4" />
                <h4 className="font-bold text-sm text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-slate-900">
          <h3 className="text-xl font-bold text-white mb-2">
            Let’s build something real.
          </h3>
          <p className="text-slate-400 mb-6 max-w-xs mx-auto text-xs leading-relaxed">
            Available for premium interface design and front-end development
            projects.
          </p>
          <a
            href="https://wa.me/2348166803089"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-white text-black font-bold text-xs rounded-lg hover:bg-purple-400 hover:text-black transition-colors duration-200"
          >
            Start a Conversation <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
