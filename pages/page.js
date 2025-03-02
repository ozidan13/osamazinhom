export default function HomePage() {
    return `
        <div class="page min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <!-- Hero Section -->
                <div class="flex flex-col md:flex-row items-center justify-between mb-16">
                    <div class="md:w-1/2 mb-8 md:mb-0">
                        <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
                            <span class="block text-indigo-600">Osama Zinhom</span>
                            <span class="block text-gray-600 text-2xl mt-3">Senior Software Engineer</span>
                        </h1>
                        <p class="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl max-w-3xl">
                            Results-driven Senior Software Engineer with over 5 years of expertise in developing intuitive, 
                            user-friendly, and scalable web applications. Adept at using modern technologies like MERN Stack, 
                            UI/UX design, and cloud-based solutions.
                        </p>
                        <div class="mt-8 flex flex-wrap gap-4">
                            <a href="#/contact" class="px-8 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300">
                                Contact Me
                            </a>
                            <a href="#/projects" class="px-8 py-3 rounded-md bg-white text-indigo-600 font-medium border border-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex justify-center">
                        <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-xl">
                            <div class="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                                OZ
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Skills Section -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="glass-card p-6 hover:shadow-lg transition duration-300">
                            <h3 class="text-xl font-semibold text-indigo-600 mb-4">Frontend Development</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    ReactJS & NextJS
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    HTML5 & CSS3
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Tailwind CSS
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Material UI
                                </li>
                            </ul>
                        </div>
                        <div class="glass-card p-6 hover:shadow-lg transition duration-300">
                            <h3 class="text-xl font-semibold text-indigo-600 mb-4">Backend Development</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    NodeJS
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    ExpressJS
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    MongoDB
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    SQL
                                </li>
                            </ul>
                        </div>
                        <div class="glass-card p-6 hover:shadow-lg transition duration-300">
                            <h3 class="text-xl font-semibold text-indigo-600 mb-4">UI/UX & Tools</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Figma & Adobe XD
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Adobe Photoshop
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Git & Jira
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Azure
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Featured Projects Section -->
                <div class="mb-16">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="glass-card overflow-hidden">
                            <div class="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                                <h3 class="text-2xl font-bold text-white">BiteProof Platform</h3>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600 mb-4">AI-based platform for data analysis and user insights</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">ReactJS</span>
                                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NextJS</span>
                                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NodeJS</span>
                                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">AI</span>
                                </div>
                                <a href="#/projects" class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200">Learn more →</a>
                            </div>
                        </div>
                        <div class="glass-card overflow-hidden">
                            <div class="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                                <h3 class="text-2xl font-bold text-white">Push Social Platform</h3>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600 mb-4">Interactive dashboards and real-time data features</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Material UI</span>
                                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tailwind CSS</span>
                                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NodeJS</span>
                                    <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">ExpressJS</span>
                                </div>
                                <a href="#/projects" class="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200">Learn more →</a>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <a href="#/projects" class="inline-block px-6 py-3 rounded-md bg-white text-indigo-600 font-medium border border-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
                            View All Projects
                        </a>
                    </div>
                </div>

                <!-- Contact CTA Section -->
                <div class="glass-card p-8 text-center">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
                    <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Looking for a skilled software engineer to bring your ideas to life? I'm currently available for freelance work and exciting opportunities.
                    </p>
                    <a href="#/contact" class="inline-block px-8 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-300">
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    `;
}