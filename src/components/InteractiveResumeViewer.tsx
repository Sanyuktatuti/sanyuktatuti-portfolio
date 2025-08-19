"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiDownload, FiX, FiMaximize2, FiMinimize2, FiExternalLink } from "react-icons/fi";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const InteractiveResumeViewer = ({ isOpen, onClose }: ResumeViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const sections = [
    { id: 'contact', label: 'Contact', color: '#8B5CF6' },
    { id: 'experience', label: 'Experience', color: '#3B82F6' },
    { id: 'education', label: 'Education', color: '#06B6D4' },
    { id: 'skills', label: 'Skills', color: '#10B981' },
    { id: 'projects', label: 'Projects', color: '#F59E0B' },
  ];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Check if PDF exists and handle loading
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
      
      // Test if PDF exists
      fetch('/resume.pdf', { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            setHasError(false);
          } else {
            setHasError(true);
          }
        })
        .catch(() => {
          setHasError(true);
        })
        .finally(() => {
          // Add a minimum loading time for better UX
          setTimeout(() => setIsLoading(false), 1000);
        });
    }
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sanyukta_Tuti_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Resume Container */}
          <motion.div
            className={`bg-white rounded-2xl shadow-2xl overflow-hidden relative ${
              isFullscreen ? 'w-full h-full' : 'w-full max-w-5xl h-[90vh]'
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Controls */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Resume - Sanyukta Tuti
                </h3>
                
                {/* Section Navigation */}
                <div className="hidden md:flex items-center gap-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        activeSection === section.id
                          ? 'text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-800 bg-white hover:bg-gray-100'
                      }`}
                      style={{
                        backgroundColor: activeSection === section.id ? section.color : undefined,
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {section.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isFullscreen ? (
                    <FiMinimize2 className="w-4 h-4 text-gray-600" />
                  ) : (
                    <FiMaximize2 className="w-4 h-4 text-gray-600" />
                  )}
                </motion.button>

                <motion.button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="w-4 h-4" />
                  Download
                </motion.button>

                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX className="w-4 h-4 text-gray-600" />
                </motion.button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="relative h-full overflow-hidden">
              {isLoading ? (
                /* Loading State */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-center">
                    <motion.div 
                      className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-gray-700 font-medium">Loading resume...</p>
                    <p className="text-sm text-gray-500 mt-2">Please wait a moment</p>
                  </div>
                </div>
              ) : hasError ? (
                /* Error State */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-center max-w-md mx-auto p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiX className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Resume Not Found</h3>
                    <p className="text-gray-600 mb-4">
                      The resume PDF file couldn't be loaded. Please add your resume.pdf file to the public folder.
                    </p>
                    <div className="flex gap-3 justify-center">
                      <motion.button
                        onClick={() => window.open('/resume.pdf', '_blank')}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Try Direct Link
                      </motion.button>
                      <motion.button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>
                </div>
              ) : (
                /* PDF Content */
                <>
                  <iframe
                    src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                    className="w-full h-full border-none"
                    title="Resume PDF"
                    onLoad={() => setIsLoading(false)}
                  />

                  {/* Interactive Overlays */}
                  <AnimatePresence>
                    {activeSection && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Highlight Effect */}
                        <motion.div
                          className="absolute rounded-lg border-2 pointer-events-none"
                          style={{
                            borderColor: sections.find(s => s.id === activeSection)?.color,
                            backgroundColor: `${sections.find(s => s.id === activeSection)?.color}10`,
                            top: activeSection === 'contact' ? '10%' : 
                                 activeSection === 'experience' ? '25%' :
                                 activeSection === 'education' ? '45%' :
                                 activeSection === 'skills' ? '65%' : '80%',
                            left: '5%',
                            right: '5%',
                            height: '15%',
                          }}
                          animate={{
                            scale: [1, 1.02, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveResumeViewer;
