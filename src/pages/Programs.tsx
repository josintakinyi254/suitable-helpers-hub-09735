import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Users, Building, MessageSquare, Heart, Crown, Shield, Globe, Home, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgramModal } from "@/components/ProgramModal";
import { JoinProgramModal } from "@/components/JoinProgramModal";
import programDaughters from "@/assets/program-daughters.jpg";
import programBuilders from "@/assets/program-builders.jpg";
import programDeborah from "@/assets/program-deborah.jpg";
import programMama from "@/assets/program-mama.jpg";
import programGrey from "@/assets/program-grey.jpg";
import programRahab from "@/assets/program-rahab.jpg";
import programTulishe from "@/assets/program-tulishe.jpg";
import programVillage from "@/assets/program-village.jpg";
import programsWorkshop from "@/assets/programs-workshop.jpg";

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const programs = [
    {
      icon: Users,
      title: "The Daughters Closet",
      age: "Age: 20 - 35 yrs",
      color: "from-purple-500 to-pink-500",
      image: programDaughters,
      details: ["Faith", "Careers", "Relationships and marriage", "Parenting", "Investment", "Company Chaplaincy", "Health and Nutrition"],
      testimonial: "This program transformed my career and strengthened my faith. I now lead a women's group at my workplace.",
      testimonialAuthor: "Sarah M., Nairobi"
    },
    {
      icon: Building,
      title: "Builder's Parade",
      age: "Age: 36 - 65 yrs",
      color: "from-blue-500 to-purple-500",
      image: programBuilders,
      details: ["Faith", "Marriage", "Parenting", "Business Chaplaincy", "Investment", "Education", "Health and Nutrition"],
      testimonial: "The Builder's Parade helped me balance my business with my family life and deepen my spiritual walk.",
      testimonialAuthor: "Grace K., Kampala"
    },
    {
      icon: MessageSquare,
      title: "The Deborah Debate",
      age: "Unlimited",
      color: "from-green-500 to-teal-500",
      image: programDeborah,
      details: ["Empowering women in leadership", "Counsel for the king"],
      testimonial: "I discovered my voice and now serve as a community leader, advocating for women's rights.",
      testimonialAuthor: "Esther N., Dar es Salaam"
    },
    {
      icon: Heart,
      title: "Mama Help Me Grow",
      age: "Age: 6 - 19 yrs",
      color: "from-pink-500 to-rose-500",
      image: programMama,
      details: ["Education", "Faith", "Careers", "Health and Nutrition"],
      testimonial: "My daughter gained confidence and direction for her future through this amazing mentorship program.",
      testimonialAuthor: "Mary W., Kisumu"
    },
    {
      icon: Crown,
      title: "The Grey Crown",
      age: "Age: 66 & Above",
      color: "from-amber-500 to-orange-500",
      image: programGrey,
      details: ["Faith", "Marriage", "Fellowship", "Training", "Health", "Wellness and Nutrition"],
      testimonial: "At 70, I found a community that values my wisdom and provides spiritual nourishment.",
      testimonialAuthor: "Ruth M., Mombasa"
    },
    {
      icon: Shield,
      title: "The Rahab Rescue Mission",
      age: "Unlimited",
      color: "from-red-500 to-pink-500",
      image: programRahab,
      details: ["Rescuing the prostitutes", "Giving them access to healthcare", "Lifestyle change program", "Family reunion", "Start-up package"],
      testimonial: "I was rescued, restored, and now run my own business. This program gave me a second chance at life.",
      testimonialAuthor: "Anonymous, Nairobi"
    },
    {
      icon: Globe,
      title: "Tulishe Taifa Program",
      age: "Community Outreach",
      color: "from-indigo-500 to-blue-500",
      image: programTulishe,
      details: ["Food production", "Value addition", "Granary management", "Distribution", "Operation go green"],
      testimonial: "Our village now has food security and sustainable farming practices thanks to Tulishe Taifa.",
      testimonialAuthor: "Jane O., Nakuru"
    },
    {
      icon: Home,
      title: "The Suitable Village",
      age: "All Ages",
      color: "from-emerald-500 to-green-500",
      image: programVillage,
      details: ["Establish homes for the rescued orphans, prostitutes and vulnerable aged"],
      testimonial: "The Suitable Village gave me a family when I had none. I am forever grateful.",
      testimonialAuthor: "Hope T., Eldoret"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-[132px]">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
                Our Programs
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                Empowerment Through{" "}
                <span className="text-gradient">Every Season</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Tailored programs designed to meet women at every stage of life, equipping them with
                spiritual wisdom and practical skills for Kingdom impact.
              </p>
              <Button
                size="lg"
                onClick={() => setShowJoinModal(true)}
                className="gradient-primary shadow-medium hover:shadow-strong text-lg px-8 py-6"
              >
                Join A Program Today
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid with Testimonials */}
        <section ref={ref} className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Program Image & Info */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Card 
                      className="group relative overflow-hidden h-[500px] shadow-soft hover:shadow-strong transition-all duration-300 bg-card border-border cursor-pointer"
                      onClick={() => setSelectedProgram(program)}
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${program.image})` }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-75 transition-opacity duration-300`} />
                      
                      <div className="relative z-10 h-full flex flex-col justify-end p-8">
                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300">
                          <program.icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="font-display font-bold text-3xl mb-2 text-white">
                          {program.title}
                        </h3>
                        <p className="text-sm text-white/90 mb-4">{program.age}</p>
                        <p className="text-xs text-white font-medium">Click to learn more →</p>
                      </div>
                    </Card>
                  </div>

                  {/* Program Details & Testimonial */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <h3 className="font-display font-bold text-3xl text-foreground mb-4">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{program.age}</p>
                      
                      <div className="space-y-3">
                        {program.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-foreground">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <Card className="bg-primary/5 border-primary/20 p-6">
                      <p className="text-foreground italic mb-3">
                        "{program.testimonial}"
                      </p>
                      <p className="text-sm text-primary font-semibold">
                        — {program.testimonialAuthor}
                      </p>
                    </Card>

                    <Button
                      onClick={() => {
                        setSelectedProgram(program);
                      }}
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Learn More About This Program
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
                Ready to Transform Your Life?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Join thousands of women who have found purpose, community, and spiritual growth through our programs.
              </p>
              <Button
                size="lg"
                onClick={() => setShowJoinModal(true)}
                className="bg-white text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-6"
              >
                Join A Program Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProgram && (
        <ProgramModal
          isOpen={!!selectedProgram}
          onClose={() => setSelectedProgram(null)}
          program={selectedProgram}
        />
      )}

      <JoinProgramModal
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
    </div>
  );
}
