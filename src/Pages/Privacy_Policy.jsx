import React from 'react';
import { Shield, Eye, Lock, FileText, MessageCircle, Calendar, Video, Database, Users, Globe, Clock, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2025";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
              <Eye className="h-6 w-6 text-indigo-600 mr-2" />
              1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Database className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-900">Personal Information</h3>
                </div>
                <p className="text-blue-800 mb-3">We may collect the following personal information when you use our services:</p>
                <ul className="list-disc pl-6 space-y-2 text-blue-800">
                  <li><strong>Account Information:</strong> Name, email address, phone number when you create an account</li>
                  <li><strong>Consultation Booking:</strong> Contact details, legal matter descriptions, preferred appointment times</li>
                  <li><strong>Communication Records:</strong> Messages, emails, and support interactions</li>
                  <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely by third-party providers)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center mb-2">
                    <FileText className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Document Upload Data</h3>
                  </div>
                  <p className="text-gray-700">
                    When you upload PDFs, contracts, or legal documents for analysis, we temporarily process the content to provide summaries and explanations. We recommend removing sensitive personal information before uploading.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center mb-2">
                    <MessageCircle className="h-5 w-5 text-purple-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Chatbot Interactions</h3>
                  </div>
                  <p className="text-gray-700">
                    Conversations with our AI legal assistant, including questions asked and responses provided, may be logged for service improvement and quality assurance.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Globe className="h-5 w-5 text-orange-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-800">Usage and Technical Data</h3>
                  </div>
                  <p className="text-gray-700">
                    IP address, browser type, device information, pages visited, time spent on pages, and other analytics data to improve our services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-6 w-6 text-indigo-600 mr-2" />
              2. How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
                  Service Delivery
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Process and analyze uploaded documents</li>
                  <li>Provide AI-powered legal information and guidance</li>
                  <li>Schedule and manage lawyer consultations</li>
                  <li>Deliver educational content and resources</li>
                  <li>Send service-related communications</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Video className="h-5 w-5 text-indigo-600 mr-2" />
                  Platform Improvement
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Improve AI chatbot accuracy and responses</li>
                  <li>Develop new features and services</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Conduct research and analytics</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Lock className="h-6 w-6 text-indigo-600 mr-2" />
              3. Data Security and Protection
            </h2>
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Security Measures</h3>
                <div className="grid md:grid-cols-2 gap-4 text-green-800">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Safeguards:</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Secure cloud storage with encryption at rest</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Access controls and authentication measures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operational Safeguards:</h4>
                    <ul className="list-disc pl-4 space-y-1 text-sm">
                      <li>Limited access to personal data on need-to-know basis</li>
                      <li>Employee training on privacy and security practices</li>
                      <li>Incident response procedures</li>
                      <li>Regular data backup and recovery procedures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">Document Upload Security</h3>
                    <p className="text-amber-800 mb-3">
                      When uploading documents for analysis:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-amber-800 text-sm">
                      <li>Documents are processed in secure, isolated environments</li>
                      <li>Temporary processing - documents are not permanently stored unless necessary</li>
                      <li>Automatic deletion of processed documents after analysis completion</li>
                      <li>We recommend redacting sensitive personal information before upload</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <div className="space-y-6">
              <div className="text-gray-700">
                <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              </div>

              <div className="grid gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                  <p className="text-gray-700 text-sm">
                    With trusted third-party service providers who assist in operating our platform (hosting, payment processing, analytics) under strict confidentiality agreements.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Professionals</h3>
                  <p className="text-gray-700 text-sm">
                    When you schedule consultations, necessary contact information is shared with the consulting lawyer to facilitate the appointment.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance</h3>
                  <p className="text-gray-700 text-sm">
                    When required by law, court order, or government request, or to protect our rights, property, or safety.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Business Transfer</h3>
                  <p className="text-gray-700 text-sm">
                    In connection with any merger, sale of assets, or acquisition, user information may be transferred as part of that transaction.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Retention Periods</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Account Information:</strong> Until account deletion</li>
                      <li><strong>Uploaded Documents:</strong> Deleted after processing (typically 24-48 hours)</li>
                      <li><strong>Chat Logs:</strong> Retained for service improvement (anonymized after 12 months)</li>
                      <li><strong>Consultation Records:</strong> As required by legal professionals</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Deletion Process</h3>
                    <p className="text-sm">
                      We automatically delete personal data when it's no longer needed for the purposes it was collected. You can request deletion of your account and associated data at any time through our support channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibent text-gray-900 mb-4">6. Your Privacy Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">You Have the Right To:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="bg-indigo-100 rounded-full p-1 mt-1">
                      <Eye className="h-3 w-3 text-indigo-600" />
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Access:</strong> Request a copy of the personal information we have about you
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-indigo-100 rounded-full p-1 mt-1">
                      <FileText className="h-3 w-3 text-indigo-600" />
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-indigo-100 rounded-full p-1 mt-1">
                      <Lock className="h-3 w-3 text-indigo-600" />
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Deletion:</strong> Request deletion of your personal information
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-indigo-100 rounded-full p-1 mt-1">
                      <Shield className="h-3 w-3 text-indigo-600" />
                    </div>
                    <div className="text-sm text-gray-700">
                      <strong>Portability:</strong> Request transfer of your data in a portable format
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">How to Exercise Your Rights:</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.
                  </p>
                  <p className="text-sm text-gray-600">
                    We may need to verify your identity before processing certain requests to protect your privacy and security.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our platform:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Essential Cookies</h3>
                  <p className="text-xs text-gray-600">
                    Required for basic site functionality, authentication, and security features.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Analytics Cookies</h3>
                  <p className="text-xs text-gray-600">
                    Help us understand how users interact with our platform to improve services.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">Preference Cookies</h3>
                  <p className="text-xs text-gray-600">
                    Remember your settings and preferences for a personalized experience.
                  </p>
                </div>
              </div>
              <p className="text-sm">
                You can control cookie preferences through your browser settings, though disabling certain cookies may affect site functionality.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-800">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
              </p>
            </div>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Data Transfers</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Our services may involve transferring your personal information to countries other than your own. When we transfer personal information internationally, we ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <p className="text-indigo-800 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-indigo-700">
                <div>
                  <h3 className="font-semibold mb-2">General Inquiries:</h3>
                  <p className="text-sm">Email: privacy@yourplatform.com</p>
                  <p className="text-sm">Phone: +1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Protection Officer:</h3>
                  <p className="text-sm">Email: dpo@yourplatform.com</p>
                  <p className="text-sm">Address: [Your Business Address]</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2025 Legal Platform. All rights reserved.</p>
          <p className="mt-2">This privacy policy is effective as of {lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;