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
      
      // Initialize reveal animations
      setTimeout(() => {
        initRevealAnimations();
      }, 100);
      
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
  }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
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