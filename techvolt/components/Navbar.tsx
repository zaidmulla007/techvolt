'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Industrial',
      href: '/#products',
      dropdown: [
        { name: 'Industrial Electrical', href: '/product/1' },
        { name: 'Industrial Lighting', href: '/product/2' },
      ],
    },
    {
      name: 'Oil and Gas',
      href: '/#products',
      dropdown: [
        { name: 'Ex Oil & Gas Electrical', href: '/product/3' },
        { name: 'Ex Oil & Gas Lighting', href: '/product/4' },
        { name: 'Ex Air Conditions', href: '/product/5' },
      ],
    },
    {
      name: 'Services',
      href: '/#services',
      dropdown: [
        { name: 'Safe Area Products', href: '/services/safe-area-products' },
        { name: 'For Hazardous Area', href: '/services/hazardous-area' },
        { name: 'For Lighting Products', href: '/services/lighting-products' },
      ],
    },
  ];

  return (
    <>
      {/* Spacer for inner pages to push content below fixed navbar */}
      {!isHomePage && <div className="h-24" />}

      {/* Top Bar - simple nav links on the right, only on home page, hidden on scroll */}
      <div className={`fixed top-0 left-0 right-0 z-[60] bg-transparent text-white py-2 px-4 hidden ${isHomePage ? 'md:block' : ''} transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-end items-center text-sm">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium">Home</Link>
            <Link href="/#about" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium">About Us</Link>
            <Link href="/#blog" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium">Blog</Link>
            <Link href="/#contact" className="text-white hover:text-cyan-300 transition-all duration-300 font-medium">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar - Fixed & Transparent */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'top-0 bg-white shadow-lg'
            : !isHomePage
              ? 'top-0 bg-white shadow-lg'
              : 'top-0 md:top-[36px] bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <Image
                  src={scrolled || !isHomePage ? '/logo-removebg-preview.png' : '/white-logo.png'}
                  alt="Power Electrical"
                  width={320}
                  height={100}
                  className={`w-auto ${scrolled || !isHomePage ? 'h-[90px]' : 'h-[140px]'}`}
                  priority
                  key={scrolled || !isHomePage ? 'color-logo' : 'white-logo'}
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
                      className={`px-4 py-2 font-medium transition-all duration-300 cursor-pointer inline-flex items-center gap-1 relative group ${scrolled || !isHomePage ? 'text-gray-700 hover:text-[#16237D]' : 'text-white/90 hover:text-white'}`}
                    >
                      {item.name}
                      <FaChevronDown className="text-[10px] opacity-60 group-hover:opacity-100 transition-opacity" />
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.span>
                  </Link>

                  {/* Dropdown */}
                  <div className={`absolute mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 ${index === navItems.length - 1 ? 'right-0' : 'left-0'}`}>
                    <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-[#1960A4] transition-all duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none transition-colors duration-300 ${scrolled || !isHomePage ? 'text-gray-700 hover:text-[#16237D]' : 'text-white hover:text-cyan-300'}`}
              >
                {isOpen ? (
                  <HiX className="h-8 w-8" />
                ) : (
                  <HiMenu className="h-8 w-8" />
                )}
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
              className="lg:hidden bg-gradient-to-r from-[#16237D] via-[#1960A4] to-[#16237D] border-t border-white/10 shadow-lg"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {/* Top links for mobile */}
                <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">Home</Link>
                <Link href="/#about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">About Us</Link>

                {/* Main nav items with dropdowns */}
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 space-y-1 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                <Link href="/#blog" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">Blog</Link>
                <Link href="/#contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium">Contact Us</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
