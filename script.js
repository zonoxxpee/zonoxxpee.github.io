
// Matrix Rain Effect
function createMatrixRain() {
    const matrix = document.getElementById('matrix');
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 50; i++) {
        const span = document.createElement('span');
        span.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        span.style.cssText = `
            position: absolute;
            color: #00ff88;
            font-family: 'Courier New', monospace;
            font-size: ${Math.random() * 16 + 10}px;
            left: ${Math.random() * 100}%;
            animation: matrixFall ${Math.random() * 5 + 3}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
            opacity: ${Math.random() * 0.7 + 0.3};
            text-shadow: 0 0 5px #00ff88;
        `;
        matrix.appendChild(span);
    }
}

// Enhanced animations
const enhancedStyle = document.createElement('style');
enhancedStyle.textContent = `
    @keyframes matrixFall {
        0% {
            transform: translateY(-100vh) rotateX(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        50% {
            transform: translateY(50vh) rotateX(180deg);
            opacity: 0.8;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(100vh) rotateX(360deg);
            opacity: 0;
        }
    }
    
    @keyframes cyberpunkFloat {
        0% {
            transform: translate(0px, 0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        25% {
            transform: translate(20px, -30px) rotate(90deg);
            opacity: 0.8;
        }
        50% {
            transform: translate(-15px, -60px) rotate(180deg);
            opacity: 0.6;
        }
        75% {
            transform: translate(-30px, -90px) rotate(270deg);
            opacity: 0.4;
        }
        100% {
            transform: translate(0px, -120px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes scanMove {
        0% {
            left: -100%;
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        50% {
            left: 50%;
            opacity: 0.8;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            left: 100%;
            opacity: 0;
        }
    }
    
    @keyframes holoGlitch {
        0%, 100% {
            transform: translate(0px, 0px);
            filter: hue-rotate(0deg);
        }
        10% {
            transform: translate(-2px, 1px);
            filter: hue-rotate(90deg);
        }
        20% {
            transform: translate(2px, -1px);
            filter: hue-rotate(180deg);
        }
        30% {
            transform: translate(-1px, 2px);
            filter: hue-rotate(270deg);
        }
        40% {
            transform: translate(1px, -2px);
            filter: hue-rotate(360deg);
        }
    }
`;
document.head.appendChild(enhancedStyle);

// Floating particles for game preview
function createFloatingParticles() {
    const container = document.querySelector('.floating-particles');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${i % 3 === 0 ? '#00ff88' : i % 3 === 1 ? '#00b4ff' : '#8844ff'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 4 + 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            box-shadow: 0 0 10px currentColor;
            opacity: 0.7;
        `;
        container.appendChild(particle);
    }
}

// Particle float animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
        }
        25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
        }
        50% {
            transform: translateY(-10px) translateX(-15px);
            opacity: 0.5;
        }
        75% {
            transform: translateY(-25px) translateX(5px);
            opacity: 1;
        }
    }
`;
document.head.appendChild(particleStyle);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
        header.style.backdropFilter = 'blur(25px)';
        header.style.boxShadow = '0 0 50px rgba(0, 255, 136, 0.3)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = 'none';
    }
    
    // Header hide/show on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});

// Navigation active state
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Button ripple effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    circle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(circle);
    
    setTimeout(() => {
        circle.remove();
    }, 600);
}

// Add ripple to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Special animations for different elements
            if (entry.target.classList.contains('feature-card')) {
                entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
            }
            
            if (entry.target.classList.contains('tournament-item')) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                entry.target.style.animation = 'slideInRight 0.6s ease-out forwards';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .tournament-item, .hud-element').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// Animation keyframes
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// Gaming setup interactions
const hudElements = document.querySelectorAll('.hud-element');
hudElements.forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateX(15px) scale(1.02)';
        element.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
        
        // Add glitch effect
        if (Math.random() > 0.7) {
            element.style.animation = 'glitch 0.3s ease-in-out';
            setTimeout(() => {
                element.style.animation = '';
            }, 300);
        }
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateX(0) scale(1)';
        element.style.boxShadow = '';
    });
});

// Glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0%, 100% { transform: translateX(0) scale(1); }
        10% { transform: translateX(-2px) scale(1.01); }
        20% { transform: translateX(2px) scale(0.99); }
        30% { transform: translateX(-1px) scale(1.02); }
        40% { transform: translateX(1px) scale(0.98); }
        50% { transform: translateX(-2px) scale(1.01); }
        60% { transform: translateX(2px) scale(0.99); }
        70% { transform: translateX(-1px) scale(1.01); }
        80% { transform: translateX(1px) scale(0.99); }
        90% { transform: translateX(-1px) scale(1); }
    }
