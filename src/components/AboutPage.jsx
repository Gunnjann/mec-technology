import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Download, ExternalLink, Award, Users, TrendingUp, Factory, Shield, Cpu, ArrowLeft } from 'lucide-react';

const whyChoose = [
  { icon: Cpu,     title: 'Latest Technology',    desc: 'Continuously investing in R&D, our bandsaw machines feature PLC controls, LM guide systems, and hydraulic automation meeting current industry standards.' },
  { icon: Shield,  title: 'High Quality Products', desc: 'Each machine undergoes rigorous quality checks. Finest raw materials from dependable vendors — every bandsaw machine meets the highest durability and performance standards.' },
  { icon: TrendingUp, title:'Economical Price Range', desc: 'Despite our focus on high quality and advanced technology, we offer products at an economical price range — providing excellent value for money.' },
  { icon: Factory, title:'High Accuracy Production', desc: 'State-of-the-art machines and innovative technology ensure all our bandsaw machines meet exacting dimensional accuracy and performance standards.' },
  { icon: Users,   title:'Vast Client Network',    desc: 'We have built a client base spanning industries across India through transparent dealings, ethical conduct, and sound market reputation.' },
  { icon: Award,   title:'ISO 9001:2015 Certified', desc: 'MEC Technology is an ISO 9001:2015 certified company. Quality management systems audited to international standards ensure verified quality benchmarks.' },
];

const infrastructure = [
  { label:'Manufacturing Unit',  desc:'State-of-the-art production floor with precision machining capability.' },
  { label:'Quality Control',     desc:'Dedicated QC lab with inspection equipment and dimensional verification tools.' },
  { label:'R&D Department',      desc:'In-house research and development for continuous product innovation.' },
  { label:'Warehousing',         desc:'Organised warehouse with ready-stock of spare parts and components.' },
  { label:'Administration',      desc:'Professional administrative and sales support for seamless operations.' },
];

const catalogs = [
  { label:'Company Profile 2024–25', desc:'Full MEC Technology company profile including product range and capabilities.', href:'https://mectechnology.co.in/wp-content/uploads/2024/08/MEC-TECHNOLOGY-M-I-P-L-Profile-2024-25.pdf', icon:Download },
  { label:'Product Catalog',        desc:'Complete catalog of all bandsaw and circular saw machines with specifications.', href:'https://drive.google.com/file/d/10oVGBhuv_-G1m6nCpFFRgj5fgD0B6paM/view', icon:ExternalLink },
  { label:'Spare Parts Catalog',    desc:'Full spare parts reference guide with part numbers and availability.', href:'https://drive.google.com/file/d/1ZgSOenLOXtWU29b7lfxtAfsgtkp_Tu29/view', icon:ExternalLink },
];

const milestones = [
  { year:'2009', event:'MEC Technology Machines (I) Pvt Ltd incorporated in Indore, Madhya Pradesh.' },
  { year:'2012', event:'Expanded product range to include double column semi-automatic bandsaw machines.' },
  { year:'2015', event:'Achieved ISO 9001 certification. Entered export market for bandsaw machines.' },
  { year:'2016', event:'Participated in MSME Convention. Crossed 200+ client milestone.' },
  { year:'2019', event:'Exhibited at Imtex Expo Bangalore & Mech Auto Expo Ludhiana.' },
  { year:'2020', event:'Participated in Ludhiana Expo. Launched LM Guide product series.' },
  { year:'2022', event:'Exhibited at Imtex Expo Bangalore 2022. Expanded service network nationally.' },
  { year:'2024', event:'Launched updated company profile. 500+ satisfied clients across India.' },
];


function MilestoneItem({ year, event, index }) {
  const ref = useRef(null);
  const inV = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
      animate={inV ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex gap-4 items-start group pb-8">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/40 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
          <div className="w-2 h-2 bg-amber-500 rounded-full" />
        </div>
        {index < 7 && <div className="w-px flex-1 min-h-8 bg-gradient-to-b from-amber-500/30 to-transparent mt-1" />}
      </div>
      <div>
        <div className="font-display text-2xl gradient-text leading-none mb-1">{year}</div>
        <p className="font-body text-steel-300 text-sm leading-relaxed">{event}</p>
      </div>
    </motion.div>
  );
}

