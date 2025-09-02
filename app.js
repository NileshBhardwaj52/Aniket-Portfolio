// Enhanced Portfolio JavaScript - Brighter Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initTypewriterEffect();
    initContactForm();
    initFloatingShapes();
    initParallaxEffects();
    initSkillAnimations();
    initScrollProgress();
    initEducationAnimations();
    initEnhancedGlowEffects();
    
    // Initialize cursor effects for desktop only
    if (window.innerWidth > 768) {
        initCursorEffects();
    }
    
    optimizeAnimations();
    animateCounters();
    initBrightnessEnhancements();
});

// Navigation Functionality - Enhanced for brightness
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Add brightness effect to mobile menu
            if (navMenu.classList.contains('active')) {
                navMenu.style.boxShadow = '5px 0 30px rgba(0, 230, 255, 0.3)';
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                navMenu.style.boxShadow = '';
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Add flash effect to target section
                targetSection.style.filter = 'brightness(1.1)';
                setTimeout(() => {
                    targetSection.style.filter = '';
                }, 500);
            }
        });
    });

    // My Projects Button
    const myProjectsBtn = document.querySelector('a[href="#services"]');
    if (myProjectsBtn) {
        myProjectsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const servicesSection = document.querySelector('#services');
            if (servicesSection) {
                const offsetTop = servicesSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Enhanced brightness flash for services section
                servicesSection.style.filter = 'brightness(1.2) contrast(1.1)';
                setTimeout(() => {
                    servicesSection.style.filter = '';
                }, 800);
            }
        });
    }

    // Enhanced navbar scroll effects
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        // Add scrolled class to navbar with enhanced glow
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
            navbar.style.boxShadow = '0 2px 30px rgba(0, 230, 255, 0.4)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.boxShadow = '';
        }

        // Update active navigation link
        updateActiveNavLink();
    });

    // Update active navigation link with enhanced effects
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    link.style.textShadow = '';
                });
                if (navLink) {
                    navLink.classList.add('active');
                    navLink.style.textShadow = '0 0 15px rgba(0, 230, 255, 0.8)';
                }
            }
        });
    }
}

// Enhanced Scroll Animations with brightness effects
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add brightness flash when element becomes visible
                entry.target.style.filter = 'brightness(1.15)';
                setTimeout(() => {
                    entry.target.style.filter = '';
                }, 600);
                
                // Add stagger effect for multiple elements
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.querySelectorAll('.stagger-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                            // Individual brightness flash for staggered items
                            child.style.filter = 'brightness(1.2)';
                            setTimeout(() => {
                                child.style.filter = '';
                            }, 400);
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = [
        { selector: '.section-title', class: 'fade-in' },
        { selector: '.section-subtitle', class: 'fade-in' },
        { selector: '.about-text p', class: 'slide-in-left' },
        { selector: '.about-philosophy', class: 'fade-in' },
        { selector: '.service-card', class: 'fade-in stagger-item' },
        { selector: '.education-card', class: 'slide-in-right stagger-item' },
        { selector: '.contact-item', class: 'slide-in-left stagger-item' },
        { selector: '.skill-item', class: 'fade-in stagger-item' }
    ];

    animatedElements.forEach(({ selector, class: className }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add(className);
            observer.observe(element);
        });
    });

    // Add stagger parent classes
    const staggerParents = [
        '.services-grid',
        '.education-content',
        '.contact-info',
        '.skills-grid'
    ];

    staggerParents.forEach(selector => {
        const parent = document.querySelector(selector);
        if (parent) {
            parent.classList.add('stagger-children');
            observer.observe(parent);
        }
    });
}

// Enhanced Typewriter Effect with glow
function initTypewriterEffect() {
    const titleElement = document.querySelector('.home-title');
    if (!titleElement) return;

    const text = titleElement.textContent;
    titleElement.textContent = '';
    titleElement.style.opacity = '1';
    
    let charIndex = 0;
    const typeSpeed = 100;
    const startDelay = 1500;

    setTimeout(() => {
        titleElement.style.textShadow = '0 0 20px rgba(0, 230, 255, 0.6)';
        
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                titleElement.textContent += text.charAt(charIndex);
                charIndex++;
                
                // Add pulsing glow during typing
                titleElement.style.filter = `brightness(${1 + Math.sin(charIndex * 0.5) * 0.2})`;
            } else {
                clearInterval(typeInterval);
                titleElement.classList.add('typewriter-complete');
                titleElement.style.filter = '';
            }
        }, typeSpeed);
    }, startDelay);
}

