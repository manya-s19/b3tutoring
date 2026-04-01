import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, BookOpen, Globe, Atom } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Calculator className="w-12 h-12" />,
      title: 'Mathematics',
      description: 'Learn everything from arithmetic to calculus, and prep for AP, IB, & SAT/ACT Math examinations.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      emoji: '📐',
      route: '/math'
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'English',
      description: 'Enhance reading comprehension, writing skills, and prep for IB, AP, and SAT/ACT English tests',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      emoji: '📚',
      route: '/english'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'French',
      description: 'Master the French language through conversation and grammar, and prep for IB and AP exams.',
      color: 'from-green-500 to-emerald-600', // Changed to green gradient
      bgColor: 'bg-green-50', // Changed to green background
      textColor: 'text-green-600', // Changed to green text
      emoji: '🗣️',
      route: '/french'
    },
    {
      icon: <Atom className="w-12 h-12" />,
      title: 'Science',
      description: 'Explore chemistry and physics with hands-on learning approaches, and prep for IB/AP tests.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      emoji: '🔬',
      route: '/science'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-amber-50 via-orange-50 to-white py-6 mb-10">  
          <motion.div /*SAT*/
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-5 mb-20 -mt-6"
          >
            <span className="text-black font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide">
              LIMITED TIME{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                DISCOUNT
              </span>{' '}
              ON SAT PREP!
            </span>
            
            <a  href="https://drive.google.com/file/d/1Fj9pqdGaIfi_WaT58z7k0Y46EbEiCDZo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2 font-bold text-xl sm:text-2xl md:text-3xl hover:text-blue-400 transition-colors duration-200"            
            >
              VIEW PACKAGE OFFERS HERE →
            </a>
          </motion.div>
        </div>
          

          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold text-sm mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Expert Tutoring in
            <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Every Subject
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Personalized one-on-one sessions designed to match your child's learning style and pace. <strong>Offered for Grades 4-12! Click on any subject below to learn more!</strong>
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() => navigate(service.route)}
              className="group relative cursor-pointer"
            >
              <div className={`relative h-full p-8 ${service.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}>
                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-lg text-white`}
                >
                  <span className="text-4xl drop-shadow-md">{service.emoji}</span>
                </motion.div>

                {/* Content */}
                <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Click Hint */}
                <span className={`text-sm font-semibold ${service.textColor} flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Learn More &rarr;
                </span>

                {/* Hover Indicator */}
                <div className={`absolute bottom-8 left-8 right-8 h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Not sure which subject? We'll help you find the perfect match!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;