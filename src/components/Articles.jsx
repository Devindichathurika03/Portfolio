import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Calendar, Eye } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications: Lessons from Real Projects",
    excerpt: "Exploring architecture patterns, state management strategies, and performance optimization techniques I've learned while building production-ready applications.",
    date: "January 10, 2026",
    readTime: "5 min read",
    views: "1.2K",
    engagement: "156 reactions",
    tags: ["React", "Architecture", "Best Practices"],
    link: "https://linkedin.com/in/devindi/article-1",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "The Power of Continuous Learning in Tech",
    excerpt: "How I stay updated with the latest technologies, my learning strategies, and why being a perpetual student is crucial for software developers.",
    date: "December 28, 2025",
    readTime: "4 min read",
    views: "980",
    engagement: "124 reactions",
    tags: ["Career", "Learning", "Growth"],
    link: "https://linkedin.com/in/devindi/article-2",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "From Idea to Deployment: My First Full-Stack Project",
    excerpt: "A detailed walkthrough of building and deploying a full-stack application, including challenges faced, lessons learned, and key takeaways for aspiring developers.",
    date: "December 15, 2025",
    readTime: "7 min read",
    views: "1.5K",
    engagement: "203 reactions",
    tags: ["Full-Stack", "Tutorial", "DevOps"],
    link: "https://linkedin.com/in/devindi/article-3",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "UI/UX Principles Every Developer Should Know",
    excerpt: "Bridging the gap between design and development by understanding core UX principles that lead to better user experiences and more effective products.",
    date: "November 30, 2025",
    readTime: "6 min read",
    views: "2.1K",
    engagement: "287 reactions",
    tags: ["UI/UX", "Design", "Frontend"],
    link: "https://linkedin.com/in/devindi/article-4",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Articles() {
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  return (
    <section id="articles" className="relative py-24 px-6 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm mb-6">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300">Sharing Knowledge</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            LinkedIn Articles
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
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {article.views} views
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
                    onClick={(e) => e.preventDefault()}
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
            href="https://linkedin.com/in/devindi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl hover:border-indigo-500/40 backdrop-blur-sm transition-all group"
            onClick={(e) => e.preventDefault()}
          >
            <TrendingUp className="w-5 h-5 text-indigo-400" />
            <span className="text-white">Follow me on LinkedIn for more articles</span>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: "Articles Published", value: "15+" },
            { label: "Total Views", value: "12K+" },
            { label: "Engaged Readers", value: "1.5K+" },
            { label: "Topics Covered", value: "8+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center p-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl"
            >
              <div className="text-2xl mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

