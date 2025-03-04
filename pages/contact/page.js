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
              <input type="text" id="name" name="user_name" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 dark:text-white" required>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="user_email" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 dark:text-white" required>
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
                <span id="button-text">Send Message</span>
                <span id="button-loading" class="hidden">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </div>
          </form>
          
          <div id="success-message" class="hidden mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md">
            Thank you for your message! I'll get back to you as soon as possible.
          </div>
          
          <div id="error-message" class="hidden mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md"></div>
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
                  <a href="mailto:osamazinhomzidan@gmail.com" class="mt-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">osamazinhomzidan@gmail.com</a>
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
                  <a href="https://wa.me/201116771405" target="_blank" class="mt-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center">
                    +20 01116771405
                    <svg class="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
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
                  <p class="mt-1 text-gray-600 dark:text-gray-300">Egypt</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Media -->
          <div class="glass-card p-8 reveal-text-delay" style="animation-delay: 0.4s;">
            <h2 class="text-2xl font-semibold mb-6">Connect With Me</h2>
            <div class="flex space-x-4">
              <a href="https://github.com/ozidan13" target="_blank" class="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a href="https://www.linkedin.com/in/ozidan/" target="_blank" class="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Initialize EmailJS when the page loads
function initEmailJS() {
  // Debug EmailJS status
  debugEmailJS();
  
  // Check if EmailJS is already loaded
  if (window.emailjs) {
    console.log('EmailJS already loaded, initializing...');
    emailjs.init('Y8hxOKm1oTNUBUFui');
    setupContactForm();
    return;
  }

  console.log('Loading EmailJS SDK...');
  // Load EmailJS SDK
  const script = document.createElement('script');
  script.src = 'https://cdn.emailjs.com/sdk/2.6.4/email.min.js';
  script.async = true;
  document.head.appendChild(script);
  
  script.onload = () => {
    console.log('EmailJS SDK loaded, initializing...');
    // Initialize EmailJS with your public key
    emailjs.init('Y8hxOKm1oTNUBUFui');
    
    // Set up form submission handler
    setupContactForm();
    
    // Debug EmailJS status again after initialization
    debugEmailJS();
  };
  
  script.onerror = (error) => {
    console.error('Failed to load EmailJS SDK:', error);
    // Fall back to basic form handling
    setupBasicContactForm();
  };
}

// Debug function to check EmailJS status
function debugEmailJS() {
  console.log('--- EmailJS Debug Info ---');
  console.log('EmailJS in window:', typeof window.emailjs !== 'undefined');
  
  if (typeof window.emailjs !== 'undefined') {
    console.log('EmailJS version:', window.emailjs.version || 'unknown');
    console.log('EmailJS init method exists:', typeof window.emailjs.init === 'function');
    console.log('EmailJS send method exists:', typeof window.emailjs.send === 'function');
    console.log('EmailJS sendForm method exists:', typeof window.emailjs.sendForm === 'function');
  }
  
  // Check if the form exists
  const contactForm = document.getElementById('contact-form');
  console.log('Contact form exists:', contactForm !== null);
  
  if (contactForm) {
    // Log form field names
    const formFields = contactForm.elements;
    console.log('Form fields:');
    for (let i = 0; i < formFields.length; i++) {
      if (formFields[i].name) {
        console.log(`- ${formFields[i].name} (${formFields[i].type})`);
      }
    }
  }
  
  console.log('------------------------');
}

// Set up contact form submission handler
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  const buttonText = document.getElementById('button-text');
  const buttonLoading = document.getElementById('button-loading');
  
  if (contactForm) {
    console.log('Setting up contact form with EmailJS...');
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      buttonText.classList.add('hidden');
      buttonLoading.classList.remove('hidden');
      
      // Hide any previous messages
      successMessage.classList.add('hidden');
      errorMessage.classList.add('hidden');
      
      // Set default error message content
      errorMessage.textContent = 'Sorry, there was an error sending your message. Please try again later or contact me directly via email.';
      
      // Get form data
      const formData = {
        user_name: this.user_name.value,
        user_email: this.user_email.value,
        subject: this.subject.value,
        message: this.message.value
      };
      
      console.log('Sending email via EmailJS with data:', formData);
      
      // First try using emailjs.send method
      if (typeof emailjs.send === 'function') {
        emailjs.send('service_cv97a6k', 'template_3xq449j', formData)
          .then(handleSuccess)
          .catch((error) => {
            console.warn('emailjs.send failed, trying sendForm instead:', error);
            
            // If send fails, try sendForm as fallback
            if (typeof emailjs.sendForm === 'function') {
              emailjs.sendForm('service_cv97a6k', 'template_3xq449j', contactForm)
                .then(handleSuccess)
                .catch(handleError);
            } else {
              handleError(error);
            }
          });
      } 
      // If send method doesn't exist, try sendForm
      else if (typeof emailjs.sendForm === 'function') {
        emailjs.sendForm('service_cv97a6k', 'template_3xq449j', contactForm)
          .then(handleSuccess)
          .catch(handleError);
      }
      // If neither method exists, show error
      else {
        handleError({ message: 'EmailJS methods not available' });
      }
      
      function handleSuccess(response) {
        console.log('Email sent successfully:', response);
        // Show success message
        successMessage.classList.remove('hidden');
        contactForm.reset();
        
        // Reset button state
        buttonText.classList.remove('hidden');
        buttonLoading.classList.add('hidden');
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 5000);
      }
      
      function handleError(error) {
        console.error('Email sending failed:', error);
        
        // Show error message
        errorMessage.textContent = 'Sorry, there was an error sending your message: ' + (error.text || error.message || 'Unknown error');
        errorMessage.classList.remove('hidden');
        
        // Reset button state
        buttonText.classList.remove('hidden');
        buttonLoading.classList.add('hidden');
      }
    });
  }
}

// Fallback function if EmailJS fails to load
function setupBasicContactForm() {
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  
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
}

// Export the initialization function to be called when the page loads
export { initEmailJS }; 