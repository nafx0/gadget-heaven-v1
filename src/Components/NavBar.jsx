import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

/**
 * Responsive NavBar Component
 * Features:
 * - Responsive design (mobile/desktop layouts)
 * - Smooth top dropdown menu animation using GSAP
 * - Active link highlighting
 * - Wishlist button
 */
const NavBar = () => {
    // State to track if mobile menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Refs for animation and DOM access
    const menuRef = useRef(null);
    const timelineRef = useRef(null);
    
    // Get current location to determine active links
    const location = useLocation();
    
    // Navigation items configuration
    const navItems = [
        {label: "Home", path: "/"},
        {label: "Statistics", path: "/statistics"},
        {label: "Dashboard", path: "/dashboard"},
    ];
    
    /**
     * Initialize GSAP animation timeline on component mount
     * This creates an animation that will be played when the menu opens/closes
     */
    useEffect(() => {
        // Create a new GSAP timeline that starts paused
        timelineRef.current = gsap.timeline({ 
            paused: true,
            defaults: { 
                duration: 0.2,  // Fast animation duration for smoothness
                ease: "power2.out" // Smooth easing function
            }
        });
        
        // Only set up animation if menu element exists
        if (menuRef.current) {
            // Animate the menu container from above the viewport to visible
            timelineRef.current.fromTo(
                menuRef.current,
                { 
                    y: -20,      // Start slightly above final position
                    opacity: 0,  // Start completely transparent
                },
                { 
                    y: 0,        // End at natural position
                    opacity: 1,  // End fully visible
                    duration: 0.15 // Very quick for snappy response
                }
            );
            
            // Animate individual menu items with a staggered effect
            const menuItems = menuRef.current.querySelectorAll('li');
            if (menuItems && menuItems.length > 0) {
                timelineRef.current.fromTo(
                    menuItems,
                    { 
                        y: -10,      // Items start slightly above
                        opacity: 0   // Items start invisible
                    },
                    { 
                        y: 0,        // End at natural position
                        opacity: 1,  // End fully visible
                        stagger: 0.03, // Very slight delay between each item
                        duration: 0.1  // Quick animation
                    },
                    "-=0.05" // Slight overlap with previous animation
                );
            }
        }
        
        // Cleanup function to prevent memory leaks
        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();
            }
        };
    }, []);
    
    /**
     * Handle menu animation when open state changes
     * Also manages document scroll locking
     */
    useEffect(() => {
        if (!timelineRef.current) return;
        
        // Play animation forward or backward based on menu state
        if (isMenuOpen) {
            timelineRef.current.play();
        } else {
            timelineRef.current.reverse();
        }
    }, [isMenuOpen]);
    
    /**
     * Toggle mobile menu open/closed
     */
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    /**
     * Close the mobile menu
     * Useful for links that navigate away
     */
    const closeMenu = () => setIsMenuOpen(false);
    
    return (
        <nav className="py-4 px-4 md:px-6 max-w-7xl mx-auto relative">
            {/* Main navbar row - always visible */}
            <div className="flex items-center justify-between">
                {/* Logo/Brand name */}
                <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight cursor-pointer transition-all duration-300 hover:text-purple-400">
                    Gadget Heaven
                </Link>
                
                {/* Desktop Menu - only visible on medium screens and larger */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((navItem, index) => {
                        // Check if this link is active based on current location
                        const isActive = location.pathname === navItem.path;
                        return (
                            <li key={index} className="transition-all duration-300 hover:text-purple-400 font-medium">
                                <Link 
                                    to={navItem.path}
                                    className={`relative pb-1 ${isActive ? 'text-purple-600 font-semibold' : ''}`}
                                >
                                    {navItem.label}
                                    {/* Underline indicator for active links */}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 rounded-full" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                
                {/* Wishlist button - desktop version */}
                <div className="hidden md:block">
                    <button className="flex items-center justify-center border border-gray-300 rounded-full w-10 h-10 transition-all hover:border-purple-600 hover:text-purple-400 hover:scale-105 duration-300 cursor-pointer">
                        <AiOutlineHeart className="w-5 h-5" />
                    </button>
                </div>
                
                {/* Mobile Menu Button - only visible on small screens */}
                <button 
                    className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 focus:outline-none transition-all duration-300 cursor-pointer"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <AiOutlineClose className="w-6 h-6 transition-transform duration-300" />
                    ) : (
                        <AiOutlineMenu className="w-6 h-6 transition-transform duration-300" />
                    )}
                </button>
            </div>
            
            {/* Mobile Menu - Dropdown from top */}
            <div 
                ref={menuRef}
                className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 md:hidden opacity-0 pointer-events-none"
                style={{ 
                    // Ensure the menu is interactive only when open
                    pointerEvents: isMenuOpen ? 'auto' : 'none',
                    // Custom box shadow for a sleek look
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}
            >
                <div className="p-4">
                    <ul className="space-y-3">
                        {navItems.map((navItem, index) => {
                            // Check if this link is active based on current location
                            const isActive = location.pathname === navItem.path;
                            return (
                                <li key={index} className="transition-all duration-300">
                                    <Link 
                                        to={navItem.path}
                                        onClick={closeMenu}
                                        className={`block py-2 px-2 rounded-md ${
                                            isActive 
                                                ? 'bg-purple-50 text-purple-600 font-semibold' 
                                                : 'hover:bg-gray-50'
                                        }`}
                                    >
                                        {navItem.label}
                                    </Link>
                                </li>
                            );
                        })}
                        
                        {/* Wishlist item added to mobile menu */}
                        <li className="border-t border-gray-100 mt-2 pt-2">
                            <button
                                onClick={closeMenu}
                                className="flex items-center gap-2 py-2 px-2 rounded-md hover:bg-gray-50"
                            >
                                <span>Wishlist</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;