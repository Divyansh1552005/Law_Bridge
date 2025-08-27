import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, FileText, Play,  Book, ExternalLink, Clock, User, Video } from 'lucide-react';
import { Card, ArticleCard, VideoCard } from '../Components/Card'; // Adjust path as needed
import preamble from '../assets/preamble.png';

export default function ResourcesPage() {
  const navigate = useNavigate();
  const articles = [
    {
      title: "Fundamental Rights under the Indian Constitution",
      description: "Detailed breakdown of Part III (Articles 12–35): Right to Equality, Freedom, Exploitation, Religion, Cultural Rights, Remedies.",
      source: "Vajiram & Ravi",
      readTime: "10 min read",
      category: "Constitutional Law",
      url: "https://vajiramandravi.com/upsc-exam/fundamental-rights/"
    },
    {
      title: "Comprehensive Guide to Fundamental Rights with Case Laws",
      description: "Parent-wise summary of all fundamental rights, salient features, judicial interpretations including A.K. Gopalan to Kesavananda Bharati.",
      source: "iPleaders",
      readTime: "12 min read",
      category: "Constitutional Law",
      url: "https://blog.ipleaders.in/fundamental-rights-under-the-indian-constitution-a-comprehensive-guide-with-case-laws/"
    },
    {
      title: "Fundamental Rights: Articles 12–35 of the Indian Constitution",
      description: "Concise overview of the six categories of fundamental rights and their significance in Indian democracy.",
      source: "GeeksforGeeks",
      readTime: "8 min read",
      category: "Constitutional Law",
      url: "https://www.geeksforgeeks.org/social-science/fundamental-rights/"
    },
    {
      title: "New Rules for Divorce in India (2024–25): A Comprehensive Guide",
      description: "Explains divorce law updates, alimony, property rights, and how courts determine asset division.",
      source: "LegalKart",
      readTime: "10 min read",
      category: "Family Law",
      url: "https://www.legalkart.com/legal-blog/new-rules-for-divorce-in-india-2024-a-comprehensive-guide"
    },
    {
      title: "Divorce and Property Settlement in India: Key Legal Insights",
      description: "Overview of personal laws governing divorce and property allocation; identifies factors affecting equitable division.",
      source: "Raizada Law Associates",
      readTime: "9 min read",
      category: "Family Law",
      url: "https://www.raizadaassociates.com/blog/divorce-and-property-settlement/"
    },
    {
      title: "Inheritance Rights After Divorce for Women and Children",
      description: "Discusses how divorce affects property and inheritance rights of women and children post-marital separation.",
      source: "India Law Offices",
      readTime: "7 min read",
      category: "Family Law",
      url: "https://www.indialawoffices.com/legal-articles/inheritance-rights-after-divorce-for-women-and-children"
    },
    {
      title: "Understanding Property Division in Indian Divorce",
      description: "Guidelines on how marital property is distributed, depending on religion and asset type.",
      source: "LawChef",
      readTime: "8 min read",
      category: "Family Law",
      url: "https://www.lawchef.com/blogs/division-of-property-in-divorce"
    },
    {
      title: "Joint Property After Divorce: A Complete Guide for Indian Couples",
      description: "Explores what qualifies as joint property, how equitable—not necessarily equal—division takes place based on financial contribution, duration of marriage, and future needs.",
      source: "LegalKart",
      readTime: "9 min read",
      category: "Family Law",
      url: "https://www.legalkart.com/legal-blog/joint-property-after-divorce-a-complete-guide-for-indian-couples"
    },
    {
      title: "Property Rights of Married Women in India",
      description: "An exhaustive overview of property rights available to married women under different personal laws—Hindu, Muslim, Christian, and others.",
      source: "iPleaders",
      readTime: "10 min read",
      category: "Family Law",
      url: "https://blog.ipleaders.in/property-rights-of-married-women/"
    },

  ];


const videos = [
  {
    title: "IN-DEPTH: FUNDAMENTAL RIGHTS IN CONSTITUTION",
    description: "Comprehensive lecture on the Fundamental Rights under the Indian Constitution.",
    channel: "YouTube",
    url: "https://www.youtube.com/watch?v=l2fN9pbpa_s"
  },
  {
    title: "Fundamental Rights vs Directive Principles of State Policy",
    description: "A clear comparison between Fundamental Rights and Directive Principles.",
    channel: "YouTube",
    url: "https://www.youtube.com/watch?v=fXmY-meZ1tI"
  },
  {
    title: "Sansad TV Special Report: Fundamental Rights In ...",
    description: "Authoritative overview of the six Fundamental Rights by Sansad TV.",
    channel: "Rajya Sabha TV",
    url: "https://www.youtube.com/watch?v=7oJr6esvNh4"
  },
  {
    title: "Samvidhaan: The Making of the Constitution of India (Condensed)",
    description: "A condensed version of the celebrated mini-series on the making of the Constitution.",
    channel: "Rajya Sabha TV",
    url: "https://www.youtube.com/watch?v=PvULrpX0HtA"
  },
  {
    title: "Divorce: How To Protect Your Assets",
    description: "Practical guidance on safeguarding property during a divorce.",
    channel: "YouTube",
    url: "https://www.youtube.com/watch?v=31-MBm_SXDw"
  },
  {
    title: "Property division during divorce for Indian woman",
    description: "Explains how property is divided during divorce, especially from a woman's viewpoint.",
    channel: "YouTube",
    url: "https://www.youtube.com/watch?v=sPp8BhoCq_c"
  },
  {
    title: "Decoding Divorce: Expert Insights on Alimony and Property ...",
    description: "Expert breakdown of alimony and property-sharing law in India.",
    channel: "YouTube",
    url: "https://www.youtube.com/watch?v=e_DY-k3gcVM"
  },
  {
    title: "What Is Doctrine Of Basic Structure | UPSC Knowledge Nuggets",
    description: "Clarifies the Basic Structure Doctrine under the Indian Constitution.",
    channel: "YouTube",
    url: "https://www.youtube.com/watch?v=fXmY-meZ1tI"
  },
  {
    title: "Kesavananda Bharati Case 1973 | Basic Structure Doctrine ...",
    description: "Detailed explanation of the landmark Kesavananda Bharati case establishing the Basic Structure Doctrine.",
    channel: "YouTube",
    url: "https://www.youtube.com/watch?v=uPyrVW5yxxI"
  }
];


  const location = useLocation();

  // Convert YouTube URLs to embed URLs
  const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Handle scroll navigation from dropdown
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Preamble Background Image */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none pt-2">
          <img 
            src={preamble} 
            alt="Indian Constitution Preamble" 
            className="opacity-5 w-full h-auto object-cover select-none"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-block px-3 sm:px-4 py-2 bg-blue-600/20 text-blue-400 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
            📚 Educational Resources
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Legal Resources & 
            <span className=" bg-clip-text bg-gradient-to-r text-blue-400"> Learning</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Expand your understanding of Indian constitutional law with our curated collection of 
            articles, guides, and video resources from trusted legal experts and institutions.
          </p>
        </div>
      </div>

      <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* Guides & Articles Section */}
      <div id="articles" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mr-2 sm:mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Guides & Articles
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              In-depth articles and comprehensive guides on Indian constitutional law, 
              fundamental rights, and landmark judicial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {articles.map((article, index) => (
              <ArticleCard 
                key={index} 
                {...article} 
                className="aspect-square"
              />
            ))}
          </div>
        </div>
      </div>
            <div className="border-t border-white/20 mx-0.5 my-0.4"></div>
      {/* Video Resources Section */}
      <div id="video-guides" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Play className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mr-2 sm:mr-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Video Resources
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
              Visual learning resources including lectures, case studies, and expert discussions 
              on constitutional law and legal principles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-600 overflow-hidden hover:border-slate-500 transition-colors duration-200">
                <div className="aspect-video">
                  <iframe
                    src={getEmbedUrl(video.url)}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mb-3 leading-relaxed">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Video className="w-3 h-3 sm:w-4 sm:h-4" />
                      {video.channel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

              <div className="border-t border-white/20 mx-0.5 my-0.4"></div>
      {/* Call to Action Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-950/30 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-blue-700/40 bg-gradient-to-br from-blue-700/20 to-blue-800/30 backdrop-blur-sm" size="lg">
            <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-blue-300 mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
              Need Personalized Legal Guidance?
            </h3>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed px-4">
              While these resources provide excellent foundational knowledge, complex legal matters 
              often require expert consultation. Schedule a consultation with our experienced legal professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors cursor-pointer text-sm sm:text-base shadow-lg shadow-blue-500/25"
               onClick={() => navigate('/schedule')}>
                Schedule Consultation
              </button>
              <button className="px-6 sm:px-8 py-3 bg-blue-700/50 hover:bg-blue-600/60 text-blue-100 font-semibold rounded-lg border border-blue-500/50 hover:border-blue-400/60 transition-colors cursor-pointer text-sm sm:text-base"
               onClick={() => navigate('/chatbot')}>
                Try AI Assistant
              </button>
            </div>
          </Card>
        </div>
      </div>

      <div className="border-t border-white/20 mx-0.5 my-0.4"></div>
    </div>
  );
}