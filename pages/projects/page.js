import React, { useEffect } from 'react';

export default function Projects() {
    useEffect(() => {
        // Reveal animations for text elements
        const revealElements = document.querySelectorAll('.reveal-text, .reveal-text-delay');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(element => {
            observer.observe(element);
        });
        
        return () => {
            revealElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return `
        <div class="page min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <h1 class="text-4xl font-bold text-indigo-600 mb-8 reveal-text">My Projects</h1>
                <p class="text-gray-600 text-lg mb-12 max-w-3xl reveal-text-delay">
                    Explore a selection of my most significant projects. Each project demonstrates my expertise in 
                    different technologies and my approach to solving complex problems.
                </p>
                
                <!-- Featured Projects Section -->
                <div class="mb-20">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center reveal-text">Featured Projects</h2>
                    <div class="featured-projects-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <!-- BiteProof Platform -->
                        <div class="featured-project-card glass-card overflow-hidden group">
                            <div class="relative h-64 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                                <div class="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <h3 class="text-3xl font-bold text-white tracking-wider transform group-hover:translate-y-[-10px] transition-transform duration-500">BiteProof Platform</h3>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-md bg-black/30">
                                    <p class="font-medium mb-2">TPS, UK (Expected 2025)</p>
                                    <p>A comprehensive platform for food safety management and compliance tracking.</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="mb-4">
                                    <h4 class="text-xl font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                                    <ul class="text-gray-600 space-y-2 pl-5 list-disc">
                                        <li>Designed and implemented the user dashboard with real-time analytics</li>
                                        <li>Developed the compliance tracking system with automated alerts</li>
                                        <li>Created a responsive mobile interface for field inspections</li>
                                        <li>Integrated with third-party APIs for regulatory updates</li>
                                    </ul>
                                </div>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="project-tag">ReactJS</span>
                                    <span class="project-tag">NodeJS</span>
                                    <span class="project-tag">MongoDB</span>
                                    <span class="project-tag">ExpressJS</span>
                                    <span class="project-tag">Tailwind CSS</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">Expected Publication: 2025</span>
                                    <button class="project-button">
                                        <span>Learn More</span>
                                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Push Social Platform -->
                        <div class="featured-project-card glass-card overflow-hidden group">
                            <div class="relative h-64 overflow-hidden">
                                <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 transform group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                                <div class="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-700"></div>
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <h3 class="text-3xl font-bold text-white tracking-wider transform group-hover:translate-y-[-10px] transition-transform duration-500">Push Social Platform</h3>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-md bg-black/30">
                                    <p class="font-medium mb-2">TPS, UK (Expected 2025)</p>
                                    <p>A next-generation social media platform focused on content creators and influencers.</p>
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="mb-4">
                                    <h4 class="text-xl font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                                    <ul class="text-gray-600 space-y-2 pl-5 list-disc">
                                        <li>Architected the content recommendation engine using AI algorithms</li>
                                        <li>Built the creator analytics dashboard with monetization insights</li>
                                        <li>Implemented real-time messaging and notification systems</li>
                                        <li>Designed the mobile-first UI/UX with focus on engagement</li>
                                    </ul>
                                </div>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="project-tag">NextJS</span>
                                    <span class="project-tag">NodeJS</span>
                                    <span class="project-tag">GraphQL</span>
                                    <span class="project-tag">AWS</span>
                                    <span class="project-tag">TensorFlow</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">Expected Publication: 2025</span>
                                    <button class="project-button">
                                        <span>Learn More</span>
                                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Other Notable Projects -->
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center reveal-text">Other Notable Projects</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Salem Ventures Platform -->
                        <div class="other-project-card glass-card p-6 group">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Salem Ventures Platform</h3>
                                    <p class="text-gray-600 text-sm">Salem Ventures</p>
                                </div>
                                <div class="project-icon-container">
                                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4">A comprehensive investment management platform for venture capital firms.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="project-tag-small">ReactJS</span>
                                <span class="project-tag-small">NodeJS</span>
                                <span class="project-tag-small">MongoDB</span>
                            </div>
                            <div class="project-overlay"></div>
                        </div>
                        
                        <!-- Trading Socio -->
                        <div class="other-project-card glass-card p-6 group">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Trading Socio</h3>
                                    <p class="text-gray-600 text-sm">Salem Ventures</p>
                                </div>
                                <div class="project-icon-container">
                                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4">A social trading platform connecting investors with expert traders.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="project-tag-small">NextJS</span>
                                <span class="project-tag-small">ExpressJS</span>
                                <span class="project-tag-small">PostgreSQL</span>
                            </div>
                            <div class="project-overlay"></div>
                        </div>
                        
                        <!-- Salem Foods -->
                        <div class="other-project-card glass-card p-6 group">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Salem Foods</h3>
                                    <p class="text-gray-600 text-sm">Salem Ventures</p>
                                </div>
                                <div class="project-icon-container">
                                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4">An e-commerce platform for specialty food products with subscription options.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="project-tag-small">ReactJS</span>
                                <span class="project-tag-small">Firebase</span>
                                <span class="project-tag-small">Stripe</span>
                            </div>
                            <div class="project-overlay"></div>
                        </div>
                        
                        <!-- RoyalRide App -->
                        <div class="other-project-card glass-card p-6 group">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">RoyalRide App</h3>
                                    <p class="text-gray-600 text-sm">Neuss, Jordan</p>
                                </div>
                                <div class="project-icon-container">
                                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4">A premium ride-sharing application with luxury vehicle options.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="project-tag-small">React Native</span>
                                <span class="project-tag-small">NodeJS</span>
                                <span class="project-tag-small">MongoDB</span>
                            </div>
                            <div class="project-overlay"></div>
                        </div>
                        
                        <!-- HR-Academy App -->
                        <div class="other-project-card glass-card p-6 group">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">HR-Academy App</h3>
                                    <p class="text-gray-600 text-sm">Neuss, Jordan</p>
                                </div>
                                <div class="project-icon-container">
                                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4">A learning management system for HR professionals with certification tracking.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="project-tag-small">Angular</span>
                                <span class="project-tag-small">ExpressJS</span>
                                <span class="project-tag-small">MySQL</span>
                            </div>
                            <div class="project-overlay"></div>
                        </div>
                        
                        <!-- Neuss Platform -->
                        <div class="other-project-card glass-card p-6 group">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">Neuss Platform</h3>
                                    <p class="text-gray-600 text-sm">Neuss, Jordan</p>
                                </div>
                                <div class="project-icon-container">
                                    <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4">A comprehensive business management platform for SMEs in the Middle East.</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="project-tag-small">ReactJS</span>
                                <span class="project-tag-small">NodeJS</span>
                                <span class="project-tag-small">Oracle DB</span>
                            </div>
                            <div class="project-overlay"></div>
                        </div>
                    </div>
                </div>
                
                <!-- Let's Work Together Section -->
                <div class="mt-20">
                    <div class="lets-work-together glass-card p-10 relative overflow-hidden">
                        <div class="relative z-10">
                            <h2 class="text-3xl font-bold text-white mb-4 reveal-text">Let's Work Together</h2>
                            <p class="text-white/90 text-lg mb-8 max-w-2xl reveal-text-delay">
                                Have a project in mind? I'm always open to discussing new opportunities and challenges.
                                Let's create something amazing together.
                            </p>
                            <div class="flex flex-wrap gap-4">
                                <a href="#/contact" class="cta-button primary">
                                    <span>Get in Touch</span>
                                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                                <a href="#/about" class="cta-button secondary">
                                    <span>Learn More About Me</span>
                                </a>
                            </div>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700"></div>
                        <div class="absolute inset-0 bg-pattern opacity-10"></div>
                        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                    </div>
                </div>
            </div>
        </div>

        <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Reveal animations for text elements
                const revealElements = document.querySelectorAll('.reveal-text, .reveal-text-delay');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                
                revealElements.forEach(el => {
                    observer.observe(el);
                });
                
                // Project cards hover effects
                const projectCards = document.querySelectorAll('.other-project-card');
                
                projectCards.forEach(card => {
                    card.addEventListener('mouseenter', function() {
                        this.classList.add('hovered');
                    });
                    
                    card.addEventListener('mouseleave', function() {
                        this.classList.remove('hovered');
                    });
                });
            });
        </script>
    `;
} 