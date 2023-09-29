
let tentativas = 5;
let numeroCorreto = 3;
function mudaTexto(lugar, texto){
    let titulo = document.querySelector(lugar);
    titulo.innerHTML = texto;
}

function mensagemInicial(){
    mudaTexto('h1', 'Adivinhe o numero secreto');
    mudaTexto('p', 'Escolha um número entre 1 a 100');
}


function numeroAleatorio(){
    return parseInt(Math.random()*100 + 1);
}

function limpaCampo(){
    resposta = document.querySelector('input');
    resposta.value = "";
}
function desabilitarChute() {
        document.getElementById('botaoChutar').setAttribute('disabled',true);

    }
function reiniciaJogo(){
    tentativas = 5;
    mudaTexto('.numeroTentativas', tentativas);
    limpaCampo();
    mensagemInicial();
    document.getElementById('botaoChutar').removeAttribute('disabled',true);
}


function verificaResposta() {
    let resposta = document.querySelector('input').value;
    //ganha
    if (numeroCorreto == resposta) {
    mudaTexto('h1','Parabéns!!');
    mudaTexto('p','Você só pode ser um genio!!');
    document.getElementById('reiniciar').removeAttribute('disabled');
    desabilitarChute()
}else{
        tentativas--
        mudaTexto('.numeroTentativas', tentativas);
        limpaCampo();
        
        if(numeroCorreto > resposta){
            mudaTexto('p', `O número é maior que ${resposta}`);  
        }
        if(numeroCorreto < resposta){
            mudaTexto('p', `O número é menor que ${resposta}`);
        }
        //perde
        if(tentativas  == 0 ){
        mudaTexto('h1', 'PERDEU :(');
        document.getElementById('reiniciar').removeAttribute('disabled');
        desabilitarChute();
        return tentativas = 6 ;
    }
    }
}


