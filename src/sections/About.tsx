import SectionHeader from '../components/SectionHeader';
import { FaBehance, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import profileImg from '../WhatsApp Image 2025-04-29 at 13.44.22_cac4aae8.jpg';
import { useState, useEffect } from 'react';

const About = () => {
  const [blur, setBlur] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setBlur(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  const handleMouseEnter = () => setBlur(false);
  const handleMouseLeave = () => setBlur(true);
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16 flex-wrap md:flex-nowrap overflow-x-hidden">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm md:w-[340px] md:h-[520px] h-[420px] rounded-3xl overflow-hidden shadow-2xl animate-slide-in-left" style={{background: 'linear-gradient(135deg, #baff3c 0%, #fff 100%)'}}>
          <img
            src={profileImg}
            alt="Profile"
            className={`w-full h-full object-cover object-center filter transition-all duration-700 ${blur ? 'blur-sm' : 'blur-none'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{cursor: blur ? 'pointer' : 'default'}}
          />
        </div>
        {/* Right Side: Content */}
        <div className="flex-1 flex flex-col items-start justify-center animate-slide-in-right">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/70 border border-gray-200 text-sm font-semibold text-gray-900 mb-4 shadow-sm">
            <span className="w-3 h-3 rounded-full bg-lime-500 mr-2"></span>
            ABOUT ME
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif'}}>Discover My Design Journey</h2>
          <p className="mb-8 text-xl text-gray-700 max-w-xl" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
          Hi! I’m Ragu — a fullstack developer, part-time bug whisperer, and full-time human who turns coffee into code.<br/><br/>
I help people (yes, even non-techies!) bring their ideas to life online — whether it's a slick website, a smart mobile app, or some mysterious backend magic that makes everything just work. If you've got a vision, I’ve got the pixels and logic to make it happen.<br/>
Whether you're a startup founder, small business owner, or someone with a brilliant idea scribbled on a napkin — let's build something awesome together. And yes, I promise to keep the jargon to a minimum. Unless you're into that.
          </p>
          <div className="flex gap-6 mt-2 animate-fade-in-up">
            <a href="https://www.linkedin.com/in/ragunandhan-dhanasekaran-136b8b261/" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-5 text-3xl hover:bg-lime-400 hover:text-black transition-colors duration-300 shadow-lg" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-5 text-3xl hover:bg-lime-400 hover:text-black transition-colors duration-300 shadow-lg" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-5 text-3xl hover:bg-lime-400 hover:text-black transition-colors duration-300 shadow-lg" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.4,0,0.2,1) 0.1s both;
        }
        .animate-slide-in-right {
          animation: slideInRight 1s cubic-bezier(0.4,0,0.2,1) 0.3s both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.1s cubic-bezier(0.4,0,0.2,1) 0.5s both;
        }
      `}</style>
    </section>
  );
};

export default About;