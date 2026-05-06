import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 1, name: 'Swing Type Bandsaw Machine',
    desc: 'Manual, semi-automatic & hydraulic swing type machines. 200–250mm cutting capacity. Angular cutting option available with 45°–60° miter cutting.',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/swing-type-bandsaw-machine-200-sch-2021022446-z4rfdono.avif',
    tag: 'MANUAL / SEMI-AUTO', model: '5 Models', page: 'swing-type',
  },
  {
    id: 2, name: 'Semi Auto Double Column Bandsaw',
    desc: '7 models from 200mm to 1000mm cutting capacity on pre-hardened LM guideways. High accuracy, hydraulic clamping, auto saw-off.',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/MEC_210_double_Column_Bandsaw_Machine_-_Home.jpg',
    tag: 'SEMI-AUTOMATIC', model: '7 Models', page: 'semi-auto', featured: true,
  },
  {
    id: 3, name: 'Automatic Metal Cutting Bandsaw',
    desc: 'Fully automatic LM guide bandsaw machines with Touch Screen HMI, servo control, and programmable cutting — 210mm to 460mm capacity.',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/210_LMGA_-_automatic_Bandsaw_Machine_indore.jpg',
    tag: 'FULLY AUTOMATIC', model: '4 Models', page: 'auto-bandsaw',
  },
  {
    id: 4, name: 'High Speed Circular Saw Machine',
    desc: 'Servo + PLC controlled circular saw machines with auto bar loader. TCT/HSS blades. 15–100mm cutting capacity. Much faster than bandsaw.',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/Untitled-design-3-e1723280287422-1536x1144-1.png',
    tag: 'HIGH SPEED', model: '3 Models', page: 'circular-saw',
  },
  {
    id: 5, name: 'Vertical Bandsaw Machine',
    desc: 'Hydraulic vertical bandsaw machines for ring, contour & special cutting. Tilting head (45° both sides) and X-Y axis versions available.',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/200_V2_Vertical_Bandsaw_Machine_-_Home2.jpg',
    tag: 'VERTICAL', model: '3 Models', page: 'vertical-bandsaw',
  },
  {
    id: 6, name: 'Bandsaw Blades',
    desc: 'Bimetallic M42 & M51 grade bandsaw blades with armor coating. For all metals — SS, alloy, carbon, non-ferrous. All sizes available.',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/MEC_bandsaw_blade_-_Home4.jpg',
    tag: 'ACCESSORIES', model: 'M42 / M51', page: 'bandsaw-blades',
  },
  {
    id: 7, name: 'Miter Cutting Bandsaw Machine',
    desc: 'Miter / degree cutting bandsaw machines up to 60°. 460mm–650mm capacity. One-touch degree setting for steel structure industry.',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/460_Miter_bandsaw.jpg',
    tag: 'MITER / DEGREE', model: '2 Models', page: 'miter-bandsaw',
  },
  {
    id: 8, name: 'Bandsaw Machine Spare Parts',
    desc: 'OEM grade spare parts for all bandsaw & circular saw machines. Ready stock available. Special purpose parts on requirement.',
    img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/Spare_parts_-_Bandsaw_Machine.jpg',
    tag: 'SPARE PARTS', model: 'All Models', page: 'spare-parts',
  },
];

function ProductCard({ product, index, navigate }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(product.page)}
      className="card-dark rounded-sm overflow-hidden group glow-border relative cursor-pointer">

      {product.featured && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 z-10" />
      )}

      <div className="relative overflow-hidden h-52 bg-carbon-700">
        <img src={product.img} alt={product.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-600"
          onError={e => { e.target.src = `https://placehold.co/400x300/1a1a1a/f59e0b?text=${encodeURIComponent(product.model)}`; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`font-mono text-xs px-2 py-1 tracking-widest uppercase ${product.featured ? 'bg-amber-500 text-black' : 'bg-black/70 text-amber-400 border border-amber-500/30'}`}>
            {product.tag}
          </span>
        </div>
        <div className="absolute inset-0 bg-amber-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 border border-amber-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight size={13} className="text-amber-400" />
        </div>
      </div>

      <div className="p-5">
        <div className="font-mono text-xs text-amber-500/60 tracking-widest mb-2">{product.model}</div>
        <h3 className="font-heading font-700 text-white text-lg leading-tight mb-3 group-hover:text-amber-300 transition-colors">{product.name}</h3>
        <p className="font-body text-steel-400 text-sm leading-relaxed mb-4 line-clamp-2">{product.desc}</p>
        <div className="flex items-center gap-2 text-amber-500 text-sm font-heading font-600 tracking-wide">
          View All Models <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Products({ navigate }) {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <section id="products" className="relative py-28 bg-carbon-800 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div ref={headerRef}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="section-label mb-4 justify-center flex items-center gap-3">
            <span className="w-8 h-px bg-amber-500" /> Our Product Range <span className="w-8 h-px bg-amber-500" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            OUR <span className="gradient-text">PRODUCTS</span>
          </h2>
          <p className="font-body text-steel-400 max-w-2xl mx-auto text-base">
            Leading manufacturer, supplier, trader & exporter of Metal Cutting Bandsaw Machines and Circular Saw Machines — designed with premium grade raw material and checked against international quality norms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} navigate={navigate} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14">
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-sm text-sm">
            Request Custom Quote <ArrowUpRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
