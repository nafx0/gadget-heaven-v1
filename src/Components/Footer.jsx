import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AiOutlineTwitter, 
  AiOutlineInstagram, 
  AiFillFacebook, 
  AiFillYoutube,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineArrowUp
} from 'react-icons/ai';

/**
 * Footer Component
 * 
 * A modern, sleek footer for Gadget Heaven with responsive design
 * Features:
 * - Multi-column layout that stacks on mobile
 * - Social media links
 * - Newsletter subscription
 * - Contact information
 * - Back to top button
 * - Custom primary color: #9538E2 (vibrant purple)
 */
const Footer = () => {
  // Primary brand color
  const primaryColor = '#9538E2'; // Vibrant purple
  const primaryColorDark = '#7d2bc4'; // Darker shade for hover states
  
  // Function to handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Implement your subscription logic here
    console.log('Newsletter subscription submitted');
  };

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">
              <span style={{ color: primaryColor }}>Gadget</span> Heaven
            </h2>
            <p className="text-sm leading-relaxed">
              Leading the way in cutting-edge technology and innovation. 
              Discover the future with our premium selection of gadgets and tech products.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="https://twitter.com" className="transition-colors duration-300 hover:text-opacity-80" style={{ color: primaryColor }}>
                <AiOutlineTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="transition-colors duration-300 hover:text-opacity-80" style={{ color: primaryColor }}>
                <AiOutlineInstagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" className="transition-colors duration-300 hover:text-opacity-80" style={{ color: primaryColor }}>
                <AiFillFacebook className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" className="transition-colors duration-300 hover:text-opacity-80" style={{ color: primaryColor }}>
                <AiFillYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About Us', 'Blog', 'Contact'].map((item, index) => (
                <li key={index} className="transition-transform duration-300 hover:translate-x-1">
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm transition-colors duration-300"
                    style={{ ':hover': { color: primaryColor } }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Customer Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Customer Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                <li key={index} className="transition-transform duration-300 hover:translate-x-1">
                  <Link 
                    to={`/${item.toLowerCase().replace(/[&\s]+/g, '-')}`} 
                    className="text-sm transition-colors duration-300"
                    style={{ ':hover': { color: primaryColor } }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for exclusive deals and updates.</p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 text-sm"
                style={{ ':focus': { ringColor: primaryColor } }}
                required
              />
              <button 
                type="submit" 
                className="text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                style={{ 
                  backgroundColor: primaryColor,
                  ':hover': { backgroundColor: primaryColorDark }
                }}
              >
                Subscribe
              </button>
            </form>
            
            {/* Contact Information */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm">
                <AiOutlinePhone className="flex-shrink-0" style={{ color: primaryColor }} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <AiOutlineMail className="flex-shrink-0" style={{ color: primaryColor }} />
                <span>support@gadgetheaven.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <AiOutlineEnvironment className="flex-shrink-0" style={{ color: primaryColor }} />
                <span>123 Tech Street, Digital City, 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider with custom accent color */}
      <div className="border-t" style={{ borderColor: `${primaryColor}20` }}> {/* 20% opacity version of primary color */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Gadget Heaven. All rights reserved.
          </p>
          
          {/* Payment Methods */}
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <span className="text-xs">We accept:</span>
            <div className="flex space-x-2">
              {['visa', 'mastercard', 'amex', 'paypal'].map((card) => (
                <div 
                  key={card} 
                  className="w-8 h-5 rounded flex items-center justify-center text-xs font-bold text-gray-800"
                  style={{ backgroundColor: 'white', border: `1px solid ${primaryColor}30` }}
                >
                  {card.substring(0, 4).toUpperCase()}
                </div>
              ))}
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 rounded-full transition-colors duration-300 text-white"
            style={{ backgroundColor: primaryColor, ':hover': { backgroundColor: primaryColorDark } }}
            aria-label="Back to top"
          >
            <AiOutlineArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;