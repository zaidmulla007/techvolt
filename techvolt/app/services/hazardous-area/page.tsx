'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { HiCog } from 'react-icons/hi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Section 1: Hazardous Area Enclosures Range
const enclosureStages = [
  {
    number: 1,
    title: 'Ex d Flameproof Enclosures:',
    description:
      'Flameproof construction is designed to contain any internal explosion and stop flame propagation into the surrounding atmosphere. The enclosure is built to withstand the resulting internal pressure, while engineered flange joints help cool any escaping gases to below the ignition temperature, making the solution suitable for Zone 1, 2, 21, and 22 hazardous-area applications. Our Ex d enclosures incorporate precision-machined flange gaps that comply with stringent flamepath requirements.',
    features: [
      'IP66 protection rating as standard',
      'Stainless steel or aluminum construction options',
      'Multiple cable entry configurations',
      'Full Ex d certification with flamepath test documentation',
      'Temperature range: -50\u00b0C to +135\u00b0C (T4)',
    ],
  },
  {
    number: 2,
    title: 'Ex e Increased Safety Enclosures:',
    description:
      'Enhanced safety protection is designed to eliminate the risk of arcs, sparks, and excessive temperatures through robust mechanical and electrical engineering. Since no sparking parts are allowed inside the enclosure, Ex e becomes a cost-effective option for Zone 1 and Zone 2 installations where the equipment is inherently non-sparking.',
    features: [
      'GRP, Stainless steel and aluminium alloy construction',
      'Minimum IP66 protection',
      'Lower total cost of ownership compared to Ex d',
      'Quicker installation thanks to simplified cable entry',
      'Well-suited for motor terminal boxes, junction boxes, and control stations',
    ],
  },
  {
    number: 3,
    title: 'Ex i Intrinsically Safe Enclosures:',
    description:
      'Intrinsic safety (IS) limits electrical energy to levels that cannot ignite a hazardous atmosphere\u2014even under fault conditions. This is achieved using associated apparatus such as barriers or isolators, which restrict voltage and current. Our Ex i enclosures are purpose-built to house this equipment while providing robust environmental protection.',
    features: [
      'Suitable for Zone 0, 1, 2 (gas) and Zone 20, 21, 22 (dust)',
      'Accommodates Ex ia, Ex ib, and Ex ic classifications',
      'Purpose-designed for barrier and isolator systems',
      'Easy access for termination and troubleshooting',
    ],
  },
  {
    number: 4,
    title: 'Zone 2 & 22 Non-Sparking Solutions:',
    description:
      'Zone 2 and Zone 22 account for most industrial hazardous-area installations. In these zones, an explosive atmosphere is expected only in unusual or fault conditions. Type "n" protection concepts are a practical, budget-friendly choice, avoiding the bulk and higher cost typically associated with Zone 1-rated equipment.',
    features: [
      'Ex nA: Non-sparking equipment',
      'Ex nR: Restricted-breathing protection with IP66 sealing',
      'Ex nC: Sealed/enclosed switching with protected break contacts',
      'Ex nL: Energy-limited circuits with defined power restrictions',
      'Ex nZ: Basic pressurization to control internal atmosphere',
    ],
  },
];

// Section 3: Products
const section3Products = [
  {
    number: 1,
    title: 'Ex Terminal and Junction Boxes:',
    description:
      'Terminal enclosures built for Industrial/ATEX/IECEx demands. Ex terminal boxes, made of glass fibre reinforced polyester (GRP), aluminium alloy, and stainless steel SS316L, are designed for use in explosive atmospheres: Zones 1, 2 (gases) and 21, 22 (dusts). They feature high resistance to corrosion and UV radiation, ensuring long-term durability even in harsh industrial environments.',
    image: '/images/services/hazardous-area/Ex Terminal and Junction Boxes.jpg',
    imageAlt: 'Ex Terminal and Junction Boxes',
  },
  {
    number: 2,
    title: 'UPS/NON-UPS PDB (Power Distribution Board):',
    description:
      'A PDB is mainly built to distribute electrical power safely from an incoming supply to multiple outgoing circuits. In hazardous environments\u2014such as oil and gas facilities, chemical plants, or any location with explosive atmospheres\u2014power distribution must be designed with extreme safety in mind. The choice between a UPS PDB and a standard PDB depends entirely on the criticality of the equipment being powered.',
    image: '/images/services/hazardous-area/UPS-NON-UPS-PDB.png',
    imageAlt: 'UPS/NON UPS PDB Power Distribution Board',
  },
  {
    number: 3,
    title: 'Isolation Switches:',
    description:
      'Ex ATEX isolation switches are advanced devices that can also act as a main and safety switch (disconnectors and switches in the AC-23 and AC-3 use category). Designed for the safe and permanent disconnection of electrical circuits in gas and dust hazardous areas. Thanks to high-quality components, robust modular construction and compliance with ATEX and IECEx directives, these circuit breakers are the ideal solution for industrial plant designers and end users.',
    image: '/images/services/hazardous-area/Isolation switches.jpeg',
    imageAlt: 'Isolation Switches',
  },
  {
    number: 4,
    title: 'Sockets and Plugs for Ex Zones:',
    description:
      'Explosion-proof plugs and sockets are specialised electrical connectors suitable for use in Zones 1, 2, 21 and 22. Their extremely robust housings tightly isolate any potential ignition sources. In the event of a fault, the spark is trapped inside the housing and does not enter the explosive atmosphere. This solution effectively protects people, equipment and infrastructure. Used in oil and gas, chemical and petrochemical plants, bulk material processing, and offshore platforms.',
    image: '/images/services/hazardous-area/Sockets and plugs for Ex zones.jpg',
    imageAlt: 'Sockets and Plugs for Ex Zones',
  },
  {
    number: 5,
    title: 'ATEX / IECEx Cable Glands:',
    description:
      'ATEX & IECEx cable glands are engineered to securely terminate and fasten electrical cables to equipment, ensuring a safe and dependable connection. They are commonly used with power, control, instrumentation, data, and communication cables. In addition to providing strain relief, these glands help seal enclosures and enhance protection against dust, moisture, and water. Available in metallic, non-metallic, or hybrid constructions.',
    image: '/images/services/hazardous-area/ATEX__IECEx_Cable_glands.png',
    imageAlt: 'ATEX IECEx Cable Glands',
  },
];

