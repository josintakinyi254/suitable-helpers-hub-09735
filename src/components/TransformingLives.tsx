import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import transformBefore from "@/assets/transform-before.jpg";
import transformAfter from "@/assets/transform-after.jpg";

export const TransformingLives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Decorative Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <svg className="absolute top-20 left-10 w-64 h-64 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <svg className="absolute bottom-20 right-10 w-96 h-96 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Impact
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            Transforming{" "}
            <span className="text-gradient">Lives</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness the power of faith, community, and purpose as women discover their divine calling
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Before Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group overflow-hidden rounded-3xl shadow-strong aspect-video"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={transformBefore}
                alt="Before transformation"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">
                Lost & Searching
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Many women struggle to find their purpose, feeling disconnected from their divine calling and potential.
              </p>
            </div>
          </motion.div>

          {/* After Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group overflow-hidden rounded-3xl shadow-strong aspect-video"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={transformAfter}
                alt="After transformation"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">
                Empowered & Thriving
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Through our programs, women discover their identity in Christ and step boldly into their role as suitable helpers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
