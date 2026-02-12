'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { HiChip } from 'react-icons/hi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const designStages = [
  {
    number: 1,
    title: 'Project Scoping:',
    description: 'Our design team initiates contact with you or your installing contractor to understand the project\'s scope and objectives.',
    image: '/images/services/lighting-products/section-1-1.jpg',
    imageAlt: 'Project Scoping - Construction site',
  },
  {
    number: 2,
    title: 'Information Collation:',
    description: 'We gather all necessary project details, which may include site visits, obtaining detailed layout plans, and defining specific light level requirements.',
    image: '/images/services/lighting-products/section-1-2.jpg',
    imageAlt: 'Information Collation - Site survey',
  },
  {
    number: 3,
    title: 'In-House Design & Visualization:',
    description: 'Our experienced specialists, skilled in designing for challenging industrial and hazardous environments, craft your lighting scheme. Using advanced Relux software, we create accurate 3D renderings that optimize light output and cost-effectiveness for both installation and ongoing maintenance. We accommodate various drawing formats (DWG, DXF, PDF, paper) and offer on-site surveys for precise measurements, delivering designs from simple areas to complex multi-level visualizations.',
    image: '/images/services/lighting-products/section-1-3.webp',
    imageAlt: 'In-House Design - Road lighting visualization',
  },
  {
    number: 4,
    title: 'Design Presentation:',
    description: 'We present the completed design in a full 3D rendering, offering a clear visualization of the final installation\'s light output and lux levels for your approval.',
    image: '/images/services/lighting-products/section-1-4.jpeg',
    imageAlt: 'Design Presentation - Thermal heat map rendering',
  },
  {
    number: 5,
    title: 'Installation Support & Documentation:',
    description: 'Our engineers remain available to provide guidance on fitting placement and assist with any design adjustments during installation. We manage timely product delivery and ensure a seamless project flow, providing you with all necessary documentation for your operation and maintenance manuals.',
    image: '/images/services/lighting-products/section-1-5.avif',
    imageAlt: 'Installation Support - Street lighting installation',
  },
];

const certifications = [
  { name: 'CE', image: '/images/products/industrial-lighting/certifications/CE.jpg' },
  { name: 'HACCP', image: '/images/products/industrial-lighting/certifications/HACCP.png' },
  { name: 'IEC', image: '/images/products/industrial-lighting/certifications/IEC.png' },
  { name: 'UL', image: '/images/products/industrial-lighting/certifications/UL.webp' },
  { name: 'UKCA', image: '/images/products/industrial-lighting/certifications/UKCA.webp' },
  { name: 'RoHS', image: '/images/products/industrial-lighting/certifications/RoHS-Certifications.webp' },
];

const customizationOptions = [
  { label: 'LED Driver Brands', value: 'Mean Well, OSRAM, Philips' },
  { label: 'LED Chip Brands', value: 'CREE, Lumileds, Samsung' },
  { label: 'Housing Materials', value: '316L Stainless Steel, Mild Steel' },
  { label: 'Accessories', value: 'Sealing Rings, Emergency Backup' },
  { label: 'Mounting Options', value: 'Mounting Bracket, Hook' },
  { label: 'Product Sizes', value: 'Small to Large Wattage' },
  { label: 'Lux Level', value: 'Required Lux Level / Brightness Expectation' },
  { label: 'CCT / CRI', value: 'Preferred CCT/CRI with Narrow / Medium / Wide Beam Angles' },
  { label: 'Emergency Backup', value: 'Battery for High Bay Lights' },
];

export default function LightingProductsServicePage() {
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
              Lighting Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Complete custom digital lighting design service powered by the latest technology and software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Lighting Design Service */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Title with logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-10"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Lighting Design Service
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </div>
            <div className="mt-4 md:mt-0 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Power Electrical"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </div>
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
              Ensuring optimal lighting is a crucial step in any on-site project. With ever-evolving technology and changing demands, it&apos;s essential for clients to trust that their lighting designs are managed by seasoned professionals.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We provide a complete, custom digital lighting design service, powered by the latest technology and software. Our approach includes a clear, step-by-step consultation process to ensure you are informed and involved throughout.
            </p>
          </motion.div>

          {/* Five-Stage Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-8"
          >
            Our Five-Stage Lighting Design Process
          </motion.h3>

          {/* Zigzag Stages */}
          <div className="space-y-8">
            {designStages.map((stage, index) => {
              // PDF pattern: odd steps (1,3,5) = text left, image right; even steps (2,4) = image left, text right
              const imageOnRight = index % 2 === 0;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${imageOnRight ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="text-blue-900 font-bold text-lg mr-1">{stage.number}.</span>
                      {' '}
                      <span className="font-bold text-gray-900">{stage.title}</span>
                      {' '}
                      {stage.description}
                    </p>
                  </div>

                  {/* Rounded Image with cyan border */}
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full border-[3px] border-cyan-400 overflow-hidden shadow-md">
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
            We continuously innovate our customer service. That&apos;s why we&apos;re proud to provide our design service free of charge for all customers who select Our products for their installation.
          </motion.p>

          {/* Certified By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Certified By
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  whileHover={{ scale: 1.1 }}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Section 2: Choose Lighting Fixtures Components */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-cyan-400 bg-white">
                <Image
                  src="/images/services/lighting-products/section-2.png"
                  alt="Choose Lighting Fixtures Components"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
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
                  <HiChip className="text-2xl text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold">Customization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Choose Lighting Fixtures Components for Your LED Lighting Fixtures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Every site has different lighting needs — mounting height, area size, operating hours, heat, dust, voltage conditions, and required lux levels. Here we offer custom-built High Bay and Floodlight configurations to get the right performance, efficiency, and lifespan for your project.
              </p>

              <h4 className="text-lg font-bold text-gray-900 mb-4">What You Can Customize</h4>
              <div className="space-y-3">
                {customizationOptions.map((option, index) => (
                  <motion.div
                    key={option.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                    <div>
                      <span className="font-semibold text-gray-900">{option.label}:</span>{' '}
                      <span className="text-gray-600">{option.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
              Ready to Design Your Lighting Solution?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team for a free consultation and let us design the perfect lighting solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-smooth shadow-xl hover:shadow-2xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/product/2"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-smooth"
              >
                View Lighting Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer line */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl flex justify-between items-center text-sm text-gray-500">
          <span>Power Electrical</span>
          <span>powerelectricaluae.com</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}
