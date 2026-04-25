import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, Building2, MousePointer2 } from 'lucide-react';

export default function Export() {
  const regions = [
    { name: "China & Hong Kong", market: "Primary Consumer", dot: { top: "30%", left: "78%" } },
    { name: "Singapore", market: "Strategic Hub", dot: { top: "54%", left: "70%" } },
    { name: "Malaysia", market: "Emerging Luxury", dot: { top: "51%", left: "69%" } },
    { name: "South Korea", market: "Quality Critical", dot: { top: "28%", left: "80%" } },
    { name: "Japan", market: "Health & Tradition", dot: { top: "30%", left: "84%" } },
    { name: "Vietnam", market: "Key Transit", dot: { top: "45%", left: "74%" } },
    { name: "Taiwan", market: "Exclusive Demand", dot: { top: "38%", left: "79%" } },
  ];

  return (
    <section id="export" className="py-24 bg-ocean text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold font-bold uppercase tracking-[0.3em] text-base">Global Reach</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl">Trusted Global <br /> <span className="italic text-gold">Supplier</span></h2>
            </div>
            
            <p className="text-white/50 text-xl font-light leading-relaxed">
              Based in Kendari, Sulawesi, PT Sorume Sukses Abadi Indonesia has established itself as a cornerstone of the international sea cucumber trade.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pb-10 border-b border-white/10">
              {regions.map((region, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#D4AF37]" />
                  <div className="flex flex-col">
                    <span className="text-white text-base font-bold uppercase tracking-widest group-hover:text-gold transition-colors">{region.name}</span>
                    <span className="text-base uppercase tracking-widest text-white/30">{region.market}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 flex items-center gap-16">
              <div>
                <div className="text-5xl font-serif text-gold italic">15+</div>
                <div className="text-base text-white/30 uppercase font-black tracking-widest mt-2">Global Ports</div>
              </div>
              <div>
                <div className="text-5xl font-serif text-gold italic">100%</div>
                <div className="text-base text-white/30 uppercase font-black tracking-widest mt-2">Traceability</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* World Map Container */}
            <div className="relative aspect-[16/10] bg-white/[0.02] rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_75%)]" />
              
              {/* Refined World Map SVG */}
              <svg viewBox="0 0 1000 500" className="w-full h-auto opacity-25 fill-white/50 transition-opacity group-hover:opacity-35">
                {/* World Map Paths - Refined Simplified Version */}
                <path d="M120,80 L200,80 L240,150 L180,220 L100,200 L80,140 Z" /> {/* North America */}
                <path d="M180,230 L250,260 L240,380 L180,450 L130,350 Z" /> {/* South America */}
                <path d="M480,180 L580,180 L620,320 L550,450 L450,420 L420,300 Z" /> {/* Africa */}
                <path d="M450,50 L580,50 L560,160 L440,160 Z" /> {/* Europe */}
                <path d="M600,40 L900,40 L960,180 L850,320 L650,280 L600,120 Z" /> {/* Asia */}
                <path d="M820,360 L940,360 L920,460 L800,450 Z" /> {/* Australia */}
                
                {/* Indonesia Islands Highlight */}
                <g fill="#D4AF37" fillOpacity="0.6">
                  <circle cx="680" cy="270" r="4" /> {/* Sumatra */}
                  <circle cx="710" cy="285" r="3" /> {/* Java */}
                  <circle cx="725" cy="260" r="5" /> {/* Borneo */}
                  <circle cx="760" cy="270" r="5" className="animate-pulse" /> {/* Sulawesi */}
                  <circle cx="810" cy="280" r="4" /> {/* Papua */}
                </g>
              </svg>

              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', 
                          backgroundSize: '40px 40px' }} />

              {/* Connecting Lines (Export Routes) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#008080" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Sulawesi (760, 270) to Destinations */}
                {/* China/HK */}
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  d="M760,270 Q800,180 780,120" 
                  stroke="url(#routeGrad)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="5,5"
                />
                
                {/* Japan */}
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                  d="M760,270 Q900,200 860,110" 
                  stroke="url(#routeGrad)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="5,5"
                />

                {/* Singapore */}
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                  d="M760,270 Q710,275 690,265" 
                  stroke="url(#routeGrad)" 
                  strokeWidth="2" 
                  fill="none" 
                  strokeDasharray="5,5"
                />

                {/* Vietnam */}
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                  d="M760,270 Q730,220 750,190" 
                  stroke="url(#routeGrad)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeDasharray="3,3"
                />

                {/* Taiwan */}
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.4 }}
                  d="M760,270 Q800,220 805,185" 
                  stroke="url(#routeGrad)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeDasharray="3,3"
                />
              </svg>

              {/* Destination Markers */}
              {regions.map((region, i) => (
                <div 
                  key={i}
                  className="absolute" 
                  style={{ top: region.dot.top, left: region.dot.left }}
                >
                  <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_15px_#D4AF37]" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gold rounded-full animate-ping opacity-40" />
                </div>
              ))}

              {/* Origin Marker (Sulawesi) */}
              <div className="absolute" style={{ top: "54%", left: "75.7%" }}>
                <div className="relative group cursor-pointer">
                  <div className="w-4 h-4 bg-emerald rounded-full shadow-[0_0_20px_#008080] border-2 border-white/20 animate-pulse" />
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-emerald/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-sm uppercase tracking-widest whitespace-nowrap opacity-100 shadow-xl">
                    Kendari, Sulawesi
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