`;
document.head.appendChild(glitchStyle);

// Dynamic typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed + Math.random() * 50);
        }
    }
    
    type();
}

// Cursor for typing effect
function addCursor(element) {
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = `
        color: #00ff88;
        animation: blink 1s infinite;
        text-shadow: 0 0 10px #00ff88;
    `;
    element.appendChild(cursor);
}

const blinkStyle = document.createElement('style');
blinkStyle.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(blinkStyle);

// Enhanced Cyberpunk Particles
function createCyberpunkParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'cyberpunk-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        const colors = ['#00ff88', '#00b4ff', '#8844ff', '#ff4488', '#ffaa00'];
        const size = Math.random() * 3 + 1;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: cyberpunkFloat ${Math.random() * 10 + 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 ${size * 3}px currentColor;
            opacity: 0.7;
        `;
        particleContainer.appendChild(particle);
    }
}

// Enhanced Matrix with more characters
function createMatrixRain() {
    const matrix = document.getElementById('matrix');
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < 80; i++) {
        const span = document.createElement('span');
        span.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        span.style.cssText = `
            position: absolute;
            color: ${i % 3 === 0 ? '#00ff88' : i % 3 === 1 ? '#00b4ff' : '#8844ff'};
            font-family: 'Courier New', monospace;
            font-size: ${Math.random() * 20 + 8}px;
            left: ${Math.random() * 100}%;
            animation: matrixFall ${Math.random() * 8 + 2}s linear infinite;
            animation-delay: ${Math.random() * 3}s;
            opacity: ${Math.random() * 0.8 + 0.2};
            text-shadow: 0 0 8px currentColor;
            font-weight: ${Math.random() > 0.5 ? 'bold' : 'normal'};
        `;
        matrix.appendChild(span);
        
        // Change character randomly
        setInterval(() => {
            span.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        }, Math.random() * 3000 + 1000);
    }
}

// Holographic Effects
function createHolographicEffects() {
    const holoContainer = document.createElement('div');
    holoContainer.className = 'holographic-effects';
    holoContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.3;
    `;
    document.body.appendChild(holoContainer);
    
    // Create scanning lines
    for (let i = 0; i < 5; i++) {
        const scanLine = document.createElement('div');
        scanLine.style.cssText = `
            position: absolute;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff88, transparent);
            top: ${Math.random() * 100}%;
            animation: scanMove ${Math.random() * 15 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 10px #00ff88;
        `;
        holoContainer.appendChild(scanLine);
    }
}

// Modal Functions
function openInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeInfoModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeInfoModal();
    }
});

// Custom Cursor
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hover effects
    const hoverElements = document.querySelectorAll('button, a, .nav-link, .social-card, .tournament-item, .social-link');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Click effect
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
}

// Initialize effects when page loads
window.addEventListener('load', () => {
    createMatrixRain();
    createFloatingParticles();
    createCyberpunkParticles();
    createHolographicEffects();
    createCustomCursor();
    
    // Start typing effect for hero title
    setTimeout(() => {
        const titleAccent = document.querySelector('.title-accent');
        if (titleAccent) {
            const originalText = titleAccent.textContent;
            typeWriter(titleAccent, originalText, 150);
            setTimeout(() => {
                addCursor(titleAccent);
            }, originalText.length * 150 + 500);
        }
    }, 1000);
});

// Console ASCII art
console.log(`
    ███████╗ ██████╗ ███╗   ██╗ ██████╗ ██╗  ██╗██╗  ██╗
    ╚══════╝██╔═══██╗████╗  ██║██╔═══██╗╚██╗██╔╝╚██╗██╔╝
    ███████╗██║   ██║██╔██╗ ██║██║   ██║ ╚███╔╝  ╚███╔╝ 
    ╚══════╝██║   ██║██║╚██╗██║██║   ██║ ██╔██╗  ██╔██╗ 
    ███████╗╚██████╔╝██║ ╚████║╚██████╔╝██╔╝ ██╗██╔╝ ██╗
    ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
    
    🎮 ENTRA A LA ARENA - DOMINA LA COMPETENCIA 🎮
    
    Bienvenido a ZONOXX Arena - La Experiencia Gaming Definitiva
    ¿Listo para subir de nivel? ¡Vamos!
`);

// Performance monitoring
let fps = 0;
let lastTime = performance.now();

function measureFPS() {
    const now = performance.now();
    fps = Math.round(1000 / (now - lastTime));
    lastTime = now;
    
    if (fps < 30) {
        // Reduce particle count for better performance
        const matrixSpans = document.querySelectorAll('#matrix span');
        if (matrixSpans.length > 30) {
            for (let i = 30; i < matrixSpans.length; i++) {
                matrixSpans[i].remove();
            }
        }
    }
    
    requestAnimationFrame(measureFPS);
}

measureFPS();

// Easter egg - Konami Code
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Activate special effects
            document.body.style.animation = 'rainbow 2s ease-in-out infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                konamiIndex = 0;
            }, 10000);
        }
    } else {
        konamiIndex = 0;
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);
