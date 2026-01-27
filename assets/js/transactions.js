//VEMOS SI EXISTE UN LOGIN ACTIVO EN EL LOCALSTORAGE


let login = localStorage.getItem("login");


if(!login){
    alert("Usted no tiene los permisos para ingrear a esta página.");
    location.href = "index.html";
}

// 2. Registrar la transacción para la página de movimientos
    // Recuperamos lo que ya existe o creamos un array vacío
let listado_transacciones = JSON.parse(localStorage.getItem("transaccion") || "[]");

function mostrar_transaccion() {


    // 2. Recuperar de localStorage

    const retrievedString = localStorage.getItem("transaccion");
    const retrievedArray = JSON.parse(retrievedString || "[]");

    // 3. Seleccionar el elemento del DOM donde vamos a pintar
    const listaUl = document.getElementById("listado_transacciones");

    // Limpiamos la lista antes de pintar (por si la función se llama varias veces)
    listaUl.innerHTML = "";

    // 4. Recorrer el arreglo y crear los <li>
    retrievedArray.forEach(transaccion => {
        // Creamos el elemento li
        const li = document.createElement("li");
        
        // Asignamos el texto (transaccion[0] es el nombre, transaccion[1] es el monto)
        li.textContent = `${transaccion[0]}: ${transaccion[1]}`;
        
        // Lo agregamos a la lista
        listaUl.appendChild(li);
    });
}

// Llamamos a la función
mostrar_transaccion();

