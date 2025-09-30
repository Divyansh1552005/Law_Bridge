// TODO: Authentication Context for User State Management
// This will handle user authentication state across the application

// import React, { createContext, useContext, useReducer, useEffect } from 'react';
// import { authAPI, tokenUtils } from '../services/api';

// Initial state
const initialState = {
  user: null,
  isLoggedIn: false,
  loading: true,
  error: null,
};

// Action types
const AUTH_ACTIONS = {
  LOGIN_START: 'LOGIN_START',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  REGISTER_START: 'REGISTER_START',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERROR: 'REGISTER_ERROR',
  LOAD_USER_START: 'LOAD_USER_START',
  LOAD_USER_SUCCESS: 'LOAD_USER_SUCCESS',
  LOAD_USER_ERROR: 'LOAD_USER_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
    case AUTH_ACTIONS.REGISTER_START:
    case AUTH_ACTIONS.LOAD_USER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AUTH_ACTIONS.LOGIN_SUCCESS:
    case AUTH_ACTIONS.REGISTER_SUCCESS:
    case AUTH_ACTIONS.LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
        loading: false,
        error: null,
      };

    case AUTH_ACTIONS.LOGIN_ERROR:
    case AUTH_ACTIONS.REGISTER_ERROR:
    case AUTH_ACTIONS.LOAD_USER_ERROR:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        loading: false,
        error: action.payload.error,
      };

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        loading: false,
        error: null,
      };

    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case AUTH_ACTIONS.UPDATE_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.updates,
        },
      };

    default:
      return state;
  }
};

// Create context
// const AuthContext = createContext();

// AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   // Load user on app start
//   useEffect(() => {
//     loadUser();
//   }, []);

//   // Load user from token
//   const loadUser = async () => {
//     dispatch({ type: AUTH_ACTIONS.LOAD_USER_START });

//     try {
//       if (!tokenUtils.isTokenValid()) {
//         dispatch({
//           type: AUTH_ACTIONS.LOAD_USER_ERROR,
//           payload: { error: 'No valid token found' },
//         });
//         return;
//       }

//       const response = await authAPI.getProfile();
//       dispatch({
//         type: AUTH_ACTIONS.LOAD_USER_SUCCESS,
//         payload: { user: response.data.user },
//       });
//     } catch (error) {
//       console.error('Load user error:', error);
//       tokenUtils.removeToken();
//       localStorage.removeItem('userId');
//       dispatch({
//         type: AUTH_ACTIONS.LOAD_USER_ERROR,
//         payload: { error: 'Failed to load user' },
//       });
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     dispatch({ type: AUTH_ACTIONS.LOGIN_START });

//     try {
//       const response = await authAPI.login(credentials);
//       const { user, token } = response.data;

//       tokenUtils.setToken(token);
//       localStorage.setItem('userId', user.id);

//       dispatch({
//         type: AUTH_ACTIONS.LOGIN_SUCCESS,
//         payload: { user },
//       });

//       return { success: true, user };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Login failed';
//       dispatch({
//         type: AUTH_ACTIONS.LOGIN_ERROR,
//         payload: { error: errorMessage },
//       });
//       return { success: false, error: errorMessage };
//     }
//   };

//   // Register function
//   const register = async (userData) => {
//     dispatch({ type: AUTH_ACTIONS.REGISTER_START });

//     try {
//       const response = await authAPI.register(userData);
//       const { user, token } = response.data;

//       tokenUtils.setToken(token);
//       localStorage.setItem('userId', user.id);

//       dispatch({
//         type: AUTH_ACTIONS.REGISTER_SUCCESS,
//         payload: { user },
//       });

//       return { success: true, user };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Registration failed';
//       dispatch({
//         type: AUTH_ACTIONS.REGISTER_ERROR,
//         payload: { error: errorMessage },
//       });
//       return { success: false, error: errorMessage };
//     }
//   };

