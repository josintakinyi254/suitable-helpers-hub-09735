import { Mail, Phone, Globe } from "lucide-react";
import { useState } from "react";
import { CountryModal } from "./CountryModal";

interface TopHeaderProps {
  scrolled?: boolean;
}

export const TopHeader = ({ scrolled }: TopHeaderProps) => {
  const [showCountryModal, setShowCountryModal] = useState(false);

  return (
    <>
      <div className={`fixed left-0 right-0 z-50 bg-primary/5 border-b border-primary/10 transition-all duration-300 ${
        scrolled ? '-top-10 opacity-0' : 'top-0 opacity-100'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs sm:text-sm">
            {/* Left - Countries */}
            <button
              onClick={() => setShowCountryModal(true)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Our Offices</span>
            </button>

            {/* Right - Contact */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:+254712345678"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">+254 712 345 678</span>
              </a>
              <a
                href="mailto:thesuitablehelpers@gmail.com"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">thesuitablehelpers@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <CountryModal isOpen={showCountryModal} onClose={() => setShowCountryModal(false)} />
    </>
  );
};
