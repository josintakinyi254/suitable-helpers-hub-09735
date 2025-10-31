import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: {
    icon: React.ComponentType<any>;
    title: string;
    age: string;
    color: string;
    image: string;
    details: string[];
  };
}

export const ProgramModal = ({ isOpen, onClose, program }: ProgramModalProps) => {
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
              className="bg-card rounded-2xl shadow-strong max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header Image */}
              <div className="relative h-64">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${program.color} opacity-40`} />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-medium`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-foreground">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground">{program.age}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {program.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <p className="text-foreground">{detail}</p>
                    </motion.div>
                  ))}
                </div>
                
                <Button
                  onClick={() => {
                    onClose();
                    window.location.href = "#join-program";
                  }}
                  size="lg"
                  className="w-full gradient-primary shadow-medium hover:shadow-strong"
                >
                  Join This Program
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
