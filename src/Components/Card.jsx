import React from 'react';

// Base Card Component
export const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = false,
  size = 'default' 
}) => {
  const baseClasses = 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300';
  const hoverClasses = hover ? 'hover:bg-slate-700/60 hover:border-slate-600/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-slate-800/60 to-slate-900/80' : '';
  const sizeClasses = {
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

// Icon Card Component
export const IconCard = ({ 
  icon: Icon, 
  title, 
  description, 
  iconColor = 'blue',
  className = '' 
}) => {
  const colorClasses = {
    blue: 'bg-blue-600 group-hover:bg-blue-500',
    green: 'bg-green-600 group-hover:bg-green-500',
    purple: 'bg-purple-600 group-hover:bg-purple-500',
    orange: 'bg-orange-600 group-hover:bg-orange-500',
    indigo: 'bg-indigo-600 group-hover:bg-indigo-500'
  };

  return (
    <Card className={`group ${className}`}>
      <div className={`${colorClasses[iconColor]} p-3 rounded-lg w-fit mb-6 transition-colors`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-100 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

// Feature Card Component
export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  accent = 'blue',
  className = '' 
}) => {
  const accentClasses = {
    blue: 'bg-blue-600 text-blue-400',
    green: 'bg-green-600 text-green-400',
    purple: 'bg-purple-600 text-purple-400',
    orange: 'bg-orange-600 text-orange-400'
  };

  return (
    <Card className={`text-center group ${className}`} size="lg">
      <div className={`${accentClasses[accent].split(' ')[0]} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className={`text-xl font-bold mb-4 ${accentClasses[accent].split(' ')[1]} group-hover:text-white transition-colors`}>
        {title}
      </h3>
      <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
        {description}
      </p>
    </Card>
  );
};

// Stats Card Component
export const StatsCard = ({ 
  value, 
  label, 
  icon: Icon, 
  trend,
  className = '' 
}) => {
  return (
    <Card className={`text-center ${className}`} gradient>
      <div className="flex items-center justify-center mb-4">
        {Icon && <Icon className="h-6 w-6 text-blue-400 mr-2" />}
        <span className="text-3xl font-bold text-white">{value}</span>
      </div>
      <p className="text-slate-300 font-medium">{label}</p>
      {trend && (
        <p className={`text-sm mt-2 ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
        </p>
      )}
    </Card>
  );
};

// Demo usage
export default function CardDemo() {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Card Components Demo</h1>
        
        {/* Basic Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-bold text-white mb-4">Basic Card</h3>
            <p className="text-slate-300">This is a basic card with hover effects and glassmorphism styling.</p>
          </Card>
          
          <Card gradient>
            <h3 className="text-xl font-bold text-white mb-4">Gradient Card</h3>
            <p className="text-slate-300">This card has a gradient background for extra visual appeal.</p>
          </Card>
          
          <Card hover={false} className="border-blue-500/50">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Static Card</h3>
            <p className="text-slate-300">This card has no hover effects and a custom border color.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}