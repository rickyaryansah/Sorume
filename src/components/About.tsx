import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Globe, MapPin } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Leaf className="text-emerald" />, title: 'Sustainability', text: 'Preserving marine life for generations to come through responsible harvesting.' },
    { icon: <ShieldCheck className="text-emerald" />, title: 'Ethical Sourcing', text: 'Fair trade practices that support local fishermen and their families.' },
    { icon: <Globe className="text-emerald" />, title: 'Climate Awareness', text: 'Active participation in marine conservation to combat climate change impact.' }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1000"
                alt="About PT Sorume Sukses Abadi Indonesia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold rounded-[2rem] -z-0 opacity-20" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-4 bg-ocean p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="text-gold font-serif text-5xl font-bold">10+</div>
              <div className="text-white/80 text-base uppercase tracking-widest font-medium">Years of Marine<br />Heritage</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-emerald font-bold tracking-[0.3em] uppercase text-base">Premium Sourcing</span>
              <h2 className="text-5xl md:text-6xl text-ocean leading-[1.1]">
                Heritage of <br /> <span className="italic font-normal">Authenticity</span>
              </h2>
              <div className="w-12 h-1 bg-gold rounded-full" />
            </div>

            <p className="text-lg text-slate-500 leading-relaxed font-light">
              PT Sorume Sukses Abadi Indonesia is a leading provider of high-quality seafood products, specializing in sustainably and ethically sourced dried sea cucumber from the pristine waters of Sulawesi.
            </p>

            <div className="grid sm:grid-cols-2 gap-10 border-t border-gray-100 pt-10">
              <div>
                <h3 className="text-emerald text-base font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald" />
                  Our Roots
                </h3>
                <p className="text-base text-slate-500 leading-relaxed font-light">Based in Kendari, we empower local Sulawesi fishing communities through ethical sourcing and climate-responsible practices.</p>
              </div>
              <div>
                <h3 className="text-gold text-base font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  Global Standards
                </h3>
                <p className="text-base text-slate-500 leading-relaxed font-light">Trusted global supplier for premium markets in China, Hong Kong, Singapore, South Korea, and Japan.</p>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-10 py-5 bg-ocean text-white text-lg font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-ocean/90 transition-all">
                The Full Profile
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
