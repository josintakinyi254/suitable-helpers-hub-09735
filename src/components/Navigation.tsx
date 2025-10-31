import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { TopHeader } from "./TopHeader";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "About", href: "/#about", isHash: true },
    { label: "Programs", href: "/#programs", isHash: true },
    { label: "Events", href: "/#events", isHash: true },
    { label: "Shop", href: "/shop", isHash: false },
    { label: "News", href: "/news", isHash: false },
    { label: "Gallery", href: "/gallery", isHash: false },
    { label: "Contact", href: "/#contact", isHash: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      
      // If we're not on the home page, navigate there first
      if (window.location.pathname !== '/') {
        window.location.href = href;
      } else {
        // We're on home page, smooth scroll to section
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <>
      <TopHeader scrolled={scrolled} />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 bg-background/95 backdrop-blur-lg shadow-soft transition-all duration-300 ${
          scrolled ? 'top-0' : 'top-10'
        }`}
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow">
              <span className="text-white font-bold text-lg sm:text-xl font-display">SH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-base sm:text-lg text-foreground">
                Suitable Helpers
              </h1>
              <p className="text-xs text-muted-foreground">Empowering Women</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.isHash)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <Button 
              size="sm" 
              onClick={() => window.location.href = "/donate"}
              className="gradient-primary shadow-soft hover:shadow-medium"
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => handleNavClick(e, item.href, item.isHash)}
                    className="block px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-colors font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="px-4 pt-2"
                >
                  <Button 
                    className="w-full gradient-primary shadow-soft"
                    onClick={() => window.location.href = "/donate"}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Donate
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
    </>
  );
};
