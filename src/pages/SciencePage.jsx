
import React from 'react';
import { Helmet } from 'react-helmet';
import SubjectHero from '@/components/SubjectHero';
import CategoryCard from '@/components/CategoryCard';
import ContactForm from '@/components/ContactForm';

const SciencePage = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      title: "Middle School Science",
      description: "Spark curiosity and build a strong foundation. We cover earth science, life science, and physical science fundamentals to prepare students for advanced high school courses.",
      topics: ["Scientific Method", "Cells & Biology", "Forces & Motion", "Earth Systems"]
    },
    {
      title: "High School Physics & Chemistry",
      description: "Conquer the toughest high school subjects. We demystify stoichiometry, thermodynamics, mechanics, and electricity with clear explanations and problem-solving strategies.",
      topics: ["Stoichiometry", "Atomic Structure", "Newtonian Mechanics", "Circuits"]
    },
    {
      title: "AP Physics & Chemistry",
      description: "Elite preparation for AP Science exams. Detailed coverage of AP Chemistry, Physics 1, 2, and C. We focus on conceptual understanding and exam-specific requirements.",
      topics: ["AP Chem Labs", "Kinematics", "Electrochemistry", "Free Response Questions"]
    },
    {
      title: "IB Science (SL/HL)",
      description: "Comprehensive support for IB Biology, Chemistry, and Physics. Guidance for Internal Assessments (IA) and rigorous preparation for external exams.",
      topics: ["Group 4 Project", "Data Analysis", "Option Modules", "Internal Assessment"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Block by Block Tutoring Services</title>
        <meta name="description" content="Expert science tutoring for Middle School, High School, AP, and IB Physics and Chemistry." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <SubjectHero 
          title="Discover the Universe"
          description="From the atom to the cosmos, we help students understand the fundamental laws that govern our world."
          imageUrl="https://images.unsplash.com/photo-1583607264434-2d8e199b3a17"
          overlayGradient="bg-gradient-to-br from-blue-600/90 via-indigo-500/80 to-blue-400/90"
        />

        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Science & STEM Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on learning approaches for biology, chemistry, and physics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {categories.map((cat, index) => (
              <CategoryCard 
                key={index}
                {...cat}
                delay={index * 0.1}
                onContactClick={handleContactClick}
                colorClass="from-blue-500 to-indigo-500"
              />
            ))}
          </div>
        </section>

        <ContactForm />
      </div>
    </>
  );
};

export default SciencePage;
