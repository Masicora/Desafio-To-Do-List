let tareasTotal = document.querySelector("#tareasTotal");
let tareasRealizadas = document.querySelector("#tareasRealizadas");
let botonAgregar = document.querySelector("#botonAgregar");
let listadoTareas = document.querySelector("#listadoTareas");
let tareas = [{ id: 1658531872574, nombre: "leer" }, { id: 1658531872575, nombre: "escribir" }, { id: 1658531872576, nombre: "hacer ejercicio" }];
let conteoRealizadas = 0;
refrescar();

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    refrescar();
}
//debo revisar esto para luego
function check(x) {
    if (x.checked == true) {
        conteoRealizadas++;
        x.parentNode.style.backgroundColor = "#82E0AA";

    }
    else {
        conteoRealizadas--;
        x.parentNode.style.backgroundColor = "";

    }
    tareasRealizadas.innerHTML = `Realizadas: ${conteoRealizadas}`;
}



botonAgregar.addEventListener("click", function () {
    let inputTarea = document.querySelector("#inputTarea");
    let nuevaTarea = {
        id: Date.now(),
        nombre: inputTarea.value
    };
    tareas.push(nuevaTarea);
    refrescar();
});

function refrescar() {
    let html = "<tr><th>Id</th><th>Nombre</th><th>Realizada</th><th>Borrar</th></tr>";
    for (tarea of tareas) {
        html += `<tr><td>${tarea.id}</td><td>${tarea.nombre}</td><td><input type="checkbox" onchange="check(this)"></input></td><td><button onclick="borrar(${tarea.id})">X</button></td></tr>`;
    }
    listadoTareas.innerHTML = html;
    inputTarea.value = "";
    tareasTotal.innerHTML = `Total: ${tareas.length}`;
    conteoRealizadas = 0;


}
