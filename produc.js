document.addEventListener('DOMContentLoaded', function() {
    cargarCelulares();

    var form = document.getElementById('formAgregar');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        agregarCelular();
    });
});

function cargarCelulares() {
    var celulares = JSON.parse(localStorage.getItem('celulares')) || [];
    celulares.forEach(function(celular, index) {
        crearCard(celular, index);
    });
}

function agregarCelular() {
    var nombreCel = document.getElementById('nombreCel').value;
    var caractCel = document.getElementById('caractCel').value;
    var precCel = document.getElementById('precCel').value;

    var celular = {
        nombre: nombreCel,
        caracteristicas: caractCel,
        precio: precCel
    };

    var celulares = JSON.parse(localStorage.getItem('celulares')) || [];
    celulares.push(celular);
    localStorage.setItem('celulares', JSON.stringify(celulares));

    cargarCelulares(); // Cargar de nuevo todas las cards

    // Limpiar campos luego de agregar
    document.getElementById('nombreCel').value = '';
    document.getElementById('caractCel').value = '';
    document.getElementById('precCel').value = '';
}

function crearCard(celular, index) {
    var cardsContainer = document.getElementById('cardsContainer');

    var card = document.createElement('div');
    card.classList.add('card');

    var nombre = document.createElement('h2');
    nombre.textContent = celular.nombre;
    var caracteristicas = document.createElement('p');
    caracteristicas.textContent = "Características: " + celular.caracteristicas;
    var precio = document.createElement('p');
    precio.textContent = "Precio: $" + celular.precio;

    var btnEditar = document.createElement('button');
    btnEditar.textContent = "Editar";
    btnEditar.classList.add('editar', 'btn', 'btn-primary', 'me-2');
    btnEditar.dataset.index = index;

    var btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add('eliminar', 'btn', 'btn-danger');
    btnEliminar.dataset.index = index;

    card.appendChild(nombre);
    card.appendChild(caracteristicas);
    card.appendChild(precio);
    card.appendChild(btnEditar);
    card.appendChild(btnEliminar);
    cardsContainer.appendChild(card);

    btnEliminar.addEventListener('click', function() {
        if (confirm("¿Estás seguro de eliminar este producto?")) {
            eliminarCelular(index);
        }
    });

    btnEditar.addEventListener('click', function() {
        editarCelular(index);
    });
}

function eliminarCelular(index) {
    var celulares = JSON.parse(localStorage.getItem('celulares')) || [];
    celulares.splice(index, 1);
    localStorage.setItem('celulares', JSON.stringify(celulares));
    cargarCelulares(); // Recargar las cards para reflejar el cambio
}

function editarCelular(index) {
    var celulares = JSON.parse(localStorage.getItem('celulares')) || [];
    var celular = celulares[index];

    var nuevoNombre = prompt("Ingrese el nuevo nombre:", celular.nombre);
    var nuevasCaracteristicas = prompt("Ingrese las nuevas características:", celular.caracteristicas);
    var nuevoPrecio = prompt("Ingrese el nuevo precio:", celular.precio);

    if (nuevoNombre !== null && nuevasCaracteristicas !== null && nuevoPrecio !== null) {
        // Actualizar los datos del celular
        celular.nombre = nuevoNombre;
        celular.caracteristicas = nuevasCaracteristicas;
        celular.precio = nuevoPrecio;
        celulares[index] = celular;
        localStorage.setItem('celulares', JSON.stringify(celulares));
        cargarCelulares(); // Recargar las cards para reflejar el cambio
    }
}

document.addEventListener('DOMContentLoaded', function() {
    cargarCelulares();

    var form = document.getElementById('formAgregar');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        agregarCelular();
    });
});

function cargarCelulares() {
    var celulares = JSON.parse(localStorage.getItem('celulares')) || [];
    var cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''; // Limpiar el contenedor antes de cargar las tarjetas
    celulares.forEach(function(celular, index) {
        crearCard(celular, index);
    });
}

function agregarCelular() {
    var nombreCel = document.getElementById('nombreCel').value;
    var caractCel = document.getElementById('caractCel').value;
    var precCel = document.getElementById('precCel').value;

    var celular = {
        nombre: nombreCel,
        caracteristicas: caractCel,
        precio: precCel
    };

    var celulares = JSON.parse(localStorage.getItem('celulares')) || [];
    celulares.push(celular);
    localStorage.setItem('celulares', JSON.stringify(celulares));

    cargarCelulares(); // Cargar de nuevo todas las cards

    // Limpiar campos luego de agregar
    document.getElementById('nombreCel').value = '';
    document.getElementById('caractCel').value = '';
    document.getElementById('precCel').value = '';
}

function crearCard(celular, index) {
    var cardsContainer = document.getElementById('cardsContainer');

    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', index); // Añadir el índice como un atributo de datos

    var nombre = document.createElement('h2');
    nombre.textContent = celular.nombre;
    var caracteristicas = document.createElement('p');
    caracteristicas.textContent = "Características: " + celular.caracteristicas;
    var precio = document.createElement('p');
    precio.textContent = "Precio: $" + celular.precio;

    var btnEditar = document.createElement('button');
    btnEditar.textContent = "Editar";
    btnEditar.classList.add('editar', 'btn', 'btn-primary', 'me-2');

    var btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add('eliminar', 'btn', 'btn-danger');

    card.appendChild(nombre);
    card.appendChild(caracteristicas);
    card.appendChild(precio);
    card.appendChild(btnEditar);
    card.appendChild(btnEliminar);
    cardsContainer.appendChild(card);

    btnEliminar.addEventListener('click', function() {
        if (confirm("¿Estás seguro de eliminar este producto?")) {
            eliminarCelular(index);
        }
    });

    btnEditar.addEventListener('click', function() {
        editarCelular(index);
    });
}




