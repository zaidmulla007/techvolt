'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+971 54 576 4342',
      link: 'tel:+971545764342',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@powerelectricaluae.com',
      link: 'mailto:info@powerelectricaluae.com',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'Office No. 502, Omran Tower, Sharjah, UAE',
      link: '#',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question or need a quote? We're here to help
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <info.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 text-white shadow-xl"
              >
                <h3 className="font-bold text-lg mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between opacity-60">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <motion.div
                    animate={{
                      scale: focusedField === 'name' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    animate={{
                      scale: focusedField === 'email' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  {/* Phone Input */}
                  <motion.div
                    animate={{
                      scale: focusedField === 'phone' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </motion.div>

                  {/* Company Input */}
                  <motion.div
                    animate={{
                      scale: focusedField === 'company' ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </motion.div>
                </div>

                {/* Message Input */}
                <motion.div
                  animate={{
                    scale: focusedField === 'message' ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <FaPaperPlane />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
