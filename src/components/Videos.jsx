import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Youtube, ArrowLeft } from 'lucide-react';

// Real YouTube video IDs from MEC Technology @WeAreMec channel
const categories = [
  {
    id: 'horizontal', label: 'Horizontal Bandsaw',
    videos: [
      {
        id:'v1', title:'210 LMGA – Automatic Double Column Bandsaw Machine',
        desc:'Fully automatic bandsaw machine with LM guide technology — demonstrating auto clamping, auto feed, and auto saw-off in a production environment.',
        youtubeId:'C_5cXAXSCUQ',
        thumb:'https://mectechnology.co.in/wp-content/uploads/2024/08/210_LMGA_-_automatic_Bandsaw_Machine_indore.jpg',
      },
      {
        id:'v2', title:'Semi Auto Double Column Bandsaw – 260 LMGS',
        desc:'Semi-automatic double column bandsaw machine on LM guideways demonstrating hydraulic clamping and precision cutting of metal bars.',
        youtubeId:'GwJRwT_TDPM',
        thumb:'https://mectechnology.co.in/wp-content/uploads/2024/08/MEC_210_double_Column_Bandsaw_Machine_-_Home.jpg',
      },
    ],
  },
  {
    id: 'circular', label: 'Circular Saw',
    videos: [
      {
        id:'v3', title:'High Speed Circular Saw Machine – FANC Series',
        desc:'High-speed circular saw machine with auto bar loader demonstrating precision cutting of solid bars at high production rates.',
        youtubeId:'Xb5MBl9BLTI',
        thumb:'https://mectechnology.co.in/wp-content/uploads/2024/08/Untitled-design-3-e1723280287422-1536x1144-1.png',
      },
      {
        id:'v4', title:'80 FANC Fully Automatic Circular Saw Machine',
        desc:'Fully automatic circular saw machine with PLC control, servo indexing, and auto trim-cut — demonstrating complete hands-free operation.',
        youtubeId:'6QgrXVZTNNI',
        thumb:'https://mectechnology.co.in/wp-content/uploads/2024/08/fully-automatic-circular-saw-machine-80-fanc-2021023335-30dtkrm8.jpg',
      },
    ],
  },
  {
    id: 'vertical', label: 'Vertical Bandsaw',
    videos: [
      {
        id:'v5', title:'Vertical Bandsaw Machine – Ring Cutting Demo',
        desc:'Vertical bandsaw machine demonstrating precise ring cutting of forged material with adjustable hydraulic table feed and blade tensioning.',
        youtubeId:'bXp_eCCRGd8',
        thumb:'https://mectechnology.co.in/wp-content/uploads/2024/08/200_V2_Vertical_Bandsaw_Machine_-_Home2.jpg',
      },
      {
        id:'v6', title:'Vertical Bandsaw – Graphite Cutting at SSWL',
        desc:'MEC Technology vertical bandsaw machine installed at SSWL demonstrating graphite material cutting with precision control.',
        youtubeId:'fKopy74weus',
        thumb:'https://mectechnology.co.in/wp-content/uploads/2024/08/IMG20230123100735-scaled-1-1.jpg',
      },
    ],
  },
  {
    id: 'expo', label: 'Exhibitions',
    videos: [
      {
        id:'v7', title:'MEC Technology at Imtex Expo Bangalore 2022',
        desc:'MEC Technology showcased its complete product range at Imtex Expo Bangalore 2022 — India\'s premier metal cutting & forming technology exhibition.',
        youtubeId:'zqzOY0V3nJc',
        thumb:'https://mectechnology.co.in/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-08-at-3.38.24-PM.jpeg',
      },
      {
        id:'v8', title:'MEC Technology – Company Overview',
        desc:'An overview of MEC Technology Machines (I) Pvt Ltd — manufacturer, supplier and exporter of precision metal cutting bandsaw and circular saw machines since 2009.',
        youtubeId:'zqzOY0V3nJc',
        thumb:'https://mectechnology.co.in/wp-content/uploads/2024/08/IMG20230123100807-scaled.jpg',
      },
    ],
  },
];

function VideoCard({ video, index }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="group card-dark rounded-sm overflow-hidden">
      <div className="relative aspect-video bg-carbon-800 overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        ) : (
          <>
            {/* Thumbnail */}
            <img src={video.thumb} alt={video.title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              onError={e => { e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`; }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {/* Play button */}
            <button onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group/btn">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="relative w-18 h-18 flex items-center justify-center">
                {/* Pulsing ring */}
                <div className="absolute w-20 h-20 rounded-full bg-amber-500/20 animate-ping" />
                <div className="relative w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50">
                  <Play size={26} className="text-black ml-1" fill="black" />
                </div>
              </motion.div>
            </button>
            {/* YouTube badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/10">
              <Youtube size={12} className="text-red-500" />
              <span className="font-mono text-xs text-white/70">YouTube</span>
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading font-700 text-white tracking-wide mb-2 group-hover:text-amber-300 transition-colors leading-snug">{video.title}</h3>
        <p className="font-body text-steel-400 text-sm leading-relaxed">{video.desc}</p>
        {!playing && (
          <button onClick={() => setPlaying(true)}
            className="mt-4 flex items-center gap-2 font-heading font-600 text-xs tracking-widest uppercase text-amber-500 hover:text-amber-400 transition-colors">
            <Play size={11} fill="currentColor" /> Watch Now
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Videos({ navigate }) {
  const [active, setActive] = useState('horizontal');
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });
  const cur = categories.find(c => c.id === active);

  return (
    <div className="min-h-screen bg-carbon-900 pt-24">
      {/* Page header */}
      <div className="relative py-16 bg-carbon-800 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 font-mono text-xs text-steel-500 mb-6">
            <button onClick={() => navigate('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <ArrowLeft size={11} /> Home
            </button>
            <span>/</span><span className="text-amber-400">Videos</span>
          </div>
          <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="section-label mb-4 flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Product Demonstrations</div>
            <h1 className="font-display text-5xl sm:text-6xl text-white mb-4">OUR <span className="gradient-text">VIDEOS</span></h1>
            <p className="font-body text-steel-400 max-w-2xl">Watch MEC Technology machines in action — precision, power, and reliability demonstrated across real industrial cutting applications. Click any video to play directly.</p>
          </motion.div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="border-b border-white/5 bg-carbon-800/70 sticky top-16 z-40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto">
          {categories.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className={`flex-shrink-0 px-6 py-4 font-heading font-600 text-sm tracking-widest uppercase border-b-2 transition-all ${
                active === c.id ? 'text-amber-400 border-amber-500' : 'text-steel-500 border-transparent hover:text-steel-300 hover:border-white/20'}`}>
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Videos grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cur.videos.map((v, i) => <VideoCard key={v.id} video={v} index={i} />)}
        </motion.div>

        {/* YouTube CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 border border-amber-500/20 bg-amber-500/5 rounded-sm text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Youtube size={32} className="text-red-500" />
            <div className="font-display text-3xl text-white">@WeAreMec</div>
          </div>
          <p className="font-body text-steel-400 mb-6">Subscribe to our YouTube channel for the latest machine demos, installation guides, and industry insights.</p>
          <a href="https://www.youtube.com/@WeAreMec" target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-sm">
            <Youtube size={15} /> Visit Our YouTube Channel
          </a>
        </motion.div>
      </div>
    </div>
  );
}
