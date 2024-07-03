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


$(document).ready(function () {
    $("#quienes-somos").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});










