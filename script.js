function IniciaJogo() 
{
    letrasCorretas = [];
    letrasErradas = [];
    espacamento = 0
    erros = 6;
    acertos = 0;
    
    TelaJogo();
    DesenhaForca();
    SorteiaPalavra();
    DesenhaTabuleiro();
    
    document.onkeydown = (e) => {
        let key = e.keyCode;
        let letra = String.fromCharCode(key);
        ProcessaEntrada(key, letra);
        if (mobileInput.value.length >=1) {
            mobileInput.value = "";
        }
    }
}

function ProcessaEntrada(key, letra) {
    if (VerificaLetra(key, letra) && palavraSecreta.includes(letra) && !letrasCorretas.includes(letra)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                EscreveLetraCerta(i);
                letrasCorretas.push(letra);
                acertos++;
                VerificaAcertos();
            }
        }
    }
    else if (VerificaLetra(key, letra) && !letrasErradas.includes(letra)) {
        letrasErradas.push(letra);
        EscreveLetraErrada(letra);
        erros--;
        DesenhaBoneco(erros);
        VerificaErros();
    }
}

function VerificaAcertos() {
    if (acertos == palavraSecreta.length) {
        alert("Parabéns, Você ganhou!");
        IniciaJogo();
    }
}

function VerificaErros() {
    if (erros == 0) {
        alert("Você perdeu! A palavra correta era: " + palavraSecreta);
        IniciaJogo();
    }
}

function VerificaLetra(key) {
    let estado = true;
    if (key >= 65 && key <=90) {
        return estado;
    }
    else {
        estado = false;
        return estado;
    }
}

function SorteiaPalavra() {
    let palavra = palavrasChave[Math.floor(Math.random() * palavrasChave.length)]
    palavraSecreta = palavra
    return palavra
}

function AdicionaPalavra()
{
    TelaPalavra();
    let input = document.querySelector("textarea");
    let palavraDigitada = input.value.toUpperCase();
    if (palavraDigitada != "" && palavraDigitada.length <=8) {
        palavrasChave.push(palavraDigitada);
        input.value = "";
        IniciaJogo();
    }
    else {
        alert("Palavra inválida!");
        input.value = "";
        TelaPalavra()
    }
}

function VoltarIndex() {
    
    BotoesColumn();
    jogo.style.display = 'none';
    mobileInput.style.display = 'none';
    palavraInput.style.display = 'none';
    btnSalvaComeca.style.display = 'none';
    btnDesistir.style.display = 'none';
    btnVoltar.style.display = 'none';
    btnAdicionarPalavra.style.display = 'flex';
    btnNovoJogo.style.display = 'flex';
    
    if (window.innerWidth <480) {
        footer.style.marginTop = "5vh";
    }
}

function TelaPalavra() {
    BotoesRow();
    btnNovoJogo.style.display = 'none';
    btnAdicionarPalavra.style.display = 'none';
    palavraInput.style.display = 'flex';
    btnSalvaComeca.style.display = 'flex';
    btnVoltar.style.display = 'flex';

    if (window.innerWidth <480) {
        footer.style.marginTop = "25vh";
    }
}

function TelaJogo() {
    if (window.innerWidth < 480) {
        mobileInput.style.display = 'flex';
        footer.style.marginTop = "15vh";
    }

    BotoesRow();
    palavra.style.display = 'none';
    btnAdicionarPalavra.style.display = 'none';
    btnSalvaComeca.style.display = 'none';
    btnVoltar.style.display = 'none';
    jogo.style.display = 'flex';
    btnNovoJogo.style.display = 'flex';
    btnDesistir.style.display = 'flex';
}

function BotoesColumn() {
    botoes.style.flexDirection = 'column';
    botoes.style.height= '70vh';
}

function BotoesRow() {
    botoes.style.flexDirection = 'row';
    botoes.style.height= '12vh';
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

btnNovoJogo.onclick = IniciaJogo;
btnAdicionarPalavra.onclick = TelaPalavra;
btnSalvaComeca.onclick = AdicionaPalavra;
btnVoltar.onclick = VoltarIndex;
btnDesistir.onclick = VoltarIndex;

jogo.style.display = 'none';
mobileInput.style.display = 'none';
palavraInput.style.display = 'none';
btnSalvaComeca.style.display = 'none';
btnDesistir.style.display = 'none';
btnVoltar.style.display = 'none';