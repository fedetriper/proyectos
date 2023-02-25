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





const form = document.querySelector('form');
const enviarBtn = document.getElementById('enviar');

form.addEventListener('click', function(event) {
    console.log('Se ha presionado el botón "Enviar".'); 
  event.preventDefault();
  
  // Aquí es donde enviarías el formulario utilizando una llamada AJAX o un submit normal
  
  mostrarMensaje('¡Gracias por tu mensaje! Lo hemos recibido correctamente.');
  enviarBtn.disabled = true;
});

function mostrarMensaje(mensaje) {
  
    const myModal = document.getElementById('mensajeModal')
    const myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })
};


document.getElementById("contacto").addEventListener('click', function() {
    document.getElementById("paginaCV").style.display = 'none';
    document.getElementById("paginaContacto").style.display = 'block';
  });
 
    
  document.getElementById("about").addEventListener('click', function() {
    document.getElementById("paginaCV").style.display = 'block';
    document.getElementById("paginaContacto").style.display = 'none';
  });