import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EventRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventRegistrationForm = ({ isOpen, onClose }: EventRegistrationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    church: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `Event Registration Form

EVENT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Event: 3 Days Conference - "REST FOR YOU"
Dates: April 24-26, 2025
Time: 9:00 AM - 4:00 PM Daily
Venue: Nyeri Municipal Hall - Whispers Park

PARTICIPANT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${formData.fullName}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Church/Organization: ${formData.church || 'Not Provided'}

CONFIRMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
I confirm my attendance at this event and understand that I will receive further details via email or phone.

Looking forward to this transformative experience!`;

    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=${encodeURIComponent(
      'Event Registration - REST FOR YOU Conference'
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    toast({
      title: "Opening your email client...",
      description: "Please send the email to complete your registration.",
    });
    
    setFormData({ fullName: "", email: "", phone: "", church: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-card rounded-2xl shadow-strong max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="gradient-primary p-6 rounded-t-2xl relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Event Registration
                </h3>
                <p className="text-white/90">
                  3 Days Conference - "REST FOR YOU"
                </p>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+254 712 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="church">Church/Organization (Optional)</Label>
                  <Input
                    id="church"
                    type="text"
                    placeholder="Your church name"
                    value={formData.church}
                    onChange={(e) => setFormData({ ...formData, church: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div className="bg-muted/50 rounded-lg p-4 text-sm">
                  <p className="font-semibold text-foreground mb-2">Event Details:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>📅 April 24-26, 2025</li>
                    <li>🕐 9:00 AM - 4:00 PM Daily</li>
                    <li>📍 Nyeri Municipal Hall - Whispers Park</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary shadow-medium hover:shadow-strong"
                >
                  Register Now
                </Button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
