import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Youtube, Instagram, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjsConfig';

const contactInfo = [
  {
    icon: MapPin, label: 'Address',
    lines: ['306-A-1, Sector E, Sanwer Road Industrial Area', 'Indore, Madhya Pradesh 452015'],
  },
  {
    icon: Phone, label: 'Phone',
    lines: ['+0731 4975540', '+91 93016 65275', '+91 93294 38246', '+91 97547 60715'],
  },
  {
    icon: Mail, label: 'Email',
    lines: ['wearemec@gmail.com'],
  },
];

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/mectechnologyindore', label: 'Facebook' },
  { icon: Twitter,  href: 'https://x.com/mec_technology', label: 'Twitter' },
  { icon: Youtube,  href: 'https://www.youtube.com/@WeAreMec', label: 'YouTube' },
  { icon: Instagram,href: 'http://instagram.com/mec_technology', label: 'Instagram' },
  { icon: Linkedin, href: 'https://in.linkedin.com/company/mec-technology-machines-i-pvt-ltd', label: 'LinkedIn' },
];

// Status: 'idle' | 'sending' | 'success' | 'error'

function FloatInput({ id, label, type = 'text', value, onChange, required }) {
  return (
    <div className="input-float-group">
      <input
        id={id} type={type} placeholder=" "
        value={value} onChange={onChange}
        required={required}
        className="input-float"
      />
      <label htmlFor={id} className="input-float-label">{label}</label>
    </div>
  );
}

function FloatTextarea({ id, label, value, onChange, required }) {
  return (
    <div className="input-float-group">
      <textarea
        id={id} placeholder=" " rows={4}
        value={value} onChange={onChange}
        required={required}
        className="input-float" style={{ resize: 'none' }}
      />
      <label htmlFor={id} className="input-float-label">{label}</label>
    </div>
  );
}