// Enhanced Contact Form with brightness feedback
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('success-modal');

    if (!contactForm || !modal) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation with enhanced visual feedback
        if (!name || !email || !message) {
            showError('Please fill in all fields');
            flashFormError();
            return;
        }

        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            flashFormError();
            return;
        }

        // Submit form with enhanced effects
        submitForm(name, email, message);
    });

    function submitForm(name, email, message) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Enhanced loading state with glow
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        submitBtn.style.boxShadow = '0 0 20px rgba(0, 230, 255, 0.6)';
        submitBtn.style.filter = 'brightness(1.2)';

        // Simulate API call
        setTimeout(() => {
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.boxShadow = '';
            submitBtn.style.filter = '';
            
            // Show success modal with enhanced effects
            showSuccessModal();
            
            // Enhanced form success animation
            contactForm.classList.add('form-success');
            contactForm.style.filter = 'brightness(1.3)';
            setTimeout(() => {
                contactForm.classList.remove('form-success');
                contactForm.style.filter = '';
            }, 1000);
        }, 2000);
    }

    function showSuccessModal() {
        modal.classList.remove('hidden');
        modal.style.background = 'rgba(0, 0, 0, 0.9)';
        document.body.style.overflow = 'hidden';
        
        // Add pulsing glow to modal
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.boxShadow = '0 20px 60px rgba(0, 230, 255, 0.5)';
    }

    function flashFormError() {
        contactForm.style.filter = 'brightness(0.7) hue-rotate(0deg)';
        contactForm.style.borderColor = '#ff4444';
        setTimeout(() => {
            contactForm.style.filter = '';
            contactForm.style.borderColor = '';
        }, 300);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(message) {
        const existingError = contactForm.querySelector('.error-message');
        if (existingError) existingError.remove();

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            background: rgba(255, 68, 68, 0.2);
            color: #ff6b6b;
            padding: 10px 15px;
            border-radius: 8px;
            margin-bottom: 1rem;
            border: 1px solid rgba(255, 68, 68, 0.5);
            animation: slideInDown 0.3s ease-out;
            box-shadow: 0 5px 15px rgba(255, 68, 68, 0.3);
            text-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
        `;
        errorDiv.textContent = message;
        
        contactForm.insertBefore(errorDiv, contactForm.firstChild);
        
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
}

// Enhanced Modal Close Function
window.closeModal = function() {
    const modal = document.getElementById('success-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        modal.style.background = '';
    }
};

// Enhanced Floating Shapes with brighter effects
function initFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Enhanced glow effect
        shape.style.boxShadow = `0 0 40px rgba(0, 230, 255, 0.6)`;
        
        // Add random movement with brightness changes
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            const brightness = 1 + Math.random() * 0.3;
            
            shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
            shape.style.filter = `brightness(${brightness})`;
        }, 3000 + index * 1000);
        
        // Enhanced mouse interaction
        document.addEventListener('mousemove', (e) => {
            const rect = shape.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) * 0.01;
            const deltaY = (e.clientY - centerY) * 0.01;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const brightness = 1 + Math.max(0, (50 - distance) / 50) * 0.5;
            
            shape.style.transform += ` translate(${deltaX}px, ${deltaY}px)`;
            shape.style.filter = `brightness(${brightness})`;
        });
    });
}

// Enhanced Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-shapes');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const brightness = 1 + (scrolled * 0.0005);
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
            element.style.filter = `brightness(${Math.min(brightness, 1.3)})`;
        });
    });
}

// Enhanced Skill Item Animations
function initSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Enhanced ripple effect with brightness
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(0, 230, 255, 0.4);
                transform: translate(-50%, -50%);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 0;
                box-shadow: 0 0 20px rgba(0, 230, 255, 0.6);
            `;
            
            item.style.position = 'relative';
            item.style.filter = 'brightness(1.2)';
            item.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.filter = '';
        });
    });
}

// Enhanced scroll progress with glow
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        z-index: 1001;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(0, 230, 255, 0.8);
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        const glowIntensity = 0.5 + (scrollProgress / 100) * 0.5;
        
        progressBar.style.width = scrollProgress + '%';
        progressBar.style.boxShadow = `0 0 ${10 + scrollProgress * 0.3}px rgba(0, 230, 255, ${glowIntensity})`;
    });
}

// Enhanced education animations
function initEducationAnimations() {
    const educationCards = document.querySelectorAll('.education-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    entry.target.style.filter = 'brightness(1.1)';
                    
                    setTimeout(() => {
                        entry.target.style.filter = '';
                    }, 800);
                }, index * 300);
            }
        });
    }, { threshold: 0.2 });
    
    educationCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(card);
    });
}

// Enhanced cursor effects
function initCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent-primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        transition: all 0.1s ease;
        display: none;
        box-shadow: 0 0 15px rgba(0, 230, 255, 0.6);
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Enhanced cursor on hover elements
    const hoverElements = document.querySelectorAll('a, button, .btn, .skill-item, .service-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = 'rgba(0, 230, 255, 0.3)';
            cursor.style.boxShadow = '0 0 25px rgba(0, 230, 255, 0.8)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.boxShadow = '0 0 15px rgba(0, 230, 255, 0.6)';
        });
    });
}

