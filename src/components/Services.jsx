import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Settings, Truck, Wrench, HeadphonesIcon, Package, Lightbulb, Cpu } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Engineering Services',
    desc: 'Fabrication, procurement, logistics, erection & installation, and commissioning services for all types of bandsaw and circular saw machines.',
  },
  {
    icon: Wrench,
    title: 'Machine Services',
    desc: 'Expert bandsaw machine servicing with extensive industrial experience. We consistently meet and exceed customer requirements with precision and reliability.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Tech Support',
    desc: 'Comprehensive tech support services. Reach our Customer Service executive via call or submit online — our dedicated staff will promptly assist you.',
  },
  {
    icon: Package,
    title: 'Spare Parts Supply',
    desc: 'Supply of all types of bandsaw machine spare parts. Mostly ready stock available. Special purpose spare parts available as per customer requirement.',
  },
  {
    icon: Lightbulb,
    title: 'Design & Development',
    desc: 'Innovative design and efficient development of machine components and solutions. We specialize in user-friendly interfaces and cutting-edge technology.',
  },
  {
    icon: Cpu,
    title: 'Unique Machine Design',
    desc: 'Renowned for innovative and sleek bandsaw machine designs. Our cutting-edge solutions blend creativity with functionality, setting new industry standards.',
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative p-6 border border-white/5 hover:border-amber-500/30 bg-carbon-700/30 hover:bg-carbon-700/60 transition-all duration-400 rounded-sm overflow-hidden"
    >
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Industrial accent line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/60 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
          <Icon size={22} className="text-amber-500 group-hover:scale-110 transition-transform duration-300" />
        </div>

        <h3 className="font-heading font-700 text-white text-lg tracking-wide mb-3 group-hover:text-amber-300 transition-colors">
          {service.title}
        </h3>
        <p className="font-body text-steel-400 text-sm leading-relaxed">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="relative py-28 bg-carbon-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-amber-500/3 to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-4 justify-center flex items-center gap-3">
            <span className="w-8 h-px bg-amber-500"></span>
            What We Offer
            <span className="w-8 h-px bg-amber-500"></span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            CORE <span className="gradient-text">SERVICES</span>
          </h2>
          <p className="font-body text-steel-400 max-w-2xl mx-auto text-base">
            We excel in providing installation and repairing services for all types of bandsaw machines and circular saw machines. Our expert professionals possess extensive knowledge and experience in precision machine maintenance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"
        />
      </div>
    </section>
  );
}
