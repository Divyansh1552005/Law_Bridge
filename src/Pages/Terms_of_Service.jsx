import React from 'react';
import { Calendar, FileText, MessageCircle, Video, Scale, Shield, Clock, Users } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = "January 15, 2025";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Scale className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Please read these terms carefully before using our legal platform services.
          </p>
          <div className="mt-4 flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              1. Agreement to Terms
            </h2>
            <div className="prose text-gray-700 space-y-4">
              <p>
                By accessing and using this legal platform (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") constitute a legally binding agreement made between you and our company regarding your use of the Service.
              </p>
              <p>
                If you do not agree to abide by the above, please do not use this Service. Our Service provides access to legal information, document analysis, chatbot assistance, lawyer consultation scheduling, and educational resources.
              </p>
            </div>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              2. Description of Services
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Blog Section</h3>
                </div>
                <p className="text-gray-700">
                  Access to legal articles, stories, and educational content hosted on our platform to help users understand various legal concepts and recent developments in law.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center mb-2">
                  <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">AI Chatbot Services</h3>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Document Analysis:</strong> Upload PDF documents, terms and conditions, or agreements for AI-powered explanation and summarization.</p>
                  <p><strong>Legal Chat Assistant:</strong> Interactive chatbot providing general legal information and guidance on various legal topics.</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Lawyer Consultation Scheduling</h3>
                </div>
                <p className="text-gray-700">
                  Schedule appointments with qualified legal professionals for personalized legal advice and consultation services.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <div className="flex items-center mb-2">
                  <Video className="h-5 w-5 text-orange-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Educational Resources</h3>
                </div>
                <p className="text-gray-700">
                  Access to curated video content and educational materials covering various areas of law and legal procedures.
                </p>
              </div>
            </div>
          </section>

          {/* Important Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Important Legal Disclaimers</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-amber-500 rounded-full p-1 mt-1">
                  <span className="text-white text-xs font-bold px-1">!</span>
                </div>
                <div className="text-amber-800 space-y-3">
                  <p className="font-semibold">No Attorney-Client Relationship</p>
                  <p>
                    Use of this Service does not create an attorney-client relationship between you and our company or any lawyers associated with our platform, except where explicitly established through formal consultation agreements.
                  </p>
                  <p className="font-semibold">Not Legal Advice</p>
                  <p>
                    The information provided through our AI chatbot, document analysis, blog content, and educational resources is for informational purposes only and does not constitute legal advice. AI-generated content should not be relied upon as a substitute for consultation with qualified legal counsel.
                  </p>
                  <p className="font-semibold">Jurisdiction Limitations</p>
                  <p>
                    Legal information provided may not be applicable in all jurisdictions. Laws vary by location, and you should consult with local legal professionals for advice specific to your jurisdiction and circumstances.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities and Prohibited Uses</h2>
            <div className="text-gray-700 space-y-4">
              <p><strong>You agree to:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and truthful information when using our services</li>
                <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Maintain the confidentiality of any login credentials</li>
              </ul>
              
              <p className="pt-4"><strong>You agree NOT to:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upload documents containing privileged, confidential, or sensitive personal information without proper authorization</li>
                <li>Use the Service to engage in any illegal activity or solicit others to engage in illegal activities</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                <li>Use automated systems to access the Service without permission</li>
              </ul>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy and Data Handling</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We take your privacy seriously. When you upload documents for analysis or interact with our chatbot, we implement appropriate security measures to protect your information.
              </p>
              <p>
                <strong>Document Uploads:</strong> Documents uploaded for analysis are processed securely and are not permanently stored unless necessary for service delivery. We recommend removing sensitive personal information before uploading.
              </p>
              <p>
                <strong>Chat Interactions:</strong> Conversations with our AI chatbot may be logged for quality improvement purposes. Do not share sensitive personal information in chat interactions.
              </p>
              <p>
                For detailed information about our data practices, please review our Privacy Policy.
              </p>
            </div>
          </section>

          {/* Consultation Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Lawyer Consultation Services</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                When you schedule a consultation with a lawyer through our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A separate attorney-client relationship may be established directly between you and the consulting lawyer</li>
                <li>Consultation fees and terms are set by individual lawyers and communicated during the scheduling process</li>
                <li>Our platform facilitates the connection but does not control the legal services provided</li>
                <li>Cancellation and rescheduling policies apply as communicated during booking</li>
              </ul>
            </div>
          </section>

          {/* Limitations */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitations of Liability</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                To the maximum extent permitted by law, our company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising from your use of the Service.
              </p>
              <p>
                We do not guarantee the accuracy, completeness, or reliability of AI-generated content or analysis. Users should independently verify information and seek professional legal advice for specific legal matters.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modifications to Terms</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page with an updated "Last Modified" date. Your continued use of the Service after such changes constitutes acceptance of the modified Terms.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We may terminate or suspend your access to the Service immediately, without prior notice, if you breach these Terms or engage in prohibited conduct. You may also terminate your use of the Service at any time by discontinuing access.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-gray-600 space-y-2">
                <p>Email: legal@yourplatform.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: [Your Business Address]</p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2025 Legal Platform. All rights reserved.</p>
          <p className="mt-2">These terms are effective as of {lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;