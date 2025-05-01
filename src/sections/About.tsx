import SectionHeader from '../components/SectionHeader';
import { FaBehance, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const About = () => (
  <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      {/* Profile Image */}
      <div className="flex-shrink-0 w-96 h-96 rounded-3xl overflow-hidden" style={{background: 'linear-gradient(135deg, #baff3c 0%, #fff 100%)'}}>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Right Side: Content */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/70 border border-gray-200 text-sm font-semibold text-gray-900 mb-4 shadow-sm">
          <span className="w-3 h-3 rounded-full bg-lime-500 mr-2"></span>
          ABOUT ME
        </span>
        <h2 className="text-6xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif'}}>Discover My Design Journey</h2>
        <p className="mb-8 text-xl text-gray-700 max-w-xl" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
          Hello! I'm Wilson Brock, a passionate Web Designer with over a 5+ years of experience in creating visually appealing and user-friendly websites. My mission is to bring your brand to life through innovative design solutions tailored to your unique needs.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-5 text-3xl hover:bg-lime-400 hover:text-black transition-colors" aria-label="Behance"><FaBehance /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-5 text-3xl hover:bg-lime-400 hover:text-black transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-5 text-3xl hover:bg-lime-400 hover:text-black transition-colors" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-full p-5 text-3xl hover:bg-lime-400 hover:text-black transition-colors" aria-label="GitHub"><FaGithub /></a>
        </div>
      </div>
    </div>
  </section>
);

export default About;