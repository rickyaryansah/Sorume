import { motion } from 'motion/react';
import { Globe2, Fish, HeartPulse, Compass } from 'lucide-react';

export default function Insights() {
  const sections = [
    {
      title: "Global Significance",
      subtitle: "International Prestige",
      icon: <Globe2 size={40} className="text-gold" />,
      items: [
        { label: "Market Demand", detail: "High demand in Hong Kong, China, & Singapore." },
        { label: "Luxury Status", detail: "Considered a culinary treasure in Asian culture." },
        { label: "Nutritional Power", detail: "Rich in collagen, proteins, and minerals." }
      ]
    },
    {
      title: "Indonesia's Biodiversity",
      subtitle: "Global Production Leader",
      icon: <Fish size={40} className="text-emerald" />,
      items: [
        { label: "World Player", detail: "One of the largest global producers (top 3)." },
        { label: "High Variety", detail: "Over 50 commercial species found in local waters." },
        { label: "Export Commodity", detail: "A vital driver for the national marine economy." }
      ]
    },
    {
      title: "Sulawesi Context",
      subtitle: "The Heart of Harvesting",
      icon: <Compass size={40} className="text-ocean" />,
      items: [
        { label: "Pristine Region", detail: "Kendari waters offer ideal sea cucumber habitat." },
        { label: "Fishermen Legacy", detail: "Generations of artisanal harvesting skills." },
        { label: "Local Impact", detail: "Supports sustainable livelihoods for thousands." }
      ]
    }
  ];

  return (
    <section id="insights" className="py-24 bg-white bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-emerald font-semibold uppercase tracking-widest text-base">Educational Excellence</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-ocean">
              Sea Cucumber <span className="italic font-normal text-emerald">Insights</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 font-light leading-relaxed">
            Discover why the sea cucumber is more than just a product—it's a symbol of health, prestige, and marine biodiversity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-12 bg-[#fdfbf7] border border-gray-100 rounded-sm hover:-translate-y-2 transition-all duration-500 group shadow-[10px_10px_0px_#C5A059] hover:shadow-[15px_15px_0px_#C5A059]"
            >
              <div className={`w-12 h-12 rounded-full mb-10 flex items-center justify-center text-white text-sm font-bold ${idx % 2 === 0 ? 'bg-gold' : 'bg-emerald'}`}>
                0{idx + 1}
              </div>
              
              <div className="mb-10">
                <span className="text-emerald text-base uppercase tracking-[0.3em] font-black">{section.subtitle}</span>
                <h3 className="text-4xl text-ocean italic mt-2">{section.title}</h3>
              </div>

              <div className="space-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1 group/item">
                    <span className="text-base font-black text-ocean uppercase tracking-tighter opacity-100 group-hover/item:text-gold transition-colors">{item.label}</span>
                    <span className="text-base text-slate-500 leading-normal font-light">{item.detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
