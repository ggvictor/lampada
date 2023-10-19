const img = document.querySelector("#lampada");
const ligar = document.getElementById("ligar");
const desligar =document.getElementById("desligar");
function lampOn () {
    img.src = './imagens/ligada.png';
}
function lampOf(){
    img.src = './imagens/desligada.png';
}
function quebrar(){
    img.src = './imagens/quebrada.png';
}
img.addEventListener ('DoubleClick' ,quebrar);
ligar.addEventListener ('click' , lampOn);
desligar.addEventListener ('click' ,lampOf);