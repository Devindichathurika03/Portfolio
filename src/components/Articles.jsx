
import { motion } from "framer-motion";
import { Calendar, ExternalLink, TrendingUp } from "lucide-react";
import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const articles = [
{
  id: 1,
  title: "Building Scalable React Applications: Lessons from Real Projects",
  excerpt:
    "A deep dive into scalable React architecture, real-world state management decisions, and performance optimization techniques applied in production-grade software projects.",
  date: "January 10, 2026",
  tags: ["React", "Scalability", "Architecture", "Performance"],
  link: "https://www.linkedin.com/pulse/from-props-popcorn-how-i-took-my-first-leap-react-devindi-chathurika-2mpic/",
  color: "from-purple-500 to-pink-500",
},
{
  id: 2,
  title: "Level Up Your React Skills with Hooks",
  excerpt:
    "A beginner-friendly yet practical breakdown of React Hooks, explaining how hooks like useState, useEffect, and useContext transformed my understanding of React from confusion to confident, intentional development.",
  date: "December 15, 2025",
  tags: ["React", "Hooks", "Frontend", "JavaScript"],
  link: "https://www.linkedin.com/pulse/classes-just-hooks-my-react-glow-up-devindi-chathurika-7jgcc/",
  color: "from-cyan-500 to-blue-500",
},
 {
  id: 3,
  title: "Tutorial Hell vs Real MERN Projects",
  excerpt:
    "A reflection on breaking out of tutorial hell by building a real-world MERN application. This article shares how working on the Ariyahome Construction website reshaped my understanding of full-stack development, system design, and professional problem-solving.",
  date: "December 24, 2025",
  tags: ["MERN", "React", "Real-World Projects", "Full Stack"],
  link: "https://www.linkedin.com/pulse/tutorial-hell-vs-real-mern-projects-devindi-chathurika-qlvzc/",
  color: "from-orange-500 to-red-500",
},
{
  id: 4,
  title: "AI Isn’t Scary, It’s Your New Project Sidekick",
  excerpt:
    "A beginner-friendly guide to integrating AI into real software projects. This article breaks down AI providers, API integration challenges, and how AI can support real decision-making using structured outputs—based on building the ClariFi AI web app with Cohere.",
  date: "December 30, 2025",
  tags: ["AI", "Cohere", "Web Development", "Real Projects"],
  link: "https://www.linkedin.com/pulse/ai-isnt-scary-its-your-new-project-sidekick-devindi-chathurika-qgedc/",
  color: "from-indigo-500 to-purple-500",
},
];

function Articles() {
  
  const [hoveredArticle, setHoveredArticle] = useState(null);

  return (
    <section id="articles" className="relative py-1 px-6 overflow-hidden "> 
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
         
          <h2 className={`${styles.sectionHeadText}`}>
            LinkedIn Articles.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and lessons learned from my development journey
          </p>
        </motion.div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredArticle(article.id)}
              onHoverEnd={() => setHoveredArticle(null)}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* Card glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-0 blur-2xl transition-opacity duration-500 rounded-2xl`}
                animate={{
                  opacity: hoveredArticle === article.id ? 0.2 : 0,
                }}
              />

              {/* Card */}
              <motion.div
                className="relative h-full p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 group-hover:border-white/20"
                whileHover={{
                  y: -5,
                  rotateX: 2,
                }}
              >
                {/* Article header */}
                <div className="mb-4">
                  <h3 className="text-xl mb-3 text-white leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div>{article.readTime}</div>
                </div>

                {/* Engagement bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-1 bg-gradient-to-r ${article.color} rounded-full`} />
                    <span className="text-xs text-gray-400">{article.engagement}</span>
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-purple-400 transition-colors group/link"
                  >
                    Read Article
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-3xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA to LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://www.linkedin.com/in/devindi-chathurika/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl hover:border-indigo-500/40 backdrop-blur-sm transition-all group"
          >
            <TrendingUp className="w-5 h-5 text-indigo-400" />
            <span className="text-white">Follow me on LinkedIn for more articles</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        
      </div>
    </section>
  );
}

export default SectionWrapper(Articles, "Articles", "!pt-0");