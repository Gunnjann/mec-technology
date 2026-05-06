import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/mectechnologyindore', label: 'Facebook' },
  { icon: Twitter,  href: 'https://x.com/mec_technology', label: 'Twitter' },
  { icon: Youtube,  href: 'https://www.youtube.com/@WeAreMec', label: 'YouTube' },
  { icon: Instagram,href: 'http://instagram.com/mec_technology', label: 'Instagram' },
  { icon: Linkedin, href: 'https://in.linkedin.com/company/mec-technology-machines-i-pvt-ltd', label: 'LinkedIn' },
];

export default function Footer({ navigate }) {
  const go = (page, hash) => {
    navigate(page || 'home', hash);
    if (!page || page === 'home') {
      setTimeout(() => hash && document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 420);
    }
  };

  const important = [
    { label: 'Home',        action: () => { navigate('home'); window.scrollTo({ top: 0 }); } },
    { label: 'About Us',    action: () => navigate('about') },
    { label: 'Products',    action: () => go(null, '#products') },
    { label: 'Services',    action: () => go(null, '#services') },
  ];

  const links = [
    { label: 'Blog',        action: () => navigate('blog') },
    { label: 'Videos',      action: () => navigate('videos') },
    { label: 'Gallery',     action: () => navigate('gallery') },
    { label: 'Contact Us',  action: () => go(null, '#contact') },
    { label: 'Our Clients', action: () => go(null, '#clients') },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <button onClick={() => { navigate('home'); window.scrollTo({ top: 0 }); }} className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-amber-500 flex items-center justify-center font-display text-black text-sm font-bold">MEC</div>
              <div>
                <div className="font-heading font-700 text-white tracking-wide">TECHNOLOGY</div>
                <div className="font-mono text-amber-500/70 text-xs tracking-widest">Machines (I) Pvt Ltd</div>
              </div>
            </button>
            <p className="font-body text-steel-500 text-sm leading-relaxed mb-5">
              ISO 9001:2015 certified manufacturer, supplier, trader & exporter of industrial metal cutting machines — established 2009, Indore.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                   className="w-8 h-8 border border-white/10 flex items-center justify-center text-steel-500 hover:text-amber-400 hover:border-amber-500/40 transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Important */}
          <div>
            <div className="font-heading font-700 text-xs tracking-widest uppercase text-amber-500 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-500" /> Important
            </div>
            <ul className="space-y-2.5">
              {important.map(({ label, action }) => (
                <li key={label}>
                  <button onClick={action} className="font-body text-sm text-steel-500 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-200" />{label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className="font-heading font-700 text-xs tracking-widest uppercase text-amber-500 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-500" /> Links
            </div>
            <ul className="space-y-2.5">
              {links.map(({ label, action }) => (
                <li key={label}>
                  <button onClick={action} className="font-body text-sm text-steel-500 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-amber-500 group-hover:w-4 transition-all duration-200" />{label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-heading font-700 text-xs tracking-widest uppercase text-amber-500 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-amber-500" /> Contact Us
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <MapPin size={14} className="text-amber-500/70 flex-shrink-0 mt-1" />
                <span className="font-body text-sm text-steel-500 leading-relaxed">306-A-1, Sector E, Sanwer Road Industrial Area, Indore, MP 452015</span>
              </div>
              <div className="flex gap-2">
                <Phone size={14} className="text-amber-500/70 flex-shrink-0 mt-0.5" />
                <div className="font-body text-sm text-steel-500 space-y-0.5">
                  <div>+0731 4975540</div>
                  <div>+91 93016 65275</div>
                  <div>+91 93294 38246</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={14} className="text-amber-500/70 flex-shrink-0 mt-0.5" />
                <a href="mailto:wearemec@gmail.com" className="font-body text-sm text-steel-500 hover:text-amber-400 transition-colors">wearemec@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-steel-600">© {new Date().getFullYear()} MEC Technology Machines (I) Pvt Ltd. All Rights Reserved.</div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-steel-600">Engineered for precision.</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-steel-500 hover:text-amber-400 hover:border-amber-500/40 transition-all group">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
