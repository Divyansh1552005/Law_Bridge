import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, MessageSquare, Upload, Video, FileText, Users, Calendar, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { StatsCard } from '../Components/Card';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="h-[75vh] flex items-start justify-center px-6 pt-16 pb-8 relative overflow-hidden">
        <div className="text-center max-w-5xl mx-auto relative z-10">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-3">
              ⚖️ Trusted Legal Platform
            </span>
          </div>
          
          <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl mb-5 leading-tight">
            Your Legal Companion,
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>
          
          <p className="text-slate-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Navigate legal complexities with AI-powered assistance, expert consultations, and comprehensive resources – all in one intelligent platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={() => navigate('/schedule')}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-500/15 font-semibold text-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/chatbot')}
              className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur border border-blue-500/50 hover:border-blue-400/70 hover:from-blue-500/80 hover:to-blue-600/80 text-white px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 font-semibold text-lg transition-all duration-300 hover:shadow-blue-500/40 cursor-pointer hover:bg-blue-700/60 hover:scale-105"
            >
              Try AI Assistant
            </button>
          </div>
          
          {/* Trust indicators */}
          {/* <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>10k+ Documents Analyzed</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 User Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>50+ Expert Lawyers</span>
            </div>
          </div> */}
        </div>

        
        
        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </section>

       <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* Features Section */}
      <section className="py-8 px-6 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comprehensive Legal Tools
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to understand, navigate, and resolve legal matters with confidence and clarity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div 
              onClick={() => navigate('/resources')}
              className="group bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/80 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Legal Blog & Insights</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">Access real legal stories, expert articles, and community discussions to stay informed about legal trends and precedents.</p>
                  <div className="flex items-center text-blue-400 text-sm font-medium">
                    <span>Explore Articles</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              onClick={() => navigate('/chatbot')}
              className="group bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/80 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-xl group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                  <Upload className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">AI Document Analysis</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">Upload contracts, agreements, or legal documents and receive instant AI-powered summaries and explanations in plain language.</p>
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <span>Try Document Upload</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              onClick={() => navigate('/chatbot')}
              className="group bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/80 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-purple-600/20 to-purple-700/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">AI Legal Assistant</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">Get instant answers to legal questions, understand your rights, and receive guidance on everyday legal matters through our intelligent chatbot.</p>
                  <div className="flex items-center text-purple-400 text-sm font-medium">
                    <span>Start Conversation</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              onClick={() => navigate('/resources')}
              className="group bg-slate-800/80 backdrop-blur border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/80 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-orange-600/20 to-orange-700/20 rounded-xl group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all duration-300">
                  <Video className="w-8 h-8 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Learning Resources</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">Access curated video guides, legal tutorials, and educational content to build your understanding of law and legal processes.</p>
                  <div className="flex items-center text-orange-400 text-sm font-medium">
                    <span>Browse Resources</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Get expert legal assistance in three simple, streamlined steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative group">
              <div className="bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-700/60 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl mb-6 group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Upload Document</h3>
                <p className="text-slate-300 leading-relaxed">Upload your legal documents and get instant AI-powered analysis and simplification in plain language.</p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </div>
            
            <div className="relative group">
              <div className="bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-700/60 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-xl mb-6 group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all duration-300">
                  <MessageSquare className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Chat with AI</h3>
                <p className="text-slate-300 leading-relaxed">Ask questions about your documents or general legal matters and receive clear, actionable answers.</p>
              </div>
              {/* Connector line */}
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-green-500/50 to-transparent"></div>
            </div>
            
            <div className="group">
              <div className="bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center hover:bg-slate-700/60 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-700/20 rounded-xl mb-6 group-hover:from-purple-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <Calendar className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Schedule Consultation</h3>
                <p className="text-slate-300 leading-relaxed">Connect with experienced lawyers for personalized legal advice and professional consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

 <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              Join our growing community of users who've simplified their legal journey
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              value="10k+"
              label="Documents Explained"
              icon={FileText}
              trend={15}
            />
            
            <StatsCard
              value="5k+"
              label="Consultations Scheduled"
              icon={Calendar}
              trend={23}
            />
            
            <StatsCard
              value="50+"
              label="Lawyers Onboard"
              icon={Users}
              trend={8}
            />
            
            <StatsCard
              value="50k+"
              label="Users Helped"
              icon={TrendingUp}
              trend={42}
            />
          </div>
        </div>
      </section>

       <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-slate-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards understanding your legal needs with our comprehensive platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/chatbot')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30 font-semibold text-lg transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
            >
              Get Started Free
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="bg-transparent border-2 border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50"
            >
              Learn More
            </button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

    </div>
  );
};

export default Home;