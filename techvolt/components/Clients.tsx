'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    { name: '4b33f56d417ca567f34a6bd31249645d', ext: 'png' },
    { name: 'QatarEnergy_logo', ext: 'png' },
    { name: 'copy-dewa', ext: 'png' },
    { name: 'transco_logo', ext: 'png' },
    { name: 'images', ext: 'png' },
    { name: 'TotalEnergies_logo.svg', ext: 'png' },
    { name: 'vtti_logo', ext: 'jpeg' },
    { name: 'CMW', ext: 'jpg' },
    { name: 'RTA-min-768x768', ext: 'jpg' },
    { name: 'Borouge_logo', ext: 'gif' },
    { name: 'Drydocks-World-logo', ext: 'webp' },
    { name: 'Emirate-01', ext: 'webp' },
    { name: 'images (1)', ext: 'png' },
    { name: 'images (2)', ext: 'png' },
    { name: 'images (3)', ext: 'png' },
    { name: 'PDO-Transparent-300x300', ext: 'png' },
    { name: 'Untitled-2024-10-10T202900.611', ext: 'jpeg' },
    { name: 'Wdyzs6mx7SogPRFlNWxU4jym0fW3fzGiUZjHCQQ1r70', ext: 'avif' },
  ];

  const partners = [
    { name: 'Cz logo', ext: 'jpg' },
    { name: 'Philips', ext: 'png' },
    { name: 'MAM', ext: 'png' },
    { name: 'Pan America', ext: 'png' },
    { name: 'Vyrtych', ext: 'png' },
    { name: 'Venas', ext: 'png' },
    { name: 'Goaltek', ext: 'png' },
    { name: 'Cortem', ext: 'png' },
    { name: 'ROSE', ext: 'png' },
    { name: 'Zalux', ext: 'png' },
    { name: 'BARTEC-only-Logo', ext: 'webp' },
    { name: 'jct-ls-logo-4c-rz-1', ext: 'webp' },
    { name: 'Scame', ext: 'webp' },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Main Clients */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Trusted by <span className="text-gradient">Industry Leaders</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-28 h-20 lg:grayscale lg:hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={`/images/customers/${client.name}.${client.ext}`}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient">Partners</span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg hover:from-white hover:to-cyan-50 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative w-24 h-16 lg:grayscale lg:hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={`/images/principles/${partner.name}.${partner.ext}`}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
