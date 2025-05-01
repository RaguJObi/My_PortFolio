import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Process from './sections/Process';
import ThemeProvider from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import ParticleBackground from './components/ParticleBackground';
import PageTransition from './components/PageTransition';
import { Code, Cpu, Database, Layout } from 'lucide-react';
import WhyWorkWithMe from './sections/WhyWorkWithMe';
import WhatIOffer from './sections/WhatIOffer';
import About from './sections/About';

// import Skills from './sections/Skills';

const techBadges = [
  { icon: <Code className="w-6 h-6" />, text: "Web Dev" },
  { icon: <Cpu className="w-6 h-6" />, text: "Mobile" },
  { icon: <Database className="w-6 h-6" />, text: "Backend" },
  { icon: <Layout className="w-6 h-6" />, text: "UI/UX" },
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-cyber-grid bg-black flex items-center justify-center z-50 overflow-hidden"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-8xl font-display font-bold text-neon-green animate-glow text-center"
              >
                Ragu
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center gap-4 mt-8"
              >
                {techBadges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-neon-green/30 rounded-full px-4 py-2 text-neon-green"
                  >
                    {badge.icon}
                    <span className="text-sm font-medium">{badge.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen relative bg-cyber-grid bg-fixed"
          >
            <div className="fixed inset-0 z-0">
              <ParticleBackground />
            </div>
            <div className="relative z-10">
              <Header activeSection={activeSection} />
              <main>
                <PageTransition>
                  <Hero />
                  <WhyWorkWithMe />
                  <Projects />
                  <Process />
                  <WhatIOffer />
                  <About />
                  {/* Contact form removed from main page */}
                </PageTransition>
              </main>
              <div className="fixed bottom-8 right-8 z-50">
                <ThemeToggle />
              </div>
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;