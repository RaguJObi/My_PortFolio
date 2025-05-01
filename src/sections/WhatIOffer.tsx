import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { FaCode, FaPalette, FaUserTie } from 'react-icons/fa';

const offers = [
  {
    icon: <FaPalette className="text-4xl mb-4 text-lime-400" />,
    title: 'Web Design',
    description: 'Creating visually stunning and user-friendly websites is at the heart of what I do.',
    features: [
      'Custom Tailored Design',
      'Responsive Layouts',
      'Custom Tailored Design',
    ],
    bg: 'bg-lime-400 text-black',
    button: 'bg-lime-200 text-black',
  },
  {
    icon: <FaCode className="text-4xl mb-4 text-gray-300" />,
    title: 'Development',
    description: 'I bring your designs to life with clean, efficient, and high-performing code.',
    features: [
      'HTML, CSS, & JS Expertise',
      'Cross-Browser Compatibility',
      'Faster Load Times',
    ],
    bg: 'bg-gray-900 text-white',
    button: 'bg-lime-200 text-black',
  },
  {
    icon: <FaUserTie className="text-4xl mb-4 text-gray-400" />,
    title: 'Brand Identity',
    description: 'Building a strong brand identity is essential for standing out in a crowded market.',
    features: [
      'Logo Design',
      'Cohesive Color Palettes',
      'Brand Guidelines',
    ],
    bg: 'bg-white text-black',
    button: 'bg-lime-200 text-black',
  },
];

const WhatIOffer = () => (
  <section id="what-i-offer" className="py-20 bg-black transition-colors duration-300">
    <div className="container mx-auto px-4">
      <SectionHeader label="WHAT I OFFER" className="text-left items-start">Empowering Brands Through Design</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-12 flex flex-col h-full shadow-2xl text-lg ${offer.bg}`}
            style={{ minHeight: '520px' }}
          >
            <div>{offer.icon}</div>
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif' }}>{offer.title}</h3>
            <p className="mb-6 text-lg" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>{offer.description}</p>
            <ul className="mb-8 flex-1 text-base">
              {offer.features.map((feature, i) => (
                <li key={i} className="border-b border-gray-300/40 py-2">{feature}</li>
              ))}
            </ul>
            <Button href="#contact" className={`mt-auto px-8 py-3 rounded-full font-semibold text-lg ${offer.button}`}>↳ Schedule a consultation</Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIOffer;
