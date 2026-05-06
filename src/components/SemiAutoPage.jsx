import { useState, useRef } from 'react';
import QuoteModal from './QuoteModal';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle2, X, Send, ChevronRight, Zap, Shield, Settings, Package, ArrowLeft } from 'lucide-react';

/* ── ALL 7 MODELS (exact data from website) ─────────────────────────────── */
const models = [
  {
    id: '210-lmgs', name: '210 LMGS', badge: 'POPULAR', badgeCls: 'bg-amber-500 text-black',
    subtitle: 'Semi Automatic LM Guide Bandsaw Machine',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/210-LMGS_double_Column_Semi_Auto_Bandsaw_Machine_-_Product-1024x796.jpg',
    desc: '210 LMGS – Semi Automatic Double Column Band Saw Machine on Pre-hardened LM guideway for smooth operation and high accuracy, specially designed for providing high productivity in low investment.',
    features: [
      'Hydraulic job clamping',
      'Hydraulic cylinder feed control',
      'Auto Saw Off after finishing cut',
      'Auto Head Up after finishing cut',
      'Machine with easy control & working height 700 mm',
      'Hydraulic Power Pack with easy maintenance',
      'Double Acting Hydraulic Cylinder for Main vice Clamping & De-clamping',
      'Infinitely variable Feed Control Valve for Setting the Cutting feed & upward movement',
      'Electrical control panel with high quality switchgears',
      'PLC controlled electrical control operation',
      'Optional Bundle Clamping Arrangement',
      'Optional Numeric control high accuracy indexing',
    ],
    specs: [
      ['Cutting Capacity', 'Round – 200 mm, Rectangle – 200 × 200 mm'],
      ['Cutting Speed', '20 – 60 mtr/min'],
      ['Blade Size', '2910 × 27 × 0.9 mm'],
      ['Blade Tension', 'Manual'],
      ['Saw Motor', '2.0 HP'],
      ['Hydraulic Motor', '0.5 HP'],
      ['Coolant Motor', '0.12 HP'],
      ['Job Clamping', 'Hydraulic'],
      ['Job Indexing', 'Manual'],
      ['Hydraulic Reservoir', '25 Ltr'],
      ['Overall Dimension', '1360 × 600 × 1100 mm'],
    ],
  },
  {
    id: '200-dc', name: '200 DC', badge: 'STANDARD', badgeCls: 'bg-steel-700 text-white',
    subtitle: 'Double Column Hydraulic Bandsaw Machine – For Metal Cutting',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/double-column-hydraulic-bandsaw-machine-for-metal-cutting-2021022623-atykeybi.avif',
    desc: 'We are engaged in manufacturing and supplying 200 Double Column Band Saw Machine manufactured in compliance with industry laid standards — easy to install, user friendly, highly durable, low maintenance cost and plug & play ready.',
    featuresLabel: 'Standard Features',
    features: [
      'Automatic work height control & fast approach to job',
      'Power driven Chip removal Wire Brush Assembly',
      'High Efficiency Power Transmission through helical gear box',
      'Double Acting Hydraulic Cylinder for Main vice Clamping & De-clamping',
      'Automatic switch-off of the blade after finishing the cut',
      'Roller Bearing / Carbide wear plate Blade guide system',
      'Bi Metal Bandsaw Blade included',
    ],
    optionalLabel: 'Optional Accessories',
    optional: [
      'Bundle cutting attachment',
      'Motorized Chip Conveyor',
      'Job Roller Stand 3 Mtr / 1 Mtr',
      'Wire Brush',
      'Bi-metal Bandsaw blades',
      'Variable Vice pressure for thin walled job',
      'Centralized Lubrication System',
      'A.C. Drive for variable blade speed control',
    ],
    specs: [
      ['Cutting Capacity', 'Round – 200 mm, Rectangle – 200 × 200 mm'],
      ['Cutting Speed', '20 – 80 mtr/min'],
      ['Blade Size', '3505 × 27 × 0.9 mm'],
      ['Blade Tension', 'Manual'],
      ['Saw Motor', '2.0 HP'],
      ['Hydraulic Motor', '0.5 HP'],
      ['Coolant Motor', '0.12 HP'],
      ['Job Clamping', 'Hydraulic'],
      ['Job Indexing', 'Manual'],
      ['Hydraulic Reservoir', '25 Ltr'],
      ['Overall Dimension', '1900 × 700 × 1800 mm'],
    ],
  },
  {
    id: '300-lmgs', name: '300 LMGS', badge: 'HIGH SPEED', badgeCls: 'bg-orange-700 text-white',
    subtitle: 'High Speed Metal Cutting Horizontal Band Saw',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/high-speed-metal-cutting-horizontal-band-saw-300-lmgs-2021022678-muoq6tcj-1-1.png',
    desc: 'With expertise, we manufacture and supply High-Speed Metal Cutting Band Saw Machines. Widely used for job shop applications to cut metals of varied kinds and sizes. Range from 6½ – 40½ (150 mm – 1000 mm) with semi-automatic, automatic and numerically controlled models.',
    featuresLabel: 'Standard Features',
    features: [
      "Step pulley with 'V' belt drive",
      'Automatic height adjustment for saw frame',
      'Infinitely variable feed control valve',
      'Hydraulic blade tensioning arrangement',
      'Hydraulic vice system for automatic clamping',
      'Wire brush for blade gullet cleaning',
      'Adjustable blade guide setting with vice opening',
      'Machine lamp',
    ],
    optionalLabel: 'Optional Features',
    optional: [
      'Infinitely variable speed drive by A.C. Frequency drive',
      'Hand operated lubrication system',
      'Fully automatic lubrication system',
      'Floating shuttle vice for forged & uneven surface bars',
      'Hydraulic bundle cutting attachment',
      'Programmable fully automatic version',
      'Numerically controlled menu driven',
    ],
    specs: [
      ['Cutting Capacity', 'Round – 300 mm, Rectangle – 300 × 300 mm'],
      ['Cutting Speed', '20 – 100 mtr/min'],
      ['Blade Size', '4400 × 34 × 1.1 mm'],
      ['Blade Tension', 'Hydraulic'],
      ['Saw Motor', '5.0 HP'],
      ['Hydraulic Motor', '1.5 HP'],
      ['Coolant Motor', '0.12 HP'],
      ['Job Clamping', 'Hydraulic'],
      ['Job Indexing', 'Manual'],
      ['Hydraulic Reservoir', '60 Ltr'],
      ['Overall Dimension', '2650 × 1500 × 2200 mm'],
    ],
  },
  {
    id: '530-lmgs', name: '530 LMGS', badge: 'HEAVY DUTY', badgeCls: 'bg-red-800 text-white',
    subtitle: 'Semi Automatic Steel & Bar Metal Cutting Band Saw',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/530-LMGS_double_Column_Bandsaw_Machine_-_Product1-1-1024x796.jpg',
    desc: 'Semi-Automatic 530 mm Metal Cutting Band Saw Machine Based on Linear Motion Guides. Manufactured, supplied and exported with commitment to quality — uses linear motion guides & bearing blocks compliant with international quality standards.',
    features: [
      'Ease of Working',
      'Higher accuracy on Linear Motion Guides',
      'High productivity for mass production',
      'User friendliness',
      'LM Guides & bearing blocks for international quality standards',
      'Available in customized range',
    ],
    specs: [
      ['Cutting Capacity', 'Round – 530 mm, Rectangle – 530 × 530 mm'],
      ['Cutting Speed', '20 – 80 mtr/min'],
      ['Blade Size', '7600 × 54 × 1.3 mm'],
      ['Blade Tension', 'Hydraulic'],
      ['Saw Motor', '10.0 HP'],
      ['Hydraulic Motor', '3.0 HP'],
      ['Coolant Motor', '0.25 HP'],
      ['Job Clamping', 'Hydraulic'],
      ['Job Indexing', 'Manual'],
      ['Hydraulic Reservoir', '60 Ltr'],
      ['Overall Dimension', '3400 × 1900 × 2450 mm'],
    ],
  },
  {
    id: '660-lmgs', name: '660 LMGS', badge: 'INDUSTRIAL', badgeCls: 'bg-blue-900 text-white',
    subtitle: 'Semi Automatic Metal Cutting Saw',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/660-LMGS_double_Column_MEC_Band_saw_Machine_-_Product1-1024x796.jpg',
    desc: '660 LMGS – Semi Automatic Double Column Band Saw Machine for metal cutting with high accuracy and high efficiency at lowest energy consumption. Designed for Tool & Die makers, Steel traders, metal processing industries, automobile industry, engineering workshops where variety of jobs need cutting: plates, rounds, squares, hex, tubes, angles, I-beams etc.',
    featuresLabel: 'Standard Features',
    features: [
      'Smooth frame movement on LM guides for friction free movement',
      'Automatic machine off in case of blade breakage or loss of hydraulic pressure',
      'Adjustable Dovetail type Heavy duty Movable Blade guide with ball bearing',
      'Automatic switch-off of the band after finishing the cut',
      'Automatic height stop for saw frame to save idle time',
      'Hydraulic Power Pack with easy operation & maintenance',
      'Infinitely variable Feed Control Valve for setting the cutting feed',
      'Electrical control panel with high quality switchgears',
    ],
    optionalLabel: 'Optional Accessories',
    optional: [
      'Bundle cutting attachment',
      'Chip Conveyor System',
      'Job Roller Support Stand',
      'Wire Brush for chips cleaning',
      'Bi-metal Bandsaw blades',
      'Variable Vice pressure for thin walled job',
      'Centralized Automatic Lubrication System',
      'A.C. Drive for Infinitely variable speed control',
    ],
    specs: [
      ['Cutting Capacity', 'Round – 660 mm, Rectangle – 660 × 660 mm'],
      ['Cutting Speed', '20 – 100 mtr/min'],
      ['Blade Size', '8600 × 67 × 1.3 mm'],
      ['Blade Tension', 'Hydraulic'],
      ['Saw Motor', '12.5 HP'],
      ['Hydraulic Motor', '3.0 HP'],
      ['Coolant Motor', '0.25 HP'],
      ['Job Clamping', 'Hydraulic'],
      ['Job Indexing', 'Manual'],
      ['Hydraulic Reservoir', '80 Ltr'],
      ['Overall Dimension', '3200 × 1950 × 2150 mm'],
    ],
  },
  {
    id: '1000-lmgs', name: '1000 LMGS', badge: 'MAX CAPACITY', badgeCls: 'bg-purple-900 text-white',
    subtitle: 'Semi Automatic Metal Cutting Band Saw – Largest Capacity',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/semi-automatic-metal-cutting-band-saw-1000-lmgs-2021022792-dcnghb5k.jpg',
    desc: '1000 LMGS – Semi Automatic Double Column Band Saw Machine for metal cutting with high accuracy and high efficiency at lowest energy consumption. Uses latest linear ball guideways for solid, smooth running and maintenance-free performance.',
    featuresLabel: 'Standard Equipment',
    features: [
      'Hydraulic material full-stroke clamping',
      'Powerful AC-saw drive for high efficiency coupled with low power consumption',
      'Automatic adjustment of saw blade guidance to material width',
      'Sturdy main clamping vice (double clamping vice)',
      '67mm saw blade provides maximum cutting power',
      'Minimum speed and saw blade control on the bandwheel',
      'Uses latest linear ball guideways — solid, smooth, maintenance-free',
      'Strongly built straight cutting bandsaw machine',
      'Extremely rugged and powerful saw blade drive',
      'Lowerable vice for smooth and frictionless material handling',
      'Sensitive saw feed automatic',
    ],
    specs: [
      ['Cutting Capacity', 'Round – 1000 mm, Rectangle – 1000 × 950 mm'],
      ['Cutting Speed', '20 – 100 mtr/min'],
      ['Blade Size', '10500 × 67 × 1.3 mm'],
      ['Blade Tension', 'Hydraulic'],
      ['Saw Motor', '15 HP'],
      ['Hydraulic Motor', '3.0 HP'],
      ['Coolant Motor', '0.25 HP'],
      ['Job Clamping', 'Hydraulic'],
      ['Job Indexing', 'Manual'],
      ['Hydraulic Reservoir', '90 Ltr'],
      ['Overall Dimension', '3400 × 1950 × 2350 mm'],
    ],
  },
  {
    id: '260-lmgs', name: '260 LMGS', badge: 'PRECISION', badgeCls: 'bg-emerald-900 text-white',
    subtitle: 'LM Guide Bandsaw Machine',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/260-LMGS_double_Column_Semi_Auto_Bandsaw_Machine_-_Product-1024x796.jpg',
    desc: '260 LMGS – Semi Automatic Double Column Band Saw Machine on Pre-hardened LM guideway for smooth operation and high accuracy, specially designed for providing high productivity in low investment.',
    features: [
      'Saw frame movement on pre-hardened and pre-loaded LM guides for friction free movement',
      'High Efficiency Power Transmission through helical gear box',
      'Adjustable Dovetail type Heavy duty Movable Blade guide with ball bearing',
      'Infinitely variable Feed Control Valve for Setting the Cutting feed & upward movement',
      'Electrical control panel with high quality switchgears',
      'Automatic switch-off of the blade after finishing the cut',
      'Automatic height stop for saw frame to save idle time',
      'Hydraulic Power Pack with easy maintenance',
      'Double Acting Hydraulic Cylinder for Main vice Clamping & De-clamping',
    ],
    specs: [
      ['Cutting Capacity', 'Round – 260 mm, Rectangle – 260 × 260 mm'],
      ['Cutting Speed', '20 – 80 mtr/min'],
      ['Blade Size', '4100 × 34 × 1.1 mm'],
      ['Blade Tension', 'Manual'],
      ['Saw Motor', '4.0 HP'],
      ['Hydraulic Motor', '1.5 HP'],
      ['Coolant Motor', '0.15 HP'],
      ['Job Clamping', 'Hydraulic'],
      ['Job Indexing', 'Manual'],
      ['Hydraulic Reservoir', '45 Ltr'],
      ['Overall Dimension', '2100 × 800 × 1800 mm'],
    ],
  },
];

