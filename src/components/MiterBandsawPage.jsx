import { Zap, Shield, Settings } from 'lucide-react';
import ProductPageTemplate from './ProductPageTemplate';

const pageData = {
  title: 'Miter Cutting Bandsaw Machine',
  titleLine1: 'MITER CUTTING',
  titleLine2: 'BANDSAW MACHINES',
  intro: 'Miter cutting band saws conceived for the best performance of productivity and blade-life for the steel structure industry. Automatic/Semi-Automatic machines designed to accept any blade for each type of material with robust structure and aggressive cutting parameters.',
  badges: [
    { icon: Zap, label: 'Up to 60° Miter Cut' },
    { icon: Shield, label: 'LM Guide Technology' },
    { icon: Settings, label: 'One-Touch Degree Setting' },
  ],
  models: [
    {
      name: '650 LMGA', badge: 'MITER', badgeCls: 'bg-amber-500 text-black',
      subtitle: 'Miter Cutting Band Saw Machine — 650 mm Capacity',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/miter-cutting-band-saw-machine-374498924-0g45q-1.avif',
      desc: '650 LMGA Miter band saw machine designed for the steel structure industry. Designed to accept any blade for each type of material — robust structure and aggressive cutting parameters for high production and long blade life.',
      features: [
        'Saw frame movement on pre-hardened and pre-loaded LM guides for friction free movement',
        'High Efficiency Power Transmission through helical gear box',
        'Hydraulic Blade Tensioning arrangement',
        'Miter cutting up to 60 degree',
        'One touch degree cutting setting',
        'Automatic machine off in case of blade breakage or loss of hydraulic pressure',
        'Adjustable Dovetail type Heavy duty Movable Blade guide with ball bearing',
        'Automatic switch-off of the band after finishing the cut',
        'Automatic height stop for saw frame to save idle time',
        'Infinitely variable Feed Control Valve for setting the cutting feed',
        'Electrical control panel with high quality switchgears',
        'Customization available as per client requirement',
      ],
      specs: [
        ['Cutting Capacity (90°)', 'Round – 650 mm, Rectangle – 650 × 650 mm'],
        ['Cutting Capacity (60°)', 'Round – 400 mm, Rectangle – 400 × 650 mm'],
        ['Cutting Speed', '20 – 90 mtr/min'],
        ['Blade Size', '8000 × 67 × 1.6 mm'],
        ['Blade Tension', 'Hydraulic'],
        ['Saw Motor', '15.0 HP'],
        ['Hydraulic Motor', '3.0 HP'],
        ['Coolant Motor', '0.25 HP'],
        ['Job Clamping', 'Hydraulic'],
        ['Job Indexing', '600 mm'],
        ['Hydraulic Reservoir', '80 Ltr'],
        ['Overall Dimension', '3200 × 1900 × 2200 mm'],
      ],
    },
    {
      name: '460 Miter', badge: 'MID-SIZE', badgeCls: 'bg-blue-900 text-white',
      subtitle: 'Miter Cutting Bandsaw Machine — 460 mm Capacity',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/460_Miter_bandsaw.jpg',
      desc: 'The 460 Miter bandsaw machine is designed for medium capacity miter and degree cutting applications in the steel structure industry and general metal cutting. Features degree cutting up to 45° with hydraulic operation.',
      features: [
        'Saw frame on pre-hardened and pre-loaded LM guides',
        'High Efficiency Power Transmission through helical gear box',
        'Miter cutting up to 45 degree',
        'Hydraulic Blade Tensioning arrangement',
        'Automatic switch-off after finishing the cut',
        'Automatic height stop for saw frame',
        'Hydraulic Power Pack with easy maintenance',
        'Electrical control panel with high quality switchgears',
        'Customization available as per client requirement',
      ],
      specs: [
        ['Cutting Capacity (90°)', 'Round – 460 mm, Rectangle – 460 × 460 mm'],
        ['Cutting Capacity (45°)', 'Round – 300 mm'],
        ['Cutting Speed', '20 – 90 mtr/min'],
        ['Blade Tension', 'Hydraulic'],
        ['Saw Motor', '10.0 HP'],
        ['Hydraulic Motor', '3.0 HP'],
        ['Job Clamping', 'Hydraulic'],
      ],
    },
  ],
};

export default function MiterBandsawPage({ navigate }) {
  return <ProductPageTemplate pageData={pageData} navigate={navigate} />;
}
