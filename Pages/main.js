const valorTicket = 200;

let descuentoEstudiantes= 80;
let descuentoTrainee= 50;
let descuentoJunior=15;

let nombre= document.getElementById ("Nombre");
let apellido= document.getElementById ("Apellido");
let email= document.getElementById ("Email");
let cantidadDeTickets= document.getElementById ("Cantidad");
let categoria= document.getElementById ("Categoria")

function quitarClaseError  () {
    let x= document.querySelectorAll (".form-control, .form-label, .etiqueta");
    let i;
    for (i=0; i < x.length; i++) {
        x [i] .classList.remove ('is-invalid');
    }
}
function totalPagar () {

    quitarClaseError()

    if (nombre.value == "") {
        alert ("Escribí tu nombre");
        nombre.classList.add ("is-invalid");
        nombre.focus ();
        return;
    }
    
    if (apellido.value === "") {
        alert ("Escribí tu apellido");
        apellido.classList.add ("is-invalid");
        apellido.focus ();
        return;
    }

    
    if (email.value === "") {
        alert ("Escribí tu email");
        email.classList.add ("is-invalid");
        email.focus ();
        return;
    }

 

    const emailValido = email => {
        return /\S+@\S+\.\S+/.test (mail);         
    }
    if (!emailValido (email.value)) {
        alert ("Escribí un correo electrónico válido")
        email.classList.add ("is-invalid")
        email.focus ();
        return;
    }

       
    if (cantidadDeTickets.value === "") {
        alert ("Ingresá una cantidad válida");
        cantidadDeTickets.classList.add ("is-invalid");
        cantidadDeTickets.focus ();
        return;
    }
   
       
    if (categoria.value === "") {
        alert ("Seleccioná una categoría");
        categoria.classList.add ("is-invalid");
        categoria.focus ();
        return;
    }
}

switch (totalPagar) {
case "categoria.value= 0": (totalValorTickets = totalValorTickets);
break
case "categoria.value= 1": (totalValorTickets= totalValorTickets - (descuentoEstudiantes / 100 * totalValorTickets))

break 

}
