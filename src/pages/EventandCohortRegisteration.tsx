import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import Postal from '../assets/WhatsApp Image 2026-02-24 at 11.07.14 PM (1).jpeg';
import Whatsapp from '../assets/pngtree-whatsapp-icon-png-image_6315990.png';

interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  eventCohort: string;
  institution: string;
}

const EventandCohortRegisteration = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [registeredData, setRegisteredData] = useState<RegistrationForm | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<RegistrationForm>({
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      eventCohort: '',
      institution: '',
    },
  });

  const events = [
    'Purpose Conference 2026',
    'Leadership Cohort - Q1',
    'Campus Tour - Lagos',
    'Campus Tour - Abuja',
    'Mentorship Program',
    'Innovation Workshop',
  ];

  const onSubmit = async (data: RegistrationForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRegisteredData(data);
    setIsRegistered(true);
  };

  const handleWhatsAppJoin = () => {
    window.open('https://chat.whatsapp.com/JWSd1PevOTo1zNuhbNYLRo?mode=gi_t', '_blank');
  };

  const handleNewRegistration = () => {
    setIsRegistered(false);
    setRegisteredData(null);
    reset();
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
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">
              Join Our <span className="text-brand-gold">Community</span>
            </h1>
            <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto text-center">
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
              className="grid md:grid-cols-1 gap-12 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                
                <motion.div
                  className="overflow-hidden rounded-xl shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img 
                    src={Postal} 
                    alt="Event and Cohort" 
                    className="w-full block md:hidden h-auto object-cover rounded-xl"
                  />
                </motion.div>

              {/* Form Section */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                <h2 className="text-3xl font-serif text-brand-navy mb-2">Registration Form</h2>
                <p className="text-brand-navy/60 mb-8">Fill in your details to get started</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register('fullName', { required: 'Full name is required' })}
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy placeholder-gray-400 bg-white transition-all ${
                        errors.fullName
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Please enter a valid email address',
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy placeholder-gray-400 bg-white transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 7090 123 4567"
                      {...register('phone', {
                        required: 'Phone number is required',
                        validate: (value) => {
                          const digitsOnly = value.replace(/\D/g, '');
                          if (digitsOnly.length < 10) {
                            return 'Phone number must contain at least 10 digits';
                          }
                          if (!/^[\d\s\-\+\(\)]+$/.test(value)) {
                            return 'Please enter a valid phone number';
                          }
                          return true;
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy placeholder-gray-400 bg-white transition-all ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}

                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>

                  {/* Institution/Organization */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Institution/Organization *
                    </label>
                    <input
                      type="text"
                      placeholder="Your school, company, or organization"
                      {...register('institution', { required: 'Institution/Organization is required' })}
                      className={`w-full px-4 py-3 rounded-lg border text-brand-navy placeholder-gray-400 bg-white transition-all ${
                        errors.institution
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-brand-gold'
                      } focus:outline-none focus:ring-2`}
                    />
                    {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution.message}</p>}
                  </div>

                  {/* Event/Cohort Selection */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">
                      Select Event or Cohort *
                    </label>
                    <select
                      {...register('eventCohort', { required: 'Please select an event or cohort' })}
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
                    {errors.eventCohort && <p className="text-red-500 text-sm mt-1">{errors.eventCohort.message}</p>}
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
                    className="w-full hidden md:block h-auto object-cover rounded-xl"
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
                    <span className="text-2xl mr-2">
                        <img src={Whatsapp} alt="Whatsapp icon" className="w-8 h-8" />
                    </span>
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
                  {registeredData?.fullName}, your registration is complete.
                </p>

                <p className="text-brand-navy/60 mb-10 max-w-md mx-auto leading-relaxed">
                  You're now part of an exclusive community of purposeful leaders. The next step is to join our WhatsApp group where you'll receive the latest updates and connect with other participants.
                </p>

                {/* Event Details */}
                <div className="bg-brand-navy/5 rounded-lg p-6 mb-10 text-left max-w-md mx-auto">
                  <h3 className="font-medium text-brand-navy mb-4">Registration Details</h3>
                  <div className="space-y-2 text-sm text-brand-navy/70">
                    <p><span className="font-medium">Name:</span> {registeredData?.fullName}</p>
                    <p><span className="font-medium">Event/Cohort:</span> {registeredData?.eventCohort}</p>
                    <p><span className="font-medium">Email:</span> {registeredData?.email}</p>
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
                  <p className="text-sm text-brand-navy/60">A confirmation has been sent to {registeredData?.email}</p>
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