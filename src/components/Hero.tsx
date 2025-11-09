import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";

const slides = [
  {
    title: "Justice begins where inequality ends",
    subtitle: "We're building a world where everyone has the power to shape their lives.",
    images: [heroSlide1, heroSlide2, heroSlide3],
  },
  {
    title: "Empowering Women Through Faith",
    subtitle: "Join us in transforming lives and building stronger communities across Africa.",
    images: [heroSlide2, heroSlide4, heroSlide5],
  },
  {
    title: "Heal the Woman, Heal the Generation",
    subtitle: "Supporting women to achieve their God-given purpose and mandate.",
    images: [heroSlide3, heroSlide5, heroSlide1],
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-24 pb-20">
      {/* Animated Dotted World Map Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 600">
          {[...Array(100)].map((_, i) => {
            const x = (i % 20) * 50 + 25;
            const y = Math.floor(i / 20) * 120 + 50;
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill="currentColor"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Decorative animated dots */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] w-12 h-12 rounded-full bg-coral"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[45%] w-8 h-8 rounded-full bg-green-400"
      />
      <motion.div
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[30%] right-[10%] w-16 h-16 rounded-full bg-coral"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60%] left-[8%] w-10 h-10 rounded-full bg-blue-400"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[35%] w-14 h-14 rounded-full bg-yellow-400"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[40%] right-[5%] w-12 h-12 rounded-full bg-green-500"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-8">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
              <Button
                size="lg"
                onClick={() => (window.location.href = "/donate")}
                className="bg-foreground text-background hover:bg-foreground/90 text-lg px-10 py-6 rounded-lg"
              >
                DONATE NOW
              </Button>
            </motion.div>

            {/* Right Decorative Images with Different Shapes */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px]"
            >
              {/* Background decorative lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 100 Q200 150 150 300 T250 500"
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 50 Q250 100 200 250 T300 450"
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>

              {/* Hexagon shape - Top right */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-[10%] w-52 h-60 overflow-hidden shadow-strong rotate-12"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <img
                  src={slides[currentSlide].images[0]}
                  alt="Empowered woman"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Rounded rectangle - Center left */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[25%] left-[5%] w-60 h-72 rounded-[50px] overflow-hidden shadow-strong -rotate-6"
              >
                <img
                  src={slides[currentSlide].images[1]}
                  alt="Community"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Diamond shape - Bottom right */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[10%] right-[15%] w-56 h-56 overflow-hidden shadow-strong rotate-45"
              >
                <img
                  src={slides[currentSlide].images[2]}
                  alt="Transformation"
                  className="w-full h-full object-cover -rotate-45 scale-150"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-12 relative z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-coral" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
