'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaIndustry, FaOilCan, FaMountain, FaTint, FaShip, FaWarehouse, FaPaintRoller, FaSubway, FaHospital, FaThermometerFull, FaSeedling, FaShieldAlt } from 'react-icons/fa';

const Sectors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectors = [
    {
      icon: FaOilCan,
      title: 'Oil & Gas',
      description: 'Refineries, offshore rigs, and gas processing plants where explosive gases or vapors are present.',
      color: '#16237D',
      hoverText: 'group-hover:text-[#16237D]',
    },
    {
      icon: FaIndustry,
      title: 'Petrochemicals & Chemical Processing',
      description: 'Environments with flammable chemicals, solvents, and volatile compounds.',
      color: '#1960A4',
      hoverText: 'group-hover:text-[#1960A4]',
    },
    {
      icon: FaMountain,
      title: 'Mining & Mineral Processing',
      description: 'Underground mines, surface operations, and processing units where combustible dust and gases exist.',
      color: '#EC2300',
      hoverText: 'group-hover:text-[#EC2300]',
    },
    {
      icon: FaPaintRoller,
      title: 'Paint, Coating & Powder Industries',
      description: 'Areas where flammable vapors or fine powder can create hazardous atmospheres.',
      color: '#FF7518',
      hoverText: 'group-hover:text-[#FF7518]',
    },
    {
      icon: FaTint,
      title: 'Wastewater Treatment & Pump Stations',
      description: 'Zones with methane or biogas emissions requiring explosion-proof equipment.',
      color: '#33E3EE',
      hoverText: 'group-hover:text-[#33E3EE]',
    },
    {
      icon: FaSubway,
      title: 'Infrastructure & Transport Hubs',
      description: 'Fuel storage depots, metro systems, and railway facilities with hazardous zones.',
      color: '#FFBB00',
      hoverText: 'group-hover:text-[#FFBB00]',
    },
    {
      icon: FaHospital,
      title: 'Hospital and Food Processing',
      description: 'Clean room Lights for cleanrooms and other controlled environments in Labs, pharmaceutical production, Hospitals and Food processing Units.',
      color: '#10B981',
      hoverText: 'group-hover:text-[#10B981]',
    },
    {
      icon: FaThermometerFull,
      title: 'High Temperature Environment',
      description: 'Ex LED Lighting for high temperature +120\u2103 & low temperature -65\u2103 environments.',
      color: '#EC4899',
      hoverText: 'group-hover:text-[#EC4899]',
    },
    {
      icon: FaSeedling,
      title: 'Crops & Animal Husbandry',
      description: 'Biologically efficient Lights for plant growth, cattle farm, and poultry farm productivity.',
      color: '#8B5CF6',
      hoverText: 'group-hover:text-[#8B5CF6]',
    },
    {
      icon: FaShip,
      title: 'Marine and Port Handlings',
      description: 'FloodLights, Container Sockets, Crane lights, Lifting equipment.',
      color: '#E11D48',
      hoverText: 'group-hover:text-[#E11D48]',
    },
    {
      icon: FaShieldAlt,
      title: 'Military Facilities and Infrastructure',
      description: 'Ex products for Bunkers, Explosive Storage units, Battery Room, Vandal proof lights for Holding Area.',
      color: '#0891B2',
      hoverText: 'group-hover:text-[#0891B2]',
    },
    {
      icon: FaWarehouse,
      title: 'Distribution Centers / Warehouses',
      description: 'Supply and installation services energy-efficient, LED for Highbay, FloodLights, Linear lights.',
      color: '#000000',
      hoverText: 'group-hover:text-[#000000]',
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
            <div className="w-24 h-1 bg-gradient-to-r from-[#16237D] to-[#33E3EE] mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products are engineered to thrive in real-world conditions where failure is not acceptable. In industries that demand total reliability and protection, these enclosures safeguard mission-critical systems with steadfast confidence.
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: sector.color }} />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ backgroundColor: sector.color }}>
                    <sector.icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold text-gray-900 mb-2 ${sector.hoverText} transition-colors`}>
                  {sector.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sector.description}
                </p>

                {/* Hover Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ backgroundColor: sector.color }} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sectors;
