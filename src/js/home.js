import { postDatos } from "../services/datos";

let formulario = document.getElementById("formulario");
let alerta = document.getElementById("alerta");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  let check = document.getElementById("check");
  let nombre = document.getElementById("nombre").value;
  let sede = document.getElementById("sede").value;
  let fechaSalida = document.getElementById("FechaSalida").value;
  let fechaEntrada = document.getElementById("FechaEntrada").value;
  let codePc = document.getElementById("codePc").value;

  if (!nombre || !sede || !fechaSalida || !fechaEntrada || !codePc) {
    alerta.innerHTML = "Por favor, rellene todos los campos.";

    setTimeout(() => {
      alerta.innerHTML = "";
    }, 2000);
    return;
  }

  let datos = {
    nombre: nombre,
    sede: sede,
    fechaSalida: fechaSalida,
    fechaEntrada: fechaEntrada,
    codePc: codePc,
    estado: "pendiente",
  };

  await postDatos(datos);

  formulario.reset();
});
