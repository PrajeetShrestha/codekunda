
// Wait for DOM load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initThreeJS();
    initGSAP();
    initCursor();
    initTilt();
    initMobileMenu();
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
let scene, camera, renderer, particles, particleSystem;
let mouseX = 0, mouseY = 0;

function initThreeJS() {
    const container = document.getElementById('canvas-container');
    
    // Scene setup
    scene = new THREE.Scene();
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Create Particles
    createParticles();
    
    // Event Listeners
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    
    // Animation Loop
    animate();
}

function createParticles() {
    const geometry = new THREE.BufferGeometry();
    const count = 2000;
    
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for(let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100; // Spread
        colors[i] = Math.random();
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Material
    const material = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
    });
    
    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);
    
    // Initial color set based on theme
    updateThreeJSTheme(document.documentElement.getAttribute('data-theme'));
}

function updateThreeJSTheme(theme) {
    if (!particleSystem) return;
    
    const colors = particleSystem.geometry.attributes.color.array;
    const color1 = new THREE.Color(theme === 'dark' ? 0x6366f1 : 0x4f46e5); // Primary
    const color2 = new THREE.Color(theme === 'dark' ? 0xa855f7 : 0xdb2777); // Secondary
    
    for(let i = 0; i < colors.length; i += 3) {
        const mixedColor = color1.clone().lerp(color2, Math.random());
        colors[i] = mixedColor.r;
        colors[i+1] = mixedColor.g;
        colors[i+2] = mixedColor.b;
    }
    
    particleSystem.geometry.attributes.color.needsUpdate = true;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) / 2;
    mouseY = (event.clientY - window.innerHeight / 2) / 2;
}

function animate() {
    requestAnimationFrame(animate);
    
    if (particleSystem) {
        particleSystem.rotation.x += 0.0005;
        particleSystem.rotation.y += 0.0005;
        
        // Mouse interaction
        particleSystem.rotation.x += (mouseY * 0.00005 - particleSystem.rotation.x) * 0.05;
        particleSystem.rotation.y += (mouseX * 0.00005 - particleSystem.rotation.y) * 0.05;
    }
    
    renderer.render(scene, camera);
}

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
   4. Custom Cursor
   ========================================= */
function initCursor() {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-dot-outline');
    
    if (!dot || !outline) return;
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // Dot follows instantly
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        
        // Outline follows with delay (using animate for smoothness)
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
    
    // Hover effects
    const hoverables = document.querySelectorAll('a, button, .product-card, .service-card, .mobile-menu-toggle');
    
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            outline.style.width = '60px';
            outline.style.height = '60px';
            outline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        el.addEventListener('mouseleave', () => {
            outline.style.width = '40px';
            outline.style.height = '40px';
            outline.style.backgroundColor = 'transparent';
        });
    });
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
