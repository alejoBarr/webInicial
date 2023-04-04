$(document).ready(function() {
    $("#contact_form").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        message: "required"
      },
      messages: {
        name: "Por favor ingrese su nombre",
        email: {
          required: "Por favor ingrese su correo electrónico",
          email: "Por favor ingrese un correo electrónico válido"
        },
        message: "Por favor ingrese un mensaje"
      },
      
      submitHandler: function(form) {
    // mostrar el mensaje de alerta
    var alerta = $("<div></div>").addClass("alert alert-success").text("El mensaje se ha enviado correctamente.");
    $(form).before(alerta);
    
    // desvanecer y ocultar el mensaje después de 4 segundos
    setTimeout(function() {
      $(alerta).fadeOut("slow", function() {
        $(alerta).remove();
      });
    }, 4000);
  
  
        
        // redirigir a otra página después de 3 segundos
       /* setTimeout(function() {
          window.location.href = "nueva_pagina.html";
        }, 3000);
        */
        
        // o actualizar la página actual después de 1 segundo
        
        setTimeout(function() {
          location.reload();
        }, 1000);
        
      }
    });
  });
  