export default function AboutPage({ navigate }) {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-carbon-900 pt-24">
      {/* Header */}
      <div className="relative py-16 bg-carbon-800 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 font-mono text-xs text-steel-500 mb-6">
            <button onClick={() => navigate('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1"><ArrowLeft size={11} /> Home</button>
            <span>/</span><span className="text-amber-400">About Us</span>
          </div>
          <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="section-label mb-4 flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Our Story</div>
            <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">ABOUT <span className="gradient-text">MEC TECHNOLOGY</span></h1>
            <p className="font-body text-steel-400 max-w-2xl">ISO 9001:2015 certified manufacturer of industrial metal cutting machines — built on 15+ years of precision engineering, transparency, and client trust.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Overview ──────────────────────────────────────────────── */}
        <section className="py-20 grid lg:grid-cols-2 gap-16 items-center border-b border-white/5">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-amber-500 z-10" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-amber-500 z-10" />
              <div className="overflow-hidden rounded-sm border border-white/10 grid grid-cols-2 gap-1 bg-carbon-700/40 p-1">
                {[
                  'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-12.34.54-PM-2-1-1024x528.jpeg',
                  'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-06-27-at-3.52.41-PM-3-1024x664.jpeg',
                  'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-12.34.54-PM-1-1024x768.jpeg',
                  'https://mectechnology.co.in/wp-content/uploads/2024/08/IMG20230123100735-scaled-1-1.jpg',
                ].map((src, i) => (
                  <img key={i} src={src} alt={`MEC facility ${i+1}`}
                    className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                    onError={e => { e.target.src = 'https://placehold.co/400x300/1a1a1a/f59e0b?text=MEC+Technology'; }} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
            <div className="section-label mb-4 flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Company Overview</div>
            <h2 className="font-display text-4xl text-white mb-5 leading-tight">ISO CERTIFIED<br /><span className="gradient-text">SINCE 2009</span></h2>
            <div className="space-y-4 font-body text-steel-300 text-base leading-relaxed">
              <p>Established in 2009, <strong className="text-white">MEC Technology Machines (I) Private Limited</strong> — an <strong className="text-amber-400">ISO 9001:2015 Certified</strong> company — is a renowned manufacturer, supplier, exporter, trader, and service provider in industrial metal cutting equipment.</p>
              <p>Our offerings include advanced bandsaw machines, circular saw machines, bandsaw blades, and industrial engineering services — meticulously crafted using high-grade raw materials from dependable vendors, meeting stringent quality standards.</p>
              <p>Under the visionary guidance of our directors <strong className="text-white">Mr. Uttam Rao</strong> and <strong className="text-white">Mr. Shekhar</strong>, MEC Technology has earned a robust reputation for excellence, transparency, and reliability — fostering enduring relationships with a diverse clientele across various sectors.</p>
            </div>
            <div className="mt-6 flex items-center gap-3 p-4 bg-amber-500/8 border border-amber-500/20 rounded-sm">
              <Award size={22} className="text-amber-500 flex-shrink-0" />
              <div>
                <div className="font-heading font-700 text-amber-400 text-sm tracking-wide">ISO 9001:2015 Certified</div>
                <div className="font-body text-steel-400 text-xs">Quality Management System — International Standard</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Infrastructure ────────────────────────────────────────── */}
        <section className="py-20 border-b border-white/5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <div className="section-label mb-4 justify-center flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Our Facility <span className="w-8 h-px bg-amber-500" /></div>
            <h2 className="font-display text-5xl text-white">WORLD-CLASS <span className="gradient-text">INFRASTRUCTURE</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {infrastructure.map(({ label, desc }, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 border border-white/5 hover:border-amber-500/25 bg-carbon-700/20 hover:bg-carbon-700/40 transition-all rounded-sm text-center">
                <div className="font-heading font-700 text-white mb-2 group-hover:text-amber-300 transition-colors">{label}</div>
                <div className="w-8 h-0.5 bg-amber-500/40 mx-auto mb-3 group-hover:bg-amber-500 transition-colors" />
                <p className="font-body text-steel-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ─────────────────────────────────────────── */}
        <section className="py-20 border-b border-white/5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <div className="section-label mb-4 justify-center flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Why Choose MEC <span className="w-8 h-px bg-amber-500" /></div>
            <h2 className="font-display text-5xl text-white">THE MEC <span className="gradient-text">DIFFERENCE</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i%3)*0.1 }}
                className="group p-6 border border-white/5 hover:border-amber-500/25 bg-carbon-700/20 hover:bg-carbon-700/40 transition-all rounded-sm">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                  <Icon size={22} className="text-amber-500" />
                </div>
                <h3 className="font-heading font-700 text-white text-lg tracking-wide mb-3 group-hover:text-amber-300 transition-colors">{title}</h3>
                <p className="font-body text-steel-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Timeline ──────────────────────────────────────────────── */}
        <section className="py-20 border-b border-white/5">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <div className="section-label mb-4 justify-center flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Our Journey <span className="w-8 h-px bg-amber-500" /></div>
            <h2 className="font-display text-5xl text-white">15 YEARS OF <span className="gradient-text">EXCELLENCE</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-x-16 max-w-4xl mx-auto">
            {milestones.map(({ year, event }, i) => (
              <MilestoneItem key={year} year={year} event={event} index={i} />
            ))}
          </div>
        </section>

        {/* ── Catalogs ──────────────────────────────────────────────── */}
        <section className="py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
            <div className="section-label mb-4 justify-center flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Downloads <span className="w-8 h-px bg-amber-500" /></div>
            <h2 className="font-display text-5xl text-white">PRODUCT <span className="gradient-text">CATALOGS</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {catalogs.map(({ label, desc, href, icon: Icon }, i) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.1 }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.4),0 0 20px rgba(245,158,11,0.1)' }}
                className="group p-6 border border-amber-500/20 hover:border-amber-500/50 bg-carbon-700/20 rounded-sm flex flex-col gap-4 transition-all">
                <div className="w-12 h-12 bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-black" />
                </div>
                <div>
                  <div className="font-heading font-700 text-white mb-2 group-hover:text-amber-300 transition-colors">{label}</div>
                  <div className="font-body text-steel-400 text-xs leading-relaxed">{desc}</div>
                </div>
                <div className="font-heading font-600 text-xs tracking-widest uppercase text-amber-500 flex items-center gap-1 mt-auto">
                  Open / Download <Icon size={11} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
