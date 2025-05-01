import React from 'react';

interface SectionHeaderProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, children, className = '' }) => (
  <div className={`mb-8 ${className}`}>
    <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 dark:bg-black/20 border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-900 dark:text-white mb-4 shadow-sm">
      <span className="flex items-center">
        <span className="w-3 h-3 rounded-full bg-lime-400 mr-2 border border-white"></span>
        {label}
      </span>
    </div>
    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white" style={{ fontFamily: 'Orbitron, Space Grotesk, Inter, sans-serif' }}>
      {children}
    </h2>
  </div>
);

export default SectionHeader;
