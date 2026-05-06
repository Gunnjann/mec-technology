import { Zap, Shield, Package } from 'lucide-react';
import ProductPageTemplate from './ProductPageTemplate';

const pageData = {
  title: 'Bandsaw Blades',
  titleLine1: 'BANDSAW',
  titleLine2: 'BLADES',
  intro: 'MEC Technology supplies high-performance bimetallic bandsaw blades in various sizes and TPI configurations. Our blades are engineered for faster cutting, longer life, and optimum performance across a wide variety of metal cutting applications.',
  badges: [
    { icon: Zap, label: 'Faster Cutting' },
    { icon: Shield, label: 'Longer Blade Life' },
    { icon: Package, label: 'All Sizes Available' },
  ],
  models: [
    {
      name: 'M51 Bi-Metal Blade', badge: 'PREMIUM', badgeCls: 'bg-amber-500 text-black',
      subtitle: 'Bi-Metal Bandsaw Blades — M51 Grade with Armor Coating',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/516Qn0J0dgL._SX466_.jpg',
      desc: 'High performance backing steel and optimized carbide grades give premium band sawing performance. These band saws cut faster and last longer than any other band saw blade in a wide variety of metal cutting applications.',
      features: [
        'ARMOR COATING PROVIDES FASTER CUTTING AND HIGHER PRODUCTIVITY',
        'EXTENDS BLADE LIFE BY PREVENTING HEAT BUILD UP',
        'HIGH PERFORMANCE BACKING STEEL WITH EXCELLENT FATIGUE LIFE',
        'TAILORED TO CUT A WIDE RANGE OF METALS',
      ],
      specs: [
        ['Grade', 'M51 Bimetal'],
        ['Application', 'Wide range of metals'],
        ['Coating', 'Armor Coating'],
        ['Performance', 'High Speed + Long Life'],
        ['Sizes', 'As per customer requirement'],
        ['TPI Range', 'Multiple configurations available'],
      ],
    },
    {
      name: 'M42 Bi-Metal Blade', badge: 'GENERAL PURPOSE', badgeCls: 'bg-blue-900 text-white',
      subtitle: 'Bimetal Bandsaw Blade — M42 High Speed Steel Tooth Edge',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/download-12.jpg',
      desc: 'High speed steel tooth tips combined with flexible alloy steel backing material — the most cost-effective choice for all types of metal cutting applications. Wide variety of products to ensure optimal blade performance.',
      features: [
        'FASTER CUTTING WITH M-42 HIGH SPEED STEEL TOOTH EDGE',
        'LONGER BLADE LIFE',
        'FOR GENERAL PURPOSE HAND-FED APPLICATIONS',
        'Ideal for Tool and die shops, machine shops, maintenance facilities',
        'Aluminum / Non-Ferrous metals',
        'Stainless Steels',
        'Carbon Steels',
        'Tool Steels',
        'Structural Steels',
        'Alloy Steels',
      ],
      specs: [
        ['Grade', 'M42 Bimetal'],
        ['Tooth Material', 'M42 High Speed Steel'],
        ['Backing', 'Flexible Alloy Steel'],
        ['Application', 'General Purpose / Hand-fed'],
        ['Materials', 'Aluminium, SS, Carbon, Tool, Alloy Steels'],
        ['Sizes', 'As per customer requirement'],
      ],
    },
  ],
};

export default function BandsawBladesPage({ navigate }) {
  return <ProductPageTemplate pageData={pageData} navigate={navigate} />;
}
