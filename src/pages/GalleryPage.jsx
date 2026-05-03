import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample student entries - you can add/edit these
const studentEntries = [
  {
    id: 1,
    title: "SDG: Reflecting on The Importance of Zero Hunger",
    author: "Gouri K.",
    grade: "Grade 8",
    date: "April 2026",
    excerpt: "Everyone deserves access to nutritious food and a healthy life...",
    content: `Learning about Goal #2: Zero Hunger taught me that hunger is a serious global issue and not everyone has access to enough healthy food. I was most surprised to learn how many people around the world are affected, even in developed countries. Hunger impacts people by making it harder to stay healthy, learn in school, and live a good life, and it also affects entire communities by making poverty worse (another one of the SDG goals). It can also lead to long-term health problems and limit opportunities for people to succeed in the future. 

My plan includes investing in sustainable agriculture, reducing food waste, improving nutrition, protecting the environment, strengthening social protection, promoting equity and inclusion, and building partnerships within the community. I could also help by organizing food drives at school or raising awareness about food waste, which can help both locally and globally. One action students can take is to donate unused food or volunteer at a food bank. I could also encourage my friends and family to be more mindful when wasting food and support organizations that help people in need. Even small actions, when done by many people, can make a difference. 

Overall, this goal is important because everyone deserves access to nutritious food and a healthy life. If more people take action, we can move closer to ending hunger and creating a better world for everyone!`,
    category: "Global Issues"
  },
  {
    id: 2,
    title: "A Letter to My Future Self",
    author: "Michael K.",
    grade: "Grade 11",
    date: "December 2025",
    excerpt: "Dear Future Me, I hope you remember what it felt like to dream without limits...",
    content: `Dear Future Me,

I hope you remember what it felt like to dream without limits. Right now, at sixteen, the world feels both impossibly large and intimately small. I wonder who you've become, what paths you've chosen, and whether you still remember the boy who stayed up late writing by flashlight.

Don't forget to be kind to yourself. Don't forget that mistakes are just stories waiting to be rewritten. And most importantly, don't forget to keep writing.

With hope,
Your Past Self`,
    category: "Personal Essay"
  },
  {
    id: 3,
    title: "The Last Library",
    author: "Emma L.",
    grade: "Grade 9",
    date: "February 2026",
    excerpt: "In a world where books were forbidden, one girl discovered a secret worth protecting...",
    content: `In a world where books were forbidden, one girl discovered a secret worth protecting. The entrance was hidden behind a rusted filing cabinet in the abandoned government building. Maya had stumbled upon it by accident, and what she found inside changed everything.

Thousands of books lined the walls, their spines cracked and weathered but their words still alive. She ran her fingers along them, feeling the weight of forgotten stories. In that moment, she made a choice: she would become the keeper of words, the guardian of stories that the world had tried to erase.`,
    category: "Creative Fiction"
  }
];

function GalleryPage() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gallery of Words
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Celebrating the creativity, voice, and talent of our student writers. 
            Each piece tells a unique story worth sharing.
          </motion.p>
        </div>
      </section>

      {/* Horizontal Scrolling River */}
      <section className="pb-20 px-6">
        <div className="relative">
          <motion.div 
            className="flex gap-8 py-8"
            animate={isPaused ? {} : { x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear"
              }
            }}
          >
            {/* Duplicate entries for seamless loop */}
            {[...studentEntries, ...studentEntries].map((entry, index) => (
              <motion.article
                key={`${entry.id}-${index}`}
                className="flex-shrink-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden group cursor-pointer"
                style={{ width: '500px', height: '600px' }}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
                whileHover={{ 
                  scale: 1.1,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Category Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/30">
                    {entry.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 h-full flex flex-col overflow-y-auto">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {entry.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-white/80 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{entry.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{entry.date}</span>
                    </div>
                  </div>

                  <p className="text-white/90 mb-4 italic">
                    "{entry.excerpt}"
                  </p>

                  <div className="text-white/80 text-sm space-y-3 flex-1">
                    {entry.content.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-white/60">{entry.grade}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to See Your Work Featured?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our students produce incredible writing every day. If you'd like your work considered 
            for the Gallery of Words, ask your tutor about submission guidelines.
          </p>
          <Link 
            to="/english"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Learn More About Our Program
          </Link>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;


