/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Image1 from "../assets/WhatsApp Image 2026-02-27 at 12.34.44 PM.jpeg"
import Image2 from "../assets/WhatsApp Image 2026-02-27 at 12.34.46 PM (3).jpeg"
import Image3 from "../assets/WhatsApp Image 2026-02-27 at 12.34.47 PM.jpeg"
import Image4 from "../assets/WhatsApp Image 2026-02-27 at 12.34.48 PM (1).jpeg"
import Image5 from "../assets/WhatsApp Image 2026-02-27 at 12.34.45 PM (1).jpeg"


import Image6 from "../assets/WhatsApp Image 2026-02-27 at 12.34.40 PM.jpeg"
import Image7 from "../assets/WhatsApp Image 2026-02-27 at 12.34.43 PM (3).jpeg"
import Image8 from "../assets/WhatsApp Image 2026-02-27 at 12.34.47 PM (1).jpeg"
import Image9 from "../assets/WhatsApp Image 2026-02-27 at 12.34.46 PM.jpeg"
import Image10 from "../assets/WhatsApp Image 2026-02-27 at 12.34.44 PM (2).jpeg"
import Image11 from "../assets/WhatsApp Image 2026-02-27 at 12.34.44 PM (3).jpeg"

export type Page = 'home' | 'about' | 'programs' | 'hub' | 'media' | 'partner' | 'eventandcohortregisteration';

export interface NavLink {
  label: string;
  page: Page;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', page: 'about' },
  { label: 'Programs', page: 'programs' },
  // { label: 'The Hub', page: 'hub' },
  { label: 'Media', page: 'media' },
  { label: 'Partner', page: 'partner' },
  { label: 'Registration', page: 'eventandcohortregisteration' },
  // Event & Cohort 
];

export interface Value {
  title: string;
  description: string;
}

export const CORE_VALUES: Value[] = [
  { title: 'Purpose', description: 'Alignment with one’s original design.' },
  { title: 'Excellence', description: 'Adherence to global standards in execution.' },
  { title: 'Innovation', description: 'Problem-solving over excuse-making.' },
  { title: 'Capacity', description: 'Competence as the prerequisite for opportunity.' },
  { title: 'Community', description: 'Progress through mentorship and collaboration.' },
  { title: 'Impact', description: 'Measured by transformed lives and improved systems.' },
];

export interface Program {
  title: string;
  description: string;
  pillar: string;
  image: string;
}


export interface Programmain {
  image: string;
}

export const PROGRAMS: Program[] = [
  { pillar: 'Pillar 1', image: Image1, title: 'Purpose Conferences', description: 'High-impact gatherings focused on mindset shifts and intentional living.' },
  { pillar: 'Pillar 2', image: Image2, title: 'Campus Tours', description: 'Direct engagement with secondary and tertiary institutions to instill leadership early.' },
  { pillar: 'Pillar 3', image: Image3, title: 'Training & Mentorship', description: 'Structured bootcamps and cohorts focused on professional alignment and social capital.' },
  { pillar: 'Pillar 4', image: Image4, title: 'Publications & Media', description: 'Disseminating thought leadership through books, podcasts, and YouTube.' },
  { pillar: 'Pillar 5', image: Image5, title: 'Strategic Partnerships', description: 'Collaborating with NGOs, the private sector, and global foundations.' },
];


export const PROGRAMSMAIN: Programmain[] = [
  { image: Image6, },
  { image: Image7, },
  { image: Image8, },
  { image: Image9, },
  { image: Image10, },
  { image: Image11, },
];
