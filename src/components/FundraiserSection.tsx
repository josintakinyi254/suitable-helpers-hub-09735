import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import transformBefore from "@/assets/transform-before.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const FundraiserSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[...Array(16)].map((_, i) => (
            <circle
              key={i}
              cx={(i % 4) * 33 + 16.5}
              cy={Math.floor(i / 4) * 33 + 16.5}
              r="3"
              fill="currentColor"
            />
          ))}
        </svg>
      </div>

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[15%] left-[8%] w-16 h-16 rounded-full bg-coral/20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-[30%] left-[12%] w-12 h-12 rounded-full bg-green-400/30"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Circular Image Arrangement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            {/* Large main circle */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-[15%] w-80 h-80 rounded-full overflow-hidden shadow-strong border-8 border-gray-900 z-20"
            >
              <img src={transformBefore} alt="Champion for justice" className="w-full h-full object-cover" />
            </motion.div>

            {/* Top right smaller circle */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-[10%] top-0 w-48 h-48 rounded-full overflow-hidden shadow-strong border-8 border-white z-30"
            >
              <img src={gallery2} alt="Community support" className="w-full h-full object-cover" />
            </motion.div>

            {/* Bottom left smaller circle */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-[10%] bottom-[5%] w-44 h-44 rounded-full overflow-hidden shadow-strong border-8 border-white z-10"
            >
              <img src={gallery3} alt="Impact" className="w-full h-full object-cover" />
            </motion.div>

            {/* Decorative green dot */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-[50%] right-[15%] w-10 h-10 rounded-full bg-green-400 z-25"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              2020 fundraiser champions for social justice
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Help Raise $30,000 for the community of Shenzhen Catholics.</strong>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Suitable Helpers of yourself is to equip and word to educate our community about the access are provide spiritual household and kingdom.Support the projects, we will solve how a specific question documenting that people need.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We reach out to our partners, with our solve and partners, we will solve how a specific question documenting that people need and our impact our prayer solution will to provide a dream unto our thousand of people with a specific local and better love people and our community in the decade of 2020.
            </p>
            <a href="/donate" className="text-coral font-semibold text-lg hover:underline">
              Learn More info on this fundraiser 2020 →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
