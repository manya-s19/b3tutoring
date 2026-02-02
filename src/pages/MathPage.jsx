
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import SubjectHero from '@/components/SubjectHero';
import CategoryCard from '@/components/CategoryCard';
import ContactForm from '@/components/ContactForm';

const MathPage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      title: "Middle School Math",
      description: "Build a strong foundation in core mathematical concepts. We focus on bridging gaps and building confidence for high school preparation.",
      topics: ["Pre-Algebra", "Geometry Basics", "Word Problems", "Fractions & Decimals"]
    },
    {
      title: "High School Math",
      description: "Comprehensive support for standard high school curriculum. Master complex equations and geometric proofs with ease.",
      topics: ["Algebra I & II", "Geometry", "Trigonometry", "Pre-Calculus"]
    },
    {
      title: "AP Math",
      description: "Rigorous preparation for AP exams. Our specialized tutors help students grasp advanced concepts and secure top scores.",
      topics: ["AP Calculus AB", "AP Calculus BC", "AP Statistics", "Exam Strategies"]
    },
    {
      title: "IB Math (SL/HL)",
      description: "Specialized support for the International Baccalaureate curriculum. We cover both Analysis & Approaches and Applications & Interpretation.",
      topics: ["Internal Assessments", "Paper 1, 2 & 3", "Pure Mathematics", "Statistical Analysis"]
    },
    {
      title: "SAT/ACT Math Prep",
      description: "Targeted test preparation to maximize scores. Learn time-management strategies and master the specific question types found on standardized tests.",
      topics: ["Practice Tests", "Score Optimization", "Time Management", "Grid-ins & Multiple Choice"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Block by Block Tutoring Services</title>
        <meta name="description" content="Expert math tutoring for Middle School, High School, AP, IB, and SAT/ACT preparation." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <SubjectHero 
          title="Master Mathematics"
          description="From basic arithmetic to advanced calculus, our expert tutors transform frustration into understanding and confidence."
          imageUrl="https://images.unsplash.com/photo-1561089489-f13d5e730d72"
          overlayGradient="bg-gradient-to-br from-orange-600/90 via-red-500/80 to-orange-400/90"
        />

        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Math Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect program designed to meet your specific academic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <CategoryCard 
                key={index}
                {...cat}
                delay={index * 0.1}
                onContactClick={handleContactClick}
                colorClass="from-orange-500 to-red-500"
              />
            ))}
          </div>
        </section>

        <ContactForm />
      </div>
    </>
  );
};

export default MathPage;
