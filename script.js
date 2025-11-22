// ============================================
// ADD THESE NEW FUNCTIONS TO YOUR EXISTING script.js
// ============================================

// ============================================
// LOADING ANIMATION
// ============================================
function initLoader() {
    const loader = document.getElementById('loader');
    
    // Hide loader when page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 2000); // 2 seconds loading animation
    });
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
}

// ============================================
// DARK/LIGHT THEME TOGGLE
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'light');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const isLight = currentTheme === 'light';
        
        // Toggle theme
        const newTheme = isLight ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        
        updateThemeIcon(!isLight);
        
        // Add animation effect
        themeToggle.style.transform = 'scale(1.2) rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);
    });
    
    function updateThemeIcon(isLight) {
        themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ============================================
// TESTIMONIALS SLIDER
// ============================================
let currentTestimonial = 0;
let testimonialInterval;
const totalTestimonials = 4; // Update this if you add more testimonials

function initTestimonials() {
    const dots = document.querySelectorAll('.testimonial-dot');
    
    // Initialize dot click events
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            goToTestimonial(index);
            resetAutoSlide();
        });
    });
    
    // Start auto-slide
    startAutoSlide();
    
    // Pause on hover
    const container = document.querySelector('.testimonials-container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        container.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
}

function goToTestimonial(index) {
    const slider = document.getElementById('testimonialSlider');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (!slider) return;
    
    currentTestimonial = index;
    slider.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function changeTestimonial(direction) {
    let newIndex = currentTestimonial + direction;
    
    if (newIndex < 0) {
        newIndex = totalTestimonials - 1;
    } else if (newIndex >= totalTestimonials) {
        newIndex = 0;
    }
    
    goToTestimonial(newIndex);
    resetAutoSlide();
}

function startAutoSlide() {
    testimonialInterval = setInterval(() => {
        changeTestimonial(1);
    }, 5000); // Change every 5 seconds
}

function resetAutoSlide() {
    clearInterval(testimonialInterval);
    startAutoSlide();
}

// ============================================
// CONTACT FORM WITH EMAILJS
// ============================================
function initContactForm() {
    // Initialize EmailJS with your public key
    // Get your keys from: https://www.emailjs.com/
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
        
        // Get form data
        const formData = {
            from_name: document.getElementById('userName').value,
            from_email: document.getElementById('userEmail').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            to_name: 'Mohamed Waleed', // Your name
        };
        
        try {
            // Send email using EmailJS
            // Replace with your service ID and template ID
            await emailjs.send(
                'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
                formData
            );
            
            // Show success message
            showFormStatus('success', '<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.');
            form.reset();
            
        } catch (error) {
            console.error('Email sending failed:', error);
            showFormStatus('error', '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again or email directly.');
        } finally {
            // Reset button state
            btnText.style.display = 'inline-flex';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
    
    function showFormStatus(type, message) {
        formStatus.className = `form-status ${type}`;
        formStatus.innerHTML = message;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
            formStatus.innerHTML = '';
        }, 5000);
    }
}

// Alternative: Simple Form (without EmailJS - opens email client)
function initSimpleContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:wajiwaleed@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show status
        const formStatus = document.getElementById('formStatus');
        formStatus.className = 'form-status success';
        formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Opening your email client...';
        
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 3000);
    });
}

// ============================================
// TIMELINE ANIMATIONS
// ============================================
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transition = 'all 0.6s ease';
        
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        
        observer.observe(item);
    });
}

// ============================================
// BLOG CARD INTERACTIONS
// ============================================
function initBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent click if clicking on read more link
            if (e.target.closest('.read-more')) {
                // Handle blog post navigation
                // You can add actual blog post URLs here
                e.preventDefault();
                alert('Blog post coming soon! 📝');
            }
        });
    });
}

// ============================================
// UPDATE YOUR INIT FUNCTION
// ============================================
// Replace your existing init() function with this updated version:

function init() {
    console.log('🚀 Initializing Modern Portfolio...');
    
    // NEW: Loading animation
    initLoader();
    
    // NEW: Theme toggle
    initThemeToggle();
    
    // Existing functions
    setTimeout(typeText, 1000);
    initScrollAnimations();
    initSmoothScroll();
    initScrollToTop();
    initCertificateCarousel();
    initProjectFilter();
    highlightActiveNav();
    
    // NEW: Testimonials slider
    initTestimonials();
    
    // NEW: Contact form
    // Use initContactForm() if you have EmailJS set up
    // Use initSimpleContactForm() for basic mailto functionality
    initSimpleContactForm(); // Change to initContactForm() after setting up EmailJS
    
    // NEW: Timeline animations
    initTimelineAnimations();
    
    // NEW: Blog card interactions
    initBlogCards();
    
    console.log('✅ Portfolio Initialized Successfully!');
    console.log('📊 Total Projects: ' + Object.keys(projectPhotos).length);
    console.log('🎓 Total Certificates: ' + certificates.length);
    console.log('🌙 Theme: ' + (document.body.getAttribute('data-theme') || 'dark'));
}

// ============================================
// KEYBOARD NAVIGATION - UPDATE
// ============================================
// Update your existing keyboard navigation to include testimonials:

document.addEventListener('keydown', (e) => {
    const projectModal = document.getElementById('projectModal');
    const isModalOpen = projectModal && projectModal.classList.contains('active');
    
    // Certificate carousel navigation (when modal is closed)
    if (!isModalOpen) {
        if (e.key === 'ArrowLeft') {
            navigateCert(-1);
        } else if (e.key === 'ArrowRight') {
            navigateCert(1);
        }
    }
    
    // Project modal navigation
    if (isModalOpen) {
        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowLeft') {
            changeProjectPhoto(-1);
        } else if (e.key === 'ArrowRight') {
            changeProjectPhoto(1);
        }
    }
    
    // Testimonial navigation with T key
    if (e.key === 't' || e.key === 'T') {
        changeTestimonial(1);
    }
});