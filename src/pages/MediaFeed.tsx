import React from 'react';
import { motion } from 'motion/react';
import { Play, Mic, BookOpen, ExternalLink } from 'lucide-react';

export const MediaFeed: React.FC = () => {
  const mediaItems = [
    {
      type: 'Video',
      title: 'The Japa Response: Why Africa Needs You Now',
      description: 'A deep dive into the strategic positioning of African youth in the global economy.',
      icon: <Play size={20} />,
      tag: 'Featured Video',
      image: 'https://picsum.photos/seed/video1/800/600'
    },
    {
      type: 'Podcast',
      title: 'Charging a Generation: Episode 42',
      description: 'Interview with Dr. Amara on the intersection of technology and purpose.',
      icon: <Mic size={20} />,
      tag: 'Latest Podcast',
      image: 'https://picsum.photos/seed/audio1/800/600'
    },
    {
      type: 'Publication',
      title: 'Capacity for Nations: The Manifesto',
      description: 'Our foundational text on building institutional strength through individual purpose.',
      icon: <BookOpen size={20} />,
      tag: 'New Release',
      image: 'https://picsum.photos/seed/book1/800/600'
    }
  ];

  return (
    <div className="space-y-24">
      {/* Featured Video Section */}
      <section>
        <div className="relative aspect-video bg-brand-navy overflow-hidden group cursor-pointer">
          <img 
            src="https://picsum.photos/seed/featured/1920/1080" 
            alt="Featured Content" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <motion.div 
              className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mb-8 shadow-2xl"
              whileHover={{ scale: 1.1 }}
            >
              <Play className="text-brand-navy ml-1" size={32} fill="currentColor" />
            </motion.div>
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-display font-bold mb-4">Latest Episode</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white max-w-4xl leading-tight">
              The Architecture of <span className="italic">Global</span> Relevance
            </h2>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {mediaItems.map((item, index) => (
            <motion.div 
              key={item.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square overflow-hidden mb-8 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 text-brand-navy">
                  {item.icon}
                </div>
              </div>
              <span className="text-brand-terracotta uppercase tracking-widest text-[10px] font-display font-bold mb-3 block">
                {item.tag}
              </span>
              <h3 className="text-2xl font-serif text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h3>
              <p className="text-sm text-brand-navy/60 leading-relaxed mb-6">
                {item.description}
              </p>
              <button className="flex items-center text-[10px] uppercase tracking-widest font-display font-bold text-brand-navy border-b border-brand-navy/20 pb-1 hover:border-brand-gold transition-colors">
                Access Content <ExternalLink size={12} className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Podcast Player Bar */}
      <section className="bg-brand-navy py-8 px-6 sticky bottom-0 z-40 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-brand-gold shrink-0 flex items-center justify-center">
              <Mic size={20} className="text-brand-navy" />
            </div>
            <div>
              <p className="text-white text-sm font-serif">Charging a Generation</p>
              <p className="text-brand-gold text-[10px] uppercase tracking-widest font-display">Now Playing: Ep. 42 - The Tech Intersection</p>
            </div>
          </div>
          <div className="flex-grow max-w-md w-full bg-white/10 h-1 relative rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-brand-gold w-1/3"></div>
          </div>
          <div className="flex items-center space-x-6 text-white/60">
            <button className="hover:text-brand-gold transition-colors text-xs uppercase tracking-widest font-display font-bold">Listen on Spotify</button>
            <button className="hover:text-brand-gold transition-colors text-xs uppercase tracking-widest font-display font-bold">Apple Podcasts</button>
          </div>
        </div>
      </section>
    </div>
  );
};
