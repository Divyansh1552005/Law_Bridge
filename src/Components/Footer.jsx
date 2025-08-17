import React, { useState } from 'react';
import { Linkedin, Facebook, Instagram, Github, Twitter, Mail, Send, Home, Users, Calendar, MessageCircle, FileText, Play, Scale } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      // TODO: Implement actual newsletter subscription logic
      console.log('Newsletter subscription for:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const navigationItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Users, label: "About Us", path: "/about" },
    { icon: Calendar, label: "Schedule Consultation", path: "/schedule" },
    { icon: MessageCircle, label: "AI Chatbot", path: "/chatbot" },
    { icon: FileText, label: "Document Analysis", path: "/chatbot" },
    { icon: Play, label: "Legal Resources", path: "/resources" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "hover:text-blue-600", label: "LinkedIn" },
    { icon: Facebook, href: "#", color: "hover:text-blue-700", label: "Facebook" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500", label: "Instagram" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400", label: "Twitter" },
    { icon: Github, href: "#", color: "hover:text-gray-900", label: "GitHub" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Legal Aware</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Empowering individuals and businesses with accessible legal guidance through AI-powered tools, expert consultations, and comprehensive educational resources.
            </p>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group text-left cursor-pointer"
                  >
                    <IconComponent className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* External Link */}
            <div className="pt-4 border-t border-gray-700">
              <a
                href="https://blogspace-alpha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
              >
                <FileText className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
                <span className="text-sm font-medium">Community Blog</span>
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">External</span>
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-6">
                Get the latest legal insights, platform updates, and expert tips delivered to your inbox.
              </p>
            </div>

            {isSubscribed ? (
              <div className="bg-green-600 bg-opacity-20 border border-green-500 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">Successfully subscribed!</span>
                </div>
                <p className="text-green-300 text-sm mt-2">
                  Thank you for joining our newsletter.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="h-4 w-4" />
                  <span>Subscribe to Newsletter</span>
                </button>
              </div>
            )}

            <div className="text-xs text-gray-400 space-y-1">
              <p>• Weekly legal insights and updates</p>
              <p>• New feature announcements</p>
              <p>• Expert legal tips and guides</p>
              <p className="text-gray-500 mt-2">Unsubscribe anytime. Privacy guaranteed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Scale className="h-4 w-4" />
              <span>© 2025 Legal Aware. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-gray-500">Made with ❤️ for legal accessibility</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
                          <button
                            onClick={() => navigate('/privacy')}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline cursor-pointer"
                          >
                            Privacy Policy
                          </button>
                          <button
                            onClick={() => navigate('/terms')}
                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline cursor-pointer"
                          >
                            Terms of Service
                          </button>
              <a
                href="mailto:support@legalaware.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;