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

$(window).scroll(function(){
   

    if ($(this).scrollTop() > 8000) {
        $("#menu").removeClass("navbar");
       $('#menu').addClass("bg-interno");
      } else {
    
       $("#menu").removeClass("bg-interno");
       $('#menu').addClass("navbar");
      }

   });





