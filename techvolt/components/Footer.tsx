'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaDownload } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black">
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
              width={240}
              height={80}
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm mb-4">
              Specialist supplier of industrial and Oil & Gas electrical and lighting solutions for demanding environments.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 text-white rounded-full flex items-center justify-center transition-smooth"
                  style={{ background: 'linear-gradient(135deg, #1960A4, #33E3EE)' }}
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
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Products', href: '/#products' },
                { name: 'Blog', href: '/#blog' },
                { name: 'Contact', href: '/#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-600 hover:text-[#1960A4] transition-smooth text-sm">
                    {item.name}
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
                'Industrial Lighting',
                'Ex Oil & Gas Electrical',
                'Ex Oil & Gas Lighting',
                'Ex Air Conditions'
              ].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-gray-600 hover:text-[#1960A4] transition-smooth text-sm">
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
                <FaMapMarkerAlt className="text-[#1960A4] mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Office No. 502, Omran Tower, King Abdul Aziz Road, Al Nud, Al Qasimiya, Sharjah, UAE
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-[#1960A4]" />
                <a href="tel:+971545764342" className="text-gray-600 hover:text-[#1960A4] transition-smooth">
                  +971 54 576 4342
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaPhone className="text-[#1960A4]" />
                <a href="tel:+97167152700" className="text-gray-600 hover:text-[#1960A4] transition-smooth">
                  +971 (0) 6 715 2700
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaEnvelope className="text-[#1960A4]" />
                <a href="mailto:info@powerelectricaluae.com" className="text-gray-600 hover:text-[#1960A4] transition-smooth">
                  info@powerelectricaluae.com
                </a>
              </li>
            </ul>
            <motion.a
              href="/PowerElectricalCatalogue.pdf"
              download="PowerElectricalCatalogue.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #1960A4, #33E3EE)' }}
            >
              <FaDownload />
              Download Catalogue
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Power Electrical Trading LLC. All rights reserved. Powered by{' '}
              <a href="https://zetacoding.com/" target="_blank" rel="noopener noreferrer" className="text-[#1960A4] hover:text-[#1960A4] font-semibold transition-smooth">
                Zetacoding
              </a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#1960A4] transition-smooth">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-[#1960A4] transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
