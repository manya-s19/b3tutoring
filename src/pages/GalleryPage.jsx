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
    title: "Project Reverse Invasion",
    author: "Ruth B.",
    grade: "Grade 5",
    date: "May 2026",
    excerpt: "The fate of the whole world was in their hands…...",
    content: `"It’s over" William said as the aliens took over. This was it they had been caught. Project Reverse Invasion was over, Earth was doomed and it was all their fault. March 3rd. Harper had recently joined a science club and tomorrow they were going to see Dr. Alexander’s new invention. Harper was very excited! She couldn’t wait to see what kind of invention Dr.Alexander had made. That night she couldn't sleep, her mind was filled with many questions. What was the invention? What was its purpose? She wouldn’t know until tomorrow. 

March 4, It was the next day Harper woke up so fast she practically jumped out of her bed. She got ready really quickly and hopped on the bus. On the bus she made a new friend whose name was William. William was just like Harper, he was very excited to see what invention Dr. Alexander had made. When they got there they were greeted by Dr.Alexander himself. After his long speech it was the time they both had been waiting for Dr.Alexander’s invention. Dr. Alexander had made a machine that could take them to any universe they wanted. "This is for a very important mission," Dr.Alexander said. Harper and William pleaded with Dr.Alexander to let them go on the mission too. "We’ll be very responsible," William said.  "We won’t get lost, " Harper added. Dr. Alexander said that he wouldn’t let them because it was a very important mission that only he could do. A week later Harper and William got an email from  Dr. Alexander. It said that he had thought about it and that he might need some extra help and assistance with the mission.

April 4, It had been a month since Harper and William had talked to Dr.Alexander,today they would go to Nyxara to reconcile with the people there. When they arrived, Dr.Alexander told them that they had to be hidden or the Nyxarians would be very angry by their presence. He explained that both universes had a terrible past. Harper and William believed him.  April 11, It had been a week since the arrival at  Nyxara. The three mostly survived on berries and the river beside a cave. None of the Nyxarians went near the cave so they decided to set camp there. April 15, Harper and William wondered " are we ever going to actually go to the Nyxarians and reconcile with them. If so, when?" They both went to ask Dr.Alexander the only thing that was inside the cave was some metal. "That’s weird,We didn’t bring any metal with us," William said. " William, look there is some kind of blueprint here" Harper mentioned.
"The blueprint is for an invention to… destroy and take over the universe Nyxara!!!!" Harper said in disbelief."So that was his real plan" William responded. "There’s no way we believed him," William added.

	That same day, Both Harper and William went to find Dr.Alexander to confront him. But when they found him, he was destroying the universe. He was Nyxarians life and home for no reason. The two got extremely  mad. They went to try and stop Dr.Alexander from destroying the universe even further. They told him what he was doing was very wrong and how he was being super cruel. After hours of talking and pleading with Dr.Alexander not to hurt them he finally said that he would never harm the Nyxarians again. Harper and William trusted him again and went to bed. Little did they know that would be a grave mistake. The next morning the two woke up to complete silence. They looked outside and all of the Nyxarians were gone. When they asked Dr. Alexander, he had no words. Later he said they had left, with no explanation. He mentioned that they broke the machine trying to escape. In her gut, Harper felt something was off. How had they broken the machine in the first place? 


	April 21, After a few days Dr.Alexander’s invention was working again. When they went back to Earth it was a complete disaster. Their home was taken over by the Nyxarians and project reverse invasion was over. Harper and William both looked at each other wondering what they would do next. The two were shocked and confused.
They questioned how they let the Nyxarians invade the Earth and take over. 
They both only knew that the fate of the whole world was in their hands…`,
    category: "Short Story"
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
                <div className="p-6 h-full flex flex-col relative">
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

                  {/* Content preview - hidden on hover */}
                  <div className="text-white/80 text-sm space-y-3 flex-1 overflow-hidden group-hover:hidden">
                    <p className="leading-relaxed line-clamp-[12]">
                      {entry.content}
                    </p>
                  </div>

                  {/* Full content - shown on hover with scroll */}
                  <div className="hidden group-hover:flex text-white/80 text-sm space-y-3 flex-1 overflow-y-auto flex-col pr-2">
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
