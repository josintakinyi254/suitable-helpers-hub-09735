import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { WelcomeSection } from "@/components/WelcomeSection";
import { FundraiserSection } from "@/components/FundraiserSection";
import { ChoicesSection } from "@/components/ChoicesSection";
import { Partners } from "@/components/Partners";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Programs />
        <WelcomeSection />
        <FundraiserSection />
        <ChoicesSection />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