//   // Logout function
//   const logout = async () => {
//     try {
//       await authAPI.logout();
//     } catch (error) {
//       console.error('Logout error:', error);
//     } finally {
//       tokenUtils.removeToken();
//       localStorage.removeItem('userId');
//       localStorage.removeItem('chatSessionId');
//       localStorage.removeItem('analysisHistory');
//       dispatch({ type: AUTH_ACTIONS.LOGOUT });
//     }
//   };

//   // Update profile function
//   const updateProfile = async (updates) => {
//     try {
//       const response = await authAPI.updateProfile(updates);
//       dispatch({
//         type: AUTH_ACTIONS.UPDATE_PROFILE,
//         payload: { updates: response.data.user },
//       });
//       return { success: true, user: response.data.user };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Profile update failed';
//       return { success: false, error: errorMessage };
//     }
//   };

//   // Change password function
//   const changePassword = async (passwordData) => {
//     try {
//       await authAPI.changePassword(passwordData);
//       return { success: true };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Password change failed';
//       return { success: false, error: errorMessage };
//     }
//   };

//   // Request password reset
//   const requestPasswordReset = async (email) => {
//     try {
//       await authAPI.requestPasswordReset(email);
//       return { success: true };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Password reset request failed';
//       return { success: false, error: errorMessage };
//     }
//   };

//   // Reset password
//   const resetPassword = async (resetData) => {
//     try {
//       const response = await authAPI.resetPassword(resetData);
//       const { user, token } = response.data;

//       tokenUtils.setToken(token);
//       localStorage.setItem('userId', user.id);

//       dispatch({
//         type: AUTH_ACTIONS.LOGIN_SUCCESS,
//         payload: { user },
//       });

//       return { success: true, user };
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || 'Password reset failed';
//       return { success: false, error: errorMessage };
//     }
//   };

//   // Clear error function
//   const clearError = () => {
//     dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
//   };

//   // Context value
//   const value = {
//     // State
//     user: state.user,
//     isLoggedIn: state.isLoggedIn,
//     loading: state.loading,
//     error: state.error,

//     // Actions
//     login,
//     register,
//     logout,
//     updateProfile,
//     changePassword,
//     requestPasswordReset,
//     resetPassword,
//     clearError,
//     loadUser,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// Custom hook to use auth context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// HOC for protected routes
// export const withAuth = (Component) => {
//   return (props) => {
//     const { isLoggedIn, loading } = useAuth();

//     if (loading) {
//       return (
//         <div className="flex items-center justify-center min-h-screen">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
//         </div>
//       );
//     }

//     if (!isLoggedIn) {
//       return <Navigate to="/login" replace />;
//     }

//     return <Component {...props} />;
//   };
// };

// Auth guard component
// export const AuthGuard = ({ children, fallback = null, requireAuth = true }) => {
//   const { isLoggedIn, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (requireAuth && !isLoggedIn) {
//     return fallback || <Navigate to="/login" replace />;
//   }

//   if (!requireAuth && isLoggedIn) {
//     return fallback || <Navigate to="/dashboard" replace />;
//   }

//   return children;
// };

// Export the context for advanced usage
// export { AuthContext };

// ========================================
// USAGE EXAMPLES
// ========================================

// 1. Wrap your app with AuthProvider in main.jsx or App.jsx:
/*
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          // Your routes
        </Routes>
      </Router>
    </AuthProvider>
  );
}
*/

// 2. Use in components:
/*
import { useAuth } from '../context/AuthContext';

function LoginForm() {
  const { login, loading, error } = useAuth();
  
  const handleSubmit = async (credentials) => {
    const result = await login(credentials);
    if (result.success) {
      navigate('/dashboard');
    }
  };
  
  return (
    // Your login form JSX
  );
}
*/

// 3. Protected routes:
/*
import { withAuth } from '../context/AuthContext';

const Dashboard = withAuth(() => {
  return <div>Protected Dashboard Content</div>;
});
*/

// 4. Auth guard usage:
/*
<AuthGuard requireAuth={true}>
  <Dashboard />
</AuthGuard>

<AuthGuard requireAuth={false} fallback={<Navigate to="/dashboard" />}>
  <LoginPage />
</AuthGuard>
*/

export default {
  initialState,
  AUTH_ACTIONS,
  authReducer,
};