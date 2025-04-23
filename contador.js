const precios= [50724, 65724, 45984, 72344, 50000];
let cantidades= [0, 0, 0, 0, 0];

for(let i= 1; i<= precios.length; i++){
    document.getElementById("buttonClickMas" + i).addEventListener("click", function(){
        cantidades[i-1]++;
        document.getElementById("cantidad"+i).textContent= cantidades[i-1];
        actualizarPrecio();
    });
    document.getElementById("buttonClickMenos" + i).addEventListener("click", function(){
        if(cantidades[i -1] >0) {
            cantidades[i-1]--;
            document.getElementById("cantidad"+i).textContent= cantidades[i-1];
            actualizarPrecio();
        }
    });
}

function actualizarPrecio(){
    let total=0;
    for (let i=0; i< precios.length; i++){
        total+= precios[i] * cantidades[i];
    }
    document.getElementById("precioTotal").textContent= total;
}
 /* Cambiar color al coche */

 let cambiarColor= document.getElementById("cambiarColor");
 for(let i=1; i<=4; i++){
    document.getElementById("clickColor" +i).addEventListener("click", function(){
        if(i===1) cambiarColor.style.backgroundColor= "#ffffff"
        if(i===2) cambiarColor.style.backgroundColor= "#000000"
        if(i===3) cambiarColor.style.backgroundColor= "#f00000"
        if(i===4) cambiarColor.style.backgroundColor= "#ffaa00"
    })
 }
