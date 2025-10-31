import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, MapPin, Mail, Phone, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { EventRegistrationForm } from "./EventRegistrationForm";

export const EventBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <section id="events" ref={ref} className="py-20 sm:py-32 bg-gradient-to-b from-accent/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden shadow-strong border-2 border-primary/20">
            {/* Header Banner */}
            <div className="gradient-hero p-8 sm:p-12 text-center relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 border-4 border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-white/10 rounded-full"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-white">Upcoming Event</span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-xs font-bold text-foreground">
                    New!
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
                  3 Days Conference
                </h2>
                <p className="text-xl sm:text-2xl text-white/90 font-semibold mb-2">
                  Host Minister: Apostle Catherine Wangari
                </p>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 bg-card">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left Column - Theme & Details */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                      Conference Theme
                    </h3>
                    <h4 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
                      REST FOR YOU
                    </h4>
                    <div className="p-4 rounded-lg bg-accent/50 border border-border">
                      <p className="text-sm text-muted-foreground italic">
                        RUTH 3:1 - "Then Naomi her mother in-law said unto her, my daughter shall I
                        not seek rest for thee, that it may be well with thee?"
                      </p>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">24TH - 26TH APRIL 2025</p>
                        <p className="text-sm text-muted-foreground">Three transformative days</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">9:00 AM - 4:00 PM Daily</p>
                        <p className="text-sm text-muted-foreground">Full day sessions</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Nyeri Municipal Hall</p>
                        <p className="text-sm text-muted-foreground">Whispers Park, Nyeri</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Contact & CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col justify-between"
                >
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                        Contact Information
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-primary" />
                          <a href="tel:+254112879636" className="text-muted-foreground hover:text-primary transition-colors">
                            +254 112 879 636
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-primary" />
                          <a href="mailto:thesuitablehelpers@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                            thesuitablehelpers@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                      <h5 className="font-semibold text-foreground mb-2">What to Expect</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Powerful teachings and prophetic ministry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Worship and fellowship with believers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Personal transformation and breakthrough</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>Networking and community building</span>
                        </li>
                      </ul>
                    </Card>
                  </div>

                  <Button
                    size="lg"
                    onClick={() => setIsRegistrationOpen(true)}
                    className="w-full gradient-primary shadow-medium hover:shadow-strong text-lg py-6"
                  >
                    Register Now
                  </Button>
                </motion.div>
              </div>

              {/* Bottom Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center pt-6 border-t border-border"
              >
                <p className="text-sm text-muted-foreground">
                  Join us for three days of spiritual renewal and divine rest. Everyone is welcome!
                </p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Registration Form Modal */}
      <EventRegistrationForm 
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </section>
  );
};
