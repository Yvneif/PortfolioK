'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiEye } from 'react-icons/fi';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  imageUrls?: string[];
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails?: () => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadStates, setImageLoadStates] = useState<{ [key: number]: 'loading' | 'loaded' | 'error' }>({});
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const images = project.imageUrls || [];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageLoad = (index: number) => {
    setImageLoadStates(prev => ({ ...prev, [index]: 'loaded' }));
  };

  const handleImageError = (index: number) => {
    setImageLoadStates(prev => ({ ...prev, [index]: 'error' }));
  };

  const handleViewDetails = () => {
    setIsZoomed(true);
    onViewDetails?.();
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  return (
    <>
      <motion.div 
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative overflow-hidden bg-white border-2 border-black hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
      >
      {/* Image Section with Carousel - Fixed Height */}
      <div 
        className="relative h-48 overflow-hidden bg-gray-100 cursor-pointer"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        {images.length > 0 ? (
          <>
            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {imageLoadStates[currentImageIndex] === 'error' ? (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-light">
                  PROJECT IMAGE
                </div>
              ) : (
                <motion.img 
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={`${project.title} preview ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300"
                  style={{
                    // Fallback to object-cover if the image is very wide or very tall
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onLoad={() => handleImageLoad(currentImageIndex)}
                  onError={() => handleImageError(currentImageIndex)}
                />
              )}
              
              {/* Loading state */}
              {!imageLoadStates[currentImageIndex] && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="animate-pulse text-gray-400 font-light">Loading...</div>
                </div>
              )}
            </div>

            {/* View Details Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isImageHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 cursor-pointer"
              style={{ pointerEvents: isImageHovered ? 'auto' : 'none' }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleViewDetails();
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: isImageHovered ? 1 : 0.8, 
                  opacity: isImageHovered ? 1 : 0 
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center gap-3 text-white hover:scale-105 transition-transform duration-200"
              >
                <motion.div
                  animate={{ rotate: isImageHovered ? 360 : 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-3 border-2 border-white/60 bg-white/10 backdrop-blur-sm hover:border-white hover:bg-white/20 transition-all duration-200"
                >
                  <FiEye size={24} />
                </motion.div>
                <motion.span
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ 
                    y: isImageHovered ? 0 : 10, 
                    opacity: isImageHovered ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="text-sm font-bold tracking-wider uppercase hover:text-white/90 transition-colors duration-200"
                >
                  View Details
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Navigation Arrows - Only show if multiple images and not showing overlay */}
            {hasMultipleImages && !isImageHovered && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/20 backdrop-blur-sm border border-white/30 hover:bg-black/40 transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                >
                  <FiChevronLeft className="text-white" size={20} />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/20 backdrop-blur-sm border border-white/30 hover:bg-black/40 transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                >
                  <FiChevronRight className="text-white" size={20} />
                </button>
              </>
            )}

            {/* Image Indicators - Only show if multiple images and not showing overlay */}
            {hasMultipleImages && !isImageHovered && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 border border-white/60 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Image Counter - Show current image number, hide when showing overlay */}
            {hasMultipleImages && !isImageHovered && (
              <div className="absolute top-2 left-2 px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-bold z-20">
                {currentImageIndex + 1}/{images.length}
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-light">
            PROJECT IMAGE
          </div>
        )}
        
        {/* Geometric Corner Elements - Hide when showing overlay */}
        {!isImageHovered && (
          <>
            <div className="absolute top-2 right-2 w-4 h-4 border-2 border-white/60 z-20"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/60 z-20"></div>
          </>
        )}
      </div>

      {/* Content Section - Flexible Height */}
      <div className="p-6 relative flex-1 flex flex-col">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-16 h-16 opacity-5"
             style={{
               backgroundImage: `repeating-linear-gradient(
                 45deg,
                 black,
                 black 2px,
                 transparent 2px,
                 transparent 8px
               )`
             }}>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col">
          <motion.h3 
            className="text-2xl font-black mb-3 tracking-tight uppercase text-black"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-700 mb-4 font-light leading-relaxed flex-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          
          {/* Tech Stack */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.tech.map((tech, index) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="text-xs font-bold bg-black text-white px-3 py-1 tracking-wide uppercase border border-black hover:bg-white hover:text-black transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Action Links - Fixed at bottom */}
          <motion.div 
            className="flex gap-4 pt-2 border-t border-gray-200 mt-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm font-bold text-black hover:text-gray-600 transition-colors duration-200"
              >
                <FiGithub size={16} />
                CODE
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm font-bold text-black hover:text-gray-600 transition-colors duration-200"
              >
                <FiExternalLink size={16} />
                LIVE
              </motion.a>
            )}
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-black"></div>
      </div>
    </motion.div>

    {/* Zoomed Image Modal */}
    {isZoomed && images.length > 0 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleCloseZoom}
      >
        {/* Close button */}
        <button
          onClick={handleCloseZoom}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project title in top left */}
        <div className="absolute top-4 left-4 text-white z-10">
          <h3 className="text-xl font-bold uppercase tracking-tight">{project.title}</h3>
          {hasMultipleImages && (
            <p className="text-sm text-white/70 mt-1">
              {currentImageIndex + 1} of {images.length}
            </p>
          )}
        </div>

        {/* Zoomed image container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 30 }}
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {imageLoadStates[currentImageIndex] === 'error' ? (
            <div className="w-96 h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-light">
              PROJECT IMAGE
            </div>
          ) : (
            <img 
              src={images[currentImageIndex]}
              alt={`${project.title} preview ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain shadow-2xl"
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            />
          )}

          {/* Navigation for multiple images */}
          {hasMultipleImages && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white border border-white/30 transition-all duration-200"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white border border-white/30 transition-all duration-200"
              >
                <FiChevronRight size={24} />
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-3 h-3 border border-white/60 transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-white' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Instructions */}
        <div className="absolute bottom-4 right-4 text-white/70 text-sm">
          Click outside or press ESC to close
        </div>
      </motion.div>
    )}
  </>
  );
}