import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, MessageSquare, Upload, Video, FileText, Users, Calendar, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { StatsCard } from '../Components/Card';
import justiceScales from '../assets/justice-law-concept-scales-gavel-podium.jpg';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure page is rendered
      }
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-[70vh] sm:min-h-[75vh] flex items-start justify-center px-4 sm:px-6 pt-12 sm:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${justiceScales})`,
            }}
          ></div>
          {/* Dark overlay to dim the background image */}
          <div className="absolute inset-0 bg-slate-900/50"></div>
          {/* Additional gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-900/60"></div>
        </div>

        <div className="text-center max-w-5xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
              Law Bridge
            </h1>
          </div>
          
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-5 leading-tight">
            <span className="block text-white">
              Your Trusted Companion
            </span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            Navigate legal complexities with AI-powered assistance, expert consultations, and comprehensive resources – all in one intelligent platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 py-6 sm:py-10 px-4 sm:px-0">
            <button 
              onClick={() => navigate('/schedule')}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg shadow-blue-500/15 font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/chatbot')}
              className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur border border-blue-500/50 hover:border-blue-400/70 hover:from-blue-500/80 hover:to-blue-600/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-xl shadow-blue-500/25 font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-blue-500/40 cursor-pointer hover:bg-blue-700/60 hover:scale-105"
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
          <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </section>

       <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* Features Section */}
      <section id="features-section" className="py-8 px-6 bg-slate-800/50 backdrop-blur-sm">
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
      <section id="how-it-works-section" className="py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
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
      <section id="stats-section" className="py-16 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-8">
              Join our growing community of users who've simplified their legal journey
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="mb-16 overflow-hidden">
            <div className="animate-scroll flex gap-6" style={{ 
              animation: 'scroll 30s linear infinite',
              width: 'calc(300px * 12)' // 12 testimonials * 300px width
            }}>
              {/* Testimonial 1 */}
              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Arjun Sharma</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"The document analyzer saved me hours! Explained my rental agreement perfectly."</p>
              </div>

              {/* Testimonial 2 */}
              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                    P
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Priya Patel</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"Best legal chatbot ever! Got instant answers to my property queries."</p>
              </div>

              {/* Testimonial 3 */}
              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    R
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Raj Kumar</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"Resources section is incredible! Found exactly what I needed about divorce laws."</p>
              </div>

              {/* Testimonial 4 */}
              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Sneha Gupta</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"UI is so clean and easy to use. Makes legal stuff less intimidating!"</p>
              </div>

              {/* Testimonial 5 */}
              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                    V
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Vikram Singh</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"Game changer for small business owners like me. Legal clarity at my fingertips!"</p>
              </div>

              {/* Testimonial 6 */}
              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Meera Joshi</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"Finally understood my employment contract thanks to this amazing platform!"</p>
              </div>

              {/* Duplicate testimonials for seamless loop */}
              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Arjun Sharma</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"The document analyzer saved me hours! Explained my rental agreement perfectly."</p>
              </div>

              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                    P
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Priya Patel</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"Best legal chatbot ever! Got instant answers to my property queries."</p>
              </div>

              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    R
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Raj Kumar</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"Resources section is incredible! Found exactly what I needed about divorce laws."</p>
              </div>

              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Sneha Gupta</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"UI is so clean and easy to use. Makes legal stuff less intimidating!"</p>
              </div>

              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                    V
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Vikram Singh</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"Game changer for small business owners like me. Legal clarity at my fingertips!"</p>
              </div>

              <div className="flex-shrink-0 w-72 bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Meera Joshi</p>
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">"Finally understood my employment contract thanks to this amazing platform!"</p>
              </div>
            </div>
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
              <div className="border-t border-white/20 mx-0.5 my-0.4"></div>


      {/* Legal Disclaimer Section */}
      <section id="disclaimer-section" className="py-16 px-6 bg-gradient-to-br from-slate-800/60 via-blue-900/20 to-slate-800/60 backdrop-blur-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-400/6 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Important Legal Information</h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Please read the following disclaimer carefully before using our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Main Disclaimer */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/60 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600/20 to-amber-700/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Legal Disclaimer</h4>
                  <div className="text-slate-300 leading-relaxed space-y-3">
                    <p>
                      The information provided on <span className="text-blue-400 font-medium">Law Bridge</span> is for general informational and educational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for consultation with qualified legal professionals.
                    </p>
                    <p>
                      <strong className="text-white">Important:</strong> Every legal situation is unique. The content on this platform may not apply to your specific circumstances. Always consult with a licensed attorney in your jurisdiction before making legal decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Service Information */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/60 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Service Information</h4>
                  <div className="text-slate-300 leading-relaxed space-y-3">
                    <p>
                      Our AI-powered tools and document analysis features are designed to help you understand legal concepts but do not replace professional legal judgment.
                    </p>
                    <p>
                      <strong className="text-white">Lawyer Consultations:</strong> When you schedule consultations with lawyers through our platform, you are entering into a direct professional relationship with them. Fees and terms are set by individual attorneys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Notice */}
          <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
              </svg>
              <span className="text-slate-300 font-medium">Limitation of Liability</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-4xl mx-auto">
              Law Bridge and its affiliates shall not be liable for any actions taken or decisions made based on the information provided through this platform. Users acknowledge that they use this service at their own discretion and risk.
            </p>
          </div>
        </div>
      </section>


             <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* CSS for scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
};

export default Home;