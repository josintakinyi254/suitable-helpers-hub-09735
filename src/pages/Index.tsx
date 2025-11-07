import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CoreValues } from "@/components/CoreValues";
import { Programs } from "@/components/Programs";
import { EventBanner } from "@/components/EventBanner";
import { JoinProgramForm } from "@/components/JoinProgramForm";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";
import { Team } from "@/components/Team";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { ImpactGallery } from "@/components/ImpactGallery";
import { TransformingLives } from "@/components/TransformingLives";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <TransformingLives />
        <ImpactGallery />
        <Programs />
        <EventBanner />
        <JoinProgramForm />
        <Newsletter />
        <Contact />
        <Team />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
