const listaMascotas = document.getElementById("lista-mascotas");
const tipo = document.getElementById("tipo");
const nombre = document.getElementById("nombre");
const dueno = document.getElementById("dueno");
const index = document.getElementById("index");
const formis = document.getElementById("formis");
const btnGuardar = document.getElementById("btn-guardar");


let mascotas = [
    {
        tipo: "Gato",
        nombre: "Manchas",
        dueno: "Esteban",
    }
];



function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota, indice)=>` 
    <tr>
      <th scope="row">${indice}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueno}</td>
      <td>
        <div class="btn" aria-label="Basic example">
          <button type="button" class="btn btn-info editar" data-indice=${indice}>Editar</button>
          <button type="button" class="btn btn-danger eliminar">Eliminar</button>
        </div>
      </td>
    </tr>`).join("");
    listaMascotas.innerHTML = htmlMascotas;
    Array.from(document.getElementsByClassName("editar")).forEach((botonEditar)=>botonEditar.onclick = editar);

}

function enviarDatos(e) {
  e.preventDefault();
  const datos = {
    tipo: tipo.value,
    nombre: nombre.value,
    dueno: dueno.value,
  }
  mascotas.push(datos);
  listarMascotas();
}

function editar(e){
  console.log("evento", e);
}

listarMascotas();

formis.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;