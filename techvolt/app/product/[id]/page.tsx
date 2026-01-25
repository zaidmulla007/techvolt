'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { use } from 'react';

// Product data for Industrial Electrical (ID: 1)
const productData: any = {
  '1': {
    id: 1,
    title: 'Industrial Electrical',
    category: 'Products - Industrial',
    description: 'Heavy-duty electrical solutions for demanding industrial environments',
    imageFolder: 'industrial-electrical',
    products: [
      {
        id: 1,
        name: 'Industrial Socket & Plugs',
        description: 'Industrial sockets and plugs are heavy duty connectors for safe power distribution in harsh environments in PVC, GRP, Marine Aluminium. They come in various standards (IEC 60309, NEMA) current ratings (≈16 A to several hundred Amp), and pole configurations for single and three phase systems. Choose by current/voltage, number of poles/earth, IP rating (up to IP67), contact material, cable size and certifications.',
        images: [
          '1.a Industrial Socket & Plugs.jpg',
          '1.b Industrial Socket & Plugs.jpg',
          '1.c Industrial Socket & Plugs.jpg',
          '2.a Industrial Socket & Plugs.jpg',
        ],
      },
      {
        id: 2,
        name: 'Interlocked Socket in Plastic/GRP/Metal',
        description: 'Interlocked sockets (available in plastic, GRP or metal) are safety sockets that prevent live power being supplied unless a matching plug is fully inserted and the associated enclosure/door or isolator is correctly closed. They combine a mechanical/electrical interlock with the socket so power is only enabled when safe with circuit protection (MCB/RCD/fuse), reducing risk during maintenance or when accessing enclosures.',
        images: ['2.b Interlocked Socket.jpg'],
      },
      {
        id: 3,
        name: 'High Current Metal Socket & Plug',
        description: 'High-current metal sockets and plugs (250–800 A) are aluminum-alloy, corrosion proof, tempered connectors with IP66/67 sealing, built for heavy industrial and marine use. We offer high current capacity, robust mechanical coupling, screw/bolted terminations for large conductors, integrated earthing and lockout options, and are chosen based on conductor size, voltage and certifications.',
        images: [
          '3.a High Amp Metal Socket & Plug.jpg',
          '3.b High Amp Metal Socket & Plug.jpg',
        ],
      },
      {
        id: 4,
        name: 'High Current Interlocked Socket & Plug',
        description: 'High-current interlocked sockets and plugs (250–800 A) are aluminum alloy, corrosion proof, tempered connectors with IP67 sealing that prevent power unless a matching plug and enclosure. They deliver high current capacity and durable mechanical coupling, use screw/bolted terminations for large conductors, include integrated earthing and lockout/interlock features for safe maintenance, and are suited to heavy industrial, marine and power-distribution applications—select by conductor size, voltage, interlock compatibility and certifications.',
        images: [
          '4.a High Current Interlocked Socket & Plug.jpg',
          '4.b High Current Interlocked Socket & Plug.jpg',
        ],
      },
      {
        id: 5,
        name: 'Single Pole Cam Connectors',
        description: 'They are a type of electrical connector primarily used in high-current applications, often seen in welding, temporary power distribution, and entertainment lighting setups with a "cam" mechanism to create a secure, high-conductivity connection between two conductors. Designed to handle high amperage loads, often ranging from 100 amps to well over 1500 amps. Often color-coded to prevent misconnections.',
        images: ['5. Single Pole Cam Connectors.png'],
      },
      {
        id: 6,
        name: 'Enclosures and Junction Boxes',
        description: 'Enclosures and junction boxes are available in PVC, GRP, marine aluminium and stainless steel, with IP ratings such as IP44, IP56 and IP67 for varying dust/water protection. Fire resistant options (E30, E60, E90) provide timed integrity for emergency systems, and units come in multiple sizes and shapes to suit surface, flush or bespoke installations. Choose material and IP/fire rating based on environment (corrosive, marine, indoor/outdoor) and required cable entry/termination arrangements.',
        images: ['6. Enclosures and Junction Boxes.jpg'],
      },
      {
        id: 7,
        name: 'Cable Glands and Lugs',
        description: 'Cable glands and lugs are key termination accessories: glands (PG/metric, NPT, compression, EMC, armoured, ex proof, waterproof to IP68) come in nylon, brass (nickel plated), stainless steel (316), aluminium and silicone sealed variants; lugs (crimp, solder, mechanical, tubular, pin/flag, battery) are usually copper (tinned), aluminium or nickel plated copper with stainless steel hardware. Select size and material by conductor type, current rating and environment.',
        images: [
          '7.a Cable Glands.jpg',
          '7.b Cable Glands.jpg',
          '7.c Cable Glands.jpg',
        ],
      },
      {
        id: 8,
        name: 'Pre assembled Plug & Socket Box',
        description: 'Pre assembled plug & socket boxes are ready to install units combining enclosure, inlet/outlet sockets, circuit protection (MCB/RCD/fuse), isolator, wiring and cable entries. They come in various formats (single/double/multi socket, industrial IEC/BS/CEE, weatherproof/IP65–IP67, or Ex rated), and materials (PVC, GRP, marine grade aluminium, stainless steel).',
        images: ['8. Pre assembled Plug & Socket Box.png'],
      },
      {
        id: 9,
        name: 'Isolators & Disconnection Switch',
        description: 'Isolators and disconnection switches safely interrupt supply for maintenance or emergencies. They come fused or non fused, in single, double, 3 or 4 pole, and as load break or no load types (rotary, knife, cam, DIN rail). Housings range from thermoplastic, aluminium to steel with IP ratings to IP66/67; ratings go from a few amps to thousands. Select by voltage/current, fault capacity, visible isolation needs and applicable standards.',
        images: ['9. Isolators & Disconnection Switch.webp'],
      },
      {
        id: 10,
        name: 'Portable Safety Transformers',
        description: 'Portable safety transformers step voltages up or down to safe levels for temporary power and Isolation transformers transfer electrical energy between circuits while electrically isolating them to enhance safety and performance. They\'re compact, mobile, include multiple outlets and protective devices (fuses/MCB/RCD), and reduce electrical hazards. Choose by kVA rating, single- or three-phase, socket types, and IP/environment rating.',
        images: ['10. Portable Safety Transformers.png'],
      },
      {
        id: 11,
        name: 'Custom Build Lighting Junction box',
        description: 'Custom-built lighting junction boxes are compact, durable enclosures that protect and organize lighting connections. Made from UV-stable thermoplastic, GRP, or steel, they include gland entries, numbered terminal blocks, earth/neutral bars, and space for DIN-rail components. With IP54–IP66 ratings, gasketed lids, clear labeling, and optional pre-wiring, they suit street, architectural, car park, event, and industrial lighting; choose by circuit count, conductor size, IP/IK rating, and standards compliance.',
        images: ['11. Custom Build Lighting Junction box.jpg'],
      },
      {
        id: 12,
        name: 'Custom Junction Box with IP68',
        description: 'Custom IP68 enclosures offer full protection against water ingress and are typically used in applications like offshore oil and gas platforms, the Thames Flood Barrier, river and reservoir monitoring systems, camera housings, underwater lighting fixtures, and lighting junction boxes. They are manufactured in a range of materials including 316L stainless steel, aluminium, GRP, and rigid polyurethane.',
        images: ['12. Custom Junction Box with IP68.webp'],
      },
      {
        id: 13,
        name: 'Cable Tray And Accessories',
        description: 'A versatile range of cable management products designed for industrial, commercial, and residential installations, including perforated and ladder cable trays (light, medium, and heavy duty), solid bottom trays, wire mesh trays, trunking, and a complete set of accessories such as bends, tees, reducers, couplers, splice plates, covers, support brackets, expansion joints, and cable dropouts. Available in Hot dip galvanized and other protective finishes such as Power Coating for offshore Installation, these products offer high tensile strength, excellent corrosion resistance, configurable load capacities, and options for custom lengths and configurations. Cable trays are commonly made from Steel: Often galvanized for corrosion resistance, Stainless Steel (SS316L), Aluminum: Lightweight and corrosion-resistant, Glass/Fiber-Reinforced Plastic (GRP/FRP): For highly corrosive environments.',
        images: ['13. Cable Tray.jpg'],
      },
    ],
  },
  '2': {
    id: 2,
    title: 'Industrial Lighting',
    category: 'Products - Industrial',
    description: 'Energy-efficient LED lighting solutions for industrial and commercial applications',
    imageFolder: 'industrial-lighting',
    products: [
      {
        id: 1,
        name: 'Flood Light',
        description: 'Flood lights are powerful lighting fixtures designed to illuminate Large industrial areas, Car Park Areas, Airport Apron, Port & Container Yard and Recreational Sports Stadium. Our lights are key for significant light coverage, perfect for outdoor areas and architectural highlights. IP rating: IP65/IP66 rated. CCT: 4000K – 6500K',
        images: ['1. Flood Light.webp'],
      },
      {
        id: 2,
        name: 'High Bay LED Light',
        description: 'Our High Bay lights are to illuminate large, open areas with high ceilings, such as warehouses, factories, and large retail spaces. They are designed to provide sufficient and uniform light output from a significant height. LED High bays replace 250W-1500W+ HID and multi-lamp fluorescent fixtures. Easily upgrade from HID and fluorescent high bays to our LED fixtures. LED Chip: Lumiled/Osram/Epistar, LED Driver: Philips/Meanwell/Osram, CCT: 3000K – 6000K',
        images: ['2. High-Bay-Light.png'],
      },
      {
        id: 3,
        name: 'Street/Roadway Light',
        description: 'Our Street light fixtures are the specialized lighting units mounted on poles along roads, pathways, and public areas. Their primary goal is to provide safe and effective illumination for Motorways, inter-urban main roads, roundabouts, pedestrian crossings, cycle and pedestrian paths, Parking areas, and airports. IP rating: IP66 rated. CCT: 4000K – 6500K. Operating ambient: -20°C to +55°C. Equipment included: Pole and Wall mounting accessories available.',
        images: ['3. Street Light.jpg'],
      },
      {
        id: 4,
        name: 'Linear Industrial Light',
        description: 'General-purpose weatherproof LED industrial luminaire is built for tough environments and simple setup. The included fast-fit clips mean you can mount it quickly and easily, no drilling required. IP rating: IP65 rated. CCT: 4000K – 6500K. Operating ambient: -20°C to +50°C. Housing Body: FRP, Alloy Aluminium, SS316. Available in Standard and Emergency backup.',
        images: ['4. Linear Industrial Light.png'],
      },
      {
        id: 5,
        name: 'Solar Lighting Fixtures',
        description: 'Our lights harness the power of the sun to deliver bright, reliable, and eco-friendly illumination for streets, pathways, parks, and more. Designed for independence from the grid, they offer a sustainable and cost-effective lighting solution. Types include, Integrated Solar Street Lights (All-in-One) & Split (or Separate) Solar Street Lights. Power Rating: 10W to 120W. IP rating: IP65 rated. CCT: 4000K – 6500K. Mounting Options: Pole Mount Diameter, Wall Mount Bracket. Special Features: Motion Sensor, Remote Control, Smart Control, Self Clean',
        images: ['5. Solar Street Light.jpg'],
      },
      {
        id: 6,
        name: 'Clean Room Led Lights',
        description: 'Our Cleanroom lighting fixtures are specialized lighting solutions designed to meet the stringent requirements of controlled environments like laboratories, pharmaceutical manufacturing, semiconductor fabrication, and sterile production areas.',
        images: ['6. Clean room Lighting.png'],
      },
      {
        id: 7,
        name: 'Vandal-Proof Light Fittings',
        description: 'Ensure safety and security in demanding environments. Our vandal-proof light fittings feature superior impact resistance (IK11+) and tamper-proof construction, perfect for open public spaces and correctional institutions where durability is paramount. High impact resistance: IK10+. Housing made of stainless steel. Diffuser: Thick polycarbonate.',
        images: ['7. Vandal-Proof Light Fittings.png'],
      },
      {
        id: 8,
        name: 'Retrofit LED Lights/Lamps',
        description: 'Retrofit LED lamps are designed to directly replace traditional light bulbs (like incandescent, halogen, or fluorescent tubes) in existing light fixtures. They use LED technology for a more energy-efficient, longer-lasting, and often better-quality light output. The key is that they fit into your current sockets and fixtures.',
        images: ['8. Retrofit LED Lights-Lamps.jpg'],
      },
      {
        id: 9,
        name: 'High Temperature Lighting Fixtures',
        description: 'LED Lighting — engineered for hazardous and extreme hot environments, these certified IECEx, ATEX and UL fixtures deliver reliable, The product offers solutions of high protection grade IP68, and applicable to high temperature 120℃ & low temperature -65℃ environment (may vary based on the product line and brand) and high lumen efficacy (up to ~145 lm/W), the range includes linear/tube lights, high bays, floodlights, UVC sterilization units and emergency/exit luminaires. Features include corrosion resistant construction, long service life, optional battery backup (up to 240 minutes) ignition risk mitigating lighting certified for Zone 1/2 and Class I Div 1/2 hazardous areas. Suitable for the industrial environments such as steel production, glass manufacturing, food processing and other manufacturing industries temperatures can reach +120ºC.',
        images: ['9. High Temperature Lighting fixtures.png'],
      },
    ],
    certifications: [
      { name: 'CE', image: 'CE.jpg' },
      { name: 'HACCP', image: 'HACCP.png' },
      { name: 'IEC', image: 'IEC.png' },
      { name: 'RoHS', image: 'RoHS-Certifications.webp' },
      { name: 'UKCA', image: 'UKCA.webp' },
      { name: 'UL', image: 'UL.webp' },
    ],
  },
  '3': {
    id: 3,
    title: 'Ex Oil & Gas Electrical',
    category: 'Products - Oil and Gas',
    description: 'ATEX/IECEx certified explosion-proof electrical equipment for hazardous areas',
    imageFolder: 'ex-electrical',
    products: [
      {
        id: 1,
        name: 'Explosion proof (EX) Socket & Plugs',
        description: 'Explosion-proof electrical connectors and receptacles with optional integrated switching mechanisms are designed for hazardous environments. These devices meet variouse enclosure classification standards and adhere to both ATEX Directive and IECEx regulatory frameworks. They are suitable for use in hazardous location Zones 1 & 2 (flammable gases) and Zones 21 & 22 (combustible dust). This product line is complemented by a selection of supporting components, such as female receptacles, male connector inlets, mounting boxes, and transition sleeves, enabling flexible installation configurations.',
        images: [
          '1.a  Explosion proof (EX) Socket & Plugs.jpg',
          '1.b Explosion proof (EX) Socket & Plugs.jpg',
        ],
      },
      {
        id: 2,
        name: 'Ex isolators, Junction Box & Switches',
        description: 'Designed for hazardous sites like chemical plants, refineries, offshore platforms, tankers, and military installations, these enclosures support cable distribution, lighting, heat-trace systems, lighting JB and high-power heaters. Constructed from GRP, aluminium alloy and stainless steel, they offer pendant or floor mounting and cable entries compatible with rubber or armoured cables.',
        images: [
          '2.a Ex isolators, Junction Box & Switches.jpg',
          '2.b Ex isolators, Junction Box & Switches.jpg',
          '2.c Ex isolators, Junction Box & Switches.jpg',
        ],
      },
      {
        id: 3,
        name: 'Ex Motor Start-Stop Control Station',
        description: 'Widely used on worksites for motor start/stop control, conversion, and real-time display of electrical parameters, plus speed regulation, signal switching, and instrumentation readouts. They support hanging or floor-standing mounting and offer multiple cable-entry options to fit rubber or armoured cables. Typical features include rugged enclosures for industrial environments, customizable layouts for switches and instruments, and easy access for maintenance and wiring.',
        images: ['3.Ex Motor Start-Stop Control Station.jpg'],
      },
      {
        id: 4,
        name: 'Ex Cable Glands and Adaptors',
        description: 'Explosion proof Cable Glands for the termination of cables in hazardous area Zone 1 and Zone 2 with potentially explosive atmospheres. They maintain explosion protection, ensure ingress protection (IP), provide mechanical retention, and, when required, prevent gas migration through the cable. Material: Plastics, Brass / Nickel plated brass 304/316L Stainless steel.',
        images: [
          '4.a Ex Cable Glands and Adaptors.jpg',
          '4.b Ex Cable Glands and Adaptors.jpg',
          '4.c Ex Cable Glands and Adaptors.jpg',
        ],
      },
      {
        id: 5,
        name: 'Ex Signalling Devices',
        description: 'Ex Signalling Devices are certified electrical warning and notification solutions engineered for safe operation in hazardous areas containing explosive gases, vapors, or dust. Designed to comply with international safety standards, these devices deliver reliable visual and audible alerts without risk of igniting the surrounding explosive atmosphere.',
        images: [
          '5.a Ex Signalling Devices.png',
          '5.b Ex Signalling Devices.jpg',
        ],
      },
      {
        id: 6,
        name: 'Ex Axial/Exhaust Fan',
        description: 'Ex Axial and Exhaust Fans are critical ventilation solutions designed specifically for hazardous environments where the presence of flammable gases, vapors, or mists creates a risk of explosion. These fans safely extract dangerous fumes or supply fresh air without becoming an ignition source, ensuring both personnel safety and process integrity. Different Voltages vary from 110V, 230V (1-phase) / 400V, 690V (3-phase).',
        images: ['6. Ex Axial-Exhaust Fan.jpg'],
      },
      {
        id: 7,
        name: 'Ex Terminal Box (Ex d, e)',
        description: 'These terminal boxes feature housings constructed from high-impact fiberglass-reinforced polyester, Alloy Aluminium and Stainless-steel material, with all metallic components treated for corrosion resistance. A groove for an air-foam silicone gasket, giving IP66 protection. Multiple configurations are available to meet diverse applications. Multiple configurations are available to meet diverse applications with different Ex d, e classification standards. Cable entries use various plastic or metal glands; unused holes are sealed with plugs for future expansion.',
        images: [
          '7.a Ex Terminal Box (Ex d,e).webp',
          '7.b Ex Terminal Box (Ex d,e).jpg',
        ],
      },
      {
        id: 8,
        name: 'Ex Safety/Power isolator Switches',
        description: 'Ex Safety/Power Isolator Switches are specially designed, explosion-proof electrical devices used for safe dis and isolation of circuits hazardous environments where flammable gases, vapors, or may exist. Current Rating available from 16A to 180A, with 3-pole and 4-pole versions. These switches comply with international certifications such as ATEX and IECEx, ensuring safe operation primarily in Zones 1, 2 (gas) and Zones 21, 22 (dust) hazardous locations. Robust housings made from materials like glass-reinforced polyester (GRP), die-cast aluminum, or stainless steel (316L).',
        images: ['8. Ex SafetyPower isolator Switches.webp'],
      },
      {
        id: 9,
        name: 'Ex d Control Panels & distribution Board (PDB)',
        description: 'We can provide custom built ATEX/IECEx certified panels depending upon engineering specification and factory capacity on 4 week lead times. Ex d flameproof control panels can be customised for automation, production, process and hazardous area power distribution – we can arrange for control panel customisation with panels populated with terminals, drilled to accommodate cable glands according to zone location, gas group and international hazardous area certification requirements.',
        images: ['9. Ex d Control Panels & distribution Board (PDB).jpg'],
      },
      {
        id: 10,
        name: 'Ex Digital/Analog Signal Junction Box',
        description: 'Our Ex Signal Junction Boxes are the critical interface nodes between field instrumentation and control systems (DCS/PLC) in hazardous areas. Designed to preserve signal integrity while ensuring explosion protection, these enclosures facilitate the connection, distribution, and marshalling of analog and digital signals. Designed to handle a wide array of instrumentation signals with minimal interference or insertion loss.',
        images: ['10. Ex Digital, Analog Signal Junction Box.jpg'],
      },
      {
        id: 11,
        name: 'Ex Distribution Boards Switchgear Assemblies',
        description: 'Overview Ex Distribution Boards and Switchgear Assemblies are engineered power distribution solutions for hazardous areas. These assemblies combine certified explosion protection, reliable switching and protection devices, and robust mechanical construction to enable safe power distribution, control and isolation for process plants, offshore platforms, and other classified environments. Modular designs for easy specification, installation and maintenance.',
        images: ['11. Ex Distribution Boards Switchgear Assemblies.png'],
      },
      {
        id: 12,
        name: 'Ex Access Point',
        description: 'This product is for the application of wireless local area network technology in hazardous environment. It is especially suitable for monitoring of dangerous goods and management of personnel and Internet of things in chemical, pharmaceutical, petrochemical and energy industries and oil and gas extraction platforms. The different Brand gateway can be selected to meet the customer requirements. The various mounting types and cable entries are available, such as hanging mounting and stand floor mounting. The cable entries can be suit for rubber cable, armoured cable and network cable.',
        images: ['12. Ex Access Point.jpg'],
      },
      {
        id: 13,
        name: 'Ex Temperature Control Switch',
        description: 'An Ex Temperature Control Switch is an explosion-protected device used to monitor and control temperature in hazardous (classified) areas. Suitable for the heat tracing system for the anti-consolidate in hazardous area, capable for responding to changes in the ambient temperature, with the adjustable set points. Control a single heat tracing circuit or control the multi heat tracing circuits as a contactor.',
        images: [
          '13.a Ex Temperature Control Switch.jpg',
          '13.b Ex Temperature Control Switch.jpg',
        ],
      },
      {
        id: 14,
        name: 'Ex Pushbutton box',
        description: 'Overview Our Ex Pushbutton Boxes are robust, explosion-protected enclosures designed to house and protect manual control devices like pushbuttons, selector switches, and indicator lamps for use in hazardous locations. They provide a safe and reliable means of initiating or controlling processes in areas where flammable gases, vapors, or combustible dusts may be present. Allow operators to start, stop, jog or reset equipment (pumps, motors, conveyors) safely within hazardous zones.',
        images: [
          '14.a Ex Pushbutton box.jpg',
          '14.b Ex Pushbutton box.jpg',
        ],
      },
      {
        id: 15,
        name: 'Sample cooler',
        description: 'Sample coolers are essential for conditioning steam, water, and process fluids at high pressures and temperatures to enable safe grab sampling or online analysis. They use a double helical coil with a full counter-flow five-pass design to handle steam, hydrocarbons, oils, brines, and gases, achieving compact size and excellent heat transfer through a 3Ts approach (high temperature differences, forced turbulence, and extended time lag). Typical outlet approach temperatures are 1°C–5°C, making them suitable for centralized sampling systems, SWAS, field sampling panels, water treatment and desalination plants, and manual sampling.',
        images: ['15. Sample Cooler.jpg'],
      },
    ],
    certifications: [
      { name: 'ATEX', image: '1. ATEX.png' },
      { name: 'IECEx', image: '2. iecex.jpg' },
      { name: 'ECAS', image: '3. ECAS.webp' },
      { name: 'EAC', image: '4. EAC.png' },
      { name: 'CCC', image: '5. CCC.png' },
    ],
  },
  '4': {
    id: 4,
    title: 'Ex Oil & Gas Lighting',
    category: 'Products - Oil and Gas',
    description: 'Explosion-proof lighting fixtures for oil & gas and chemical industries',
    imageFolder: 'ex-lighting',
    products: [
      {
        id: 1,
        name: 'Explosion proof (EX) Flood Light',
        description: 'A compact, certified explosion proof (Ex) flood light providing high output LED illumination for hazardous locations. Available with ATEX/IECEx and UL/CSA options and rated for Zone 1/21, Zone 2/22 or Class I Div 1/2, it features corrosion resistant marine grade housing, impact rated lens, selectable lumen packages and color temperatures. Designed to deliver safe, low maintenance lighting to maximize operational safety, it is ideal for oil & gas refineries, tank farms, offshore rigs, LNG terminals, chemical plants and hazardous storage or loading areas.',
        images: [
          '1.a Ex FloodLight.jpg',
          '1.b Ex FloodLight.jpg',
        ],
      },
      {
        id: 2,
        name: 'Ex High intensive Highbay Light',
        description: 'A rugged, explosion proof (Ex) high intensity Highbay light delivering powerful LED illumination for classified indoor and semi enclosed industrial areas. It offers ultra high lumen packages, precision optics for uniform vertical lighting, corrosion resistant housing, advanced thermal management, surge protection and optional emergency backup or controls. Designed to provide reliable, low maintenance, high lux lighting to enhance safety and productivity, it\'s ideal for petrochemical plants, refinery process halls, offshore platform interiors, tank farms, large warehouses and heavy duty manufacturing facilities.',
        images: [
          '2.a Ex High intensive Highbay Light.jpg',
          '2.b Ex High intensive Highbay Light.jpg',
        ],
      },
      {
        id: 3,
        name: 'Ex LED/Fluorescent Linear Lights',
        description: 'The linear vapor tight fixture is engineered for hazardous locations where flammable gases, vapors, or liquids may be present during normal operations. Combining modern LED performance with the rugged durability of a hazardous location luminaire, it is ideal for retrofitting existing HPS/MH installations, delivering higher efficacy, lower maintenance, and faster payback. Suited for skids, analysis shelters, operator panels and instrumentation racks, it also offers an optional battery backup that provides at least 180 minutes of operation after AC power loss. Available housing materials include FRP (Fiber reinforced plastic), GRP, alloy aluminium, and stainless steel.',
        images: [
          '3.a Ex LEDFluorescent Linear Lights.png',
          '3.b Ex LEDFluorescent Linear Lights.png',
        ],
      },
      {
        id: 4,
        name: 'Ex Metal Marine Grade LED Fixtures',
        description: 'The LED marine grade metal "Ex d" luminaire is an excellent option for marine and hazardous environments requiring a linear fixture. Built to withstand moisture, dirt, dust, corrosion and vibration—as well as exposure to wind, water, snow or high ambient temperatures—it features a copper free aluminium housing with a protective powder coating for superior corrosion resistance and thermal performance, and is available with various mounting accessories.',
        images: ['4.a Ex Metal Marine Grade LED Fixtures.png'],
      },
      {
        id: 5,
        name: 'Ex Panel Mount Lights',
        description: 'Compact Ex Panel Mount Lights provide dependable, low profile illumination specifically engineered for hazardous-area control panels and instrument enclosures. Certified to ATEX/IECEx and UL/CSA standards (Zone 1/21, Zone 2/22, Class I Div 1/2 options), they feature efficient low heat LED modules, multiple lumen and color temperature choices, IP66/67 sealing, corrosion resistant housings, vibration proof mounting and optional dimming or integrated switch. Designed to improve readability and safety while minimizing heat and maintenance in confined spaces. Commonly installed onsite offices, Fuel station in petrochemical plants, refineries, offshore platforms and industrial processing facilities.',
        images: [
          '5.a Ex Panel Mount Lights.png',
          '5.b Ex Panel Mount Lights.png',
        ],
      },
      {
        id: 6,
        name: 'Ex Exit Light with Emergency',
        description: 'A certified explosion proof Ex Exit Light with integrated emergency backup offers clear, reliable egress indication for hazardous environments. It combines high visibility photoluminescent or LED exit signage, sealed corrosion resistant enclosure (IP66/67), intrinsic safety circuitry, emergency battery providing minimum 90 minutes runtime, self test and remote monitoring options, and low power draw with long service life. Its primary function is to ensure safe, code compliant evacuation guidance during power failures or incidents, enhancing crew and personnel safety.',
        images: [
          '6.a Ex Exit Light with Emergency.jpg',
          '6.b Ex Exit Light with Emergency.jpg',
        ],
      },
      {
        id: 7,
        name: 'Ex Portable LED Lights',
        description: 'Durable Ex Portable LED Lights offer safe, handheld illumination for hazardous zones. Certified ATEX/IECEx (Zone 1/21, Zone 2/22, Class I Div 1/2 options), they feature high output LEDs, rechargeable batteries with long runtime, impact and corrosion resistant IP66/67 housings, intrinsic safety design and selectable beam modes. Purpose: provide reliable, spark free portable lighting for inspections, maintenance and emergencies. Uses: offshore platforms, chemical and petrochemical plants, refineries, confined spaces and field service in classified areas.',
        images: [
          '7. Ex Portable LED Lights.png',
          '7.b Ex Portable LED Lights.png',
        ],
      },
      {
        id: 8,
        name: 'Ex Bulk Head Lights',
        description: 'strongly built Sturdy Ex Bulk Head Lights provide safe, diffuse area illumination for hazardous locations. Certified to ATEX/IECEx (Zone 1/21, Zone 2/22, Class I Div 1/2 options), they feature energy efficient LED modules, IP66/67 corrosion resistant housings, impact resistant diffusers and optional emergency versions. Purpose: deliver reliable, low maintenance lighting without ignition risk. Uses: walkways, stairwells, platforms, external façades and general area lighting in refineries, chemical plants, offshore and other classified industrial sites.',
        images: ['8. Ex BulkHead Lights.png'],
      },
      {
        id: 9,
        name: 'Pole Mounting LED Ex Low bay Light',
        description: 'The LED luminaire is an excellent solution for hazardous locations, particularly for pole-mounted lighting of oil storage tank platforms. Available in multiple housing shapes, the series is engineered to accommodate a variety of installation requirements and mounting configurations for reliable, certified performance in demanding environments. Optional emergency battery backup and ATEX/IECEx certification variants are available to meet safety and continuity requirements in critical installations.',
        images: [
          '9.a Pole Mountin LED Ex Highbay Light.png',
          '9.b Pole Mountin LED Ex Highbay Light.jpg',
        ],
      },
    ],
    certifications: [
      { name: 'ATEX', image: '1. ATEX.png' },
      { name: 'IECEx', image: '2. iecex.jpg' },
      { name: 'ECAS', image: '3. ECAS.webp' },
      { name: 'EAC', image: '4. EAC.png' },
      { name: 'CCC', image: '5. CCC.png' },
      { name: 'ABS', image: 'ABS-LOGO.jpg' },
      { name: 'CB', image: 'CB.png' },
      { name: 'UL', image: 'UL.jpg' },
    ],
  },
  '5': {
    id: 5,
    title: 'Ex Air Conditions',
    category: 'Products - Oil and Gas',
    description: 'Explosion-proof air conditioning units for classified hazardous locations',
    imageFolder: 'ex-air-conditioning',
    products: [
      {
        id: 1,
        name: 'Explosion proof (EX) Cabinet Air Conditioner',
        description: 'Ex Signalling Devices are specialized alert systems engineered for safe operation in hazardous environments containing explosive gases and dust. These devices meet rigorous international safety standards including ATEX and IECEx certifications, ensuring compliance with global safety regulations. These devices are manufactured from robust materials such as stainless steel and fiberglass. They are widely deployed across critical sectors including petrochemical plants, oil & gas operations, and mining facilities where safety in explosive atmospheres is paramount.',
        images: ['1. Explosion proof (EX) Cabinet Air Conditioner.jpg'],
      },
      {
        id: 2,
        name: 'Ex Window Type Air Conditioner',
        description: 'Explosion-proof Unitary air conditioner is explosion-proof electrical product certified by IECEx /ATEX and used for Zone 1, Zone 2, Zone21, Zone 22, IIA, IIB, IIC, IIIA, IIIB, IIIC class, T1 ~ T4 group. Applicable to petrochemical, marine engineering and other fields where there are flammable explosive gas driller room, electrical control room, warehouse, gas station, and etc. for temperature control purpose. Product is made of Stainless steel (SS304, SS316L) and Carbon Steel with Powder Coating Casing.',
        images: ['2. Ex Window Type Air Conditioner.png'],
      },
      {
        id: 3,
        name: 'Ex Wall Mount/Split Air Conditioner',
        description: 'Explosion-proof split air conditioner is explosion-proof electrical product certified by IECEx / ATEX and used for Zone 1, Zone 2. Applicable to control room, driller room, workshop, hazardous goods warehouse in petroleum, chemical, military, power utility, marine engineering and other fields where they maintain safe ambient conditions for personnel and equipment without creating ignition sources. Primary Applications in Control rooms, local cabinets, Analysing shelters and oil & Gas Skids and battery rooms etc.',
        images: ['3. Ex Wall Mount-Split Air Conditioner.png'],
      },
      {
        id: 4,
        name: 'Explosion-proof Modular Air-cooled Chiller',
        description: 'Explosion-proof modular air-cooled chillers are purpose-built cooling units for hazardous environments where flammable gases or combustible dust may be present. They combine certified explosion-proof construction with modular, scalable air cooled refrigeration to provide safe, reliable temperature control for sensitive equipment and processes. The combination is flexible. According to different cooling requirements, various modular units can be combined in any combination, with good scalability and adaptability.',
        images: ['4. Explosion-proof Modular Air-cooled Chiller.jpg'],
      },
      {
        id: 5,
        name: 'Ex Heating And Ventilation Air Conditioning Unit',
        description: 'Explosion-proof heating and ventilation air conditioning unit is explosion-proof electrical product certified by ATEX / IECEx / EAC / CHINA Ex and used for Zone 1, Zone 2, IIA, IIB, IIC class, T1 ~ T4 group. Applicable to online analytical cabin, control room, operating room, electrical room in petrochemical, marine and other fields where there are requirements for positive pressure ventilation, indoor temperature and humidity regulation. Unit design concept is targeted clearly and specifically, unit is long-term continuous operational in harsh industrial environment; Unit frame is made of hot galvanized plate or stainless steel molding to achieve high strength and good stability.',
        images: ['5. Ex Heating And Ventilation Air Conditioning Unit.png'],
      },
    ],
    certifications: [
      { name: 'ATEX', image: '1. ATEX.png' },
      { name: 'IECEx', image: '2. iecex.jpg' },
      { name: 'EAC Ex', image: '3. EAC Ex.png' },
      { name: 'ABS', image: 'ABS.jpg' },
      { name: 'DNV', image: 'DNV.jpg' },
    ],
  },
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const productInfo = productData[id];

  if (!productInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              {productInfo.title}
            </h1>
            <p className="text-xl text-white/90 mb-2">{productInfo.category}</p>
            <p className="text-lg text-white/80 max-w-3xl">{productInfo.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {productInfo.products.map((product: any, index: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Images Section */}
                  <div className="space-y-4">
                    <div className="grid gap-4" style={{
                      gridTemplateColumns: product.images.length > 1 ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr'
                    }}>
                      {product.images.map((image: string, imgIndex: number) => (
                        <motion.div
                          key={imgIndex}
                          whileHover={{ scale: 1.05 }}
                          className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-md"
                        >
                          <Image
                            src={`/images/products/${productInfo.imageFolder}/${image}`}
                            alt={`${product.name} - Image ${imgIndex + 1}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center">
                    <div className="inline-block mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {String(product.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <FaCheckCircle />
                      <span className="font-semibold">Available for Supply</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {productInfo.certifications && productInfo.certifications.length > 0 && (
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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {productInfo.certifications.map((cert: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-24">
                    <Image
                      src={`/images/products/${productInfo.imageFolder}/certifications/${cert.image}`}
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
      )}

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
              Need More Information?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our technical team for detailed specifications, datasheets, and customized solutions.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-smooth shadow-xl hover:shadow-2xl"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
