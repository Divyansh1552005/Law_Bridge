// TODO: API Service for Backend Integration
// This file will contain all API calls to the backend
// Base URL will be configured based on environment (development/production)

// TODO: Install axios for HTTP requests
// npm install axios

// import axios from 'axios';

// Base API configuration
// const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// Request interceptor to add auth token
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response interceptor for error handling
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Handle unauthorized access
//       localStorage.removeItem('authToken');
//       localStorage.removeItem('userId');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// ========================================
// AUTHENTICATION API
// ========================================
export const authAPI = {
  // User registration
  // register: async (userData) => {
  //   return await apiClient.post('/auth/register', userData);
  // },

  // User login
  // login: async (credentials) => {
  //   return await apiClient.post('/auth/login', credentials);
  // },

  // User logout
  // logout: async () => {
  //   return await apiClient.post('/auth/logout');
  // },

  // Refresh token
  // refreshToken: async () => {
  //   return await apiClient.post('/auth/refresh');
  // },

  // Get user profile
  // getProfile: async () => {
  //   return await apiClient.get('/auth/profile');
  // },

  // Update user profile
  // updateProfile: async (profileData) => {
  //   return await apiClient.put('/auth/profile', profileData);
  // },

  // Change password
  // changePassword: async (passwordData) => {
  //   return await apiClient.put('/auth/change-password', passwordData);
  // },

  // Reset password request
  // requestPasswordReset: async (email) => {
  //   return await apiClient.post('/auth/forgot-password', { email });
  // },

  // Reset password
  // resetPassword: async (resetData) => {
  //   return await apiClient.post('/auth/reset-password', resetData);
  // },
};

// ========================================
// CHATBOT API
// ========================================
export const chatbotAPI = {
  // Send message to chatbot
  // sendMessage: async (messageData) => {
  //   return await apiClient.post('/chatbot/message', messageData);
  // },

  // Get chat history
  // getChatHistory: async (sessionId) => {
  //   return await apiClient.get(`/chatbot/history/${sessionId}`);
  // },

  // Start new chat session
  // startSession: async (userId) => {
  //   return await apiClient.post('/chatbot/session', { userId });
  // },

  // End chat session
  // endSession: async (sessionId) => {
  //   return await apiClient.delete(`/chatbot/session/${sessionId}`);
  // },

  // Get chat analytics
  // getAnalytics: async (userId) => {
  //   return await apiClient.get(`/chatbot/analytics/${userId}`);
  // },
};

// ========================================
// DOCUMENT ANALYZER API
// ========================================
export const documentAPI = {
  // Upload and analyze document
  // analyzeDocument: async (formData) => {
  //   return await apiClient.post('/documents/analyze', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  // },

  // Get analysis history
  // getAnalysisHistory: async (userId) => {
  //   return await apiClient.get(`/documents/history/${userId}`);
  // },

  // Get specific analysis
  // getAnalysis: async (analysisId) => {
  //   return await apiClient.get(`/documents/analysis/${analysisId}`);
  // },

  // Delete analysis
  // deleteAnalysis: async (analysisId) => {
  //   return await apiClient.delete(`/documents/analysis/${analysisId}`);
  // },

  // Share analysis
  // shareAnalysis: async (analysisId, shareData) => {
  //   return await apiClient.post(`/documents/analysis/${analysisId}/share`, shareData);
  // },

  // Download analysis report
  // downloadReport: async (analysisId, format = 'pdf') => {
  //   return await apiClient.get(`/documents/analysis/${analysisId}/download`, {
  //     params: { format },
  //     responseType: 'blob',
  //   });
  // },
};

// ========================================
// LAWYER/BOOKING API
// ========================================
export const lawyerAPI = {
  // Get all lawyers
  // getLawyers: async (filters = {}) => {
  //   return await apiClient.get('/lawyers', { params: filters });
  // },

  // Get lawyer by ID
  // getLawyer: async (lawyerId) => {
  //   return await apiClient.get(`/lawyers/${lawyerId}`);
  // },

  // Get lawyer availability
  // getAvailability: async (lawyerId, date) => {
  //   return await apiClient.get(`/lawyers/${lawyerId}/availability`, {
  //     params: { date },
  //   });
  // },

  // Search lawyers
  // searchLawyers: async (query, filters = {}) => {
  //   return await apiClient.get('/lawyers/search', {
  //     params: { q: query, ...filters },
  //   });
  // },
};