// Section 2: Custom Made Explosion-Proof Products
const accessoriesSwitched = [
  'Auxiliary contacts',
  'Breather/drain valve (only for switch disconnectors)',
  'Earth stud (external)',
  'Earth continuity plate with internal earth stud',
  'EMC metallic cable glands',
  'Metallic cable glands for armoured/unarmoured cable',
];

const accessoriesJunctionBox = [
  'Cable glands / caps',
  'Drain and Breather/drain valve',
  'Earth continuity plate (internal) in zinc-plated steel',
  'External fixing brackets & internal mounting plate',
  'Blue Terminals & threaded earth-bar',
  'Earth stud in brass or stainless steel AISI 316L',
];

const exProductTypes = [
  'Terminal Junction Box (GRP, Aluminum, SS316L)',
  'Hazardous area Lighting fixtures and junction Boxes',
  'Signal/Analog/Digital/Power Junction Boxes',
  'Ex Power Distribution Board & UPS/Non-UPS PDB',
  'Barrier Control Boxes & Communication Junction Box',
  'Intrinsically Safe "ia, ib" Terminal Boxes',
  'Isolation switches (GRP, Aluminum, SS316L)',
];

const certifications = [
  { name: 'ATEX', image: '/images/services/hazardous-area/certifications/1. ATEX.png' },
  { name: 'IECEx', image: '/images/services/hazardous-area/certifications/2. iecex.jpg' },
  { name: 'ECAS', image: '/images/services/hazardous-area/certifications/3. ECAS.webp' },
  { name: 'EAC', image: '/images/services/hazardous-area/certifications/4. EAC.png' },
  { name: 'CCC', image: '/images/services/hazardous-area/certifications/5. CCC.png' },
];

export default function HazardousAreaServicePage() {
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
              Hazardous Area
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              ATEX/IECEx certified explosion-proof enclosures, products, and custom solutions for hazardous environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Hazardous Area Enclosures Range */}
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
                Our Hazardous Area Enclosures Range
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

          {/* Section 1 Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-cyan-400 bg-white">
              <Image
                src="/images/services/hazardous-area/section-1-image.png"
                alt="Hazardous Area Enclosures Range"
                width={1200}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Zigzag Enclosure Types */}
          <div className="space-y-10">
            {enclosureStages.map((stage, index) => {
              const contentOnLeft = index % 2 === 0;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 p-8"
                >
                  <div className={`flex flex-col md:flex-row gap-6 ${contentOnLeft ? '' : 'md:flex-row-reverse'}`}>
                    {/* Text content */}
                    <div className="flex-1">
                      <div className="inline-block mb-3">
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          {String(stage.number).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="font-bold text-gray-900 text-lg">{stage.title}</span>
                        {' '}
                        {stage.description}
                      </p>
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
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Section 2: Custom Made Explosion-Proof Products */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
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
                  src="/images/services/hazardous-area/wyprodukowane-wylaczniki-izolacyjne-EX-od-HARDO.jpg"
                  alt="Custom Made Explosion-Proof Products"
                  width={800}
                  height={600}
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
                  <HiCog className="text-2xl text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold">Customization</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Custom Made Explosion-Proof Products
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We have the flexibility to customize individual switched interlocked socket outlets and switch-disconnected devices using specialized accessories. Based on the product categories, Power Electrical provides custom-made solutions with a high level of customization, backed by a broad range of products and compatible accessories.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Three accessory cards in one row */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Accessories for Switched Interlocked Sockets</h4>
              <div className="space-y-3">
                {accessoriesSwitched.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Accessories for Junction Boxes</h4>
              <div className="space-y-3">
                {accessoriesJunctionBox.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Types of Ex Custom Electrical Products</h4>
              <div className="space-y-3">
                {exProductTypes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <FaCheckCircle className="text-cyan-500 mt-1 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Section 3: Ex Products with Zigzag round images */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Ex Products & Components
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
          </motion.div>

          {/* Zigzag with round images */}
          <div className="space-y-8">
            {section3Products.map((product, index) => {
              const imageOnRight = index % 2 === 0;
              return (
                <motion.div
                  key={product.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${imageOnRight ? '' : 'md:flex-row-reverse'}`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="text-blue-900 font-bold text-lg mr-1">{product.number}.</span>
                      {' '}
                      <span className="font-bold text-gray-900">{product.title}</span>
                      {' '}
                      {product.description}
                    </p>
                  </div>

                  {/* Rounded Image with cyan border */}
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full border-[3px] border-cyan-400 overflow-hidden shadow-md">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our products meet international quality and safety standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-24">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
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
              Need Explosion-Proof Solutions?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our technical team for customization requests, detailed specifications, and certified hazardous area solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-smooth shadow-xl hover:shadow-2xl"
              >
                Get in Touch
              </Link>
              <Link
                href="/product/3"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-smooth"
              >
                View Ex Oil & Gas Products
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
