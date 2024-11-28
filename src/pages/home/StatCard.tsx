import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

export default function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {number}
          </div>
          <div className="text-gray-400 text-sm">{label}</div>
        </div>
      </div>
    </div>
  );
}