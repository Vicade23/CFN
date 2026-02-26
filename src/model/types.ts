/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Image1 from "../assets/f4cf9ec7-6904-4128-9dba-9c0b9f15ee42.jpg"
import Image2 from "../assets/IMG_9446.jpg"
import Image3 from "../assets/Screenshot 2026-02-22 231610.png"
import Image4 from "../assets/Screenshot 2026-02-22 231904.png"
import Image5 from "../assets/Screenshot 2026-02-22 232217.png"

export type Page = 'home' | 'about' | 'programs' | 'hub' | 'media' | 'partner' | 'eventandcohortregisteration';

export interface NavLink {
  label: string;
  page: Page;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', page: 'about' },
  { label: 'Programs', page: 'programs' },
  { label: 'The Hub', page: 'hub' },
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

export const PROGRAMS: Program[] = [
  { pillar: 'Pillar 1', image: Image1, title: 'Purpose Conferences', description: 'High-impact gatherings focused on mindset shifts and intentional living.' },
  { pillar: 'Pillar 2', image: Image2, title: 'Campus Tours', description: 'Direct engagement with secondary and tertiary institutions to instill leadership early.' },
  { pillar: 'Pillar 3', image: Image3, title: 'Training & Mentorship', description: 'Structured bootcamps and cohorts focused on professional alignment and social capital.' },
  { pillar: 'Pillar 4', image: Image4, title: 'Publications & Media', description: 'Disseminating thought leadership through books, podcasts, and YouTube.' },
  { pillar: 'Pillar 5', image: Image5, title: 'Strategic Partnerships', description: 'Collaborating with NGOs, the private sector, and global foundations.' },
];
