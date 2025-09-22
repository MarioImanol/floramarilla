// Inicialización de particles.js
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 3, "random": true, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" },
            "onclick": { "enable": true, "mode": "repulse" },
            "resize": true
        },
        "modes": {
            "bubble": { "distance": 250, "size": 6, "duration": 2, "opacity": 0.8, "speed": 3 },
            "repulse": { "distance": 150, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

// Lógica para abrir la carta
document.getElementById('envelope').addEventListener('click', function() {
    this.classList.toggle('open');
    const instruction = document.querySelector('.instruction');
    if (this.classList.contains('open')) {
        instruction.style.opacity = '0';
    } else {
        instruction.style.opacity = '1';
    }
});