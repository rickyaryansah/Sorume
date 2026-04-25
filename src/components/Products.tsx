import { motion } from 'motion/react';
import { BadgeCheck, Info, Package } from 'lucide-react';

const products = [
  {
    name: "Teatfish Sea Cucumber",
    latin: "Holothuria nobilis",
    image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?auto=format&fit=crop&q=80&w=1000",
    description: "Highly sought after for its substantial size and firm meat quality. Our Teatfish is meticulously processed to preserve its natural form and density.",
    grade: "Premium Export A"
  },
  {
    name: "Sandfish Sea Cucumber",
    latin: "Holothuria scabra",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1000",
    description: "The most prestigious and highly valued species, known for its thick meat and exceptional nutritional profile.",
    grade: "Premium Export A+"
  },
  {
    name: "Golden Sea Cucumber",
    latin: "Stichopus horrens",
    image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&q=80&w=1000",
    description: "Prized for its medicinal benefits and radiant golden hue when processed to our strict standards.",
    grade: "Exclusive Select"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="text-emerald font-semibold uppercase tracking-widest text-base">The Collection</span>
          <h2 className="text-5xl md:text-6xl text-ocean">Sea <span className="italic font-normal text-gold">Cucumber</span></h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-light text-lg">
            Our processing combines traditional methods with modern quality control, 
            ensuring each piece meets the standard of the global elite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[4/5] bg-slate-50 overflow-hidden border border-gray-100 mb-10 shadow-sm transition-all group-hover:shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-0 right-0 p-5">
                  <div className="bg-emerald text-white px-3 py-1 text-base font-bold uppercase tracking-widest shadow-xl">
                    Traceable origin
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 p-6 bg-white/95 backdrop-blur-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-gray-100 shadow-2xl">
                  <p className="text-base font-black text-gold uppercase tracking-[0.2em] mb-2">Technical Insight</p>
                  <p className="text-base text-slate-500 font-light leading-relaxed">{product.description}</p>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-3xl text-ocean italic">{product.name}</h3>
                    <p className="text-emerald text-base font-black uppercase tracking-widest mt-1">{product.latin}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-base font-black text-slate-300 uppercase tracking-widest mb-1">Standard</p>
                    <p className="text-base font-bold text-ocean uppercase">{product.grade}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-10 bg-gray-50 rounded-2xl border border-gray-100 max-w-3xl">
            <h4 className="text-ocean font-bold mb-4 text-xl">Bespoke Inquiries</h4>
            <p className="text-base text-gray-500 font-light">
              Looking for specific species or bulk export requirements? Our specialists are ready to assist with custom sourcing solutions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-90 select-none pointer-events-none hidden xl:block">
        <span className="text-[10rem] font-serif text-ocean/[0.02] leading-none whitespace-nowrap">PREMIUM SEAFOOD</span>
      </div>
    </section>
  );
}
