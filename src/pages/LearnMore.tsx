import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Heart, Sparkles, Target, Award, ArrowRight } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const LearnMore = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: BookOpen,
      title: "Biblical Foundation",
      description: "All our teachings are rooted in the Word of God, providing solid biblical foundation for women's empowerment.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a vibrant community of like-minded women supporting each other in their spiritual and personal growth journey.",
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "We address all aspects of life - spiritual, emotional, physical, and practical - for complete transformation.",
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Discover and walk in your God-given purpose with clarity, confidence, and conviction.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Thousands of women have experienced life-changing transformation through our programs and initiatives.",
    },
    {
      icon: Sparkles,
      title: "Continuous Growth",
      description: "Access ongoing resources, workshops, and support to ensure sustained growth and development.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 sm:py-24 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                Discover Your <span className="text-secondary">Divine Purpose</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Learn how Suitable Helpers Ministry can transform your life and help you walk in your God-given mandate
              </p>
              <Button
                size="lg"
                onClick={() => document.getElementById('get-started')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-6"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Founder */}
        <section ref={ref} className="py-20 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Card className="overflow-hidden shadow-strong">
                  <img
                    src={founderImage}
                    alt="Apostle Catherine Wangari - Founder"
                    className="w-full h-auto object-cover"
                  />
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                  Our Founder
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
                  Apostle Catherine Wangari
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                  <p>
                    With a divine calling and passion for women's empowerment, Apostle Catherine Wangari founded Suitable Helpers Ministry to awaken women to their God-given mandate.
                  </p>
                  <p>
                    Through years of ministry experience and deep biblical understanding, she has developed comprehensive programs that have transformed thousands of lives across multiple regions.
                  </p>
                  <p>
                    Her vision is to see every woman walking in their full potential, equipped to be the suitable helper God created them to be for their families, communities, and the Kingdom.
                  </p>
                </div>
                <Button
                  size="lg"
                  onClick={() => window.location.href = '/#about'}
                  className="gradient-primary shadow-soft hover:shadow-medium"
                >
                  Learn About Our Mission
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-accent/20 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-6">
                What Makes Us <span className="text-gradient">Different</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full shadow-medium hover:shadow-strong transition-all bg-card border-border">
                    <div className="p-4 rounded-2xl gradient-primary shadow-soft inline-block mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started" className="py-20 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="gradient-hero p-12 sm:p-16 text-center shadow-strong">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of women who have discovered their purpose and are walking in their God-given mandate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => window.location.href = '/#join-program'}
                    className="bg-white text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-6"
                  >
                    Join a Program
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.location.href = '/#contact'}
                    className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6"
                  >
                    Contact Us
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;