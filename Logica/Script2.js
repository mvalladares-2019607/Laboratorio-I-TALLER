
document.addEventListener("DOMContentLoaded", function () {
    
    var contactForm = document.getElementById("contactForm");

    
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        enviarMensaje();
    });
});

function enviarMensaje() {

    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("email").value;
    var mensaje = document.getElementById("message").value;
    alert("Mensaje enviado con éxito. Te responderé lo antes posible.");

    
}
