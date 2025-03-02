// Layout component that wraps all pages
export function Layout(content, pages = []) {
    const navLinks = pages
        .map(page => {
            const displayName = page === '/' ? 'Home' : page.replace('/', '').charAt(0).toUpperCase() + page.replace('/', '').slice(1);
            return `<a href="#" data-page="${page}" class="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">${displayName}</a>`;
        })
        .join('');

    return `
        <div class="app-container min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
            <nav class="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 shadow-lg border border-white/20 dark:border-gray-700/20 p-4 mb-6 transition-all duration-300 w-full">
                <div class="container mx-auto flex items-center justify-between">
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="#/" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Osama</a>
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center space-x-4 rtl:space-x-reverse">${navLinks}</div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button id="darkModeToggle" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <svg id="sunIcon" class="w-6 h-6 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                            <svg id="moonIcon" class="w-6 h-6 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                            </svg>
                        </button>
                        <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        
                        <!-- Mobile menu button -->
                        <button id="mobileMenuButton" class="md:hidden text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <svg id="menuIcon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <svg id="closeIcon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Navigation Menu -->
                <div id="mobileMenu" class="mobile-menu-hidden md:hidden">
                    <div class="flex flex-col space-y-2 px-4 py-2 border-t border-gray-200 dark:border-gray-700 mt-4">
                        ${navLinks}
                    </div>
                </div>
            </nav>
            
            ${content}
            
            <footer class="bg-white/70 dark:bg-gray-900/80 backdrop-blur-lg border-t border-white/20 dark:border-gray-700/20 py-8 mt-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-4 md:mb-0">
                            <p class="text-gray-600 dark:text-gray-400">&copy; ${new Date().getFullYear()} Osama Zinhom. All rights reserved.</p>
                        </div>
                        <div class="flex space-x-4">
                            <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            <a href="mailto:contact@example.com" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        
        <script>
            // Function to toggle dark mode
            function toggleDarkMode() {
                document.documentElement.classList.toggle('dark');
                
                // Save preference to localStorage
                if (document.documentElement.classList.contains('dark')) {
                    localStorage.setItem('darkMode', 'enabled');
                } else {
                    localStorage.setItem('darkMode', 'disabled');
                }
            }
            
            // Simple toggle function for mobile menu
            function toggleMobileMenu() {
                const mobileMenu = document.getElementById('mobileMenu');
                const menuIcon = document.getElementById('menuIcon');
                const closeIcon = document.getElementById('closeIcon');
                
                if (mobileMenu && menuIcon && closeIcon) {
                    if (mobileMenu.classList.contains('mobile-menu-hidden')) {
                        // Show menu
                        mobileMenu.classList.remove('mobile-menu-hidden');
                        mobileMenu.classList.add('mobile-menu-visible');
                        menuIcon.classList.add('hidden');
                        closeIcon.classList.remove('hidden');
                    } else {
                        // Hide menu
                        mobileMenu.classList.remove('mobile-menu-visible');
                        mobileMenu.classList.add('mobile-menu-hidden');
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                    }
                }
            }
            
            // Attach event listeners when DOM is loaded
            document.addEventListener('DOMContentLoaded', function() {
                // Mobile menu toggle
                const mobileMenuButton = document.getElementById('mobileMenuButton');
                if (mobileMenuButton) {
                    mobileMenuButton.addEventListener('click', function(e) {
                        e.preventDefault();
                        toggleMobileMenu();
                    });
                }
                
                // Close mobile menu when a link is clicked
                const mobileLinks = document.querySelectorAll('#mobileMenu a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', function() {
                        toggleMobileMenu();
                    });
                });
                
                // Dark mode toggle
                const darkModeToggle = document.getElementById('darkModeToggle');
                if (darkModeToggle) {
                    darkModeToggle.addEventListener('click', function() {
                        toggleDarkMode();
                    });
                }
            });
        </script>
    `;
}

