import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Blog from './components/Blog';
import AboutPage from './components/AboutPage';
import SemiAutoPage from './components/SemiAutoPage';
import SwingTypePage from './components/SwingTypePage';
import AutoBandsawPage from './components/AutoBandsawPage';
import CircularSawPage from './components/CircularSawPage';
import VerticalBandsawPage from './components/VerticalBandsawPage';
import BandsawBladesPage from './components/BandsawBladesPage';
import MiterBandsawPage from './components/MiterBandsawPage';
import SparePartsPage from './components/SparePartsPage';

function PageView({ children }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const PAGES = [
  'home','about','gallery','videos','blog',
  'semi-auto','swing-type','auto-bandsaw',
  'circular-saw','vertical-bandsaw','bandsaw-blades',
  'miter-bandsaw','spare-parts'
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState('home');

  const navigate = (p, hash) => {
    setPage(p || 'home');
    if (hash && (p === 'home' || !p)) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 420);
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar currentPage={page} navigate={navigate} />

          <AnimatePresence mode="wait">
            {page === 'home' && (
              <PageView key="home">
                <main>
                  <Hero navigate={navigate} />
                  <About />
                  <Products navigate={navigate} />
                  <Services />
                  <WhyUs />
                  <Clients />
                  <Contact />
                </main>
              </PageView>
            )}
            {page === 'about'           && <PageView key="about"><AboutPage navigate={navigate} /></PageView>}
            {page === 'gallery'         && <PageView key="gallery"><Gallery navigate={navigate} /></PageView>}
            {page === 'videos'          && <PageView key="videos"><Videos navigate={navigate} /></PageView>}
            {page === 'blog'            && <PageView key="blog"><Blog navigate={navigate} /></PageView>}
            {page === 'semi-auto'       && <PageView key="semi-auto"><SemiAutoPage navigate={navigate} /></PageView>}
            {page === 'swing-type'      && <PageView key="swing-type"><SwingTypePage navigate={navigate} /></PageView>}
            {page === 'auto-bandsaw'    && <PageView key="auto-bandsaw"><AutoBandsawPage navigate={navigate} /></PageView>}
            {page === 'circular-saw'    && <PageView key="circular-saw"><CircularSawPage navigate={navigate} /></PageView>}
            {page === 'vertical-bandsaw'&& <PageView key="vertical-bandsaw"><VerticalBandsawPage navigate={navigate} /></PageView>}
            {page === 'bandsaw-blades'  && <PageView key="bandsaw-blades"><BandsawBladesPage navigate={navigate} /></PageView>}
            {page === 'miter-bandsaw'   && <PageView key="miter-bandsaw"><MiterBandsawPage navigate={navigate} /></PageView>}
            {page === 'spare-parts'     && <PageView key="spare-parts"><SparePartsPage navigate={navigate} /></PageView>}
          </AnimatePresence>

          <Footer navigate={navigate} />
        </>
      )}
    </>
  );
}
