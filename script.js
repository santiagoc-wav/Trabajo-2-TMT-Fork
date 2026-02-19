//console.log("funciona");

const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");

const textos = ["uno","dos","tres","cuatro","cinco"];
console.log(textos[0]);

let textoInicial = true;
let iTxt = 0;

varTitulo.addEventListener("click", () => {
    if(textoInicial === true) {
    varTitulo.innerText = "De";
    varTitulo.style.color = "rgb(235, 241, 197)";
    } else {
        varTitulo.innerText = "Castillo";
        varTitulo.style.color = "rgb(235, 241, 197)";
    }
    textoInicial = !textoInicial;
});

varTexto.addEventListener("click", () => {
      varTexto.innerText = textos[iTxt];
      iTxt+= 1;
}); 
