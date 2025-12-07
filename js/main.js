
// Wait for DOM load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initThreeJS();
    initGSAP();
    initTilt();
    initMobileMenu();
    initFormModal();
});

/* =========================================
   1. Theme Management
   ========================================= */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggleBtn.querySelector('i');

    // Load saved theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        let theme = htmlElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);

        // Update Three.js colors if needed
        updateThreeJSTheme(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
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
   5. Vanilla Tilt Init
   ========================================= */
function initTilt() {
    VanillaTilt.init(document.querySelectorAll(".product-card, .service-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02
    });
}

/* =========================================
   1.5 Mobile Menu
   ========================================= */
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    const links = document.querySelectorAll('.nav-link');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') &&
            !nav.contains(e.target) &&
            !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function initFormModal() {
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('form-modal');
    if (!form || !modal) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    const formspreeId = form.dataset.formspreeId;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        if (!formspreeId) {
            alert('Form is not configured. Please set formspree_id.');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
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
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                const result = await response.json().catch(() => ({}));
                console.error('Form submission failed:', result);
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        }
    });

    const closeBtn = modal.querySelector('[data-close]');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
