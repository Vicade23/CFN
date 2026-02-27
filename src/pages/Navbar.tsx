import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../model/types';

const PAGE_TO_PATH: Record<string, string> = {
  'home': '/',
  'about': '/about',
  'programs': '/programs',
  // 'hub': '/hub',
  'media': '/media',
  'partner': '/partner',
  'eventandcohortregisteration': '/event'
};

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (page: string) => {
    const path = PAGE_TO_PATH[page] || '/';
    navigate(path);
  };

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer group"
          onClick={() => handleNavigation('home')}
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
              onClick={() => handleNavigation(link.page)}
              className={`text-xs uppercase tracking-[0.15em] font-display font-semibold transition-colors duration-300 hover:text-brand-gold ${
                location.pathname === PAGE_TO_PATH[link.page] ? 'text-brand-gold' : 'text-brand-navy/70'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={() => handleNavigation('eventandcohortregisteration')}
          className="btn-gold-outline"
        >
          Join the Movement
        </button>
      </div>
    </nav>
  );
};
