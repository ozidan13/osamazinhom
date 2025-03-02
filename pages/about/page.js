export default function About() {
    return `
        <div class="page min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <h1 class="text-4xl font-bold text-indigo-600 mb-8">About Me</h1>
                
                <!-- Profile Section -->
                <div class="glass-card p-8 mb-12">
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="md:w-1/3">
                            <div class="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-8xl font-bold">
                                OZ
                            </div>
                        </div>
                        <div class="md:w-2/3">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Osama Zinhom</h2>
                            <p class="text-xl text-gray-600 mb-6">Senior Software Engineer | MERN Stack Developer | UI/UX Designer</p>
                            <p class="text-gray-600 mb-6">
                                Results-driven Senior Software Engineer with over 5 years of expertise in developing intuitive, 
                                user-friendly, and scalable web applications. Adept at using modern technologies like MERN Stack 
                                (MongoDB, ExpressJS, ReactJS, NodeJS), UI/UX design, and cloud-based solutions. Proven ability to 
                                deliver innovative solutions in collaboration with cross-functional teams. Strong focus on performance 
                                optimization and user-centric design.
                            </p>
                            <div class="flex flex-wrap gap-4">
                                <div class="flex items-center text-gray-600">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                                    </svg>
                                    Minya, Egypt
                                </div>
                                <div class="flex items-center text-gray-600">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    osamazinhomzidan@gmail.com
                                </div>
                                <div class="flex items-center text-gray-600">
                                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                                    </svg>
                                    (+20) 01116771405
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Education Section -->
                <div class="mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Education</h2>
                    <div class="glass-card p-6">
                        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <h3 class="text-xl font-semibold text-indigo-600">Bachelor of Science in Computer Science</h3>
                                <p class="text-gray-600">Sadat Academy for Management sciences, Minya, Egypt</p>
                            </div>
                            <div class="text-gray-500 mt-2 md:mt-0">June 2023</div>
                        </div>
                        <ul class="list-disc list-inside text-gray-600 ml-4">
                            <li>Minor: MIS (Management Information Systems) IT</li>
                            <li>Distinguished member of the university's Tech Society</li>
                        </ul>
                    </div>
                </div>
                
                <!-- Skills Section -->
                <div class="mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Professional Skills</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="glass-card p-6">
                            <h3 class="text-xl font-semibold text-indigo-600 mb-4">Technical Skills</h3>
                            <div class="space-y-4">
                                <div>
                                    <p class="font-medium text-gray-700 mb-2">Frontend Development</p>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">ReactJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NextJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">HTML5</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">CSS3</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tailwind CSS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Material UI</span>
                                    </div>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-700 mb-2">Backend Development</p>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">NodeJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">ExpressJS</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">MongoDB</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">SQL</span>
                                    </div>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-700 mb-2">UI/UX Tools</p>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Figma</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Adobe XD</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Adobe Photoshop</span>
                                    </div>
                                </div>
                                <div>
                                    <p class="font-medium text-gray-700 mb-2">Other Tools</p>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Git</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Jira</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Visual Studio Code</span>
                                        <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Azure</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="glass-card p-6">
                            <h3 class="text-xl font-semibold text-indigo-600 mb-4">Soft Skills</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Team Leadership
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Exceptional Communication
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Problem Solving
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Agile Methodologies
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Time Management
                                </li>
                                <li class="flex items-center text-gray-600">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Client Relationship Management
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <!-- Languages Section -->
                <div class="mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Languages</h2>
                    <div class="glass-card p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 class="text-xl font-semibold text-indigo-600 mb-2">Arabic</h3>
                                <p class="text-gray-600">Native</p>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-indigo-600 mb-2">English</h3>
                                <p class="text-gray-600">Fluent</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Personal Interests Section -->
                <div>
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">Personal Interests</h2>
                    <div class="glass-card p-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div class="text-center p-4">
                                <div class="text-4xl text-indigo-600 mb-2">
                                    <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>
                                    </svg>
                                </div>
                                <p class="text-gray-700 font-medium">Technology</p>
                            </div>
                            <div class="text-center p-4">
                                <div class="text-4xl text-indigo-600 mb-2">
                                    <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.834 9.686l-4.166.575 3.032 2.914-.74 4.139 3.708-1.982 3.708 1.983-.74-4.139 3.032-2.915-4.166-.575-1.834-3.784-1.834 3.784z"/>
                                    </svg>
                                </div>
                                <p class="text-gray-700 font-medium">Design</p>
                            </div>
                            <div class="text-center p-4">
                                <div class="text-4xl text-indigo-600 mb-2">
                                    <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>
                                    </svg>
                                </div>
                                <p class="text-gray-700 font-medium">Coding</p>
                            </div>
                            <div class="text-center p-4">
                                <div class="text-4xl text-indigo-600 mb-2">
                                    <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
                                    </svg>
                                </div>
                                <p class="text-gray-700 font-medium">Innovation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}