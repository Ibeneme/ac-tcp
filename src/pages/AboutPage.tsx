import { motion } from "framer-motion";
import { Zap, Palette, Code, Briefcase, Award, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-200 py-24 px-6 md:px-12 font-['Rethink_Sans']">
      <div className="max-w-4xl mx-auto">
        {/* HERO TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-6xl md:text-[5.2rem] font-black text-white tracking-tighter leading-[0.9] mb-6">
            Charles Assor
          </h1>
          <p className="text-purple-500 text-2xl md:text-3xl font-medium mb-4">
            UI Designer & Founder, Assor Power
          </p>
          <p className="text-2xl md:text-3xl text-slate-400 font-light max-w-2xl">
            I create beautiful and easy-to-use designs that help businesses
            grow.
          </p>
        </motion.div>

        {/* SIMPLE INTRO */}
        <div className="mb-20 border-l-4 border-purple-500 pl-8">
          <p className="text-lg text-slate-300 leading-relaxed">
            I help turn ideas into clean, modern, and professional digital
            products. Whether it's a website, mobile app, or full brand design,
            I make sure it looks great and actually works well for real people.
          </p>
        </div>

        {/* DESIGN EXPERTISE */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-purple-500 w-6 h-6" />
            <h2 className="text-sm font-black uppercase tracking-[3px]">
              Design
            </h2>
          </div>
          <p className="text-slate-400 text-[17px] leading-relaxed">
            I design beautiful user interfaces that are simple and enjoyable to
            use. I currently lead design at Pickars, where I handle the full
            brand look and feel.
          </p>
        </div>

        {/* DEVELOPMENT */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-purple-500 w-6 h-6" />
            <h2 className="text-sm font-black uppercase tracking-[3px]">
              Development
            </h2>
          </div>
          <p className="text-slate-400 text-[17px] leading-relaxed">
            I also build websites and apps using modern tools. I make sure the
            designs I create are turned into working products that run smoothly.
          </p>
        </div>

        {/* CURRENT PROJECTS */}
        <div className="mb-24">
          <h2 className="text-sm font-black uppercase tracking-[3px] mb-8 flex items-center gap-3">
            <Zap className="text-yellow-500" />
            WHAT I'M BUILDING
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-800 bg-slate-900/30 hover:border-purple-500/30 transition-all"
            >
              <Zap className="text-yellow-500 mb-5 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white mb-3">
                MechanicConnect
              </h3>
              <p className="text-slate-400">
                An "Uber for Mechanics" in Port Harcourt. Making it easy for
                people to find trusted mechanics quickly when their car needs
                repair.
              </p>
              <div className="mt-6 text-xs uppercase tracking-widest text-purple-400 font-medium">
                Coming 2026
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-800 bg-slate-900/30 hover:border-purple-500/30 transition-all"
            >
              <Briefcase className="text-blue-500 mb-5 w-8 h-8" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Assor Power
              </h3>
              <p className="text-slate-400">
                My design and development company. We help businesses create
                great-looking websites and apps that actually help them grow.
              </p>
              <a
                href="https://www.boringthinkers.com"
                className="inline-block mt-6 text-purple-400 hover:underline"
              >
                Learn more →
              </a>
            </motion.div>
          </div>
        </div>

        {/* APPROACH */}
        <div className="mb-24">
          <h2 className="text-sm font-black uppercase tracking-[3px] mb-10">
            How I Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "High Quality",
                desc: "I pay attention to every small detail so the final product looks professional.",
              },
              {
                icon: Users,
                title: "Easy to Use",
                desc: "I design with normal people in mind — not just tech experts.",
              },
              {
                icon: Zap,
                title: "Fast & Practical",
                desc: "I deliver beautiful designs quickly without wasting time.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800"
              >
                <item.icon className="text-purple-500 mb-4 w-7 h-7" />
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-400 text-[15px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-12 border-t border-slate-800">
          <h3 className="text-3xl font-semibold mb-4">
            Let's create something amazing
          </h3>
          <p className="text-slate-400 mb-10 max-w-md mx-auto">
            Whether you need a new website, mobile app, or complete brand design
            — I'm ready to help.
          </p>

          <a
            href="https://wa.me/2348166803089"
            className="inline-block px-12 py-5 bg-white text-slate-950 font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-purple-500/20"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
