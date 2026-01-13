//VEMOS SI EXISTE UN LOGIN ACTIVO EN EL LOCALSTORAGE
let login = localStorage.getItem("login");


if(!login){
    alert("Usted no tiene los permisos para estar en esta página.");
    location.href = "index.html";
}

//DESDE AQUÍ EJECUTAR EL CÓDIGO SI EXISTE LOGIN


//AGREGAMOS AL CARGAR LA PÁGINA EL SALDO SI EXISTE EN EL LOCALSOTAGE O POR DEFECTO INICIAMOS CON 15.000
let saldo = Number(localStorage.getItem("saldo")) || 15000;

const montoSaldo = document.getElementById("monto-saldo");

localStorage.setItem("saldo", saldo);
montoSaldo.textContent = saldo;


const linkDeposit = document.getElementById("link-deposit");

function redireccionar(mensaje, enlace){
    let mensajeRedireccion = document.getElementById("mensaje-redireccion");

    mensajeRedireccion.textContent = (mensaje);

    setTimeout(function(){
        location.href = enlace;
    }, 2000);

}


//  evento botón depositar
linkDeposit.addEventListener("click", function(event){
    event.preventDefault();
    redireccionar("Redireccionando a la página para deposito de dinero...", "deposit.html");
});


const linkSendmoney = document.getElementById("link-sendmoney");

//evento botón enviar dinero
linkSendmoney.addEventListener("click", function(event){
    event.preventDefault();
    redireccionar("Redireccionando a la página de movimientos de dinero...", "sendmoney.html");
});

const linkTransactions = document.getElementById("link-transactions");

//evento botón enviar dinero
linkTransactions.addEventListener("click", function(event){
    event.preventDefault();
    redireccionar("Redireccionando a la página de historial de transacciones...", "transactions.html");
});




