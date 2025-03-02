export default function Projects() {
    return `
        <div class="page min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <h1 class="text-4xl font-bold text-indigo-600 mb-8">My Projects</h1>
                <p class="text-gray-600 text-lg mb-12 max-w-3xl">
                    Explore a selection of my most significant projects. Each project demonstrates my expertise in 
                    different technologies and my approach to solving complex problems.
                </p>
                
                <!-- Featured Projects Section -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
                    <div class="grid grid-cols-1 gap-12">
                        <!-- BiteProof Platform -->
                        <div class="glass-card overflow-hidden">
                            <div class="md:flex">
                                <div class="md:w-1/3 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center p-8 md:p-0">
                                    <h3 class="text-3xl font-bold text-white text-center">BiteProof Platform</h3>
                                </div>
                                <div class="md:w-2/3 p-8">
                                    <div class="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 class="text-2xl font-bold text-gray-900">BiteProof Platform</h3>
                                            <p class="text-indigo-600">TPS, UK</p>
                                        </div>
                                        <div class="text-gray-500">Coming Q2 2025</div>
                                    </div>
                                    <p class="text-gray-600 mb-6">
                                        An AI-based platform for data analysis and user insights. This comprehensive solution 
                                        provides powerful analytics tools and intuitive visualizations for businesses.
                                    </p>
                                    <div class="mb-6">
                                        <h4 class="font-semibold text-gray-800 mb-2">Key Contributions:</h4>
                                        <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                            <li>Conducted comprehensive UX analysis and UI design</li>
                                            <li>Implemented front-end with ReactJS & NextJS</li>
                                            <li>Configured AI backend with NodeJS & ExpressJS</li>
                                            <li>Integrated data visualization components</li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">ReactJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NextJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NodeJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">ExpressJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">AI</span>
                                    </div>
                                    <div class="text-gray-500 italic">
                                        To be published Q2 2025 on biteproof.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Push Social Platform -->
                        <div class="glass-card overflow-hidden">
                            <div class="md:flex">
                                <div class="md:w-1/3 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center p-8 md:p-0">
                                    <h3 class="text-3xl font-bold text-white text-center">Push Social Platform</h3>
                                </div>
                                <div class="md:w-2/3 p-8">
                                    <div class="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 class="text-2xl font-bold text-gray-900">Push Social Platform</h3>
                                            <p class="text-indigo-600">TPS, UK</p>
                                        </div>
                                        <div class="text-gray-500">Coming Q4 2025</div>
                                    </div>
                                    <p class="text-gray-600 mb-6">
                                        A social media analytics platform featuring interactive dashboards and real-time data features.
                                        Helps businesses track and optimize their social media performance.
                                    </p>
                                    <div class="mb-6">
                                        <h4 class="font-semibold text-gray-800 mb-2">Key Contributions:</h4>
                                        <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                            <li>Designed intuitive user interfaces with Material UI and Tailwind CSS</li>
                                            <li>Developed dashboard endpoints and backend integration</li>
                                            <li>Implemented real-time data visualization components</li>
                                            <li>Created responsive layouts for all device sizes</li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-wrap gap-2 mb-6">
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Material UI</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tailwind CSS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NodeJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">ExpressJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Real-time Data</span>
                                    </div>
                                    <div class="text-gray-500 italic">
                                        To be published Q4 2025 on pushsocial.org
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Other Projects Section -->
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-8">Other Notable Projects</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Salem Ventures Platform -->
                        <div class="glass-card p-6 h-full flex flex-col">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Salem Ventures Platform</h3>
                            <p class="text-indigo-600 mb-4">Salem Ventures, Egypt</p>
                            <p class="text-gray-600 mb-6 flex-grow">
                                A robust investment management system to track and analyze portfolios. Provides comprehensive 
                                financial analytics and reporting tools.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">ReactJS</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NodeJS</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MongoDB</span>
                            </div>
                        </div>
                        
                        <!-- Trading Socio -->
                        <div class="glass-card p-6 h-full flex flex-col">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Trading Socio</h3>
                            <p class="text-indigo-600 mb-4">Salem Ventures, Egypt</p>
                            <p class="text-gray-600 mb-6 flex-grow">
                                A comprehensive trading platform with real-time market analysis features. Helps traders 
                                make informed decisions with advanced analytics.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MERN Stack</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Real-time Data</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Charts</span>
                            </div>
                        </div>
                        
                        <!-- Salem Foods -->
                        <div class="glass-card p-6 h-full flex flex-col">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Salem Foods</h3>
                            <p class="text-indigo-600 mb-4">Salem Ventures, Egypt</p>
                            <p class="text-gray-600 mb-6 flex-grow">
                                An e-commerce platform for food products with inventory management and order processing.
                                Features a responsive design and secure payment integration.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">E-commerce</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MERN Stack</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Payment Gateway</span>
                            </div>
                        </div>
                        
                        <!-- RoyalRide App -->
                        <div class="glass-card p-6 h-full flex flex-col">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">RoyalRide App</h3>
                            <p class="text-indigo-600 mb-4">Neuss, Jordan</p>
                            <p class="text-gray-600 mb-6 flex-grow">
                                A luxury transportation app focusing on user convenience. Provides seamless booking 
                                experience and real-time vehicle tracking.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Mobile App</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">UI/UX Design</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Geolocation</span>
                            </div>
                        </div>
                        
                        <!-- HR-Academy App -->
                        <div class="glass-card p-6 h-full flex flex-col">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">HR-Academy App</h3>
                            <p class="text-indigo-600 mb-4">Neuss, Jordan</p>
                            <p class="text-gray-600 mb-6 flex-grow">
                                A training management system for corporate use. Helps organizations manage employee 
                                training programs, track progress, and generate reports.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Mobile App</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Learning Management</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Analytics</span>
                            </div>
                        </div>
                        
                        <!-- Neuss Platform -->
                        <div class="glass-card p-6 h-full flex flex-col">
                            <h3 class="text-xl font-bold text-gray-900 mb-2">Neuss Platform</h3>
                            <p class="text-indigo-600 mb-4">Neuss, Jordan</p>
                            <p class="text-gray-600 mb-6 flex-grow">
                                Led planning, strategy, and implementation of the company's main platform. 
                                Focused on creating an intuitive user experience with modern design principles.
                            </p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Web Platform</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">UI/UX Design</span>
                                <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MERN Stack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
} 