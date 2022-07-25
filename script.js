let tareasTotal = document.querySelector("#tareasTotal");
let tareasRealizadas = document.querySelector("#tareasRealizadas");
let botonAgregar = document.querySelector("#botonAgregar");
let listadoTareas = document.querySelector("#listadoTareas");
let tareas = [{ id: 1658531872574, nombre: "leer", realizado: false }, { id: 1658531872575, nombre: "escribir", realizado: false }, { id: 1658531872576, nombre: "hacer ejercicio", realizado: false }];

refrescar();

function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id);
    tareas.splice(index, 1);
    refrescar();
}

function check(x) {
    let check = document.getElementById(x);
    const index = tareas.findIndex((ele) => ele.id == x);
    if (check.checked == true) {
        document.getElementById(`nombre${x}`).style.backgroundColor = "#82E0AA";
        tareas[index].realizado = true;
    }
    else {
        document.getElementById(`nombre${x}`).style.backgroundColor = "";
        tareas[index].realizado = false;
    }
    tareasRealizadas.innerHTML = `Realizadas: ${tareas.filter(x => x.realizado == true).length}`;

}



botonAgregar.addEventListener("click", function () {
    let inputTarea = document.querySelector("#inputTarea");
    if (inputTarea.value == "") {
        alert("Ingrese una tarea por favor");
    }
    else {
        let nuevaTarea = {
            id: Date.now(),
            nombre: inputTarea.value,
            realizado: false
        };
        tareas.push(nuevaTarea);
        refrescar();
    }
});

function refrescar() {
    let html = "<tr><th>Id</th><th>Nombre</th><th>Realizada</th><th>Borrar</th></tr>";
    for (tarea of tareas) {
        html += `<tr><td>${tarea.id}</td><td id="nombre${tarea.id}">${tarea.nombre}</td><td><input class="form-check-input" id="${tarea.id}" type="checkbox" onclick="check(${tarea.id})"></input></td><td><button class="btn btn-danger" onclick="borrar(${tarea.id})">X</button></td></tr>`;
    }
    listadoTareas.innerHTML = html;
    inputTarea.value = "";
    tareasTotal.innerHTML = `Total: ${tareas.length}`;
    tareasRealizadas.innerHTML = `Realizadas: ${tareas.filter(x => x.realizado == true).length}`;

}
