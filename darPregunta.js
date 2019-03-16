$(document).ready(function(){
//$("#Nav").css("visibility", "hidden");
  $("#respuestaCorrecta").click(function () {
       $(".r").css("visibility", "visible");
       $("#Nav").css("visibility", "visible");
       $( "#r" ).dialog();
   });
   $("#respuestaIncorrecta").click(function () {
        $(".r").css("visibility", "visible");
        $("#r").css("visibility", "visible");
    });


  var preguntas = ['Cuál es la forma más segura de llevar tus pertenencias en el SITP', 'Cuál cree qué es el momento más oportuno de hacer uso de su telefono celular'];
  var fotoCorrecta = ['./1Correcta.jpg', './2Correcta.jpg'];
  var fotoIncorrecta = ['./1Incorrecta.jpg', './2Incorrecta.jpg'];
  var resultado = ['TransmiConsejo: Te recomendamos portar todas tus pertenencias en un lugar donde puedas verlas.', 'TransmiConsejo: Recomendamos hacer uso de sus celular cuando las puertas de abordaje se encuentren cerradas, as&iacute evitaras ser victima de robos.'];
  var consejo = ['./recomendacion1.jpeg','./recomendacion2.jpeg'];
  var min=0;
  var max=2;
  var random =Math.floor(Math.random() * (+max - +min))  +min;
  if(random==1){
    $("#logo1").removeClass('logo1').addClass('logo1b');
    $("#logo2").removeClass('logo2').addClass('logo2b');
  }
  $("#respuestaCorrecta").attr('src', fotoCorrecta[random]);
  $("#respuestaEquivocada").attr('src', fotoIncorrecta[random]);
  $("#recomendacion").attr('src', consejo[random] );
  $("#resultado").html(resultado[random]);
  $("#pregunta").append(preguntas[random]);
});
