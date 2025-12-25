import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAVBAR_HEIGHT = 80;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔒 LOCK BODY SCROLL
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Terms", href: "#terms" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        style={{ height: NAVBAR_HEIGHT }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex items-center transition-all border-b",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-border/40"
            : "bg-white border-border/40"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between w-full">
          <Link href="/">
            <img
              src="/assets/logo-1.png"
              alt="PK Jewellers Logo"
              className="h-14 w-auto" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex ml-auto gap-8">
            {navLinks.map((l) => (
              <button
                key={l.name}
                onClick={() => scrollToSection(l.href)}
                className="uppercase tracking-widest text-sm hover:text-primary"
              >
                {l.name}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* DARK OVERLAY (blocks background) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[90] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* MOBILE MENU */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ top: NAVBAR_HEIGHT }}
              className="fixed left-0 right-0 bottom-0 bg-white z-[100] md:hidden pointer-events-auto"
            >
              <div className="flex flex-col items-center pt-10 gap-6">
                {navLinks.map((l) => (
                  <button
                    key={l.name}
                    onClick={() => scrollToSection(l.href)}
                    className="text-xl font-serif hover:text-primary"
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
