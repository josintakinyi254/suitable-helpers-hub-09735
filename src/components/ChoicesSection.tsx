import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, BookOpen, Lightbulb } from "lucide-react";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

export const ChoicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Heart,
      title: "Health",
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "Education",
      color: "text-blue-400"
    },
    {
      icon: BookOpen,
      title: "Protection",
      color: "text-purple-400"
    },
    {
      icon: Lightbulb,
      title: "Development",
      color: "text-yellow-400"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-coral uppercase text-sm font-semibold mb-4 tracking-wider">
              WHO WE ARE
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Give a future full of choices
            </h2>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:shadow-soft transition-all"
                >
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-3`} />
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every child deserves a healthy start
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroSlide4} 
                alt="Children smiling" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
