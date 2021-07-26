
function validar() {
    var resultado = true;
    var txtNombres = document.getElementById("nombres");//document.querySelector("input[name='nombres']"); // reotrna el primer input que tenga name ='nombres'
    var txtApellidos = document.getElementById("apellidos");
    var txtTelefono = document.getElementById("telefono");
	var txtdocumento = document.getElementById("documento");
    var selectEstado = document.getElementById("estadoC");
	var selectfp = document.getElementById("tarjeta");
	var txtTarjeta = document.getElementById("numtarje");
    var radiosGenero = document.getElementsByName("genero");// document.querySelectorAll("input[name='genero']");
    var checkTerminos = document.getElementById("terminos");
    var txtfecha = document.getElementById("fecha");
    var txtemail = document.getElementById("correo");
	var txtemail2 = document.getElementById("correo2");
    var checkboxsfp = document.querySelectorAll(".sus");
    var passwordgnrl = document.getElementById("passwd");
	var passworduser= document.getElementById("passwdU");
    var passworduser2= document.getElementById("passwdU2");
	var txtDireccion = document.getElementById("direccion");	
	var passwordTarjeta = document.getElementById("passwdtarj");
	
    var letra = /^[a-z ,.'-]+$/i;// letrasyespacio   ///^[A-Z]+$/i;// solo letras
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var telefonoreg = /^[0-9]{10}$/g; // para validar datos que deban tener 10 numeros
    var tarjetareg = /^[0-9]{16}$/g;/// para validar tarjeta de debito
	//var contrauser = \A(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{8,12}\z;
    limpiarMensajes();
    //validacion para nombres
    if (txtNombres.value === '') {
        resultado = false;
        mensaje("<br/>*Nombre es requerido", txtNombres);
    } else if (!letra.test(txtNombres.value)) {
        resultado = false;
        mensaje("<br/>*Nombre solo debe contener letras", txtNombres);
    } else if (txtNombres.value.length > 20) {
        resultado = false;
        mensaje("<br/>*Nombre maximo 20 caracteres", txtNombres);
    }
    
    //validacion  para apellidos
    if (txtApellidos.value === '') {
        resultado = false;
        mensaje("<br/>*Apellidos es requerido", txtApellidos);
    } else if (!letra.test(txtApellidos.value)) {
        resultado = false;
        mensaje("<br/>*Apellidos solo debe contener letras", txtApellidos);
    } else if (txtApellidos.value.length > 20) {
        resultado = false;
        mensaje("<br/>*Apellidos maximo 20 caracteres", txtApellidos);
    }
    //validacion telefono
    if (txtTelefono.value === "") {
        resultado = false;
        mensaje("<br/>*Telefono es requerido", txtTelefono);
    } else if (!telefonoreg.test(txtTelefono.value)) {
        resultado = false;
        mensaje("<br/>*Telefono 10 digitos numericos", txtTelefono);
    }
	
     //validacion documento
    if (txtdocumento.value === "") {
        resultado = false;
        mensaje("<br/>*Documento es requerido", txtdocumento);
    } else if (!telefonoreg.test(txtdocumento.value)) {
        resultado = false;
        mensaje("<br/>*Documento 10 digitos numericos", txtdocumento);
    }
    //validacion email
    if (txtemail.value === "") {
        resultado = false;
        mensaje("<br/>*Email es requerido", txtemail);
    } else if (!correo.test(txtemail.value)) {
        resultado = false;
        mensaje("<br/>*Email no es correcto", txtemail);
    }
    //validacion email2
    if (txtemail2.value === "") {
        resultado = false;
        mensaje("<br/>*Email es requerido", txtemail2);
    } else if (!correo.test(txtemail2.value)) {
        resultado = false;
        mensaje("<br/>*Email no es correcto", txtemail2);
    }
    //validacion select
    if (selectEstado.value === null || selectEstado.value === '0') {
        resultado = false;
        mensaje("<br/>*seleccionar tipo de documento", selectEstado);
    }

    //validacion selectfp
    if (selectfp.value === null || selectfp.value === '0') {
        resultado = false;
        mensaje("<br/>*Debe seleccionar forma de pago", selectfp);
    }
    //validacion radio button
    var sel = false;
    for (let i = 0; i < radiosGenero.length; i++) {
        if (radiosGenero[i].checked) {
            sel = true;
            break;
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("<br/>*Debe seleccionar un genero", radiosGenero[0]);
    }

    //validacion de un checkbox terminos
      if(!checkTerminos.checked){
		 resultado=false;
		 mensaje("*No acepta aun nuestros terminos...", checkTerminos);
     }
     

    //validacion de varios checkbox
    sel = false;
    for (let i = 0; i < checkboxsfp.length; i++) {
        if (checkboxsfp[i].checked){
            sel = true;
            /*if (checkboxsfp[i].value === '2') {
                alert("<br/>*Ha seleccionado el segundo checkbox");
            }
            break;*/
        }
    }
    if (!sel) {
        resultado = false;
        mensaje("<br/>*Seleccionar una forma de pago", checkboxsfp[0]);
    }
     //validacion numtarjeta
    if (txtTarjeta.value === "") {
        resultado = false;
        mensaje("<br/>*Numero de tarjeta requerido", txtTarjeta);
    } else if (!tarjetareg.test(txtTarjeta.value)) {
        resultado = false;
        mensaje("<br/>*Tarjeta 16 digitos numericos", txtTarjeta);
    }
	
    // validacion de fecha
    var dato=  txtfecha.value;
    var fechaN = new Date(dato);
    var anioN=fechaN.getFullYear();
    
    var fechaActual = new Date();// fecha actual
    var anioA =fechaActual.getFullYear();    
    if(fechaN > fechaActual){
        resultado = false;
        mensaje("<br/>*Fecha no puede ser superior a la actual",txtfecha);
   }else if(anioN < 1930){
        resultado = false;
        mensaje("<br/>*Anio de nacimiento no puede ser menor a 1930",txtfecha);
   }else if((anioA - anioN) <18){
       resultado = false;
        mensaje("<br/>*Debe ser mayor de 18 años",txtfecha);
   }
	if (txtfecha.value === '') {
        resultado = false;
	mensaje("<br/>*Fecha de Nacimiento requerida", txtfecha);
    }
	//validacion de Direccion 
	if (txtDireccion.value === '') {
        resultado = false;
        mensaje("<br/>*Direccion es requerido", txtDireccion);
    } else if (txtDireccion.value.length > 100) {
        resultado = false;
        mensaje("<br/>*Direccion maximo 100 caracteres", txtDireccion);
    }
	
	
	
	
    // validacion  de contraseña passwordgnrl
	//Que no haya espacios en blanco
	var noValido = /\s/;
        if (passwordgnrl.value === '') {
			resultado = false;
			mensaje("<br/>*Contraseña vacia", passwordgnrl);
         }else if(noValido.test(passwordgnrl.value)){ // se chequea el regex de que el string no tenga espacio
			resultado = false;
		    mensaje("<br/>*Contraseña con Espacios ", passwordgnrl);
		}
		/*else{
			 alert ("Ok"); 
			return false; 
		}*/
	   //validacion pass1
        if (passworduser.value === '') {
			resultado = false;
			mensaje("<br/>*Contraseña vacia", passworduser);
         }else if(passworduser.value.length<= 7){
			resultado = false;
			mensaje("<br/>*Digitos insuficientes", passworduser);
         } 
		else if(noValido.test(passworduser.value)){ // se chequea el regex de que el string no tenga espacio
			resultado = false;
		    mensaje("<br/>*Contraseña con Espacios ", passworduser);
		}
		///validacion pass2
		 if (passworduser2.value === '') {
			resultado = false;
			mensaje("<br/>*Contraseña vacia", passworduser2);
         }else if(passworduser2.value.length<= 7){
			resultado = false;
			mensaje("<br/>*Digitos insuficientes", passworduser2);
         } else if(noValido.test(passworduser2.value)){ // se chequea el regex de que el string no tenga espacio
			resultado = false;
		    mensaje("<br/>*Contraseña con Espacios ", passworduser2);
		}
		 ///validacion pass1 y pass2
		 if (passworduser.value!=passworduser2.value ){
				  resultado = false;
				  mensaje("<br/>*las contraseñas no coinciden", passworduser2);
		} else if (passworduser2.value.length>0){
				  //mensaje.style.color = "green"; 
				  mensaje("<br/>!Las contraseñas coinciden!", passworduser2);
		}
		   
		   
		 ///validacion de contraseña de tarjeta  
		 if (passwordTarjeta.value === '') {
			resultado = false;
			mensaje("*Contraseña vacia", passwordTarjeta);
         }  
		   
		   
		   
		   
		   
		   
		   
		   
		   
    return resultado;
}

////////formulario de sesion
function validar2(){
var resultado = true;
var txtemailUser = document.getElementById("correoInicio");
var passwordUsuario = document.getElementById("passInicio");
///var passinicio = document.getElementById("passInicio");

var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
limpiarMensajes();

///contraseña usuario al iniciar sesion
var noValido = /\s/;
       if (passwordUsuario.value === '') {
			resultado = false;
			mensaje("*Contraseña vacia", passwordUsuario);
         }else if(noValido.test(passwordUsuario.value)){ // se chequea el regex de que el string no tenga espacio
			resultado = false;
		    mensaje("*Contraseña con Espacios ", passwordUsuario);
		}
//validacion email al iniciar usuario
    if (txtemailUser.value === "") {
        resultado = false;
        mensaje("*Email es requerido", txtemailUser);
    } else if (!correo.test(txtemailUser.value)) {
        resultado = false;
        mensaje("*Email no es correcto", txtemailUser);
    }

return resultado;
}

    function showContent() {
				element = document.getElementById("content");
				element2 = document.getElementById("content2");
				check = document.getElementById("check");
				check2 = document.getElementById("check2");
					if (check.checked) {
						element.style.display='block';
					}
					else {
						element.style.display='none';
					}
					if (check2.checked) {
						element2.style.display='block';
					}
					else {
						element2.style.display='none';
					}
			 }
			 
				 
	function myfuction(){
		       	var pass = document.getElementById("passwd");
					  if(pass.type==="password"){
						   pass.type="text";			  
					 }else {
					   pass.type="password";
				}
				var pass2 = document.getElementById("passwdtarj");
					  if(pass2.type==="password"){
						   pass2.type="text";			  
					 }else {
					   pass2.type="password";
				 }
				var pass3 = document.getElementById("passInicio");
					  if(pass3.type==="password"){
						   pass3.type="text";			  
					 }else {
					   pass3.type="password";
				}
			 }	

function mensaje(cadenaMensaje, elemento) {
    elemento.focus();
    var nodoPadre = elemento.parentNode;
    var nodoMensaje = document.createElement("span");
    nodoMensaje.innerHTML = cadenaMensaje;
    nodoMensaje.style.color = "red";
    nodoMensaje.display = "block";
    nodoMensaje.setAttribute("class", "mensaje");
    //nodoMensaje.font-family= monospace;
	nodoMensaje.style.fontSize = 8;
    nodoPadre.appendChild(nodoMensaje);

}

function limpiarMensajes() {
    var mensajes = document.querySelectorAll(".mensaje");
    for (let i = 0; i < mensajes.length; i++) {
        mensajes[i].remove();// remueve o elimina un elemento de mi doc html
    }

}