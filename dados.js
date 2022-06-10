let dados = [
    {
        nombre: "Cara 1",
        valor: 1,
        dir: "img/dado1.png"
    },
    {
        nombre: "Cara 2",
        valor: 2,
        dir: "img/dado2.png"
    },
    {
        nombre: "Cara 3",
        valor: 3,
        dir: "img/dado3.png"
    },
    {
        nombre: "Cara 4",
        valor: 4,
        dir: "img/dado4.png"
    },
    {
        nombre: "Cara 5",
        valor: 5,
        dir: "img/dado5.png"
    },
    {
        nombre: "Cara 6",
        valor: 6,
        dir: "img/dado6.png"
    },
];


let puntajeUsuario = 0;
let puntajeMaquina = 0;
let ronda = 0;

let imgDado = document.querySelector('.imgDado');
let imgDado1 = document.querySelector('.imgDado1');
let usuarioContainer = document.querySelector('.usuario');
let winerMensaje = document.createElement('span');
winerMensaje.innerHTML = 'Ganador!!';
winerMensaje.classList.add('winer');
let maquinaContainer = document.querySelector('.maquina');
let botonTirar = document.querySelector('.tirar');
let pUsuario = document.querySelector('.puntajeUsuario');
let pMaquina = document.querySelector('.puntajeMaquina');

botonTirar.addEventListener('click', tirar);

function tirar () {

    ronda++;
    console.log(ronda)

    function maquina () {
        let numeroRandom = Math.round(Math.random()*5);

            imgDado1.src = dados[numeroRandom].dir;
            puntajeMaquina += dados[numeroRandom].valor;
            pMaquina.innerHTML = puntajeMaquina;
    }
    
    function jugador () {
        let numeroRandom = Math.round(Math.random()*5);
        
            imgDado.src = dados[numeroRandom].dir;
            puntajeUsuario += dados[numeroRandom].valor;
            pUsuario.innerHTML = puntajeUsuario;
    }
    
    if(ronda == 1 || ronda == 3 || ronda == 5 || ronda == 7){
        jugador();
        botonTirar.innerHTML = 'Tirar';

    }else if(ronda == 2 || ronda == 4 || ronda == 6 || ronda == 8){
        maquina();
        botonTirar.innerHTML = 'Tira la maquina';

    }

    if(ronda == 8){
        puntajeUsuario = puntajeUsuario / 4;
        puntajeMaquina = puntajeMaquina / 4;
        botonTirar.innerHTML = 'Volver a empezar';
        if(puntajeUsuario > puntajeMaquina){
            usuarioContainer.appendChild(winerMensaje);
        }else{
            maquinaContainer.appendChild(winerMensaje);
        }
    }

    if(ronda >= 9){

        confirmar = confirm('Desea volver a empezar?');
        if(confirmar){
            location.reload();
        }
    }

}







