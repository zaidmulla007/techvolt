'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaPlug, FaBolt, FaSnowflake, FaFire } from 'react-icons/fa';
import Link from 'next/link';

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const productCategories = [
    {
      id: 1,
      icon: FaPlug,
      title: 'Industrial Electrical',
      description: 'Sockets, Plugs, Junction Boxes, Cable Glands, Isolators, and Distribution Boards',
      color: 'from-blue-500 to-blue-700',
      features: ['IP66/IP67 Protection', 'High Current Capacity', 'Corrosion Resistant'],
    },
    {
      id: 2,
      icon: FaLightbulb,
      title: 'Industrial Lighting',
      description: 'LED Highbays, Floodlights, Linear Lights, Street Lights, and Solar Solutions',
      color: 'from-cyan-500 to-cyan-700',
      features: ['Energy Efficient LED', '5 Year Warranty', 'Smart Controls'],
    },
    {
      id: 3,
      icon: FaBolt,
      title: 'Ex Oil & Gas Electrical',
      description: 'ATEX/IECEx certified explosion-proof electrical equipment for hazardous areas',
      color: 'from-purple-500 to-purple-700',
      features: ['ATEX Certified', 'Zone 1 & 2', 'IECEx Approved'],
    },
    {
      id: 4,
      icon: FaFire,
      title: 'Ex Oil & Gas Lighting',
      description: 'Explosion-proof lighting fixtures for oil & gas and chemical industries',
      color: 'from-orange-500 to-orange-700',
      features: ['Hazardous Area', 'Marine Grade', 'Emergency Backup'],
    },
    {
      id: 5,
      icon: FaSnowflake,
      title: 'Ex Air Conditions',
      description: 'Explosion-proof air conditioning units for classified hazardous locations',
      color: 'from-green-500 to-green-700',
      features: ['Climate Control', 'Positive Pressure', 'Ex Certified'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Product Range</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electrical and lighting solutions for industrial and hazardous environments
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productCategories.map((product, index) => (
              <Link key={index} href={`/product/${product.id}`} className="block">
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -15, scale: 1.03 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${product.color}`} />

                <div className="p-8">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <product.icon className="text-4xl text-white" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.color}`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
                  >
                    Learn More
                    <span className="transition-transform">→</span>
                  </motion.div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-500" />
              </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* View All Products Button */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block btn-primary text-lg px-10 py-4"
            >
              View Full Catalogue
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
