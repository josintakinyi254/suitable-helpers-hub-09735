import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Smartphone } from "lucide-react";

interface MpesaDonationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MpesaDonation = ({ isOpen, onClose }: MpesaDonationProps) => {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Frontend validation
    if (!amount || !phone) {
      toast.error("Please fill in all fields");
      return;
    }

    if (isNaN(Number(amount)) || Number(amount) < 1) {
      toast.error("Please enter a valid amount");
      return;
    }

    // M-Pesa phone number validation (Kenya format)
    const phoneRegex = /^254[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be in format 254XXXXXXXXX");
      return;
    }

    // Create email with M-Pesa donation details
    const emailBody = `M-Pesa Donation Request

Amount: KES ${amount}
Phone Number: ${phone}
Donation Method: M-Pesa

M-Pesa Configuration:
Business Short Code: 174379
Account Reference: 2255
Transaction Description: Donation to Suitable Helpers Ministry

Please process this M-Pesa donation request.`;

    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=M-Pesa Donation - KES ${amount}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    toast.success("Opening email client with your donation details");

    // Clear form
    setAmount("");
    setPhone("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-teal/10">
              <Smartphone className="w-5 h-5 text-teal" />
            </div>
            M-Pesa Donation
          </DialogTitle>
          <DialogDescription>
            Enter your M-Pesa details to complete your donation via STK Push
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (KES)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="254712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={12}
            />
            <p className="text-xs text-muted-foreground">
              Format: 254XXXXXXXXX (starts with 254)
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-teal hover:bg-teal/90 text-white">
              Donate via M-Pesa
            </Button>
          </div>
        </form>

        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Note:</strong> After submitting, you'll be redirected to your email client. 
            Send the email to complete your M-Pesa donation request, and we'll process it promptly.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
