import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface JoinProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedProgram?: string;
}

const programs = [
  { id: "daughters", name: "The Daughters Closet", age: "20 - 35 yrs" },
  { id: "builders", name: "Builder's Parade", age: "36 - 65 yrs" },
  { id: "deborah", name: "The Deborah Debate", age: "Unlimited" },
  { id: "mama", name: "Mama Help Me Grow", age: "6 - 19 yrs" },
  { id: "grey", name: "The Grey Crown", age: "66 & Above" },
  { id: "rahab", name: "The Rahab Rescue Mission", age: "Unlimited" },
  { id: "tulishe", name: "Tulishe Taifa Program", age: "Community Outreach" },
  { id: "village", name: "The Suitable Village", age: "All Ages" },
];

export const JoinProgramModal = ({ isOpen, onClose, preSelectedProgram }: JoinProgramModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
  });

  const [selectedPrograms, setSelectedPrograms] = useState<string[]>(
    preSelectedProgram ? [preSelectedProgram] : []
  );

  const handleProgramToggle = (programId: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(programId)
        ? prev.filter((id) => id !== programId)
        : [...prev, programId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedPrograms.length === 0) {
      toast.error("Please select at least one program");
      return;
    }

    const selectedProgramNames = programs
      .filter((p) => selectedPrograms.includes(p.id))
      .map((p) => p.name)
      .join(", ");

    const emailBody = `
Program Application

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Age: ${formData.age}

Selected Programs:
${selectedProgramNames}

Please review and process this application.
    `.trim();

    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=Program Application - ${formData.fullName}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    toast.success("Opening your email client...");
    
    setFormData({ fullName: "", email: "", phone: "", age: "" });
    setSelectedPrograms([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl text-gradient">
            Join A Program
          </DialogTitle>
          <DialogDescription>
            Select the programs you're interested in and we'll get in touch with you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Personal Information */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="age">Age *</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="mt-1"
              />
            </div>
          </div>

          {/* Programs Selection */}
          <div>
            <Label className="text-base mb-4 block">Select Programs *</Label>
            <div className="grid sm:grid-cols-2 gap-4">
              {programs.map((program) => (
                <motion.div
                  key={program.id}
                  whileHover={{ scale: 1.02 }}
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPrograms.includes(program.id)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => handleProgramToggle(program.id)}
                >
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={selectedPrograms.includes(program.id)}
                      onCheckedChange={() => handleProgramToggle(program.id)}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{program.name}</p>
                      <p className="text-sm text-muted-foreground">{program.age}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 gradient-primary">
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
