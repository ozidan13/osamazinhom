// Function to load page-specific CSS
function loadPageStyles(pageName) {
  // Remove any previously loaded page-specific styles
  const existingPageStyle = document.getElementById('page-specific-styles');
  if (existingPageStyle) {
    existingPageStyle.remove();
  }
  
  // Create a new link element for the page-specific CSS
  const pageStyle = document.createElement('link');
  pageStyle.id = 'page-specific-styles';
  pageStyle.rel = 'stylesheet';
  pageStyle.href = `./pages/${pageName}/style.css`;
  document.head.appendChild(pageStyle);
}

// Function to navigate to a page
function navigateTo(pageName) {
  // ... existing code ...
  
  // Load the page module
  import(`./pages/${pageName}/page.js`)
    .then(module => {
      const pageFunction = module.default;
      const pageContent = pageFunction();
      
      // Update the content
      contentElement.innerHTML = pageContent;
      
      // Load page-specific styles
      loadPageStyles(pageName);
      
      // Initialize reveal animations with a slight delay to ensure DOM is ready
      setTimeout(() => {
        initRevealAnimations();
        initPageSpecificFunctionality(pageName);
        
        // Force reveal all elements with reveal classes if they haven't been revealed by the observer
        const revealElements = document.querySelectorAll('.reveal-text, .reveal-text-delay');
        revealElements.forEach(element => {
          element.classList.add('revealed');
        });
      }, 300);
      
      // ... existing code ...
    })
    .catch(error => {
      console.error(`Error loading page: ${pageName}`, error);
      contentElement.innerHTML = `<div class="error-page">
        <h1>Page Not Found</h1>
        <p>Sorry, the page "${pageName}" could not be loaded.</p>
        <button onclick="navigateTo('home')">Go Home</button>
      </div>`;
    });
}

// Function to initialize reveal animations
function initRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal-text, .reveal-text-delay');
  
  if (revealElements.length > 0) {
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Observe each element
    revealElements.forEach(element => {
      observer.observe(element);
    });
  }
}

// Function to initialize page-specific functionality
function initPageSpecificFunctionality(pageName) {
  if (pageName === 'contact') {
    initContactForm();
  }
}

// Function to initialize contact form
function initContactForm() {
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
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the content element
  window.contentElement = document.getElementById('content');
  
  // Initial page load
  const initialPath = window.location.hash.slice(1) || 'home';
  navigateTo(initialPath);
  
  // Handle navigation clicks
  document.addEventListener('click', function(e) {
    if (e.target.matches('[data-page]') || e.target.closest('[data-page]')) {
      e.preventDefault();
      const pageLink = e.target.matches('[data-page]') ? e.target : e.target.closest('[data-page]');
      const pageName = pageLink.getAttribute('data-page').replace('/', '');
      navigateTo(pageName);
      window.location.hash = pageName;
    }
  });
  
  // Handle hash changes
  window.addEventListener('hashchange', function() {
    const pageName = window.location.hash.slice(1) || 'home';
    navigateTo(pageName);
  });
});

// ... existing code ... 