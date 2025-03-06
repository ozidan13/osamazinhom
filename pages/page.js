export default function HomePage() {
    const pageContent = `
        <div class="page">
            <!-- Loading animation -->
            <div class="loading-bar"></div>
            
            <!-- Hero Section - Full Screen -->
            <section class="hero-section w-full">
                <!-- Animated background elements -->
                <div class="hero-bg-element"></div>
                <div class="hero-bg-element"></div>
                <div class="hero-bg-element"></div>
                
                <!-- Particle effects -->
                <div class="hero-particles">
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                </div>
                
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div class="flex flex-col items-center text-center">
                        <div class="profile-image-container relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-xl mb-8">
                            <img src="./assets/profile.png" alt="Osama Zinhom" class="w-full h-full object-cover" />
                            <div class="absolute inset-0 gradient-overlay opacity-20"></div>
                        </div>
                        
                        <div class="max-w-3xl mx-auto">
                            <h1 class="hero-title text-5xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-6xl md:text-7xl mb-4">
                                <span class="block gradient-text">Osama Zinhom</span>
                                <span class="hero-subtitle block text-gray-600 dark:text-gray-300 text-2xl mt-3 blue-glow-text">Senior Software Engineer</span>
                            </h1>
                            <p class="hero-description mt-3 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl">
                                Results-driven Senior Software Engineer with over <span class="blue-glow-text">7 years of expertise</span> in developing intuitive, 
                                user-friendly, and scalable web applications. Adept at using modern technologies like <span class="blue-glow-text">MERN Stack</span>, 
                                <span class="blue-glow-text">UI/UX design</span>, and <span class="blue-glow-text">cloud-based solutions</span>.
                            </p>
                            <div class="hero-cta mt-8 flex flex-wrap justify-center gap-4">
                                <a href="#/contact" class="px-8 py-3 rounded-md bg-indigo-600 dark:bg-indigo-500 text-white font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300 transform hover:scale-105">
                                    Contact Me
                                </a>
                                <a href="#/projects" class="px-8 py-3 rounded-md bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Scroll indicator -->
                <div class="scroll-indicator">
                    <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </section>

            <!-- Skills Section -->
            <section class="skills-section w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white dark:from-gray-900 to-indigo-50 dark:to-gray-800">
                <div class="container mx-auto">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center reveal-text blue-glow-text">Technical Skills</h2>
                    <p class="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 reveal-text-delay">
                        My expertise spans across various technologies and tools, allowing me to deliver 
                        <span class="blue-glow-text">comprehensive solutions</span> from concept to deployment.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="skills-card glass-card dark:glass-card-dark p-6 hover:shadow-lg transition duration-300 parallax-element">
                            <div class="skill-icon-container mb-4">
                                <svg class="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Frontend Development</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="blue-glow-text">ReactJS & NextJS</span>
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    HTML5 & CSS3
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="blue-glow-text">Tailwind CSS</span>
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Material UI
                                </li>
                            </ul>
                        </div>
                        <div class="skills-card glass-card dark:glass-card-dark p-6 hover:shadow-lg transition duration-300 parallax-element">
                            <div class="skill-icon-container mb-4">
                                <svg class="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Backend Development</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    NodeJS
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    ExpressJS
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    MongoDB
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    SQL
                                </li>
                            </ul>
                        </div>
                        <div class="skills-card glass-card dark:glass-card-dark p-6 hover:shadow-lg transition duration-300 parallax-element">
                            <div class="skill-icon-container mb-4">
                                <svg class="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">UI/UX & Tools</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Figma & Adobe XD
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Adobe Photoshop
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Git & Jira
                                </li>
                                <li class="flex items-center text-gray-600 dark:text-gray-300">
                                    <svg class="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Azure
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Projects Section -->
            <section class="projects-section w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <div class="container mx-auto">
                    <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center reveal-text blue-glow-text">Featured Projects</h2>
                    <p class="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12 reveal-text-delay">
                        Explore some of my recent work showcasing my expertise in 
                        <span class="blue-glow-text">web development</span>, 
                        <span class="blue-glow-text">UI/UX design</span>, and 
                        <span class="blue-glow-text">problem-solving</span>.
                    </p>
                    <div class="featured-projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="featured-project-card glass-card dark:glass-card-dark overflow-hidden relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90 z-10"></div>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="BiteProof Platform" class="absolute inset-0 w-full h-full object-cover" />
                            <div class="relative z-20 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <h3 class="text-2xl font-bold text-white mb-2">BiteProof Platform</h3>
                                    <p class="text-white text-opacity-90 mb-4">AI-based platform for data analysis and user insights</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="project-tag">ReactJS</span>
                                        <span class="project-tag">NextJS</span>
                                        <span class="project-tag">NodeJS</span>
                                        <span class="project-tag">AI</span>
                                    </div>
                                </div>
                                <div class="mt-auto">
                                    <p class="text-white text-opacity-80 mb-4">
                                        <strong>Key contributions:</strong> Led frontend development, implemented AI-driven analytics dashboard, optimized performance
                                    </p>
                                    <a href="#/projects" class="project-button">
                                        View Project
                                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="featured-project-card glass-card dark:glass-card-dark overflow-hidden relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-90 z-10"></div>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Push Social Platform" class="absolute inset-0 w-full h-full object-cover" />
                            <div class="relative z-20 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <h3 class="text-2xl font-bold text-white mb-2">Push Social Platform</h3>
                                    <p class="text-white text-opacity-90 mb-4">Interactive dashboards and real-time data features</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="project-tag">Material UI</span>
                                        <span class="project-tag">Tailwind CSS</span>
                                        <span class="project-tag">NodeJS</span>
                                        <span class="project-tag">ExpressJS</span>
                                    </div>
                                </div>
                                <div class="mt-auto">
                                    <p class="text-white text-opacity-80 mb-4">
                                        <strong>Key contributions:</strong> Designed UI/UX, built real-time data visualization, implemented responsive design
                                    </p>
                                    <a href="#/projects" class="project-button">
                                        View Project
                                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <a href="#/projects" class="inline-block px-8 py-4 rounded-md bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <span class="flex items-center">
                                View All Projects
                                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <!-- Contact CTA Section -->
            <section class="cta-section w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 dark:from-gray-800 to-white dark:to-gray-900">
                <div class="container mx-auto">
                    <div class="lets-work-together glass-card dark:glass-card-dark p-12 text-center relative overflow-hidden">
                        <div class="bg-pattern absolute inset-0 opacity-5"></div>
                        
                        <!-- Professional decorative elements -->
                        <div class="absolute top-0 left-0 w-32 h-32 bg-indigo-500 dark:bg-indigo-600 opacity-10 rounded-br-full"></div>
                        <div class="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 dark:bg-purple-600 opacity-10 rounded-tl-full"></div>
                        <div class="cta-particles"></div>
                        
                        <div class="relative z-10">
                            <div class="inline-block mb-6">
                                <div class="w-16 h-1 bg-indigo-500 dark:bg-indigo-400 mx-auto mb-2"></div>
                                <div class="w-10 h-1 bg-indigo-500 dark:bg-indigo-400 mx-auto"></div>
                            </div>
                            
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 reveal-text blue-glow-text">Let's Create Something Exceptional</h2>
                            
                            <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto reveal-text-delay leading-relaxed">
                                I'm currently available for <span class="blue-glow-text">freelance projects</span> and <span class="blue-glow-text">collaboration opportunities</span>. 
                                With expertise in modern web technologies and a passion for creating intuitive user experiences, 
                                I can help transform your vision into reality.
                            </p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
                                <div class="cta-feature-card p-5 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-indigo-100 dark:border-gray-700">
                                    <div class="text-indigo-600 dark:text-indigo-400 mb-3">
                                        <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Innovative Solutions</h3>
                                    <p class="text-gray-600 dark:text-gray-400 text-sm">Creative approaches to complex problems with cutting-edge technologies</p>
                                </div>
                                
                                <div class="cta-feature-card p-5 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-indigo-100 dark:border-gray-700">
                                    <div class="text-indigo-600 dark:text-indigo-400 mb-3">
                                        <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Timely Delivery</h3>
                                    <p class="text-gray-600 dark:text-gray-400 text-sm">Efficient project management with consistent communication and on-time delivery</p>
                                </div>
                                
                                <div class="cta-feature-card p-5 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-indigo-100 dark:border-gray-700">
                                    <div class="text-indigo-600 dark:text-indigo-400 mb-3">
                                        <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality Assurance</h3>
                                    <p class="text-gray-600 dark:text-gray-400 text-sm">Rigorous testing and attention to detail for robust, high-quality deliverables</p>
                                </div>
                            </div>
                            
                            <div class="flex flex-wrap justify-center gap-4">
                                <a href="#/contact" class="cta-button primary group">
                                    <span class="flex items-center">
                                        Start a Project
                                        <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </span>
                                </a>
                                <a href="#/projects" class="cta-button secondary group">
                                    <span class="flex items-center">
                                        View Portfolio
                                        <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <script>
                // Parallax effect for elements with the parallax-element class
                document.addEventListener('DOMContentLoaded', function() {
                    const parallaxElements = document.querySelectorAll('.parallax-element');
                    
                    document.addEventListener('mousemove', function(e) {
                        const x = e.clientX / window.innerWidth;
                        const y = e.clientY / window.innerHeight;
                        
                        parallaxElements.forEach(function(element) {
                            const speed = 20;
                            const xOffset = (x - 0.5) * speed;
                            const yOffset = (y - 0.5) * speed;
                            
                            element.style.transform = 'translate(' + xOffset + 'px, ' + yOffset + 'px)';
                        });
                    });
                    
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
                    
                    // Add blue glow effect to text elements on hover
                    const blueGlowElements = document.querySelectorAll('.blue-glow-text');
                    
                    blueGlowElements.forEach(element => {
                        element.addEventListener('mouseenter', function() {
                            this.style.textShadow = '0 0 20px rgba(79, 70, 229, 0.8)';
                            this.style.letterSpacing = '0.5px';
                        });
                        
                        element.addEventListener('mouseleave', function() {
                            this.style.textShadow = '0 0 15px rgba(79, 70, 229, 0.5)';
                            this.style.letterSpacing = 'normal';
                        });
                    });
                    
                    // Enhanced CTA section animations
                    enhanceCTASection();
                });
                
                // Function to enhance the CTA section with animations and effects
                function enhanceCTASection() {
                    const ctaSection = document.querySelector('.lets-work-together');
                    if (!ctaSection) return;
                    
                    // Create dynamic particles for CTA section
                    const ctaParticles = document.querySelector('.cta-particles');
                    if (ctaParticles) {
                        for (let i = 0; i < 5; i++) {
                            const particle = document.createElement('div');
                            particle.className = 'cta-particle';
                            particle.style.width = Math.random() * 10 + 5 + 'px';
                            particle.style.height = particle.style.width;
                            particle.style.borderRadius = '50%';
                            particle.style.position = 'absolute';
                            particle.style.background = 'linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(124, 58, 237, 0.2))';
                            particle.style.top = Math.random() * 100 + '%';
                            particle.style.left = Math.random() * 100 + '%';
                            particle.style.animation = 'ctaParticleFloat ' + (Math.random() * 10 + 10) + 's infinite linear';
                            particle.style.animationDelay = Math.random() * 5 + 's';
                            particle.style.opacity = '0.5';
                            particle.style.filter = 'blur(1px)';
                            ctaParticles.appendChild(particle);
                        }
                    }
                    
                    // Add hover effects to feature cards
                    const featureCards = document.querySelectorAll('.cta-feature-card');
                    featureCards.forEach((card, index) => {
                        // Staggered entrance animation
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100 + (index * 150));
                    });
                    
                    // Add hover effect to CTA buttons
                    const ctaButtons = document.querySelectorAll('.cta-button');
                    ctaButtons.forEach(button => {
                        button.addEventListener('mouseenter', function() {
                            const icon = this.querySelector('svg');
                            if (icon) {
                                icon.style.transform = 'translateX(4px)';
                            }
                        });
                        
                        button.addEventListener('mouseleave', function() {
                            const icon = this.querySelector('svg');
                            if (icon) {
                                icon.style.transform = 'translateX(0)';
                            }
                        });
                    });
                }
            </script>
        </div>
    `;
    
    // Initialize animations and interactions after the page is loaded
    setTimeout(() => {
        initHeroAnimations();
    }, 100);
    
    return pageContent;
}

// Function to initialize hero animations
function initHeroAnimations() {
    // Add more particles dynamically
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = Math.random() * 8 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDuration = Math.random() * 10 + 10 + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            heroParticles.appendChild(particle);
        }
    }
    
    // Add hover effects to profile image
    const profileImage = document.querySelector('.profile-image-container');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = '';
        });
    }
    
    // Add scroll functionality to the scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const skillsSection = document.querySelector('.skills-section');
            if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}
