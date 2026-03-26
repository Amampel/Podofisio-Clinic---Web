import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Tarifas', href: '/tarifas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled || location.pathname !== '/' ? "glass-nav py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="text-xl font-black tracking-tighter text-white font-headline uppercase">
          PODOFISIO CLINIC
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={`desktop-${link.name}`}
              to={link.href}
              className={cn(
                "font-headline font-bold tracking-tight text-xs uppercase transition-colors",
                location.pathname === link.href ? "text-white" : "text-neutral-400 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" className="bg-primary text-background px-6 py-2 rounded-md font-headline font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all active:scale-95">
            Agenda tu cita
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-surface-lowest border-b border-white/5 p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link 
              key={`mobile-${link.name}`}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "font-headline font-bold tracking-tight text-lg transition-colors",
                location.pathname === link.href ? "text-white" : "text-neutral-400 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-background px-6 py-4 rounded-md font-headline font-bold text-sm uppercase tracking-widest text-center"
          >
            Agenda tu cita
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
