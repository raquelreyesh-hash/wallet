let login = localStorage.getItem("login");

let saldo = Number(localStorage.getItem("saldo")) || 15000;

let montoEnvio = document.getElementById("monto-envio");

montoEnvio.value = envio;

const formTransfer = document.getElementById("form-Transfer");

function actualizarSaldo(envio){
    saldo += envio;
    //saldo = saldo + envio;
    alert("Se ha recibido una transferencia de: $ " + envio);
    montoEnvio.textContent = envio;

    //GUARDAMOS DE FORMA PERSISTENTE EL NUEVO SALDO
    localStorage.setItem("envio", envio);
    montoEnvio.value = envio;
    formTransfer.reset();
}


//PROCEDEMOS A CAPTURAR EL EVENTO SUBMIT DEL FORMULARIO

formTransfer.addEventListener("submit", function(event){
    event.preventDefault();

    let montoEnvio = document.getElementById("depositAmount").value;

    //CON NUMBER CONVERTIMOS EL VALOR QUE VIENE STRING EN UN NÚMERO
    montoEnvio = Number(montoEnvio);

    actualizarSaldo(montoEnvio);

});