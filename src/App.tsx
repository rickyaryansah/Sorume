/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Commitment from './components/Commitment';
import Insights from './components/Insights';
import Products from './components/Products';
import Export from './components/Export';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative font-sans text-ocean selection:bg-gold selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Commitment />
        <Insights />
        <Products />
        <Export />
        <WhyUs />
      </main>
      
      <Contact />

      {/* Modern Cursor/Circle decoration (static for performance) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[20%] -left-20 w-96 h-96 bg-emerald/5 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] -right-20 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}

