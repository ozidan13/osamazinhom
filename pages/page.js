export default function HomePage() {
    return `
        <div class="page">
            <!-- Loading animation -->
            <div class="loading-bar"></div>
            
            <!-- Hero Section - Full Screen -->
            <section class="hero-section w-full">
                <!-- Animated background elements -->
                <div class="hero-bg-element"></div>
                <div class="hero-bg-element"></div>
                <div class="hero-bg-element"></div>
                
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div class="flex flex-col md:flex-row items-center justify-between">
                        <div class="md:w-1/2 mb-8 md:mb-0">
                            <h1 class="hero-title text-5xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-6xl md:text-7xl mb-4">
                                <span class="block gradient-text">Osama Zinhom</span>
                                <span class="hero-subtitle block text-gray-600 dark:text-gray-300 text-2xl mt-3 blue-glow-text">Senior Software Engineer</span>
                            </h1>
                            <p class="hero-description mt-3 text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl max-w-3xl">
                                Results-driven Senior Software Engineer with over <span class="blue-glow-text">5 years of expertise</span> in developing intuitive, 
                                user-friendly, and scalable web applications. Adept at using modern technologies like <span class="blue-glow-text">MERN Stack</span>, 
                                <span class="blue-glow-text">UI/UX design</span>, and <span class="blue-glow-text">cloud-based solutions</span>.
                            </p>
                            <div class="hero-cta mt-8 flex flex-wrap gap-4">
                                <a href="#/contact" class="px-8 py-3 rounded-md bg-indigo-600 dark:bg-indigo-500 text-white font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300 transform hover:scale-105">
                                    Contact Me
                                </a>
                                <a href="#/projects" class="px-8 py-3 rounded-md bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
                                    View Projects
                                </a>
                            </div>
                        </div>
                        <div class="md:w-1/2 flex justify-center">
                            <div class="profile-image-container relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-xl">
                                <img src="./assets/profile.png" alt="Osama Zinhom" class="w-full h-full object-cover" />
                                <div class="absolute inset-0 gradient-overlay opacity-20"></div>
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
                        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 reveal-text blue-glow-text">Let's Work Together</h2>
                        <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto reveal-text-delay">
                            Looking for a skilled software engineer to bring your ideas to life? I'm currently available for 
                            <span class="blue-glow-text">freelance work</span> and <span class="blue-glow-text">exciting opportunities</span>.
                        </p>
                        <div class="flex flex-wrap justify-center gap-4">
                            <a href="#/contact" class="cta-button primary">
                                <span class="flex items-center">
                                    Get in Touch
                                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </span>
                            </a>
                            <a href="#/projects" class="cta-button secondary">
                                <span class="flex items-center">
                                    View My Work
                                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                                    </svg>
                                </span>
                            </a>
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
                });
            </script>
        </div>
    `;
}