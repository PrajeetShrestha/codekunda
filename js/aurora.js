/* =========================================
   Aurora Borealis Effect (Curtain Mesh Version)
   ========================================= */

let auroraMesh;

// Vertex Shader: Deforms the plane to look like a waving curtain
const auroraVertexShader = `
uniform float uTime;
varying vec2 vUv;
varying float vElevation;

void main() {
    vUv = uv;
    vec3 pos = position;

    // "Curtain" Folding Logic
    // Using multiple sine waves to create complex folds in Z-space
    
    // Primary large wave - FASTER
    float wave1 = sin(pos.x * 0.08 + uTime * 1.0);
    
    // Secondary detail wave - FASTER
    float wave2 = sin(pos.x * 0.2 + uTime * 2.5);
    
    // Combine waves - REDUCED AMPLITUDE (Flatter folds)
    float elevation = (wave1 + wave2) * 2.0;
    
    // Attenuate at the edges? Or let it flow off screen.
    
    pos.z += elevation;
    
    // Slight sway in X to simulate wind - FASTER
    pos.x += cos(pos.y * 0.15 + uTime * 1.5) * 3.0;
    
    vElevation = elevation;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`;

// Fragment Shader: Spectral coloring
const auroraFragmentShader = `
uniform float uTime; // Added uTime to fragment shader for color flow
uniform float uOpacity;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;
varying float vElevation;

void main() {
    // Gradient Logic
    // Fade out at bottom (0.0) and top (1.0)
    // Strength is high in the middle-bottom
    
    float strength = 1.0;
    
    // Soft fade from bottom to top (Bell curve)
    // No solid band, continuous fading for maximum smoothness
    float verticalFade = sin(vUv.y * 3.14159);
    strength *= verticalFade;
    
    // Fade out at horizontal edges (Left/Right) for merging
    float xFade = smoothstep(0.0, 0.15, vUv.x) * (1.0 - smoothstep(0.85, 1.0, vUv.x));
    strength *= xFade;
    
    // Add some variation based on elevation (folds are brighter?)
    // Reduced contrast: Base 0.95 + 0.05 variance for smoother look
    float brightness = 0.5 + 0.5 * sin(vElevation * 0.5);
    strength *= (0.95 + 0.05 * brightness);

    // Color mixing - CONTINUOUS FLOW
    // Mix based on UV Y + sine of time to shift colors up and down
    float colorMix = vUv.y * 1.5 + sin(uTime * 0.5) * 0.2;
    vec3 color = mix(uColor1, uColor2, colorMix);
    
    gl_FragColor = vec4(color, strength * uOpacity);
}
`;

function initAurora(scene) {
    console.log("AURORA: Initializing...");

    // Geometry: A wide, mesh strip
    // Increased height to 60 units (approx Full Screen Height at Camera Z=30)
    const geometry = new THREE.PlaneGeometry(300, 60, 200, 20);

    // Shader Material
    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uOpacity: { value: 0.55 },
            uColor1: { value: new THREE.Color(0x00ffaa) }, // Bright Teal
            uColor2: { value: new THREE.Color(0x6600ff) }  // Deep Purple
        },
        vertexShader: auroraVertexShader,
        fragmentShader: auroraFragmentShader,
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    auroraMesh = new THREE.Mesh(geometry, material);
    auroraMesh.position.y = 0; // Reset to center
    auroraMesh.position.z = 0; // Reset to z=0 for guaranteed view
    // Tilt it slightly to enhance 3D effect?
    // auroraMesh.rotation.x = -0.1; 

    console.log("AURORA: Added to scene", auroraMesh);
    scene.add(auroraMesh);

    // Initial theme check
    updateAuroraTheme(document.documentElement.getAttribute('data-theme'));
}

function updateAuroraTheme(theme) {
    if (auroraMesh && auroraMesh.material.uniforms) {
        // Update opacity uniform
        auroraMesh.material.uniforms.uOpacity.value = (theme === 'dark') ? 0.55 : 0.0;
    }
}

function updateAurora(time) {
    if (auroraMesh && auroraMesh.material.uniforms) {
        auroraMesh.material.uniforms.uTime.value = time;
    }
}
