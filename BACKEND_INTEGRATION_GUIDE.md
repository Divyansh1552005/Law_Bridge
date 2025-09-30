# Backend Integration Guide for Law Bridge Frontend

This document outlines all the backend integration points that have been prepared in the frontend code. When you create the backend, you'll need to implement these endpoints and replace the commented code.

## Project Structure
```
frontend/           # This current project
backend/           # Your backend API server (to be created)
dashboard/         # Admin dashboard (to be created)
```

## Backend Integration Points

### 1. Authentication System
**File**: `src/context/AuthContext.js`
**API File**: `src/services/api.js` (authAPI)

#### Required Endpoints:
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh token
- `GET /auth/profile` - Get user profile
- `PUT /auth/profile` - Update user profile
- `PUT /auth/change-password` - Change password
- `POST /auth/forgot-password` - Request password reset
- `POST /auth/reset-password` - Reset password

#### Implementation Status:
- ✅ Frontend context prepared
- ❌ Backend API needed
- ❌ JWT token handling needed

---

### 2. Chatbot Integration
**File**: `src/Pages/Chatbot.jsx`
**API File**: `src/services/api.js` (chatbotAPI)

#### Required Endpoints:
- `POST /chatbot/message` - Send message to AI
- `GET /chatbot/history/:sessionId` - Get chat history
- `POST /chatbot/session` - Start new session
- `DELETE /chatbot/session/:sessionId` - End session
- `GET /chatbot/analytics/:userId` - Chat analytics

#### Current Implementation:
```javascript
// TODO: Replace in handleSendMessage function
const response = await chatbotAPI.sendMessage({
  message: currentInput,
  sessionId: sessionStorage.getItem('chatSessionId') || null,
  userId: localStorage.getItem('userId') || null
});
```

#### Implementation Status:
- ✅ Frontend UI complete
- ❌ AI integration needed
- ❌ Session management needed

---

### 3. Document Analyzer
**File**: `src/Pages/DocumentAnalyzer.jsx`
**API File**: `src/services/api.js` (documentAPI)

#### Required Endpoints:
- `POST /documents/analyze` - Upload and analyze document
- `GET /documents/history/:userId` - Analysis history
- `GET /documents/analysis/:analysisId` - Get specific analysis
- `DELETE /documents/analysis/:analysisId` - Delete analysis
- `POST /documents/analysis/:analysisId/share` - Share analysis
- `GET /documents/analysis/:analysisId/download` - Download report

#### Current Implementation:
```javascript
// TODO: Replace in analyzeDocument function
const formData = new FormData();
formData.append('document', uploadedFile);
formData.append('userId', localStorage.getItem('userId') || 'anonymous');

const response = await documentAPI.analyzeDocument(formData);
```

#### Implementation Status:
- ✅ Frontend file upload complete
- ❌ Document processing AI needed
- ❌ File storage system needed

---

### 4. Lawyer Booking System
**File**: `src/Pages/Schedule.jsx`
**API File**: `src/services/api.js` (lawyerAPI, bookingAPI)

#### Required Endpoints:
- `GET /lawyers` - Get all lawyers with filters
- `GET /lawyers/:id` - Get lawyer details
- `GET /lawyers/:id/availability` - Get availability
- `POST /bookings` - Create booking
- `GET /bookings/user/:userId` - User bookings
- `PUT /bookings/:id` - Update booking
- `PATCH /bookings/:id/cancel` - Cancel booking

#### Current Implementation:
```javascript
// TODO: Replace static lawyer data
const response = await lawyerAPI.getLawyers({
  category: activeCategory,
  limit: 50,
  include: ['ratings', 'availability', 'profile']
});

// TODO: Booking functionality
const handleBookConsultation = async (lawyerId, timeSlot) => {
  const response = await bookingAPI.createBooking({
    lawyerId, userId, timeSlot, consultationType: 'video'
  });
};
```

#### Implementation Status:
- ✅ Frontend UI complete
- ❌ Lawyer database needed
- ❌ Calendar/scheduling system needed
- ❌ Payment integration needed

---

### 5. Resources Management
**File**: `src/Pages/Resources.jsx`
**API File**: `src/services/api.js` (resourcesAPI)

#### Required Endpoints:
- `GET /resources/articles` - Get articles with filters
- `GET /resources/videos` - Get videos with filters
- `GET /resources/articles/:id` - Get specific article
- `POST /resources/track-view` - Track article views
- `POST /resources/track-click` - Track clicks
- `GET /resources/search` - Search resources

#### Current Implementation:
```javascript
// TODO: Replace static articles array
const [articlesResponse, videosResponse] = await Promise.all([
  resourcesAPI.getArticles({ limit: 20, featured: true }),
  resourcesAPI.getVideos({ limit: 10, featured: true })
]);

// TODO: Click tracking
const handleArticleClick = async (articleId, url) => {
  await resourcesAPI.trackArticleClick({
    articleId, userId, timestamp: new Date().toISOString()
  });
};
```

#### Implementation Status:
- ✅ Frontend display complete
- ❌ Content management system needed
- ❌ Analytics tracking needed

---

### 6. Homepage Analytics
**File**: `src/Pages/Home.jsx`
**API File**: `src/services/api.js` (homeAPI, analyticsAPI)

#### Required Endpoints:
- `GET /home/stats` - Homepage statistics
- `GET /home/testimonials` - Get testimonials
- `POST /home/contact` - Contact form submission
- `POST /analytics/page-view` - Track page views
- `POST /analytics/action` - Track user actions

