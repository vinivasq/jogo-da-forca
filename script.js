function IniciaJogo() 
{
    TelaJogo();
    DesenhaForca();
    SorteiaPalavra();
    DesenhaTabuleiro();
    document.onkeydown = (e) => {
        let key = e.keyCode;
        let letra = String.fromCharCode(key);
    
        if (VerificaLetra(key, letra) && palavraSecreta.includes(letra) ) {
            for (let i = 0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] === letra) {
                    EscreveLetraCerta(i);
                }   
            }
        }
    }
}

function VerificaLetra(key, letra) {
    let estado = true;
    if (key >= 65 && key <=90) {
        letras.push(letra);
        console.log(letra);
        console.log(letras);
        return estado;
    }
    else {
        estado = false;
        letras.push(letra);
        console.log(letra);
        console.log(letras, 'if false');
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
    let palavraAdicionada = input.value
    palavrasChave.push(palavraAdicionada);
    console.log(palavrasChave);
    input.value = "";
    IniciaJogo();
}

function VoltarIndex() {
    
    BotoesColumn();
    jogo.style.display = 'none';
    palavraInput.style.display = 'none';
    btnSalvaComeca.style.display = 'none';
    btnDesistir.style.display = 'none';
    btnVoltar.style.display = 'none';
    btnAdicionarPalavra.style.display = 'flex';
    btnNovoJogo.style.display = 'flex';
}

function TelaPalavra() {
    BotoesRow();
    btnNovoJogo.style.display = 'none';
    btnAdicionarPalavra.style.display = 'none';
    palavraInput.style.display = 'flex';
    btnSalvaComeca.style.display = 'flex';
    btnVoltar.style.display = 'flex';
}

function TelaJogo() {
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
let letras = [];

let jogo = document.getElementById("jogo");
let palavraInput = document.getElementById("palavra");
let botoes = document.getElementById("buttons-container");
let btnNovoJogo = document.getElementById("novo-jogo");
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
palavraInput.style.display = 'none';
btnSalvaComeca.style.display = 'none';
btnDesistir.style.display = 'none';
btnVoltar.style.display = 'none';