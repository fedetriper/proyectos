
window.onload = cargaSitio();

function cargaSitio() {
  cargaLinks();
  navegacion();

}

/* formulario contacto */
let nombreInput = document.getElementById('nombreUsuario');
let emailInput = document.getElementById('emailUsuario');
let mensajeInput = document.getElementById('mensajeUsuario');

nombreInput.addEventListener('input', validarCampos);
emailInput.addEventListener('input', validarCampos);
mensajeInput.addEventListener('input', validarCampos);

function validarCampos() {
  let nombre = nombreInput.value.trim();
  let email = emailInput.value.trim();
  let mensaje = mensajeInput.value.trim();

  const enviarBtn = document.getElementById('enviar');
  enviarBtn.disabled = true;

  if (nombre && email && mensaje) {
    if (esValidoEmail(email)) {
      enviarBtn.disabled = false;
    }
  }
}

function esValidoEmail(email) {
  const regexEmail = /^\S+@\S+\.\S+$/;
  return regexEmail.test(email);
}

/* funcion boton enviar resetea formulario */
const btnEnviar = document.getElementById("enviar");
btnEnviar.addEventListener("click", reseteaForm);

function reseteaForm() {
  document.getElementById("formularioContacto").reset();

}
/* despues de cerrar el modal ir a pagina CV */
const btnCerrarModal = document.getElementById("cerrarModal");
btnCerrarModal.addEventListener("click", gotoCV);





function navegacion() {
  /* goto pagina contacto */

  document.getElementById("contacto").addEventListener('click', gotoContacto)
  gotoContacto();

  /* goto pagina CV */
  document.getElementById("about").addEventListener('click', gotoCV)
  gotoCV();

}

function gotoContacto() {

  document.getElementById("paginaCV").style.display = 'none';
  document.getElementById("paginaContacto").style.display = 'block';
  document.getElementById("enviar").disabled = true;
};

function gotoCV() {

  document.getElementById("paginaCV").style.display = 'block';
  document.getElementById("paginaContacto").style.display = 'none';
};

/* links de los datos personales */
function cargaLinks() {

  const dirLink = document.getElementById("direccionLink");
  const telLink = document.getElementById("telLink");
  const emailLink = document.getElementById("emailLink");


  dirLink.addEventListener("click", cargarDireccionClick);
  telLink.addEventListener("click", cargarTelClick);
  emailLink.addEventListener("click", cargarEmailClick);

  function cargarDireccionClick(event) {
    event.preventDefault();


    window.open("https://goo.gl/maps/yQ1c9pRWwSDnoP1YA");
  }

  function cargarTelClick(event) {
    event.preventDefault();

    window.open("https://wa.me/+54911875564");
  }

  function cargarEmailClick(event) {
    event.preventDefault(); //

    window.open("mailto:jvespinosa@email.com");
  }
}




// Función para generar un texto aleatorio
function generarTexto() {
  var textos = ["Me apasiona explorar el universo y descubrir los misterios que lo rodean. La ingeniería aeroespacial es la herramienta que me permite hacerlo realidad.",
    "Como ingeniero, disfruto resolviendo problemas complejos y desafiando los límites de la tecnología actual. Siempre estoy buscando formas de mejorar y optimizar mis diseños.",
    "El trabajo en equipo es esencial en la ingeniería aeroespacial. Me enorgullece liderar equipos de expertos y colaborar con ellos para lograr objetivos ambiciosos.",
    "La investigación y el desarrollo son parte fundamental de la ingeniería aeroespacial. Me motiva contribuir a proyectos que puedan mejorar nuestra comprensión del universo y beneficiar a la humanidad.",
    "La ingeniería aeroespacial no es solo mi carrera, es mi pasión y mi estilo de vida. Siempre estoy buscando maneras de aplicar los principios de la ingeniería aeroespacial en mi vida cotidiana y en mi comunidad."];
  var randomIndex = Math.floor(Math.random() * textos.length);
  return textos[randomIndex];
}

// Seleccionar el elemento h5 y actualizar su contenido
var h5 = document.getElementById("quoteRandom");
h5.textContent = generarTexto();






