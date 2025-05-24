import React, { useState } from 'react';
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
 * A modern, sleek footer for Gadget Heaven with enhanced animations and responsive design
 * Features:
 * - Multi-column layout that stacks on mobile
 * - Social media links with smooth hover animations
 * - Newsletter subscription with enhanced UX
 * - Contact information with icon animations
 * - Back to top button with pulse animation
 * - Custom payment method SVG icons
 * - Enhanced hover effects and micro-animations
 * - Custom primary color: #9538E2 (vibrant purple)
 */

// Custom SVG Payment Icons
const PaymentIcons = {
  Visa: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="32"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="Et0R~umK8VADpitl6wcz1a_pFNd0FTuBU2Q_gr1"
        x1="20.375"
        x2="28.748"
        y1="1365.061"
        y2="1394.946"
        gradientTransform="translate(0 -1354)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#00b3ee"></stop>
        <stop offset="1" stop-color="#0082d8"></stop>
      </linearGradient>
      <path
        fill="url(#Et0R~umK8VADpitl6wcz1a_pFNd0FTuBU2Q_gr1)"
        d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25	C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"
      ></path>
      <path
        d="M25.733,31c-1.376-0.014-2.847-0.291-3.752-0.708l-0.658-0.303l-0.178,0.83h-5.048l1.844-8.621	l-3.612,8.621H9.717l-2.59-10.013c-0.061-0.239-0.09-0.304-0.103-0.32c-0.006-0.006-0.034-0.024-0.119-0.071	c-0.574-0.312-1.607-0.652-2.698-0.89l-0.971-0.211l0.444-2.103h5.92c1.18,0,2.131,0.8,2.365,1.989l0.626,3.326l2.104-5.315h9.36	L23.674,19c1.055-1.245,2.845-2,5.037-2c1.072,0,2.073,0.183,3.151,0.576l0.818,0.299l-0.971,4.53l-1.135-0.521	c-0.82-0.378-1.555-0.457-2.026-0.457c-0.165,0-0.297,0.011-0.386,0.022c-0.065,0.008-0.123,0.019-0.173,0.031	c0.228,0.14,0.531,0.301,0.713,0.396c1.074,0.563,2.598,1.362,3.098,2.989l2.592-6.188c0.379-0.903,1.222-1.465,2.2-1.465h3.376	l2.842,13.607h-4.82l-0.363-1.733h-2.338l-0.627,1.733h-5.356l0.322-0.769C28.598,30.659,27.271,31,25.738,31H25.733z M23.366,25.935c0.704,0.33,1.367,0.641,2.543,0.641l0.104-0.001c0.312-0.005,0.594-0.077,0.738-0.147	c-0.117-0.094-0.373-0.265-0.924-0.533c-1.614-0.785-2.621-1.758-3.009-2.902l-0.522,2.444L23.366,25.935z"
        opacity=".05"
      ></path>
      <path
        d="M25.733,30.5c-1.306-0.013-2.696-0.272-3.543-0.662l-0.363-0.167l0.759-3.549l0.569,0.266	c0.717,0.336,1.467,0.688,2.754,0.688l0.109-0.001c0.521-0.008,1.3-0.186,1.306-0.642c0.002-0.188-0.152-0.44-1.277-0.988	c-0.727-0.354-2.937-1.432-2.908-3.615c0.019-2.548,2.311-4.329,5.572-4.329c1.013,0,1.96,0.174,2.98,0.546l0.409,0.149	l-0.749,3.495l-0.567-0.261c-0.903-0.416-1.714-0.503-2.235-0.503c-0.193,0-0.348,0.013-0.451,0.026	c-0.609,0.079-0.836,0.335-0.84,0.487c-0.005,0.238,0.672,0.594,1.216,0.88c1.267,0.664,3.001,1.575,2.992,3.711	c-0.012,2.673-2.313,4.469-5.728,4.469H25.733z M38.396,30.319l-0.363-1.733h-3.095l-0.627,1.733h-4.254l4.796-11.449	c0.3-0.715,0.967-1.158,1.739-1.158h2.97l2.633,12.607H38.396z M37.327,25.206l-0.424-2.033l-0.738,2.033H37.327z M16.716,30.319	l2.697-12.607h4.024l-2.696,12.607H16.716z M10.104,30.319l-2.492-9.638c-0.124-0.486-0.184-0.552-0.468-0.706	c-0.612-0.333-1.696-0.692-2.83-0.938l-0.485-0.105l0.258-1.22h5.515c0.934,0,1.688,0.637,1.875,1.586l0.945,5.021l2.614-6.607	h4.245l-5.284,12.607H10.104z"
        opacity=".07"
      ></path>
      <path
        fill="#fff"
        d="M23.638,21.836c-0.021,1.672,1.49,2.604,2.628,3.159c1.169,0.569,1.562,0.934,1.558,1.443	c-0.009,0.779-0.933,1.123-1.798,1.136c-1.509,0.023-2.386-0.407-3.083-0.733L22.4,29.384c0.7,0.322,1.995,0.604,3.339,0.616	c3.153,0,5.217-1.557,5.228-3.97c0.012-3.063-4.237-3.233-4.208-4.602c0.01-0.415,0.406-0.858,1.274-0.971	c0.43-0.057,1.616-0.1,2.96,0.519l0.528-2.46C30.798,18.252,29.868,18,28.711,18C25.743,18,23.655,19.578,23.638,21.836 M36.592,18.212c-0.576,0-1.061,0.336-1.278,0.851L30.81,29.819h3.151l0.627-1.733h3.851l0.364,1.733h2.777l-2.424-11.607H36.592 M37.033,21.348l0.909,4.359h-2.491L37.033,21.348 M19.818,18.212l-2.484,11.607h3.003l2.483-11.607H19.818 M15.375,18.212	l-3.126,7.9l-1.264-6.717c-0.148-0.75-0.734-1.183-1.385-1.183h-5.11L4.42,18.549c1.049,0.228,2.241,0.595,2.963,0.988	c0.442,0.24,0.568,0.45,0.713,1.02l2.395,9.263h3.174l4.865-11.607L15.375,18.212"
      ></path>
    </svg>
  ),
  Mastercard: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="32"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="NgmlaCv2fU27PJOuiUvQVa_Sq0VNi1Afgmj_gr1"
        x1="20.375"
        x2="28.748"
        y1="1365.061"
        y2="1394.946"
        gradientTransform="translate(0 -1354)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#00b3ee"></stop>
        <stop offset="1" stop-color="#0082d8"></stop>
      </linearGradient>
      <path
        fill="url(#NgmlaCv2fU27PJOuiUvQVa_Sq0VNi1Afgmj_gr1)"
        d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25	C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"
      ></path>
      <circle cx="17.053" cy="24.053" r="10.053" fill="#cf1928"></circle>
      <linearGradient
        id="NgmlaCv2fU27PJOuiUvQVb_Sq0VNi1Afgmj_gr2"
        x1="20"
        x2="40.107"
        y1="24.053"
        y2="24.053"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#fede00"></stop>
        <stop offset="1" stop-color="#ffd000"></stop>
      </linearGradient>
      <circle
        cx="30.053"
        cy="24.053"
        r="10.053"
        fill="url(#NgmlaCv2fU27PJOuiUvQVb_Sq0VNi1Afgmj_gr2)"
      ></circle>
      <path
        fill="#d97218"
        d="M20,24.053c0,3.072,1.382,5.818,3.553,7.662c2.172-1.844,3.553-4.59,3.553-7.662	s-1.382-5.818-3.553-7.662C21.382,18.235,20,20.981,20,24.053z"
      ></path>
    </svg>
  ),
  Amex: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="32"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="4aQSF3KYsmAUlEZ8JzDHGa_So6jK8i6jddZ_gr1"
        x1="20.375"
        x2="28.748"
        y1="1365.061"
        y2="1394.946"
        gradientTransform="translate(0 -1354)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#00b3ee"></stop>
        <stop offset="1" stop-color="#0082d8"></stop>
      </linearGradient>
      <path
        fill="url(#4aQSF3KYsmAUlEZ8JzDHGa_So6jK8i6jddZ_gr1)"
        d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25	C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"
      ></path>
      <path
        d="M23.778,27.981c-0.827,0-1.5-0.673-1.5-1.5V26.44l-0.309,0.669c-0.244,0.529-0.779,0.872-1.362,0.872	h-0.917c-0.593,0-1.131-0.35-1.371-0.892l-0.254-0.572c-0.019,0.811-0.684,1.464-1.5,1.464h-2.638c-0.596,0-1.135-0.353-1.374-0.898	l-0.289-0.66h-2.12l-0.28,0.651c-0.238,0.551-0.779,0.907-1.378,0.907H7.383c-0.689,0-1.25-0.561-1.25-1.25v-0.055l0.012-0.12	L6.179,26.4l2.84-6.503C9.261,19.352,9.8,19,10.394,19h1.623c0.59,0,1.127,0.348,1.369,0.887l0.958,2.146V20.5	c0-0.827,0.673-1.5,1.5-1.5h1.872c0.589,0,1.126,0.347,1.368,0.885l1.061,2.362l1.067-2.363C21.453,19.347,21.99,19,22.578,19H24.5	c0.827,0,1.5,0.673,1.5,1.5v5.981c0,0.827-0.673,1.5-1.5,1.5H23.778z"
        opacity=".05"
      ></path>
      <path
        d="M23.778,27.481c-0.551,0-1-0.449-1-1v-2.318L21.515,26.9c-0.163,0.353-0.519,0.581-0.908,0.581	h-0.917c-0.395,0-0.754-0.233-0.914-0.595l-1.21-2.729v2.324c0,0.551-0.449,1-1,1h-2.638c-0.397,0-0.757-0.235-0.916-0.599	l-0.42-0.959H9.815l-0.41,0.954c-0.159,0.367-0.519,0.604-0.919,0.604H7.383c-0.414,0-0.75-0.336-0.75-0.75v-0.067l0.035-0.156	l2.81-6.411c0.161-0.363,0.52-0.598,0.916-0.598h1.623c0.394,0,0.751,0.232,0.913,0.591l1.915,4.288V20.5c0-0.551,0.449-1,1-1h1.872	c0.393,0,0.751,0.231,0.912,0.59l1.516,3.375l1.523-3.376c0.162-0.358,0.52-0.589,0.912-0.589H24.5c0.551,0,1,0.449,1,1v5.981	c0,0.551-0.449,1-1,1H23.778z M11.463,23.415l-0.293-0.671l-0.282,0.671H11.463z"
        opacity=".07"
      ></path>
      <path
        fill="#fff"
        d="M24.5,20h-1.922c-0.197,0-0.375,0.115-0.456,0.294l-1.98,4.389l-1.97-4.388	C18.091,20.116,17.912,20,17.715,20h-1.871c-0.276,0-0.5,0.224-0.5,0.5v6.226l-2.871-6.43C12.393,20.116,12.214,20,12.017,20h-1.623	c-0.198,0-0.378,0.117-0.458,0.299L7.15,26.64c0,0-0.017,0.063-0.017,0.091c0,0.138,0.112,0.25,0.25,0.25v0h1.103	c0.2,0,0.38-0.119,0.459-0.302l0.541-1.256h3.432l0.551,1.258c0.08,0.182,0.259,0.299,0.458,0.299h2.638c0.276,0,0.5-0.224,0.5-0.5	v-4.685l2.167,4.888c0.08,0.181,0.259,0.297,0.457,0.297h0.918c0.195,0,0.372-0.113,0.454-0.29l2.217-4.805v4.595	c0,0.276,0.224,0.5,0.5,0.5H24.5c0.276,0,0.5-0.224,0.5-0.5V20.5C25,20.224,24.776,20,24.5,20z M10.135,23.915l1.026-2.44	l1.066,2.44H10.135z"
      ></path>
      <path
        d="M38.994,28c-0.433,0-0.844-0.187-1.129-0.512l-1.15-1.313l-1.189,1.313	c-0.283,0.313-0.688,0.494-1.112,0.494H28.5c-0.827,0-1.5-0.673-1.5-1.5V20.5c0-0.827,0.673-1.5,1.5-1.5h6.811l1.494,1.69	l1.31-1.422l0.099-0.042c0.145-0.119,0.405-0.207,0.679-0.207h1.541c0.689,0,1.25,0.561,1.25,1.25c0,0.204-0.052,0.509-0.302,0.804	l-2.16,2.36l2.561,2.97l-0.103,0.24c0.003,0.036,0.005,0.072,0.005,0.107c0,0.689-0.561,1.25-1.25,1.25H38.994z"
        opacity=".05"
      ></path>
      <path
        d="M38.994,27.5c-0.289,0-0.563-0.125-0.752-0.341l-1.521-1.736l-1.566,1.73	c-0.188,0.209-0.459,0.329-0.741,0.329H28.5c-0.551,0-1-0.449-1-1V20.5c0-0.551,0.449-1,1-1h6.585l1.711,1.936l1.612-1.75	l0.033-0.014c0.13-0.099,0.286-0.153,0.45-0.153h1.541c0.414,0,0.75,0.336,0.75,0.75c0,0.121-0.032,0.302-0.184,0.481l-2.447,2.673	l2.647,3.069l-0.037,0.085c0.014,0.056,0.021,0.114,0.021,0.172c0,0.414-0.336,0.75-0.75,0.75H38.994z M33.507,25.016l0.347-0.381	h-3.638v0.381H33.507z M34.055,24.415l0.916-1.005l-0.916-1.026V24.415z M33.991,22.312l-0.265-0.296l-3.51-0.01v0.307H33.991z"
        opacity=".07"
      ></path>
      <path
        fill="#fff"
        d="M40.615,26.586l0.001-0.003l-2.734-3.169l2.734-2.986c0.037-0.044,0.066-0.097,0.066-0.159	c0-0.138-0.112-0.25-0.25-0.25c-0.007,0-1.538,0-1.541,0c-0.072,0-0.135,0.033-0.18,0.082l-0.007,0.003l-1.916,2.079L34.86,20H28.5	c-0.276,0-0.5,0.224-0.5,0.5v5.982c0,0.276,0.224,0.5,0.5,0.5h5.913c0.141,0,0.276-0.06,0.371-0.164l1.943-2.147l1.891,2.158	C38.713,26.938,38.85,27,38.994,27h1.44c0.138,0,0.25-0.112,0.25-0.25C40.683,26.686,40.655,26.63,40.615,26.586z M33.728,25.516	h-4.011v-1.381h3.838v-1.323h-3.838v-1.308l4.234,0.012l1.693,1.897L33.728,25.516z"
      ></path>
    </svg>
  ),
  PayPal: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="32"
      viewBox="0 0 48 48"
    >
      <path
        fill="#0d62ab"
        d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006	C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001	c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"
      ></path>
      <path
        fill="#199be2"
        d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115	c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001	c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015	l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102	C42.18,16.106,37.358,13.019,33.183,12.994z"
      ></path>
      <path
        fill="#006fc4"
        d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765	c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882	C33.166,12.993,33.148,13,33.132,13H19.66z"
      ></path>
    </svg>
  ),
};

