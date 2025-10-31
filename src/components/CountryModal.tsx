import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

interface CountryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CountryModal = ({ isOpen, onClose }: CountryModalProps) => {
  const countries = [
    { name: "Kenya", flag: "🇰🇪", office: "Nairobi - Main Office", address: "123 Nairobi Street, Nairobi" },
    { name: "Uganda", flag: "🇺🇬", office: "Kampala Office", address: "456 Kampala Road, Kampala" },
    { name: "Tanzania", flag: "🇹🇿", office: "Dar es Salaam Office", address: "789 Dar Street, Dar es Salaam" },
    { name: "Rwanda", flag: "🇷🇼", office: "Kigali Office", address: "321 Kigali Avenue, Kigali" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Our Global Offices</DialogTitle>
        </DialogHeader>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="p-4 rounded-xl bg-muted/50 hover:bg-accent transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <span className="text-4xl">{country.flag}</span>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary mt-1">{country.office}</p>
                  <div className="flex items-start gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">{country.address}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
