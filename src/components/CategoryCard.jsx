
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CategoryCard = ({ title, description, topics, onContactClick, delay = 0, colorClass = "from-orange-500 to-pink-500" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
    >
      <div className={`h-2 bg-gradient-to-r ${colorClass}`}></div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>
        
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Topics</h4>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onContactClick}
          className={`group w-full py-3 px-6 rounded-lg bg-gradient-to-r ${colorClass} text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
        >
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
