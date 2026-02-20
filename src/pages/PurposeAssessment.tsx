import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ClipboardCheck, ArrowRight, Sparkles } from 'lucide-react';

export const PurposeAssessment: React.FC = () => {
  const [step, setStep] = useState(0);

  const questions = [
    "What activities make you lose track of time?",
    "If money was no object, how would you spend your days?",
    "What global problem keeps you up at night?",
    "What do people often come to you for help with?"
  ];

  return (
    <div className="bg-white p-12 shadow-2xl border border-brand-navy/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold"></div>
      
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-brand-navy/5 rounded-full flex items-center justify-center">
            <ClipboardCheck className="text-brand-gold" size={24} />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-brand-navy">Purpose Assessment</h3>
            <p className="text-[10px] uppercase tracking-widest font-display font-bold text-brand-gold">The First Step to Relevance</p>
          </div>
        </div>

        {step < questions.length ? (
          <motion.div 
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <p className="text-sm text-brand-navy/40 mb-2 font-display font-bold uppercase tracking-widest">Question 0{step + 1}</p>
            <h4 className="text-xl font-serif text-brand-navy mb-8 leading-tight">{questions[step]}</h4>
            
            <textarea 
              className="w-full bg-brand-alabaster border-none p-6 text-brand-navy placeholder:text-brand-navy/20 focus:ring-1 focus:ring-brand-gold min-h-[120px] mb-8 transition-all"
              placeholder="Reflect and type here..."
            ></textarea>

            <button 
              onClick={() => setStep(step + 1)}
              className="btn-gold-filled flex items-center"
            >
              Next Question <ArrowRight size={16} className="ml-3" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="text-brand-gold" size={40} />
            </div>
            <h4 className="text-2xl font-serif text-brand-navy mb-4">Reflection Complete</h4>
            <p className="text-sm text-brand-navy/60 mb-8 max-w-xs mx-auto">
              Your responses have been recorded. Our mentors will analyze your profile and send a personalized roadmap to your email.
            </p>
            <button className="btn-gold-outline">
              View Full Analysis
            </button>
          </motion.div>
        )}
      </div>

      {/* Decorative background element */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
        <ClipboardCheck size={200} />
      </div>
    </div>
  );
};
