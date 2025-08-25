import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Target, Eye, Heart, Shield, Users, Star, Globe, ArrowRight, CheckCircle, Lightbulb, Coffee, MessageSquare } from 'lucide-react';

export default function About() {
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
      {/* Hero Section - Why We Started */}
      <section id="why-we-started-section" className="py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Why We Started
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Legally Aware
              </span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-4xl mx-auto">
              We believe that legal knowledge shouldn't be locked behind complex jargon and expensive consultations. 
              Everyone deserves to understand their rights and navigate legal challenges with confidence.
            </p>
          </div>

          {/* Mission, Vision & Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/40 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To democratize legal knowledge through AI-powered technology, making legal assistance accessible, 
                affordable, and understandable for everyone, regardless of their background or financial situation.
              </p>
            </div>


            
            {/* Vision */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/40 hover:border-purple-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-purple-700/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                A world where legal barriers don't prevent people from understanding their rights, 
                where technology bridges the gap between complex law and everyday understanding.
              </p>
            </div>

            {/* Values */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/40 hover:border-green-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-slate-300 leading-relaxed">
                Transparency, innovation, and empowerment drive everything we do. 
                We believe in ethical AI, user privacy, and building trust through reliable, accurate legal guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

        <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* Why People Trust Us Section */}
      <section id="trust-section" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-600/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-medium">Trust & Reliability</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why People Choose 
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                To Work With Us
              </span>
            </h2>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              Building trust through excellence, innovation, and genuine care for our users' legal journey.
            </p>
          </div>

          {/* Trust Factors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Verified Accuracy</h4>
              <p className="text-slate-400 text-sm">AI trained on verified legal sources</p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-green-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 transition-colors">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Data Security</h4>
              <p className="text-slate-400 text-sm">Bank-level encryption & privacy</p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-purple-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/30 transition-colors">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Expert Network</h4>
              <p className="text-slate-400 text-sm">50+ verified legal professionals</p>
            </div>

            <div className="text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-orange-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/30 transition-colors">
                <Star className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">User Satisfaction</h4>
              <p className="text-slate-400 text-sm">4.9/5 average user rating</p>
            </div>
          </div>

          {/* Detailed Trust Points */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">What Makes Us Different</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Simplification</h4>
                  <p className="text-slate-300">We break down complex legal jargon into clear, understandable language that anyone can comprehend.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Always Available</h4>
                  <p className="text-slate-300">24/7 AI assistance means you can get legal guidance whenever you need it, not just during business hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Affordable Access</h4>
                  <p className="text-slate-300">Quality legal assistance shouldn't cost a fortune. We make it accessible to everyone.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">By The Numbers</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Users Helped</span>
                  <span className="text-2xl font-bold text-blue-400">50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Documents Analyzed</span>
                  <span className="text-2xl font-bold text-green-400">100,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Expert Lawyers</span>
                  <span className="text-2xl font-bold text-purple-400">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Satisfaction Rate</span>
                  <span className="text-2xl font-bold text-orange-400">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* Join Our Community Blog Section */}
      <section id="community-blog-section" className="py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/6 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Coffee className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Community</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Community Blog
            </span>
          </h2>
          
          <p className="text-slate-300 text-xl mb-12 leading-relaxed">
            Connect with like-minded individuals, share experiences, read real legal stories, 
            and learn from our community of users and experts. Knowledge grows when shared.
          </p>

          {/* Blog Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-all duration-300">
              <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Real Stories</h3>
              <p className="text-slate-400">Read authentic legal experiences from our community members.</p>
            </div>
            
            <div className="p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-all duration-300">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Expert Insights</h3>
              <p className="text-slate-400">Get perspectives from legal professionals and industry experts.</p>
            </div>
            
            <div className="p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-all duration-300">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Community Support</h3>
              <p className="text-slate-400">Connect and support each other through legal challenges.</p>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://blogspace-alpha.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 group"
          >
            <span>Visit Our Community Blog</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-slate-400 text-sm mt-4">
            Join thousands of community members sharing their legal journey
          </p>
        </div>
      </section>
    </div>
  );
}
