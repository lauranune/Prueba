//Entrada texto//

const botonEnviar =  document.getElementById("enviar");
const tableBody = document.getElementsByTagName("tbody")[0];

botonEnviar.addEventListener("click", function () {
    const txtNombre = document.getElementById("nombre").value.trim();
    const txtApellidos = document.getElementById("apellidos").value.trim();
    const txtCorreo= document.getElementById("correo").value.trim();
    const txtFechaNac= document.getElementById("fechaNac").value.trim();
    
    const soloNum= /^\d+$/;
    const soloDate= /^(\d{1,2}\/\d{1,2}\/\d{2,4})$/;
    const soloMail= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(txtNombre ==="" || txtApellidos ===""){
        alert("No dejes ninguna casilla en blanco")
        return;
    }if (soloNum.test(txtNombre) || soloNum.test(txtApellidos)){
        alert("Los campos no pueden ser solo números");
        return;
    }

    if(!soloDate.test(txtFechaNac)){
        alert("La fecha debe ser dd/MM/YYYY");
        return;
    }

    if(!soloMail.test(txtCorreo)){
        alert("Campo correo incorrecto. Debe ser ejemplo@ejemplo.com");
        return;
    }

    const newRow = tableBody.insertRow();
    const cellNombre = newRow.insertCell(0);
    const cellApellidos = newRow.insertCell(1);
    const cellCorreo= newRow.insertCell(2);
    const cellFechaNac= newRow.insertCell(3);

    cellNombre.textContent = txtNombre;
    cellApellidos.textContent = txtApellidos;
    cellCorreo.textContent= txtCorreo;
    cellFechaNac.textContent= txtFechaNac;
});