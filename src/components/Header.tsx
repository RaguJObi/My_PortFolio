import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', href: '#hero', section: 'hero' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Services', href: '#what-i-offer', section: 'what-i-offer' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Contact', href: '/contact', section: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-green-900/80 backdrop-blur-md py-3 shadow-lg border-b border-green-400/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-extrabold tracking-widest text-green-500 dark:text-green-400 flex items-center neon-text drop-shadow-lg"
          style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif', letterSpacing: '0.1em' }}
        >
          Ragu
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 bg-black/30 px-6 py-2 rounded-full shadow-lg border border-pink-400/30">
          {navigationLinks.map((link) => (
            link.section === 'contact' ? (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-all duration-300 px-4 py-1 rounded-full font-medium text-base ${
                  (activeSection === link.section || (link.section === 'contact' && location.pathname === '/contact'))
                    ? 'bg-gradient-to-r from-green-500 to-green-300 text-white shadow-lg scale-105'
                    : 'text-gray-200 hover:bg-green-500/30 hover:text-green-200'
                }`}
                style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif' }}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 px-4 py-1 rounded-full font-medium text-base ${
                  activeSection === link.section
                    ? 'bg-gradient-to-r from-green-500 to-green-300 text-white shadow-lg scale-105'
                    : 'text-gray-200 hover:bg-green-500/30 hover:text-green-200'
                }`}
                style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif', cursor: 'pointer' }}
                onClick={e => {
                  e.preventDefault();
                  const section = document.querySelector(link.href);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            )
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-green-400 hover:bg-green-500/20 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-green-900 shadow-2xl py-6 px-6 border-t border-green-400/30 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              link.section === 'contact' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-all duration-300 px-4 py-2 rounded-full font-semibold text-lg ${
                    (activeSection === link.section || (link.section === 'contact' && location.pathname === '/contact'))
                      ? 'bg-gradient-to-r from-green-500 to-green-300 text-white shadow-lg scale-105'
                      : 'text-gray-200 hover:bg-green-500/30 hover:text-green-200'
                  }`}
                  style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif' }}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const section = document.querySelector(link.href);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`transition-all duration-300 px-4 py-2 rounded-full font-semibold text-lg ${
                    activeSection === link.section
                      ? 'bg-gradient-to-r from-green-500 to-green-300 text-white shadow-lg scale-105'
                      : 'text-gray-200 hover:bg-green-500/30 hover:text-green-200'
                  }`}
                  style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif', cursor: 'pointer' }}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;