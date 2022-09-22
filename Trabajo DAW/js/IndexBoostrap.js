const Paint = document.querySelector("#canvas");
const contexto = Paint.getContext("2d");
const COLOR = "black";
const GROSOR = 2;
let xAnterior = 0, yAnterior = 0, xActual = 0, yActual = 0;
const obtenerXReal = (clientX) => clientX - Paint.getBoundingClientRect().left;
const obtenerYReal = (clientY) => clientY - Paint.getBoundingClientRect().top;
let haComenzadoDibujo = false;



Paint.addEventListener("mousedown", evento => {
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.fillStyle = COLOR;
    contexto.fillRect(xActual, yActual, GROSOR, GROSOR);
    contexto.closePath();

    haComenzadoDibujo = true;
});

Paint.addEventListener("mousemove", (evento) => {
    if (!haComenzadoDibujo) {
            return;
        }
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.moveTo(xAnterior, yAnterior);
    contexto.lineTo(xActual, yActual);
    contexto.strokeStyle = COLOR;
    contexto.lineWidth = GROSOR;
    contexto.stroke();
    contexto.closePath();
});
["mouseup", "mouseout"].forEach(nombreDeEvento => {
    Paint.addEventListener(nombreDeEvento, () => {
        haComenzadoDibujo = false;
    });
});

function Picture(){
    var X = document.getElementById("Can");
    const contexto = X.getContext("2d");
    var img = document.getElementById("Pic");
    contexto.drawImage(img,0,0);
}