export const bookingAPI = {
  // Create new booking
  // createBooking: async (bookingData) => {
  //   return await apiClient.post('/bookings', bookingData);
  // },

  // Get user bookings
  // getUserBookings: async (userId) => {
  //   return await apiClient.get(`/bookings/user/${userId}`);
  // },

  // Get booking details
  // getBooking: async (bookingId) => {
  //   return await apiClient.get(`/bookings/${bookingId}`);
  // },

  // Update booking
  // updateBooking: async (bookingId, updateData) => {
  //   return await apiClient.put(`/bookings/${bookingId}`, updateData);
  // },

  // Cancel booking
  // cancelBooking: async (bookingId, reason) => {
  //   return await apiClient.patch(`/bookings/${bookingId}/cancel`, { reason });
  // },

  // Reschedule booking
  // rescheduleBooking: async (bookingId, newDateTime) => {
  //   return await apiClient.patch(`/bookings/${bookingId}/reschedule`, {
  //     newDateTime,
  //   });
  // },

  // Get booking history
  // getBookingHistory: async (userId) => {
  //   return await apiClient.get(`/bookings/history/${userId}`);
  // },
};

// ========================================
// RESOURCES API
// ========================================
export const resourcesAPI = {
  // Get articles
  // getArticles: async (filters = {}) => {
  //   return await apiClient.get('/resources/articles', { params: filters });
  // },

  // Get videos
  // getVideos: async (filters = {}) => {
  //   return await apiClient.get('/resources/videos', { params: filters });
  // },

  // Get article by ID
  // getArticle: async (articleId) => {
  //   return await apiClient.get(`/resources/articles/${articleId}`);
  // },

  // Track article view
  // trackArticleView: async (articleId, userId = null) => {
  //   return await apiClient.post('/resources/track-view', {
  //     articleId,
  //     userId,
  //     type: 'article',
  //   });
  // },

  // Track article click
  // trackArticleClick: async (trackingData) => {
  //   return await apiClient.post('/resources/track-click', trackingData);
  // },

  // Track page view
  // trackPageView: async (pageData) => {
  //   return await apiClient.post('/resources/track-page-view', pageData);
  // },

  // Search resources
  // searchResources: async (query, type = 'all') => {
  //   return await apiClient.get('/resources/search', {
  //     params: { q: query, type },
  //   });
  // },

  // Get featured content
  // getFeaturedContent: async () => {
  //   return await apiClient.get('/resources/featured');
  // },
};

// ========================================
// HOME PAGE API
// ========================================
export const homeAPI = {
  // Get homepage statistics
  // getStats: async () => {
  //   return await apiClient.get('/home/stats');
  // },

  // Get testimonials
  // getTestimonials: async (filters = {}) => {
  //   return await apiClient.get('/home/testimonials', { params: filters });
  // },

  // Submit contact form
  // submitContactForm: async (formData) => {
  //   return await apiClient.post('/home/contact', formData);
  // },

  // Subscribe to newsletter
  // subscribeNewsletter: async (email) => {
  //   return await apiClient.post('/home/subscribe', { email });
  // },
};

// ========================================
// ANALYTICS API
// ========================================
export const analyticsAPI = {
  // Track page view
  // trackPageView: async (pageData) => {
  //   return await apiClient.post('/analytics/page-view', pageData);
  // },

  // Track user action
  // trackAction: async (actionData) => {
  //   return await apiClient.post('/analytics/action', actionData);
  // },

  // Track error
  // trackError: async (errorData) => {
  //   return await apiClient.post('/analytics/error', errorData);
  // },

  // Get user analytics
  // getUserAnalytics: async (userId, dateRange) => {
  //   return await apiClient.get(`/analytics/user/${userId}`, {
  //     params: dateRange,
  //   });
  // },
};

