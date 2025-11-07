import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, Building, MessageSquare, Heart, Crown, Shield, Globe, Home } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ProgramModal } from "./ProgramModal";
import programDaughters from "@/assets/program-daughters.jpg";
import programBuilders from "@/assets/program-builders.jpg";
import programDeborah from "@/assets/program-deborah.jpg";
import programMama from "@/assets/program-mama.jpg";
import programGrey from "@/assets/program-grey.jpg";
import programRahab from "@/assets/program-rahab.jpg";
import programTulishe from "@/assets/program-tulishe.jpg";
import programVillage from "@/assets/program-village.jpg";

export const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

  const programs = [
    {
      icon: Users,
      title: "The Daughters Closet",
      age: "Age: 20 - 35 yrs",
      color: "from-purple-500 to-pink-500",
      image: programDaughters,
      details: ["Faith", "Careers", "Relationships and marriage", "Parenting", "Investment", "Company Chaplaincy", "Health and Nutrition"],
    },
    {
      icon: Building,
      title: "Builder's Parade",
      age: "Age: 36 - 65 yrs",
      color: "from-blue-500 to-purple-500",
      image: programBuilders,
      details: ["Faith", "Marriage", "Parenting", "Business Chaplaincy", "Investment", "Education", "Health and Nutrition"],
    },
    {
      icon: MessageSquare,
      title: "The Deborah Debate",
      age: "Unlimited",
      color: "from-green-500 to-teal-500",
      image: programDeborah,
      details: ["Empowering women in leadership", "Counsel for the king"],
    },
    {
      icon: Heart,
      title: "Mama Help Me Grow",
      age: "Age: 6 - 19 yrs",
      color: "from-pink-500 to-rose-500",
      image: programMama,
      details: ["Education", "Faith", "Careers", "Health and Nutrition"],
    },
    {
      icon: Crown,
      title: "The Grey Crown",
      age: "Age: 66 & Above",
      color: "from-amber-500 to-orange-500",
      image: programGrey,
      details: ["Faith", "Marriage", "Fellowship", "Training", "Health", "Wellness and Nutrition"],
    },
    {
      icon: Shield,
      title: "The Rahab Rescue Mission",
      age: "Unlimited",
      color: "from-red-500 to-pink-500",
      image: programRahab,
      details: ["Rescuing the prostitutes", "Giving them access to healthcare", "Lifestyle change program", "Family reunion", "Start-up package"],
    },
    {
      icon: Globe,
      title: "Tulishe Taifa Program",
      age: "Community Outreach",
      color: "from-indigo-500 to-blue-500",
      image: programTulishe,
      details: ["Food production", "Value addition", "Granary management", "Distribution", "Operation go green"],
    },
    {
      icon: Home,
      title: "The Suitable Village",
      age: "All Ages",
      color: "from-emerald-500 to-green-500",
      image: programVillage,
      details: ["Establish homes for the rescued orphans, prostitutes and vulnerable aged"],
    },
  ];

  return (
    <section id="programs" ref={ref} className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Icons */}
      <Users className="absolute top-10 left-10 w-80 h-80 text-primary/5 -rotate-12" />
      <Heart className="absolute bottom-10 right-10 w-72 h-72 text-secondary/5 rotate-12" />
      <Crown className="absolute top-1/2 left-1/4 w-56 h-56 text-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            Our Programs
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            Empowerment Through{" "}
            <span className="text-gradient">Every Season</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored programs designed to meet women at every stage of life, equipping them with
            spiritual wisdom and practical skills for Kingdom impact.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="group relative overflow-hidden h-80 shadow-soft hover:shadow-strong transition-all duration-300 bg-card border-border cursor-pointer"
                onClick={() => setSelectedProgram(program)}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-75 transition-opacity duration-300`} />
                
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-2xl mb-2 text-white">
                    {program.title}
                  </h3>
                  <p className="text-sm text-white/90 mb-3">{program.age}</p>
                  <p className="text-xs text-white font-medium">Click to learn more →</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => window.location.href = "/programs"}
            className="gradient-primary shadow-medium hover:shadow-strong text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Program Modal */}
      {selectedProgram && (
        <ProgramModal
          isOpen={!!selectedProgram}
          onClose={() => setSelectedProgram(null)}
          program={selectedProgram}
        />
      )}
    </section>
  );
};
