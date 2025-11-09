import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Handshake } from "lucide-react";
import { PartnerSignupModal } from "./PartnerSignupModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partners = [
    "PROEL",
    "Soundking",
    "SHURE",
    "SENNHEISER",
    "dbx by HARMAN",
    "Bugera",
    "Turbosound",
    "behringer",
    "Microsoft Partner",
    "Salesforce Consulting",
    "Webmerge",
    "Kentico Bronze",
  ];

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section id="partners" ref={ref} className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            Our Partners
          </h2>
          <div className="w-16 h-1 bg-coral mx-auto mb-8"></div>
        </motion.div>

        {/* Carousel for Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex items-center justify-center h-24 px-6">
                    <h3 className="font-semibold text-foreground text-base md:text-lg text-center">
                      {partner}
                    </h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-foreground"></div>
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

      <PartnerSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
