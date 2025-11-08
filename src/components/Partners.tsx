import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Handshake } from "lucide-react";
import { PartnerSignupModal } from "./PartnerSignupModal";

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partners = [
    { name: "Microsoft Partner" },
    { name: "Salesforce Consulting Partner" },
    { name: "Webmerge" },
    { name: "Kentico Bronze Partner" },
    { name: "Amazon Web Services Partner Network" },
    { name: "IBM SI Partner" },
    { name: "Dell Boomi" },
    { name: "Cloudera Connect" },
    { name: "Salesforce ISV Partner" },
  ];

  return (
    <section id="partners" ref={ref} className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-2">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-coral mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center p-8"
            >
              <h3 className="font-semibold text-foreground text-lg text-center">
                {partner.name}
              </h3>
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
