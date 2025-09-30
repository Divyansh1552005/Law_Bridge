import React, { useState } from 'react'
import legalLogo from '../assets/legal_logo2.png'
import { HelpCircle, Info } from 'lucide-react';
import { FiMenu, FiX, FiUser, FiLogOut, FiSettings, FiHelpCircle, FiTool, FiCpu, FiUsers, FiChevronDown, FiHeart, FiShield, FiMessageSquare, FiFileText, FiPlay } from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
// TODO: Import API service and auth context when backend is ready
// import { authAPI } from '../services/api';
// import { useAuth } from '../context/AuthContext';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

    // TODO: Replace with actual auth state from context
    // const { user, isLoggedIn, login, logout, loading } = useAuth();
    
    // TEMPORARY: Mock auth state (remove when backend is ready)
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this to test different states
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: null // Will use initials if no avatar
    });

    const navigate = useNavigate();

    // Handle menu item click for mobile
    const handleMenuItemClick = (path) => {
        setIsMobileMenuOpen(false);
        navigate(path);
    };

    // TODO: Replace with actual login implementation
    const handleLogin = () => {
        // TODO: Implement actual login logic
        // try {
        //   const response = await authAPI.login(credentials);
        //   login(response.data.user, response.data.token);
        //   navigate('/dashboard');
        // } catch (error) {
        //   console.error('Login error:', error);
        //   setError('Login failed. Please try again.');
        // }
        
        console.log("Login clicked - implement login logic here");
        navigate('/login');
    };

    // TODO: Replace with actual logout implementation
    const handleLogout = () => {
        // TODO: Implement actual logout logic
        // try {
        //   await authAPI.logout();
        //   logout();
        //   navigate('/');
        // } catch (error) {
        //   console.error('Logout error:', error);
        // }
        
        console.log("Logout clicked - implement logout logic here");
        setIsLoggedIn(false);
        setIsUserDropdownOpen(false);
    };

    // Get user initials for avatar
    const getUserInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // Handle dropdown item navigation
    const handleDropdownItemClick = (item, parentPath = '/') => {
        if (item.scrollTo) {
            // Navigate to the parent page first if not already there
            if (window.location.pathname !== parentPath) {
                navigate(parentPath, { state: { scrollTo: item.scrollTo } });
            } else {
                // Scroll to section on current page
                const element = document.getElementById(item.scrollTo);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else if (item.path) {
            navigate(item.path);
        }
    };

    // Define dropdown items for Home
    const homeDropdownItems = [
        {
            label: "Our Tools",
            scrollTo: "features-section",
            icon: <FiTool />
        },
        {
            label: "How It Works",
            scrollTo: "how-it-works-section", 
            icon: <FiCpu />
        },
        {
            label: "Trusted by Thousands",
            scrollTo: "stats-section",
            icon: <FiUsers />
        },
        {
            label: "Disclaimer",
            scrollTo: "disclaimer-section",
            icon: <Info className="w-4 h-4" />
        }
    ];

    // Define dropdown items for About Us
    const aboutDropdownItems = [
        {
            label: "Why We Started",
            scrollTo: "why-we-started-section",
            icon: <FiHeart />
        },
        {
            label: "Trust Between Us",
            scrollTo: "trust-section", 
            icon: <FiShield />
        },
        {
            label: "FAQs",
            scrollTo: "faq-section",
            icon: <HelpCircle className="w-4 h-4" />
        },
        {
            label: "Join Our Blog",
            scrollTo: "community-blog-section",
            icon: <FiMessageSquare />
        }
    ];

    // Define dropdown items for Tools
    const toolsDropdownItems = [
        {
            label: "Document Analyzer",
            path: "/document-analyzer",
            icon: <FiFileText />
        },
        {
            label: "AI Chatbot",
            path: "/chatbot",
            icon: <FiMessageSquare />
        }
    ];

    // Define dropdown items for Resources
    const resourcesDropdownItems = [
        {
            label: "Articles",
            scrollTo: "articles",
            icon: <FiFileText />
        },
        {
            label: "Video Guides",
            scrollTo: "video-guides",
            icon: <FiPlay />
        }
    ];

    // Define the menu items
    const menuItems = [
        { id: "Home", label: "Home", path: "/", hasDropdown: true, dropdownItems: homeDropdownItems },
        { id: "About Us", label: "About Us", path: "/about", hasDropdown: true, dropdownItems: aboutDropdownItems },
        { id: "Schedule_Consultation", label: "Schedule Consultation", path: "/schedule" },
        { id: "Resources", label: "Resources", path: "/resources", hasDropdown: true, dropdownItems: resourcesDropdownItems },
        { id: "Tools", label: "Tools", path: "/chatbot", hasDropdown: true, dropdownItems: toolsDropdownItems },
        { id: "Community_Blog", label: "Community Blog", external: true, url: "https://blogspace-alpha.vercel.app/" },
    ];

    return (
    <nav className='flex justify-between items-center px-6 py-4 bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-blue-500/20 sticky top-0 z-50'>
            {/* Logo on the left */}
            <NavLink
                to="/"
                className="flex items-center hover:opacity-90 transition-opacity duration-300 -my-8"
            >
                <img src={legalLogo} alt="Legal Aware Logo" className="h-24 w-auto" />
            </NavLink>

            {/* Desktop Menu in the center */}
            <div className='hidden lg:flex flex-1 justify-center'>
                <ul className='flex items-center space-x-8'>
                    {menuItems.map(item => (
                        <li key={item.id}>
                            {item.external ? (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-200 relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ) : item.hasDropdown ? (
                                <Dropdown
                                    trigger={
                                        <span className={`font-medium transition-colors duration-200 relative group ${window.location.pathname === item.path ? "text-blue-400" : "text-slate-300 hover:text-blue-400"}`}>
                                            {item.label}
                                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${window.location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}/>
                                        </span>
                                    }
                                    items={item.dropdownItems}
                                    onItemClick={(dropdownItem) => handleDropdownItemClick(dropdownItem, item.path)}
                                    onTriggerClick={() => navigate(item.path)}
                                    triggerOnHover={true}
                                    align="center"
                                />
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `font-medium transition-colors duration-200 relative group ${isActive ? "text-blue-400" : "text-slate-300 hover:text-blue-400"}`
                                    }
                                    end={item.path === "/"}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${window.location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}/>
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right side - Auth section */}
            <div className='hidden lg:flex items-center space-x-4'>
                {isLoggedIn ? (
                    // User Avatar and Dropdown
                    <div className="relative">
                        <button
                            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                                {user.avatar ? (
                                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    getUserInitials(user.name)
                                )}
                            </div>
                            <span className="text-slate-300 font-medium">{user.name.split(' ')[0]}</span>
                        </button>

                        {/* User Dropdown */}
                        {isUserDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-xl border border-blue-500/20 py-2 z-50">
                                <div className="px-4 py-3 border-b border-slate-700">
                                    <p className="font-semibold text-white">{user.name}</p>
                                    <p className="text-sm text-slate-400">{user.email}</p>
                                </div>

                                <div className="py-2">
                                    <button className="w-full flex items-center px-4 py-2 text-left text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200">
                                        <FiUser className="mr-3 h-4 w-4" />
                                        Profile
                                    </button>
                                    <button className="w-full flex items-center px-4 py-2 text-left text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200">
                                        <FiSettings className="mr-3 h-4 w-4" />
                                        Settings
                                    </button>
                                    <button className="w-full flex items-center px-4 py-2 text-left text-slate-300 hover:bg-slate-700/50 hover:text-blue-400 transition-colors duration-200">
                                        <FiHelpCircle className="mr-3 h-4 w-4" />
                                        Help & Support
                                    </button>
                                </div>

                                <div className="border-t border-slate-700 pt-2">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center px-4 py-2 text-left text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                                    >
                                        <FiLogOut className="mr-3 h-4 w-4" />
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    // Auth Buttons
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => navigate('/signup')}
                            className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-200"
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={handleLogin}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                        >
                            Sign In
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
                {isMobileMenuOpen ? (
                    <FiX
                        className="text-3xl text-slate-300 cursor-pointer hover:text-blue-400 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                ) : (
                    <FiMenu
                        className="text-3xl text-slate-300 cursor-pointer hover:text-blue-400 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(true)}
                    />
                )}
            </div>

            {/* Mobile Menu Items */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-xl border-t border-blue-500/20 z-50 lg:hidden">
                    <div className="px-6 py-4">
                        {/* Mobile Auth Section */}
                        {isLoggedIn ? (
                            <div className="mb-6 pb-6 border-b border-slate-700">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                                        ) : (
                                            getUserInitials(user.name)
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">{user.name}</p>
                                        <p className="text-sm text-slate-400">{user.email}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <button className="w-full flex items-center px-3 py-2 text-left text-slate-300 hover:bg-slate-800/50 hover:text-blue-400 rounded-lg transition-colors duration-200">
                                        <FiUser className="mr-3 h-4 w-4" />
                                        Profile
                                    </button>
                                    <button className="w-full flex items-center px-3 py-2 text-left text-slate-300 hover:bg-slate-800/50 hover:text-blue-400 rounded-lg transition-colors duration-200">
                                        <FiSettings className="mr-3 h-4 w-4" />
                                        Settings
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center px-3 py-2 text-left text-red-400 hover:bg-red-500/10 rounded-lg transition-colors duration-200"
                                    >
                                        <FiLogOut className="mr-3 h-4 w-4" />
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="mb-6 pb-6 border-b border-slate-700 space-y-3">
                                <button
                                    onClick={() => navigate('/signup')}
                                    className="w-full text-slate-300 hover:text-blue-400 font-medium py-3 border border-slate-600 hover:border-blue-400 rounded-lg transition-all duration-200"
                                >
                                    Sign Up
                                </button>
                                <button
                                    onClick={handleLogin}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25"
                                >
                                    Sign In
                                </button>
                            </div>
                        )}

                        {/* Mobile Menu Items */}
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    {item.external ? (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-3 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg font-medium transition-colors duration-200"
                                        >
                                            {item.label}
                                        </a>
                                    ) : item.hasDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.id ? null : item.id)}
                                                className="w-full flex items-center justify-between px-3 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg font-medium transition-colors duration-200"
                                            >
                                                {item.label}
                                                <FiChevronDown className={`w-4 h-4 text-slate-300 transition-all duration-200 ${mobileDropdownOpen === item.id ? 'rotate-180 text-blue-400' : ''}`} />
                                            </button>
                                            {mobileDropdownOpen === item.id && (
                                                <div className="ml-4 mt-2 space-y-2">
                                                    {item.dropdownItems.map((dropdownItem, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => {
                                                                handleDropdownItemClick(dropdownItem, item.path);
                                                                setMobileDropdownOpen(null);
                                                                setIsMobileMenuOpen(false);
                                                            }}
                                                            className="w-full flex items-center px-3 py-2 text-left text-slate-400 hover:text-blue-400 hover:bg-slate-800/30 rounded-lg transition-colors duration-200"
                                                        >
                                                            {dropdownItem.icon && <span className="mr-3 w-4 h-4">{dropdownItem.icon}</span>}
                                                            {dropdownItem.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => handleMenuItemClick(item.path)}
                                            className="w-full text-left px-3 py-3 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg font-medium transition-colors duration-200"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Overlay for dropdown */}
            {(isUserDropdownOpen || isMobileMenuOpen) && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => {
                        setIsUserDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                        setMobileDropdownOpen(null);
                    }}
                ></div>
            )}
        </nav>
    )
}

export default Navbar