// ========================================
// ADMIN API (for admin dashboard)
// ========================================
export const adminAPI = {
  // Get dashboard stats
  // getDashboardStats: async () => {
  //   return await apiClient.get('/admin/dashboard/stats');
  // },

  // Get all users
  // getUsers: async (filters = {}) => {
  //   return await apiClient.get('/admin/users', { params: filters });
  // },

  // Get user details
  // getUser: async (userId) => {
  //   return await apiClient.get(`/admin/users/${userId}`);
  // },

  // Update user status
  // updateUserStatus: async (userId, status) => {
  //   return await apiClient.patch(`/admin/users/${userId}/status`, { status });
  // },

  // Get all bookings
  // getAllBookings: async (filters = {}) => {
  //   return await apiClient.get('/admin/bookings', { params: filters });
  // },

  // Get system analytics
  // getSystemAnalytics: async (dateRange) => {
  //   return await apiClient.get('/admin/analytics', { params: dateRange });
  // },

  // Manage lawyers
  // manageLawyers: {
  //   create: async (lawyerData) => {
  //     return await apiClient.post('/admin/lawyers', lawyerData);
  //   },
  //   update: async (lawyerId, updateData) => {
  //     return await apiClient.put(`/admin/lawyers/${lawyerId}`, updateData);
  //   },
  //   delete: async (lawyerId) => {
  //     return await apiClient.delete(`/admin/lawyers/${lawyerId}`);
  //   },
  //   approve: async (lawyerId) => {
  //     return await apiClient.patch(`/admin/lawyers/${lawyerId}/approve`);
  //   },
  // },

  // Manage content
  // manageContent: {
  //   createArticle: async (articleData) => {
  //     return await apiClient.post('/admin/content/articles', articleData);
  //   },
  //   updateArticle: async (articleId, updateData) => {
  //     return await apiClient.put(`/admin/content/articles/${articleId}`, updateData);
  //   },
  //   deleteArticle: async (articleId) => {
  //     return await apiClient.delete(`/admin/content/articles/${articleId}`);
  //   },
  //   createVideo: async (videoData) => {
  //     return await apiClient.post('/admin/content/videos', videoData);
  //   },
  // },
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Error handler utility
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;
    return {
      status,
      message: data.message || 'An error occurred',
      errors: data.errors || null,
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      status: 500,
      message: 'Network error. Please check your connection.',
      errors: null,
    };
  } else {
    // Something happened in setting up the request
    return {
      status: 500,
      message: 'An unexpected error occurred.',
      errors: null,
    };
  }
};

// File upload utility
export const uploadFile = async (file, endpoint, onProgress = null) => {
  const formData = new FormData();
  formData.append('file', file);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      if (onProgress) {
        const progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress(progress);
      }
    },
  };

  // return await apiClient.post(endpoint, formData, config);
};

// Token management utilities
export const tokenUtils = {
  setToken: (token) => {
    localStorage.setItem('authToken', token);
  },

  getToken: () => {
    return localStorage.getItem('authToken');
  },

  removeToken: () => {
    localStorage.removeItem('authToken');
  },

  isTokenValid: () => {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    try {
      // TODO: Implement JWT token validation
      // const payload = JSON.parse(atob(token.split('.')[1]));
      // const currentTime = Date.now() / 1000;
      // return payload.exp > currentTime;
      return true; // Temporary
    } catch {
      return false;
    }
  },
};

// ========================================
// EXPORT ALL APIs
// ========================================
export default {
  auth: authAPI,
  chatbot: chatbotAPI,
  document: documentAPI,
  lawyer: lawyerAPI,
  booking: bookingAPI,
  resources: resourcesAPI,
  home: homeAPI,
  analytics: analyticsAPI,
  admin: adminAPI,
  utils: {
    handleApiError,
    uploadFile,
    tokenUtils,
  },
};