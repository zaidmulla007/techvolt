'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/logo.png"
              alt="Power Electrical"
              width={180}
              height={60}
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Specialist supplier of industrial and Oil & Gas electrical and lighting solutions for demanding environments.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#06b6d4' }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-smooth"
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-cyan-400 transition-smooth text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {[
                'Industrial Electrical',
                'Industrial Lightning',
                'Ex Oil & Gas Electrical',
                'Ex Oil & Gas Lightning',
                'Ex Air Conditions'
              ].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-gray-400 hover:text-cyan-400 transition-smooth text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Office No. 502, Omran Tower, King Abdul Aziz Road, Al Nud, Al Qasimiya, Sharjah, UAE
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-cyan-400" />
                <a href="tel:+971545764342" className="text-gray-400 hover:text-cyan-400 transition-smooth">
                  +971 54 576 4342
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-cyan-400" />
                <a href="mailto:info@powerelectricaluae.com" className="text-gray-400 hover:text-cyan-400 transition-smooth">
                  info@powerelectricaluae.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Power Electrical Trading LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-smooth">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
