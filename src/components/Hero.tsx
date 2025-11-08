import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroWomen from "@/assets/hero-women.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-24 pb-20">
      {/* Decorative dots */}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground leading-tight mb-8">
              Justice begins where inequality ends
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              We're building a world where everyone has the power to shape their lives.
            </p>
            <Button
              size="lg"
              onClick={() => window.location.href = '/donate'}
              className="bg-foreground text-background hover:bg-foreground/90 text-lg px-10 py-6 rounded-lg"
            >
              DONATE NOW
            </Button>
          </motion.div>

          {/* Right Decorative Images */}
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

            {/* Image containers with rounded shapes */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-[10%] w-48 h-56 rounded-[60px] overflow-hidden shadow-strong rotate-12"
            >
              <img src={heroSlide1} alt="Empowered woman" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[25%] left-[5%] w-56 h-64 rounded-[70px] overflow-hidden shadow-strong -rotate-6"
            >
              <img src={heroWomen} alt="Community" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[10%] right-[15%] w-52 h-60 rounded-[65px] overflow-hidden shadow-strong rotate-6"
            >
              <img src={heroSlide2} alt="Transformation" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
