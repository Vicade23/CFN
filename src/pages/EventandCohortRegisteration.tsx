import React, { useState } from 'react';
import { motion } from 'motion/react';
import Postal from '../assets/WhatsApp Image 2026-02-24 at 11.07.14 PM (1).jpeg';

interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  eventCohort: string;
  institution: string;
}

const EventandCohortRegisteration = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState<RegistrationForm>({
    fullName: '',
    email: '',
    phone: '',
    eventCohort: '',
    institution: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const events = [
    'Purpose Conference 2026',
    'Leadership Cohort - Q1',
    'Campus Tour - Lagos',
    'Campus Tour - Abuja',
    'Mentorship Program',
    'Innovation Workshop',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.eventCohort) newErrors.eventCohort = 'Please select an event or cohort';
    if (!formData.institution.trim()) newErrors.institution = 'Institution/Organization is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsRegistered(true);
    }, 1000);
  };

  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/JWSd1PevOTo1zNuhbNYLRo?mode=gi_t', '_blank');
  };

  const handleNewRegistration = () => {
    setIsRegistered(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      eventCohort: '',
      institution: '',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-alabaster to-white">
      {/* Header Section */}
      <motion.section
        className="relative py-16 md:py-24 px-6 bg-brand-alabaster text-brand-navy overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Join Our <span className="text-brand-gold">Community</span>
            </h1>
            <p className="text-lg text-brand-navy/70 max-w-2xl">
              Register for exclusive events and cohorts designed to unlock your purpose and build meaningful connections with fellow leaders.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {!isRegistered ? (
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Form Section */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <h2 className="text-3xl font-serif text-brand-navy mb-2">Registration Form</h2>
                <p className="text-brand-navy/60 mb-8">Fill in your details to get started</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy placeholder-gray-400 bg-white transition-all ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy placeholder-gray-400 bg-white transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234 (0) 123 4567"
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy placeholder-gray-400 bg-white transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Institution/Organization */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Institution/Organization *
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      placeholder="Your school, company, or organization"
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy placeholder-gray-400 bg-white transition-all ${
                        errors.institution
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
                  </div>

                  {/* Event/Cohort Selection */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Select Event or Cohort *
                    </label>
                    <select
                      name="eventCohort"
                      value={formData.eventCohort}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy bg-white transition-all ${
                        errors.eventCohort
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}
                    >
                      <option value="">Choose an option...</option>
                      {events.map(event => (
                        <option key={event} value={event}>
                          {event}
                        </option>
                      ))}
                    </select>
                    {errors.eventCohort && <p className="text-red-500 text-sm mt-1">{errors.eventCohort}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gold-filled py-3 rounded-lg font-medium disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Registration'}
                  </button>
                </form>

                <p className="text-xs text-brand-navy/50 mt-6">
                  * Required fields. Your information will be kept secure and used only for event communication.
                </p>
              </div>

              {/* Info Section */}
              <div className="space-y-8">
                <motion.div
                  className="overflow-hidden rounded-xl shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img 
                    src={Postal} 
                    alt="Event and Cohort" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </motion.div>

                <motion.div
                  className="bg-white border-2 border-brand-navy/10 p-8 rounded-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-serif mb-4 text-brand-navy">What to Expect</h3>
                  <ul className="space-y-3 text-brand-navy/70">
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-3 mt-1">✓</span>
                      <span>Exclusive access to our community</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-3 mt-1">✓</span>
                      <span>Timely event updates and announcements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-3 mt-1">✓</span>
                      <span>Connect with like-minded leaders and mentors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-gold mr-3 mt-1">✓</span>
                      <span>Access to resources and learning materials</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">💬</span>
                    <h3 className="text-lg font-serif text-brand-navy">WhatsApp Community</h3>
                  </div>
                  <p className="text-brand-navy/70 text-sm">
                    After registration, join our WhatsApp group for real-time updates, networking, and community support.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            /* Success Screen */
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16">
                {/* Success Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                >
                  <span className="text-4xl">✓</span>
                </motion.div>

                <h2 className="text-4xl font-serif text-brand-navy mb-4">
                  Welcome to CFN!
                </h2>

                <p className="text-xl text-brand-navy/70 mb-3">
                  {formData.fullName}, your registration is complete.
                </p>

                <p className="text-brand-navy/60 mb-10 max-w-md mx-auto leading-relaxed">
                  You're now part of an exclusive community of purposeful leaders. The next step is to join our WhatsApp group where you'll receive the latest updates and connect with other participants.
                </p>

                {/* Event Details */}
                <div className="bg-brand-navy/5 rounded-lg p-6 mb-10 text-left max-w-md mx-auto">
                  <h3 className="font-medium text-brand-navy mb-4">Registration Details</h3>
                  <div className="space-y-2 text-sm text-brand-navy/70">
                    <p><span className="font-medium">Name:</span> {formData.fullName}</p>
                    <p><span className="font-medium">Event/Cohort:</span> {formData.eventCohort}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppJoin}
                  className="w-full md:w-auto inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-8 rounded-lg mb-6 transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  <span className="mr-2">💬</span>
                  Join Our WhatsApp Group
                </button>

                <p className="text-sm text-brand-navy/60 mb-8">
                  Click above to join the community group. You'll receive all event updates and announcements there.
                </p>

                <div className="border-t border-gray-200 pt-8">
                  <button
                    onClick={handleNewRegistration}
                    className="inline-flex items-center text-brand-navy hover:text-brand-gold font-medium transition-colors"
                  >
                    <span className="mr-2">←</span>
                    Register for Another Event
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                className="mt-12 grid md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <span className="text-3xl mb-2 block">📧</span>
                  <h3 className="font-medium text-brand-navy mb-2">Email Confirmation</h3>
                  <p className="text-sm text-brand-navy/60">A confirmation has been sent to {formData.email}</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <span className="text-3xl mb-2 block">🤝</span>
                  <h3 className="font-medium text-brand-navy mb-2">Community Access</h3>
                  <p className="text-sm text-brand-navy/60">You now have access to exclusive community resources</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <span className="text-3xl mb-2 block">📱</span>
                  <h3 className="font-medium text-brand-navy mb-2">Stay Updated</h3>
                  <p className="text-sm text-brand-navy/60">Get real-time updates through WhatsApp</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventandCohortRegisteration;