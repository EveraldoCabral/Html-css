let nomeUsuario = "";

function login() {
  const inputNome = document.getElementById("username").value;
  if (inputNome.trim() === "") {
    alert("Digite seu nome!");
    return;
  }

  nomeUsuario = inputNome;
  document.getElementById("login").style.display = "none";
  document.getElementById("feed").style.display = "block";
  document.getElementById("welcome").innerText = "Olá, " + nomeUsuario + "!";
}

function postar() {
  const conteudo = document.getElementById("postContent").value;
  if (conteudo.trim() === "") {
    alert("Escreve algo para postar!");
    return;
  }

  const postDiv = document.createElement("div");
  postDiv.className = "post";
  postDiv.innerHTML = ("<strong>${nomeUsuario}:</strong><br>${conteudo}");

  document.getElementById("posts").prepend(postDiv); // Adiciona o post no topo
  document.getElementById("postContent").value = ""; // Limpa o campo
}