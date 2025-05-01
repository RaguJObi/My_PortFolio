import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const steps = [
  {
    title: 'Discovery',
    description: 'I dive deep into understanding your brand, goals, and target audience. Through detailed consultations and research, I gather essential insights that inform the entire design process.'
  },
  {
    title: 'Design',
    description: 'I begin crafting visually compelling and strategic designs. This step translates ideas into tangible visual concepts that align with your brand.'
  },
  {
    title: 'Development',
    description: 'I transform the visuals into a fully functional website. This phase involves meticulous coding and integration to ensure your site is responsive and performs seamlessly across devices.'
  },
  {
    title: 'Launch',
    description: 'I rigorously test the website to ensure everything functions flawlessly before going live. Post-launch, I provide support and guidance to help you maximize your new online presence.'
  }
];

const Process = () => (
  <section id="process" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
      {/* Left: SectionHeader and CTA */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <SectionHeader label="MY PROCESS" className="text-left items-start">My Creative Workflow</SectionHeader>
        <Button href="#contact" className="mt-6 text-lg font-semibold px-8 py-3 rounded-full bg-lime-400 hover:bg-lime-500 text-black shadow-lg" style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif' }}>
          ↳ Schedule a consultation
        </Button>
      </div>
      {/* Right: Numbered Steps */}
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex items-center mb-2">
              <span className="text-3xl md:text-4xl font-extrabold text-lime-400 mr-4" style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif' }}>{idx + 1}.</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif' }}>{step.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg border-b border-gray-200 dark:border-gray-700 pb-4 mb-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
