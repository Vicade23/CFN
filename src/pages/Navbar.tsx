import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../model/types';
import Logo from '../assets/cfn-logo.png';

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
          <img src={Logo} className='w-[120px] h-[50px]' alt="Logo" />
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
