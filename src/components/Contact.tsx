import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:thesuitablehelpers@gmail.com?subject=${encodeURIComponent(
      `Contact Form: ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Ghale House, Jeevanjee Gardens",
      subContent: "Nairobi, Kenya",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+254 726 381 971",
      subContent: "+254 112 879 636",
    },
    {
      icon: Mail,
      title: "Email",
      content: "thesuitablehelpers@gmail.com",
      subContent: "apostlecatherinewangari@gmail.com",
    },
  ];

  const offices = [
    { city: "Nairobi", description: "Headquarters" },
    { city: "Kajiado", description: "Regional Office" },
    { city: "Kisumu", description: "Regional Office" },
    { city: "Mombasa", description: "Regional Office" },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Icons */}
      <MapPin className="absolute top-10 left-10 w-72 h-72 text-primary/5 -rotate-12" />
      <Phone className="absolute bottom-10 right-10 w-64 h-64 text-secondary/5 rotate-12" />
      <Mail className="absolute top-1/2 right-1/4 w-56 h-56 text-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Contact Us
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 shadow-soft hover:shadow-medium transition-shadow bg-card border-border h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-2xl gradient-primary shadow-soft mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subContent}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 shadow-medium bg-card border-border">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Send Us A Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="h-12 bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="resize-none bg-background border-border"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary shadow-soft hover:shadow-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Our Offices */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-8 shadow-medium bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                Our Offices
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.city}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{office.city}</h4>
                      <p className="text-sm text-muted-foreground">{office.description}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary"
                      onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(office.city + " Kenya")}`, "_blank")}
                    >
                      Visit
                    </Button>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="p-8 shadow-medium bg-card border-border">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                Office Hours
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-foreground">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-foreground">Closed</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
