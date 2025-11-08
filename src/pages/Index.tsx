import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { TransformingLives } from "@/components/TransformingLives";
import { Partners } from "@/components/Partners";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        
        {/* Programs Section with increased spacing */}
        <div className="py-12">
          <Programs />
        </div>

        {/* About Section with cleaner layout */}
        <div className="py-20">
          <About />
        </div>

        {/* Transforming Lives with animations */}
        <div className="py-20">
          <TransformingLives />
        </div>

        {/* Partners Section */}
        <div className="py-20">
          <Partners />
        </div>

        {/* Newsletter */}
        <div className="py-12">
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
