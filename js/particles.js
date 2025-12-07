/* =========================================
   Three.js Background (Particle Field)
   ========================================= */
let scene, camera, renderer, particles, particleSystem;


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


    // Animation Loop
    animate();
}

function createParticles() {
    const geometry = new THREE.BufferGeometry();
    const count = 800; // Reduced for subtle effect

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const randomness = new Float32Array(count * 3); // Store drift parameters

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100; // Spread
        colors[i] = Math.random();
        randomness[i] = Math.random(); // Random value for drift
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('randomness', new THREE.BufferAttribute(randomness, 3));

    // Material
    const material = new THREE.PointsMaterial({
        size: 0.5, // Adjusted for soft glow
        map: createGlowTexture(),
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending // Adds to the sparkle effect
    });

    particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Initial color set based on theme
    updateThreeJSTheme(document.documentElement.getAttribute('data-theme'));
}

function createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    // Create soft radial glow
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Bright center
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)'); // Transparent edge

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

function updateThreeJSTheme(theme) {
    if (!particleSystem) return;

    const colors = particleSystem.geometry.attributes.color.array;

    // Realistic Star Colors (for Dark Mode)
    const starColors = [
        new THREE.Color(0xffffff), // White
        new THREE.Color(0xcae8ff), // Blue-white
        new THREE.Color(0xfff4e5), // Yellow-white
        new THREE.Color(0xe0e7ff)  // Pale Indigo
    ];

    // Dark Dusty Colors (for Light Mode)
    const dustColors = [
        new THREE.Color(0x1e1b4b), // Dark Indigo
        new THREE.Color(0x334155), // Slate 700
        new THREE.Color(0x475569)  // Slate 600
    ];

    for (let i = 0; i < colors.length; i += 3) {
        let color;
        if (theme === 'dark') {
            color = starColors[Math.floor(Math.random() * starColors.length)];
            // Apply slight randomness to brightness for variety
            const brightness = 0.8 + Math.random() * 0.2;
            color = color.clone().multiplyScalar(brightness);
        } else {
            color = dustColors[Math.floor(Math.random() * dustColors.length)];
        }

        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
    }

    particleSystem.geometry.attributes.color.needsUpdate = true;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}



function animate() {
    requestAnimationFrame(animate);

    if (particleSystem) {
        const positions = particleSystem.geometry.attributes.position.array;
        const randomness = particleSystem.geometry.attributes.randomness.array;
        const colors = particleSystem.geometry.attributes.color.array;
        const time = Date.now() * 0.001;

        for (let i = 0; i < positions.length; i += 3) {
            // Y-axis movement (Drift Upwards) - Slower
            positions[i + 1] += 0.005 + (randomness[i] * 0.01);

            // X-axis movement (Slight Sway) - Slower
            positions[i] += Math.sin(time * 0.2 + randomness[i] * 10) * 0.005;

            // Reset if out of view (Top -> Bottom)
            if (positions[i + 1] > 50) {
                positions[i + 1] = -50;
            }

            // Twinkle Effect (Pulse Opacity via Color)
            // REFINED APPROACH: Since we have `randomness`, we can use that to vary individual particle brightness 
            // BUT we need the base color.
            // Let's just create a nice movement for now as the "light emanating" part is provided by the texture.
            // And maybe a slight Z-axis wobble which might interact with sizeAttenuation to create a pseudo-twinkle.

            // Slower twinkle oscillation
            positions[i + 2] += Math.cos(time * 0.5 + randomness[i] * 20) * 0.02;
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;
        // particleSystem.geometry.attributes.color.needsUpdate = true; // Disabled for performance/complexity reasons

        // Very subtle overall rotation
        particleSystem.rotation.y += 0.0001;
    }

    renderer.render(scene, camera);
}
