import { Zap, Shield, Settings } from 'lucide-react';
import ProductPageTemplate from './ProductPageTemplate';

const pageData = {
  title: 'Vertical Bandsaw Machine',
  titleLine1: 'VERTICAL',
  titleLine2: 'BANDSAW MACHINES',
  intro: 'MEC Technology offers Hydraulic Vertical Bandsaw Machines for forging, casting, gas and metallurgical industries and special purpose job cutting. Wide range of specifications available as per client requirements — including tilting head and X-Y axis variants.',
  badges: [
    { icon: Zap, label: 'Hydraulic Feeding' },
    { icon: Shield, label: 'LM Guide System' },
    { icon: Settings, label: 'Customizable' },
  ],
  models: [
    {
      name: 'Hydraulic Feeding VBM', badge: 'HYDRAULIC', badgeCls: 'bg-amber-500 text-black',
      subtitle: 'Hydraulic Feeding Vertical Bandsaw Machine',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/hydraulic-feeding-vertical-bandsaw-machine-374498290-tgp97.webp',
      desc: 'Hydraulic Vertical Bandsaw Machine for forging, casting, gas and metallurgical industries and special purpose job cutting. Feed rate is adjustable at desired rate & up to desired length.',
      features: [
        'Hydraulically operated work table to feed the job automatically',
        'Feed rate is adjustable at desired rate & up to desired length',
        'Hydraulic blade tensioning arrangement',
        'Table tilt facility (optional)',
        'Infinitely variable band speed through AC frequency drive unit (optional)',
      ],
      specs: [
        ['Cutting Capacity', '200 mm'],
        ['Blade Size', '3760 × 27 × 0.9 mm'],
        ['Blade Tension', 'Hydraulic'],
        ['Saw Motor', '3.0 HP'],
        ['Hydraulic Motor', '1.0 HP'],
        ['Coolant Motor', '0.15 HP'],
        ['Job Clamping', 'Fixture (Optional)'],
        ['Job Feeding', 'Hydraulic (Table Movement)'],
      ],
    },
    {
      name: '750 × 3500 X-Y Axis VBM', badge: 'X-Y AXIS', badgeCls: 'bg-blue-900 text-white',
      subtitle: 'X-Y Axis Vertical Bandsaw Machine — 750 × 3500 mm',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/750_x_400-V2-VERTICAL-BANDSAW_-_Product1-1024x796-1.jpg',
      desc: '750 × 3500 mm X-Y Axis Vertical Semi-Automatic Band Saw Machine — compact and user friendly. Ensures highly precise, perpendicular and 3500 mm length cutting. Perfect for steel traders, tool & die makers, tool rooms, fastener industries.',
      features: [
        '750 × 3500 mm cutting size',
        'Hydraulically Controlled operation',
        'Heavy duty Fabricated Structure',
        'Cutting feed Manual',
        'Auto return of cutting head after completion of cut',
        'Heavy duty reduction Gearbox for heavy cutting torque',
        'Inbuilt flood coolant tank arrangement',
        'Electrical Control Panel with quality switch-gears',
        'On Pre-hardened LM guideway for smooth operation and high accuracy',
        'Cutting Head Movement on LM Guide by Rack Pinion',
      ],
      specs: [
        ['Cutting Capacity', '750 × 3500 mm (Customized)'],
        ['Blade Size', '4860 × 41 × 1.3 mm'],
        ['Blade Tension', 'Hydraulic'],
        ['Saw Motor', '5.0 HP'],
        ['Hydraulic Motor', '2.0 HP'],
        ['Coolant Motor', '0.12 HP (Optional)'],
        ['Job Clamping', 'Hydraulic'],
        ['Feeding', 'Hydraulic (Table Movement)'],
        ['Cutting Head Movement', 'LM Guide by Rack Pinion'],
      ],
    },
    {
      name: 'Tilting Head VBM', badge: 'TILTING HEAD', badgeCls: 'bg-orange-700 text-white',
      subtitle: 'Tilting Head Vertical Bandsaw Machine — 45° Both Sides',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/vertical-band-saw-machine-500x500-1.png',
      desc: 'Hydraulic Vertical Bandsaw Machine with Tilting Head feature. Tilting Head provides a wide cutting range to perform at different degrees up to 45° in either direction — for forging, casting, gas and metallurgical industries.',
      features: [
        'Hydraulically operated work table to feed the job automatically',
        'Feed rate is adjustable at desired rate & up to desired length',
        'Hydraulic blade tensioning arrangement',
        'Table Head facility (45 Degree either side)',
        'Infinitely variable band speed through AC frequency drive unit (optional)',
        'Tilting Head for 45° angular cutting in both directions',
      ],
      specs: [
        ['Cutting Capacity (90°)', '300 mm'],
        ['Cutting Capacity (45°)', '200 mm'],
        ['Blade Size', '4100 × 27 × 0.9 mm'],
        ['Blade Tension', 'Hydraulic'],
        ['Saw Motor', '3.0 HP'],
        ['Hydraulic Motor', '1.0 HP'],
        ['Coolant Motor', '0.12 HP'],
        ['Job Clamping', 'Fixture (Optional)'],
        ['Feeding', 'Hydraulic (Table Movement)'],
        ['Head Tilting Movement', '45° Both Sides'],
        ['Head Tilting', 'Manual / Hydraulic'],
      ],
    },
  ],
};

export default function VerticalBandsawPage({ navigate }) {
  return <ProductPageTemplate pageData={pageData} navigate={navigate} />;
}
