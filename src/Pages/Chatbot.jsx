import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RotateCcw, Plus } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI legal assistant. I can help you with legal questions, document analysis, contract review, and general legal guidance. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    // TODO: Remove auto-scroll or make it optional
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Disabled auto-scroll to prevent page jumping after sending messages
    // scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    // TODO: Connect with backend API here
    // Replace this mock response with actual API call
    // Example API integration:
    // try {
    //   const response = await fetch('/api/chat/legal-assistant', {
    //     method: 'POST',
    //     headers: { 
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${userToken}` // TODO: Add user authentication
    //     },
    //     body: JSON.stringify({ 
    //       message: currentInput,
    //       conversationHistory: messages,
    //       userId: user.id, // TODO: Get from auth context
    //       sessionId: chatSession.id // TODO: Implement session management
    //     })
    //   });
    //   const data = await response.json();
    //   
    //   if (response.ok) {
    //     const botResponse = {
    //       id: Date.now() + 1,
    //       text: data.response,
    //       sender: 'bot',
    //       timestamp: new Date()
    //     };
    //     setMessages(prev => [...prev, botResponse]);
    //   } else {
    //     // TODO: Handle API errors appropriately
    //     throw new Error(data.message || 'Failed to get response');
    //   }
    // } catch (error) {
    //   console.error('Chat API error:', error);
    //   // TODO: Show user-friendly error message
    //   const errorResponse = {
    //     id: Date.now() + 1,
    //     text: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
    //     sender: 'bot',
    //     timestamp: new Date()
    //   };
    //   setMessages(prev => [...prev, errorResponse]);
    // } finally {
    //   setIsTyping(false);
    // }

    // Temporary mock response for UI demonstration - REMOVE when backend is connected
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your question. This is a placeholder response. In the actual implementation, this would be replaced with AI-generated legal assistance based on your specific query. I can help with contract analysis, legal document review, employment law questions, business formation guidance, and much more.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleNewChat = () => {
    // TODO: Save current conversation to database before clearing
    // Example: await saveConversation(messages, sessionId);
    
    // TODO: Generate new session ID for the new chat
    // const newSessionId = generateSessionId();
    
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your AI legal assistant. I can help you with legal questions, document analysis, contract review, and general legal guidance. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    
    // TODO: Update session ID in state/context
    // setCurrentSessionId(newSessionId);
  };

  const suggestedPrompts = [
    "Help me understand this contract clause",
    "What should I include in an NDA?",
    "Explain employment law basics",
    "Review this legal document"
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Main Chat Area - Full Width */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 min-h-0">
        {/* Messages - WhatsApp style layout */}
        <div className="flex-1 overflow-y-auto min-h-0 p-4 bg-slate-900/50">
          {messages.length === 1 && !isTyping && (
            <div className="flex flex-col items-center justify-start pt-8 h-full">
              <div className="max-w-lg mx-auto text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-semibold text-white mb-2">AI Legal Assistant</h1>
                <p className="text-slate-300 mb-6">Ready to help with your legal questions</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3 max-w-md w-full">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(prompt)}
                    className="p-3 text-left border border-slate-600 rounded-xl hover:bg-slate-700/50 hover:border-slate-500 transition-colors bg-slate-800/50 backdrop-blur"
                  >
                    <div className="text-slate-200 text-sm">{prompt}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.length > 1 && (
            <div className="max-w-4xl mx-auto space-y-4 pb-4">
              {messages.slice(1).map((message, index) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {/* WhatsApp-style message bubbles */}
                  <div className={`max-w-[75%] ${message.sender === 'user' ? 'ml-12' : 'mr-12'}`}>
                    <div className={`flex items-end gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-br from-blue-600 to-blue-700' 
                          : 'bg-gradient-to-br from-green-600 to-green-700'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>

                      {/* Message bubble */}
                      <div className={`relative px-4 py-2 rounded-2xl shadow-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-md'
                          : 'bg-slate-700 text-slate-100 rounded-bl-md border border-slate-600'
                      }`}>
                        <p className="text-sm leading-relaxed break-words">{message.text}</p>
                        <div className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                        
                        {/* WhatsApp-style tail */}
                        {message.sender === 'user' ? (
                          <div className="absolute -bottom-0 -right-0 w-0 h-0 border-l-8 border-l-blue-600 border-t-8 border-t-transparent"></div>
                        ) : (
                          <div className="absolute -bottom-0 -left-0 w-0 h-0 border-r-8 border-r-slate-700 border-t-8 border-t-transparent"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator - WhatsApp style */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[75%] mr-12">
                    <div className="flex items-end gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="relative bg-slate-700 border border-slate-600 rounded-2xl rounded-bl-md px-4 py-3 shadow-lg">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        {/* Typing indicator tail */}
                        <div className="absolute -bottom-0 -left-0 w-0 h-0 border-r-8 border-r-slate-700 border-t-8 border-t-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area - BACK AT BOTTOM but always visible */}
        <div className="flex-shrink-0 border-t border-slate-700 bg-slate-800/90 backdrop-blur-sm sticky bottom-0">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your legal question here..."
                className="w-full resize-none border border-slate-600 rounded-2xl px-4 py-3 pr-12 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 bg-slate-700 text-white placeholder-slate-400"
                rows="1"
                style={{ minHeight: '52px', maxHeight: '120px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="absolute right-2 bottom-2 p-2.5 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
              Press Enter to send • Your conversations are secure
            </p>
          </div>
          
          {/* Legal Disclaimer Section */}
          <div className="border-t border-slate-700/50 bg-slate-900/50 px-4 py-6">
            <div className="max-w-4xl mx-auto text-center space-y-3">
              <p className="text-sm text-slate-400">
                <span className="text-amber-400 font-medium">⚖️ Legal Disclaimer:</span> This AI assistant provides general legal information for educational purposes only. 
                It is not a substitute for professional legal advice and does not create an attorney-client relationship.
              </p>
              <p className="text-xs text-slate-500">
                Always consult with a qualified attorney for specific legal matters. Laws vary by jurisdiction and individual circumstances.
              </p>
              <div className="flex items-center justify-center gap-6 mt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  🔒 Secure & Confidential
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  ⚡ Powered by Law Bridge AI
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  📚 Educational Use Only
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;