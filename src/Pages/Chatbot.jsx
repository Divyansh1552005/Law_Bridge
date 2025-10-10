import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ChatSidebar from '../Components/sidebar';
import legalLogo from '../assets/legal_logo2.png';
// TODO: Import API service when backend is ready
// import { chatbotAPI, chatHistoryAPI } from '../services/api';

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
  const [currentChatId, setCurrentChatId] = useState(null);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // TODO: Add state for chat management
  // const [chatSessions, setChatSessions] = useState({});
  // const [activeChatId, setActiveChatId] = useState(null);

  useEffect(() => {}, [messages]);

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

    // TODO: Replace with actual backend API call and save to database
    // try {
    //   const response = await chatbotAPI.sendMessage({
    //     message: currentInput,
    //     chatId: currentChatId,
    //     sessionId: sessionStorage.getItem('chatSessionId') || null,
    //     userId: localStorage.getItem('userId') || null
    //   });
    //   
    //   const botResponse = {
    //     id: response.data.messageId,
    //     text: response.data.message,
    //     sender: 'bot',
    //     timestamp: new Date(response.data.timestamp)
    //   };
    //   setMessages(prev => [...prev, botResponse]);
    //   
    //   // Save chat to database if it's a new chat
    //   if (!currentChatId && response.data.chatId) {
    //     setCurrentChatId(response.data.chatId);
    //     // Update chat title based on first user message
    //     await chatHistoryAPI.updateChatTitle(response.data.chatId, {
    //       title: currentInput.slice(0, 50) + (currentInput.length > 50 ? '...' : '')
    //     });
    //   }
    //   
    //   // Store session ID for conversation continuity
    //   if (response.data.sessionId) {
    //     sessionStorage.setItem('chatSessionId', response.data.sessionId);
    //   }
    // } catch (error) {
    //   console.error('Error sending message:', error);
    //   const errorResponse = {
    //     id: Date.now() + 1,
    //     text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
    //     sender: 'bot',
    //     timestamp: new Date()
    //   };
    //   setMessages(prev => [...prev, errorResponse]);
    // } finally {
    //   setIsTyping(false);
    // }

    // TEMPORARY: Mock response (remove when backend is ready)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your legal question. This is a placeholder response. In the actual implementation, this would be replaced with AI-generated legal assistance based on your specific query. I can help with contract analysis, legal document review, employment law questions, business formation guidance, and much more.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // TODO: Auto-generate chat title and save to database
      if (!currentChatId) {
        const newChatId = Date.now(); // Mock chat ID
        setCurrentChatId(newChatId);
      }
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
    // TODO: Implement new chat creation with database
    // const newChatId = await chatHistoryAPI.createNewChat({
    //   userId: localStorage.getItem('userId'),
    //   title: 'New Legal Consultation',
    //   timestamp: new Date().toISOString()
    // });
    // setCurrentChatId(newChatId);
    
    // Reset to initial state for new chat
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your AI legal assistant. I can help you with legal questions, document analysis, contract review, and general legal guidance. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setCurrentChatId(null);
  };

  const handleSelectChat = async (chatId) => {
    // TODO: Implement chat loading from database
    // try {
    //   const chatData = await chatHistoryAPI.getChatMessages(chatId);
    //   setMessages(chatData.messages);
    //   setCurrentChatId(chatId);
    // } catch (error) {
    //   console.error('Error loading chat:', error);
    // }
    
    // TEMPORARY: Mock chat selection
    console.log('Selected chat ID:', chatId);
    setCurrentChatId(chatId);
  };

  const suggestedPrompts = [
    "Help me understand this contract clause",
    "What should I include in an NDA?",
    "Explain employment law basics",
    "Review this legal document"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      {/* Sidebar */}
      <ChatSidebar 
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        currentChatId={currentChatId}
      />
      
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-800 to-slate-900 min-h-0">
        <div className="flex-1 overflow-y-auto min-h-0 px-3 sm:px-6 py-4 sm:py-8 bg-slate-900/50">
          {messages.length === 1 && !isTyping && (
            <div className="flex flex-col items-center justify-center min-h-full px-2 sm:px-4">
              <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
                <button 
                  onClick={() => navigate('/')}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer group"
                >
                  <img 
                    src={legalLogo} 
                    alt="Law Bridge Logo" 
                    className="w-full h-full object-contain group-hover:opacity-90 transition-opacity duration-300"
                  />
                </button>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Legal Assistant
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-2">
                  Ready to help with your legal questions and provide expert guidance
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl w-full">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(prompt)}
                    className="p-4 sm:p-6 text-left border border-slate-600 rounded-xl sm:rounded-2xl hover:bg-slate-700/50 hover:border-slate-500 transition-all duration-300 bg-slate-800/50 backdrop-blur hover:scale-105 hover:shadow-xl"
                  >
                    <div className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed">{prompt}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.length > 1 && (
            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-8 pb-4 sm:pb-8">
              {messages.slice(1).map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] sm:max-w-[80%] ${message.sender === 'user' ? 'mr-4 sm:mr-16' : 'ml-4 sm:ml-16'}`}>
                    <div className={`flex items-end gap-2 sm:gap-4 ${message.sender === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg ${
                        message.sender === 'user' 
                          ? 'bg-gradient-to-br from-green-600 to-green-700' 
                          : 'bg-gradient-to-br from-blue-600 to-blue-700'
                      }`}>
                        {message.sender === 'user' ? (
                          <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        )}
                      </div>
                      <div className={`relative px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-slate-700 to-slate-800 text-slate-100 rounded-bl-lg border border-slate-600'
                          : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-lg'
                      }`}>
                        <p className="text-sm sm:text-base leading-relaxed break-words">{message.text}</p>
                        <div className={`text-xs sm:text-sm mt-1 sm:mt-2 ${
                          message.sender === 'user' ? 'text-slate-400' : 'text-blue-100'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                        {message.sender === 'user' ? (
                          <div className="absolute -bottom-0 -left-0 w-0 h-0 border-r-10 border-r-slate-800 border-t-10 border-t-transparent"></div>
                        ) : (
                          <div className="absolute -bottom-0 -right-0 w-0 h-0 border-l-10 border-l-blue-700 border-t-10 border-t-transparent"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-end">
                  <div className="max-w-[80%] ml-16">
                    <div className="flex items-end gap-4 flex-row-reverse">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl rounded-br-lg px-6 py-4 shadow-xl">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-200 rounded-full animate-bounce"></div>
                          <div className="w-3 h-3 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-3 h-3 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <div className="absolute -bottom-0 -right-0 w-0 h-0 border-l-10 border-l-blue-700 border-t-10 border-t-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="flex-shrink-0 border-t border-slate-700 bg-slate-800/90 backdrop-blur-sm sticky bottom-0">
          <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your legal question here..."
                className="w-full resize-none border border-slate-600 rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-3 sm:py-4 pr-12 sm:pr-16 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 bg-slate-700 text-white placeholder-slate-400 text-sm sm:text-base shadow-xl"
                rows="1"
                style={{ minHeight: '50px', maxHeight: '120px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="absolute right-2 sm:right-3 bottom-2 sm:bottom-3 p-2 sm:p-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-xl sm:rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-3 text-center">
              Press Enter to send • Your conversations are secure and confidential
            </p>
          </div>
          
          <div className="border-t border-slate-700/50 bg-slate-900/50 px-3 sm:px-6 py-6 sm:py-8">
            <div className="max-w-5xl mx-auto text-center space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed px-2">
                <span className="text-amber-400 font-semibold">⚖️ Legal Disclaimer:</span> This AI assistant provides general legal information for educational purposes only. 
                It is not a substitute for professional legal advice and does not create an attorney-client relationship.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-3xl mx-auto px-2">
                Always consult with a qualified attorney for specific legal matters. Laws vary by jurisdiction and individual circumstances.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 mt-4 sm:mt-6 text-xs sm:text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  🔒 Secure & Confidential
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center gap-2">
                  ⚡ Powered by Law Bridge AI
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center gap-2">
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