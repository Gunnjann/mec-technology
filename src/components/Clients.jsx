import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// All client logo numbers from MEC website
const logoNums = [
  90,89,88,87,86,85,84,83,82,81,80,
  79,78,77,76,75,74,73,72,71,70,
  69,68,67,66,65,64,63,62,61,60,
  59,58,57,56,55,54,53,52,51,50
];

const clientLogos = logoNums.map(n => ({
  id: n,
  src: `https://mectechnology.co.in/wp-content/uploads/2024/08/mec${n}.png`,
  alt: `Client ${n}`,
}));

// Split into two tracks
const track1 = [...clientLogos.slice(0, 20), ...clientLogos.slice(0, 20)];
const track2 = [...clientLogos.slice(20), ...clientLogos.slice(20)];

const testimonials = [
  { company:'Cubex Limited',   location:'Hyderabad',         initials:'CL', rating:5,
    text:'MEC Technology machines have significantly improved our production efficiency. Outstanding quality and reliability of their bandsaw machines.' },
  { company:'NSTL DRDO',       location:'Vishakhapatanam',   initials:'ND', rating:5,
    text:'Highly professional team with exceptional after-sales service. Their machines meet our stringent defence research requirements with precision.' },
  { company:'JSW Toshiba',     location:'Chennai',           initials:'JT', rating:5,
    text:'Our first SPM Bandsaw after a lot of research and reading reviews. Heavy duty design and very well made. Also bought the roller stand — great work.' },
  { company:'HEG Mandideep',   location:'Bhopal',            initials:'HM', rating:5,
    text:'Excellent service and very fast dispatch. The machine quality is top-notch and exactly as described. Highly recommend MEC Technology.' },
];

function LogoItem({ logo }) {
  return (
    <div className="flex-shrink-0 w-36 h-20 mx-3 bg-carbon-700/50 border border-white/6 hover:border-amber-500/25 flex items-center justify-center p-3 rounded-sm transition-all duration-300 group">
      <img src={logo.src} alt={logo.alt}
        className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
        onError={e => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML = `<span class="font-mono text-xs text-steel-600 text-center leading-tight">CLIENT<br/>${logo.id}</span>`;
        }} />
    </div>
  );
}

export default function Clients() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  return (
    <>
      {/* ── Clients Section ────────────────────────────────────────── */}
      <section id="clients" className="relative py-28 bg-carbon-900 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div ref={headerRef}
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }} className="text-center mb-16">
            <div className="section-label mb-4 justify-center flex items-center gap-3">
              <span className="w-8 h-px bg-amber-500" /> Our Trusted Partners <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
              OUR <span className="gradient-text">CLIENTS</span>
            </h2>
            <p className="font-body text-steel-400 max-w-2xl mx-auto">
              Trusted by 500+ companies across India — from defence research labs and steel giants to precision engineering firms and automobile manufacturers.
            </p>
          </motion.div>

          {/* Auto-scrolling logo tracks */}
          <div className="relative overflow-hidden py-2">
            {/* Edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-carbon-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-carbon-900 to-transparent z-10 pointer-events-none" />

            {/* Track 1 — left to right */}
            <div className="flex mb-4" style={{
              animation: 'scroll-left 45s linear infinite',
              width: 'max-content',
            }}>
              {track1.map((logo, i) => <LogoItem key={`t1-${logo.id}-${i}`} logo={logo} />)}
            </div>

            {/* Track 2 — right to left */}
            <div className="flex" style={{
              animation: 'scroll-left 40s linear infinite reverse',
              width: 'max-content',
            }}>
              {track2.map((logo, i) => <LogoItem key={`t2-${logo.id}-${i}`} logo={logo} />)}
            </div>
          </div>

          {/* Notable client names text row */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Cubex Limited','NSTL DRDO','JSW Toshiba','HEG Mandideep','Bhilai Steel Plant',
              'Indian Railways','Tata Motors','Mahindra & Mahindra','BHEL','L&T'].map(name => (
              <span key={name} className="font-heading text-xs tracking-widest uppercase text-steel-500 hover:text-amber-400 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section id="testimonials" className="relative py-28 bg-carbon-800 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-amber-500/3 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
            <div className="section-label mb-4 justify-center flex items-center gap-3">
              <span className="w-8 h-px bg-amber-500" /> Client Feedback <span className="w-8 h-px bg-amber-500" />
            </div>
            <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
              WHAT THEY <span className="gradient-text">SAY</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={t.company}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="testimonial-card rounded-sm p-6 group hover:border-amber-500/20 transition-all duration-400">
                <div className="font-display text-5xl text-amber-500/20 leading-none mb-4 group-hover:text-amber-500/40 transition-colors">"</div>
                <p className="font-body text-steel-300 text-sm leading-relaxed mb-6 italic">{t.text}</p>
                <div className="border-t border-white/5 pt-4">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-amber-400 text-sm">★</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-amber-500/20 border border-amber-500/30 flex items-center justify-center rounded-sm">
                      <span className="font-heading font-700 text-xs text-amber-400">{t.initials}</span>
                    </div>
                    <div>
                      <div className="font-heading font-700 text-white text-sm">{t.company}</div>
                      <div className="font-mono text-xs text-steel-500">{t.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
