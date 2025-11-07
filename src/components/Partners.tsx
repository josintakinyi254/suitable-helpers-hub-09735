import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Handshake } from "lucide-react";
import { PartnerSignupModal } from "./PartnerSignupModal";

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partners = [
    { name: "Global Faith Network", logo: "🌍", category: "Ministry Partner" },
    { name: "Women Empowerment Initiative", logo: "💪", category: "Program Partner" },
    { name: "Community Health Services", logo: "🏥", category: "Healthcare Partner" },
    { name: "Education First Foundation", logo: "📚", category: "Education Partner" },
    { name: "Business Leaders Association", logo: "💼", category: "Business Partner" },
    { name: "Youth Development Trust", logo: "🌱", category: "Youth Partner" },
    { name: "Hope & Care Foundation", logo: "❤️", category: "Charity Partner" },
    { name: "Skills Training Institute", logo: "🎓", category: "Training Partner" },
  ];

  return (
    <section id="partners" ref={ref} className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Icons */}
      <Handshake className="absolute top-10 right-10 w-72 h-72 text-primary/5 rotate-12" />
      <Handshake className="absolute bottom-10 left-10 w-64 h-64 text-secondary/5 -rotate-12" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Partners
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            Working <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with organizations that share our vision for empowering women and transforming communities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all p-8 border border-border group hover:border-primary/30"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform">
                  <span className="text-4xl">{partner.logo}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{partner.name}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {partner.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-2xl">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Become a Partner
            </h3>
            <p className="text-muted-foreground mb-6">
              Join us in making a lasting impact. We're always looking for like-minded organizations to collaborate with.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral hover:bg-coral/90 text-white font-semibold shadow-soft hover:shadow-medium transition-all"
            >
              <Handshake className="w-5 h-5" />
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>
      
      <PartnerSignupModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
