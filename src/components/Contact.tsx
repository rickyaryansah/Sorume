import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-gray-100 pt-32 pb-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 mb-24 pb-24 border-b border-gray-100">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-ocean rounded-sm flex items-center justify-center text-white font-serif text-3xl italic shadow-xl">S</div>
                <div className="leading-none">
                  <h1 className="text-ocean font-black text-2xl tracking-tight uppercase">PT Sorume</h1>
                  <p className="text-gold text-base font-bold tracking-[0.4em] uppercase">Sukses Abadi Indonesia</p>
                </div>
              </div>
              <p className="text-slate-500 max-w-sm font-light leading-relaxed">
                Sustainable, Ethical, and Premium Marine Products sourced from the pristine waters of Sulawesi.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-100 flex items-center justify-center text-gold flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-base font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Connect</h4>
                  <p className="text-ocean text-base font-medium">(+62) 82234567791</p>
                </div>
              </div>
              
               <div className="flex items-start gap-4 mt-6">
                <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                   <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Official QR Code</p>
                   <div className="w-32 h-32 bg-white flex items-center justify-center border border-gray-100 p-2">
                     <img 
                       src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/6282234567791" 
                       alt="WhatsApp QR Code"
                       className="w-full h-full object-contain"
                       referrerPolicy="no-referrer"
                     />
                   </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-gray-100 flex items-center justify-center text-gold flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-base font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Inquiry Export</h4>
                  <p className="text-ocean text-base font-bold border-b border-gold/40">cessar_md@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#fdfbf7] p-10 sm:p-14 border border-gray-100 shadow-[20px_20px_0px_#002B5B]">
            <h3 className="text-5xl italic text-ocean mb-10">Direct <span className="text-gold not-italic font-sans font-black uppercase text-4xl">Inquiry</span></h3>
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-base font-black uppercase tracking-[0.2em] text-ocean opacity-50 ml-1">Full Identity</label>
                  <input 
                    type="text" 
                    placeholder="Representative Name"
                    className="w-full bg-white border border-gray-200 px-5 py-4 text-ocean text-base placeholder-slate-300 focus:outline-none focus:border-gold transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-base font-black uppercase tracking-[0.2em] text-ocean opacity-50 ml-1">Organization</label>
                  <input 
                    type="text" 
                    placeholder="Global Distribution Ltd"
                    className="w-full bg-white border border-gray-200 px-5 py-4 text-ocean text-base placeholder-slate-300 focus:outline-none focus:border-gold transition-all"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-base font-black uppercase tracking-[0.2em] text-ocean opacity-50 ml-1">Strategic Message</label>
                <textarea 
                  rows={4}
                  placeholder="Summarize your requirements..."
                  className="w-full bg-white border border-gray-200 px-5 py-4 text-ocean text-base placeholder-slate-300 focus:outline-none focus:border-gold transition-all resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="w-full py-6 bg-ocean text-white text-lg font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-ocean/90 transition-all flex items-center justify-center gap-2"
              >
                Send Strategic Inquiry <Send size={18} />
              </motion.button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-base font-bold uppercase tracking-[0.3em]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-ocean">Trusted Global Supplier</span>
            </div>
            <div className="w-px h-10 bg-gray-100 hidden md:block" />
            <p className="text-slate-300 italic font-serif normal-case tracking-tight text-lg">© {currentYear} PT Sorume Sukses Abadi Indonesia</p>
          </div>
          
          <div className="flex gap-10 text-slate-400">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Standards</a>
            <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
