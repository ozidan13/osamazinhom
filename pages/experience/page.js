export default function Experience() {
  return `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8 reveal-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">My Experience</h1>
      
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
        
        <!-- Experience items -->
        <div class="space-y-12">
          <!-- Experience 1 -->
          <div class="relative flex flex-col md:flex-row items-center md:items-start">
            <div class="order-1 md:order-1 md:w-1/2 pr-0 md:pr-8 pb-8 md:pb-0 flex md:justify-end">
              <div class="glass-card p-6 w-full md:max-w-md reveal-text-delay">
                <h3 class="text-xl font-semibold mb-2">Senior Software Engineer</h3>
                <p class="text-indigo-600 dark:text-indigo-400 mb-4">TPS, UK (2023 - Present)</p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Leading the development of innovative web applications and services, focusing on scalable architecture and performance optimization.</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li>Architected and implemented microservices-based applications</li>
                  <li>Led a team of 5 developers, implementing Agile methodologies</li>
                  <li>Reduced application load time by 40% through optimization</li>
                  <li>Implemented CI/CD pipelines for automated testing and deployment</li>
                </ul>
              </div>
            </div>
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
              <div class="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-900 z-10"></div>
            </div>
            <div class="order-2 md:order-2 md:w-1/2 pl-0 md:pl-8 pt-8 md:pt-0"></div>
          </div>
          
          <!-- Experience 2 -->
          <div class="relative flex flex-col md:flex-row items-center md:items-start">
            <div class="order-2 md:order-1 md:w-1/2 pr-0 md:pr-8 pt-8 md:pt-0"></div>
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
              <div class="w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-500 border-4 border-white dark:border-gray-900 z-10"></div>
            </div>
            <div class="order-1 md:order-2 md:w-1/2 pl-0 md:pl-8 pb-8 md:pb-0">
              <div class="glass-card p-6 w-full md:max-w-md reveal-text-delay" style="animation-delay: 0.2s;">
                <h3 class="text-xl font-semibold mb-2">Full Stack Developer</h3>
                <p class="text-purple-600 dark:text-purple-400 mb-4">Salem Ventures, Jordan (2020 - 2023)</p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Developed and maintained multiple web applications for clients in the finance and e-commerce sectors.</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li>Built responsive web applications using React and Node.js</li>
                  <li>Implemented RESTful APIs and GraphQL endpoints</li>
                  <li>Integrated payment gateways and third-party services</li>
                  <li>Optimized database queries and application performance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Experience 3 -->
          <div class="relative flex flex-col md:flex-row items-center md:items-start">
            <div class="order-1 md:order-1 md:w-1/2 pr-0 md:pr-8 pb-8 md:pb-0 flex md:justify-end">
              <div class="glass-card p-6 w-full md:max-w-md reveal-text-delay" style="animation-delay: 0.4s;">
                <h3 class="text-xl font-semibold mb-2">Frontend Developer</h3>
                <p class="text-pink-600 dark:text-pink-400 mb-4">Neuss, Jordan (2018 - 2020)</p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Focused on creating intuitive and responsive user interfaces for web and mobile applications.</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li>Developed UI components using React and Vue.js</li>
                  <li>Implemented responsive designs with CSS frameworks</li>
                  <li>Collaborated with UX designers to improve user experience</li>
                  <li>Conducted cross-browser testing and optimization</li>
                </ul>
              </div>
            </div>
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
              <div class="w-8 h-8 rounded-full bg-pink-600 dark:bg-pink-500 border-4 border-white dark:border-gray-900 z-10"></div>
            </div>
            <div class="order-2 md:order-2 md:w-1/2 pl-0 md:pl-8 pt-8 md:pt-0"></div>
          </div>
        </div>
      </div>
      
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6 reveal-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Education & Certifications</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Education -->
          <div class="glass-card p-6 reveal-text-delay">
            <h3 class="text-xl font-semibold mb-4">Education</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">Master of Science in Computer Science</h4>
                <p class="text-gray-700 dark:text-gray-300">University of Jordan, 2018</p>
              </div>
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">Bachelor of Science in Software Engineering</h4>
                <p class="text-gray-700 dark:text-gray-300">Jordan University of Science and Technology, 2016</p>
              </div>
            </div>
          </div>
          
          <!-- Certifications -->
          <div class="glass-card p-6 reveal-text-delay" style="animation-delay: 0.2s;">
            <h3 class="text-xl font-semibold mb-4">Certifications</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">AWS Certified Solutions Architect</h4>
                <p class="text-gray-700 dark:text-gray-300">Amazon Web Services, 2022</p>
              </div>
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">Professional Scrum Master I (PSM I)</h4>
                <p class="text-gray-700 dark:text-gray-300">Scrum.org, 2021</p>
              </div>
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">MongoDB Certified Developer</h4>
                <p class="text-gray-700 dark:text-gray-300">MongoDB, 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
} 