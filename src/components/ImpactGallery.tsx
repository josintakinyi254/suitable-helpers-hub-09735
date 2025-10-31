import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const ImpactGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { src: gallery1, shape: "rounded-full", size: "w-64 h-64", delay: 0.1, rotate: "rotate-6" },
    { src: gallery2, shape: "rounded-2xl", size: "w-56 h-72", delay: 0.2, rotate: "-rotate-3" },
    { src: gallery3, shape: "rounded-3xl", size: "w-72 h-48", delay: 0.3, rotate: "rotate-2" },
    { src: gallery4, shape: "rounded-full", size: "w-60 h-60", delay: 0.4, rotate: "-rotate-6" },
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Impact
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            Transforming <span className="text-gradient">Lives</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            See the real stories of women we've empowered through faith, support, and community action.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: image.delay, type: "spring" }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className={`${image.size} ${image.shape} ${image.rotate} overflow-hidden shadow-strong hover:shadow-xl transition-all cursor-pointer`}
            >
              <img
                src={image.src}
                alt={`Impact story ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
