document.addEventListener('DOMContentLoaded', function() {
    
    // --- Page Navigation Logic ---
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    // Function to show different pages
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }

        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page-id') === pageId) {
                link.classList.add('active');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Attach click listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = this.getAttribute('data-page-id');
            showPage(pageId);
        });
    });

    // Initialize to show the home page on load
    showPage('home'); 

    // --- Form Submission Handlers ---

    // Function to handle mentorship form submission
    const mentorshipForm = document.getElementById('mentorshipForm');
    if (mentorshipForm) {
        mentorshipForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Basic form validation (browser 'required' attribute handles most)
            const emailInput = document.getElementById('m-email');
            if (emailInput && !emailInput.checkValidity()) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for applying to our mentorship program! We will review your application and get back to you within 5 business days.');
            event.target.reset();
        });
    }

    // Function to handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Basic form validation
            const emailInput = document.getElementById('c-email');
            if (emailInput && !emailInput.checkValidity()) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for contacting us! We have received your message and will respond within 24 hours.');
            event.target.reset();
        });
    }
    
    // --- Card Animation Delay ---
    
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Add a delay to the card animation based on its index
        card.style.animationDelay = `${index * 0.1}s`;
    });
});