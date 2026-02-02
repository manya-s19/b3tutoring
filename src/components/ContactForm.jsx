
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Check, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';

const ContactForm = () => {
  const { toast } = useToast();
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subjects: [],
    message: ''
  });
  
  // UI States
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableSubjects = ['Math', 'English', 'French', 'Science'];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    if (formData.subjects.length === 0) newErrors.subjects = 'Please select at least one subject';
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const toggleSubject = (subject) => {
    setFormData(prev => {
      const currentSubjects = prev.subjects;
      const newSubjects = currentSubjects.includes(subject)
        ? currentSubjects.filter(s => s !== subject)
        : [...currentSubjects, subject];
      return { ...prev, subjects: newSubjects };
    });
    if (errors.subjects) setErrors(prev => ({ ...prev, subjects: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validation
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please check the highlighted fields.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Prepare Payload
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subjects: formData.subjects,
        message: formData.message,
      };

      // 3. Supabase Insert
      const { error } = await supabase
        .from('contact_submissions')
        .insert([payload]);

      // 4. Handle Response
      if (error) {
        throw error;
      }

      // 5. Success State
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subjects: [], message: '' });
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you soon.",
        className: "bg-green-50 border-green-200 text-green-900",
        duration: 5000,
      });

      // Reset success message visual after delay
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error("Submission Error:", error);
      
      toast({
        title: "Submission Failed",
        description: error.message || "Could not send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full font-semibold text-sm mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Start Your Learning
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Journey Today
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to unlock your child's potential? Fill out the form and we'll match you with the perfect tutor for your needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center shrink-0 text-white shadow-lg">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">blockbyblock.inquiries@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center shrink-0 text-white shadow-lg">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">647 510 6249</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center shrink-0 text-white shadow-lg">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                  <p className="text-gray-600">Sat: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
              
              {/* Success Overlay */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-green-800">Message Sent!</h4>
                    <p className="text-green-700 text-sm">We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-gray-50 border ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 disabled:opacity-60 disabled:cursor-not-allowed`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="w-4 h-4" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-gray-50 border ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 disabled:opacity-60 disabled:cursor-not-allowed`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="w-4 h-4" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-gray-50 border ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900 disabled:opacity-60 disabled:cursor-not-allowed`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="w-4 h-4" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Subjects Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Subjects of Interest *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {availableSubjects.map((subject) => {
                        const isSelected = formData.subjects.includes(subject);
                        return (
                          <button
                            key={subject}
                            type="button"
                            onClick={() => toggleSubject(subject)}
                            disabled={isSubmitting}
                            className={`
                              relative px-4 py-3 rounded-lg border text-center transition-all duration-200 font-medium flex items-center justify-center gap-2
                              disabled:opacity-60 disabled:cursor-not-allowed
                              ${isSelected
                                ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-sm ring-1 ring-orange-500'
                                : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:border-gray-300'}
                            `}
                          >
                            {subject}
                            {isSelected && <Check className="w-4 h-4" />}
                          </button>
                        );
                      })}
                    </div>
                    {errors.subjects && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="w-4 h-4" /> {errors.subjects}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={4}
                      className={`w-full px-4 py-3 bg-gray-50 border ${
                        errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none text-gray-900 disabled:opacity-60 disabled:cursor-not-allowed`}
                      placeholder="Tell us about your learning goals..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1 animate-in fade-in slide-in-from-top-1">
                        <AlertCircle className="w-4 h-4" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`
                      w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2
                      ${isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed opacity-80' 
                        : 'bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 text-white hover:shadow-xl'}
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
