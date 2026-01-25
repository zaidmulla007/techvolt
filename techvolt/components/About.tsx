'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaAward, FaCog, FaUsers } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FaAward,
      title: 'Industry-Focused Portfolio',
      description: 'Curated product lines for warehouses, manufacturing plants, cold storage, hazardous areas (oil & gas, chemical), sports halls and large retail spaces.',
    },
    {
      icon: FaCog,
      title: 'Technical Depth',
      description: 'Product families include standard, cold-storage, high-output and certified hazardous-area variants with datasheets, IES files, and test reports.',
    },
    {
      icon: FaCheckCircle,
      title: 'Compliance & Safety',
      description: 'Products carry CE, CB, RoHS, UL/CSA and hazardous-area certifications (ATEX/IECEx/UL/ECAS) when required.',
    },
    {
      icon: FaUsers,
      title: 'After-Sales Support',
      description: 'Field trials, sample testing, local commissioning assistance, spares availability and standardized warranty terms.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-gradient">Power Electrical</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialist supplier of industrial and Oil & Gas electrical and lighting solutions
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Delivering the Right Products, at the Right Time, at the Right Cost
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Power Electrical Trading LLC is a specialist supplier offering high-performance products for demanding commercial, industrial, and hazardous environments. Our portfolio includes industrial lighting fixtures (including industrial highbay LED), Ex (explosion-proof) electrical products and lighting, EX junction boxes and control panels, EX air conditioning solutions, and a wide range of other industrial electrical components.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to deliver the right products, at the right time, and at the right cost — minimizing risk for our customers and building long term relationships — by supplying robust, compliant, and energy efficient electrical and lighting solutions that maximize operational uptime, reduce lifecycle costs, and meet the strict safety and performance requirements of industrial environments.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg"
                >
                  <FaCheckCircle className="text-blue-600" />
                  <span className="font-semibold text-blue-900">ATEX Certified</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-cyan-50 px-4 py-2 rounded-lg"
                >
                  <FaCheckCircle className="text-cyan-600" />
                  <span className="font-semibold text-cyan-900">IECEx Approved</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg"
                >
                  <FaCheckCircle className="text-green-600" />
                  <span className="font-semibold text-green-900">ISO Compliant</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Image/Stats */}
            <motion.div variants={itemVariants} className="relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white text-center shadow-xl"
                >
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-xs">Years Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-6 text-white text-center shadow-xl"
                >
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-xs">Products</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white text-center shadow-xl"
                >
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="text-xs">Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-gradient-to-br from-pink-600 to-pink-800 rounded-2xl p-6 text-white text-center shadow-xl"
                >
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-xs">Quality</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="card-hover bg-white rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-3xl text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
