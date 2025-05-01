import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="py-24 bg-black flex flex-col items-center justify-center">
    <div className="w-full max-w-5xl rounded-3xl bg-zinc-900 p-12 flex flex-col items-center">
      <span className="inline-flex items-center px-4 py-1 rounded-full bg-black border border-gray-700 text-sm font-semibold text-white mb-6 shadow-sm">
        <span className="w-3 h-3 rounded-full bg-lime-500 mr-2"></span>
        HAVE PROJECT IN MIND?
      </span>
      <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-10" style={{fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif'}}>
        Let's Turn your Ideas<br />into Reality
      </h2>
      <a href="mailto:hello@wilsonbrock.com" className="text-2xl md:text-3xl font-semibold text-white border-b-2 border-white hover:text-lime-400 hover:border-lime-400 transition-colors flex items-center gap-2 mb-6">
        <span className="text-2xl">↳</span> ragunandhan48@gmail.com
      </a>
    </div>
    <nav className="mt-10 flex gap-8 text-white text-base">
      <a href="#hero" className="hover:text-lime-400 transition-colors">Home</a>
      <a href="#about" className="hover:text-lime-400 transition-colors">About</a>
      <a href="#projects" className="hover:text-lime-400 transition-colors">Projects</a>
      <a href="#what-i-offer" className="hover:text-lime-400 transition-colors">Services</a>
      <Link to="/contact" className="hover:text-lime-400 transition-colors">Contact</Link>
    </nav>
  </footer>
);

export default Footer;