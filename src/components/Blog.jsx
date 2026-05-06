import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Clock, Tag, ArrowLeft } from 'lucide-react';

const posts = [
  {
    id:1, tag:'Guide', readTime:'6 min',
    title:"Understanding the Different Types of Bandsaws: A Comprehensive Guide",
    excerpt:'Explore the various types of bandsaws — vertical, horizontal, industrial, portable, metal cutting, and woodworking bandsaws. This guide provides insights into each type to help you choose the right machine.',
    img:'https://mectechnology.co.in/wp-content/uploads/2024/08/IMG_20170107_113425-scaled.jpg',
    href:'https://mectechnology.co.in/understanding-the-different-types-of-bandsaws-a-comprehensive-guide/',
    body:`Bandsaws are versatile cutting machines used across a wide range of industrial and commercial applications. Understanding the differences between types helps you select the most suitable machine for your production needs.

**Horizontal Bandsaw Machines** are designed for cutting raw material into lengths. The blade runs horizontally, making them ideal for cutting bars, pipes, channels, and structural steel. They are available in manual, semi-automatic, and fully automatic versions.

**Vertical Bandsaw Machines** have a vertically oriented blade and are used for contour cutting, intricate shapes, and ring cutting. Commonly used in tool rooms, die-making shops, and industries that require curved cuts in solid metal.

**Industrial Bandsaw Machines** are heavy-duty machines designed for high-volume, high-accuracy production environments. They feature hydraulic clamping, PLC controls, and LM guide systems for consistent precision across thousands of cuts.

**Portable Bandsaw Machines** are compact, hand-held units used for cutting metal on-site where large stationary machines are not practical.

**Metal Cutting Bandsaws** use bimetallic blades engineered specifically for cutting steel, aluminium, copper, and other metals with clean, burr-free edges.

Choosing the right bandsaw depends on: the material type, required cutting capacity, production volume, and level of automation needed. MEC Technology offers the full spectrum — from manual swing-type machines to fully automatic PLC-controlled systems.`,
  },
  {
    id:2, tag:'Technical', readTime:'7 min',
    title:"Essential Bandsaw Components and Accessories: Maximizing Your Machine's Performance",
    excerpt:'Discover the crucial components and accessories that enhance bandsaw machine performance. Learn about blades, motor power, cutting capacity, and essential accessories for efficient operation.',
    img:'https://mectechnology.co.in/wp-content/uploads/2024/08/IMG20230123100807-scaled.jpg',
    href:'https://mectechnology.co.in/essential-bandsaw-components-and-accessories-maximizing-your-machines-performance-3/',
    body:`A bandsaw machine is only as good as its components. Understanding each element helps you maintain peak performance and extend machine life.

**Bandsaw Blades** are the most critical consumable. Bimetallic blades — HSS teeth welded to a flexible backing — offer the best combination of tooth hardness and blade flexibility. Blade selection depends on material hardness, profile, and required surface finish.

**Motor & Drive System** determines cutting speed and torque. MEC's machines feature helical gear boxes for high-efficiency power transmission with reduced noise and vibration.

**LM Guide System** (Linear Motion Guides) ensures the saw head moves in a perfectly straight path every cut. Pre-hardened and pre-loaded guideways eliminate play and maintain accuracy over millions of cycles.

**Hydraulic System** powers the vice clamping and feed control. A well-maintained hydraulic power pack — clean oil, correct pressure — is essential for consistent clamping force and feed rates.

**Blade Guide Assembly** keeps the blade tracking straight. Dovetail-type heavy-duty movable blade guides with ball bearings provide support close to the cut, reducing blade deflection.

**Control Panel & PLC** — modern machines feature PLC-controlled panels with high-quality switchgears for automatic operation, fault detection, and production monitoring.

**Essential Accessories:** wire brush for chip removal, coolant system for blade cooling and lubrication, chip conveyor for swarf management, and roller stands for material support.`,
  },
  {
    id:3, tag:'Maintenance', readTime:'8 min',
    title:'Comprehensive Guide to Bandsaw Maintenance and Troubleshooting',
    excerpt:'Learn how to keep your bandsaw in top condition with detailed maintenance and troubleshooting guidelines. Discover essential safety practices, regular tasks, and solutions to common issues.',
    img:'https://mectechnology.co.in/wp-content/uploads/2024/08/460_LMGA_Automatic_Double_Column_Bandsaw_Machine_-_Product1-1.jpg',
    href:'https://mectechnology.co.in/comprehensive-guide-to-bandsaw-maintenance-and-troubleshooting/',
    body:`Regular maintenance is the key to maximizing the lifespan and accuracy of your bandsaw machine. Here is a structured approach to maintenance and common troubleshooting.

**Daily Checks:**
- Clean chips and coolant residue from all surfaces
- Check coolant level and flow
- Inspect blade for cracks, missing teeth, or excessive wear
- Verify vice clamping operation
- Check hydraulic oil level

**Weekly Maintenance:**
- Lubricate blade guides and guide bearings
- Check blade tension — retension if blade shows drift
- Inspect V-belts or gear drive for wear
- Clean hydraulic filter if fitted
- Check all electrical connections

**Monthly Maintenance:**
- Change coolant if contaminated
- Inspect hydraulic hoses for leaks
- Check and adjust blade guides to correct gap
- Verify LM guideway condition and lubrication
- Test all safety switches and emergency stops

**Common Problems & Solutions:**

*Blade drifts during cut:* Check blade tension, guide bearing condition, feed rate — reduce if too high.

*Premature blade breakage:* Verify correct blade speed for the material, check blade tension, ensure job is clamped securely.

*Rough cut surface:* Reduce cutting speed, check blade for worn teeth, increase coolant flow.

*Hydraulic vice not clamping:* Check hydraulic oil level, inspect solenoid valve, verify pump pressure.

*Machine vibration:* Check blade guides, inspect drive belt tension, verify job is clamped tightly.`,
  },
  {
    id:4, tag:'Buying Guide', readTime:'5 min',
    title:'Choosing the Right Bandsaw: Reviews, Prices, and Top Brands for Every Need',
    excerpt:'Discover the best bandsaws available, including in-depth reviews, pricing, and recommendations. Learn about top bandsaw brands and make an informed purchasing decision.',
    img:'https://mectechnology.co.in/wp-content/uploads/2024/08/Ludhiana-Expo-2020-e1723208249597.jpg',
    href:'https://mectechnology.co.in/choosing-the-right-bandsaw-reviews-prices-and-top-brands-for-every-need/',
    body:`Selecting the right bandsaw for your industrial application involves evaluating several key criteria. Here is a framework to guide your purchase decision.

**Step 1 – Define Your Cutting Requirement**
What diameter round or rectangle size do you need to cut? What materials — mild steel, stainless, aluminium, alloy steel? What volume — how many cuts per shift? The answers determine the machine capacity and automation level you need.

**Step 2 – Choose the Automation Level**
Manual: Operator controls feed rate and initiates each cut. Suitable for job shops with varied small-batch requirements.
Semi-Automatic: Auto feed and auto saw-off. Operator loads and unloads material. Suitable for medium volume production.
Fully Automatic: Auto feed, clamping, cutting, and indexing. Suitable for high-volume production with consistent piece lengths.

**Step 3 – Evaluate Machine Build Quality**
Look for: LM guideway construction, hydraulic vice with adequate clamping force, robust blade drive system, reliable control panel, and availability of spare parts.

**Step 4 – After-Sales Support**
A machine is only as good as the support behind it. MEC Technology offers 24/7 technical support, pan-India spare parts availability, and on-site service through an experienced team.

Contact MEC Technology for a detailed quotation based on your specific production requirements.`,
  },
  {
    id:5, tag:'Comparison', readTime:'4 min',
    title:'Bandsaw vs. Jigsaw: Which Saw is Right for Your Projects?',
    excerpt:'Understanding the differences between a bandsaw and a jigsaw is crucial for selecting the right tool. This guide compares features, uses, and benefits to help you make the right choice.',
    img:'https://mectechnology.co.in/wp-content/uploads/2024/08/20200221_105254-scaled.jpg',
    href:'https://mectechnology.co.in/bandsaw-vs-jigsaw-which-saw-is-right-for-your-projects/',
    body:`Both bandsaws and jigsaws cut material using a toothed blade, but they serve very different purposes in an industrial setting.

**Bandsaw Machines:**
- Continuous loop blade running over two or more wheels
- Designed for straight cuts (horizontal type) or curved cuts (vertical type)
- Suitable for high-volume production cutting of metal bars, billets, tubes, and profiles
- Available in large capacities up to 1000 mm cutting diameter
- Used in steel service centres, forging shops, automobile plants, DRDO facilities, and heavy engineering
- Produces consistent, accurate cuts with minimal material waste (thin kerf)

**Jigsaw:**
- Reciprocating blade moving up and down
- Best for curved, irregular cuts in sheet material
- Limited depth of cut — typically used for wood, plastic, thin sheet metal
- Not suitable for production metal cutting of solid bars or heavy sections
- Hand-held or small bench-top format only

**When to choose a Bandsaw:**
- Cutting solid metal bars, pipes, channels, angles, or structural sections
- Production environments requiring repeatable precision cuts
- Medium to high volume operations where productivity matters
- Applications requiring cuts from 100 mm up to 1000 mm capacity

**When to choose a Jigsaw:**
- Cutting irregular shapes in sheet metal or plastic panels
- One-off fabrication work on thin material
- Portable cutting on construction sites

For industrial metal cutting applications, a bandsaw machine is the clear choice for efficiency, precision, and productivity.`,
  },
];

