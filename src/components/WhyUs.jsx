import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Globe, Medal, ClipboardCheck, Clock } from 'lucide-react';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence', icon: Medal },
  { value: 500, suffix: '+', label: 'Satisfied Clients', icon: Users },
  { value: 8, suffix: '', label: 'Product Lines', icon: TrendingUp },
  { value: 20, suffix: '+', label: 'States Served', icon: Globe },
];

const reasons = [
  {
    icon: Medal,
    title: 'Premium Quality Machines',
    desc: 'All machines are engineered with premium grade raw materials and checked against international quality norms and standards.',
  },
  {
    icon: ClipboardCheck,
    title: 'Customized Solutions',
    desc: 'We offer customized machine configurations to meet your specific industrial cutting requirements with precision.',
  },
  {
    icon: Clock,
    title: 'Fast Dispatch & Delivery',
    desc: 'Efficient logistics with ready stock for most spare parts. Quick dispatch to ensure minimum downtime for your operations.',
  },
  {
    icon: Users,
    title: 'Expert Technical Team',
    desc: 'Our team of experienced professionals provides end-to-end support from installation to ongoing maintenance and service.',
  },
  {
    icon: Globe,
    title: 'Pan India Export Network',
    desc: 'Serving clients across India and exporting to international markets with reliable supply chain and timely deliveries.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Innovation',
    desc: 'Constantly evolving our product range with the latest technology to stay ahead of industrial cutting requirements.',
  },
];

function AnimatedCounter({ value, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="stat-number text-6xl sm:text-7xl leading-none">
      {count}{suffix}
    </span>
  );
}

export default function WhyUs() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: '-100px' });
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="why-us" className="relative py-28 overflow-hidden bg-carbon-800">
      {/* Diagonal accent */}
      <div className="absolute inset-0 industrial-stripe opacity-30" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="section-label mb-4 justify-center flex items-center gap-3">
            <span className="w-8 h-px bg-amber-500"></span>
            Why Choose MEC
            <span className="w-8 h-px bg-amber-500"></span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            THE MEC <span className="gradient-text">ADVANTAGE</span>
          </h2>
          <p className="font-body text-steel-400 max-w-2xl mx-auto text-base">
            Over 15 years of delivering precision, reliability, and innovation to industries across India and beyond.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 mb-20 border border-white/5"
        >
          {stats.map(({ value, suffix, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-carbon-800 p-8 text-center group hover:bg-carbon-700 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-amber-500/3 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon size={20} className="text-amber-500/50 mx-auto mb-3" />
              <AnimatedCounter value={value} suffix={suffix} isInView={isInView} />
              <div className="font-heading text-xs tracking-widest uppercase text-steel-400 mt-2">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group flex gap-4 p-5 border border-white/5 hover:border-amber-500/20 bg-carbon-700/20 hover:bg-carbon-700/40 transition-all duration-300 rounded-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <Icon size={18} className="text-amber-500" />
              </div>
              <div>
                <h3 className="font-heading font-700 text-white tracking-wide mb-1 group-hover:text-amber-300 transition-colors">{title}</h3>
                <p className="font-body text-steel-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
