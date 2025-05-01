import { useEffect, useState } from 'react';
import { ArrowDownCircle, Code, ExternalLink, Github } from 'lucide-react';
import Button from '../components/Button';
import { useTheme } from '../contexts/ThemeContext';
import Spline from '@splinetool/react-spline';

const roles = [
  'Business Analyst',
  'Mobile App Developer',
  'Full Stack Engineer',
  'UI/UX Designer'
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const { theme } = useTheme();

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        
        if (displayText.length === currentRole.length) {
          // Wait 1.5s before starting to delete
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          // Normal typing speed
          setTypingSpeed(100);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
          // Quick pause before starting the next word
          setTypingSpeed(500);
        } else {
          // Delete a bit faster than typing
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentRoleIndex, displayText, isDeleting, typingSpeed]);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden py-20 lg:py-0"
      style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, ${theme === 'dark' ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.08)'} 0%, transparent 25%),
                         radial-gradient(circle at 80% 30%, ${theme === 'dark' ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'} 0%, transparent 25%)`
      }}
    >
      {/* Spline Spiderman 3D as interactive background */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <Spline 
          scene="https://prod.spline.design/uZzAGGisfZtajQnJ/scene.splinecode"
          style={{ width: '100vw', height: '100vh', minHeight: 600 }}
          className="select-none"
        />
      </div>

      {/* Foreground content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg animate-float-medium" style={{ color: '#FF2C55', fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif', textShadow: '0 0 40px #FF2C55, 0 0 80px #FF2C55' }}>
          Hi, I'm Ragu
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-8" style={{ color: '#00FFF7', fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif', textShadow: '0 0 30px #00FFF7, 0 0 60px #00FFF7' }}>
          <span>{displayText}&nbsp;</span>
          <span className="blinking-cursor">|</span>
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-lg px-6 py-4 rounded-xl glass-card" style={{ color: '#E0E0E0', background: 'rgba(30, 0, 40, 0.7)', border: '1px solid #FF2C55', boxShadow: '0 0 20px #FF2C55' }}>
          Creating futuristic digital experiences with code, creativity, and a passion for technology.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="#projects" className="neon-box" style={{ background: '#FF2C55', color: '#fff', boxShadow: '0 0 10px #FF2C55, 0 0 30px #FF2C55' }}>See My Work</Button>
          <Button href="/contact" className="neon-box" style={{ background: '#39FF14', color: '#222', boxShadow: '0 0 10px #39FF14, 0 0 30px #39FF14' }}>Contact Me</Button>
        </div>
      </div>
      {/* Optionally, add controls for 3D rotation/movement */}
      <div style={{position:'fixed',right:18,bottom:18,zIndex:20,pointerEvents:'none'}}>
        <div style={{background:'rgba(30,0,40,0.85)',border:'2px solid #39FF14',boxShadow:'0 0 16px #39FF14',borderRadius:'2rem',padding:'0.5rem 1.5rem',display:'flex',alignItems:'center',gap:'0.5rem',fontFamily:'Orbitron, Space Grotesk, Inter, sans-serif',color:'#39FF14',fontWeight:700,fontSize:'1.1rem',letterSpacing:'0.04em',pointerEvents:'auto'}}>
          <span style={{display:'inline-block',width:12,height:12,borderRadius:'50%',background:'#39FF14',marginRight:8,boxShadow:'0 0 8px #39FF14'}}></span>
          Neon Mode
        </div>
      </div>
    </section>
  );
};

export default Hero;