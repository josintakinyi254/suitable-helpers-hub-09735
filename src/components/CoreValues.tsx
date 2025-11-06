import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Heart, Building2, GraduationCap, Users } from "lucide-react";
import coreValuesImage from "@/assets/core-values-image.jpg";

export const CoreValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: BookOpen,
      title: "Evangelism",
      description: "Reaching every strata of society with the Gospel",
      color: "from-red-100 to-orange-100",
      iconColor: "text-coral",
    },
    {
      icon: Heart,
      title: "Aid & Development",
      description: "Creating opportunities that positively impact lives",
      color: "from-purple-100 to-pink-100",
      iconColor: "text-primary",
    },
    {
      icon: Building2,
      title: "Citywide Missions",
      description: "Mobilizing churches across the continent",
      color: "from-teal-100 to-cyan-100",
      iconColor: "text-teal",
    },
    {
      icon: GraduationCap,
      title: "Pastoral Training",
      description: "Training leaders to disciple their communities",
      color: "from-amber-100 to-yellow-100",
      iconColor: "text-secondary",
    },
  ];

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Tagline */}
            <p className="text-coral font-semibold tracking-wide text-sm sm:text-base mb-4 uppercase">
              Proclaiming the Gospel of Jesus is the Heartbeat of African Enterprise
            </p>

            {/* Main Heading */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-8">
              Celebrating{" "}
              <span className="text-coral">63 years</span>
              <span className="text-xl sm:text-2xl text-muted-foreground ml-2">
                | 15+ Countries.
              </span>
            </h2>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`bg-gradient-to-br ${value.color} p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 h-full`}>
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className={`w-7 h-7 ${value.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img
                src={coreValuesImage}
                alt="Celebrating 63 years of impact"
                className="w-full h-auto object-cover"
              />
              
              {/* Impact Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-8 right-8 bg-background/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-strong"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-coral" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      Impacted Lives
                    </p>
                    <p className="font-display font-bold text-3xl text-coral">
                      50M+
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
