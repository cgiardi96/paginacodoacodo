const valorTicket =200;

var descuentoEstudiantes=80;
var descuentoTrainee=50;
var descuentoJunior=15;

var nombre= document.getElementById ("Nombre");
var  apellido= document.getElementById ("Apellido");
var email= document.getElementById ("Email");
var cantidadTickets= document.getElementById ("Cantidad");
var categoria= document.getElementById ("Categoria");
var total= document.getElementById ("Total");

function quitarClaseError  () {
    let x= document.querySelectorAll (".form-control, .form-label, .label");
    let i;
    for (i=0; i < x.length; i++) {
        x [i] .classList.remove ('is-invalid');
    }
}

function borrarTodo () {
    quitarClaseError ();
    totalPagar.innerHTML= "";
}

function totalPagar () {
     quitarClaseError ();

    if (nombre.value === "") {
        alert ('Escribí tu nombre');
        nombre.classList.add ("is-invalid");
        nombre.focus ();
        return;
    }

    if (apellido.value === "") {
        alert ('Escribí tu apellido');
        apellido.classList.add ("is-invalid");
        apellido.focus ();
        return;
    }

    
    if (email.value === "") {
        alert ('Escribí tu email');
        email.classList.add ("is-invalid");
        email.focus ();
        return;
    }

 
    const emailValido = email => {
        return /\S+@\S+\.\S+/.test (email);         
    }

    if (!emailValido (email.value)) {
        alert ('Escribí un correo electrónico válido')
        email.classList.add ("is-invalid")
        email.focus ();
        return;
    }
       
    if (cantidadTickets.value ===""|| NaN) {
            alert ('Ingresá una cantidad válida');
        cantidadTickets.classList.add ("is-invalid");
        cantidadTickets.focus ();
        return;
    }
   
       
    if (categoria.value ==="") {
        alert ('Seleccioná una categoría');
        categoria.classList.add ("is-invalid");
        categoria.focus ();
        return;
    }

var totalValorTickets = (cantidadTickets.value) * valorTicket;


switch (totalValorTickets) {
case "value= 0": totalValorTickets = totalValorTickets;
break
case "value= 1": totalValorTickets= totalValorTickets - (descuentoEstudiantes / 100 * totalValorTickets);
break 
case "value=2": totalValorTickets= totalValorTickets - (descuentoTrainee /100 * totalValorTickets);
break
case "value=3": totalValorTickets= totalValorTickets - (descuentoJunior /100 * totalValorTickets);

total.innerHTML = totalValorTickets;

}
}

btnResumen.addEventListener ('click', totalPagar)
btnBorrar.addEventListener ('click', borrarTodo)
