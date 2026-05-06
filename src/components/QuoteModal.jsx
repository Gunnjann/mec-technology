import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../emailjsConfig';

export default function QuoteModal({ modelName, onClose }) {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name:'', company:'', phone:'', email:'', message:'' });

  const set = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    // Dev fallback if keys not set yet
    if (
      EMAILJS_CONFIG.SERVICE_ID  === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.PUBLIC_KEY  === 'YOUR_PUBLIC_KEY'
    ) {
      setTimeout(() => setStatus('success'), 1200);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name:  form.name,
          company:    form.company || 'Not provided',
          from_email: form.email  || 'Not provided',
          phone:      form.phone,
          product:    modelName,
          message:    form.message || `Quote request for: ${modelName}`,
          to_email:   'wearemec@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.text || 'Failed to send. Please call us directly.');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="bg-carbon-800 border border-amber-500/20 rounded-sm p-8 w-full max-w-md relative shadow-2xl">

        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 text-steel-500 hover:text-white transition-colors">
          <X size={18} />
        </button>

        <div className="section-label mb-1">Request a Quote</div>
        <h3 className="font-heading font-700 text-white text-xl mb-1">{modelName}</h3>
        <p className="font-mono text-xs text-steel-500 mb-6">→ wearemec@gmail.com</p>

        {/* Success */}
        {status === 'success' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="py-8 flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <CheckCircle2 size={28} className="text-emerald-400" />
            </div>
            <div>
              <div className="font-heading font-700 text-white text-lg mb-1">Quote Request Sent!</div>
              <p className="font-body text-steel-400 text-sm">
                Delivered to <strong className="text-amber-400">wearemec@gmail.com</strong>.<br />
                Our team will contact you within 24 hours.
              </p>
            </div>
            <button onClick={onClose}
              className="btn-outline px-6 py-2 rounded-sm text-sm mt-1">Close</button>
          </motion.div>
        )}

        {/* Error notice */}
        {status === 'error' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-sm flex items-start gap-2">
            <AlertCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-body text-steel-400 text-xs">{errorMsg}</p>
              <p className="font-body text-steel-500 text-xs mt-1">
                Call: <a href="tel:+919301665275" className="text-amber-400">+91 93016 65275</a>
              </p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        {status !== 'success' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id:'name',    lbl:'Full Name *',      type:'text',  req:true  },
              { id:'company', lbl:'Company Name',      type:'text',  req:false },
              { id:'phone',   lbl:'Phone Number *',   type:'tel',   req:true  },
              { id:'email',   lbl:'Email Address',    type:'email', req:false },
            ].map(({ id, lbl, type, req }) => (
              <div key={id} className="input-float-group">
                <input type={type} id={id} placeholder=" "
                  value={form[id]} onChange={set(id)}
                  required={req} className="input-float" />
                <label htmlFor={id} className="input-float-label">{lbl}</label>
              </div>
            ))}
            <div className="input-float-group">
              <textarea id="message" placeholder=" " rows={3}
                value={form.message} onChange={set('message')}
                className="input-float" style={{ resize:'none' }} />
              <label htmlFor="message" className="input-float-label">Additional Requirements</label>
            </div>

            <motion.button type="submit" disabled={status === 'sending'}
              whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
              whileTap={status !== 'sending' ? { scale: 0.97 } : {}}
              className={`btn-primary w-full py-3.5 rounded-sm flex items-center justify-center gap-2 text-sm ${
                status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}>
              {status === 'sending'
                ? <><Loader2 size={14} className="animate-spin" /> Sending...</>
                : <><Send size={14} /> Send Quote Request</>
              }
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
