import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would send the form data to a server here
        // For now, we'll just show the success message
        successMessage.classList.remove('hidden');
        contactForm.reset();
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
      });
    }
    
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
      if (contactForm) {
        contactForm.removeEventListener('submit', function(e) {});
      }
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
            Get in Touch
          </h1>
          <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500 reveal-text-delay">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form Section -->
          <div class="glass-card p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl fade-in-card">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
            
            <form id="contact-form" class="space-y-6">
              <div class="form-group">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" required
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="Your Name">
              </div>
              
              <div class="form-group">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="your.email@example.com">
              </div>
              
              <div class="form-group">
                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" name="subject" required
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="How can I help you?">
              </div>
              
              <div class="form-group">
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="5" required
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  placeholder="Tell me about your project..."></textarea>
              </div>
              
              <div>
                <button type="submit"
                  class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
            
            <div id="success-message" class="hidden mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <p class="font-medium">Thank you for your message!</p>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          </div>
          
          <!-- Contact Information Section -->
          <div class="space-y-8">
            <div class="glass-card p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl fade-in-card-delay">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-lg font-medium text-gray-900">Location</p>
                    <p class="text-gray-600">London, United Kingdom</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-lg font-medium text-gray-900">Email</p>
                    <p class="text-gray-600">osama.zinhom@gmail.com</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-lg font-medium text-gray-900">Phone</p>
                    <p class="text-gray-600">+44 7123 456789</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="glass-card p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl fade-in-card-delay-2">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Connect With Me</h2>
              
              <div class="grid grid-cols-2 gap-4">
                <a href="https://linkedin.com/in/osamaz" target="_blank" rel="noopener noreferrer"
                  class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-all duration-300">
                  <svg class="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span class="ml-3 font-medium">LinkedIn</span>
                </a>
                
                <a href="https://github.com/osamaz" target="_blank" rel="noopener noreferrer"
                  class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-all duration-300">
                  <svg class="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="ml-3 font-medium">GitHub</span>
                </a>
                
                <a href="https://behance.net/osamaz" target="_blank" rel="noopener noreferrer"
                  class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-all duration-300">
                  <svg class="h-6 w-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                  </svg>
                  <span class="ml-3 font-medium">Behance</span>
                </a>
                
                <a href="mailto:osama.zinhom@gmail.com"
                  class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-all duration-300">
                  <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="ml-3 font-medium">Email Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Map or Additional Information Section -->
        <div class="mt-16 glass-card p-8 rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-2xl fade-in-card-delay-3">
          <div class="text-center">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Available for Remote Work & Relocation</h2>
            <p class="text-gray-600 max-w-3xl mx-auto">
              While I'm currently based in London, I'm open to remote opportunities worldwide and willing to relocate for the right position. 
              Let's discuss how we can work together regardless of location!
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
} 