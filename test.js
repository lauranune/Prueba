//Entrada texto//

const botonEnviar =  document.getElementById("enviar");
const tableBody = document.getElementsByTagName("tbody")[0];

botonEnviar.addEventListener("click", function () {
    const txtNombre = document.getElementById("nombre").value.trim();
    const txtApellidos = document.getElementById("apellidos").value.trim();
    const soloNum= /^\d+$/;

    if(txtNombre ==="" || txtApellidos ===""){
        alert("No dejes ninguna casilla en blanco")
        return;
    } if (soloNum.test(txtNombre) || soloNum.test(txtApellidos)){
        alert("Los campos no pueden ser solo números");
        return;
    }

    console.log("Nombre: " + txtNombre);
    console.log("Apellidos: " + txtApellidos);
    
    const newRow = tableBody.insertRow();
    const cellNombre = newRow.insertCell(0);
    const cellApellidos = newRow.insertCell(1);

    cellNombre.textContent = txtNombre;
    cellApellidos.textContent = txtApellidos;
});