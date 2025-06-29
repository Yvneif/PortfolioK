'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiPhone, FiMail, FiLinkedin, FiCopy, FiZoomIn, FiExternalLink, FiEye, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import SkillsSection from './components/SkillsSection';
import projects from './data/projects.json';
import galleryItems from './data/gallery.json';

export default function Home() {
  const profilePhoto = "/images/your-photo.jpg"; 
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  type GalleryItem = {
    id: string | number;
    title: string;
    description: string;
    image: string;
    category?: string;
    date?: string;
    details?: string;
    link?: string;
  };
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  type Project = typeof projects[number];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const contactInfo = {
    phone: "09608104521",
    email: "kennethrivera3103@gmail.com",
    linkedin: "www.linkedin.com/in/mike-kenneth-rivera"
  };

  const resumeUrl = "https://drive.google.com/file/d/1o-tJKRH9c3z-euvfC5hNAOmKBCW48CrE/view?usp=sharing";

 const copyToClipboard = (text: string, type: string): void => {
  navigator.clipboard.writeText(text)
    .then(() => {
      setCopiedText(type);
      setTimeout(() => setCopiedText(''), 2000);
    })
    .catch(err => {
      console.error('Failed to copy!', err);
    });
};


  const handleResumeClick = () => {
    window.open(resumeUrl, '_blank');
  };

  const openGalleryModal = (item: GalleryItem) => {
    setSelectedGalleryItem(item);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const closeGalleryModal = () => {
    setSelectedGalleryItem(null);
  };

 const openProjectModal = (project: Project) => {
  setSelectedProject(project);
  setCurrentImageIndex(0);
};

  const closeProjectModal = () => {
    setSelectedProject(null);
  };
  
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-black rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-black rotate-12"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border-2 border-black rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-20 h-20 bg-black transform skew-x-12"></div>
        </div>
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
           <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                KENNETH
                <br />
                <span className="text-serif">RIVERA</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute left-0 top-1/2 w-16 h-px bg-black"></div>
              <p className="text-xl md:text-2xl font-light tracking-wide pl-24">
                Computer Science 
              </p>
              <p className="text-lg md:text-xl font-light tracking-wide pl-24 mt-2">
                Aspiring Data Analyst
              </p>
              <div className="absolute right-0 top-1/2 w-16 h-px bg-black"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 backgroundImage: `repeating-linear-gradient(
                   45deg,
                   transparent,
                   transparent 20px,
                   white 20px,
                   white 21px
                 )`
               }}>
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black mb-16 text-center tracking-tight"
            >
              ABOUT
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-white"></div>
                  <div className="space-y-6 text-lg leading-relaxed font-light">
                    <p>
                     I&apos;m a dedicated Computer Science major with a strong foundation in programming, data analytics, and problem-solving. Known for my adaptability and eagerness to learn, I thrive in dynamic environments where I can grow both technically and personally.
                    </p>
                    <p>
                     My journey in tech is fueled by a deep curiosity about how data shapes the world and how innovative solutions can improve everyday life. Whether I&apos;m debugging code, analyzing datasets, or collaborating on projects, I aim to build skills that make a real impact.
                    </p>
                    <p>
                      I&apos;m actively seeking opportunities to gain hands-on experience, sharpen my technical expertise, and develop the interpersonal skills needed to succeed in the fast-paced IT industry.
                    </p>
                  </div>
                </div>
                
                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-8 pt-8 border-t border-white/20"
                >
                  <div className="text-center">
                    <div className="text-3xl font-black">4+</div>
                    <div className="text-sm font-light opacity-80">Years Learning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black">10+</div>
                    <div className="text-sm font-light opacity-80">Technologies</div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  {/* Decorative borders */}
                  <div className="absolute -inset-8 border-2 border-white/30 rotate-3"></div>
                  <div className="absolute -inset-4 border-2 border-white/20 -rotate-2"></div>
                  
                  {/* Profile photo container */}
                  <div className="w-80 h-80 bg-white/10 backdrop-blur-sm border-2 border-white/30 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    
                    {/* Profile photo */}
                    <Image 
                      src={profilePhoto}
                      alt="Mike Rivera - Computer Science Student"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover relative z-10"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        const img = e.target as HTMLElement;
                        img.style.display = 'none';
                        if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                          img.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    
                    {/* Fallback placeholder (hidden by default) */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/60 text-lg font-light z-10" style={{display: 'none'}}>
                      <span>Add Your Photo</span>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-4 h-4 border-2 border-white/40 z-20"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/40 z-20"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `
                 linear-gradient(black 1px, transparent 1px),
                 linear-gradient(90deg, black 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black mb-16 text-center tracking-tight"
          >
            SKILLS
          </motion.h2>
          <SkillsSection />
        </div>
      </section>
{/* Projects Section */}
      <section className="py-24 bg-white text-black relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
               backgroundSize: '30px 30px'
             }}>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
              PROJECTS
            </h2>
            <p className="text-xl font-light max-w-2xl mx-auto">
              Showcasing my technical projects and development work
            </p>
            <div className="w-24 h-1 bg-black mx-auto mt-8"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer h-full flex flex-col"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden bg-white border-2 border-black transition-all duration-300 group-hover:border-gray-600 group-hover:shadow-xl flex-1 flex flex-col">
                  {/* Image container */}
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    {project.imageUrls && project.imageUrls.length > 0 ? (
                      <Image
                        src={project.imageUrls[0]}
                        alt={project.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4Ij5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPgo=';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-light">
                        Project Image
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <FiEye size={32} className="mx-auto mb-2" />
                        <p className="text-sm font-light">View Details</p>
                      </div>
                    </div>

                    {/* Multiple images indicator */}
                    {project.imageUrls && project.imageUrls.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide">
                        {project.imageUrls.length} Images
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black mb-3 tracking-tight uppercase group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 text-sm font-light line-clamp-3 mb-4 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs font-bold bg-black text-white px-2 py-1 tracking-wide uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-xs font-bold bg-gray-400 text-white px-2 py-1 tracking-wide uppercase">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 text-sm mt-auto">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-bold text-black hover:text-gray-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub size={14} />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-bold text-black hover:text-gray-600 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiExternalLink size={14} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-2 left-2 w-2 h-2 border border-black/30"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-black/30"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white border-4 border-black max-w-5xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-black tracking-tight">{selectedProject.title}</h3>
                  <p className="text-sm opacity-80">Project Details</p>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="hover:bg-white/20 p-2 rounded transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-160px)]">
                {/* Image Gallery with Navigation */}
                {selectedProject.imageUrls && selectedProject.imageUrls.length > 0 && (
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 overflow-hidden relative">
                      <Image
                        src={selectedProject.imageUrls[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="w-full h-full object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDgwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMjI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4Ij5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPgo=';
                        }}
                      />

                      {/* Navigation buttons - only show if multiple images */}
                      {selectedProject.imageUrls.length > 1 && (
                        <>
                          {/* Previous button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => 
                                prev === 0 ? selectedProject.imageUrls.length - 1 : prev - 1
                              );
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-3 transition-all duration-200 hover:scale-110"
                            aria-label="Previous image"
                          >
                            <FiChevronLeft size={24} />
                          </button>

                          {/* Next button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => 
                                prev === selectedProject.imageUrls.length - 1 ? 0 : prev + 1
                              );
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-3 transition-all duration-200 hover:scale-110"
                            aria-label="Next image"
                          >
                            <FiChevronRight size={24} />
                          </button>

                          {/* Image counter */}
                          <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 text-sm font-bold">
                            {currentImageIndex + 1} / {selectedProject.imageUrls.length}
                          </div>

                          {/* Image dots indicator */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {selectedProject.imageUrls.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  index === currentImageIndex 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Thumbnail strip for multiple images */}
                    {selectedProject.imageUrls.length > 1 && (
                      <div className="p-4 bg-gray-50 border-t">
                        <div className="flex gap-2 overflow-x-auto">
                          {selectedProject.imageUrls.map((imageUrl, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                              }}
                              className={`flex-shrink-0 w-16 h-16 relative overflow-hidden border-2 transition-all duration-200 ${
                                index === currentImageIndex 
                                  ? 'border-black scale-105' 
                                  : 'border-gray-300 hover:border-gray-500'
                              }`}
                            >
                              <Image
                                src={imageUrl}
                                alt={`${selectedProject.title} thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="64px"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjMyIiB5PSIzMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGZpbGw9IiM5Q0EzQUYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCI+SW1nPC90ZXh0Pjwvc3ZnPgo=';
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{selectedProject.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h5 className="font-bold text-lg mb-3">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="text-sm font-bold bg-black text-white px-3 py-1 tracking-wide uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-4 border-t flex gap-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-bold text-sm hover:bg-gray-800 transition-colors"
                      >
                        <FiGithub size={16} />
                        View Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-black text-black px-4 py-2 font-bold text-sm hover:bg-black hover:text-white transition-colors"
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-3 h-3 border-2 border-white"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-white"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white rotate-45"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
         <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
              GALLERY
            </h2>
            <p className="text-xl font-light max-w-2xl mx-auto">
              Showcasing my achievements, certifications, and memorable moments
            </p>
            <div className="w-24 h-1 bg-white mx-auto mt-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer h-full flex flex-col"
                onClick={() => openGalleryModal(item)}
              >
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10 flex-1 flex flex-col">
                  {/* Image container */}
                  <div className="aspect-square relative overflow-hidden bg-gray-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMjAyMDIwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0iIzgwODA4MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2Ij5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPgo=';
                      }}
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <FiZoomIn size={32} className="mx-auto mb-2" />
                        <p className="text-sm font-light">View Details</p>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 text-xs font-bold uppercase tracking-wide">
                      {item.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm font-light line-clamp-2 flex-1">
                      {item.description}
                    </p>
                    {item.date && (
                      <p className="text-white/50 text-xs mt-2 font-light">
                        {item.date}
                      </p>
                    )}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-2 left-2 w-2 h-2 border border-white/30"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-white/30"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeGalleryModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white border-4 border-black max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-black tracking-tight">{selectedGalleryItem.title}</h3>
                  <p className="text-sm opacity-80">{selectedGalleryItem.category}</p>
                </div>
                <button
                  onClick={closeGalleryModal}
                  className="hover:bg-white/20 p-2 rounded transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-160px)]">
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <Image
                    src={selectedGalleryItem.image}
                    alt={selectedGalleryItem.title}
                    fill
                    className="w-full h-full object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjMwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0iIzlDQTNBRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4Ij5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPgo=';
                    }}
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{selectedGalleryItem.title}</h4>
                    {selectedGalleryItem.date && (
                      <p className="text-gray-600 text-sm font-light mb-4">{selectedGalleryItem.date}</p>
                    )}
                    <p className="text-gray-700 leading-relaxed">{selectedGalleryItem.description}</p>
                  </div>

                  {selectedGalleryItem.details && (
                    <div>
                      <h5 className="font-bold text-lg mb-2">Details</h5>
                      <p className="text-gray-700 leading-relaxed">{selectedGalleryItem.details}</p>
                    </div>
                  )}

                  {selectedGalleryItem.link && (
                    <div className="pt-4 border-t">
                      <a
                        href={selectedGalleryItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 font-bold text-sm hover:bg-gray-800 transition-colors"
                      >
                        <FiExternalLink size={16} />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-3 h-3 border-2 border-white"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-white"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-white transform rotate-45"></div>
          <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-white transform -rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">
              LET&apos;S CONNECT
            </h2>
            <p className="text-xl font-light mb-12 max-w-2xl mx-auto">
              Ready to turn data into insights? Let&apos;s build something amazing together.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => setShowContactModal(true)}
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 border-2 border-white font-bold text-lg tracking-wide transition-all duration-300 hover:shadow-lg"
              >
                GET IN TOUCH
              </motion.button>
              
              <motion.button
                onClick={handleResumeClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-white text-black font-bold text-lg tracking-wide transition-all duration-300 hover:shadow-lg"
              >
                VIEW RESUME
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowContactModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white border-4 border-black max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
                <h3 className="text-xl font-black tracking-tight">CONTACT INFO</h3>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="hover:bg-white/20 p-1 rounded transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Phone */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black text-white">
                      <FiPhone size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone</div>
                      <div className="font-bold">{contactInfo.phone}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                    className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-100 transition-all"
                    title="Copy phone number"
                  >
                    <FiCopy size={16} />
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black text-white">
                      <FiMail size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email</div>
                      <div className="font-bold">{contactInfo.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-100 transition-all"
                    title="Copy email"
                  >
                    <FiCopy size={16} />
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-black text-white">
                      <FiLinkedin size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">LinkedIn</div>
                      <div className="font-bold text-sm">{contactInfo.linkedin}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`https://${contactInfo.linkedin}`, 'linkedin')}
                    className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-100 transition-all"
                    title="Copy LinkedIn URL"
                  >
                    <FiCopy size={16} />
                  </button>
                </div>

                {/* Copy Feedback */}
                {copiedText && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-2 bg-green-100 text-green-800 font-bold text-sm"
                  >
                    {copiedText.charAt(0).toUpperCase() + copiedText.slice(1)} copied to clipboard!
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t-2 border-black">
                <p className="text-center text-sm text-gray-600 font-light">
                  Click any item to copy to clipboard
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-3 h-3 border-2 border-white"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 bg-white"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
  .text-outline {
    -webkit-text-stroke: 2px black;
    -webkit-text-fill-color: transparent;
  }
  
  :global(html) {
    overflow-x: hidden;
  }
`}</style>
    </div>
  );
}