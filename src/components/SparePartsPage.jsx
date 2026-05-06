import { Package, Shield, Zap, Clock } from 'lucide-react';
import ProductPageTemplate from './ProductPageTemplate';

const pageData = {
  title: 'Bandsaw Machine Spare Parts',
  titleLine1: 'SPARE PARTS &',
  titleLine2: 'ACCESSORIES',
  intro: 'All types of bandsaw machine and circular saw machine spare parts available at MEC Technology. Mostly ready stock available. Special/custom spare parts also available as per customer requirement. Quality product, one-to-one replacement, on-time delivery and service.',
  badges: [
    { icon: Package, label: 'Ready Stock Available' },
    { icon: Shield, label: 'OEM Quality' },
    { icon: Zap, label: 'Fast Dispatch' },
    { icon: Clock, label: 'On-Time Delivery' },
  ],
  models: [
    {
      name: 'Bandsaw Machine Spare Parts', badge: 'ALL MODELS', badgeCls: 'bg-amber-500 text-black',
      subtitle: 'Complete Spare Parts Supply for All Bandsaw Machine Models',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/Spare_parts_-_Bandsaw_Machine.jpg',
      desc: 'All types of bandsaw machine spare parts are available. Specification will vary as per parts. Special parts on requirement are also available. For any kind of requirement please contact us — our team will assist you promptly.',
      features: [
        'Quality product — OEM grade components',
        'One-to-one replacement guarantee',
        'On time delivery across India',
        'On time service support',
        'Ready stock for most common parts',
        'Special purpose spare parts as per customer requirement',
        'Blade guide assemblies',
        'Hydraulic components — pumps, cylinders, valves',
        'Drive components — motors, gearboxes, pulleys, belts',
        'Electrical components — switchgears, contactors, PLCs',
        'Coolant system parts',
        'LM guide ways and bearing blocks',
      ],
      specs: [
        ['Availability', 'Ready stock for most parts'],
        ['Custom Parts', 'Available on requirement'],
        ['Delivery', 'Pan India — fast dispatch'],
        ['Quality', 'OEM grade — one-to-one replacement'],
        ['Compatible with', 'All MEC Technology models'],
        ['Specification', 'Varies as per parts — contact us'],
      ],
    },
    {
      name: 'Circular Saw Machine Spare Parts', badge: 'CIRCULAR SAW', badgeCls: 'bg-blue-900 text-white',
      subtitle: 'Spare Parts for High Speed Circular Saw Machines',
      img: 'https://mectechnology.co.in/wp-content/uploads/2024/08/cnc-circular-saw-machine-in-coimbatore-1.pdf.png',
      desc: 'All types of circular saw machine spare parts available — from TCT/HSS circular saw blades to servo motors, ball screws, PLC components, and hydraulic parts. Contact us with your model number for accurate part identification.',
      features: [
        'TCT / HSS Circular Saw Blades in multiple sizes',
        'Servo motors and drives for auto-feed systems',
        'Ball screw assemblies for cutting head movement',
        'Hydraulic power pack components',
        'Job clamping vice parts',
        'Electrical control panel components',
        'Coolant system and micro mist spray parts',
        'Motorized wire brush assemblies',
        'Gearbox components',
        'Linear guide ways for circular saw machines',
      ],
      specs: [
        ['Availability', 'Ready stock for common parts'],
        ['Custom Parts', 'Available on requirement'],
        ['Delivery', 'Pan India — fast dispatch'],
        ['Quality', 'OEM grade components'],
        ['Compatible with', 'All MEC Circular Saw models'],
        ['Specification', 'Varies as per parts — contact us'],
      ],
    },
  ],
};

export default function SparePartsPage({ navigate }) {
  return <ProductPageTemplate pageData={pageData} navigate={navigate} />;
}
