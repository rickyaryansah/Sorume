import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-ocean">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544454054-d39768f5647f?auto=format&fit=crop&q=80&w=2000"
          alt="Pristine Marine Ecosystem"
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/40 via-transparent to-ocean/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-8"
        >

          <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white leading-[1] tracking-tight">
            The Golden Standard of <br />
            <span className="italic font-normal text-gold block mt-2">Marine Luxury</span>
          </h1>
          
          <p className="max-w-xl text-white/70 text-lg sm:text-xl font-light leading-relaxed">
            PT Sorume Sukses Abadi Indonesia provides world-class dried sea cucumber, 
            sourced with deep respect for our oceans and the communities that guard them.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-ocean text-white text-base font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-ocean/90 transition-all text-center"
            >
              Explore Products
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 border border-gold text-gold text-base font-bold uppercase tracking-[0.2em] hover:bg-gold/10 transition-all text-center"
            >
              Our Story
            </motion.a>
          </div>
        </motion.div>

        {/* Floating Detail Card for Hero Right (Desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:block w-80 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-sm shadow-2xl relative"
        >
          <div className="absolute top-0 right-10 w-px h-12 bg-gold/50" />
          <h3 className="text-gold text-sm font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <div className="w-1 h-1 bg-gold rounded-full" />
            Heritage Stats
          </h3>
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-black mb-1">Standard</p>
                <p className="text-white font-serif text-2xl italic tracking-tight leading-none">100% Wild</p>
              </div>
              <ArrowRight size={16} className="text-gold/50" />
            </div>
            <div className="w-full h-px bg-white/10" />
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/40 text-sm uppercase tracking-widest font-black mb-1">Control</p>
                <p className="text-white font-serif text-2xl italic tracking-tight leading-none">Global Reach</p>
              </div>
              <ArrowRight size={16} className="text-gold/50" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
