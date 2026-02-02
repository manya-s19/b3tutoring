
import React from 'react';
import { Helmet } from 'react-helmet';
import SubjectHero from '@/components/SubjectHero';
import CategoryCard from '@/components/CategoryCard';
import ContactForm from '@/components/ContactForm';

const FrenchPage = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      title: "Conversational French",
      description: "Build fluency and confidence in speaking. Our immersive approach helps students move beyond textbook phrases to real-world communication. Perfect for travel preparation or improving accent and pronunciation.",
      topics: ["Pronunciation", "Daily Vocabulary", "Listening Skills", "Interactive Dialogue"]
    },
    {
      title: "Grammar & Writing",
      description: "Master the complexities of French grammar. We simplify conjugations, tenses, and sentence structure, helping students write clear, accurate, and sophisticated French compositions.",
      topics: ["Verb Conjugation", "Complex Tenses", "Essay Writing", "Structural Accuracy"]
    },
    {
      title: "Exam Preparation (DELF/DALF)",
      description: "Targeted strategies for standardized French exams. Whether it's for school credit (AP/IB) or international certification, we provide rigorous practice and feedback to ensure high scores.",
      topics: ["Exam Strategy", "Mock Tests", "Reading Comprehension", "Written Expression"]
    },
    {
      title: "Cultural Immersion",
      description: "Learn language through culture. Explore French literature, cinema, history, and customs to gain a deeper understanding and appreciation of the Francophone world.",
      topics: ["French History", "Literature Analysis", "Contemporary Culture", "Idiomatic Expressions"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Block by Block Tutoring Services</title>
        <meta name="description" content="Expert French tutoring including conversation, grammar, exam prep, and cultural immersion." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <SubjectHero 
          title="Parlez-vous Français?"
          description="Embark on a linguistic journey. Master the French language with immersive, personalized tutoring tailored to your goals."
          imageUrl="https://images.unsplash.com/photo-1694428266927-cd50ae9d8f51"
          overlayGradient="bg-gradient-to-br from-green-600/90 via-emerald-500/80 to-green-400/90"
        />

        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete French Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the beauty of the French language through our structured learning paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((cat, index) => (
              <CategoryCard 
                key={index}
                {...cat}
                delay={index * 0.1}
                onContactClick={handleContactClick}
                colorClass="from-green-500 to-emerald-600"
              />
            ))}
          </div>
        </section>

        <ContactForm />
      </div>
    </>
  );
};

export default FrenchPage;
