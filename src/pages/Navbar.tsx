import React from 'react';
import { motion } from 'motion/react';
import { NAV_LINKS, Page } from '../model/types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => onPageChange('home')}
        >
          <div className="w-10 h-10 bg-brand-navy flex items-center justify-center mr-3 group-hover:bg-brand-gold transition-colors duration-500">
            <span className="text-brand-gold group-hover:text-brand-navy font-serif font-bold text-xl transition-colors duration-500">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg tracking-tight leading-none">CFN</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-display font-semibold text-brand-gold">Capacity for Nations</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => onPageChange(link.page)}
              className={`text-xs uppercase tracking-[0.15em] font-display font-semibold transition-colors duration-300 hover:text-brand-gold ${
                currentPage === link.page ? 'text-brand-gold' : 'text-brand-navy/70'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={() => onPageChange('hub')}
          className="btn-gold-outline"
        >
          Join the Movement
        </button>
      </div>
    </nav>
  );
};
