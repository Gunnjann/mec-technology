import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const productChildren = [
  { label: 'Swing Type Bandsaw Machine',        page: 'swing-type' },
  { label: 'Semi Auto Double Column Bandsaw',   page: 'semi-auto' },
  { label: 'Automatic Metal Cutting Bandsaw',   page: 'auto-bandsaw' },
  { label: 'High Speed Circular Saw Machine',   page: 'circular-saw' },
  { label: 'Vertical Bandsaw Machine',          page: 'vertical-bandsaw' },
  { label: 'Bandsaw Blades',                    page: 'bandsaw-blades' },
  { label: 'Miter Cutting Bandsaw Machine',     page: 'miter-bandsaw' },
  { label: 'Bandsaw Machine Spare Parts',       page: 'spare-parts' },
];

export default function Navbar({ currentPage, navigate }) {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeDD, setActiveDD]       = useState(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const go = (page, hash) => {
    setMobileOpen(false);
    setActiveDD(null);
    if (page) {
      navigate(page, hash);
    } else if (hash) {
      if (currentPage !== 'home') navigate('home', hash);
      else document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home',     action: () => go('home') },
    { label: 'About',    action: () => go('about') },
    { label: 'Products', action: () => go(null, '#products'), children: productChildren },
    { label: 'Services', action: () => go(null, '#services') },
    { label: 'Why Us',   action: () => go(null, '#why-us') },
    { label: 'Clients',  action: () => go(null, '#clients') },
    { label: 'Gallery',  action: () => go('gallery') },
    { label: 'Videos',   action: () => go('videos') },
    { label: 'Blog',     action: () => go('blog') },
    { label: 'Contact',  action: () => go(null, '#contact') },
  ];

  const isProductPage = ['swing-type','semi-auto','auto-bandsaw','circular-saw',
    'vertical-bandsaw','bandsaw-blades','miter-bandsaw','spare-parts'].includes(currentPage);

  return (
    <motion.nav
      initial={{ y: -100 }} animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isProductPage
          ? 'py-2 bg-black/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl'
          : 'py-4 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go('home')} className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-amber-500 flex items-center justify-center font-display text-black text-lg font-bold">MEC</div>
            <div className="absolute -inset-0.5 bg-amber-500/30 blur-sm group-hover:bg-amber-500/50 transition-all -z-10" />
          </div>
          <div>
            <div className="font-heading font-700 text-white text-lg tracking-wide leading-none">TECHNOLOGY</div>
            <div className="font-mono text-amber-500 text-xs tracking-widest uppercase">Machines (I) Pvt Ltd</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-0.5">
          {navItems.map(item => (
            <div key={item.label} className="relative"
              onMouseEnter={() => item.children && setActiveDD(item.label)}
              onMouseLeave={() => setActiveDD(null)}>
              <button onClick={item.action}
                className={`flex items-center gap-1 px-3 py-2 font-heading font-600 text-xs tracking-widest uppercase transition-colors ${
                  (item.label === 'Products' && isProductPage) ? 'text-amber-400' : 'text-steel-300 hover:text-amber-400'}`}>
                {item.label}
                {item.children && <ChevronDown size={11} className={`transition-transform ${activeDD === item.label ? 'rotate-180' : ''}`} />}
              </button>

              <AnimatePresence>
                {item.children && activeDD === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-1 w-72 bg-black/97 backdrop-blur-xl border border-amber-500/20 shadow-2xl py-2 z-50">
                    {item.children.map(child => (
                      <button key={child.label} onClick={() => go(child.page)}
                        className={`w-full text-left px-4 py-2.5 font-body text-sm transition-all border-l-2 border-transparent hover:border-amber-500 flex items-center gap-2 ${
                          currentPage === child.page ? 'text-amber-400 border-amber-500 bg-amber-500/5' : 'text-steel-300 hover:text-amber-400 hover:bg-amber-500/5'}`}>
                        <span className="text-amber-500/50 text-xs font-mono">→</span>
                        {child.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <a href="tel:+919301665275" className="ml-3 btn-primary px-5 py-2.5 text-xs rounded-sm">Get Quote</a>
        </div>

        {/* Mobile toggle */}
        <button className="xl:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }}
            className="mobile-menu xl:hidden overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map(item => (
                <div key={item.label}>
                  <button
                    onClick={() => item.children
                      ? setActiveDD(activeDD === item.label ? null : item.label)
                      : item.action()}
                    className="w-full text-left flex items-center justify-between px-4 py-3 font-heading font-600 tracking-widest uppercase text-steel-300 hover:text-amber-400 transition-colors border-b border-white/5 text-sm">
                    {item.label}
                    {item.children && <ChevronDown size={13} className={`transition-transform ${activeDD === item.label ? 'rotate-180' : ''}`} />}
                  </button>
                  {item.children && activeDD === item.label && (
                    <div className="pl-4 py-1 bg-white/2">
                      {item.children.map(child => (
                        <button key={child.label} onClick={() => go(child.page)}
                          className="w-full text-left px-4 py-2 text-xs text-steel-400 hover:text-amber-400 transition-colors">
                          — {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="tel:+919301665275" className="btn-primary mt-3 text-center px-6 py-3 text-sm rounded-sm">Get Quote</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