/* ── COMPARISON TABLE DATA ──────────────────────────────────────────────── */
const compareRows = [
  { label: 'Cutting Capacity (Round)', vals: ['200mm','200mm','300mm','530mm','660mm','1000mm','260mm'] },
  { label: 'Speed (mtr/min)',          vals: ['20–60','20–80','20–100','20–80','20–100','20–100','20–80'] },
  { label: 'Saw Motor',                vals: ['2 HP','2 HP','5 HP','10 HP','12.5 HP','15 HP','4 HP'] },
  { label: 'Blade Tension',            vals: ['Manual','Manual','Hydraulic','Hydraulic','Hydraulic','Hydraulic','Manual'] },
  { label: 'Hydraulic Res.',           vals: ['25L','25L','60L','60L','80L','90L','45L'] },
  { label: 'Overall Length',           vals: ['1360mm','1900mm','2650mm','3400mm','3200mm','3400mm','2100mm'] },
];


/* ── MODEL CARD ─────────────────────────────────────────────────────────── */
function ModelCard({ model, onQuote }) {
  const [tab, setTab] = useState('features');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div ref={ref} id={model.id}
      initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="bg-carbon-700/30 border border-white/6 rounded-sm overflow-hidden hover:border-amber-500/20 transition-all duration-400 group">
      <div className="grid lg:grid-cols-5">
        {/* Image */}
        <div className="lg:col-span-2 relative overflow-hidden bg-carbon-800 min-h-60">
          <img src={model.img} alt={model.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600 min-h-60"
            style={{ minHeight: 240 }}
            onError={e => { e.target.src = `https://placehold.co/600x400/1a1a1a/f59e0b?text=${encodeURIComponent(model.name)}`; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-carbon-800/50 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
          <span className={`absolute top-3 left-3 font-mono text-xs px-2.5 py-1 tracking-widest uppercase ${model.badgeCls}`}>{model.badge}</span>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
          <div className="mb-4">
            <div className="font-mono text-xs text-amber-500/60 tracking-widest uppercase mb-1">Model</div>
            <h3 className="font-display text-4xl text-white mb-1 group-hover:text-amber-300 transition-colors">{model.name}</h3>
            <p className="font-heading text-steel-400 text-sm tracking-wide">{model.subtitle}</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-white/8 mb-5">
            {['features','specs','description'].map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-4 py-2 font-heading font-600 text-xs tracking-widest uppercase border-b-2 -mb-px transition-all ${
                  tab === t ? 'text-amber-400 border-amber-500' : 'text-steel-500 border-transparent hover:text-steel-300'}`}>
                {t === 'features' ? 'Features' : t === 'specs' ? 'Tech Specs' : 'Description'}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }}>
                {tab === 'features' && (
                  <div className="space-y-5">
                    {/* Standard */}
                    <div>
                      {model.featuresLabel && (
                        <div className="font-mono text-xs text-amber-500/70 tracking-widest uppercase mb-3 flex items-center gap-2">
                          <span className="w-4 h-px bg-amber-500/40" />{model.featuresLabel}
                        </div>
                      )}
                      <div className="grid sm:grid-cols-2 gap-2">
                        {model.features.map(f => (
                          <div key={f} className="flex items-start gap-2 group/f">
                            <CheckCircle2 size={13} className="text-amber-500 mt-0.5 flex-shrink-0" />
                            <span className="font-body text-steel-300 text-xs leading-snug">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Optional */}
                    {model.optional && (
                      <div>
                        <div className="font-mono text-xs text-amber-500/70 tracking-widest uppercase mb-3 flex items-center gap-2">
                          <span className="w-4 h-px bg-amber-500/40" />{model.optionalLabel}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {model.optional.map(f => (
                            <div key={f} className="flex items-start gap-2">
                              <span className="text-amber-500/40 text-xs mt-0.5 flex-shrink-0">◦</span>
                              <span className="font-body text-steel-400 text-xs leading-snug">{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {tab === 'specs' && (
                  <div className="overflow-hidden rounded-sm border border-white/8">
                    {model.specs.map(([lbl, val], i) => (
                      <div key={lbl} className={`grid grid-cols-2 border-b border-white/5 last:border-0 ${i%2===0?'bg-carbon-700/40':'bg-carbon-700/20'}`}>
                        <div className="px-4 py-2.5 font-heading font-600 text-xs uppercase tracking-wide text-steel-400 border-r border-white/5">{lbl}</div>
                        <div className="px-4 py-2.5 font-mono text-amber-300 text-xs">{val}</div>
                      </div>
                    ))}
                  </div>
                )}
                {tab === 'description' && (
                  <p className="font-body text-steel-300 text-sm leading-relaxed">{model.desc}</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-5 border-t border-white/6">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              onClick={() => onQuote(model)}
              className="btn-primary px-7 py-3 rounded-sm text-sm flex items-center gap-2">
              <Send size={14} /> Request a Quote
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── COMPARISON TABLE ───────────────────────────────────────────────────── */
function CompareTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }} className="overflow-x-auto rounded-sm border border-white/8 mt-16">
      <div className="section-label mb-4 flex items-center gap-3 px-4 pt-6">
        <span className="w-8 h-px bg-amber-500" /> Quick Comparison
      </div>
      <h3 className="font-display text-3xl text-white px-4 mb-6">ALL MODELS AT A GLANCE</h3>
      <table className="w-full min-w-[760px] text-xs">
        <thead>
          <tr className="bg-amber-500/10 border-b border-amber-500/20">
            <th className="text-left px-4 py-3 font-heading font-700 text-amber-500 tracking-widest uppercase w-44">Specification</th>
            {models.map(m => (
              <th key={m.id} className="px-3 py-3 font-heading font-700 text-white tracking-wider uppercase text-center text-xs">{m.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareRows.map((row, i) => (
            <tr key={row.label} className={`border-b border-white/5 ${i%2===0?'bg-carbon-700/20':'bg-carbon-700/10'}`}>
              <td className="px-4 py-2.5 font-heading text-steel-400 text-xs tracking-wide">{row.label}</td>
              {row.vals.map((v, j) => (
                <td key={j} className="px-3 py-2.5 font-mono text-amber-300/80 text-center text-xs">{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

/* ── MAIN PAGE ──────────────────────────────────────────────────────────── */
export default function SemiAutoPage({ navigate }) {
  const [quoteModel, setQuoteModel] = useState(null);
  const [activeModel, setActiveModel] = useState(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  const scrollTo = (id) => {
    setActiveModel(id);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  };

  return (
    <div className="min-h-screen bg-carbon-900">
      {/* ── Hero banner ─────────────────────────────────────────────── */}
      <div className="relative pt-24 pb-16 bg-carbon-800 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-mono text-xs text-steel-500 mb-8">
            <button onClick={() => navigate('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <ArrowLeft size={11} /> Home
            </button>
            <ChevronRight size={11} />
            <button onClick={() => navigate('home', '#products')} className="hover:text-amber-400 transition-colors">Products</button>
            <ChevronRight size={11} />
            <span className="text-amber-400">Semi Auto Double Column Bandsaw</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div ref={headerRef} initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <div className="section-label mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-amber-500" /> Product Category
              </div>
              <h1 className="font-display text-5xl sm:text-6xl text-white leading-none mb-4">
                SEMI AUTOMATIC<br /><span className="gradient-text">DOUBLE COLUMN</span><br />BANDSAW MACHINES
              </h1>
              <div className="w-16 h-0.5 bg-amber-500 mb-5" />
              <p className="font-body text-steel-300 leading-relaxed mb-8 max-w-lg">
                We manufacture, supply and export the best range of horizontal bandsaw machines — from double column semi-automatic to fully automatic and special purpose machines. Built on Pre-hardened LM guideways for smooth operation, high accuracy, and maximum productivity.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Zap, label: '7 Models Available' },
                  { icon: Shield, label: 'LM Guide Technology' },
                  { icon: Settings, label: 'PLC Controlled' },
                  { icon: Package, label: 'Custom Configurations' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-sm">
                    <Icon size={13} className="text-amber-500" />
                    <span className="font-heading text-xs tracking-widest uppercase text-steel-300">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-amber-500/8 blur-3xl rounded-full" />
              <div className="relative overflow-hidden rounded-sm border border-white/10">
                <img src="https://mectechnology.co.in/wp-content/uploads/2024/08/210-LMGS_double_Column_Semi_Auto_Bandsaw_Machine_-_Product-1024x796.jpg"
                  alt="MEC Double Column Bandsaw" className="w-full h-80 object-cover opacity-90"
                  onError={e => { e.target.src = 'https://placehold.co/700x500/1a1a1a/f59e0b?text=MEC+Technology'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Model quick-jump tabs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2 mt-10">
            {models.map(m => (
              <button key={m.id} onClick={() => scrollTo(m.id)}
                className={`px-4 py-2 font-heading font-700 text-xs tracking-widest uppercase rounded-sm border transition-all duration-200 ${
                  activeModel === m.id
                    ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20'
                    : 'text-steel-400 border-white/10 hover:border-amber-500/40 hover:text-amber-400'}`}>
                {m.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Model cards ─────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-6">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        {models.map(m => (
          <ModelCard key={m.id} model={m} onQuote={setQuoteModel} />
        ))}

        {/* Comparison table */}
        <CompareTable />

        {/* CTA banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 p-8 border border-amber-500/20 bg-amber-500/5 rounded-sm text-center">
          <div className="font-display text-3xl text-white mb-2">NEED A CUSTOM CONFIGURATION?</div>
          <p className="font-body text-steel-400 mb-6 max-w-xl mx-auto">
            All MEC Technology bandsaw machines are available in customized specifications. Contact our team for special dimensions, automation levels, and PLC configurations.
          </p>
          <button onClick={() => navigate('home', '#contact')}
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-sm text-sm">
            <Send size={15} /> Talk to Our Engineers
          </button>
        </motion.div>
      </div>

      {/* Quote modal */}
      <AnimatePresence>
        {quoteModel && <QuoteModal model={quoteModel} onClose={() => setQuoteModel(null)} />}
      </AnimatePresence>
    </div>
  );
}
