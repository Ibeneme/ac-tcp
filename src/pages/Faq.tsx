import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is Charles Assor?",
      answer:
        "I'm a UI Designer and Founder of Assor Power based in Port Harcourt. I create beautiful and easy-to-use designs for websites and mobile apps that help businesses look professional and grow.",
    },
    {
      question: "What services do you offer?",
      answer:
        "I design user interfaces (UI/UX), create brand identities, build websites, and develop mobile apps. I also help businesses improve their current digital products.",
    },
    {
      question: "Who do you work with?",
      answer:
        "I work with startups, small businesses, and growing companies that want modern, clean, and professional designs. Whether you're in Port Harcourt or anywhere else, I'm happy to collaborate.",
    },
    {
      question: "Do you only design or do you also build?",
      answer:
        "I do both! I design beautiful interfaces and can also code them into fully working websites and apps using modern tools like React and Next.js.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "It depends on the project size. A simple landing page can take 1-2 weeks, while a full website or app can take 4-8 weeks. I always give you a clear timeline before we start.",
    },
    {
      question: "What is your design process?",
      answer:
        "I start by understanding your business and goals, then create wireframes, design beautiful screens, and finally turn them into a working product. I keep you updated at every step.",
    },
    {
      question: "How much do you charge?",
      answer:
        "Pricing depends on the project. I offer both one-time project fees and monthly retainers. Send me a message with your idea and I'll give you a fair quote.",
    },
    {
      question: "Are you available for work now?",
      answer:
        "Yes! I'm currently taking on new projects. If you're interested, let's have a conversation and see how I can help you.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-slate-950 text-slate-200 py-24 px-6 md:px-12 font-['Rethink_Sans']">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-lg">
            Everything you want to know about working with me
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-900/50 transition-colors"
              >
                <span className="font-medium text-lg pr-6">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-20 text-center border-t border-slate-800 pt-12">
          <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8">
            I'm just a message away. Feel free to reach out!
          </p>
          <a
            href="https://wa.me/2348166803089"
            className="inline-block px-10 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:scale-105 transition-transform"
          >
            Chat with Me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
