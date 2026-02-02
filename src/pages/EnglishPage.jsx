
import React from 'react';
import { Helmet } from 'react-helmet';
import SubjectHero from '@/components/SubjectHero';
import CategoryCard from '@/components/CategoryCard';
import ContactForm from '@/components/ContactForm';

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
          </div>
        </section>

        <ContactForm />
      </div>
    </>
  );
};

export default EnglishPage;
