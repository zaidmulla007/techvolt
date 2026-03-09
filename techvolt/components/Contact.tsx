'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:8000/api/send-email.php'
        : 'https://powerelectricaluae.com/api/send-email.php';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Thank You!',
          text: 'Your message has been sent successfully. We will get back to you soon.',
          confirmButtonColor: '#1960A4',
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: result.message || 'Something went wrong. Please try again.',
          confirmButtonColor: '#1960A4',
        });
      }
    } catch {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Unable to send message. Please contact us directly.',
        confirmButtonColor: '#1960A4',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+971 54 576 4342',
      link: 'tel:+971545764342',
      color: '#16237D',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+971 (0) 6 715 2700',
      link: 'tel:+97167152700',
      color: '#16237D',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@powerelectricaluae.com',
      link: 'mailto:info@powerelectricaluae.com',
      color: '#1960A4',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'Office No. 502, Omran Tower, Sharjah, UAE',
      link: '#',
      color: '#EC2300',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#1960A4] rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#33E3EE] rounded-full filter blur-3xl" />
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
            <div className="w-24 h-1 bg-gradient-to-r from-[#16237D] to-[#33E3EE] mx-auto mb-6 rounded-full" />
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
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" style={{ backgroundColor: info.color }}>
                      <info.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-sm text-gray-600 group-hover:text-[#1960A4] transition-colors">
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
                className="rounded-xl p-6 text-white shadow-xl"
                style={{ backgroundColor: '#16237D' }}
              >
                <h3 className="font-bold text-lg mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1960A4] focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1960A4] focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1960A4] focus:outline-none transition-colors"
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1960A4] focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1960A4] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : { scale: 1.02, boxShadow: '0 20px 40px rgba(25, 96, 164, 0.3)' }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  className={`w-full btn-primary py-4 text-lg flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <FaPaperPlane />}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0!2d55.3898849!3d25.345192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b9882edcdc3%3A0xd13d2becab2c7039!2sPower%20Electrical%20Trading%20LLC!5e0!3m2!1sen!2sae!4v1709000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techvolt Location - Sharjah, UAE"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
