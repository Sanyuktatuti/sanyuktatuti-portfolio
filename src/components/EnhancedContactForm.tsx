"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiSend, FiCheck, FiX, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateField = (name: keyof FormData, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'subject':
        return value.length < 3 ? 'Subject must be at least 3 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Partial<FormData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key as keyof FormData, value);
      if (error) newErrors[key as keyof FormData] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focused: { scale: 1.02, y: -2 },
    unfocused: { scale: 1, y: 0 }
  };

  const fields = [
    { name: 'name' as const, label: 'Full Name', type: 'text', icon: FiUser, placeholder: 'John Doe' },
    { name: 'email' as const, label: 'Email Address', type: 'email', icon: FiMail, placeholder: 'john@example.com' },
    { name: 'subject' as const, label: 'Subject', type: 'text', icon: FiMessageSquare, placeholder: 'Project Collaboration' },
  ];

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Fields */}
        {fields.map((field, index) => (
          <motion.div
            key={field.name}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              {field.label}
            </label>
            
            <motion.div
              className="relative"
              variants={inputVariants}
              animate={focusedField === field.name ? 'focused' : 'unfocused'}
            >
              <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              
              <input
                type={field.type}
                value={formData[field.name]}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField(null)}
                placeholder={field.placeholder}
                className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm ${
                  errors[field.name]
                    ? 'border-red-500 focus:ring-red-500/50'
                    : focusedField === field.name
                    ? 'border-purple-500 focus:ring-purple-500/50 bg-white/10'
                    : 'border-white/20 hover:border-white/30'
                }`}
              />
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: focusedField === field.name 
                    ? 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)'
                    : 'transparent'
                }}
                animate={{
                  backgroundPosition: focusedField === field.name ? ['0% 50%', '100% 50%'] : '0% 50%'
                }}
                transition={{ duration: 2, repeat: focusedField === field.name ? Infinity : 0 }}
              />
            </motion.div>
            
            {/* Error Message */}
            <AnimatePresence>
              {errors[field.name] && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-red-400 text-sm mt-2 flex items-center gap-2"
                >
                  <FiX className="w-4 h-4" />
                  {errors[field.name]}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Message Field */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          
          <motion.div
            className="relative"
            variants={inputVariants}
            animate={focusedField === 'message' ? 'focused' : 'unfocused'}
          >
            <FiMessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              placeholder="Tell me about your project or how we can work together..."
              rows={6}
              className={`w-full pl-12 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 backdrop-blur-sm resize-none ${
                errors.message
                  ? 'border-red-500 focus:ring-red-500/50'
                  : focusedField === 'message'
                  ? 'border-purple-500 focus:ring-purple-500/50 bg-white/10'
                  : 'border-white/20 hover:border-white/30'
              }`}
            />
          </motion.div>
          
          {/* Error Message */}
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-2 flex items-center gap-2"
              >
                <FiX className="w-4 h-4" />
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success'}
            className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all duration-300 ${
              submitStatus === 'success'
                ? 'bg-green-600 cursor-not-allowed'
                : submitStatus === 'error'
                ? 'bg-red-600 hover:bg-red-700'
                : isSubmitting
                ? 'bg-purple-600/50 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
            }`}
            whileHover={!isSubmitting && submitStatus === 'idle' ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting && submitStatus === 'idle' ? { scale: 0.98 } : {}}
          >
            <div className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <FiCheck className="w-5 h-5" />
                  Message Sent!
                </>
              ) : submitStatus === 'error' ? (
                <>
                  <FiX className="w-5 h-5" />
                  Try Again
                </>
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </div>
          </motion.button>
        </motion.div>
      </form>

      {/* Success/Error Messages */}
      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mt-4 p-4 rounded-xl ${
              submitStatus === 'success'
                ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                : 'bg-red-500/20 border border-red-500/30 text-red-300'
            }`}
          >
            {submitStatus === 'success' 
              ? 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
              : 'Sorry, there was an error sending your message. Please try again or contact me directly.'
            }
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EnhancedContactForm;
