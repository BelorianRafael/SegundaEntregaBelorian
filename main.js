const tareas = []; // Arreglo para almacenar las tareas  

// Función para agregar tarea  
function agregarTarea(tarea) {  
    tareas.push(tarea);  
    mostrarTareas();  
}  

// Función para eliminar tarea  
function eliminarTarea(index) {  
    tareas.splice(index, 1);  
    mostrarTareas();  
}  

// Función para mostrar tareas  
function mostrarTareas() {  
    const listaTareas = document.getElementById('listaTareas');  
    listaTareas.innerHTML = ''; // Limpiar la lista antes de mostrar tareas  

    tareas.forEach((tarea, index) => {  
        const li = document.createElement('li');  
        li.textContent = tarea;  

        const botonEliminar = document.createElement('button');  
        botonEliminar.textContent = 'Eliminar';  
        botonEliminar.addEventListener('click', function() {  
            eliminarTarea(index);  
        });  

        li.appendChild(botonEliminar);  
        listaTareas.appendChild(li);  
    });  
}  

// Listener para agregar tarea al hacer clic en el botón  
document.getElementById('botonAgregarTarea').addEventListener('click', function() {  
    const entradaTarea = document.getElementById('entradaTarea');  
    const textoTarea = entradaTarea.value.trim();  

    if (textoTarea !== '') {  
        agregarTarea(textoTarea);  
        entradaTarea.value = ''; // Limpiar el campo de entrada  
    } else {  
        alert('PEPE, escribe una tarea.');  
    }  
});  