// Initialize layout and routing
async function initializeApp() {
    const root = document.getElementById('root');
    const pages = ['/', '/about', '/projects', '/experience', '/contact'];

    // Add a class to the body to indicate JS is loading
    document.body.classList.add('js-loading');

    // Function to load and inject page-specific styles
    function loadPageStyles(path) {
        // Remove any previously loaded page-specific styles
        const existingStyles = document.querySelectorAll('link[data-page-style]');
        existingStyles.forEach(style => style.remove());

        // Determine the style path based on the current page
        const stylePath = path === '/' ? './pages/style.css' : `./pages${path}/style.css`;

        // Create and inject the new style element
        const styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.href = stylePath;
        styleLink.setAttribute('data-page-style', 'true');
        document.head.appendChild(styleLink);
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        
        // Save preference to localStorage
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    async function loadPage(path) {
        try {
            // Add loading state
            document.body.classList.add('js-loading');
            
            // Load page-specific styles
            loadPageStyles(path);

            // Load page content
            const pagePath = path === '/' ? './pages/page.js' : `./pages${path}/page.js`;
            const pageModule = await import(pagePath);
            const pageContent = pageModule.default();
            
            // Render the page with layout
            root.innerHTML = Layout(pageContent, pages);

            // Update active state in navigation
            document.querySelectorAll('nav a').forEach(link => {
                if (link.dataset.page === path) {
                    link.classList.add('text-purple-600', 'dark:text-purple-400');
                } else {
                    link.classList.remove('text-purple-600', 'dark:text-purple-400');
                }
            });
            
            // Initialize dark mode toggle after page load
            const darkModeToggle = document.getElementById('darkModeToggle');
            if (darkModeToggle) {
                // Remove any existing event listeners
                const newDarkModeToggle = darkModeToggle.cloneNode(true);
                darkModeToggle.parentNode.replaceChild(newDarkModeToggle, darkModeToggle);
                
                // Add new event listener
                newDarkModeToggle.addEventListener('click', toggleDarkMode);
            }
            
            // Initialize mobile menu toggle
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const mobileMenu = document.getElementById('mobileMenu');
            const menuIcon = document.getElementById('menuIcon');
            const closeIcon = document.getElementById('closeIcon');
            
            if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
                // Remove any existing event listeners
                const newMobileMenuButton = mobileMenuButton.cloneNode(true);
                mobileMenuButton.parentNode.replaceChild(newMobileMenuButton, mobileMenuButton);
                
                // Add new event listener
                newMobileMenuButton.addEventListener('click', function() {
                    if (mobileMenu.classList.contains('mobile-menu-hidden')) {
                        // Show menu
                        mobileMenu.classList.remove('mobile-menu-hidden');
                        mobileMenu.classList.add('mobile-menu-visible');
                        menuIcon.classList.add('hidden');
                        closeIcon.classList.remove('hidden');
                    } else {
                        // Hide menu
                        mobileMenu.classList.remove('mobile-menu-visible');
                        mobileMenu.classList.add('mobile-menu-hidden');
                        menuIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                    }
                });
            }
            
            // Initialize reveal animations
            setTimeout(() => {
                const revealElements = document.querySelectorAll('.reveal-text, .reveal-text-delay');
                
                if (revealElements.length > 0) {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('revealed');
                            }
                        });
                    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
                    
                    revealElements.forEach(element => {
                        observer.observe(element);
                    });
                    
                    // Force reveal all elements after a delay
                    setTimeout(() => {
                        revealElements.forEach(element => {
                            element.classList.add('revealed');
                        });
                        // Remove loading state
                        document.body.classList.remove('js-loading');
                    }, 500);
                } else {
                    // Remove loading state if no reveal elements
                    document.body.classList.remove('js-loading');
                }
            }, 100);
            
        } catch (error) {
            console.error('Error loading page:', error);
            root.innerHTML = Layout(`
                <div class="container mx-auto px-4 py-12 text-center">
                    <h1 class="text-4xl font-bold mb-4 text-red-600">Error Loading Page</h1>
                    <p class="mb-8">Sorry, there was a problem loading the requested page.</p>
                    <button onclick="window.location.hash = '/'" class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                        Go Home
                    </button>
                </div>
            `, pages);
            // Remove loading state
            document.body.classList.remove('js-loading');
        }
    }

    // Set up navigation event listeners
    root.addEventListener('click', (e) => {
        if (e.target.matches('[data-page]')) {
            e.preventDefault();
            const path = e.target.dataset.page;
            window.location.hash = path;
        }
    });

    // Handle initial load and navigation
    window.addEventListener('hashchange', () => {
        const path = window.location.hash.slice(1) || '/';
        loadPage(path);
    });

    // Load initial page
    const initialPath = window.location.hash.slice(1) || '/';
    loadPage(initialPath);
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

