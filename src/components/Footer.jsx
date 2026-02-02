import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent inline-block">
              Block by Block Tutoring
            </Link>
            <p className="mt-4 text-gray-400">Helping students build fundamentals and foundations, one block at a time.</p>
          </div>
          
          <div>
            <span className="font-bold text-lg mb-4 block">Quick Links</span>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <button 
                onClick={() => handleScroll('services')} 
                className="text-left text-gray-400 hover:text-white transition-colors focus:outline-none"
              >
                Services
              </button>
              <button 
                onClick={() => handleScroll('testimonials')} 
                className="text-left text-gray-400 hover:text-white transition-colors focus:outline-none"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleScroll('contact')} 
                className="text-left text-gray-400 hover:text-white transition-colors focus:outline-none"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <span className="font-bold text-lg mb-4 block">Contact Info</span>
            <div className="space-y-2 text-gray-400">
              <p>blockbyblock.inquiries@gmail.com</p>
              <p>647-510-6249</p>
              <p>Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BlockByBlock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;