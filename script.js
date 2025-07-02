// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('scroll-down').addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Memory tabs functionality
const memoryTabs = document.querySelectorAll('.memory-tab');
memoryTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        // Remove active class from all tabs and contents
        memoryTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.memory-content').forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab and corresponding content
        this.classList.add('active');
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Countdown calculation - actualizado para 7 meses
function updateCountdown() {
    const startDate = new Date('2024-12-03T00:00:00'); // Inicio relación
    const now = new Date();

    // Calcular meses
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    if (now.getDate() < startDate.getDate()) {
        months--;
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    const totalMonths = years * 12 + months;

    // Calcular días transcurridos (contando día actual)
    const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffMs = today - start;
    const totalDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    // Hora actual
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Mostrar en HTML
    document.getElementById('months-together').textContent = totalMonths;
    document.getElementById('days-together').textContent = totalDays;
    document.getElementById('hours-together').textContent = hours;
    document.getElementById('minutes-together').textContent = minutes;
    document.getElementById('seconds-together').textContent = seconds;
}


// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Interactive messages
const birthdayMessages = [
    "Feliz cumpleaños, mi amor. Eres el regalo más preciado que la vida me ha dado. Que este año esté lleno de sueños cumplidos y alegrías compartidas. Te amo más que a las palabras.",
    "En tu día especial, quiero recordarte lo increíble que eres. Tu sonrisa ilumina mi mundo y tu amor llena mi corazón. Que todos tus deseos se hagan realidad. Feliz cumpleaños.",
    "Hoy celebramos el día en que el mundo se llenó de tu luz. Eres mi razón para sonreír cada mañana. Feliz cumpleaños, mi amor eterno.",
    "Feliz cumpleaños a la mujer más maravillosa que conozco. Cada día a tu lado es un regalo que atesoro. Que este año te traiga toda la felicidad que mereces.",
    "En tu cumpleaños, quiero prometerte que estaré a tu lado en cada paso del camino. Eres mi todo. Feliz cumpleaños, mi amor."
];

const anniversaryMessages = [
    "Felices 7 meses, mi vida. Cada día a tu lado es mejor que el anterior. Gracias por este tiempo lleno de amor, risas y momentos inolvidables. Te amo más con cada día que pasa.",
    "Celebramos 7 meses de amor y complicidad. Eres mi persona favorita en este mundo y no cambio lo nuestro por nada. Felices 7 meses, mi corazón.",
    "7 meses de compartir sueños, risas y amor. Eres mi compañera perfecta en esta aventura llamada vida. Felices 7 meses, te amo.",
    "7 meses de crecer juntos, de aprender el uno del otro, de amarnos más profundamente. Felices 7 meses, mi amor. Aquí estoy para todos los meses que vendrán.",
    "Felices 7 meses a la mujer que hace que cada día sea especial. Gracias por tu amor, tu paciencia y tu luz. No hay nadie como tú en este mundo."
];

document.getElementById('birthday-btn').addEventListener('click', function () {
    const result = document.getElementById('interactive-result');
    const randomMessage = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];

    result.textContent = randomMessage;
    result.style.display = 'flex';

    createHearts(10);
});

document.getElementById('anniversary-btn').addEventListener('click', function () {
    const result = document.getElementById('interactive-result');
    const randomMessage = anniversaryMessages[Math.floor(Math.random() * anniversaryMessages.length)];

    result.textContent = randomMessage;
    result.style.display = 'flex';

    createHearts(10);
});

function createHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
            heart.style.left = (Math.random() * window.innerWidth) + 'px';
            heart.style.top = (window.innerHeight + 50) + 'px';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            heart.style.userSelect = 'none';
            heart.style.transform = `scale(${Math.random() * 0.8 + 0.5}) rotate(${Math.random() * 60 - 30}deg)`;
            heart.style.opacity = '0.8';

            document.body.appendChild(heart);

            const animationDuration = Math.random() * 3 + 2;

            heart.style.transition = `all ${animationDuration}s ease-out`;

            setTimeout(() => {
                heart.style.top = '-100px';
                heart.style.opacity = '0';
                heart.style.transform = `scale(${Math.random() * 0.5 + 0.2}) rotate(${Math.random() * 120 - 60}deg)`;
            }, 10);

            setTimeout(() => {
                heart.remove();
            }, animationDuration * 1000);
        }, i * 300);
    }
}

// Create floating elements
const shapes = ['❤', '✿', '❀', '★', '✧', '✦'];
for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        const element = document.createElement('div');
        element.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
        element.style.position = 'fixed';
        element.style.fontSize = (Math.random() * 40 + 20) + 'px';
        element.style.color = `rgba(255, 107, 107, ${Math.random() * 0.4 + 0.1})`;
        element.style.left = (Math.random() * window.innerWidth) + 'px';
        element.style.top = (Math.random() * window.innerHeight) + 'px';
        element.style.zIndex = '-1';
        element.style.pointerEvents = 'none';
        element.style.userSelect = 'none';
        element.style.animation = `floating ${Math.random() * 10 + 5}s infinite ease-in-out`;
        element.style.animationDelay = `${Math.random() * 5}s`;
        element.style.transform = `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(element);
    }, i * 300);
}

// Typewriter effect for letter (optional)
function typeWriter(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Uncomment to enable typewriter effect for the letter
// window.addEventListener('load', function() {
//     const letterContent = document.querySelector('.letter-content');
//     const originalText = letterContent.innerHTML;
//     letterContent.innerHTML = '';
//     typeWriter(letterContent, originalText, 20);
// });