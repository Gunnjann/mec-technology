import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Factory, Wrench, Shield } from 'lucide-react';

const highlights = [
  'Horizontal & Vertical Bandsaw Machines',
  'Circular Saw Machines',
  'Special Purpose Machines',
  'Semi-Automatic & Fully Automatic Options',
  'Angular & Hydraulic Cutting Machines',
  'Automatic Bar Loaders',
  'Comprehensive Spare Parts Supply',
  'Pan India & Export Operations',
];

const pillars = [
  { icon: Factory, label: 'Manufacturer', desc: 'In-house precision manufacturing' },
  { icon: Wrench, label: 'Service Provider', desc: 'End-to-end engineering services' },
  { icon: Shield, label: 'Quality Assured', desc: 'International quality standards' },
];

function SectionWrapper({ children, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      id={id}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-28 bg-carbon-900 overflow-hidden">
      {/* Background details */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-amber-500/3 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image block */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative corner accents */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-amber-500 z-10" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-amber-500 z-10" />

              <div className="overflow-hidden rounded-sm border border-white/10">
                <img
                  src="https://mectechnology.co.in/wp-content/uploads/2024/08/IMG20230123100735-scaled-1-1.jpg"
                  alt="MEC Technology Factory"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent" />
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-8 -right-8 bg-amber-500 text-black p-6 rounded-sm shadow-2xl z-20">
                <div className="font-display text-5xl leading-none">15+</div>
                <div className="font-heading font-700 text-sm tracking-wider uppercase mt-1">Years of<br/>Innovation</div>
              </div>
            </div>

            {/* Pillar badges */}
            <div className="grid grid-cols-3 gap-3 mt-16">
              {pillars.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="card-dark p-4 rounded-sm text-center group cursor-default">
                  <Icon size={24} className="text-amber-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-heading font-700 text-white text-sm tracking-wide">{label}</div>
                  <div className="font-body text-xs text-steel-400 mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text block */}
          <SectionWrapper>
            <div className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-amber-500"></span>
              About Us
            </div>

            <h2 className="font-display text-5xl sm:text-6xl text-white leading-tight mb-6">
              ENGINEERED<br />
              <span className="gradient-text">FOR PRECISION</span>
            </h2>

            <div className="w-16 h-0.5 bg-amber-500 mb-6" />

            <p className="font-body text-steel-300 text-base leading-relaxed mb-4">
              Established in the year <strong className="text-amber-400">2009</strong>, MEC Technology Machines (I) Pvt Ltd excels in enhancing industrial production and efficiency with innovative metal cutting solutions.
            </p>

            <p className="font-body text-steel-400 text-base leading-relaxed mb-8">
              Specializing in Horizontal & Vertical Bandsaw Machines, Circular Saw Machines, and Special Purpose Machines, we offer a comprehensive range engineered for precision, reliability, and increased productivity across various industrial applications — supported by extensive service and spare parts offerings.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 group">
                  <CheckCircle2 size={16} className="text-amber-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-body text-sm text-steel-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary px-8 py-3.5 rounded-sm text-sm"
              >
                Contact Us Today
              </a>
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-outline px-8 py-3.5 rounded-sm text-sm"
              >
                View Products
              </a>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
