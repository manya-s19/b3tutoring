import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1561089489-f13d5e730d72" alt="Students learning together" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-pink-600/85 to-orange-500/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="flex flex-col items-center gap-8">
          {/* Icon Badge */}
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2,
          type: 'spring',
          stiffness: 200
        }} className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">Premium Tutoring Services</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight max-w-5xl">
            Unlock Your Child's
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
              Full Potential
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl leading-relaxed font-light">Expert one-on-one tutoring in Math, English, French, and Science. Personalized learning that drives real change.</motion.p>

          {/* CTA Button */}
          <motion.button initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.98
        }} onClick={scrollToContact} className="group mt-4 px-8 py-5 bg-white text-orange-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 flex items-center gap-3">
            Start Learning Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Trust Indicators */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="flex flex-wrap items-center justify-center gap-8 mt-8 text-white/90">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">15.3%</span>
              <span className="text-sm">Average Grade Boost</span>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">98%</span>
              <span className="text-sm">Success Rate</span>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold">5+</span>
              <span className="text-sm">Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0]
    }} transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl" />
      <motion.div animate={{
      y: [0, 20, 0],
      rotate: [0, -5, 0]
    }} transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl" />
    </section>;
};
export default Hero;