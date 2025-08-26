import React, { useState, useRef } from 'react';
import { Upload, FileText, X, Loader, CheckCircle, AlertCircle, Shield, Clock, Users, Award, Download, Calendar, ArrowRight, Eye, MessageSquare } from 'lucide-react';

const DocumentAnalyzer = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileSelection = (file) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];

    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a PDF, Word document, or text file.');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB.');
      return;
    }

    setError('');
    setUploadedFile(file);
    setAnalysisResult('');
  };

  const removeFile = () => {
    setUploadedFile(null);
    setAnalysisResult('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const analyzeDocument = async () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);
    setError('');

    // TODO: Send file to backend API here
    // Example API call structure:
    // try {
    //   const formData = new FormData();
    //   formData.append('document', uploadedFile);
    //   
    //   const response = await fetch('/api/analyze-document', {
    //     method: 'POST',
    //     body: formData
    //   });
    //   
    //   if (!response.ok) {
    //     throw new Error('Analysis failed');
    //   }
    //   
    //   const data = await response.json();
    //   setAnalysisResult(data.analysis);
    // } catch (error) {
    //   console.error('Document analysis error:', error);
    //   setError('Failed to analyze document. Please try again.');
    // }

    setTimeout(() => {
      setAnalysisResult(`**DOCUMENT ANALYSIS REPORT**

**Executive Summary:**
This legal document has been successfully analyzed using advanced AI algorithms. The document appears to be a standard commercial agreement with key provisions for dispute resolution and liability allocation.

**Key Findings:**
• **Contract Type:** Commercial Services Agreement
• **Parties:** Two commercial entities with defined obligations
• **Term:** 12-month initial term with auto-renewal clause
• **Value:** Estimated contract value of $50,000-$100,000 annually

**Risk Assessment:**
🟢 **Low Risk Areas:**
- Standard payment terms (Net 30)
- Clear termination clauses
- Adequate intellectual property protection

🟡 **Medium Risk Areas:**
- Liability cap may be insufficient for contract value
- Indemnification clauses could be more specific

🔴 **High Risk Areas:**
- Force majeure clause lacks pandemic provisions
- Dispute resolution mechanism unclear

**Recommended Actions:**
1. **Immediate:** Review liability limitations on page 3
2. **Short-term:** Clarify dispute resolution process
3. **Long-term:** Consider adding pandemic-related force majeure language

**Compliance Status:**
✅ GDPR Compliant
✅ State Law Compliant  
⚠️ Industry Standards - Minor gaps identified

**Next Steps:**
We recommend scheduling a consultation with one of our legal experts to discuss the medium and high-risk areas identified in this analysis.`);
      setIsAnalyzing(false);
    }, 3000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-level encryption ensures your documents remain confidential and secure throughout the analysis process."
    },
    {
      icon: Clock,
      title: "Instant Analysis",
      description: "Get comprehensive legal insights in minutes, not hours. Our AI processes documents 10x faster than traditional review."
    },
    {
      icon: Users,
      title: "Expert Validation",
      description: "All AI analysis is backed by our network of legal professionals and continuously improved based on real cases."
    },
    {
      icon: Award,
      title: "Proven Accuracy",
      description: "95% accuracy rate in identifying key legal risks and opportunities, validated across thousands of documents."
    }
  ];

  const analysisTypes = [
    {
      type: "Contracts & Agreements",
      description: "Employment, NDAs, Service agreements, Partnership contracts",
      icon: FileText
    },
    {
      type: "Legal Compliance",
      description: "Privacy policies, Terms of service, Regulatory filings",
      icon: Shield
    },
    {
      type: "Litigation Documents",
      description: "Court filings, Discovery documents, Legal briefs",
      icon: Award
    },
    {
      type: "Corporate Documents",
      description: "Articles of incorporation, Bylaws, Board resolutions",
      icon: Users
    }
  ];

  const recentAnalyses = [
    { name: "Employment_Agreement_2024.pdf", date: "2 hours ago", risk: "Low", type: "Contract" },
    { name: "Privacy_Policy_Update.docx", date: "5 hours ago", risk: "Medium", type: "Compliance" },
    { name: "Partnership_MOU.pdf", date: "1 day ago", risk: "High", type: "Agreement" },
    { name: "Service_Terms.pdf", date: "2 days ago", risk: "Low", type: "Terms" }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">AI-Powered Document Analysis</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform your legal document review process with cutting-edge AI technology. 
              Get instant insights, risk assessments, and actionable recommendations.
            </p>
          </div>

          {/* Main Upload Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">
              {!uploadedFile ? (
                <div
                  className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                    dragActive 
                      ? 'border-blue-400 bg-blue-500/10 scale-105' 
                      : 'border-slate-600 hover:border-slate-500 hover:bg-slate-800/50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-20 h-20 text-slate-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-3">
                    Drop your document here
                  </h3>
                  <p className="text-slate-400 mb-6 text-lg">
                    or click to browse your files
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Choose File
                  </button>
                  <p className="text-slate-500 text-sm mt-6">
                    Supports PDF, Word documents, and text files • Maximum size: 10MB • 256-bit encryption
                  </p>
                </div>
              ) : (
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-600">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{uploadedFile.name}</h4>
                        <p className="text-slate-400">
                          {formatFileSize(uploadedFile.size)} • {uploadedFile.type.split('/')[1].toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={removeFile}
                      className="text-slate-400 hover:text-red-400 transition-colors p-2"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <button
                    onClick={analyzeDocument}
                    disabled={isAnalyzing}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white py-4 px-6 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-3"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Analyzing Document...
                      </>
                    ) : (
                      <>
                        <Eye className="w-5 h-5" />
                        Analyze Document
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-red-400">{error}</p>
                </div>
              )}

              {/* Loading State */}
              {isAnalyzing && (
                <div className="mt-8 bg-slate-800/50 rounded-xl p-8 text-center border border-slate-600">
                  <div className="flex items-center justify-center mb-4">
                    <Loader className="w-8 h-8 text-blue-500 animate-spin mr-3" />
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">Analyzing Your Document</h3>
                      <p className="text-slate-400">Processing legal clauses and identifying key risks...</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 mt-4">
                    <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '65%' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Analysis Results */}
            {analysisResult && (
              <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                  <h2 className="text-2xl font-bold text-white">Analysis Complete</h2>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6 mb-6">
                  <div className="text-slate-200 leading-relaxed whitespace-pre-line text-sm">
                    {analysisResult}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Schedule Consultation
                  </button>
                  <button className="border border-slate-500 hover:border-slate-400 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Discuss with AI
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

            <div className="border-t border-white/20 mx-0.5 my-0.4"></div>
            
      {/* Features Section */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Analysis?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Advanced technology meets legal expertise to deliver unparalleled document insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl bg-slate-700/50 hover:bg-slate-700 transition-colors duration-200 border border-slate-600">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
              <div className="border-t border-white/20 mx-0.5 my-0.4"></div>
      {/* Analysis Types */}
      <div className="py-20 bg-blue-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Document Types We Analyze</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI is trained on thousands of legal documents across various practice areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {analysisTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-600 hover:bg-slate-750 transition-colors duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-500">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.type}</h3>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* Recent Analyses */}
      <div className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Recent Analyses</h2>
            <div className="bg-slate-700 rounded-xl p-6 border border-slate-600">
              <div className="space-y-4">
                {recentAnalyses.map((analysis, index) => (
                  <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-600 flex items-center justify-between hover:bg-slate-750 transition-colors">
                    <div className="flex items-center gap-4">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <div>
                        <h4 className="font-semibold text-white">{analysis.name}</h4>
                        <p className="text-sm text-slate-300">{analysis.date} • {analysis.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        analysis.risk === 'Low' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        analysis.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {analysis.risk} Risk
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mx-0.5 my-0.4"></div>

      {/* CTA Section */}
      {/* <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Legal Workflow?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of legal professionals who trust our AI-powered analysis for faster, more accurate document review.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DocumentAnalyzer;