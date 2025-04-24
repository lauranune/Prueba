 /* Cambiar color al coche */

let cambiarColor= document.getElementById("cambiarColor");

for(let i=1; i<=4; i++){
    document.getElementById("clickColor" +i).addEventListener("click", function(){
        if(i===1) cambiarColor.style.backgroundColor= "#ffffff"
        if(i===2) cambiarColor.style.backgroundColor= "#000000"
        if(i===3) cambiarColor.style.backgroundColor= "#f00000"
        if(i===4) cambiarColor.style.backgroundColor= "#ffaa00"
    });
}

/* Botones de colores*/

const botones= document.querySelectorAll("#botonesColores .btn");
const colores=["red", "yellow", "green","orange", "purple", "pink", "violet", "blue"];
const colorAzul= '#0d6efd';

botones.forEach((boton, index) =>{
    boton.style.left = `${index * 120}px`;
    boton.style.top = "0px";
    boton.addEventListener("mouseover", () =>{
        boton.style.backgroundColor= colores[index];
    });
    boton.addEventListener("mouseout", () =>{
        boton.style.backgroundColor= colorAzul;
    });
    boton.addEventListener("click", () =>{
            const i = Math.floor(Math.random()*500)+1;
            const j = Math.floor(Math.random()*500)+1;
            boton.style.left = i+"px";
            boton.style.top = j+"px";
    });
});

const grande= document.querySelector(".boton-random");

grande.addEventListener("mouseover", () =>{
    const colorRandom= colores[Math.floor(Math.random()*colores.length)];
    grande.style.backgroundColor= colorRandom;
});
