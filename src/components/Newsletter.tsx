import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=${encodeURIComponent(
        'Newsletter Subscription'
      )}&body=${encodeURIComponent(`Please subscribe me to your newsletter.\n\nEmail: ${email}`)}`;
      window.location.href = mailtoLink;
      toast.success("Opening your email client to complete subscription...");
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-accent/30 to-background relative overflow-hidden">
      {/* Background Icons */}
      <Mail className="absolute top-20 right-20 w-64 h-64 text-primary/5 rotate-12" />
      <Send className="absolute bottom-20 left-20 w-56 h-56 text-secondary/5 -rotate-12" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden shadow-strong border-border">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Content */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                    <Mail className="w-4 h-4" />
                    Subscribe
                  </div>

                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                    Stay Connected With Us
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Get updates on our programs, upcoming events, testimonies, and inspiring
                    content delivered straight to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 h-12 px-4 bg-background border-border"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="gradient-primary shadow-soft hover:shadow-medium whitespace-nowrap"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Subscribe
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </motion.div>
              </div>

              {/* Right Side - Visual */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="gradient-hero p-12 flex items-center justify-center relative overflow-hidden"
              >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Mail className="w-24 h-24 text-white mx-auto mb-6 opacity-90" />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    Join Our Community
                  </h3>
                  <p className="text-white/80">
                    Be part of a growing family of empowered women
                  </p>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
