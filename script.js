function validateEmailAddress(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
      }
      function validate() {
      $("#result").text("");
      var emailaddress = $("#email").val();
      if (validateEmailAddress(emailaddress)) {
      $("#result").text(emailaddress + " es válido. Información de contacto extra: Celular: (602) 649-6821 y Mail: beverley.holland@example.com");
      $("#result").css("color", "green");
      } else {
      $("#result").text(emailaddress + " no es válido, por favor intente con otra dirección de correo");
      $("#result").css("color", "red");
      }
      return false;
      }
      $("#validate").bind("click", validate);