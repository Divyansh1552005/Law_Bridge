import React from 'react';
import { BookOpen, FileText, Play,  Book, ExternalLink, Clock, User, Video } from 'lucide-react';
import { Card, ArticleCard, VideoCard } from '../Components/Card'; // Adjust path as needed

export default function ResourcesPage() {
  const articles = [
    {
      title: "Understanding Fundamental Rights in Indian Constitution",
      description: "A comprehensive guide to the fundamental rights guaranteed by the Indian Constitution, including their scope, limitations, and judicial interpretations.",
      source: "Legal India",
      readTime: "8 min read",
      category: "Constitutional Law",
      url: "https://example.com"
    },
    {
      title: "Directive Principles of State Policy Explained",
      description: "Explore the non-justiciable principles that guide governance and policy-making in India, and their relationship with fundamental rights.",
      source: "Bar Council Times",
      readTime: "12 min read",
      category: "Constitutional Law",
      url: "https://example.com"
    },
    {
      title: "Supreme Court Landmark Judgments on Constitutional Law",
      description: "Analysis of pivotal Supreme Court decisions that have shaped constitutional interpretation and application in modern India.",
      source: "Law Tribune",
      readTime: "15 min read",
      category: "Case Law",
      url: "https://example.com"
    },
    {
      title: "Amendment Process in Indian Constitution",
      description: "Understanding Article 368 and the various procedures for constitutional amendments, with examples of significant amendments.",
      source: "Constitutional Studies",
      readTime: "10 min read",
      category: "Constitutional Law",
      url: "https://example.com"
    },
    {
      title: "Federal Structure and Centre-State Relations",
      description: "Examining the distribution of powers between the Centre and States, and how conflicts are resolved within India's federal framework.",
      source: "Indian Polity Review",
      readTime: "14 min read",
      category: "Federalism",
      url: "https://example.com"
    },
    {
      title: "Judicial Review and Constitutional Supremacy",
      description: "The role of Indian judiciary in upholding constitutional supremacy through the power of judicial review and constitutional interpretation.",
      source: "Judiciary Watch",
      readTime: "11 min read",
      category: "Judiciary",
      url: "https://example.com"
    },
    {
      title: "Emergency Provisions in Detail",
      description: "Understanding the three types of emergencies under the Indian Constitution and their impact on fundamental rights.",
      source: "Constitutional Law Review",
      readTime: "13 min read",
      category: "Emergency Law",
      url: "https://example.com"
    },
    {
      title: "Panchayati Raj System",
      description: "The constitutional framework for local self-governance in rural India and its significance in democratic decentralization.",
      source: "Local Governance Today",
      readTime: "9 min read",
      category: "Local Government",
      url: "https://example.com"
    },
    {
      title: "Constitutional Bodies and Commissions",
      description: "Overview of various constitutional bodies like Election Commission, CAG, NHRC and their roles in Indian democracy.",
      source: "Democratic Institutions",
      readTime: "16 min read",
      category: "Institutions",
      url: "https://example.com"
    }
  ];

  const videos = [
    {
      title: "Indian Constitution: Complete Overview",
      description: "A comprehensive video series covering all aspects of the Indian Constitution, from its making to modern applications.",
      channel: "Legal Education Hub",
      duration: "45:30",
      views: "2.1M views",
      url: "https://example.com"
    },
    {
      title: "Fundamental Rights vs Directive Principles",
      description: "Understanding the difference between fundamental rights and directive principles, and how they complement each other.",
      channel: "Constitutional Law Academy",
      duration: "28:15",
      views: "856K views",
      url: "https://example.com"
    },
    {
      title: "Landmark Constitutional Cases Explained",
      description: "Deep dive into famous constitutional cases like Kesavananda Bharati, Maneka Gandhi, and their lasting impact.",
      channel: "Supreme Court Analysis",
      duration: "52:40",
      views: "1.3M views",
      url: "https://example.com"
    },
    {
      title: "Constitutional Amendments: Process and Impact",
      description: "How constitutional amendments are made and their significance in adapting the Constitution to changing times.",
      channel: "Law Simplified",
      duration: "35:20",
      views: "642K views",
      url: "https://example.com"
    },
    {
      title: "Emergency Provisions in Indian Constitution",
      description: "Understanding the three types of emergencies and their implications for fundamental rights and federal structure.",
      channel: "Constitutional Studies",
      duration: "41:10",
      views: "789K views",
      url: "https://example.com"
    },
    {
      title: "Constitutional Bodies and Their Functions",
      description: "Overview of constitutional bodies like Election Commission, CAG, UPSC and their role in Indian democracy.",
      channel: "Governance Today",
      duration: "38:45",
      views: "521K views",
      url: "https://example.com"
    },
    {
      title: "Basic Structure Doctrine Explained",
      description: "Understanding the basic structure doctrine and how it limits the power of constitutional amendments.",
      channel: "Legal Theory Hub",
      duration: "33:22",
      views: "445K views",
      url: "https://example.com"
    },
    {
      title: "Rights and Duties of Citizens",
      description: "Comprehensive coverage of fundamental rights and duties as enshrined in the Indian Constitution.",
      channel: "Civic Education",
      duration: "29:18",
      views: "667K views",
      url: "https://example.com"
    },
    {
      title: "Parliamentary System in India",
      description: "How the Indian parliamentary system works, its features, and comparison with other democratic systems.",
      channel: "Political Science Today",
      duration: "42:55",
      views: "834K views",
      url: "https://example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full mb-6">
            📚 Educational Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Legal Resources & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Learning</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Expand your understanding of Indian constitutional law with our curated collection of 
            articles, guides, and video resources from trusted legal experts and institutions.
          </p>
        </div>
      </div>

      {/* Guides & Articles Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Guides & Articles
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              In-depth articles and comprehensive guides on Indian constitutional law, 
              fundamental rights, and landmark judicial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Video Resources Section */}
      <div className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Play className="h-8 w-8 text-purple-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Video Resources
              </h2>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Visual learning resources including lectures, case studies, and expert discussions 
              on constitutional law and legal principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <VideoCard 
                key={index} 
                {...video} 
                className="aspect-square"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-purple-600/10" size="lg">
            <BookOpen className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Need Personalized Legal Guidance?
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              While these resources provide excellent foundational knowledge, complex legal matters 
              often require expert consultation. Schedule a consultation with our experienced legal professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg border border-slate-600 transition-colors">
                Try AI Assistant
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}