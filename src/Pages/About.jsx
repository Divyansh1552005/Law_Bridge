import React from 'react';
import { Scale, Users, FileText, MessageSquare, Calendar, Play, CheckCircle, TrendingUp, Shield, Zap, Award, Target, Eye } from 'lucide-react';

// Card Components
const Card = ({ 
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

const IconCard = ({ 
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

const FeatureCard = ({ 
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

const StatsCard = ({ 
  value, 
  label, 
  icon: Icon, 
  className = '' 
}) => {
  return (
    <Card className={`text-center ${className}`} gradient>
      <div className="flex items-center justify-center mb-4">
        {Icon && <Icon className="h-8 w-8 text-blue-400 mr-2" />}
        <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{value}</span>
      </div>
      <p className="text-slate-300 font-medium text-lg">{label}</p>
    </Card>
  );
};

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Legal Aware</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-blue-600 font-medium">About Us</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Schedule Consultation</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Resources</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Chatbot</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Community Blog</a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section with Animated Background */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
            <Award className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Trusted Legal Technology Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              About
            </span>{' '}
            <span className="text-white">Legal Aware</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Revolutionizing legal accessibility through innovative AI technology and expert human guidance. 
            We transform complex legal language into clear, actionable insights for everyone.
          </p>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <StatsCard 
              value="15K+" 
              label="Active Users" 
              icon={Users}
            />
            <StatsCard 
              value="50K+" 
              label="Documents Analyzed" 
              icon={FileText}
            />
            <StatsCard 
              value="98%" 
              label="Accuracy Rate" 
              icon={CheckCircle}
            />
            <StatsCard 
              value="24/7" 
              label="AI Support" 
              icon={Zap}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision with Enhanced Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Our Foundation</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built on the principles of accessibility, innovation, and legal excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card gradient size="lg" className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Target className="h-8 w-8 text-blue-400 opacity-20" />
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-400">Our Mission</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                To democratize legal knowledge by bridging the gap between complex legal language and everyday understanding. 
                We empower individuals and businesses to make informed decisions through cutting-edge AI technology and 
                qualified legal professionals.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">Making legal knowledge accessible to everyone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">Combining AI innovation with human expertise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">Empowering informed legal decisions</span>
                </div>
              </div>
            </Card>

            <Card gradient size="lg" className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Eye className="h-8 w-8 text-purple-400 opacity-20" />
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-purple-400">Our Vision</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                A world where legal complexity doesn't prevent people from understanding their rights, obligations, 
                and opportunities. We envision a future where technology and human expertise work together to create 
                a more transparent and equitable legal landscape.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">Transforming legal accessibility globally</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">Creating transparent legal interactions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-200">Building an equitable legal future</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services with Icon Cards */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How We Transform Legal Complexity
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered tools and expert services designed to make law accessible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <IconCard
              icon={FileText}
              title="Intelligent Document Analysis"
              description="Upload any legal document and receive instant, plain-English explanations of complex terms, clauses, and implications with AI-powered precision."
              iconColor="blue"
            />

            <IconCard
              icon={MessageSquare}
              title="24/7 AI Legal Assistant"
              description="Get immediate legal guidance through our advanced chatbot, trained on vast legal databases and available around the clock for your questions."
              iconColor="green"
            />

            <IconCard
              icon={Calendar}
              title="Expert Legal Consultations"
              description="Schedule personalized consultations with qualified lawyers for complex matters requiring human expertise and detailed legal strategy."
              iconColor="purple"
            />

            <IconCard
              icon={Play}
              title="Comprehensive Legal Library"
              description="Access our extensive collection of educational videos, case studies, and legal guides covering diverse areas of law and practice."
              iconColor="orange"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us with Feature Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Why Legal Professionals & Individuals Choose Us</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Experience the perfect blend of cutting-edge technology and proven legal expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Trusted & Secure"
              description="Enterprise-grade security with end-to-end encryption ensures your sensitive legal information remains completely confidential and protected at all times."
              accent="blue"
            />

            <FeatureCard
              icon={Zap}
              title="Lightning Fast Results"
              description="Get instant legal insights powered by advanced AI algorithms that process documents and queries in seconds, not hours or days."
              accent="green"
            />

            <FeatureCard
              icon={Award}
              title="Expert-Validated Accuracy"
              description="Our AI is trained and continuously validated by qualified legal professionals to ensure reliable, accurate, and up-to-date legal guidance."
              accent="purple"
            />
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card gradient size="lg" className="text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                  <Users className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Legal Community
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Connect with legal professionals, stay informed with the latest insights, and learn from real-world 
                case studies through our vibrant community platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Explore Community Blog
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-slate-600">
                  Start Free Trial
                </button>
              </div>
            </div>
          </Card>
        </div>

        
      </section>
          
      <div className="border-t border-white/20 mx-0.5 my-0.4"></div>
      
    </div>
  );
}