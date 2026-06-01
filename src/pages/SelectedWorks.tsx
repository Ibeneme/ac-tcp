import { motion } from "framer-motion";
import {
  Truck,
  Palette,
  BrainCircuit,
  Scale,
  FileText,
  Vote,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    name: "Pickars",
    type: "Logistics Platform",
    url: "https://www.pickars.com",
    icon: Truck,
  },
  {
    name: "Boring Thinkers",
    type: "Digital Agency",
    url: "https://www.boringthinkers.com",
    icon: Palette,
  },
  {
    name: "ChatWazobia AI",
    type: "Artificial Intelligence",
    url: "https://www.chatwazobiaai.com",
    icon: BrainCircuit,
  },
  {
    name: "ZaedaOracle",
    type: "Legal Technology",
    url: "https://www.zaedaoracle.com",
    icon: Scale,
  },
  {
    name: "CourtDox",
    type: "Legal Documentation",
    url: "https://www.courtdox.com",
    icon: FileText,
  },
  {
    name: "Vote DaMarcus",
    type: "Electoral Campaign",
    url: "https://www.votedamarcus.com",
    icon: Vote,
  },
];

const SelectedWorks = () => {
  return (
    <section className="py-24 px-6 bg-slate-950  font-['Rethink_Sans'] tracking-tight">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-white tracking-tighter mb-2">
            Selected Works
          </h2>
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500">
            Design & Development &bull; 2025–2026
          </p>
        </div>

        {/* Projects Grid */}
        <div className="divide-y divide-slate-900 border-y border-slate-900">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-center justify-between py-5 hover:px-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-950 border border-slate-900 text-slate-400 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-500">{project.type}</p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 duration-300">
                    Launch
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="text-left text-[11px] font-mono text-slate-600 uppercase tracking-widest mt-8">
          // More works available upon request.
        </p>
      </div>
    </section>
  );
};

export default SelectedWorks;
