import React from 'react';

const ContactPage = () => (
  <section className="min-h-screen bg-black flex flex-col items-center justify-center py-24 px-4">
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
      <div className="flex-1 flex flex-col justify-center">
        <span className="inline-flex items-center px-4 py-1 rounded-full bg-zinc-900 border border-gray-700 text-sm font-semibold text-white mb-6 shadow-sm">
          <span className="w-3 h-3 rounded-full bg-lime-500 mr-2"></span>
          BOOK A CALL
        </span>
        <h1 className="text-[7vw] md:text-[8rem] font-bold text-white leading-none mb-8" style={{fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif'}}>CONTACT</h1>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8" style={{fontFamily: 'Space Grotesk, Inter, sans-serif'}}>I'd love to hear<br />from you!</h2>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <form className="space-y-8 w-full">
          <input type="text" placeholder="Name *" className="w-full bg-zinc-900 text-white p-4 rounded-lg text-lg outline-none border-none placeholder-gray-400" required />
          <input type="email" placeholder="Email Address *" className="w-full bg-zinc-900 text-white p-4 rounded-lg text-lg outline-none border-none placeholder-gray-400" required />
          <input type="text" placeholder="Your Budget" className="w-full bg-zinc-900 text-white p-4 rounded-lg text-lg outline-none border-none placeholder-gray-400" />
          <textarea placeholder="Message" className="w-full bg-zinc-900 text-white p-4 rounded-lg text-lg outline-none border-none placeholder-gray-400" rows={6}></textarea>
          <button type="submit" className="w-full bg-lime-400 text-black font-bold py-4 rounded-lg text-lg hover:bg-lime-500 transition-colors">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactPage;
