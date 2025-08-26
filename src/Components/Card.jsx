import React from 'react';
import { Book, ExternalLink, Play, Clock, User, Video, Star, MapPin, Calendar, Award } from 'lucide-react';


// Base Card Component
export const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = false,
  size = 'default',
  onClick,
  ...props
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
    <div 
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
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


// Article Card Component
export const ArticleCard = ({ 
  title, 
  description, 
  source, 
  readTime, 
  url, 
  category,
  onClick,
  className = '' 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Card className={`group h-full flex flex-col cursor-pointer ${className}`} onClick={handleClick}>
      <div className="flex items-start justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full">
          {category}
        </span>
        <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
        {title}
      </h3>
      
      <p className="text-slate-300 mb-4 flex-grow leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-slate-400 mt-auto">
        <div className="flex items-center">
          <Book className="h-4 w-4 mr-1" />
          <span>{source}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
      </div>
    </Card>
  );
};

// Video Card Component
export const VideoCard = ({ 
  title, 
  description, 
  channel, 
  duration, 
  views, 
  thumbnail, 
  url,
  onClick,
  className = '' 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <Card className={`group h-full flex flex-col cursor-pointer ${className}`} onClick={handleClick}>
      <div className="relative mb-4 bg-slate-700/50 rounded-lg overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full aspect-video object-cover"
          />
        ) : (
          <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
            <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
        {title}
      </h3>
      
      <p className="text-slate-300 mb-4 flex-grow text-sm leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-sm text-slate-400 mt-auto">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          <span>{channel}</span>
        </div>
        <div className="flex items-center">
          <Video className="h-4 w-4 mr-1" />
          <span>{views}</span>
        </div>
      </div>
    </Card>
  );
};





export const LawyerCard = ({
  name = "John Doe",
  specialization = "Criminal Law",
  location = "Mumbai, Maharashtra",
  experience = 8,
  rating = 4.5,
  fee = 2500,
  availability = "Available Today",
  profilePic = null
}) => {
  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-3 h-3 text-gray-600" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-3 h-3 text-gray-600" />
      );
    }
    
    return stars;
  };

  // Determine availability badge color
  const getAvailabilityBadge = () => {
    const isToday = availability.toLowerCase().includes('today');
    const isTomorrow = availability.toLowerCase().includes('tomorrow');
    
    if (isToday) {
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    } else if (isTomorrow) {
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    } else {
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    }
  };

  return (
    <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-slate-600/50 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col">
      
      {/* Profile Section - Centered */}
      <div className="flex flex-col items-center text-center mb-6">
        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex-shrink-0 overflow-hidden border-3 border-slate-600/50 group-hover:border-blue-500/50 transition-all duration-300 mb-4 shadow-lg">
          {profilePic ? (
            <img 
              src={profilePic} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        
        {/* Availability Badge - Top positioned */}
        <div className="mb-3">
          <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border ${getAvailabilityBadge()}`}>
            <Calendar className="w-3 h-3" />
            {availability}
          </span>
        </div>

        {/* Name and Specialization */}
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-blue-400 font-semibold text-sm mb-4 px-2">
          {specialization}
        </p>
      </div>

      {/* Details Section */}
      <div className="flex-grow space-y-4">
        
        {/* Location and Experience */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-slate-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <Award className="w-4 h-4 text-slate-500" />
            <span>{experience} years experience</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-white font-semibold">{rating}</span>
            <span className="text-slate-400">({Math.floor(Math.random() * 50 + 10)} reviews)</span>
          </div>
        </div>

        {/* Fee - Prominent */}
        <div className="text-center py-4 border-t border-b border-slate-700/50">
          <div className="text-2xl font-bold text-white">
            ₹{fee.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-slate-400 mt-1">per consultation</div>
        </div>
      </div>

      {/* CTA Button - Bottom aligned */}
      <div className="mt-6">
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] text-sm">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
};
