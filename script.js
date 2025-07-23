const frases = [
    "Eres mi todo ❤️",
    "Te amo más cada día 💕",
    "Mi corazón late por ti ❤️",
    "Eres la razón de mi sonrisa 😊",
    "Quiero pasar el resto de mi vida contigo 👫",
    "Eres mi media naranja 🍊",
    "Te quiero siempre cerca 🤗",
    "Mi amor por ti es infinito ♾️",
    "Eres la luz de mi vida ✨",
    "Contigo es siempre 😘",
    "Eres mi refugio seguro 🏠",
    "Te amo con todo mi corazón 💖",
    "Eres mi mejor amiga 💕",
    "Quiero besarte todos los días 💋",
    "Eres la dueña de mi corazón 💖",
    "Mi vida sin ti no tiene sentido 😔",
    "Te quiero más que ayer, pero menos que mañana 💕",
    "Eres mi pasión y mi inspiración 🔥",
    "Quiero envejecer contigo 👴",
    "Eres la persona perfecta para mí 💯"
];

const burbujas = document.getElementById('burbujas');

function crearBurbuja() {
    const burbuja = document.createElement('div');
    burbuja.classList.add('burbuja');
    burbuja.textContent = frases[Math.floor(Math.random() * frases.length)];
    burbuja.style.top = `${Math.random() * 100}%`;
    burbuja.style.left = `${Math.random() * 100}%`;
    burbujas.appendChild(burbuja);

    setTimeout(() => {
        burbuja.remove();
    }, 8000);
}

setInterval(() => {
    crearBurbuja();
}, 500);
