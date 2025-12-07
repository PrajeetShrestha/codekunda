
// Wait for DOM load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initThreeJS();
    initGSAP();

    initMobileMenu();
    initFormModal();
    initInteractions();

    initDomainLock();
});

/* =========================================
   0. Domain Lock (Anti-Theft)
   ========================================= */
function initDomainLock() {
    const allowedDomains = ['codekunda.com', 'www.codekunda.com', 'localhost', '127.0.0.1'];
    const hostname = window.location.hostname;

    // Check if current hostname is in allowed list
    // We strive to be lenient with subdomains for previews if needed, but for now strict check:
    if (!allowedDomains.includes(hostname) && !hostname.endsWith('.firebaseapp.com') && !hostname.endsWith('.web.app')) {
        // Detected unauthorized domain
        // console.warn('Unauthorized domain detected. Redirecting...');
        // window.location.href = 'https://codekunda.com'; 
        // Commented out to prevent accidental lockout during development/testing on different local IPs
        // Uncomment the line above for production locking.

        // For now, let's just log a strict warning or show a subtle watermark
        console.log('%c Propery of CodeKunda ', 'background: #222; color: #bada55; font-size: 20px');
    } else {
        console.log('%c CodeKunda Authorized ', 'background: #222; color: #bada55');
    }
}

/* =========================================
   1. Theme Management
   ========================================= */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    if (!themeToggleBtn) return;

    const icon = themeToggleBtn.querySelector('i');

    // Check localStorage first, then system preference
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme);

        // Update meta theme-color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#f8fafc');
        }

        // Update Three.js/Particles if available
        if (typeof updateThreeJSTheme === 'function') {
            updateThreeJSTheme(theme);
        }
    }

    function updateIcon(theme) {
        const isDark = theme === 'dark';
        if (icon) {
            // Remove both first to avoid conflicts
            icon.classList.remove('fa-moon', 'fa-sun');
            icon.classList.add(isDark ? 'fa-sun' : 'fa-moon'); // Sun for dark mode (to switch to light), Moon for light (to switch to dark)
        }
        themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    }

    // Initialize
    const initialTheme = getPreferredTheme();
    // We only set data-attribute if it's explicitly saved or different from default to avoid overriding CSS media query if not needed,
    // but for simplicity and consistency with JS access, setting it explicitly is safer.
    setTheme(initialTheme);

    // Event Listener for Button
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    // Listen for System Changes (only works if user hasn't overridden)
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'light' : 'dark';
            setTheme(newTheme);
        }
    });
}

/* =========================================
   2. Three.js Background (Particle Field)
   ========================================= */
// Logic moved to js/particles.js

/* =========================================
   3. GSAP Animations
   ========================================= */
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Reveal
    const tl = gsap.timeline();

    tl.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        skewY: 7
    })
        .from('.reveal-text-delay', {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.5");

    // Vision Section Parallax
    gsap.utils.toArray('.vision-text').forEach(section => {
        gsap.to(section, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Stats Counter
    gsap.utils.toArray('.stat-number').forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));

        ScrollTrigger.create({
            trigger: stat,
            start: "top 80%",
            once: true,
            onEnter: () => {
                gsap.to(stat, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power1.out"
                });
            }
        });
    });

    // Services Stagger (was Products)
    gsap.fromTo('.service-card',
        {
            y: 50,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: '.services-grid',
                start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            clearProps: "all"
        }
    );

    // Products Stagger (New)
    gsap.fromTo('.product-card',
        {
            y: 50,
            opacity: 0
        },
        {
            scrollTrigger: {
                trigger: '.products-grid',
                start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            clearProps: "all"
        }
    );
}



/* =========================================
   1.5 Mobile Menu with Accessibility
   ========================================= */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    if (!toggle || !nav) return;

    const links = nav.querySelectorAll('.nav-link');
    const focusableInNav = nav.querySelectorAll('a, button');

    function openMenu() {
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        nav.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Focus first link for keyboard users
        if (focusableInNav.length) {
            focusableInNav[0].focus();
        }
    }

    function closeMenu() {
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('active');
        document.body.style.overflow = '';
        toggle.focus();
    }

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.contains('active');
        isOpen ? closeMenu() : openMenu();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Focus trap within nav when open
    nav.addEventListener('keydown', (e) => {
        if (!nav.classList.contains('active')) return;
        if (e.key === 'Tab' && focusableInNav.length > 0) {
            const first = focusableInNav[0];
            const last = focusableInNav[focusableInNav.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });

    // Close menu when clicking a nav link
    links.forEach(link => link.addEventListener('click', closeMenu));

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') &&
            !nav.contains(e.target) &&
            !toggle.contains(e.target)) {
            closeMenu();
        }
    });
}

/* =========================================
   6. Form Modal with Loading State
   ========================================= */
function initFormModal() {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('form-modal');
    if (!form || !modal) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const formspreeId = form.dataset.formspreeId;
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';

    function setLoading(isLoading) {
        if (!submitBtn) return;
        submitBtn.disabled = isLoading;
        submitBtn.classList.toggle('is-loading', isLoading);
        submitBtn.textContent = isLoading ? '' : originalBtnText;
    }

    function showError(message) {
        // Create or update error toast
        let toast = document.querySelector('.form-error-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'form-error-toast';
            toast.setAttribute('role', 'alert');
            toast.setAttribute('aria-live', 'assertive');
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('visible');
        setTimeout(() => toast.classList.remove('visible'), 5000);
    }

    function openModal() {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const closeBtn = modal.querySelector('[data-close]');
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        // Return focus to form submit button
        if (submitBtn) submitBtn.focus();
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formspreeId) {
            showError('Form is not configured. Please set formspree_id.');
            setLoading(false);
            return;
        }

        const formData = new FormData(form);
        const name = (formData.get('name') || '').toString().trim();
        const msg = (formData.get('message') || '').toString().trim();
        if (msg) {
            formData.set('message', name ? `${name}: ${msg}` : msg);
        }

        try {
            const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                form.reset();
                openModal();
            } else {
                const result = await response.json().catch(() => ({}));
                console.error('Form submission failed:', result);
                showError('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            showError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    });

    // Modal close button
    const closeBtn = modal.querySelector('[data-close]');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Focus trap within modal when open
    modal.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Tab') {
            const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });
}

/* =========================================
   7. Premium Interactions
   ========================================= */
function initInteractions() {
    // Card Glow Effect
    const cards = document.querySelectorAll('.service-card, .product-card, .launch-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}
