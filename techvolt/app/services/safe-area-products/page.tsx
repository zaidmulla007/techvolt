'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { HiCube } from 'react-icons/hi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const productStages = [
  {
    number: 1,
    title: 'Waterproof Junction Boxes:',
    description:
      'A junction box is a protective enclosure for electrical connections, keeping them safe from environmental hazards and accidental touch. It\'s where wires are joined securely within a wiring system. Ensure reliable outdoor electrical connections with these straightforward and robust boxes. They excel at keeping water out while offering easy access to terminals when needed. Perfect for outdoor lighting, security, and remote monitoring applications that require dependable protection without complexity.',
    image: '/images/services/safe-area-products/1.png',
    imageAlt: 'Waterproof Junction Boxes',
    features: [
      'Superior Waterproofing: Rated up to IP69',
      'Durable Materials: Constructed from GRP or stainless steel',
      'Flexible Installation: Multiple cable entry options',
      'User-Friendly Design: Captive fixings ensure parts are not lost',
      'Customization: Available in custom sizes to suit your needs',
    ],
  },
  {
    number: 2,
    title: 'Terminal Box Outdoor Applications:',
    description:
      'Heavy-duty terminal enclosures built for harsh outdoor conditions, designed to resist the environmental exposure that typically degrades standard electrical boxes over time. Ideal for marine settings and industrial sites where lower-cost options often fail due to corrosion or weather-related damage.',
    image: '/images/services/safe-area-products/2.png',
    imageAlt: 'Terminal Box Outdoor Applications',
    features: [
      'Corrosion-resistant stainless steel construction',
      'Reliable gasket sealing',
      'Proven outdoor durability',
      'Internal mounting hardware included',
      'Marine-environment compatible',
    ],
  },
  {
    number: 3,
    title: 'Industrial Outdoor Control Enclosures:',
    description:
      'Control stations engineered for washdown zones and reliable operator access in harsh conditions. Built for demanding industrial environments where equipment takes heavy use and still needs to perform without interruption. Designed to support process control and machinery operation in outdoor manufacturing areas where dependable performance matters most.',
    image: '/images/services/safe-area-products/3.png',
    imageAlt: 'Industrial Outdoor Control Enclosures',
    features: [
      'IP66-rated for washdown protection',
      'Easy, operator-friendly access',
      'Strong protection for internal components',
      'Heavy-duty, rugged construction',
      'Custom control integration options',
    ],
  },
  {
    number: 4,
    title: 'Custom Outdoor Solutions:',
    description:
      'When standard solutions aren\'t quite right, we specialize in creating custom outdoor electrical housings to perfectly match your specific needs. From custom dimensions and specialized mounting solutions to enhanced protective features, we\'re here to solve your unique challenges. We have a proven track record of developing enclosures for a wide array of unusual applications. If you have a demanding requirement, we\'re confident we can devise an effective solution for you.',
    image: '/images/services/safe-area-products/4.png',
    imageAlt: 'Custom Outdoor Solutions',
    features: [
      'Flexible Sizing and Configuration: We can build enclosures to any size or configuration you require',
      'Application-Specific Protection: Get protection tailored precisely to your application\'s needs',
      'Unique Mounting Solutions: We accommodate unique mounting arrangements',
      'Customized Cable Entry: Tailored cable entry layouts to fit your setup',
      'Full Design Support: Benefit from our comprehensive design assistance',
      'Bespoke Components for Harsh Environments: Custom bases, lids, and canopies designed for resilience in challenging conditions',
    ],
  },
];

const pricingFactors = [
  'Dimensions and depth requirements',
  'Number of cable entries needed',
  'Type and position of gland plates',
  'Material (GRP, Aluminium alloy, mild steel, stainless steel, etc.)',
  'IP rating requirements (IP65, IP66, IP67, etc.)',
  'Certifications needed (ATEX, IECEx, UL)',
];

export default function SafeAreaProductsServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-smooth"
            >
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Safe Area Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Outdoor Electrical Weatherproof Enclosures for Industrial Environments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Product Overview with Zigzag */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Title with logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Weatherproof Enclosures
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
          </motion.div>

          {/* Intro paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              We are fabrication and customization experts, ready to bring your exact specifications to life. Customer satisfaction is our top priority, and we&apos;re dedicated to meeting your most demanding design needs.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our range of outdoor electrical weatherproof enclosures is designed for industrial environments, offering superior protection against water, dust, corrosion, and extreme conditions. From standard junction boxes to fully custom solutions, we deliver reliable enclosures built to last.
            </p>
          </motion.div>

          {/* Product Range Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-8"
          >
            Our Product Range
          </motion.h3>

          {/* Zigzag Stages */}
          <div className="space-y-12">
            {productStages.map((stage, index) => {
              const imageOnRight = index % 2 === 0;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-start gap-6 ${imageOnRight ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="text-blue-900 font-bold text-lg mr-1">{stage.number}.</span>
                      {' '}
                      <span className="font-bold text-gray-900">{stage.title}</span>
                      {' '}
                      {stage.description}
                    </p>
                    {/* Key Features */}
                    <div className="space-y-2">
                      {stage.features.map((feature, fIndex) => (
                        <motion.div
                          key={fIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: fIndex * 0.05 }}
                          className="flex items-start gap-3 group"
                        >
                          <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Rounded Image with cyan border */}
                  <div className="flex-shrink-0">
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-[3px] border-cyan-400 overflow-hidden shadow-md">
                      <Image
                        src={stage.image}
                        alt={stage.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Closing statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 leading-relaxed text-lg mt-10"
          >
            Our complete assembly service allows for rapid delivery in 2-4 weeks. We continuously strive to exceed expectations with quality craftsmanship and reliable solutions for every project.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Section 2: Enclosure Assembly & Customization */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 lg:sticky lg:top-28"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-cyan-400 bg-white">
                <Image
                  src="/images/services/safe-area-products/EnclosureAssembly.png"
                  alt="Enclosure Assembly"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain max-h-[500px]"
                />
              </div>
              <p className="text-center text-gray-500 text-sm mt-3">
                Enclosure Assembly — Rapid delivery in 2-4 weeks
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <HiCube className="text-2xl text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold">Customization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Enclosure Assembly & Custom Options
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Every site has different protection needs — environmental exposure, cable management, IP rating, material strength, and mounting requirements. We offer custom-built enclosures to get the right performance, durability, and protection for your project.
              </p>
            </motion.div>
          </div>

          {/* Pricing Factors - separate row below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              Factors That Influence Pricing
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pricingFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                  <span className="text-gray-700">{factor}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Custom Enclosure Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team for a free consultation and let us design the perfect weatherproof enclosure for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-smooth shadow-xl hover:shadow-2xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/product/1"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-smooth"
              >
                View Industrial Electrical Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
