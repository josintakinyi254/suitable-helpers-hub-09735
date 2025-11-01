import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import galleryBg from "@/assets/gallery-bg.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import founder from "@/assets/founder.jpg";
import heroWomen from "@/assets/hero-women.jpg";
import programsWorkshop from "@/assets/programs-workshop.jpg";
import transformAfter from "@/assets/transform-after.jpg";
import transformBefore from "@/assets/transform-before.jpg";
import eventConference from "@/assets/event-conference.jpg";
import donationBg from "@/assets/donation-bg.jpg";
import communityBg from "@/assets/community-bg.jpg";
import programVillage from "@/assets/program-village.jpg";
import programGrey from "@/assets/program-grey.jpg";
import programMama from "@/assets/program-mama.jpg";
import programBuilders from "@/assets/program-builders.jpg";
import programDaughters from "@/assets/program-daughters.jpg";
import programDeborah from "@/assets/program-deborah.jpg";
import programRahab from "@/assets/program-rahab.jpg";
import programTulishe from "@/assets/program-tulishe.jpg";

const galleryImages = [
  { id: 1, src: heroSlide1, title: "Women's Empowerment Conference", category: "Events" },
  { id: 2, src: heroSlide2, title: "Anniversary Celebration", category: "Events" },
  { id: 3, src: heroSlide3, title: "Community Gathering", category: "Events" },
  { id: 4, src: heroSlide4, title: "Worship Service", category: "Events" },
  { id: 5, src: heroSlide5, title: "Ministry Outreach", category: "Outreach" },
  { id: 6, src: gallery1, title: "Women's Fellowship", category: "Programs" },
  { id: 7, src: gallery2, title: "Community Service", category: "Outreach" },
  { id: 8, src: gallery3, title: "Youth Mentorship", category: "Programs" },
  { id: 9, src: gallery4, title: "Leadership Training", category: "Workshops" },
  { id: 10, src: founder, title: "Founder's Vision", category: "Programs" },
  { id: 11, src: heroWomen, title: "Women of Faith", category: "Events" },
  { id: 12, src: programsWorkshop, title: "Skills Workshop", category: "Workshops" },
  { id: 13, src: transformAfter, title: "Transformed Lives", category: "Outreach" },
  { id: 14, src: transformBefore, title: "Community Impact", category: "Outreach" },
  { id: 15, src: eventConference, title: "Annual Conference", category: "Events" },
  { id: 16, src: donationBg, title: "Giving Back", category: "Outreach" },
  { id: 17, src: communityBg, title: "Building Community", category: "Outreach" },
  { id: 18, src: programVillage, title: "Village Women Program", category: "Programs" },
  { id: 19, src: programGrey, title: "Grey Women Initiative", category: "Programs" },
  { id: 20, src: programMama, title: "Mama Pima Program", category: "Programs" },
  { id: 21, src: programBuilders, title: "Women Builders", category: "Programs" },
  { id: 22, src: programDaughters, title: "Daughters of Destiny", category: "Programs" },
  { id: 23, src: programDeborah, title: "Deborah's Daughters", category: "Programs" },
  { id: 24, src: programRahab, title: "Rahab's Hope", category: "Programs" },
  { id: 25, src: programTulishe, title: "Tulishe Mkono", category: "Programs" },
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
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${galleryBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-teal/75 to-secondary/80" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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