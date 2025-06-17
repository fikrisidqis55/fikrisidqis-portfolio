"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuCalendar, LuClock, LuArrowRight } from "react-icons/lu";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt: "Learn best practices for structuring large React applications with TypeScript, including advanced patterns and performance optimizations.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    slug: "scalable-react-typescript"
  },
  {
    id: 2,
    title: "The Future of Web Development: What's Coming in 2024",
    excerpt: "Explore upcoming trends in web development, from new frameworks to emerging technologies that will shape the industry.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Web Dev",
    slug: "future-web-development-2024"
  },
  {
    id: 3,
    title: "Optimizing Next.js Performance for Production",
    excerpt: "Deep dive into Next.js optimization techniques, including image optimization, code splitting, and caching strategies.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Next.js",
    slug: "nextjs-performance-optimization"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 text-white relative">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FF5700]">
            Latest Articles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1A120B] to-[#2A1E17] rounded-xl border border-[#3A2A22] hover:border-[#FF5700]/50 transition-all group overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-[#FF5700]/20 text-[#FF9100] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <LuCalendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <LuClock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#FF9100] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#FF5700] hover:text-[#FF9100] transition-colors group/link"
                >
                  Read More
                  <LuArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#FF5700] text-[#FF5700] rounded-lg hover:bg-[#FF5700] hover:text-white transition-all"
          >
            View All Articles
            <LuArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}