import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Target, Eye, BookOpen, ChevronLeft, ChevronRight, Sparkles, HandHeart, Shield, Star, Crown, Users } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const stories = [
  {
    title: "Our Story",
    content: [
      'Every woman is loaded with divine help, from God for humanity and creation in general. The mandate of the woman begins in Genesis 2:18: "And the LORD God said, It is not good that the man should be alone; I will make him an help meet for him."',
      "Although for Eve, her world had Adam only before they bore children, today we are privileged to have and release the help of God to more than just one man in our lives, but to the entire family, Church and the world at large.",
      "Through the Vision of the Suitable Helpers, we teach, train and equip every woman to achieve her purpose in God, the sole reason for her creation. We organise conferences, seminars and workshops to facilitate the transformation.",
    ],
  },
  {
    title: "Our History",
    content: [
      "Founded with a divine calling, Suitable Helpers Ministry began as a small gathering of women seeking to understand their God-given purpose and mandate.",
      "Over the years, we have grown into a vibrant community spanning multiple regions, touching thousands of lives through our various programs and initiatives.",
      "Our journey has been marked by testimonies of transformation, as women from all walks of life discover their identity in Christ and step into their calling as suitable helpers.",
    ],
  },
  {
    title: "Our Impact",
    content: [
      "Through our comprehensive programs, we have empowered women across different age groups and life stages, from young girls to seasoned mothers.",
      "Our initiatives have extended beyond spiritual growth to include practical life skills, business development, health education, and community service.",
      "We continue to expand our reach, establishing regional offices and partnerships with churches to ensure every woman has access to life-transforming resources and support.",
    ],
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const coreValues = [
    { id: "word-reliant", icon: BookOpen, label: "Word-reliant", color: "from-blue-500 to-indigo-500" },
    { id: "submission", icon: HandHeart, label: "Submission", color: "from-purple-500 to-pink-500" },
    { id: "helpful", icon: Users, label: "Helpful", color: "from-green-500 to-emerald-500" },
    { id: "faithful", icon: Star, label: "Faithful", color: "from-yellow-500 to-orange-500" },
    { id: "trustworthy", icon: Shield, label: "Trustworthy", color: "from-cyan-500 to-blue-500" },
    { id: "prayerful", icon: Sparkles, label: "Prayerful", color: "from-rose-500 to-pink-500" },
  ];

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
      {/* Background Icons */}
      <Heart className="absolute top-20 right-10 w-64 h-64 text-primary/5 rotate-12" />
      <BookOpen className="absolute bottom-20 left-10 w-72 h-72 text-secondary/5 -rotate-12" />
      <Users className="absolute top-1/2 right-1/4 w-48 h-48 text-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Who We Are
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            We Are{" "}
            <span className="text-gradient">Suitable Helpers</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            God has said it, and so it is.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {/* Our Story with Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 sm:p-10 h-full shadow-medium hover:shadow-strong transition-shadow bg-card border-border relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStory}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-display font-bold text-2xl sm:text-3xl mb-6 text-foreground">
                    {stories[currentStory].title}
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    {stories[currentStory].content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Story Navigation */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevStory}
                  className="hover:bg-primary/10"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <div className="flex gap-2">
                  {stories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentStory ? "bg-primary w-6" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextStory}
                  className="hover:bg-primary/10"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-8 sm:p-10 shadow-medium hover:shadow-strong transition-shadow bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl gradient-primary shadow-soft">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To awaken every woman to their God-given mandate of suitable helpfulness.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 sm:p-10 shadow-medium hover:shadow-strong transition-shadow bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl gradient-secondary shadow-soft">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Through teaching women to fear God, we bring them to the realization of who
                    they are and the power vested on them and how to direct wisdom so that God's
                    work is not maligned. We equip the women to prosper for the enrichment of the
                    family unit and the kingdom.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Core Values - Creative Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              className="inline-block"
            >
              <Crown className="w-16 h-16 text-primary mx-auto mb-4" />
            </motion.div>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-center text-foreground mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mission and define who we are
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateZ: 2
                }}
                className="relative group"
              >
                <Card className="p-8 h-full shadow-soft hover:shadow-strong transition-all duration-300 bg-card border-border overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Animated border glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Animated icon container */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-medium`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h4 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {value.label}
                    </h4>
                    
                    {/* Decorative line */}
                    <motion.div
                      className={`mt-3 h-1 bg-gradient-to-r ${value.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "60%" } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};