'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const WhatsAppWidget = () => {
  const phoneNumber = '971545764342'; // WhatsApp format without + or spaces
  const message = encodeURIComponent('Hello! I want to know more about your services. Please call me back. Thanks');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      id="wa-widget"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-28 right-8 z-50"
      tabIndex={0}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="block w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        title="Chat on WhatsApp"
        aria-label="WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppWidget;
