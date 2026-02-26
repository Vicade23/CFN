import React from 'react';
import { Instagram, Youtube, Linkedin, Mail, MapPin } from 'lucide-react';
import { Page } from '../model/types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-brand-navy text-brand-alabaster pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-brand-gold flex items-center justify-center mr-3">
              <span className="text-brand-navy font-serif font-bold text-lg">C</span>
            </div>
            <span className="font-serif font-bold text-xl tracking-tight">CFN</span>
          </div>
          <p className="text-sm text-brand-alabaster/60 leading-relaxed mb-8 font-sans">
            Raising a generation of purposeful, capable, and globally relevant Africans. 
            An elite institution for the mind.
          </p>
          <div className="flex space-x-4">
            <a href="/" className="text-brand-gold hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="/" className="text-brand-gold hover:text-white transition-colors"><Youtube size={18} /></a>
            <a href="/" className="text-brand-gold hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-brand-gold italic">Navigation</h4>
          <ul className="space-y-4 text-xs uppercase tracking-widest font-display font-semibold">
            <li><button onClick={() => onPageChange('home')} className="hover:text-brand-gold transition-colors">Home</button></li>
            <li><button onClick={() => onPageChange('about')} className="hover:text-brand-gold transition-colors">About Us</button></li>
            <li><button onClick={() => onPageChange('programs')} className="hover:text-brand-gold transition-colors">Programs</button></li>
            <li><button onClick={() => onPageChange('hub')} className="hover:text-brand-gold transition-colors">The Hub</button></li>
            <li><button onClick={() => onPageChange('media')} className="hover:text-brand-gold transition-colors">Media</button></li>
            <li><button onClick={() => onPageChange('eventandcohortregisteration')} className="hover:text-brand-gold transition-colors">Events & Cohorts</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-brand-gold italic">Contact</h4>
          <ul className="space-y-4 text-sm text-brand-alabaster/70">
            <li className="flex items-start">
              <MapPin size={16} className="mr-3 text-brand-gold shrink-0 mt-1" />
              <span>Abuja, Nigeria<br/>(Pan-African Scope)</span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-3 text-brand-gold shrink-0" />
              <a href="mailto:capacityfornations@gmail.com" className="hover:text-brand-gold transition-colors">capacityfornations@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-brand-gold italic">Newsletter</h4>
          <p className="text-xs text-brand-alabaster/60 mb-4 uppercase tracking-widest">Subscribe to the Generation</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-gold transition-colors"
            />
            <button className="bg-brand-gold text-brand-navy px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-brand-alabaster/40 font-display font-bold">
        <p>© 2026 Capacity for Nations. All Rights Reserved.</p>
        <p>Designed for Global Relevance.</p>
      </div>
    </footer>
  );
};
