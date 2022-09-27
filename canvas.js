let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
pincel.fillStyle = '#0A3871';
pincel.strokeStyle = '#0A3871';
pincel.lineCap = 'round';
pincel.lineWidth = 3;
pincel.font = "30px Inter";


function DesenhaForca()
{
    pincel.clearRect(0, 0, tela.width, tela.height);
    pincel.beginPath();
    pincel.moveTo(300, 10);
    pincel.lineTo(300, 275);
    pincel.stroke();
    pincel.moveTo(250, 275);
    pincel.lineTo(350, 275);
    pincel.stroke();
    
    pincel.moveTo(300, 10);
    pincel.lineTo(400, 10);
    pincel.stroke();
    pincel.lineTo(400, 60);
    pincel.stroke();
    pincel.moveTo(375, 60);
    pincel.lineTo(425, 60);
    pincel.stroke();
    pincel.closePath();
}

function DesenhaLinha(posicao) 
{      
    pincel.moveTo(200 + posicao, 350);
    pincel.lineTo(250 + posicao, 350);
    pincel.stroke();
}

function DesenhaTabuleiro() 
{   
    let largura = 450/palavraSecreta.length;
    console.log(palavraSecreta);
    console.log(palavraSecreta.length);

    for (let i = 0; i < palavraSecreta.length; i++) {
        console.log(i);
        DesenhaLinha(largura*i);
    }
}

function EscreveLetraCerta(i)
{
        let largura = 450/palavraSecreta.length;
    pincel.fillText(palavraSecreta[i], 215 + (largura * i) , 340);
}