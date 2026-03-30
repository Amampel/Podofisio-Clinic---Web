"use client";
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and hide floating actions when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Tarifas', href: '/tarifas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      {/* --- NORMAL NAVBAR --- */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled || pathname !== '/' ? "glass-nav py-4" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/assets/images/podofisio_logo.png" alt="Podofisio Clinic Logo" className="h-8 md:h-10 w-auto scale-[0.8] md:scale-[1] origin-left" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={`desktop-${link.name}`}
                href={link.href}
                className={cn(
                  "font-headline font-bold tracking-tight text-xs uppercase transition-colors",
                  pathname === link.href ? "text-white" : "text-neutral-400 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contacto" className="bg-primary text-background px-6 py-2 rounded-md font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all active:scale-95">
              Agenda tu cita
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 h-[100dvh] w-full bg-surface-lowest z-[999] p-8 flex flex-col overflow-hidden"
          >
            {/* Top Bar Inside Menu */}
            <div className="flex justify-between items-center w-full shrink-0">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/assets/images/podofisio_logo.png" alt="Podofisio Clinic Logo" className="h-8 md:h-10 w-auto scale-[0.8] md:scale-[1] origin-left" />
              </Link>

              <button
                className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            {/* Links Centered */}
            <div className="flex flex-col justify-between flex-grow pb-4 px-2 mt-12">
              <div className="flex flex-col justify-between h-full gap-4">
                {navLinks.map((link) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    key={`mobile-${link.name}`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "font-headline font-black tracking-tighter text-3xl uppercase transition-colors",
                        pathname === link.href ? "text-white" : "text-neutral-500"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 shrink-0"
              >
                <Link
                  href="/contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-primary text-background py-5 rounded-md font-headline font-bold text-sm uppercase tracking-widest text-center shadow-lg active:scale-95 transition-transform"
                >
                  Agenda tu cita
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
