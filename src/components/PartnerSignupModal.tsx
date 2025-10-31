import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";
import { Handshake } from "lucide-react";

interface PartnerSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerSignupModal = ({ isOpen, onClose }: PartnerSignupModalProps) => {
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `Partnership Inquiry

ORGANIZATION DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organization Name: ${formData.organizationName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Partnership Type: ${formData.partnershipType}

MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

Looking forward to collaborating with you!
`;

    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=${encodeURIComponent(
      `Partnership Inquiry - ${formData.organizationName}`
    )}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({
      organizationName: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: ""
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-coral/10">
              <Handshake className="w-5 h-5 text-coral" />
            </div>
            Partner With Us
          </DialogTitle>
          <DialogDescription>
            Join us in making a lasting impact. Fill out this form to explore partnership opportunities.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="orgName">Organization Name *</Label>
            <Input
              id="orgName"
              value={formData.organizationName}
              onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPerson">Contact Person *</Label>
            <Input
              id="contactPerson"
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="partnershipType">Partnership Type *</Label>
            <Select
              value={formData.partnershipType}
              onValueChange={(value) => setFormData({ ...formData, partnershipType: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select partnership type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ministry Partner">Ministry Partner</SelectItem>
                <SelectItem value="Program Partner">Program Partner</SelectItem>
                <SelectItem value="Healthcare Partner">Healthcare Partner</SelectItem>
                <SelectItem value="Education Partner">Education Partner</SelectItem>
                <SelectItem value="Business Partner">Business Partner</SelectItem>
                <SelectItem value="Youth Partner">Youth Partner</SelectItem>
                <SelectItem value="Charity Partner">Charity Partner</SelectItem>
                <SelectItem value="Training Partner">Training Partner</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your organization and partnership goals *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-coral hover:bg-coral/90 text-white">
              Submit Inquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
