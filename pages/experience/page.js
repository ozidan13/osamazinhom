import React, { useEffect } from 'react';

export default function Experience() {
  useEffect(() => {
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
    
    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return `
    <div class="page min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl reveal-text">
            Work Experience
          </h1>
          <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500 reveal-text-delay">
            Over 5 years of professional experience building innovative web applications and digital solutions.
          </p>
        </div>
        
        <!-- Timeline Section -->
        <div class="relative">
          <!-- Timeline Items -->
          <div class="timeline-item">
            <div class="glass-card p-6 rounded-xl shadow-lg">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 class="text-2xl font-bold text-gray-900">Microsoft</h2>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  2024 - Feb 2025
                </span>
              </div>
              <h3 class="text-xl font-semibold text-indigo-600 mb-2">Software Engineer</h3>
              <p class="text-gray-600 mb-4">
                Focused on developing AI-powered solutions and scalable web platforms for enterprise clients. Collaborated with cross-functional teams to deliver high-quality software products.
              </p>
              <div class="mb-4">
                <h4 class="text-lg font-medium text-gray-900 mb-2">Key Contributions:</h4>
                <ul class="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Optimized enterprise-level dashboards, improving performance by 40%</li>
                  <li>Designed and implemented RESTful APIs using NodeJS and ExpressJS</li>
                  <li>Collaborated with international teams across different time zones</li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">React</span>
                <span class="skill-tag">NodeJS</span>
                <span class="skill-tag">Azure</span>
                <span class="skill-tag">AI Integration</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="glass-card p-6 rounded-xl shadow-lg">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 class="text-2xl font-bold text-gray-900">TPS, UK</h2>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  2023 - Jun 2024
                </span>
              </div>
              <h3 class="text-xl font-semibold text-indigo-600 mb-2">Software Engineer & UI/UX Designer</h3>
              <p class="text-gray-600 mb-4">
                Led UX analysis and UI design for high-profile projects. Implemented front-end solutions with ReactJS and NextJS, and developed backend systems with NodeJS and ExpressJS.
              </p>
              <div class="mb-4">
                <h4 class="text-lg font-medium text-gray-900 mb-2">Notable Projects:</h4>
                <ul class="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>BiteProof</strong> - A food authentication platform</li>
                  <li><strong>Push Social</strong> - Social media management tool</li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">ReactJS</span>
                <span class="skill-tag">NextJS</span>
                <span class="skill-tag">UI/UX Design</span>
                <span class="skill-tag">ExpressJS</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="glass-card p-6 rounded-xl shadow-lg">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 class="text-2xl font-bold text-gray-900">Salem Ventures</h2>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  2022 - Dec 2023
                </span>
              </div>
              <h3 class="text-xl font-semibold text-indigo-600 mb-2">Senior Software Engineer - MERN Stack Developer</h3>
              <p class="text-gray-600 mb-4">
                Developed innovative web applications using the MERN stack. Led a team of developers and mentored junior team members.
              </p>
              <div class="mb-4">
                <h4 class="text-lg font-medium text-gray-900 mb-2">Key Projects:</h4>
                <ul class="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>Salem Ventures Platform</strong> - Company's main product</li>
                  <li><strong>Trading Socio</strong> - Social trading platform</li>
                  <li><strong>Salem Foods</strong> - E-commerce solution</li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">Express</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Node.js</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="glass-card p-6 rounded-xl shadow-lg">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 class="text-2xl font-bold text-gray-900">Neuss, Jordan</h2>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  2019 - Dec 2022
                </span>
              </div>
              <h3 class="text-xl font-semibold text-indigo-600 mb-2">Software Engineer - MERN Stack Developer</h3>
              <p class="text-gray-600 mb-4">
                Conducted UX analysis and UI design for various applications. Implemented front-end and back-end solutions using the MERN stack.
              </p>
              <div class="mb-4">
                <h4 class="text-lg font-medium text-gray-900 mb-2">Key Projects:</h4>
                <ul class="list-disc pl-5 space-y-1 text-gray-600">
                  <li><strong>Neuss Platform</strong> - Company's main product</li>
                  <li><strong>RoyalRide App</strong> - Transportation solution</li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">MongoDB</span>
                <span class="skill-tag">Express</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">Node.js</span>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="glass-card p-6 rounded-xl shadow-lg">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 class="text-2xl font-bold text-gray-900">Planning Solutions, Saudi Arabia</h2>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  2016 - May 2019
                </span>
              </div>
              <h3 class="text-xl font-semibold text-indigo-600 mb-2">Software Engineer - Creative Designer</h3>
              <p class="text-gray-600 mb-4">
                Designed the company website and led branding initiatives for clients. Developed web applications and implemented UI/UX designs.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="skill-tag">UI/UX Design</span>
                <span class="skill-tag">Web Development</span>
                <span class="skill-tag">Branding</span>
                <span class="skill-tag">Creative Design</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Skills Section -->
        <div class="mt-20 skills-section">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-10">Skills Gained Through Experience</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Technical Expertise -->
            <div class="glass-card p-6 rounded-xl shadow-lg skill-category">
              <h3 class="text-xl font-semibold text-indigo-600 mb-4">Technical Expertise</h3>
              <div class="flex flex-wrap">
                <span class="skill-tag">Full-stack MERN Development</span>
                <span class="skill-tag">UI/UX Design Principles</span>
                <span class="skill-tag">Database Architecture</span>
                <span class="skill-tag">API Development</span>
                <span class="skill-tag">Cloud Services (AWS, Azure)</span>
                <span class="skill-tag">CI/CD Pipelines</span>
                <span class="skill-tag">Microservices</span>
              </div>
            </div>
            
            <!-- Project Management -->
            <div class="glass-card p-6 rounded-xl shadow-lg skill-category">
              <h3 class="text-xl font-semibold text-indigo-600 mb-4">Project Management</h3>
              <div class="flex flex-wrap">
                <span class="skill-tag">Agile Methodologies</span>
                <span class="skill-tag">Team Leadership</span>
                <span class="skill-tag">Client Communication</span>
                <span class="skill-tag">Project Planning</span>
                <span class="skill-tag">Resource Allocation</span>
                <span class="skill-tag">Risk Management</span>
                <span class="skill-tag">Stakeholder Management</span>
              </div>
            </div>
            
            <!-- Industry Knowledge -->
            <div class="glass-card p-6 rounded-xl shadow-lg skill-category">
              <h3 class="text-xl font-semibold text-indigo-600 mb-4">Industry Knowledge</h3>
              <div class="flex flex-wrap">
                <span class="skill-tag">E-commerce Solutions</span>
                <span class="skill-tag">Financial Platforms</span>
                <span class="skill-tag">AI Integration</span>
                <span class="skill-tag">Mobile Application Design</span>
                <span class="skill-tag">Enterprise Software</span>
                <span class="skill-tag">SaaS Products</span>
                <span class="skill-tag">Digital Transformation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
} 