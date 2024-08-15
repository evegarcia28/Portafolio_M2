//Al hacer click en los botones 'Resumen Proyecto' redigirá a las páginas de los proyectos en Github
document.getElementById("buttonFancy").addEventListener("click", function() {
    window.open("https://github.com/Evelin-Garcia/fancybox-jquery", "_blank");
});

document.getElementById("buttonHuellitas").addEventListener("click", function() {
    window.open("https://github.com/Evelin-Garcia/abp-individual-ae4-boostrap-huellitas", "_blank");
});

document.getElementById("buttonMockup").addEventListener("click", function() {
    window.open("https://github.com/Evelin-Garcia/armado-web", "_blank");
});

document.getElementById("buttonReloj").addEventListener("click", function() {
    window.open("https://github.com/Evelin-Garcia/abp-individual_-reloj-fin-de-a-o", "_blank");
});

//Mostrar mensaje de recibido y limpiado de formulario al enviar un mensaje de contacto    
document.addEventListener('DOMContentLoaded', (event) => {
    const formulario = document.getElementById('miFormulario');
    const recibido = document.getElementById('recibido');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita el envío real del formulario y que se recargue la página(comportamiento predeterminado)

        // Muestra el mensaje de confirmación
        recibido.style.display = 'block';

        // Limpia los campos del formulario
        formulario.reset();
    });
});

//al hacer click en Aceptar desaparecerá el mensaje de recibido
function ocultarMensaje(){
    document.getElementById('recibido').style.display="none";
}