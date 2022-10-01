let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
let espacamento = 0;

pincel.strokeStyle = '#0A3871';
pincel.lineCap = 'round';
pincel.lineWidth = 3;


function desenhaForca()
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

function desenhaBoneco(erros)
{
    switch (erros) {
        case 5:
            pincel.beginPath();
            pincel.arc(400, 85, 20, 0, 2 * Math.PI);
            pincel.stroke();
            break;
        
        case 4:
            pincel.moveTo(400, 105);
            pincel.lineTo(400, 200);
            pincel.stroke();
            break;
        
        case 3:
            pincel.moveTo(400, 110);
            pincel.lineTo(370, 160);
            pincel.stroke();
            break;
        case 2:
            pincel.moveTo(400, 110);
            pincel.lineTo(430, 160);
            pincel.stroke();
            break;

        case 1:
            pincel.moveTo(400, 200);
            pincel.lineTo(380, 240);
            pincel.stroke();
            break;
        case 0:
            pincel.moveTo(400, 200);
            pincel.lineTo(420, 240);
            pincel.stroke();
            break;
        default:
            break;
    }
}

function desenhaLinha(posicao) 
{      
    pincel.moveTo(200 + posicao, 350);
    pincel.lineTo(250 + posicao, 350);
    pincel.stroke();
}

function desenhaTabuleiro() 
{   
    let largura = 450/palavraSecreta.length;
    for (let i = 0; i < palavraSecreta.length; i++) {
        desenhaLinha(largura*i);
    }
}

function escreveLetraCerta(i)
{
    pincel.fillStyle = '#0A3871';
    pincel.font = "30px Inter";
    let largura = 450/palavraSecreta.length;
    pincel.fillText(palavraSecreta[i], 215 + (largura * i) , 340);
}

function escreveLetraErrada(letra)
{   
    pincel.font = "24px Inter";
    pincel.fillStyle = "#ff000087"
    pincel.fillText(letra, 210 + espacamento, 400);
    espacamento += 30;
}
