import { motion } from 'motion/react';
import { Anchor, Menu, X, Waves } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Commitment', href: '#commitment' },
  { name: 'Insights', href: '#insights' },
  { name: 'Products', href: '#products' },
  { name: 'Export', href: '#export' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section detection
      const scrollPos = window.scrollY + window.innerHeight * 0.3;
      const sections = navLinks.map(link => {
        const el = document.querySelector(link.href);
        if (!el) return null;
        return { 
          id: link.href.substring(1), 
          offset: (el as HTMLElement).offsetTop,
          height: (el as HTMLElement).offsetHeight
        };
      }).filter(Boolean) as { id: string, offset: number, height: number }[];

      const current = sections.find(section => 
        scrollPos >= section.offset && scrollPos < section.offset + section.height
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-gray-100 py-3 shadow-sm' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-ocean rounded-sm flex items-center justify-center text-white font-serif text-2xl italic shadow-2xl transition-transform group-hover:scale-105">
                S
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold rounded-full border-2 border-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-sans font-black text-xl leading-none tracking-tighter uppercase transition-colors ${scrolled ? 'text-ocean' : 'text-ocean sm:text-white'}`}>
                PT Sorume
              </span>
              <span className="text-sm uppercase tracking-[0.4em] font-black text-gold mt-1">
                Sukses Abadi Indonesia
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm uppercase tracking-[0.3em] font-black transition-all relative group ${
                    isActive 
                      ? 'text-gold' 
                      : scrolled ? 'text-ocean/70 hover:text-ocean' : 'text-ocean sm:text-white/50 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left ${isActive ? 'scale-x-100' : ''}`} />
                  {isActive && (
                    <motion.span 
                      layoutId="nav-glow"
                      className="absolute -inset-x-2 -inset-y-1 bg-gold/5 rounded-sm -z-10"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled || isOpen ? 'text-ocean' : 'text-ocean sm:text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white overflow-hidden border-t border-gray-100"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-5 text-base font-bold uppercase tracking-widest transition-colors border-b border-gray-50 last:border-0 ${
                  isActive ? 'text-gold bg-gray-50' : 'text-ocean hover:text-gold'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
}
