import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Users, Heart, BookOpen } from "lucide-react";

const programs = [
  { id: "daughters-closet", name: "The Daughters Closet", age: "20-35 yrs" },
  { id: "builders-parade", name: "Builder's Parade", age: "36-65 yrs" },
  { id: "deborah-debate", name: "The Deborah Debate", age: "Unlimited" },
  { id: "mama-help", name: "Mama Help Me Grow", age: "6-19 yrs" },
  { id: "grey-crown", name: "The Grey Crown", age: "66 & Above" },
  { id: "rahab-rescue", name: "The Rahab Rescue Mission", age: "Unlimited" },
  { id: "tulishe-taifa", name: "Tulishe Taifa Program", age: "Community" },
  { id: "suitable-village", name: "The Suitable Village", age: "All Ages" },
];

export const JoinProgramForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
  });
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const { toast } = useToast();

  const handleProgramToggle = (programId: string) => {
    setSelectedPrograms((prev) =>
      prev.includes(programId)
        ? prev.filter((id) => id !== programId)
        : [...prev, programId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedPrograms.length === 0) {
      toast({
        title: "Select at least one program",
        description: "Please choose one or more programs to join.",
        variant: "destructive",
      });
      return;
    }

    const selectedProgramsDetails = selectedPrograms
      .map((id) => {
        const program = programs.find((p) => p.id === id);
        return program ? `  • ${program.name} (${program.age})` : '';
      })
      .filter(Boolean)
      .join('\n');

    const emailBody = `Program Application Form

APPLICANT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${formData.fullName}
Age: ${formData.age} years
Email Address: ${formData.email}
Phone Number: ${formData.phone}

SELECTED PROGRAM(S):
━━━━━━━━━━━━━━━━━━━━━━━━━━━
${selectedProgramsDetails}

ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reason for Joining: [Please share why you want to join these programs]

How did you hear about us: [Please specify]

Special Needs/Requests: [Optional]

━━━━━━━━━━━━━━━━━━━━━━━━━━━
Thank you for your interest in our programs!
We will review your application and contact you shortly.`;

    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=${encodeURIComponent(
      'Program Application - Suitable Helpers Ministry'
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    toast({
      title: "Opening your email client...",
      description: "Please send the email to complete your application.",
    });
    
    setFormData({ fullName: "", email: "", phone: "", age: "" });
    setSelectedPrograms([]);
  };

  return (
    <section id="join-program" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Icons */}
      <Users className="absolute top-10 right-10 w-80 h-80 text-primary/5 rotate-12" />
      <Heart className="absolute bottom-10 left-10 w-72 h-72 text-secondary/5 -rotate-12" />
      <BookOpen className="absolute top-1/3 left-1/3 w-64 h-64 text-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Join Us
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Join A <span className="text-gradient">Program</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select one or more programs that resonate with your season of life 
            and let us journey together towards empowerment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-card rounded-3xl shadow-strong p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Personal Information
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
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
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Your age"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    required
                    min="1"
                    max="120"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
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
              </div>
            </div>

            {/* Program Selection */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Select Programs *
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                You can select multiple programs that interest you
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {programs.map((program) => (
                  <div
                    key={program.id}
                    className={`border-2 rounded-xl p-4 transition-all cursor-pointer ${
                      selectedPrograms.includes(program.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => handleProgramToggle(program.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          id={program.id}
                          checked={selectedPrograms.includes(program.id)}
                          onCheckedChange={() => handleProgramToggle(program.id)}
                        />
                      </div>
                      <label
                        htmlFor={program.id}
                        className="flex-1 cursor-pointer"
                        onClick={(e) => e.preventDefault()}
                      >
                        <p className="font-semibold text-foreground">{program.name}</p>
                        <p className="text-sm text-muted-foreground">{program.age}</p>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gradient-primary shadow-medium hover:shadow-strong text-lg"
            >
              Submit Application
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
