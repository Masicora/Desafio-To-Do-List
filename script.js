let tareasTotal = document.querySelector("#tareasTotal");
let tareasRealizadas = document.querySelector("#tareasRealizadas");
let botonAgregar = document.querySelector("#botonAgregar");
let listadoTareas = document.querySelector("#listadoTareas");
let tareas = [{ id: 1658531872574, nombre: "leer" }, { id: 1658531872575, nombre: "escribir" }, { id: 1658531872576, nombre: "hacer ejercicio" }];
refrescar();

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    /* Actualizamos la información en el HTML */
    refrescar();
}
//debo revisar esto para luego
function checked() {
    let check = document.querySelector("#check");
    if (check.checked) {
        this.style.color = "red";
    } else {
        this.style.color = "black";
    }
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
        html += `<tr><td>${tarea.id}</td><td>${tarea.nombre}</td><td><input id="check" type="checkbox" onclick="checked()"></input></td><td><button onclick="borrar(${tarea.id})">X</button></td></tr>`;
    }
    listadoTareas.innerHTML = html;
    inputTarea.value = "";


}
