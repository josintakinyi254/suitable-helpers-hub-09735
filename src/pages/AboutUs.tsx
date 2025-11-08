import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import founder from "@/assets/founder.jpg";

export const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Apostle Catherine Wangari",
      role: "Founder & Lead Pastor",
      image: founder,
      bio: "Visionary leader dedicated to empowering women through faith and practical support.",
      email: "apostlecatherinewangari@gmail.com",
    },
    {
      name: "Sarah Mwangi",
      role: "Programs Director",
      image: founder,
      bio: "Oversees all ministry programs and community outreach initiatives.",
      email: "programs@suitablehelpers.org",
    },
    {
      name: "Grace Kimani",
      role: "Events Coordinator",
      image: founder,
      bio: "Manages events, conferences, and workshops that transform lives.",
      email: "events@suitablehelpers.org",
    },
  ];

  const stats = [
    { value: "600", label: "Women Empowered", suffix: "+" },
    { value: "700", label: "Lives Transformed", suffix: "+" },
    { value: "1.2", label: "Million Impact Reach", suffix: "M" },
    { value: "110", label: "Partner Churches", suffix: "+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-foreground mb-8">
                ABOUT US.
              </h1>
              
              <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
                <div>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      Suitable Helpers Ministry was founded with a divine calling to awaken every woman to their God-given mandate. We began as a small gathering of women seeking to understand their purpose and mandate from God.
                    </p>
                    <p>
                      Through the Vision of the Suitable Helpers, we teach, train and equip every woman to achieve her purpose in God, the sole reason for her creation. We organise conferences, seminars and workshops to facilitate the transformation.
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <p>
                      After a fortunate encounter with divine wisdom, our founder Apostle Catherine Wangari established this ministry to release God's help to not just one person, but to entire families, churches, and the world at large.
                    </p>
                    <p>
                      Over the years, we have grown into a vibrant community spanning multiple regions, touching thousands of lives through our various programs and initiatives. Our journey has been marked by testimonies of transformation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-96 rounded-2xl overflow-hidden shadow-strong"
            >
              <img 
                src={founder} 
                alt="Team at work" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-8xl text-primary/20 font-serif leading-none">"</span>
                <blockquote className="text-3xl sm:text-4xl font-display italic text-foreground leading-relaxed mb-6">
                  Our work does make sense only if it is a faithful witness of His time.
                </blockquote>
                <p className="text-muted-foreground text-lg">
                  — Apostle Catherine Wangari, Founder
                </p>
                <span className="text-8xl text-primary/20 font-serif leading-none float-right">"</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full h-96 rounded-2xl overflow-hidden shadow-strong"
              >
                <img 
                  src={founder} 
                  alt="Ministry work" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={ref} className="py-20 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="font-display font-bold text-5xl sm:text-6xl text-foreground mb-16">
                THE TEAM.
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
                All art is quite useless, one can never consent to creep when one feels an impulse to soar; words do not express thoughts very well, they always become a little different immediately after they are expressed, a little distorted, a little foolish.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                He had a word, too, love, he called it, but I had not a word for that any more to pride or fear. He had a word, too, love, he called it, but I had been used to words for a long time. I knew that that word was like the other, that when the right time came, you wouldn't need a word for that any more than for pride or fear.
              </p>
            </motion.div>

            {/* Team Members */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15
                  }}
                  className="group"
                >
                  <div className="bg-background rounded-lg overflow-hidden shadow-soft hover:shadow-strong transition-all">
                    <div className="relative h-80 w-full overflow-hidden bg-muted">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-xl text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                      <div className="flex gap-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="text-left"
                >
                  <div className="font-display font-bold text-5xl sm:text-6xl text-foreground mb-2">
                    {stat.value}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-tight">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-6 mt-16 justify-end text-sm text-muted-foreground"
            >
              <a href="#" className="hover:text-primary transition-colors">instagram.</a>
              <a href="#" className="hover:text-primary transition-colors">facebook.</a>
              <a href="#" className="hover:text-primary transition-colors">twitter.</a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
