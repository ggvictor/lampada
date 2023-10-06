const img = document.querySelector("#lampada");
const ligar = document.getElementById("ligar");
const desligar =document.getElementById("desligar");
function lampOn () {
    img.src = './imagens/ligada.jpg';
}
function lampOf(){
    img.src = './imagens/desligada.jpg';
}
function quebrar(){
    img.src = './imagens/quebrada.jpg';
}
img.addEventListener ('DoubleClick' ,quebrar);
ligar.addEventListener ('click' , lampOn);
desligar.addEventListener ('click' ,lampOf);