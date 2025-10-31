import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-women.jpg";
import founderImage from "@/assets/founder.jpg";
import programsImage from "@/assets/programs-workshop.jpg";

const galleryImages = [
  {
    id: 1,
    src: heroImage,
    title: "Women's Empowerment Conference",
    category: "Events",
  },
  {
    id: 2,
    src: founderImage,
    title: "Leadership Training",
    category: "Programs",
  },
  {
    id: 3,
    src: programsImage,
    title: "Community Outreach",
    category: "Outreach",
  },
  {
    id: 4,
    src: heroImage,
    title: "Prayer Workshop",
    category: "Workshops",
  },
  {
    id: 5,
    src: founderImage,
    title: "Youth Mentorship",
    category: "Programs",
  },
  {
    id: 6,
    src: programsImage,
    title: "Annual Gathering",
    category: "Events",
  },
  {
    id: 7,
    src: heroImage,
    title: "Business Training",
    category: "Workshops",
  },
  {
    id: 8,
    src: founderImage,
    title: "Community Service",
    category: "Outreach",
  },
  {
    id: 9,
    src: programsImage,
    title: "Faith Conference",
    category: "Events",
  },
];

const categories = ["All", "Events", "Programs", "Workshops", "Outreach"];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

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
                Our <span className="text-secondary">Gallery</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
                Capturing moments of transformation, empowerment, and community
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Content */}
        <section ref={ref} className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "gradient-primary text-white shadow-soft"
                      : "bg-accent text-foreground hover:bg-accent/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setSelectedImage(image)}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-all">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 text-white">
                          <p className="text-xs font-semibold text-secondary mb-1">
                            {image.category}
                          </p>
                          <p className="font-semibold text-lg">{image.title}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-strong"
            />
            <div className="mt-6 text-center text-white">
              <p className="text-sm font-semibold text-secondary mb-2">
                {selectedImage.category}
              </p>
              <p className="text-xl font-semibold">{selectedImage.title}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;