




function agregarDatosATabla(datos) {
    const cuerpoTabla = document.getElementById("requestsBody")
    cuerpoTabla.innerHTML="";

datos.forEach(item => {

    const fila = document.createElement("tr");

    const celdaFechaSalida = document.createElement("td");
    celdaFechaSalida.textContent= item.celdaFechaSalida;
    fila.appendChild(celdaFechaSalida);

    const celdaFechaEntrada = document.createElement("td");
    celdaFechaEntrada.textContent = item.celdaFechaEntrada;
    fila.appendChild(celdaFechaEntrada);

    const celdaIdComputadora = document.createElement("td");
    celdaIdComputadora.textContent = item.celdaIdComputadora;
    fila.appendChild(celdaIdComputadora)

    const celdaAprobacion = document.createElement("td")
    celdaAprobacion.textContent = item.celdaAprobacion;
    fila.appendChild(celdaNombre);
    
    const celdaNombre = document.createElemen("td")
    celdaNombre.textContent = item.celdaNombre;
    fila.appendChild(celdaNombre);


    cuerpoTabla.appendChild(fila);
    
});
};

document.addEventListener("DOMContentLoaded", async () => {
    const datos = await getUsers();
    if (datos) {
        agregarDatosATabla(datos)
    }
});



const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");

const filtrar = ()=>{
    console.log(buscador.value);
    
}







