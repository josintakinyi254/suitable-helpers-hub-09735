import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, Users, BookOpen, Lightbulb, Plus, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const ChoicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number>(0); // Jobs is expanded by default
  const [currentPage, setCurrentPage] = useState<number>(0);
  const cardsPerPage = 4;

  const features = [
    {
      icon: Heart,
      title: "Health",
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "Education",
      color: "text-blue-400"
    },
    {
      icon: BookOpen,
      title: "Protection",
      color: "text-purple-400"
    },
    {
      icon: Lightbulb,
      title: "Development",
      color: "text-yellow-400"
    }
  ];

  const priorities = [
    {
      title: "Jobs",
      description: "Empowering women through sustainable employment opportunities and entrepreneurship",
      image: gallery1,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "AgriConnect",
      description: "Connecting farmers with markets and resources for sustainable agriculture",
      image: gallery2,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Mission 300",
      description: "Reaching 300 communities with life-changing programs and support",
      image: gallery3,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Health Works",
      description: "Good health empowers people, creates jobs, and drives economic growth",
      image: gallery4,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Education First",
      description: "Providing quality education and learning opportunities for all",
      image: gallery1,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Clean Water",
      description: "Ensuring access to clean water and sanitation facilities",
      image: gallery2,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const totalPages = Math.ceil(priorities.length / cardsPerPage);
  const displayedPriorities = priorities.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setExpandedCard(0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      setExpandedCard(0);
    }
  };

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? -1 : index);
  };

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-coral uppercase text-sm font-semibold mb-4 tracking-wider">
              WHO WE ARE
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
              Give a future full of choices
            </h2>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-white hover:shadow-soft transition-all"
                >
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-3`} />
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every child deserves a healthy start
            </p>
          </motion.div>

          {/* Right Image with Hexagon Shape */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[600px] overflow-hidden shadow-strong" style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}>
              <img 
                src={heroSlide4} 
                alt="Children smiling" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Priorities Section - Video Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
              OUR <span className="text-primary">PRIORITIES</span>
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={handleNextPage}
                disabled={currentPage >= totalPages - 1}
                className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex h-[500px] border-l border-border">
            {displayedPriorities.map((priority, index) => {
              const isExpanded = expandedCard === index;
              
              return (
                <motion.div
                  key={priority.title}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    flex: isExpanded ? "0 0 70%" : "0 0 10%"
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative overflow-hidden cursor-pointer border-r border-border"
                >
                  {!isExpanded ? (
                    // Collapsed Card
                    <div className="relative h-full w-full group">
                      <div className="absolute inset-0">
                        <img 
                          src={priority.image} 
                          alt={priority.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                        <h3 className="text-white font-bold text-xl">{priority.title}</h3>
                        <button 
                          onClick={() => handleCardClick(index)}
                          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-foreground transition-all flex-shrink-0"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Expanded Card with Video
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 bg-black">
                        <iframe
                          src={`${priority.videoUrl}?autoplay=1&mute=1`}
                          className="w-full h-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={priority.title}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-white font-bold text-3xl mb-3">{priority.title}</h3>
                        <p className="text-white/90 mb-4 text-sm leading-relaxed">
                          {priority.description}
                        </p>
                        <a href="/programs" className="inline-block text-white font-semibold border-b-2 border-white pb-1 hover:text-white/80 hover:border-white/80 transition-all">
                          Learn More
                        </a>
                      </div>
                      <button 
                        onClick={() => handleCardClick(index)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-black/50 hover:bg-white hover:text-foreground transition-all z-10"
                      >
                        <Plus className="w-5 h-5 rotate-45" />
                      </button>
                      <button className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all z-10">
                        <Pause className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
