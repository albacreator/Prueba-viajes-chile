$(document).ready(function () {
    $("#form-send").click(function (event) {
        event.preventDefault();
        alert("¡Formulario enviado!");
    });
});

$(document).ready(function () {
    $("p").dblclick(function () {
        $(this).fadeOut(2000);

    });
});







$(function () {
    $(window).scroll(function () {
      var navegador = $(".navbar");
      if ($(this).scrollTop() > 100) {
        navegador.css("background", "trasparent");
      } else {
        navegador.css("background", "none");
      }
    });
  });