// Enhanced counter animations
function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-counter'));
                const duration = 2000;
                const increment = target / (duration / 50);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    counter.style.textShadow = '0 0 10px rgba(0, 230, 255, 0.8)';
                    
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                        counter.style.textShadow = '';
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 50);
                
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// New function for enhanced glow effects
function initEnhancedGlowEffects() {
    // Add enhanced glow to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        setInterval(() => {
            const intensity = 0.8 + Math.sin(Date.now() * 0.001) * 0.2;
            profileImage.style.boxShadow = `0 0 ${30 + intensity * 20}px rgba(0, 230, 255, ${intensity})`;
        }, 100);
    }

    // Add breathing glow effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        setInterval(() => {
            const intensity = 0.1 + Math.sin(Date.now() * 0.001 + index) * 0.05;
            card.style.boxShadow = `0 8px 25px rgba(0, 230, 255, ${intensity})`;
        }, 150);
    });

    // Add pulsing effect to accent text
    const accentTexts = document.querySelectorAll('.text-accent');
    accentTexts.forEach(text => {
        setInterval(() => {
            const intensity = 0.6 + Math.sin(Date.now() * 0.002) * 0.2;
            text.style.textShadow = `0 0 25px rgba(0, 230, 255, ${intensity})`;
        }, 100);
    });
}

// New function for brightness enhancements
function initBrightnessEnhancements() {
    // Add subtle brightness changes on scroll
    window.addEventListener('scroll', () => {
        const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
        const brightness = 1 + scrollPercent * 0.1;
        
        document.body.style.filter = `brightness(${Math.min(brightness, 1.1)})`;
    });

    // Add interactive brightness for clickable elements
    const interactiveElements = document.querySelectorAll('button, .btn, a, .skill-item, .service-card, .contact-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'all 0.3s ease';
            element.style.filter = 'brightness(1.15) contrast(1.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.filter = '';
        });
        
        element.addEventListener('mousedown', () => {
            element.style.filter = 'brightness(1.3) contrast(1.2)';
        });
        
        element.addEventListener('mouseup', () => {
            element.style.filter = 'brightness(1.15) contrast(1.1)';
        });
    });
}

// Performance optimization for animations
function optimizeAnimations() {
    const isLowPerformance = navigator.hardwareConcurrency < 4 || 
                            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isLowPerformance) {
        document.documentElement.style.setProperty('--transition-smooth', 'all 0.2s ease');
        document.documentElement.style.setProperty('--transition-bounce', 'all 0.3s ease');
        
        // Disable complex glow animations on low-performance devices
        const complexAnimations = document.querySelectorAll('.floating-shapes, .profile-glow');
        complexAnimations.forEach(element => {
            element.style.animation = 'none';
            element.style.filter = 'brightness(1.1)'; // Keep static brightness instead
        });
    }
}

// Enhanced entrance animation
setTimeout(() => {
    const homeSection = document.querySelector('.home-section');
    if (homeSection) {
        homeSection.style.opacity = '1';
        homeSection.style.transform = 'translateY(0)';
        homeSection.style.filter = 'brightness(1.05)';
        
        setTimeout(() => {
            homeSection.style.filter = '';
        }, 1000);
    }
}, 100);

// Add enhanced custom CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .typewriter-complete::after {
        content: '|';
        animation: blink 1s infinite;
        color: var(--accent-primary);
        text-shadow: 0 0 15px rgba(0, 230, 255, 0.8);
    }
    
    @keyframes blink {
        0%, 50% { 
            opacity: 1; 
            filter: brightness(1.5);
        }
        51%, 100% { 
            opacity: 0; 
            filter: brightness(1);
        }
    }
    
    .form-success {
        transform: scale(1.02);
        box-shadow: 0 0 40px rgba(0, 230, 255, 0.4);
        transition: all 0.3s ease;
        filter: brightness(1.2);
    }
    
    .btn:hover {
        animation: buttonPulse 0.3s ease;
        filter: brightness(1.1);
    }
    
    @keyframes buttonPulse {
        0% { 
            transform: scale(1); 
            filter: brightness(1.1);
        }
        50% { 
            transform: scale(1.05); 
            filter: brightness(1.2);
        }
        100% { 
            transform: scale(1.02); 
            filter: brightness(1.15);
        }
    }
    
    .service-card:hover .service-title {
        color: var(--accent-glow);
        text-shadow: 0 0 15px rgba(0, 230, 255, 0.8);
        filter: brightness(1.2);
    }
    
    .profile-image:hover {
        animation: profileGlow 2s ease-in-out infinite;
    }
    
    @keyframes profileGlow {
        0%, 100% {
            box-shadow: 0 0 30px rgba(0, 230, 255, 0.7);
            filter: brightness(1.1);
        }
        50% {
            box-shadow: 0 0 50px rgba(0, 230, 255, 1);
            filter: brightness(1.2);
        }
    }
    
    .btn .fa-spinner {
        animation: spin 1s linear infinite;
        filter: brightness(1.3);
    }
    
    @keyframes spin {
        from { 
            transform: rotate(0deg); 
            filter: brightness(1.3);
        }
        to { 
            transform: rotate(360deg); 
            filter: brightness(1.5);
        }
    }
    
    /* Enhanced glow for section titles */
    .section-title.visible {
        animation: titleGlow 1s ease-out;
    }
    
    @keyframes titleGlow {
        0% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
            filter: brightness(1);
        }
        50% {
            text-shadow: 0 0 25px rgba(255, 255, 255, 0.6);
            filter: brightness(1.2);
        }
        100% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
            filter: brightness(1);
        }
    }
`;
document.head.appendChild(style);