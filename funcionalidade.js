var copo = window.document.getElementById("Copo")
var texto = document.getElementById("texto")

function EsvaziarCopo() {
    copo.src = "copo.svg"
    texto.innerHTML = "Encha o copo ou aguarde"

}

function EncherCopo() {
    copo.src = "cheio.svg"
    texto.innerHTML = "Hora de Beber Água!"

}

/* vai encher o copo mesmo que não tenha sido clicado no botão. */
setInterval(EncherCopo, 60000)