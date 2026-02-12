'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    {
      name: 'Products',
      href: '/#products',
      megaMenu: [
        {
          category: 'INDUSTRIAL',
          items: [
            { name: 'Industrial Electrical', href: '/product/1' },
            { name: 'Industrial Lighting', href: '/product/2' },
          ],
        },
        {
          category: 'OIL AND GAS',
          items: [
            { name: 'Ex Oil & Gas Electrical', href: '/product/3' },
            { name: 'Ex Oil & Gas Lighting', href: '/product/4' },
            { name: 'Ex Air Conditions', href: '/product/5' },
          ],
        },
      ],
    },
    {
      name: 'Services',
      href: '/#services',
      dropdown: [
        { name: 'Custom Solution', href: '/#services' },
        { name: 'For Hazardous Area', href: '/#services' },
        { name: 'For Lighting Products', href: '/services/lighting-products' },
      ],
    },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+971545764342" className="flex items-center gap-2 hover:text-cyan-200 transition-smooth">
              <FaPhone className="text-xs" />
              <span>+971 54 576 4342</span>
            </a>
            <a href="mailto:info@powerelectricaluae.com" className="flex items-center gap-2 hover:text-cyan-200 transition-smooth">
              <FaEnvelope className="text-xs" />
              <span>info@powerelectricaluae.com</span>
            </a>
          </div>
          <div className="text-xs">
            Office No. 502, Omran Tower, Sharjah, UAE
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Power Electrical"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <Link href={item.href}>
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-smooth animated-underline cursor-pointer inline-block"
                    >
                      {item.name}
                    </motion.span>
                  </Link>

                  {/* Mega Menu for Products */}
                  {item.megaMenu && (
                    <div className="absolute left-0 mt-2 w-[500px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-2 gap-4 p-6">
                          {item.megaMenu.map((section) => (
                            <div key={section.category}>
                              <h3 className="font-bold text-sm text-blue-900 mb-3 uppercase tracking-wide border-b border-blue-200 pb-2">
                                {section.category}
                              </h3>
                              <div className="space-y-2">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 rounded transition-smooth"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Regular Dropdown for Services */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-smooth"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get Quote
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <motion.div
                  initial={false}
                  animate={isOpen ? 'open' : 'closed'}
                >
                  {isOpen ? (
                    <HiX className="h-8 w-8" />
                  ) : (
                    <HiMenu className="h-8 w-8" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 rounded-lg transition-smooth font-medium"
                    >
                      {item.name}
                    </Link>

                    {/* Mega Menu for Products */}
                    {item.megaMenu && (
                      <div className="pl-4 space-y-3 mt-2">
                        {item.megaMenu.map((section) => (
                          <div key={section.category}>
                            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide px-4 py-2 bg-blue-50 rounded">
                              {section.category}
                            </h4>
                            <div className="space-y-1 mt-1">
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-smooth"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Regular Dropdown for Services */}
                    {item.dropdown && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-smooth"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block btn-primary text-center mt-4"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
