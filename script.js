const form = document.getElementById("formContacto");
const mensaje = document.getElementById("mensajeExito");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const data = new FormData(form);

    fetch("/", {
        method: "POST",
        body: data
    })
    .then(() => {

        mensaje.style.display = "block";
        form.reset();

    })
    .catch(() => {

        alert("Hubo un error al enviar el formulario");

    });

});