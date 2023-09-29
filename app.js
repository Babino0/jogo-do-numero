
function mudaTexto(lugar, texto){
    let titulo = document.querySelector(lugar);
    titulo.innerHTML = texto;
}

function mensagemInicial(){
    mudaTexto('h1', 'Adivinhe o numero secreto');
    mudaTexto('p', 'Escolha um número entre 1 a 10');
}

let numeroCorreto = numeroAleatorio();

function numeroAleatorio(){
    return parseInt(Math.random()*10 + 1);
}
let tentativas = 5;

function limpaCampo(){
    resposta = document.querySelector('input');
    resposta.value = "";
}
    /*function desabilitaChute() {
        document.getElementById('botaoChutar').setAttribute('disabled',true);

    }*/
    function reiniciaJogo(){
        tentativas = 5;
        mudaTexto('.numeroTentativas', tentativas);
        limpaCampo();
        mensagemInicial();
        
    }

function verificaResposta() {
    let resposta = document.querySelector('input').value;
    //ganha
    if (numeroCorreto == resposta) {

    mudaTexto('h1','Parabéns!!');

    mudaTexto('p','Você só pode ser um genio!!');

    document.getElementById('reiniciar').removeAttribute('disabled');
    
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
        return tentativas = 5 ;
        
        
    }
    }
}


