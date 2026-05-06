import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Award, Globe } from 'lucide-react';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-carbon-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(120,80,0,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(245,158,11,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Particles */}
      <ParticleCanvas />

      {/* Diagonal accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.div variants={itemVariants} className="section-label mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-amber-500"></span>
            Est. 2009 · Indore, India
            <span className="w-8 h-px bg-amber-500"></span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none tracking-wide mb-6">
            <span className="block text-white">PRECISION</span>
            <span className="block gradient-text">METAL</span>
            <span className="block text-white">CUTTING</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-body text-steel-300 text-lg leading-relaxed mb-8 max-w-lg">
            MEC Technology Machines (I) Pvt Ltd — Renowned manufacturer, supplier, trader & exporter of industrial metal cutting solutions. Specializing in Band Saw Machines and Circular Saw Machines since 2009.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary px-8 py-4 rounded-sm flex items-center gap-2 text-sm"
            >
              Explore Products <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-outline px-8 py-4 rounded-sm flex items-center gap-2 text-sm"
            >
              <Play size={14} /> Get a Quote
            </a>
          </motion.div>

          {/* Quick badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            {[
              { icon: Award, label: 'ISO Certified' },
              { icon: Globe, label: 'Pan India Export' },
              { icon: Zap, label: '15+ Years Experience' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-sm">
                <Icon size={14} className="text-amber-500" />
                <span className="font-heading text-xs tracking-widest uppercase text-steel-300">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Visual stack */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          {/* Main image card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/10 blur-3xl rounded-full" />
            <div className="relative overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <img
                src="https://mectechnology.co.in/wp-content/uploads/2024/08/1651674032-210_LMGA_-_2021_Front-e1723033817557.jpg"
                alt="MEC Technology Bandsaw Machine"
                className="w-full h-96 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 backdrop-blur-sm border border-amber-500/30 p-4 rounded-sm">
                  <div className="font-heading text-xs tracking-widest uppercase text-amber-500 mb-1">Featured Product</div>
                  <div className="font-heading font-700 text-white text-lg">Automatic Bandsaw Machine</div>
                  <div className="font-mono text-xs text-steel-400">Model: 210 LMGA · High Precision</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-8 top-8 bg-black/90 backdrop-blur-xl border border-amber-500/30 p-4 rounded-sm shadow-2xl"
          >
            <div className="font-display text-4xl gradient-text">500+</div>
            <div className="font-heading text-xs tracking-widest uppercase text-steel-400">Happy Clients</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-4 top-1/3 bg-black/90 backdrop-blur-xl border border-amber-500/30 p-4 rounded-sm shadow-2xl"
          >
            <div className="font-display text-4xl gradient-text">15+</div>
            <div className="font-heading text-xs tracking-widest uppercase text-steel-400">Years of Excellence</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-steel-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-amber-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
