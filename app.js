// Función para reproducir un sonido
function reproducirSonido(sonido) {
    const audio = new Audio(sonido);
    audio.play();
}

// Mostrar la pantalla de inicio al cargar la página y reproducir el sonido de Pocoyo
window.onload = function() {
    mostrarPantalla('pantalla-inicio');
    reproducirSonido('Sounds/pocoyo.mp3'); // Reproduce el sonido de Pocoyó al cargar la página
};

// Función para ocultar todas las pantallas y mostrar solo una específica
function mostrarPantalla(idPantalla) {
    let pantallas = document.querySelectorAll('.pantalla');
    pantallas.forEach(function(pantalla) {
        pantalla.classList.add('oculto');
    });

    let pantallaSeleccionada = document.getElementById(idPantalla);
    pantallaSeleccionada.classList.remove('oculto');
}


function iniciarApp() {
    reproducirSonido('Sounds/pocoyo.mp3'); // Sonido al iniciar la aplicación
    document.getElementById('pantalla-inicio').classList.add('oculto');
    document.getElementById('pantalla-interaccion').classList.remove('oculto');
}

function mostrarConfiguraciones() {
    reproducirSonido('Sounds/homero.mp3'); // Sonido de clic de botón
    alert('Configuraciones no disponibles aún.');
}

function mostrarAyuda() {
    reproducirSonido('Sounds/homero.mp3'); // Sonido de clic de botón
    alert('Ayuda no disponible aún.');
}

function enviarPregunta() {
    const pregunta = document.getElementById('entrada-chat').value;
    reproducirSonido('Sounds/homero.mp3'); // Sonido al enviar una pregunta
    document.getElementById('respuesta-texto').innerText = `Profesor: Estoy procesando tu pregunta: "${pregunta}"`;
    // Aquí puedes agregar la llamada a tu modelo de IA o backend
}

function activarVoz() {
    reproducirSonido('sounds/voice.mp3'); // Sonido de activación de voz
    alert('Función de voz aún no implementada.');
}


