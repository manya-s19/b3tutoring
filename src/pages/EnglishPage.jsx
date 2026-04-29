
import React from 'react';
import { Helmet } from 'react-helmet';
import SubjectHero from '@/components/SubjectHero';
import CategoryCard from '@/components/CategoryCard';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const EnglishPage = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      title: "Middle School English",
      description: "Develop critical reading and writing skills early on. We focus on grammar fundamentals, vocabulary expansion, and reading comprehension.",
      topics: ["Grammar Rules", "Creative Writing", "Reading Comprehension", "Vocabulary"]
    },
    {
      title: "High School English",
      description: "Support for literary analysis and essay writing. Learn to structure arguments effectively and analyze complex texts.",
      topics: ["Essay Structure", "Literary Analysis", "Research Papers", "Classic Literature"]
    },
    {
      title: "AP English Literature",
      description: "Advanced preparation for AP exams. Deep dive into poetry, prose, and drama analysis to secure a 5 on the exam.",
      topics: ["Poetry Analysis", "Prose Interpretation", "Thematic Essays", "Exam Timing"]
    },
    {
      title: "IB English (SL/HL)",
      description: "Expert guidance for the IB Language A curriculum. Support for Oral Assessments and HL Essays.",
      topics: ["Individual Oral", "HL Essay", "Paper 1 & 2", "World Literature"]
    },
    {
      title: "SAT/ACT English Prep",
      description: "Master the reading and writing sections of standardized tests. Learn to identify grammar errors and analyze passages quickly.",
      topics: ["Grammar Mechanics", "Rhetorical Skills", "Reading Speed", "Evidence-Based Reading"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Block by Block Tutoring Services</title>
        <meta name="description" content="Expert English tutoring for writing, literature, AP, IB, and SAT/ACT preparation." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <SubjectHero 
          title="Excel in English"
          description="Unlocking the power of words through expert guidance in reading, writing, and analysis."
          imageUrl="https://images.unsplash.com/photo-1565164370954-8eac883fb7c8"
          overlayGradient="bg-gradient-to-br from-pink-600/90 via-rose-500/80 to-pink-400/90"
        />

        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">English & Literature Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From grammar basics to advanced literary criticism, we cover it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <CategoryCard 
                key={index}
                {...cat}
                delay={index * 0.1}
                onContactClick={handleContactClick}
                colorClass="from-pink-500 to-rose-500"
              />
            ))}

            {/* Gallery of Words */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categories.length * 0.1 }}
              className="group"
            >
              <Link to="/gallery">
                <div className="h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/20 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-yellow-300" />
                    <h3 className="text-2xl font-bold text-white">Gallery of Words</h3>
                  </div>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Explore exceptional student writing from our English program. Read creative pieces, essays, and poetry showcasing the talent of our writers.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white border border-white/30">
                      Student Work
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white border border-white/30">
                      Creative Writing
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white border border-white/30">
                      Essays & Poetry
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white border border-white/30">
                      Recognition
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="w-full py-3 bg-gradient-to-r from-white to-purple-50 text-purple-700 rounded-lg font-bold hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                      View Gallery
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        <ContactForm />
      </div>
    </>
  );
};

export default EnglishPage;