function BlogCard({ post, index, onRead }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.article ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group card-dark rounded-sm overflow-hidden cursor-pointer" onClick={() => onRead(post)}>
      <div className="relative h-52 overflow-hidden bg-carbon-700">
        <img src={post.img} alt={post.title}
          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-600"
          onError={e => { e.target.src = 'https://placehold.co/600x400/1a1a1a/f59e0b?text=MEC+Blog'; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute top-3 left-3 font-mono text-xs px-2 py-1 bg-amber-500 text-black tracking-widest uppercase">{post.tag}</span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1 text-steel-500 text-xs font-mono mb-3"><Clock size={11} /> {post.readTime} read</div>
        <h3 className="font-heading font-700 text-white text-lg leading-snug mb-3 group-hover:text-amber-300 transition-colors line-clamp-2">{post.title}</h3>
        <p className="font-body text-steel-400 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-amber-500 text-sm font-heading font-600 tracking-wide">
          Read Article <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
}

function ArticleView({ post, onBack }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <button onClick={onBack} className="flex items-center gap-2 font-heading text-xs tracking-widest uppercase text-steel-400 hover:text-amber-400 transition-colors mb-8">
        <ArrowLeft size={13} /> Back to Blog
      </button>
      <div className="relative h-72 rounded-sm overflow-hidden border border-white/8 mb-8">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-80"
          onError={e => { e.target.src = 'https://placehold.co/800x400/1a1a1a/f59e0b?text=MEC+Blog'; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="font-mono text-xs px-2 py-1 bg-amber-500 text-black tracking-widest uppercase">{post.tag}</span>
          <span className="font-mono text-xs px-2 py-1 bg-black/70 text-steel-300 border border-white/10 flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
        </div>
      </div>
      <h1 className="font-heading font-700 text-white text-3xl sm:text-4xl leading-snug mb-5">{post.title}</h1>
      <div className="w-12 h-0.5 bg-amber-500 mb-8" />
      <div className="space-y-5">
        {post.body.split('\n\n').map((para, i) => {
          if (para.startsWith('- ') || (para.includes('\n-'))) {
            return (
              <ul key={i} className="space-y-1.5">
                {para.split('\n').filter(l => l.trim()).map((l, j) => (
                  <li key={j} className="flex items-start gap-2 font-body text-steel-300 text-base">
                    <span className="text-amber-500 mt-1 flex-shrink-0">·</span>
                    <span dangerouslySetInnerHTML={{ __html: l.replace(/^-\s*/,'').replace(/\*\*(.*?)\*\*/g,'<strong class="text-amber-300">$1</strong>') }} />
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="font-body text-steel-300 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g,'<strong class="text-amber-300">$1</strong>') }} />
          );
        })}
      </div>
      <div className="mt-10 pt-8 border-t border-white/8">
        <a href={post.href} target="_blank" rel="noopener noreferrer"
          className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm">
          View Original Article <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Blog({ navigate }) {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState('All');
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });
  const tags = ['All', ...new Set(posts.map(p => p.tag))];
  const filtered = filter === 'All' ? posts : posts.filter(p => p.tag === filter);

  return (
    <div className="min-h-screen bg-carbon-900 pt-24">
      <div className="relative py-16 bg-carbon-800 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 font-mono text-xs text-steel-500 mb-6">
            <button onClick={() => navigate('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1"><ArrowLeft size={11} /> Home</button>
            <span>/</span><span className="text-amber-400">Blog</span>
          </div>
          <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="section-label mb-4 flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Industry Insights</div>
            <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">OUR <span className="gradient-text">BLOG</span></h1>
            <p className="font-body text-steel-400 max-w-2xl">Technical guides, maintenance tips, product comparisons, and industry insights from MEC Technology's team of bandsaw machine experts.</p>
          </motion.div>
        </div>
      </div>

      {active ? (
        <ArticleView post={active} onBack={() => setActive(null)} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-wrap gap-2 mb-10">
            {tags.map(t => (
              <button key={t} onClick={() => setFilter(t)}
                className={`flex items-center gap-1.5 px-4 py-2 font-heading font-600 text-xs tracking-widest uppercase rounded-sm border transition-all ${
                  filter === t ? 'bg-amber-500 text-black border-amber-500' : 'text-steel-400 border-white/10 hover:border-amber-500/40 hover:text-amber-400'}`}>
                {t !== 'All' && <Tag size={10} />} {t}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => <BlogCard key={post.id} post={post} index={i} onRead={setActive} />)}
          </div>
        </div>
      )}
    </div>
  );
}
