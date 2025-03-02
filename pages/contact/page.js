export default function Contact() {
  return `
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8 reveal-text bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Get In Touch</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="glass-card p-8 reveal-text-delay">
          <h2 class="text-2xl font-semibold mb-6">Send Me a Message</h2>
          <form id="contact-form" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 dark:text-white" required>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 dark:text-white" required>
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
              <input type="text" id="subject" name="subject" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 dark:text-white" required>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 dark:text-white" required></textarea>
            </div>
            
            <div>
              <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
                Send Message
              </button>
            </div>
          </form>
          
          <div id="success-message" class="hidden mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md">
            Thank you for your message! I'll get back to you as soon as possible.
          </div>
        </div>
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="glass-card p-8 reveal-text-delay" style="animation-delay: 0.2s;">
            <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Email</h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">contact@example.com</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Phone</h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">Location</h3>
                  <p class="mt-1 text-gray-600 dark:text-gray-300">London, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Media -->
          <div class="glass-card p-8 reveal-text-delay" style="animation-delay: 0.4s;">
            <h2 class="text-2xl font-semibold mb-6">Connect With Me</h2>
            <div class="flex space-x-4">
              <a href="https://github.com" target="_blank" class="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a href="https://linkedin.com" target="_blank" class="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              <a href="https://twitter.com" target="_blank" class="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a href="https://instagram.com" target="_blank" class="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.073 4.849-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <script>
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
    </script>
  `;
} 