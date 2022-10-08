function iniciaJogo() 
{
    letrasCorretas = [];
    letrasErradas = [];
    espacamento = 0
    erros = 6;
    acertos = 0;

    telaJogo();
    desenhaForca();
    sorteiaPalavra();
    desenhaTabuleiro();
    
    document.onkeydown = (e) => {
        let key = e.keyCode;
        let letra = String.fromCharCode(key);
        processaEntrada(key, letra);
        if (mobileInput.value.length >=1) {
            mobileInput.value = "";
        }
    }
}

function processaEntrada(key, letra) {
    if (verificaLetra(key, letra) && palavraSecreta.includes(letra) && !letrasCorretas.includes(letra)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                escreveLetraCerta(i);
                letrasCorretas.push(letra);
                acertos++;
                verificaAcertos();
            }
        }
    }
    else if (verificaLetra(key, letra) && !letrasErradas.includes(letra)) {
        letrasErradas.push(letra);
        escreveLetraErrada(letra);
        erros--;
        desenhaBoneco(erros);
        verificaErros();
    }
}

function verificaLetra(key) {
    let estado = true;
    if (key >= 65 && key <=90) {
        return estado;
    }
    else {
        estado = false;
        return estado;
    }
}

function verificaAcertos() {
    if (acertos == palavraSecreta.length) {
        alert("Parabéns, Você ganhou!");
        iniciaJogo();
    }
}

function verificaErros() {
    if (erros == 0) {
        alert("Você perdeu! A palavra correta era: " + palavraSecreta);
        iniciaJogo();
    }
}

function sorteiaPalavra() {
    let palavra = palavrasChave[Math.floor(Math.random() * palavrasChave.length)]
    palavraSecreta = palavra
    return palavra
}

function adicionaPalavra()
{
    telaPalavra();
    let input = document.querySelector("textarea");
    let palavraDigitada = input.value.toUpperCase();
    if (palavraDigitada != "" && palavraDigitada.length <=8) {
        palavrasChave.push(palavraDigitada);
        input.value = "";
        iniciaJogo();
    }
    else {
        alert("Palavra inválida!");
        input.value = "";
        telaPalavra()
    }
}

function telaPalavra() {
    botoes.style.flexDirection = 'row';
    botoes.style.alignContent = 'flex-start';
    btnNovoJogo.style.display = 'none';
    btnAdicionarPalavra.style.display = 'none';
    palavraInput.style.display = 'flex';
    btnSalvaComeca.style.display = 'flex';
    btnVoltar.style.display = 'flex';
}

function telaJogo() {
    if (window.innerWidth < 480) {
        mobileInput.style.display = 'flex';
    }

    botoes.style.flexDirection = 'row';
    botoes.style.alignContent = 'flex-start';
    palavra.style.display = 'none';
    btnAdicionarPalavra.style.display = 'none';
    btnSalvaComeca.style.display = 'none';
    btnVoltar.style.display = 'none';
    jogo.style.display = 'flex';
    btnNovoJogo.style.display = 'flex';
    btnDesistir.style.display = 'flex';
}

function recarregaPagina() {
    location.reload();
}

let palavrasChave = ["ALURA", "CARRO", "CELULAR", "CACHORRO", "TORTA", "ESPELHO", "NOTEBOOK", "MESA"];
let palavraSecreta = '';
let letrasCorretas = [];
let letrasErradas = [];
let erros = 6;
let acertos = 0;

let jogo = document.getElementById("jogo");
let footer = document.querySelector("footer");
let palavraInput = document.getElementById("palavra");
let botoes = document.getElementById("buttons-container");
let mobileInput = document.getElementById("mobile-input");
let btnNovoJogo = document.getElementById("novo-jogo");
let btnChutar = document.getElementById("chutar");
let input = document.getElementById("input");
let btnAdicionarPalavra = document.getElementById("adicionar-palavra");
let btnSalvaComeca = document.getElementById("salvar-comecar");
let btnDesistir = document.getElementById("desistir");
let btnVoltar = document.getElementById("voltar");

btnNovoJogo.onclick = iniciaJogo;
btnAdicionarPalavra.onclick = telaPalavra;
btnSalvaComeca.onclick = adicionaPalavra;
btnVoltar.onclick = recarregaPagina;
btnDesistir.onclick = recarregaPagina;

jogo.style.display = 'none';
mobileInput.style.display = 'none';
palavraInput.style.display = 'none';
btnSalvaComeca.style.display = 'none';
btnDesistir.style.display = 'none';
btnVoltar.style.display = 'none';