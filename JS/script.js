const home = document.getElementById("carrusel_home");
const juego = document.getElementById("juego");
const recetas = document.getElementById("recetas");
const caramelos = document.getElementById("caramelos");
const vidio = document.getElementById("vidio");
const trucoTrato = document.getElementById("trucoTrato");

function botonHome() {
    home.style.display = "block";
    juego.style.display = "none";
    recetas.style.display = "none";
    caramelos.style.display = "none";
    vidio.style.display = "none";
    trucoTrato.style.display = "none";


}
function botonJuego() {
    juego.style.display = "block";
    home.style.display = "none";
    recetas.style.display = "none";
    caramelos.style.display = "none";
    vidio.style.display = "none";
    trucoTrato.style.display = "none";

}
function botonRecetas() {
    recetas.style.display = "block";
    home.style.display = "none";
    juego.style.display = "none";
    caramelos.style.display = "none";
    vidio.style.display = "none";
    trucoTrato.style.display = "none";

}
function botonCaramelos() {
    caramelos.style.display = "block";
    recetas.style.display = "none";
    home.style.display = "none";
    juego.style.display = "none";
    vidio.style.display = "none";
    trucoTrato.style.display = "none";
}
function botonTrucoTrato() {
    trucoTrato.style.display = "block";
    caramelos.style.display = "none";
    recetas.style.display = "none";
    home.style.display = "none";
    juego.style.display = "none";
    vidio.style.display = "none";

}

function botonVidio() {
    vidio.style.display = "block";
    caramelos.style.display = "none";
    recetas.style.display = "none";
    home.style.display = "none";
    juego.style.display = "none";
    trucoTrato.style.display = "none";

}




/* JUEGO */

// Selecciona el contenedor del juego
const gameContainer = document.querySelector('.game-container');
// Inicializa la puntuación del juego
let score = 0;
// Bandera para verificar el estado de victoria
let isWinner = false;

// Función para generar posiciones aleatorias en el contenedor
function randomPosition() {
    const randomX = Math.floor(Math.random() * 350);
    const randomY = Math.floor(Math.random() * 350);
    return { x: randomX, y: randomY };
}

// Función para crear una nueva calabaza en una posición aleatoria
function createPumpkin() {
    if (!isWinner) {
        const pumpkin = document.createElement('img');
        // Establece la imagen de la calabaza
        pumpkin.src = "./Imagenes/logoClabaza.png";
        // Agrega la clase de calabaza para aplicar estilos
        pumpkin.classList.add('pumpkin');
        // Obtiene una posición aleatoria y la aplica a la calabaza
        const { x, y } = randomPosition();
        pumpkin.style.left = `${x}px`;
        pumpkin.style.top = `${y}px`;
        // Agrega la calabaza al contenedor del juego
        gameContainer.appendChild(pumpkin);
    }
}

// Función para actualizar la puntuación en la pantalla y verificar la condición de victoria
function updateScore() {
    const scoreElement = document.querySelector('h2');
    if (!isWinner) {
        scoreElement.textContent = `¡Feliz Halloween! Puntuación: ${score}`;
        if (score >= 10) {
            isWinner = true;
            scoreElement.textContent = `¡Feliz Halloween! ¡Eres el ganador!`;
        }
    }
}

// Función que maneja los clics en el contenedor del juego
function handleClick(event) {
    // Verifica si el elemento clicado es una calabaza
    if (event.target.classList.contains('pumpkin') && !isWinner) {
        // Elimina la calabaza clicada
        event.target.remove();
        // Aumenta la puntuación del jugador
        score += 1;
        // Actualiza la puntuación mostrada en la pantalla y verifica la condición de victoria
        updateScore();
    }
}

// Crea una calabaza cada segundo (1000 milisegundos)
function startGame() {
    setInterval(createPumpkin, 1000);
}