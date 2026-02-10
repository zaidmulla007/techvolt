'use client';

import { motion } from 'framer-motion';
import { FaBolt, FaIndustry, FaShieldAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Animated Gradient Circles */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />

        {/* Additional Smaller Accent Circles */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div variants={itemVariants} className="mb-6 mt-8">
              <motion.span
                className="inline-flex items-center gap-2 bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold border border-white/30 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <HiSparkles className="text-yellow-300 animate-pulse" />
                Leading Electrical & Lighting Solutions
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Powering Industries
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Safely & Efficiently
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
            >
              Specialist supplier of industrial and Oil & Gas electrical and lighting solutions for demanding commercial, industrial, and hazardous environments.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 group overflow-hidden"
              >
                <span className="relative z-10">Explore Products</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white transition-all overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                { icon: FaIndustry, label: 'Industries Served', value: '15+', color: 'from-blue-400 to-cyan-400' },
                { icon: FaBolt, label: 'Products', value: '200+', color: 'from-yellow-400 to-orange-400' },
                { icon: FaShieldAlt, label: 'Certifications', value: 'ATEX/IECEx/ICV', color: 'from-green-400 to-emerald-400' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="relative glass rounded-2xl p-5 text-center border border-white/20 shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg`}>
                      <stat.icon className="text-2xl text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-200 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Floating Visual */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Enhanced Multi-layer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-40 animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-3xl blur-2xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />

              {/* Enhanced Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20"
              >
                {/* Central Icon with Animation */}
                <div className="relative h-96 flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut' as const,
                    }}
                    className="relative"
                  >
                    {/* Glow rings around icon */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-50"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.7, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut' as const,
                      }}
                    />
                    <FaBolt className="relative text-[200px] text-cyan-300 drop-shadow-2xl" />
                  </motion.div>
                </div>

                {/* Enhanced Floating Cards with Icons */}
                <motion.div
                  className="absolute -left-8 top-1/4 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-5 shadow-2xl border border-blue-100"
                  animate={{
                    y: [0, -12, 0],
                    rotate: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut' as const,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <FaCheckCircle className="text-green-500 text-lg" />
                    <div className="text-blue-900 font-bold text-base">ATEX Certified</div>
                  </div>
                  <div className="text-xs text-gray-600 ml-6">Zone 1 & 2</div>
                </motion.div>

                <motion.div
                  className="absolute -right-8 bottom-1/4 bg-gradient-to-br from-white to-cyan-50 rounded-2xl p-5 shadow-2xl border border-cyan-100"
                  animate={{
                    y: [0, 12, 0],
                    rotate: [3, -3, 3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut' as const,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <FaShieldAlt className="text-blue-600 text-lg" />
                    <div className="text-blue-900 font-bold text-base">IP66/IP67</div>
                  </div>
                  <div className="text-xs text-gray-600 ml-6">Protection</div>
                </motion.div>

                {/* ICV Certified Card */}
                <motion.div
                  className="absolute -left-8 bottom-1/4 bg-gradient-to-br from-white to-orange-50 rounded-2xl p-5 shadow-2xl border border-orange-100"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut' as const,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <FaCheckCircle className="text-orange-500 text-lg" />
                    <div className="text-blue-900 font-bold text-base">ICV Certified</div>
                  </div>
                  <div className="text-xs text-gray-600 ml-6">In-Country Value</div>
                </motion.div>

                {/* Additional Bottom Card */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-gradient-to-br from-white to-purple-50 rounded-2xl px-6 py-3 shadow-2xl border border-purple-100"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut' as const,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <FaBolt className="text-yellow-500 text-sm" />
                    <div className="text-blue-900 font-bold text-sm">200+ Products</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
