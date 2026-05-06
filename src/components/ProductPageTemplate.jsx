import { useState, useRef } from 'react';
import QuoteModal from './QuoteModal';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle2, Send, ArrowLeft, ChevronRight, X } from 'lucide-react';

/* ── Spec Table ──────────────────────────────────────────────────── */
function SpecTable({ specs }) {
  return (
    <div className="overflow-hidden rounded-sm border border-white/8">
      {specs.map(([lbl, val], i) => (
        <div key={lbl} className={`grid grid-cols-2 border-b border-white/5 last:border-0 ${i%2===0?'bg-carbon-700/40':'bg-carbon-700/20'}`}>
          <div className="px-4 py-2.5 font-heading font-600 text-xs uppercase tracking-wide text-steel-400 border-r border-white/5">{lbl}</div>
          <div className="px-4 py-2.5 font-mono text-amber-300 text-xs">{val}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Single Model Card ───────────────────────────────────────────── */
function ModelCard({ model, index, onQuote }) {
  const [tab, setTab] = useState('features');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div ref={ref} id={`model-${index}`}
      initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="bg-carbon-700/30 border border-white/6 rounded-sm overflow-hidden hover:border-amber-500/20 transition-all duration-400 group">
      <div className="grid lg:grid-cols-5">
        {/* Image */}
        <div className="lg:col-span-2 relative overflow-hidden bg-carbon-800" style={{ minHeight: 260 }}>
          <img src={model.img} alt={model.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-600"
            style={{ minHeight: 260 }}
            onError={e => { e.target.src = `https://placehold.co/600x400/1a1a1a/f59e0b?text=${encodeURIComponent(model.name)}`; }} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-carbon-800/50 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
          {model.badge && (
            <span className={`absolute top-3 left-3 font-mono text-xs px-2.5 py-1 tracking-widest uppercase ${model.badgeCls || 'bg-amber-500 text-black'}`}>
              {model.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
          <div className="mb-4">
            <div className="font-mono text-xs text-amber-500/60 tracking-widest uppercase mb-1">Model</div>
            <h3 className="font-display text-4xl text-white mb-1 group-hover:text-amber-300 transition-colors">{model.name}</h3>
            {model.subtitle && <p className="font-heading text-steel-400 text-sm tracking-wide">{model.subtitle}</p>}
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-white/8 mb-5">
            {['features', 'specs', 'description'].map(t => (
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
                  <div className="space-y-4">
                    {model.featuresLabel && (
                      <div className="font-mono text-xs text-amber-500/70 tracking-widest uppercase flex items-center gap-2 mb-2">
                        <span className="w-4 h-px bg-amber-500/40" />{model.featuresLabel}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-2">
                      {(model.features || []).map(f => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-steel-300 text-xs leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                    {model.optional && (
                      <div className="mt-4">
                        <div className="font-mono text-xs text-amber-500/70 tracking-widest uppercase flex items-center gap-2 mb-2">
                          <span className="w-4 h-px bg-amber-500/40" />{model.optionalLabel || 'Optional Accessories'}
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
                {tab === 'specs' && <SpecTable specs={model.specs || []} />}
                {tab === 'description' && <p className="font-body text-steel-300 text-sm leading-relaxed">{model.desc}</p>}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-5 border-t border-white/6">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              onClick={() => onQuote(model.name)}
              className="btn-primary px-7 py-3 rounded-sm text-sm flex items-center gap-2">
              <Send size={14} /> Request a Quote
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Template ───────────────────────────────────────────────── */
export default function ProductPageTemplate({ pageData, navigate }) {
  const [quoteModel, setQuoteModel] = useState(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-carbon-900">
      {/* Hero */}
      <div className="relative pt-24 pb-12 bg-carbon-800 border-b border-white/5 overflow-hidden">
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
            <span className="text-amber-400">{pageData.title}</span>
          </div>

          <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <div className="section-label mb-4 flex items-center gap-3"><span className="w-8 h-px bg-amber-500" /> Product Category</div>
            <h1 className="font-display text-5xl sm:text-6xl text-white leading-none mb-4">
              {pageData.titleLine1}<br /><span className="gradient-text">{pageData.titleLine2}</span>
              {pageData.titleLine3 && <><br />{pageData.titleLine3}</>}
            </h1>
            <div className="w-16 h-0.5 bg-amber-500 mb-5" />
            <p className="font-body text-steel-300 leading-relaxed max-w-2xl mb-6">{pageData.intro}</p>
            {pageData.badges && (
              <div className="flex flex-wrap gap-3">
                {pageData.badges.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-sm">
                    <Icon size={13} className="text-amber-500" />
                    <span className="font-heading text-xs tracking-widest uppercase text-steel-300">{label}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Model cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-6">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        {pageData.models.map((model, i) => (
          <ModelCard key={i} model={model} index={i} onQuote={setQuoteModel} />
        ))}

        {/* CTA banner */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 p-8 border border-amber-500/20 bg-amber-500/5 rounded-sm text-center">
          <div className="font-display text-3xl text-white mb-2">NEED A CUSTOM CONFIGURATION?</div>
          <p className="font-body text-steel-400 mb-6 max-w-xl mx-auto">All MEC Technology machines are available in customized specifications. Contact our team for special requirements.</p>
          <button onClick={() => navigate('home', '#contact')}
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-sm text-sm">
            <Send size={15} /> Talk to Our Engineers
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {quoteModel && <QuoteModal modelName={quoteModel} onClose={() => setQuoteModel(null)} />}
      </AnimatePresence>
    </div>
  );
}
