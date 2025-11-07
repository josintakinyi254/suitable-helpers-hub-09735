import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoaderProps {
  text?: string;
  size?: "sm" | "md" | "lg";
}

export const Loader = ({ text = "Loading...", size = "md" }: LoaderProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center gap-3"
    >
      <Loader2 className={`${sizeClasses[size]} text-primary animate-spin`} />
      {text && (
        <p className="text-sm text-muted-foreground font-medium">{text}</p>
      )}
    </motion.div>
  );
};
