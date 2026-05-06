import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, ArrowLeft, Camera } from 'lucide-react';

const expos = [
  {
    id: 'imtex-2022', name: 'Imtex Expo Bangalore', year: '2022', location: 'Bangalore, Karnataka',
    desc: "India's premier metal cutting & forming technology exhibition. MEC Technology showcased its latest bandsaw and circular saw machines to national and global industry audiences.",
    imgs: [
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-3.38.24-PM.jpeg', caption:'MEC Technology Booth — Imtex 2022' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-3.41.10-PM.jpeg', caption:'Product Display — Bandsaw Machines' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-3.44.55-PM.jpeg', caption:'Team MEC at Imtex Expo 2022' },
    ],
  },
  {
    id: 'mech-auto-2019', name: 'Mech Auto Expo Ludhiana', year: '2019', location: 'Ludhiana, Punjab',
    desc: "North India's largest engineering & automotive expo. MEC Technology presented its full product lineup to steel traders, automobile industries and engineering workshops.",
    imgs: [
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-3.43.32-PM.jpeg', caption:'MEC Technology Stall — Ludhiana Expo 2019' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-3.42.36-PM.jpeg', caption:'Live Machine Demonstration' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-3.39.54-PM.jpeg', caption:'Client Interaction at Expo' },
    ],
  },
  {
    id: 'msme-2016', name: 'MSME Convention', year: '2016', location: 'Indore, Madhya Pradesh',
    desc: "Ministry of MSME national convention where MEC Technology was recognised as a key contributor to India's manufacturing ecosystem.",
    imgs: [
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/IMG_20170107_113425-scaled.jpg', caption:'MEC Technology at MSME Convention 2016' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/IMG20230123100807-scaled.jpg', caption:'Factory Floor — Production Unit' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/IMG20230123100735-scaled-1-1.jpg', caption:'Machine Ready for Dispatch' },
    ],
  },
  {
    id: 'ludhiana-2020', name: 'Ludhiana Expo', year: '2020', location: 'Ludhiana, Punjab',
    desc: 'Regional industrial machinery showcase focused on metal processing innovations. MEC Technology displayed its semi-automatic and automatic bandsaw range.',
    imgs: [
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/Ludhiana-Expo-2020-e1723208249597.jpg', caption:'MEC Technology Participation — Ludhiana Expo 2020' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/20200221_105254-scaled.jpg', caption:'Product Display at Ludhiana Expo' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/210_LMGA_-_automatic_Bandsaw_Machine_indore.jpg', caption:'210 LMGA Automatic Bandsaw' },
    ],
  },
  {
    id: 'imtex-2019', name: 'Imtex Expo Bangalore', year: '2019', location: 'Bangalore, Karnataka',
    desc: "Earlier participation at India's flagship machine tool exhibition — MEC Technology first showcased its LM Guide bandsaw machines to international buyers.",
    imgs: [
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-06-27-at-3.52.41-PM-3-1024x664.jpeg', caption:'Imtex Expo Bangalore 2019' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-12.34.54-PM-1-1024x768.jpeg', caption:'Machine Display — Imtex 2019' },
      { src:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-12.34.54-PM-2-1-1024x528.jpeg', caption:'MEC Team at Imtex 2019' },
    ],
  },
];

// Flatten with precomputed offsets
const allImgs = expos.flatMap(g => g.imgs.map(img => ({ ...img, group: g.name, year: g.year })));
const offsets = expos.reduce((acc, g, i) => {
  acc.push(i === 0 ? 0 : acc[i-1] + expos[i-1].imgs.length);
  return acc;
}, []);

