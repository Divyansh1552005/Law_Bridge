import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, FileText, Play,  Book, ExternalLink, Clock, User, Video } from 'lucide-react';
import { Card, ArticleCard, VideoCard } from '../Components/Card'; // Adjust path as needed
import preamble from '../assets/preamble.png';
// TODO: Import API service when backend is ready
// import { resourcesAPI } from '../services/api';

export default function ResourcesPage() {
  const navigate = useNavigate();
  const [videosLoaded, setVideosLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  
  // TODO: Replace static data with dynamic backend fetching
  // const [articles, setArticles] = useState([]);
  // const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');
  
  // TODO: Fetch resources from backend
  // useEffect(() => {
  //   const fetchResources = async () => {
  //     try {
  //       setLoading(true);
  //       const [articlesResponse, videosResponse] = await Promise.all([
  //         resourcesAPI.getArticles({ limit: 20, featured: true }),
  //         resourcesAPI.getVideos({ limit: 10, featured: true })
  //       ]);
  //       
  //       setArticles(articlesResponse.data.articles);
  //       setVideos(videosResponse.data.videos);
  //       
  //       // Track user engagement
  //       resourcesAPI.trackPageView({
  //         page: 'resources',
  //         userId: localStorage.getItem('userId') || null
  //       });
  //     } catch (error) {
  //       console.error('Error fetching resources:', error);
  //       setError('Failed to load resources. Please try again.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   
  //   fetchResources();
  // }, []);
  
  // TODO: Function to track article clicks
  // const handleArticleClick = async (articleId, url) => {
  //   try {
  //     await resourcesAPI.trackArticleClick({
  //       articleId,
  //       userId: localStorage.getItem('userId') || null,
  //       timestamp: new Date().toISOString()
  //     });
  //     window.open(url, '_blank');
  //   } catch (error) {
  //     console.error('Error tracking article click:', error);
  //     window.open(url, '_blank');
  //   }
  // };
  
  // TEMPORARY: Static data (remove when backend is ready)
  const articles = [
    {
      title: "Fundamental Rights under the Indian Constitution",
      description: "Detailed breakdown of Part III (Articles 12–35): Right to Equality, Freedom, Exploitation, Religion, Cultural Rights, Remedies.",
      source: "Vajiram & Ravi",
      readTime: "10 min read",
      category: "Constitutional Law",
      url: "https://vajiramandravi.com/upsc-exam/fundamental-rights/",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Comprehensive Guide to Fundamental Rights with Case Laws",
      description: "Parent-wise summary of all fundamental rights, salient features, judicial interpretations including A.K. Gopalan to Kesavananda Bharati.",
      source: "iPleaders",
      readTime: "12 min read",
      category: "Constitutional Law",
      url: "https://blog.ipleaders.in/fundamental-rights-under-the-indian-constitution-a-comprehensive-guide-with-case-laws/",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Fundamental Rights: Articles 12–35 of the Indian Constitution",
      description: "Concise overview of the six categories of fundamental rights and their significance in Indian democracy.",
      source: "GeeksforGeeks",
      readTime: "8 min read",
      category: "Constitutional Law",
      url: "https://www.geeksforgeeks.org/social-science/fundamental-rights/",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "New Rules for Divorce in India (2024–25): A Comprehensive Guide",
      description: "Explains divorce law updates, alimony, property rights, and how courts determine asset division.",
      source: "LegalKart",
      readTime: "10 min read",
      category: "Family Law",
      url: "https://www.legalkart.com/legal-blog/new-rules-for-divorce-in-india-2024-a-comprehensive-guide",
      image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Divorce and Property Settlement in India: Key Legal Insights",
      description: "Overview of personal laws governing divorce and property allocation; identifies factors affecting equitable division.",
      source: "Raizada Law Associates",
      readTime: "9 min read",
      category: "Family Law",
      url: "https://www.raizadaassociates.com/blog/divorce-and-property-settlement/",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Inheritance Rights After Divorce for Women and Children",
      description: "Discusses how divorce affects property and inheritance rights of women and children post-marital separation.",
      source: "India Law Offices",
      readTime: "7 min read",
      category: "Family Law",
      url: "https://www.indialawoffices.com/legal-articles/inheritance-rights-after-divorce-for-women-and-children",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Understanding Property Division in Indian Divorce",
      description: "Guidelines on how marital property is distributed, depending on religion and asset type.",
      source: "LawChef",
      readTime: "8 min read",
      category: "Family Law",
      url: "https://www.lawchef.com/blogs/division-of-property-in-divorce",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Joint Property After Divorce: A Complete Guide for Indian Couples",
      description: "Explores what qualifies as joint property, how equitable—not necessarily equal—division takes place based on financial contribution, duration of marriage, and future needs.",
      source: "LegalKart",
      readTime: "9 min read",
      category: "Family Law",
      url: "https://www.legalkart.com/legal-blog/joint-property-after-divorce-a-complete-guide-for-indian-couples",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=240&fit=crop&crop=center"
    },
    {
      title: "Property Rights of Married Women in India",
      description: "An exhaustive overview of property rights available to married women under different personal laws—Hindu, Muslim, Christian, and others.",
      source: "iPleaders",
      readTime: "10 min read",
      category: "Family Law",
      url: "https://blog.ipleaders.in/property-rights-of-married-women/",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=240&fit=crop&crop=center"
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

  // Handle iframe loading
  const handleIframeLoad = () => {
    setLoadedCount(prev => {
      const newCount = prev + 1;
      if (newCount >= videos.length) {
        setTimeout(() => setVideosLoaded(true), 300); // Small delay for smooth effect
      }
      return newCount;
    });
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
              <div 
                key={index}
                className="group bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-600 overflow-hidden hover:border-slate-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => window.open(article.url, '_blank')}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 text-slate-800 text-xs font-semibold rounded-full backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Read time badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">{article.source}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm font-medium">Read more</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
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

          <div className="relative">
            {/* Skeleton loading placeholders */}
            {!videosLoaded && (
              <div className="absolute inset-0 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                  {videos.map((_, index) => (
                    <div key={`skeleton-${index}`} className="bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-600 overflow-hidden animate-pulse">
                      {/* Video placeholder */}
                      <div className="aspect-video bg-slate-700/70 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-700/70 via-slate-600/70 to-slate-700/70 bg-[length:200%_100%] animate-shimmer"></div>
                        {/* Play button placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-slate-600/50 rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-slate-500/50 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content placeholder */}
                      <div className="p-4 sm:p-6 space-y-3">
                        {/* Title skeleton */}
                        <div className="space-y-2">
                          <div className="h-5 bg-slate-600/50 rounded animate-pulse"></div>
                          <div className="h-5 bg-slate-600/30 rounded w-3/4 animate-pulse"></div>
                        </div>
                        
                        {/* Description skeleton */}
                        <div className="space-y-2">
                          <div className="h-4 bg-slate-700/50 rounded animate-pulse"></div>
                          <div className="h-4 bg-slate-700/30 rounded w-5/6 animate-pulse"></div>
                          <div className="h-4 bg-slate-700/20 rounded w-2/3 animate-pulse"></div>
                        </div>
                        
                        {/* Channel info skeleton */}
                        <div className="flex items-center gap-2 pt-2">
                          <div className="w-4 h-4 bg-slate-600/40 rounded animate-pulse"></div>
                          <div className="h-3 bg-slate-600/40 rounded w-20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className={`grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 transition-opacity duration-700 ${
              videosLoaded ? 'opacity-100' : 'opacity-0'
            }`}>
              {videos.map((video, index) => (
                <div key={index} className={`bg-slate-800/50 rounded-lg sm:rounded-xl border border-slate-600 overflow-hidden hover:border-slate-500 transition-all duration-300 ${
                  videosLoaded ? 'transform translate-y-0' : 'transform translate-y-4'
                }`}>
                  <div className="aspect-video relative">
                    <iframe
                      src={getEmbedUrl(video.url)}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={handleIframeLoad}
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
      </div>

              <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      <div className="border-t border-white/20 mx-0.5 my-0.4"></div>
    </div>
  );
}