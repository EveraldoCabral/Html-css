const formAposta = document.getElementById('formAposta');
const saldoElemento = document.getElementById('saldo');
const mensagemResultado = document.getElementById('mensagemResultado');

let saldo = 100; // Saldo inicial

formAposta.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const cavaloSelecionado = document.querySelector('input[name="cavalo"]:checked');
    const valorAposta = parseInt(document.getElementById('valorAposta').value);

    if (!cavaloSelecionado) {
        alert("Escolha um cavalo para apostar!");
        return;
    }

    if (valorAposta > saldo || valorAposta <= 0) {
        alert("Aposta inválida! Verifique seu saldo ou valor.");
        return;
    }

    // Começa a corrida
    iniciarCorrida(parseInt(cavaloSelecionado.value), valorAposta);
});

function iniciarCorrida(cavaloApostado, valorAposta) {
    mensagemResultado.textContent = "Corrida em andamento...";

    // Resetar posição dos cavalos
    document.getElementById('cavalo1').style.left = '0px';
    document.getElementById('cavalo2').style.left = '0px';
    document.getElementById('cavalo3').style.left = '0px';

    let posicoes = [0, 0, 0];
    let intervalo = setInterval(() => {
        // Movimentar cavalos aleatoriamente
        posicoes[0] += Math.random() * 5;
        posicoes[1] += Math.random() * 5;
        posicoes[2] += Math.random() * 5;

        document.getElementById('cavalo1').style.left = posicoes[0] + 'px';
        document.getElementById('cavalo2').style.left = posicoes[1] + 'px';
        document.getElementById('cavalo3').style.left = posicoes[2] + 'px';

        // Definir a distância para vencer
        if (posicoes.some(p => p >= 600)) { // 600px = linha de chegada
            clearInterval(intervalo);

            // Definir o vencedor
            let vencedor;
            if (posicoes[0] >= posicoes[1] && posicoes[0] >= posicoes[2]) vencedor = 1;
            else if (posicoes[1] >= posicoes[0] && posicoes[1] >= posicoes[2]) vencedor = 2;
            else vencedor = 3;

            verificarResultado(cavaloApostado, vencedor, valorAposta);
        }
    }, 50);
}

function verificarResultado(cavaloApostado, vencedor, valorAposta) {
    if (cavaloApostado === vencedor) {
        const premio = valorAposta * 2;
        saldo += premio;
        mensagemResultado.textContent = 'Parabéns! Você ganhou ${premio} moedas!';
    } else {
        saldo -= valorAposta;
        mensagemResultado.textContent = 'Que pena! Você perdeu ${valorAposta} moedas.';
    }

    // Atualizar saldo na tela
    saldoElemento.textContent = saldo;

    // Verificar se o jogador ficou sem saldo
    if (saldo <= 0) {
        mensagemResultado.textContent += " Você ficou sem moedas! Reinicie a página para jogar novamente.";
    }
}