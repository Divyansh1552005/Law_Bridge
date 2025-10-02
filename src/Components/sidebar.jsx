import React, { useState } from 'react';
import { Search, MessageSquarePlus, Menu, X, ChevronLeft, Scale, Trash2, Archive } from 'lucide-react';
// TODO: Import API service when backend is ready
// import { chatHistoryAPI } from '../services/api';

function ChatSidebar({ onNewChat, onSelectChat, currentChatId }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // TODO: Replace with actual data from database
  // const [chats, setChats] = useState([]);
  // const [loading, setLoading] = useState(true);

  // TEMPORARY: Sample legal chat history - replace with actual database calls
  const [chats] = useState([
    { 
      id: 1, 
      title: 'Employment Contract Review', 
      preview: 'Can you help me understand the non-compete clause...', 
      date: 'Today',
      timestamp: '2:30 PM',
      messageCount: 12
    },
    { 
      id: 2, 
      title: 'Tenant Rights Question', 
      preview: 'My landlord is asking me to move out without proper notice...', 
      date: 'Today',
      timestamp: '11:45 AM',
      messageCount: 8
    },
    { 
      id: 3, 
      title: 'Business Formation Advice', 
      preview: 'What are the differences between LLC and Corporation...', 
      date: 'Yesterday',
      timestamp: '4:15 PM',
      messageCount: 15
    },
    { 
      id: 4, 
      title: 'NDA Document Analysis', 
      preview: 'I need help reviewing this non-disclosure agreement...', 
      date: 'Yesterday',
      timestamp: '1:20 PM',
      messageCount: 6
    },
    { 
      id: 5, 
      title: 'Divorce Proceedings Help', 
      preview: 'What should I expect during the divorce process...', 
      date: 'Last Week',
      timestamp: 'Oct 25',
      messageCount: 23
    },
    { 
      id: 6, 
      title: 'Small Claims Court Guidance', 
      preview: 'How do I file a small claims case for unpaid invoices...', 
      date: 'Last Week',
      timestamp: 'Oct 23',
      messageCount: 9
    },
    { 
      id: 7, 
      title: 'Copyright Infringement Issue', 
      preview: 'Someone is using my copyrighted material without permission...', 
      date: 'Last Month',
      timestamp: 'Sep 15',
      messageCount: 18
    },
  ]);

  // TODO: Implement database integration functions
  // useEffect(() => {
  //   fetchChatHistory();
  // }, []);
  
  // const fetchChatHistory = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await chatHistoryAPI.getUserChatHistory({
  //       userId: localStorage.getItem('userId'),
  //       limit: 50,
  //       orderBy: 'updated_at',
  //       order: 'DESC'
  //     });
  //     setChats(response.data.chats);
  //   } catch (error) {
  //     console.error('Error fetching chat history:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  // const handleDeleteChat = async (chatId) => {
  //   try {
  //     await chatHistoryAPI.deleteChat(chatId);
  //     setChats(prev => prev.filter(chat => chat.id !== chatId));
  //   } catch (error) {
  //     console.error('Error deleting chat:', error);
  //   }
  // };
  
  // const handleArchiveChat = async (chatId) => {
  //   try {
  //     await chatHistoryAPI.archiveChat(chatId);
  //     // Refresh chat list
  //     fetchChatHistory();
  //   } catch (error) {
  //     console.error('Error archiving chat:', error);
  //   }
  // };

  const filteredChats = chats.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedChats = filteredChats.reduce((acc, chat) => {
    if (!acc[chat.date]) acc[chat.date] = [];
    acc[chat.date].push(chat);
    return acc;
  }, {});

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-screen bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 text-white z-40
          transition-all duration-300 ease-in-out flex flex-col
          ${isCollapsed ? 'w-16' : 'w-80'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-slate-700/50">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg text-white">Law Bridge AI</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors hidden lg:block"
          >
            <ChevronLeft size={20} className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* New Chat Button */}
        <div className="p-4">
          <button 
            onClick={onNewChat}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg p-3 flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <MessageSquarePlus size={20} />
            {!isCollapsed && <span className="font-medium">New Legal Chat</span>}
          </button>
        </div>

        {/* Search Bar */}
        {!isCollapsed && (
          <div className="px-4 pb-4">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search legal chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-600/50 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        )}

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {!isCollapsed ? (
            Object.keys(groupedChats).length > 0 ? (
              Object.entries(groupedChats).map(([date, chatsInGroup]) => (
                <div key={date} className="mb-4">
                  <h3 className="text-xs font-semibold text-slate-400 mb-2 px-2">{date}</h3>
                  <div className="space-y-1">
                    {chatsInGroup.map((chat) => (
                      <button
                        key={chat.id}
                        onClick={() => onSelectChat && onSelectChat(chat.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 group relative ${
                          currentChatId === chat.id 
                            ? 'bg-blue-600/20 border border-blue-500/30' 
                            : 'hover:bg-slate-800/50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Scale size={16} className="mt-1 flex-shrink-0 text-blue-400" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-sm font-medium truncate ${
                                currentChatId === chat.id ? 'text-blue-300' : 'text-slate-200'
                              }`}>
                                {chat.title}
                              </span>
                              <span className="text-xs text-slate-400 flex-shrink-0 ml-2">
                                {chat.timestamp}
                              </span>
                            </div>
                            <p className={`text-xs line-clamp-2 ${
                              currentChatId === chat.id ? 'text-blue-200/80' : 'text-slate-400'
                            }`}>
                              {chat.preview}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-slate-500">
                                {chat.messageCount} messages
                              </span>
                              {/* TODO: Add action buttons for delete/archive */}
                              {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleArchiveChat(chat.id);
                                  }}
                                  className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-slate-300"
                                >
                                  <Archive size={12} />
                                </button>
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteChat(chat.id);
                                  }}
                                  className="p-1 hover:bg-red-600/20 rounded text-slate-400 hover:text-red-400"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-slate-500 mt-8">
                <Scale className="w-12 h-12 mx-auto mb-3 text-slate-600" />
                <p className="text-sm mb-2">No legal chats found</p>
                <p className="text-xs text-slate-600">Start a new conversation to get legal assistance</p>
              </div>
            )
          ) : (
            <div className="space-y-2">
              {filteredChats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => onSelectChat && onSelectChat(chat.id)}
                  className={`w-full p-3 rounded-lg transition-colors flex justify-center ${
                    currentChatId === chat.id ? 'bg-blue-600/20' : 'hover:bg-slate-800/50'
                  }`}
                  title={chat.title}
                >
                  <Scale size={20} className="text-blue-400" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-slate-700/50">
            <div className="text-xs text-slate-500 text-center">
              © 2025 Law Bridge AI
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChatSidebar;