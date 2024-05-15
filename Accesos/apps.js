const users = JSON.parse(localStorage.getItem('users')) ?? [];
const passwords = JSON.parse(localStorage.getItem('passwords')) ?? [];

// //login.html
document.getElementById('loginForm')?.addEventListener('submit', loginUser);

// // Register.html
document.getElementById('registerForm')?.addEventListener('submit', registerUser);


// Registro de usuarios en register.html
function registerUser(e) {
    e.preventDefault();
    const username = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    
    if(!username || !password) {
        alert('Por favor completa todos los campos');
    }else {
        users.push(username);
        passwords.push(password);
    
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('passwords', JSON.stringify(passwords));
    
        document.getElementById('user').value = '';
        document.getElementById('password').value = '';
    
        alert('El usuario fue registrado correctamente');
        window.location.href = 'login.html';
    }
    
}

// Inicio de sesion en login.html

function loginUser(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    const username = document.getElementById('user').value; // Obtiene el nombre de usuario del campo de entrada
    const password = document.getElementById('password').value; // Obtiene la contraseña del campo de entrada

    console.log("Intento de inicio de sesión para:", username); // Imprime en la consola el intento de inicio de sesión

    let found = false; // Variable para indicar si se encontró el usuario

    // Bucle para iterar a través de los usuarios almacenados
    for (let i = 0; i < users.length; i++) {
        // Comprueba si el usuario es el superAdmin y la contraseña es correcta
        if(username === 'admin' && password === 'admin2154'){
            found = true; // Marca que se ha encontrado el usuario
            alert('Bienvenido superAdmin'); // Muestra un mensaje de bienvenida
            window.location.href = '../index.html'; // Redirige a la lista de empleados
            return; // Sale de la función para evitar más iteraciones
        }
        // Comprueba si el usuario y la contraseña coinciden con los almacenados
        if(username === users[i] && password === passwords[i]){
            alert('Inicio de sesion exitoso. Bienvenido usuario'); // Muestra un mensaje de inicio de sesión exitoso
            window.location.href = '../indexUsu.html'; // Redirige a la página de productos
            found = true; // Marca que se ha encontrado el usuario
            break; // Sale del bucle ya que se encontró el usuario
        }
    }

    // Si el usuario no se encontró en la iteración, muestra un mensaje de error
    if (!found) {
        alert('Usuario o contraseña incorrecto');
    } 
}

function disableButtons(users, passwords) {
    const isAdmin = (users === 'admin' && passwords === 'admin2154');

    // Obtiene los botones por su ID
    const btnProduc = document.getElementById('btnProduc');
    const btnListEmployed = document.getElementById('btnListEmployed');

    // Si el usuario no es administrador, deshabilita los botones
    if (!isAdmin) {
        btnProduc.disabled = true;
        btnListEmployed.disabled = true;
    }
}

// Llamada a la función cuando el usuario inicie sesión
if (found) {
    // Si el inicio de sesión es exitoso, deshabilita los botones si el usuario no es administrador
    disableButtons(users, passwords);
}





