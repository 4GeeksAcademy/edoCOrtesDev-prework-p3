import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
function elegirAleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function generarExcusa() {
  let inicio = "Un ";
  
  let adjetivos = ["rápido ", "silencioso ", "alegre ", "torpe ", "hambriento ", "enojado ", "curioso ", "gigante ", "astuto "];
  let sustantivos = ["gato ", "profesor ", "perro ", "estudiante ", "mapache ", "chofer ", "fotógrafo "];
  let acciones = ["encontró mi ", "perdió mi ", "rompió mi ", "escondió mi ", "vendió mi ", "pintó mi ", "regaló mi "];
  let objetos = ["libro ", "bicicleta ", "guitarra ", "cámara ", "mochila ", "chaqueta ", "celular ", "paraguas ", "botella ", "sombrero "];
  let lugares = ["en Valparaíso", "en Santiago", "en Viña del Mar", "en Concepción", "en Punta Arenas", "en San Pedro de Atacama"];

  let excusaFinal = inicio 
      + elegirAleatorio(adjetivos) 
      + elegirAleatorio(sustantivos) 
      + elegirAleatorio(acciones) 
      + elegirAleatorio(objetos) 
      + elegirAleatorio(lugares);

  document.getElementById("excuse").innerText = excusaFinal;
}

generarExcusa();

let boton = document.querySelector(".gen");
if (boton) {
  boton.addEventListener("click", generarExcusa);
} else {
  console.error("❌ Error: No se encontró el botón en el DOM.");
}

};
