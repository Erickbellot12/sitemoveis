//nome
let nome = document.querySelector('#nome');
let erroNome =document.querySelector('#erroNome');
//zap
let zap = document.querySelector('#zap');
let erroZap = document.querySelector('#erroZap');
 //assunto
let assunto = document.querySelector('#assunto');
let erroAssunto = document.querySelector('#erroAssunto'); 

//mapa
let mapa = document.querySelector('#mapa')

// variaveis auxiliares de validação
let nomeOk =false
let emailOk = false
let assuntoOk = false

function validanome(){
    if(nome.value.length < 3){
        erroNome.innerHTML = 'nome inválido'
        nomeOk = false
    }else{
        erroNome.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail(){
    if(email.value.indexOf('@')==-1 ||  email.value.indexOf('.') == -1
    ){
        erroEmail.innerHTML = 'email inválido'
    }else{
        erroEmail.innerHTML = ''
        emailOk = true

    }

}
function validaAssunto(){
    if(assunto.value.length > 100){
        erroAssunto.innerHTML  = 'escreveu demais'
        
    }else{
        erroAssunto.innerHTML =''
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk && emailOk && assuntoOk){
        alert('informações enviadas com sucesso')
    }
    else{
        alert('preencha as informações corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '600px';
    mapa.style.height = '400px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

