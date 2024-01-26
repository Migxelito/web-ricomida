// alerta del boton "enviar por correo"
$(document).ready(function () {
  $("#mail").click(function () {
      alert("El correo fue enviado correctamente...");
  });
});

// esconder el texto con hide al hacer click en el titulo de la card
$(document).ready(function(){
    $(".texto-esconder").click(function(){
    $(".texto").hide("slow");
    });
})

// mostrar el texto con show al hacer dobleclick en el titulo de la card
  $(document).ready(function(){
    $(".texto-esconder").dblclick(function(){
    $(".texto").show("slow");
    });
})


// cambio de color negro a color rojo del titulo INGREDIENTES y PREPARACION al hacer click

$(document).ready(function () {
  $('.roj').click(function () {
       $(this).css({
           "color": "red",
       });
   });
});


// para que se vea el tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


