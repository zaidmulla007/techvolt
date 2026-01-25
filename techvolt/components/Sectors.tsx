'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaIndustry, FaOilCan, FaMountain, FaTint, FaShip, FaWarehouse } from 'react-icons/fa';

const Sectors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectors = [
    {
      icon: FaOilCan,
      title: 'Oil & Gas',
      description: 'Refineries, offshore rigs, and gas processing plants',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: FaIndustry,
      title: 'Petrochemicals',
      description: 'Environments with flammable chemicals and volatile compounds',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaMountain,
      title: 'Mining',
      description: 'Underground mines and processing units with combustible dust',
      gradient: 'from-yellow-600 to-orange-600',
    },
    {
      icon: FaTint,
      title: 'Wastewater Treatment',
      description: 'Zones with methane or biogas emissions',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: FaShip,
      title: 'Marine & Ports',
      description: 'FloodLights, container sockets, crane lights',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: FaWarehouse,
      title: 'Warehouses',
      description: 'Distribution centers with energy-efficient LED solutions',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="sectors" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted Across <span className="text-gradient">Critical Sectors</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are engineered for real-world conditions where failure is not acceptable
            </p>
          </motion.div>

          {/* Sectors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <sector.icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>

                {/* Hover Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${sector.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;