#### Current Implementation:
```javascript
// TODO: Fetch dynamic stats
const [statsResponse, testimonialsResponse] = await Promise.all([
  homeAPI.getStats(),
  homeAPI.getTestimonials({ limit: 6, featured: true })
]);

// TODO: Track page visits
analyticsAPI.trackPageView({
  page: 'home',
  userId: localStorage.getItem('userId') || null
});
```

#### Implementation Status:
- ✅ Frontend UI complete
- ❌ Statistics calculation needed
- ❌ Testimonials management needed

---

### 7. Navigation & Authentication
**File**: `src/Components/Navbar.jsx`

#### Current Implementation:
```javascript
// TODO: Replace mock auth state
// const { user, isLoggedIn, login, logout, loading } = useAuth();

// TODO: Implement login
const handleLogin = () => {
  // const response = await authAPI.login(credentials);
  // login(response.data.user, response.data.token);
  navigate('/login');
};

// TODO: Implement logout
const handleLogout = () => {
  // await authAPI.logout();
  // logout();
  setIsLoggedIn(false);
};
```

#### Implementation Status:
- ✅ Frontend UI complete
- ❌ Auth integration needed

---

## Environment Configuration

### Frontend Environment Variables
Create `.env` file in frontend root:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development
REACT_APP_JWT_SECRET=your-jwt-secret
```

### Backend Environment Variables (Suggested)
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
JWT_EXPIRE=7d
OPENAI_API_KEY=your-openai-key
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
AWS_BUCKET_NAME=your-s3-bucket
```

## Database Schema (Suggested)

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  avatar_url VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Lawyers Table
```sql
CREATE TABLE lawyers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  specialization VARCHAR(255) NOT NULL,
  experience_years INTEGER,
  location VARCHAR(255),
  consultation_fee DECIMAL(10,2),
  rating DECIMAL(3,2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  availability_status VARCHAR(50) DEFAULT 'available',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Bookings Table
```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  lawyer_id UUID REFERENCES lawyers(id),
  scheduled_time TIMESTAMP NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  consultation_type VARCHAR(50) DEFAULT 'video',
  status VARCHAR(50) DEFAULT 'pending',
  payment_status VARCHAR(50) DEFAULT 'pending',
  amount DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Chat Sessions Table
```sql
CREATE TABLE chat_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  started_at TIMESTAMP DEFAULT NOW(),
  ended_at TIMESTAMP,
  message_count INTEGER DEFAULT 0
);
```

### Chat Messages Table
```sql
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES chat_sessions(id),
  sender VARCHAR(10) NOT NULL, -- 'user' or 'bot'
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Document Analyses Table
```sql
CREATE TABLE document_analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  file_name VARCHAR(255) NOT NULL,
  file_url VARCHAR(255) NOT NULL,
  analysis_result JSONB,
  status VARCHAR(50) DEFAULT 'processing',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Articles Table
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content TEXT,
  author VARCHAR(255),
  category VARCHAR(100),
  image_url VARCHAR(255),
  external_url VARCHAR(255),
  read_time_minutes INTEGER,
  view_count INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP DEFAULT NOW()
);
```

### Analytics Table
```sql
CREATE TABLE analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  event_type VARCHAR(100) NOT NULL,
  event_data JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Technology Stack Recommendations

### Backend
- **Framework**: Node.js with Express.js or Python with FastAPI
- **Database**: PostgreSQL with Redis for caching
- **Authentication**: JWT with bcrypt for password hashing
- **File Storage**: AWS S3 or similar cloud storage
- **AI Integration**: OpenAI API for chatbot and document analysis
- **Payment**: Stripe or Razorpay for booking payments

### Admin Dashboard
- **Framework**: React Admin, Vue Admin, or custom React app
- **Features**: User management, content management, analytics, booking management

## Implementation Priority

### Phase 1 (Critical)
1. ✅ Authentication system
2. ✅ Basic chatbot functionality
3. ✅ Document upload and storage
4. ✅ Lawyer listing and basic booking

### Phase 2 (Important)
1. ✅ Advanced document analysis with AI
2. ✅ Payment integration for bookings
3. ✅ Real-time chat notifications
4. ✅ Email notifications for bookings

### Phase 3 (Enhancement)
1. ✅ Advanced analytics dashboard
2. ✅ Content management system
3. ✅ Mobile app APIs
4. ✅ Advanced AI features

## File Modifications Required

When implementing the backend, uncomment and modify these files:
1. `src/services/api.js` - Uncomment all API functions
2. `src/context/AuthContext.js` - Uncomment context implementation
3. All page components - Uncomment backend integration code
4. `src/main.jsx` - Wrap app with AuthProvider

## Testing Strategy

### Frontend Testing
- Replace mock functions with actual API calls
- Test error handling and loading states
- Verify token management and authentication flows

### Backend Testing
- API endpoint testing with Postman/Jest
- Database integration testing
- Authentication and authorization testing
- File upload and processing testing

## Security Considerations

1. **Authentication**: Implement proper JWT token handling
2. **File Upload**: Validate file types and scan for malware
3. **Data Validation**: Validate all inputs on backend
4. **Rate Limiting**: Implement API rate limiting
5. **CORS**: Configure proper CORS policies
6. **Environment Variables**: Secure all secrets and API keys

---

## Next Steps

1. Create backend API server with chosen technology stack
2. Implement database schema and migrations
3. Set up authentication system with JWT
4. Create API endpoints as documented above
5. Integrate AI services for chatbot and document analysis
6. Set up file storage and processing pipeline
7. Implement payment gateway for booking system
8. Create admin dashboard for content and user management
9. Set up analytics and monitoring systems
10. Deploy and configure production environment

This documentation provides a complete roadmap for backend implementation. All frontend code is prepared and waiting for backend integration!