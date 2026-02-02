
import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Block by Block Tutoring Services</title>
        <meta name="description" content="Premium one-on-one tutoring services for Math, English, French, and Science. Personalized learning that drives real results. 500+ happy students, 98% success rate." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <Services />
        <Testimonials />
        <ContactForm />
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Block by Block Tutoring</span>
                <p className="mt-4 text-gray-400">Helping students build fundamentals and foundations, one block at a time.</p>
              </div>
              
              <div>
                <span className="font-bold text-lg mb-4 block">Quick Links</span>
                <div className="space-y-2">
                  <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</p>
                  <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Testimonials</p>
                  <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</p>
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
      </div>
    </>
  );
};

export default HomePage;
