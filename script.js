$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        dots: true,
        arrows: false
        // Otras opciones y configuraciones según la documentación del plugin
    });

     // Agrega clase para activar la animación del texto después de que el documento esté cargado
     $('.animated-text').addClass('animated-text');
});