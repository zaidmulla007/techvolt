'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const blogPosts = [
    {
        id: 1,
        title: 'Understanding ATEX Certification for Industrial Equipment',
        excerpt: 'A comprehensive guide to ATEX certification requirements and why they matter for equipment used in explosive atmospheres across oil & gas and chemical industries.',
        image: '/images/products/ex-electrical/1.a  Explosion proof (EX) Socket & Plugs.jpg',
        date: 'Feb 25, 2026',
        readTime: '5 min read',
        category: 'Safety Standards',
    },
    {
        id: 2,
        title: 'LED vs Traditional Lighting in Hazardous Areas',
        excerpt: 'Explore the advantages of explosion-proof LED lighting over conventional HID fixtures in classified hazardous locations, including energy savings and safety benefits.',
        image: '/images/products/ex-lighting/1.a Ex FloodLight.jpg',
        date: 'Feb 18, 2026',
        readTime: '7 min read',
        category: 'Lighting Solutions',
    },
    {
        id: 3,
        title: 'IP Ratings Explained: Choosing the Right Enclosure',
        excerpt: 'From IP54 to IP68 — understand what ingress protection ratings mean and how to select the right enclosure for your industrial environment.',
        image: '/images/products/industrial-electrical/6. Enclosures and Junction Boxes.jpg',
        date: 'Feb 10, 2026',
        readTime: '4 min read',
        category: 'Technical Guide',
    },
];

const Blog = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="blog" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Latest <span className="text-gradient">Insights</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#16237D] to-[#33E3EE] mx-auto mb-6 rounded-full" />
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Industry insights, technical guides, and the latest news in industrial electrical solutions
                        </p>
                    </motion.div>

                    {/* Blog Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-white/90 backdrop-blur-sm text-[#16237D] px-3 py-1 rounded-full text-xs font-semibold">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#1960A4] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <FaCalendarAlt className="text-[#1960A4]" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <FaClock className="text-[#1960A4]" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <button className="inline-flex items-center gap-2 text-[#1960A4] text-sm font-semibold hover:text-[#33E3EE] transition-colors group/btn">
                                            Read More
                                            <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
