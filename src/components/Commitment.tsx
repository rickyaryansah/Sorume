import { motion } from 'motion/react';
import { Waves, Heart, Recycle, Users } from 'lucide-react';

export default function Commitment() {
  const pillars = [
    {
      icon: <Waves size={32} />,
      title: "Ecosystem Protection",
      desc: "Our methods go beyond sustainability; we actively monitor and protect the coral reefs where sea cucumbers thrive."
    },
    {
      icon: <Recycle size={32} />,
      title: "Circular Responsibility",
      desc: "Minimizing waste in our processing facilities through innovative byproduct management and eco-friendly packaging."
    },
    {
      icon: <Users size={32} />,
      title: "Local Livelihoods",
      desc: "Supporting Sulawesi's coastal communities by providing fair wages and education on sustainable fishing practices."
    }
  ];

  return (
    <section id="commitment" className="py-24 bg-ocean text-white relative overflow-hidden">
      {/* Decorative Wave Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 40 50 50 T 100 50 L 100 100 L 0 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-semibold uppercase tracking-widest text-base"
          >
            Our Responsibility
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl"
          >
            A Healthy & <br /> <span className="text-gold italic">Sustainable Source</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/50 font-light text-lg"
          >
            We believe that true luxury is defined by the preservation of nature. 
            Our commitment to the ocean is absolute.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group p-10 bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 rounded-sm"
            >
              <div className="mb-8 text-gold group-hover:translate-x-2 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{pillar.title}</h3>
              <p className="text-white/40 font-light leading-relaxed text-base">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-1 bg-gradient-to-r from-emerald/0 via-gold/30 to-emerald/0 rounded-full"
        />
      </div>
    </section>
  );
}
