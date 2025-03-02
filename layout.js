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
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">${navLinks}</div>
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
                    </div>
                </div>
            </nav>
            <main class="animate-fadeIn w-full">
                ${content}
            </main>
            <footer class="bg-white/70 dark:bg-gray-900/80 border-t border-white/20 dark:border-gray-700/20 py-8 mt-12 w-full">
                <div class="container mx-auto px-4 text-center">
                    <p class="text-gray-600 dark:text-gray-400">© ${new Date().getFullYear()} Osama Zinhom. All rights reserved.</p>
                    <div class="flex justify-center space-x-4 mt-4">
                        <a href="mailto:osamazinhomzidan@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        </a>
                        <a href="https://github.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="https://behance.net" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
                        </a>
                    </div>
                </div>
            </footer>
            
            <script>
                // Dark mode toggle functionality
                document.getElementById('darkModeToggle').addEventListener('click', function() {
                    document.documentElement.classList.toggle('dark');
                    
                    // Save preference to localStorage
                    if (document.documentElement.classList.contains('dark')) {
                        localStorage.setItem('darkMode', 'enabled');
                    } else {
                        localStorage.setItem('darkMode', 'disabled');
                    }
                });
                
                // Check for saved dark mode preference
                if (localStorage.getItem('darkMode') === 'enabled') {
                    document.documentElement.classList.add('dark');
                } else if (localStorage.getItem('darkMode') === 'disabled') {
                    document.documentElement.classList.remove('dark');
                } else {
                    // If no preference is saved, check system preference
                    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        document.documentElement.classList.add('dark');
                    }
                }
            </script>
        </div>
    `;
}

// Initialize layout and routing
async function initializeApp() {
    const root = document.getElementById('root');
    const pages = ['/', '/about', '/projects', '/experience', '/contact'];

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

    async function loadPage(path) {
        try {
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
                darkModeToggle.addEventListener('click', function() {
                    document.documentElement.classList.toggle('dark');
                    
                    // Save preference to localStorage
                    if (document.documentElement.classList.contains('dark')) {
                        localStorage.setItem('darkMode', 'enabled');
                    } else {
                        localStorage.setItem('darkMode', 'disabled');
                    }
                });
            }
        } catch (error) {
            console.error('Error loading page:', error);
            root.innerHTML = '<div class="text-red-500 dark:text-red-400">Error loading page</div>';
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

// Start the application
initializeApp();

document.addEventListener('DOMContentLoaded', async () => {
    const root = document.getElementById('root');
    
    // Define available pages with new URL-style paths
    const pages = ['/', '/about', '/projects', '/experience', '/contact'];
    
    // Initial render with home page
    const HomePage = (await import('./pages/page.js')).default;
    root.innerHTML = Layout(HomePage(), pages);

    // Handle navigation
    document.addEventListener('click', async (e) => {
        if (e.target.matches('[data-page]')) {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            
            try {
                let modulePath;
                if (page === '/') {
                    modulePath = './pages/page.js';
                } else {
                    const pageName = page.substring(1);
                    modulePath = `./pages/${pageName}/page.js`;
                }
                
                const module = await import(modulePath);
                const content = await module.default();
                root.innerHTML = Layout(content, pages);
                
                window.location.hash = page;
            } catch (error) {
                console.error('Error loading page:', error);
            }
        }
    });
    
    // Handle initial load based on URL hash
    const initialPage = window.location.hash.slice(1) || '/';
    const pageLink = document.querySelector(`[data-page="${initialPage}"]`);
    if (pageLink) {
        pageLink.click();
    }
});

