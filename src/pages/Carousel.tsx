import { motion } from "framer-motion";

const qualities = [
  "Product Strategy",
  "UI/UX Design",
  "Brand Identity",
  "Web Development",
  "High Conversion",
  "Digital Ecosystems",
];

const Carousel = () => {
  return (
    <div className="flex w-full overflow-hidden bg-slate-950 py-10">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Adjust speed here
        }}
      >
        {/* We duplicate the array to ensure seamless looping */}
        {[...qualities, ...qualities].map((item, index) => (
          <div
            key={index}
            className="text-4xl font-black text-slate-800 uppercase tracking-tighter"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
