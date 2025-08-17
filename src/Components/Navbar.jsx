import React, { useState } from 'react'
import legalLogo from '../assets/legal-logo.png'
import { FiMenu, FiX, FiUser, FiLogOut, FiSettings, FiHelpCircle } from 'react-icons/fi'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    // This will be replaced with actual auth state later
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

    // Handle login (placeholder for future implementation)
    const handleLogin = () => {
        console.log("Login clicked - implement login logic here");
        // navigate('/login');
    };

    // Handle logout (placeholder for future implementation)
    const handleLogout = () => {
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

    // Define the menu items
    const menuItems = [
        { id: "Home", label: "Home", path: "/" },
        { id: "About Us", label: "About Us", path: "/about" },
        { id: "Schedule_Consultation", label: "Schedule Consultation", path: "/schedule" },
        { id: "Resources", label: "Resources", path: "/resources" },
        { id: "Chatbot", label: "Chatbot", path: "/chatbot" },
        { id: "Community_Blog", label: "Community Blog", external: true, url: "https://blogspace-alpha.vercel.app/" },
    ];

    return (
    <nav className='flex justify-between items-center px-6 py-4 bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50'>
            {/* Logo on the left */}
            <NavLink
                to="/"
                className="flex items-center hover:opacity-90 transition-opacity duration-300"
            >
                <img src={legalLogo} alt="Legal Aware Logo" className="h-10 w-auto" />
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
                                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `font-medium transition-colors duration-200 relative group ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
                                    }
                                    end={item.path === "/"}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${window.location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"}`}/>
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
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                                {user.avatar ? (
                                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    getUserInitials(user.name)
                                )}
                            </div>
                            <span className="text-gray-700 font-medium">{user.name.split(' ')[0]}</span>
                        </button>

                        {/* User Dropdown */}
                        {isUserDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                                <div className="px-4 py-3 border-b border-gray-100">
                                    <p className="font-semibold text-gray-900">{user.name}</p>
                                    <p className="text-sm text-gray-600">{user.email}</p>
                                </div>

                                <div className="py-2">
                                    <button className="w-full flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                        <FiUser className="mr-3 h-4 w-4" />
                                        Profile
                                    </button>
                                    <button className="w-full flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                        <FiSettings className="mr-3 h-4 w-4" />
                                        Settings
                                    </button>
                                    <button className="w-full flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                                        <FiHelpCircle className="mr-3 h-4 w-4" />
                                        Help & Support
                                    </button>
                                </div>

                                <div className="border-t border-gray-100 pt-2">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center px-4 py-2 text-left text-red-600 hover:bg-red-50 transition-colors duration-200"
                                    >
                                        <FiLogOut className="mr-3 h-4 w-4" />
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    // Login Button
                    <button
                        onClick={handleLogin}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Sign In
                    </button>
                )}
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex items-center">
                {isMobileMenuOpen ? (
                    <FiX
                        className="text-3xl text-gray-700 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                ) : (
                    <FiMenu
                        className="text-3xl text-gray-700 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(true)}
                    />
                )}
            </div>

            {/* Mobile Menu Items */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 z-50 lg:hidden">
                    <div className="px-6 py-4">
                        {/* Mobile Auth Section */}
                        {isLoggedIn ? (
                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                                        ) : (
                                            getUserInitials(user.name)
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{user.name}</p>
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <button className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                        <FiUser className="mr-3 h-4 w-4" />
                                        Profile
                                    </button>
                                    <button className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                                        <FiSettings className="mr-3 h-4 w-4" />
                                        Settings
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                    >
                                        <FiLogOut className="mr-3 h-4 w-4" />
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="mb-6 pb-6 border-b border-gray-200">
                                <button
                                    onClick={handleLogin}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 shadow-md"
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
                                            className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={() => handleMenuItemClick(item.path)}
                                            className="w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
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
                    }}
                ></div>
            )}
        </nav>
    )
}

export default Navbar