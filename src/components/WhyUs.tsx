import { motion } from 'motion/react';
import { ShieldCheck, Award, Zap, Building2 } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="text-emerald" />,
      title: "Ethical Sourcing",
      text: "Direct partnerships with local Sulawesi fishermen ensure fair compensation and sustainable harvesting."
    },
    {
      icon: <Award className="text-emerald" />,
      title: "Premium Quality",
      text: "Strict quality control processes that meet and exceed international export standards."
    },
    {
      icon: <Zap className="text-emerald" />,
      title: "Traceability",
      text: "Every product batch can be traced back to its origin, ensuring transparency for the global market."
    },
    {
      icon: <Building2 className="text-emerald" />,
      title: "B2B Specialist",
      text: "Decades of experience handling large-scale international B2B marine product logistics."
    }
  ];

  return (
    <section className="py-24 bg-white bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-emerald font-bold uppercase tracking-[0.3em] text-base">Our Advantage</span>
            <h2 className="text-5xl md:text-6xl text-ocean leading-[1.1]">Why Choose <br /> <span className="italic">Sorume</span></h2>
            <p className="text-slate-500 font-light leading-relaxed text-lg max-w-md">
              We don't just export products; we export our values. Our reputation as a trusted global supplier is built on integrity.
            </p>
            <div className="pt-4 flex gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="px-10 py-5 bg-ocean text-white text-lg font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-ocean/90 transition-all"
              >
                Download Profile
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="px-10 py-5 border border-gold text-gold text-lg font-bold uppercase tracking-[0.2em] hover:bg-gold/5 transition-all"
              >
                Contact Sales
              </motion.button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white border border-gray-100 rounded-sm hover:shadow-2xl transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#fdfbf7] flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-gold group-hover:text-white transition-all text-gold">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-ocean uppercase tracking-tight mb-3">{reason.title}</h3>
                <p className="text-slate-500 text-base font-light leading-relaxed">
                  {reason.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
