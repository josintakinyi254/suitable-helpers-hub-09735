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
    <section id="programs" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Suitable Helpers, we have carefully designed programs that provide a spiritual and empowering message for every stage of life, regardless of age or career.
          </p>
        </motion.div>

        {/* Programs Grid - Only first 3 programs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.slice(0, 3).map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedProgram(program)}
              className="cursor-pointer group"
            >
              <Card className="h-full overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 bg-white border-0 rounded-2xl">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {Array.isArray(program.details) ? program.details.join(', ') : program.details}
                  </p>
                  <button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-lg font-medium transition-colors">
                    LEARN MORE
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => window.location.href = "/programs"}
            className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6 rounded-lg"
          >
            View All Programs
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