const Footer = () => {
  // Primary brand color
  const primaryColor = '#9538E2'; // Vibrant purple
  const primaryColorDark = '#7d2bc4'; // Darker shade for hover states
  
  // State for newsletter subscription
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Function to handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
      console.log('Newsletter subscription submitted:', email);
    }
  };

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full animate-pulse" style={{ backgroundColor: primaryColor }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full animate-bounce" style={{ backgroundColor: primaryColor, animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full animate-ping" style={{ backgroundColor: primaryColor, animationDuration: '4s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div className="space-y-4 group">
            <h2 className="text-2xl font-bold text-white transform transition-all duration-500 group-hover:scale-105">
              <span style={{ color: primaryColor }} className="animate-pulse">Gadget</span> 
              <span className="ml-1">Heaven</span>
            </h2>
            <p className="text-sm leading-relaxed transform transition-all duration-500 group-hover:translate-x-2 opacity-80 group-hover:opacity-100">
              Leading the way in cutting-edge technology and innovation. 
              Discover the future with our premium selection of gadgets and tech products.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              {[
                { Icon: AiOutlineTwitter, href: 'https://twitter.com', delay: '0ms' },
                { Icon: AiOutlineInstagram, href: 'https://instagram.com', delay: '100ms' },
                { Icon: AiFillFacebook, href: 'https://facebook.com', delay: '200ms' },
                { Icon: AiFillYoutube, href: 'https://youtube.com', delay: '300ms' }
              ].map(({ Icon, href, delay }, index) => (
                <a 
                  key={index}
                  href={href} 
                  className="transform transition-all duration-500 hover:scale-125 hover:rotate-12 hover:-translate-y-1 relative group"
                  style={{ 
                    color: primaryColor,
                    transitionDelay: delay
                  }}
                >
                  <Icon className="w-6 h-6 transition-all duration-300 group-hover:drop-shadow-lg" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: primaryColor }}></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: primaryColor }}></div>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About Us', 'Blog', 'Contact'].map((item, index) => (
                <li key={index} className="transform transition-all duration-300 hover:translate-x-3 hover:scale-105">
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm transition-all duration-300 relative group inline-block hover:text-white"
                  >
                    <span className="relative z-10">{item}</span>
                    <span 
                      className="absolute inset-0 w-0 h-full transition-all duration-300 group-hover:w-full opacity-10 -z-10"
                      style={{ backgroundColor: primaryColor }}
                    ></span>
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: primaryColor }}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Customer Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white relative">
              Customer Support
              <div className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: primaryColor }}></div>
            </h3>
            <ul className="space-y-3">
              {['FAQ', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                <li key={index} className="transform transition-all duration-300 hover:translate-x-3 hover:scale-105">
                  <Link 
                    to={`/${item.toLowerCase().replace(/[&\s]+/g, '-')}`} 
                    className="text-sm transition-all duration-300 relative group inline-block hover:text-white"
                  >
                    <span className="relative z-10">{item}</span>
                    <span 
                      className="absolute inset-0 w-0 h-full transition-all duration-300 group-hover:w-full opacity-10 -z-10"
                      style={{ backgroundColor: primaryColor }}
                    ></span>
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: primaryColor }}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm transform transition-all duration-300 hover:translate-x-1">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <div className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 text-sm transition-all duration-300 focus:bg-gray-700 group-hover:bg-gray-750"
                  style={{ 
                    focusRingColor: primaryColor,
                    boxShadow: 'none'
                  }}
                  required
                />
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: primaryColor }}
                ></div>
              </div>
              <button 
                type="submit" 
                disabled={isSubscribed}
                className="text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed relative overflow-hidden group"
                style={{ 
                  backgroundColor: isSubscribed ? '#4ade80' : primaryColor,
                }}
              >
                <span className="relative z-10">
                  {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </form>
            
            {/* Contact Information */}
            <div className="space-y-3 pt-4">
              {[
                { Icon: AiOutlinePhone, text: '+1 (555) 123-4567' },
                { Icon: AiOutlineMail, text: 'support@gadgetheaven.com' },
                { Icon: AiOutlineEnvironment, text: '123 Tech Street, Digital City, 10001' }
              ].map(({ Icon, text }, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm group cursor-pointer">
                  <Icon 
                    className="flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" 
                    style={{ color: primaryColor }} 
                  />
                  <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider with custom accent color */}
      <div className="border-t" style={{ borderColor: `${primaryColor}30` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left transition-all duration-300 hover:text-white">
            © {new Date().getFullYear()} Gadget Heaven. All rights reserved.
          </p>
          
          {/* Payment Methods */}
          <div className="flex items-center space-x-4 group">
            <span className="text-xs transition-all duration-300 group-hover:text-white">We accept:</span>
            <div className="flex space-x-3">
              <PaymentIcons.Visa />
              <PaymentIcons.Mastercard />
              <PaymentIcons.Amex />
              <PaymentIcons.PayPal />
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full transition-all duration-300 text-white transform hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 relative group animate-pulse"
            style={{ 
              backgroundColor: primaryColor,
              focusRingColor: primaryColor
            }}
            aria-label="Back to top"
          >
            <AiOutlineArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;