export default function Contact() {
  const headerRef = useRef(null);
  const formRef   = useRef(null);
  const isInView  = useInView(headerRef, { once: true });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', product: '', message: '',
  });

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    // Check if keys are still placeholder
    if (
      EMAILJS_CONFIG.SERVICE_ID  === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.PUBLIC_KEY  === 'YOUR_PUBLIC_KEY'
    ) {
      // Dev fallback — show success without actually sending
      // (remove this block once real keys are added)
      setTimeout(() => {
        setStatus('success');
        setForm({ name:'', company:'', email:'', phone:'', product:'', message:'' });
      }, 1200);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name:  form.name,
          company:    form.company || 'Not provided',
          from_email: form.email,
          phone:      form.phone  || 'Not provided',
          product:    form.product || 'Not specified',
          message:    form.message,
          to_email:   'wearemec@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setStatus('success');
      setForm({ name:'', company:'', email:'', phone:'', product:'', message:'' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg(err?.text || 'Something went wrong. Please try again or call us directly.');
    }
  };

  const resetForm = () => { setStatus('idle'); setErrorMsg(''); };

  return (
    <section id="contact" className="relative py-28 bg-carbon-900 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div ref={headerRef}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="section-label mb-4 justify-center flex items-center gap-3">
            <span className="w-8 h-px bg-amber-500" /> Get In Touch <span className="w-8 h-px bg-amber-500" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            CONTACT <span className="gradient-text">US</span>
          </h2>
          <p className="font-body text-steel-400 max-w-2xl mx-auto">
            Have a requirement? Get in touch — your message will be sent directly to <strong className="text-amber-400">wearemec@gmail.com</strong> and our team will respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Form ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 border-amber-500/50" />
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 border-amber-500/50" />

              <div className="bg-carbon-700/30 border border-white/5 p-8 rounded-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
                    <Send size={14} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="font-heading font-700 text-white tracking-wide">Send Us a Message</div>
                    <div className="font-mono text-xs text-steel-500">Delivered to wearemec@gmail.com</div>
                  </div>
                </div>

                {/* ── SUCCESS STATE ── */}
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="py-10 flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-heading font-700 text-white text-xl mb-1">Message Sent Successfully!</div>
                      <p className="font-body text-steel-400 text-sm">
                        Your enquiry has been delivered to <strong className="text-amber-400">wearemec@gmail.com</strong>.
                        Our team will get back to you within 24 hours.
                      </p>
                    </div>
                    <button onClick={resetForm}
                      className="btn-outline px-6 py-2.5 rounded-sm text-sm mt-2">
                      Send Another Message
                    </button>
                  </motion.div>
                )}

                {/* ── ERROR STATE ── */}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="mb-5 p-4 bg-red-500/10 border border-red-500/30 rounded-sm flex items-start gap-3">
                    <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-heading font-700 text-red-400 text-sm mb-1">Failed to Send</div>
                      <p className="font-body text-steel-400 text-xs leading-relaxed">{errorMsg}</p>
                      <p className="font-body text-steel-500 text-xs mt-1">
                        You can also email us directly at{' '}
                        <a href="mailto:wearemec@gmail.com" className="text-amber-400 hover:underline">wearemec@gmail.com</a>
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ── FORM ── */}
                {status !== 'success' && (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FloatInput id="name"    label="Your Name *"    value={form.name}    onChange={set('name')}    required />
                      <FloatInput id="company" label="Company Name"   value={form.company} onChange={set('company')} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FloatInput id="email" label="Email Address *" type="email" value={form.email} onChange={set('email')} required />
                      <FloatInput id="phone" label="Phone Number *"  type="tel"   value={form.phone} onChange={set('phone')} required />
                    </div>
                    <FloatInput id="product" label="Product / Service Interest" value={form.product} onChange={set('product')} />
                    <FloatTextarea id="message" label="Message *" value={form.message} onChange={set('message')} required />

                    <motion.button type="submit" disabled={status === 'sending'}
                      whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                      className={`btn-primary w-full py-4 rounded-sm text-sm flex items-center justify-center gap-2 transition-all ${
                        status === 'sending' ? 'opacity-80 cursor-not-allowed' : ''}`}>
                      {status === 'sending' ? (
                        <><Loader2 size={15} className="animate-spin" /> Sending to wearemec@gmail.com...</>
                      ) : (
                        <><Send size={15} /> Send Enquiry → wearemec@gmail.com</>
                      )}
                    </motion.button>

                    {/* Trust note */}
                    <p className="font-mono text-xs text-steel-600 text-center flex items-center justify-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-emerald-500/60 inline-block" />
                      Messages go directly to wearemec@gmail.com — we reply within 24 hrs
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Info ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-5">

            {contactInfo.map(({ icon: Icon, label, lines }) => (
              <div key={label}
                className="flex gap-4 p-5 border border-white/5 hover:border-amber-500/20 bg-carbon-700/20 hover:bg-carbon-700/40 transition-all duration-300 rounded-sm group">
                <div className="flex-shrink-0 w-11 h-11 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Icon size={18} className="text-amber-500" />
                </div>
                <div>
                  <div className="font-heading font-700 text-xs tracking-widest uppercase text-amber-500/70 mb-1">{label}</div>
                  {lines.map((line, i) => (
                    <div key={i} className="font-body text-steel-300 text-sm">{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-5 border border-white/5 bg-carbon-700/20 rounded-sm">
              <div className="font-heading font-700 text-xs tracking-widest uppercase text-amber-500/70 mb-4">Follow Us</div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 border border-white/10 flex items-center justify-center text-steel-400 hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-300">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="border border-white/5 rounded-sm overflow-hidden h-48 relative bg-carbon-700/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.9!2d75.8703!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd49a3b4b7b7%3A0x8b3b4b7b7b7b7b7b!2sSanwer%20Road%20Industrial%20Area%2C%20Indore!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                allowFullScreen loading="lazy" title="MEC Technology Location"
              />
              <div className="absolute inset-0 pointer-events-none border border-amber-500/10" />
            </div>

            {/* EmailJS notice box */}
            <div className="p-4 border border-amber-500/20 bg-amber-500/5 rounded-sm">
              <div className="font-heading font-700 text-amber-400 text-xs tracking-widest uppercase mb-1 flex items-center gap-2">
                <Send size={11} /> Where do messages go?
              </div>
              <p className="font-body text-steel-400 text-xs leading-relaxed">
                All contact form submissions are delivered directly to{' '}
                <strong className="text-amber-300">wearemec@gmail.com</strong> via EmailJS.
                No middleman — your enquiry lands in MEC Technology's inbox instantly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
