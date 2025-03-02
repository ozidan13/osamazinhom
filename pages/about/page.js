export default function About() {
    return `
        <div class="page min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-7xl mx-auto">
                <h1 class="text-4xl font-bold text-indigo-600 mb-8">About Me</h1>
                
                <!-- Profile Section -->
                <div class="glass-card p-8 mb-12">
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="md:w-1/3">
                            <div class="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                                <img src="./assets/profile.jpg" alt="Osama Zinhom" class="w-full h-full object-cover" />
                                <div class="absolute inset-0 gradient-overlay opacity-20"></div>
                            </div>
                        </div>
                        <div class="md:w-2/3">
                            <h2 class="text-3xl font-bold text-gray-900 mb-4">Osama Zinhom</h2>
                            <p class="text-xl text-gray-600 mb-6">Senior Software Engineer | MERN Stack Developer | UI/UX Designer</p>
                            <p class="text-gray-600 mb-6">
                                Results-driven Senior Software Engineer with over 5 years of expertise in developing intuitive, 
                                user-friendly, and scalable web applications. Adept at using modern technologies like MERN Stack 
                                (MongoDB, ExpressJS, ReactJS, NodeJS), UI/UX design, and cloud-based solutions. Proven ability to 
                                lead teams, manage projects, and deliver high-quality solutions that meet client requirements.
                            </p>
                            <p class="text-gray-600">
                                Passionate about creating elegant, efficient, and user-centered digital experiences. 
                                Constantly learning and exploring new technologies to stay at the forefront of web development.
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
                <div class="glass-card p-8 mb-12">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                            <svg class="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                            </svg>
                        </div>
                        <div class="ml-4">
                            <h3 class="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h3>
                            <p class="text-gray-600">Sadat Academy for Management Sciences</p>
                            <p class="text-gray-500 mt-1">Minor: Management Information Systems</p>
                        </div>
                    </div>
                </div>
                
                <!-- Skills Section -->
                <div class="glass-card p-8 mb-12">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
                    
                    <!-- Technical Skills -->
                    <div class="mb-8">
                        <h3 class="text-xl font-semibold text-indigo-600 mb-4">Technical Skills</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <h4 class="font-medium text-gray-900 mb-2">Frontend</h4>
                                <ul class="text-gray-600 space-y-1">
                                    <li>ReactJS / NextJS</li>
                                    <li>HTML5 / CSS3</li>
                                    <li>JavaScript / TypeScript</li>
                                    <li>Tailwind CSS</li>
                                    <li>Material UI</li>
                                </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <h4 class="font-medium text-gray-900 mb-2">Backend</h4>
                                <ul class="text-gray-600 space-y-1">
                                    <li>NodeJS</li>
                                    <li>ExpressJS</li>
                                    <li>MongoDB</li>
                                    <li>SQL</li>
                                    <li>RESTful APIs</li>
                                </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <h4 class="font-medium text-gray-900 mb-2">UI/UX Tools</h4>
                                <ul class="text-gray-600 space-y-1">
                                    <li>Figma</li>
                                    <li>Adobe XD</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Wireframing</li>
                                    <li>Prototyping</li>
                                </ul>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <h4 class="font-medium text-gray-900 mb-2">Other Tools</h4>
                                <ul class="text-gray-600 space-y-1">
                                    <li>Git / GitHub</li>
                                    <li>Jira</li>
                                    <li>Azure</li>
                                    <li>Docker</li>
                                    <li>CI/CD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Soft Skills -->
                    <div>
                        <h3 class="text-xl font-semibold text-indigo-600 mb-4">Soft Skills</h3>
                        <div class="flex flex-wrap gap-3">
                            <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">Team Leadership</span>
                            <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">Communication</span>
                            <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">Problem Solving</span>
                            <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">Time Management</span>
                            <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">Adaptability</span>
                            <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">Critical Thinking</span>
                            <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">Creativity</span>
                            <span class="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">Attention to Detail</span>
                        </div>
                    </div>
                </div>
                
                <!-- Languages Section -->
                <div class="glass-card p-8 mb-12">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Languages</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center">
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 100%"></div>
                            </div>
                            <span class="ml-4 text-gray-700 min-w-[100px]">Arabic (Native)</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-indigo-600 h-2.5 rounded-full" style="width: 90%"></div>
                            </div>
                            <span class="ml-4 text-gray-700 min-w-[100px]">English (Fluent)</span>
                        </div>
                    </div>
                </div>
                
                <!-- Personal Interests Section -->
                <div class="glass-card p-8">
                    <h2 class="text-2xl font-bold text-gray-900 mb-6">Personal Interests</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="text-center">
                            <div class="bg-indigo-100 rounded-full p-4 inline-flex mb-3">
                                <svg class="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="font-medium text-gray-900">Technology</h3>
                        </div>
                        <div class="text-center">
                            <div class="bg-indigo-100 rounded-full p-4 inline-flex mb-3">
                                <svg class="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="font-medium text-gray-900">Design</h3>
                        </div>
                        <div class="text-center">
                            <div class="bg-indigo-100 rounded-full p-4 inline-flex mb-3">
                                <svg class="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="font-medium text-gray-900">Coding</h3>
                        </div>
                        <div class="text-center">
                            <div class="bg-indigo-100 rounded-full p-4 inline-flex mb-3">
                                <svg class="h-8 w-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <h3 class="font-medium text-gray-900">Innovation</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}