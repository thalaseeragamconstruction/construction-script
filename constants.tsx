
import React from 'react';
import { Building2, Home, Landmark, HardHat, Ruler, ShieldCheck } from 'lucide-react';
import { Project, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'res',
    title: 'Residential Building',
    description: 'Bespoke homes and luxury villas designed for modern living with sustainable materials.',
    icon: <Home className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'comm',
    title: 'Commercial Complexes',
    description: 'High-rise office buildings and shopping malls with state-of-the-art infrastructure.',
    icon: <Building2 className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'civil',
    title: 'Civil Engineering',
    description: 'Large-scale infrastructure including bridges, roads, and drainage systems.',
    icon: <Landmark className="w-8 h-8 text-orange-600" />
  },
  // {
  //   id: 'plan',
  //   title: 'Urban Planning',
  //   description: 'Detailed architectural planning and land development strategies for new townships.',
  //   icon: <Ruler className="w-8 h-8 text-orange-600" />
  // },
  // {
  //   id: 'safety',
  //   title: 'Safety Consulting',
  //   description: 'Strict adherence to international safety standards and periodic quality audits.',
  //   icon: <ShieldCheck className="w-8 h-8 text-orange-600" />
  // },
  // {
  //   id: 'renov',
  //   title: 'Modern Renovation',
  //   description: 'Transforming old structures into modern masterpieces with structural reinforcement.',
  //   icon: <HardHat className="w-8 h-8 text-orange-600" />
  // }
];

export const PROJECTS: Project[] = [
  // {
  //   id: 1,
  //   title: 'Skyline Heights',
  //   category: 'Commercial',
  //   image: 'https://picsum.photos/seed/building1/800/600',
  //   description: 'A 45-story glass facade office tower in the financial district.'
  // },
  // {
  //   id: 2,
  //   title: 'Emerald Gardens',
  //   category: 'Residential',
  //   image: 'https://picsum.photos/seed/house1/800/600',
  //   description: 'Eco-friendly apartment complex with integrated solar systems.'
  // },
  {
    id: 1,
    title: 'Nandambakam Site View',
    category: 'Civil',
    image: '/construction-script/Images/WhatsApp Image 2026-01-05 at 7.28.42 PM (2).jpeg',
    description: 'In Progress Constrction:'
  },
  // {
  //   id: 4,
  //   title: 'Lakeside Villas',
  //   category: 'Residential',
  //   image: 'https://picsum.photos/seed/villa/800/600',
  //   description: 'A collection of 20 premium luxury villas with private docks.'
  // }
];
