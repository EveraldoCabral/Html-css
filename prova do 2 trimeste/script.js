let contador = 0;

function incrementar() {
    contador++;
    atualizarContador();
}

function decrementar() {
    contador--;
    atualizarContador();
}

function resetar() {
    contador = 0;
    atualizarContador();
}

function atualizarContador() {
    document.getElementById("contador").innerText = contador;
}
/*function toggleInfo() {
    let info = document.getElementById("info");
    if (info.style.maxHeight) {
        info.style.maxHeight = null;
    } else {
        info.style.maxHeight = info.scrollHeight + "px";
    }
}*/
function toggleInfo() {
    let info = document.getElementById("info");
    if (info.style.display === "block") {
        info.style.display = "none";
    } else {
        info.style.display = "block";
        info.style.maxHeight = info.scrollHeight + "px";
    }
}