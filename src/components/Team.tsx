import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import founder from "@/assets/founder.jpg";

export const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Apostle Catherine Wangari",
      role: "Founder & Lead Pastor",
      image: founder,
      bio: "Visionary leader dedicated to empowering women through faith and practical support.",
      email: "apostlecatherinewangari@gmail.com",
    },
    {
      name: "Sarah Mwangi",
      role: "Programs Director",
      image: founder,
      bio: "Oversees all ministry programs and community outreach initiatives.",
      email: "programs@suitablehelpers.org",
    },
    {
      name: "Grace Kimani",
      role: "Events Coordinator",
      image: founder,
      bio: "Manages events, conferences, and workshops that transform lives.",
      email: "events@suitablehelpers.org",
    },
    {
      name: "Ruth Njeri",
      role: "Outreach Manager",
      image: founder,
      bio: "Leads community outreach and support programs across the region.",
      email: "outreach@suitablehelpers.org",
    },
  ];

  return (
    <section id="team" ref={ref} className="py-20 sm:py-32 bg-muted/30 parallax-bg" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/placeholder.svg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Team
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            Meet The <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated leaders working together to transform lives and communities through faith and action.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 45 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group h-full"
              style={{ perspective: "1000px" }}
            >
              <div className="bg-card rounded-2xl shadow-soft hover:shadow-strong transition-all overflow-hidden transform-gpu h-full flex flex-col">
                <div className="relative h-64 w-full flex-shrink-0 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
