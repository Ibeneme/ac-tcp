import { motion } from "framer-motion";
import {
  Truck,
  Palette,
  BrainCircuit,
  Scale,
  FileText,
  Vote,
} from "lucide-react";

const projects = [
  {
    name: "Pickars",
    type: "Logistics Platform",
    url: "https://www.pickars.com",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    name: "Boring Thinkers",
    type: "Digital Agency",
    url: "https://www.boringthinkers.com",
    icon: <Palette className="w-6 h-6" />,
  },
  {
    name: "ChatWazobia AI",
    type: "Artificial Intelligence",
    url: "https://www.chatwazobiaai.com",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    name: "ZaedaOracle",
    type: "Legal Technology",
    url: "https://www.zaedaoracle.com",
    icon: <Scale className="w-6 h-6" />,
  },
  {
    name: "CourtDox",
    type: "Legal Documentation",
    url: "https://www.courtdox.com",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    name: "Vote DaMarcus",
    type: "Electoral Campaign",
    url: "https://www.votedamarcus.com",
    icon: <Vote className="w-6 h-6" />,
  },
];

const SelectedWorks = () => {
  return (
    <section className="py-28 px-6 bg-slate-950 font-['Rethink_Sans']">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-3">
            Selected Works
          </h2>
          <p className="text-slate-400 text-lg">
            Projects I've designed and built • 2025–2026
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.015, y: -4 }}
              className="group relative flex items-center justify-between p-8 rounded-3xl border border-slate-800 bg-slate-900/30 hover:border-purple-500/40 hover:bg-slate-900/60 backdrop-blur-md transition-all duration-500"
            >
              <div className="flex items-center gap-6">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-950 border border-slate-700 text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-300">
                  {project.icon}
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium">
                    {project.type}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-3">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-500 group-hover:text-purple-400 transition-colors">
                  Visit Site
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-700 group-hover:border-purple-500 text-slate-400 group-hover:text-purple-400 transition-all">
                  ↗
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-slate-500 text-sm mt-12">
          More projects available upon request
        </p>
      </div>
    </section>
  );
};

export default SelectedWorks;
