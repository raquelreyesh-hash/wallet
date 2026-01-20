let contacto1 = {
    nombre: "Fox",
    apellido: "Mulder",
    cbu: "130064051",
    alias: "Fox",
    nombreBanco: "Banco Itau"
}

let contacto2 = {
    nombre: "Dana",
    apellido: "Scully",
    cbu: "134128550",
    alias: "Dana",
    nombreBanco: "Banco BCI"
}

let contacto3 = {
    nombre: "Walter",
    apellido: "Skinner",
    cbu: "175537392",
    alias: "Walt",
    nombreBanco: "Banco Falabella"
}

let contactos = [contacto1, contacto2, contacto3];

function crearInfoContacto(contacto){

    if(!contacto){
        return "";
    }

    let {nombre, apellido, cbu, alias, nombreBanco } = contacto;

    let infoContacto = `
        <li class="list-group-item">
                <div class="contact-info">
                    <span class="contact-name">${nombre} ${apellido}</span>
                    <span class="contact-details">
                            CBU: ${cbu}, Alias: ${alias}, Banco: ${nombreBanco}
                    </span>
                </div>
        </li>
    `;
    return infoContacto;

}

function agregarContactosDom(listaContactos){
    
    let elementosLista = "";

    listaContactos.forEach(contacto => {
        elementosLista += crearInfoContacto(contacto); 
    });

    //document.getElementById("contactList").innerHTML = elementosLista;
    $("#contactList").html(elementosLista);

}


//INICIO FUNCIÓN AGREGAR NUEVOS CONTACTOS


$("#formAddContacto").on("submit", function(event){
    event.preventDefault();

    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let cbu = $("#cbu").val();
    let alias = $("#alias").val();
    let banco = $("#banco").val();

    let nuevoContacto = {
        nombre,
        apellido,
        cbu,
        alias,
        nombreBanco: banco
    };

    contactos.push(nuevoContacto);

    alert(`Su nuevo contacto ${nombre} ${apellido}, ha sido agregado con éxito.`);

    agregarContactosDom(contactos);

    $('#modalAgregarContacto').modal('hide');

});


//FIN FUNCIÓN AGREGAR NUEVOS CONTACTOS


// INICIO EVENTO BUSCAR CONTACTO

$("#searchContact").on("input", function(event){

    let textoBusqueda = $(this).val();

    //CONVERTIR A MINÚSCULAS Y QUITAR ESPACIOS
    textoBusqueda = textoBusqueda.toLowerCase();

    //AHORA LE QUITAMOS CUALQUIER ESPACIO ADICIONAL
    textoBusqueda = textoBusqueda.trim();


    let contactosFiltrados = contactos.filter(function(contacto){

        let nombre = contacto.nombre.toLowerCase();
        let apellido = contacto.apellido.toLowerCase();
        let alias = contacto.alias.toLowerCase();

        let nombreApellido = `${nombre} ${apellido}`;

        //conjunto de reclas de filtrado
        let reglaNombre = nombre.includes(textoBusqueda);
        let reglaApellido = apellido.includes(textoBusqueda);
        let reglaAlias = alias.includes(textoBusqueda);
        let reglaNombreApellido= nombreApellido.includes(textoBusqueda);

        
        if(reglaNombre || reglaApellido || reglaAlias || reglaNombreApellido){
            return contacto;
        }
    });

    agregarContactosDom(contactosFiltrados);

});


// FIN EVENTO BUSCAR CONTACTO





function main(){
    agregarContactosDom(contactos);
}

main();
