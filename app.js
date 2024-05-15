//Agregar un empleado a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');
var editar = document.getElementById('items')

//Evento submit del formulario
form.addEventListener('submit', agregarItem);
//Evento Click de la lista
lista.addEventListener('click', eliminarItem);
//Evento Click de la lista
lista.addEventListener('click', editarItem);
//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtrarItems);



//Funcion para agregar un empleado a la lista
function agregarItem(e){
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;

    var newItem = nombre + ' ' + apellido;

    var li = document.createElement('li');
    li.className = ('list-group-item');
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = ('btn btn-danger btn-sm float-end eliminar');
    botonDel.appendChild(document.createTextNode('Eliminar'));

    var botonEdit = document.createElement('button');
    botonEdit.className = ('btn btn-success btn-sm float-end editar');
    botonEdit.appendChild(document.createTextNode('Editar'));

    li.appendChild(botonDel);
    li.appendChild(botonEdit);
    lista.appendChild(li);

    // Guardar en localStorage
    var empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    empleados.push(newItem);
    localStorage.setItem('empleados', JSON.stringify(empleados));

    // Limpiar campos luego de agregar
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
}


// Cargar empleados al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarEmpleados();

    // Agregar evento submit al formulario
    form.addEventListener('submit', agregarItem);

    // Botón Logout
    document.querySelector('.logout').addEventListener('click', function() {
        alert('¿Seguro que deseas cerrar sesión?')
        window.location.replace('/Accesos/login.html'); 
    });
});

// Función para cargar empleados desde localStorage al cargar la página
function cargarEmpleados() {
    var empleados = JSON.parse(localStorage.getItem('empleados')) || [];
    empleados.forEach(function(empleado) {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(empleado));

        var botonDel = document.createElement('button');
        botonDel.className = 'btn btn-danger btn-sm float-end eliminar';
        botonDel.appendChild(document.createTextNode('Eliminar'));

        var botonEdit = document.createElement('button');
        botonEdit.className = 'btn btn-success btn-sm float-end editar';
        botonEdit.appendChild(document.createTextNode('Editar'));

        li.appendChild(botonDel);
        li.appendChild(botonEdit);
        lista.appendChild(li);
    });
}

//Funcion para eliminar un empleado a la lista
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm('¿Seguro que desea eliminar este empleado?')){
            var li = e.target.parentElement;
            lista.removeChild(li);

            // Eliminar del localStorage
            var empleados = JSON.parse(localStorage.getItem('empleados')) || [];
            var empleadoTexto = li.firstChild.textContent;
            empleados = empleados.filter(item => item !== empleadoTexto);
            localStorage.setItem('empleados', JSON.stringify(empleados));
        }      
    }
}

//Funcion para editar empleados de la lista
function editarItem(e){
    if(e.target.classList.contains('editar')){
     var li = e.target.parentElement;
     var texto = li.firstChild.textContent;
 
     var nuevoTexto = prompt('Editar empleado:', texto);
     if(nuevoTexto !== null){
         li.firstChild.textContent = nuevoTexto;
 
         // Editar en el localStorage
         var empleados = JSON.parse(localStorage.getItem('empleados')) || [];
         var index = empleados.indexOf(texto);
         empleados[index] = nuevoTexto;
         localStorage.setItem('empleados', JSON.stringify(empleados));
     }
    }
 }


//Funcion para filtrar empleados de la lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}

// Boton Logout

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.logout').addEventListener('click', function() {
        // Aquí puedes añadir el código para cerrar sesión y redirigir al login
        // Por ejemplo, podrías hacer una petición AJAX al servidor para cerrar la sesión
        alert('¿Seguro que deseas cerrar sesion?')
        // Redirigir al login
        window.location.replace('/Accesos/login.html'); 
    });
});





