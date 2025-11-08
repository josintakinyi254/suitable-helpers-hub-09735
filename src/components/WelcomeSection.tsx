import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import transformBefore from "@/assets/transform-before.jpg";
import transformAfter from "@/assets/transform-after.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

export const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative dots */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-[10%] w-16 h-16 rounded-full bg-coral/20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-[15%] w-12 h-12 rounded-full bg-green-400/20"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-coral uppercase text-sm font-semibold mb-4 tracking-wider">
            INTRODUCTION
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-4xl mx-auto leading-tight mb-8">
            Welcome to the Suitable Helpers Global aid network
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            The Suitable Helpers are women dedicated to birthing and nurturing a community, with a robust gift of all members to have congregate mindsets to impact the church, the society and kingdom both family household and kingdom. Support this mission is to stabilise everyone you encounter in body, mentally and physically.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join us to heal the woman to heal the generation. In building community that gives you a better life. Encourage them to seek a world that knows our mission.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button
              size="lg"
              onClick={() => window.location.href = '/programs'}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-lg"
            >
              JOIN WITH US
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/donate'}
              className="bg-foreground text-background hover:bg-foreground/90 border-0 px-8 py-6 rounded-lg"
            >
              DONATE NOW
            </Button>
          </div>
        </motion.div>

        {/* Image Section with Circular Overlapping Images */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto h-[500px] mt-20"
        >
          {/* Decorative dotted pattern */}
          <div className="absolute top-10 left-10 w-40 h-40 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {[...Array(25)].map((_, i) => (
                <circle
                  key={i}
                  cx={(i % 5) * 25 + 12.5}
                  cy={Math.floor(i / 5) * 25 + 12.5}
                  r="2"
                  fill="currentColor"
                />
              ))}
            </svg>
          </div>

          {/* Large circular image - main focus */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] top-[10%] w-96 h-96 rounded-full overflow-hidden shadow-strong border-8 border-white z-10"
          >
            <img src={transformBefore} alt="Community impact" className="w-full h-full object-cover" />
          </motion.div>

          {/* Top right circular image */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[15%] top-[5%] w-56 h-56 rounded-full overflow-hidden shadow-strong border-8 border-white z-20"
          >
            <img src={gallery1} alt="Support" className="w-full h-full object-cover" />
          </motion.div>

          {/* Bottom left circular image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute left-[5%] bottom-[10%] w-48 h-48 rounded-full overflow-hidden shadow-strong border-8 border-white z-5"
          >
            <img src={transformAfter} alt="Transformation" className="w-full h-full object-cover" />
          </motion.div>

          {/* Decorative green dot */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-[25%] right-[25%] w-12 h-12 rounded-full bg-green-400 z-15"
          />
        </motion.div>
      </div>
    </section>
  );
};
