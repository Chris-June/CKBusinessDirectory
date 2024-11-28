import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
      <div className="p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}