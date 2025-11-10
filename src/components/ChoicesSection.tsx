import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, BookOpen, Lightbulb, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

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

  const priorities = [
    {
      title: "Jobs",
      image: gallery1
    },
    {
      title: "AgriConnect",
      image: gallery2
    },
    {
      title: "Mission 300",
      image: gallery3
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

          {/* Right Image with Hexagon Shape */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] overflow-hidden shadow-strong" style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}>
              <img 
                src={heroSlide4} 
                alt="Children smiling" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Priorities Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
              OUR <span className="text-primary">PRIORITIES</span>
            </h2>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Small Priority Cards */}
            {priorities.map((priority, index) => (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="relative h-[400px] overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0">
                  <img 
                    src={priority.image} 
                    alt={priority.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <h3 className="text-white font-bold text-2xl">{priority.title}</h3>
                  <button className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-foreground transition-all">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Large Featured Card - Health Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative h-[400px] overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0">
                <img 
                  src={gallery4} 
                  alt="Health Works"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-bold text-3xl mb-3">Health Works</h3>
                <p className="text-white/90 mb-4 text-sm leading-relaxed">
                  Good health empowers people, creates jobs, and drives economic growth
                </p>
                <a href="/programs" className="inline-block text-white font-semibold border-b-2 border-white pb-1 hover:text-white/80 hover:border-white/80 transition-all">
                  Learn More
                </a>
              </div>
              <button className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-foreground transition-all">
                <Plus className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