/* ── Lightbox ─────────────────────────────────────────────────────── */
function Lightbox({ img, idx, total, onClose, onPrev, onNext }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-black/97 backdrop-blur-md flex flex-col items-center justify-center p-4"
      onClick={onClose}>
      {/* Close */}
      <button onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 hover:border-amber-400/40 transition-all z-10">
        <X size={18} />
      </button>
      {/* Counter */}
      <div className="absolute top-5 left-5 font-mono text-xs text-steel-500">
        {idx + 1} / {total}
      </div>
      {/* Prev */}
      <button onClick={e => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 hover:border-amber-400/40 transition-all z-10 bg-black/40">
        <ChevronLeft size={20} />
      </button>
      {/* Next */}
      <button onClick={e => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:text-amber-400 hover:border-amber-400/40 transition-all z-10 bg-black/40">
        <ChevronRight size={20} />
      </button>

      <motion.div key={img.src} initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.22 }}
        className="flex flex-col items-center gap-4 max-w-5xl w-full"
        onClick={e => e.stopPropagation()}>
        <img src={img.src} alt={img.caption}
          className="max-h-[78vh] max-w-full w-auto object-contain rounded-sm border border-white/10 shadow-2xl"
          onError={e => { e.target.src = 'https://placehold.co/800x600/1a1a1a/f59e0b?text=MEC+Technology'; }} />
        <div className="text-center space-y-1">
          <div className="font-heading text-sm text-amber-400 tracking-widest uppercase">{img.caption}</div>
          <div className="font-mono text-xs text-steel-500">{img.group} · {img.year}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Expo Section ─────────────────────────────────────────────────── */
function ExpoSection({ group, offset, onOpen }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20">
      {/* Section label */}
      <div className="flex items-end justify-between mb-6 pb-5 border-b border-white/8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Camera size={14} className="text-amber-500" />
            <span className="font-mono text-xs text-amber-500/70 tracking-widest uppercase">{group.location} · {group.year}</span>
          </div>
          <h3 className="font-display text-3xl sm:text-4xl text-white">{group.name}</h3>
          <p className="font-body text-steel-400 text-sm mt-2 max-w-xl leading-relaxed">{group.desc}</p>
        </div>
        <span className="font-display text-7xl text-white/4 leading-none hidden md:block select-none">{group.year}</span>
      </div>

      {/* Image grid — strict equal frames */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {group.imgs.map((img, i) => (
          <motion.div key={img.src}
            whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.2 }}
            className="relative rounded-sm border border-white/8 hover:border-amber-500/40 cursor-pointer group overflow-hidden shadow-lg hover:shadow-amber-500/10 hover:shadow-xl"
            style={{ aspectRatio: '4/3' }}
            onClick={() => onOpen(offset + i)}>
            {/* Fixed-frame image — always fills perfectly */}
            <img src={img.src} alt={img.caption}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-108 transition-all duration-600"
              style={{ transition: 'transform 0.6s ease, opacity 0.3s ease' }}
              onError={e => { e.target.src = 'https://placehold.co/600x450/1a1a1a/f59e0b?text=MEC+Technology'; }} />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            {/* Zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-500/90 flex items-center justify-center shadow-2xl">
                <ZoomIn size={20} className="text-black" />
              </div>
            </div>
            {/* Caption bar at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="font-heading text-xs text-white tracking-wide truncate">{img.caption}</div>
            </div>
            {/* Photo number badge */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-black/60 border border-white/20 flex items-center justify-center">
              <span className="font-mono text-xs text-white/60">{i+1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Gallery Page ─────────────────────────────────────────────────── */
export default function Gallery({ navigate }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-carbon-900 pt-24">
      {/* Page header */}
      <div className="relative py-16 bg-carbon-800 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 font-mono text-xs text-steel-500 mb-6">
            <button onClick={() => navigate('home')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <ArrowLeft size={11} /> Home
            </button>
            <span>/</span><span className="text-amber-400">Gallery</span>
          </div>
          <motion.div ref={headerRef}
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-amber-500" /> Exhibition History
            </div>
            <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">
              OUR <span className="gradient-text">GALLERY</span>
            </h1>
            <p className="font-body text-steel-400 max-w-2xl">
              MEC Technology has participated in major industrial exhibitions across India — showcasing innovation in metal cutting technology to national and global audiences. Click any image to view full size.
            </p>
            {/* Stats row */}
            <div className="flex gap-6 mt-6">
              {[['5','Exhibitions'],['15+','Photos'],['2016–2022','Years']].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="font-display text-3xl gradient-text">{val}</div>
                  <div className="font-mono text-xs text-steel-500 tracking-widest uppercase">{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {expos.map((group, i) => (
          <ExpoSection key={group.id} group={group} offset={offsets[i]} onOpen={setLightboxIdx} />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            img={allImgs[lightboxIdx]}
            idx={lightboxIdx}
            total={allImgs.length}
            onClose={() => setLightboxIdx(null)}
            onPrev={() => setLightboxIdx(i => (i - 1 + allImgs.length) % allImgs.length)}
            onNext={() => setLightboxIdx(i => (i + 1) % allImgs.length)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
