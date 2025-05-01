import SectionHeader from '../components/SectionHeader';
import { FaCogs, FaUserFriends, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaCogs className="w-10 h-10 text-lime-400" />,
    title: 'Tailored Design',
    description: 'I believe that every brand is unique and deserves a website that is just as distinctive.'
  },
  {
    icon: <FaUserFriends className="w-10 h-10 text-lime-400" />,
    title: 'User-Centric Approach',
    description: 'With a strong focus on user experience, I design websites that are intuitive and easy to navigate.'
  },
  {
    icon: <FaRocket className="w-10 h-10 text-lime-400" />,
    title: 'Trending Technologies',
    description: 'I stay at the forefront of web design trends and technologies to offer you the most innovative solutions.'
  }
];

const WhyWorkWithMe = () => (
  <section id="whyworkwithme" className="py-20 bg-transparent dark:bg-transparent transition-colors duration-300">
    <div className="container mx-auto px-4">
      <SectionHeader label="WHY CHOOSE ME">Why Work with Me</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-black/70 dark:bg-white/5 shadow-xl border border-lime-400/40 p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
            style={{ boxShadow: '0 4px 32px 0 rgba(0,255,64,0.08), 0 1.5px 8px 0 #39FF14' }}
          >
            <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-lime-400/10 border border-lime-400 shadow">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white dark:text-lime-300" style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif' }}>{feature.title}</h3>
            <p className="text-gray-300 dark:text-gray-200" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyWorkWithMe;
