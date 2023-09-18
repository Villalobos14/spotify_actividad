const carrusel = document.querySelector('.carrusel-items');

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let intervalo = null
let step = 5

const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft >= maxScrollLeft || carrusel.scrollLeft <= 0) {
            step = step * -1;
        }
    },100); // Ajustado el intervalo de tiempo para un desplazamiento más suave
};

const stop = () => {
    clearInterval(intervalo);
}

start();