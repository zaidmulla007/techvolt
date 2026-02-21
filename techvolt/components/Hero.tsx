'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaBolt, FaIndustry, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-poster.jpg"
        >
          <source
            src="/banner-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Full height flex layout */}
      <div className="relative z-10 h-full flex flex-col justify-between pt-28 md:pt-32 pb-8">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
          <div className="max-w-3xl">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Powering Industries
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                Safely & Efficiently
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
            >
              Specialist supplier of industrial and Oil & Gas electrical and lighting solutions for demanding commercial, industrial, and hazardous environments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 bg-white text-[#16237D] px-7 py-3.5 rounded-lg font-bold text-base shadow-xl hover:shadow-white/20 transition-all duration-300"
              >
                Explore Products
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-bold text-base hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Get Quote
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Trust badges on left */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border border-white/15">
                <FaShieldAlt className="text-cyan-300 text-xs sm:text-sm md:text-base" />
                <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm">ATEX Certified</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border border-white/15">
                <FaShieldAlt className="text-blue-300 text-xs sm:text-sm md:text-base" />
                <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm">IECEx Approved</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border border-white/15">
                <FaShieldAlt className="text-yellow-300 text-xs sm:text-sm md:text-base" />
                <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm">ISO Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 border border-white/15">
                <FaShieldAlt className="text-green-300 text-xs sm:text-sm md:text-base" />
                <span className="text-white font-semibold text-[10px] sm:text-xs md:text-sm">ICV Certified</span>
              </div>
            </div>

            {/* Stats on right */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                  <FaIndustry className="text-white text-xs sm:text-sm md:text-base" />
                </div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl leading-none">15+</div>
                  <div className="text-white/60 text-[10px] sm:text-xs md:text-sm">Industries</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
                  <FaBolt className="text-white text-xs sm:text-sm md:text-base" />
                </div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl leading-none">200+</div>
                  <div className="text-white/60 text-[10px] sm:text-xs md:text-sm">Products</div>
                </div>
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center">
                  <FaShieldAlt className="text-white text-xs sm:text-sm md:text-base" />
                </div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl leading-none">IP66/67</div>
                  <div className="text-white/60 text-[10px] sm:text-xs md:text-sm">Protection</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
