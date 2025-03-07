export default function Experience() {
  return `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8 reveal-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">My Experience</h1>
      
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
        
        <!-- Experience items -->
        <div class="space-y-12">
          <!-- Microsoft Experience -->
          <div class="relative flex flex-col md:flex-row items-center md:items-start">
            <div class="order-1 md:order-1 md:w-1/2 pr-0 md:pr-8 pb-8 md:pb-0 flex md:justify-end">
              <div class="glass-card p-6 w-full md:max-w-md reveal-text-delay">
                <h3 class="text-xl font-semibold mb-2">Software Engineer</h3>
                <p class="text-blue-600 dark:text-blue-400 mb-4">Microsoft (Remote via Outsourcing Partner) (2024 - Sep 2025)</p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Developed AI-powered solutions and scalable web platforms for enterprise use.</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li>Developed AI-powered solutions and scalable web platforms for internal and external use</li>
                  <li>Optimized performance and responsiveness of enterprise-level dashboards for microservices</li>
                  <li>Designed and implemented APIs with NodeJS and ExpressJS for seamless data integration</li>
                  <li>Collaborated with international teams to enhance product quality and deliver exceptional user experiences</li>
                </ul>
              </div>
            </div>
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
              <div class="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>
            </div>
            <div class="order-2 md:order-2 md:w-1/2 pl-0 md:pl-8 pt-8 md:pt-0"></div>
          </div>
          
          <!-- TPS Experience -->
          <div class="relative flex flex-col md:flex-row items-center md:items-start">
            <div class="order-2 md:order-1 md:w-1/2 pr-0 md:pr-8 pt-8 md:pt-0"></div>
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
              <div class="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-900 z-10"></div>
            </div>
            <div class="order-1 md:order-2 md:w-1/2 pl-0 md:pl-8 pb-8 md:pb-0">
              <div class="glass-card p-6 w-full md:max-w-md reveal-text-delay" style="animation-delay: 0.2s;">
                <h3 class="text-xl font-semibold mb-2">Software Engineer & UI/UX Designer</h3>
                <p class="text-indigo-600 dark:text-indigo-400 mb-4">TPS, UK (Project-Based Contract) (2023 - Jun 2024)</p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Designed and developed AI-powered solutions and scalable web platforms for enterprise clients.</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li>Designed and developed AI-powered solutions and scalable web platforms with MERN for enterprise clients</li>
                  <li>Led UX analysis and UI design for multiple high-profile projects</li>
                  <li>Implemented front-end solutions using ReactJS and NextJS with modern UI frameworks</li>
                  <li>Developed robust backend systems with NodeJS and ExpressJS</li>
                </ul>
                <p class="text-gray-600 dark:text-gray-300 mt-4 font-medium">Key Projects:</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li><span class="font-medium">BiteProof Platform:</span> AI-based platform for data analysis and user insights</li>
                  <li><span class="font-medium">Push Social Platform:</span> Interactive dashboards and real-time data features</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Salem Ventures Experience -->
          <div class="relative flex flex-col md:flex-row items-center md:items-start">
            <div class="order-1 md:order-1 md:w-1/2 pr-0 md:pr-8 pb-8 md:pb-0 flex md:justify-end">
              <div class="glass-card p-6 w-full md:max-w-md reveal-text-delay" style="animation-delay: 0.4s;">
                <h3 class="text-xl font-semibold mb-2">Senior Software Engineer - MERN Stack Developer</h3>
                <p class="text-purple-600 dark:text-purple-400 mb-4">Salem Ventures, Egypt (2022 - Dec 2023)</p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Led the development and deployment of innovative web applications for diverse industries.</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li>Designed and developed intuitive user interfaces and ensured seamless user experiences</li>
                  <li>Conducted database design and management using MongoDB</li>
                  <li>Created scalable backend solutions with NodeJS</li>
                  <li>Directed UI/UX workshops and collaborated with clients to transform their visions into functional solutions</li>
                </ul>
                <p class="text-gray-600 dark:text-gray-300 mt-4 font-medium">Key Projects:</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li><span class="font-medium">Salem Ventures Platform:</span> Investment management system</li>
                  <li><span class="font-medium">Trading Socio:</span> Trading platform with real-time market analysis</li>
                  <li><span class="font-medium">Salem Foods:</span> E-commerce platform for food products</li>
                </ul>
              </div>
            </div>
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
              <div class="w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-500 border-4 border-white dark:border-gray-900 z-10"></div>
            </div>
            <div class="order-2 md:order-2 md:w-1/2 pl-0 md:pl-8 pt-8 md:pt-0"></div>
          </div>
          
          <!-- Neuss Experience -->
          <div class="relative flex flex-col md:flex-row items-center md:items-start">
            <div class="order-2 md:order-1 md:w-1/2 pr-0 md:pr-8 pt-8 md:pt-0"></div>
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
              <div class="w-8 h-8 rounded-full bg-pink-600 dark:bg-pink-500 border-4 border-white dark:border-gray-900 z-10"></div>
            </div>
            <div class="order-1 md:order-2 md:w-1/2 pl-0 md:pl-8 pb-8 md:pb-0">
              <div class="glass-card p-6 w-full md:max-w-md reveal-text-delay" style="animation-delay: 0.6s;">
                <h3 class="text-xl font-semibold mb-2">Software Engineer - MERN Stack Developer</h3>
                <p class="text-pink-600 dark:text-pink-400 mb-4">Neuss, Jordan (2019 - Dec 2022)</p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">Conducted UX analysis and UI design for websites and mobile applications.</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li>Developed front-end solutions using ReactJS and NextJS frameworks</li>
                  <li>Created and managed databases using NodeJS and ExpressJS</li>
                  <li>Collaborated with cross-functional teams to deliver client projects on time</li>
                </ul>
                <p class="text-gray-600 dark:text-gray-300 mt-4 font-medium">Key Projects:</p>
                <ul class="text-gray-600 dark:text-gray-300 space-y-2 pl-5 list-disc">
                  <li><span class="font-medium">Neuss Platform:</span> Led planning, strategy, and implementation</li>
                  <li><span class="font-medium">RoyalRide App:</span> Luxury transportation app</li>
                  <li><span class="font-medium">HR-Academy App:</span> Training management system</li>
                </ul>
              </div>
            </div>
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
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">Bachelor of Science in Computer Science</h4>
                <p class="text-gray-700 dark:text-gray-300">Sadat Academy for Management sciences, Minya, Egypt, 2023</p>
                <p class="text-gray-600 dark:text-gray-300">Minor: MIS (Management Information Systems) IT</p>
              </div>
            </div>
          </div>
          
          <!-- Skills -->
          <div class="glass-card p-6 reveal-text-delay" style="animation-delay: 0.2s;">
            <h3 class="text-xl font-semibold mb-4">Technical Skills</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">Frontend Development</h4>
                <p class="text-gray-700 dark:text-gray-300">ReactJS, NextJS, HTML5, CSS3, Tailwind CSS, Material UI</p>
              </div>
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">Backend Development</h4>
                <p class="text-gray-700 dark:text-gray-300">NodeJS, ExpressJS</p>
              </div>
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">Database Management</h4>
                <p class="text-gray-700 dark:text-gray-300">MongoDB, SQL</p>
              </div>
              <div>
                <h4 class="font-medium text-indigo-600 dark:text-indigo-400">UI/UX Tools</h4>
                <p class="text-gray-700 dark:text-gray-300">Figma, Adobe XD, Adobe Photoshop</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
} 