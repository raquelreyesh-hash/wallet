//VEMOS SI EXISTE UN LOGIN ACTIVO EN EL LOCALSTORAGE


let login = localStorage.getItem("login");


if(!login){
    alert("Usted no tiene los permisos para ingrear a esta página.");
    location.href = "index.html";
}

// 2. Registrar la transacción para la página de movimientos
    // Recuperamos lo que ya existe o creamos un array vacío
let listado_transacciones = JSON.parse(localStorage.getItem("transaccion") || "[]");

let saldo = Number(localStorage.getItem("saldo")) || 15000;

const montoSaldo = document.getElementById("monto-saldo");

montoSaldo.value = saldo;

const formDeposit = document.getElementById("form-deposit");

/*
function actualizarSaldo(monto){
    saldo += monto;
    //saldo = saldo + monto;
    alert("Se ha recibido un monto a depositar de: $ " + monto);
    montoSaldo.textContent = saldo;

    //GUARDAMOS DE FORMA PERSISTENTE EL NUEVO SALDO
    localStorage.setItem("saldo", saldo);
    montoSaldo.value = saldo;
    formDeposit.reset();
}
*/
function actualizarSaldo(monto) {
    saldo += monto;
    
    // 1. Guardar el nuevo saldo
    localStorage.setItem("saldo", saldo);
    montoSaldo.value = saldo;

    // 2. Registrar la transacción para la página de movimientos
    // Recuperamos lo que ya existe o creamos un array vacío
    let transacciones = JSON.parse(localStorage.getItem("transaccion") || "[]");
    
    // Agregamos el nuevo movimiento (formato: [nombre, monto])
    transacciones.push(["Depósito realizado", `$${monto}`]);
    
    // Guardamos el transacciones actualizado
    localStorage.setItem("transaccion", JSON.stringify(transacciones));

    alert("Se ha recibido un monto a depositar de: $ " + monto);
    formDeposit.reset();
}


//PROCEDEMOS A CAPTURAR EL EVENTO SUBMIT DEL FORMULARIO



formDeposit.addEventListener("submit", function(event){
    event.preventDefault();

    let montoDeposito = document.getElementById("depositAmount").value;

    //CON NUMBER CONVERTIMOS EL VALOR QUE VIENE STRING EN UN NÚMERO
    montoDeposito = Number(montoDeposito);

    actualizarSaldo(montoDeposito);

});